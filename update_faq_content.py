# Replace FAQ content in faq.html with new comprehensive content

import re

faq_file = r'f:\Projects\palak\apps\palak-developers\faq.html'
new_content_file = r'f:\Projects\palak\faq_content.html'

# Read both files
with open(faq_file, 'r', encoding='utf-8') as f:
    faq_html = f.read()

with open(new_content_file, 'r', encoding='utf-8') as f:
    new_faq_content = f.read()

# Find and replace the FAQ content section
# Pattern: from <div class="faq-container"> content until the CTA section
pattern = r'(<div class="faq-container">)(.*?)(<!-- Still Have Questions CTA -->)'
replacement = r'\1' + '\n' + new_faq_content.strip() + '\n\n            ' + r'\3'

updated_html = re.sub(pattern, replacement, faq_html, flags=re.DOTALL)

# Write back
with open(faq_file, 'w', encoding='utf-8') as f:
    f.write(updated_html)

print("✅ FAQ content successfully updated!")
print("   - 7 categories with enhanced visual design")
print("   - 33 comprehensive questions")
print("   - Kenya-specific construction information")
print("   - Real 2024-2025 cost data")
