/**
 * Form Handler for Palak Developers
 * Handles contact form submissions with validation and Formspree integration
 */

// Formspree endpoint - REPLACE WITH YOUR ACTUAL FORMSPREE ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID_HERE';

/**
 * Initialize all forms on the page
 */
export function initForms() {
  // Main contact forms
  const contactForms = document.querySelectorAll('#contact-form, .contact-form-buildex');
  contactForms.forEach(form => {
    if (form) {
      setupFormSubmission(form);
      setupFormValidation(form);
    }
  });

  // Newsletter forms
  const newsletterForms = document.querySelectorAll('.footer-newsletter-form, .sidebar-newsletter-form');
  newsletterForms.forEach(form => {
    if (form) {
      setupNewsletterSubmission(form);
    }
  });
}

/**
 * Setup form submission handler
 */
function setupFormSubmission(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form elements
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusDiv = getOrCreateStatusDiv(form);

    // Validate form
    if (!validateForm(form)) {
      showStatus(statusDiv, 'Please fill in all required fields correctly.', 'error');
      return;
    }

    // Check privacy checkbox if it exists
    const privacyCheckbox = form.querySelector('input[name="privacy"]');
    if (privacyCheckbox && !privacyCheckbox.checked) {
      showStatus(statusDiv, 'Please accept the privacy policy to continue.', 'error');
      return;
    }

    // Disable submit button
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      // Prepare form data
      const formData = new FormData(form);

      // Send to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        showStatus(statusDiv, 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
        form.reset();

        // Track conversion (if analytics is available)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submission', {
            'event_category': 'Contact',
            'event_label': 'Contact Form',
            'value': 1
          });
        }
      } else {
        // Error from Formspree
        const data = await response.json();
        showStatus(statusDiv, data.error || 'Oops! There was a problem submitting your form. Please try again.', 'error');
      }
    } catch (error) {
      // Network error
      showStatus(statusDiv, 'Network error. Please check your connection and try again.', 'error');
      console.error('Form submission error:', error);
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

/**
 * Setup newsletter form submission
 */
function setupNewsletterSubmission(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!emailInput || !emailInput.value || !validateEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    const originalBtnText = submitBtn ? submitBtn.textContent : 'Subscribe';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';
    }

    try {
      const formData = new FormData();
      formData.append('email', emailInput.value);
      formData.append('_subject', 'New Newsletter Subscription');

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you for subscribing! You\'ll receive our latest updates.');
        form.reset();
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
      console.error('Newsletter subscription error:', error);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
}

/**
 * Setup real-time form validation
 */
function setupFormValidation(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

  inputs.forEach(input => {
    // Validate on blur
    input.addEventListener('blur', () => {
      validateField(input);
    });

    // Clear error on input
    input.addEventListener('input', () => {
      clearFieldError(input);
    });
  });
}

/**
 * Validate entire form
 */
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Validate individual field
 */
function validateField(field) {
  const value = field.value.trim();
  const fieldType = field.type;
  const fieldName = field.name;

  // Clear previous error
  clearFieldError(field);

  // Required field check
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'This field is required');
    return false;
  }

  // Email validation
  if (fieldType === 'email' && value && !validateEmail(value)) {
    showFieldError(field, 'Please enter a valid email address');
    return false;
  }

  // Phone validation (basic)
  if (fieldType === 'tel' && value && !validatePhone(value)) {
    showFieldError(field, 'Please enter a valid phone number');
    return false;
  }

  // Name validation (at least 2 characters)
  if (fieldName === 'name' && value && value.length < 2) {
    showFieldError(field, 'Name must be at least 2 characters');
    return false;
  }

  // Message validation (at least 10 characters)
  if (fieldName === 'message' && value && value.length < 10) {
    showFieldError(field, 'Message must be at least 10 characters');
    return false;
  }

  return true;
}

/**
 * Show field error
 */
function showFieldError(field, message) {
  field.classList.add('error');
  field.setAttribute('aria-invalid', 'true');

  // Create or update error message
  let errorDiv = field.parentElement.querySelector('.field-error');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.setAttribute('role', 'alert');
    field.parentElement.appendChild(errorDiv);
  }
  errorDiv.textContent = message;
}

/**
 * Clear field error
 */
function clearFieldError(field) {
  field.classList.remove('error');
  field.removeAttribute('aria-invalid');

  const errorDiv = field.parentElement.querySelector('.field-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}

/**
 * Get or create status div for form messages
 */
function getOrCreateStatusDiv(form) {
  let statusDiv = form.querySelector('.form-status');
  if (!statusDiv) {
    statusDiv = document.createElement('div');
    statusDiv.className = 'form-status';
    statusDiv.setAttribute('role', 'alert');
    statusDiv.setAttribute('aria-live', 'polite');
    form.appendChild(statusDiv);
  }
  return statusDiv;
}

/**
 * Show form status message
 */
function showStatus(statusDiv, message, type) {
  statusDiv.textContent = message;
  statusDiv.className = `form-status ${type}`;
  statusDiv.style.display = 'block';

  // Auto-hide after 10 seconds for success messages
  if (type === 'success') {
    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 10000);
  }
}

/**
 * Validate email format
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

/**
 * Validate phone format (basic - accepts various formats)
 */
function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 13;
}

// Initialize forms when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initForms);
} else {
  initForms();
}
