# Script to standardize navigation across all pages
import os
import re

base_dir = r'f:\Projects\palak\apps\palak-developers'

# Main pages to update
main_pages = [
    'index.html',
    'about.html',
    'services.html',
    'projects.html',
    'blog.html',
    'contact.html',
    'faq.html'
]

# Blog article pages
blog_articles = [
    'blog/kenyas-construction-growth-2026.html',
    'blog/green-building-certifications-rise.html',
    'blog/westlands-real-estate-demand.html',
    'blog/construction-tech-kenya.html',
    'blog/affordable-housing-targets.html',
    'blog/quality-control-practices.html',
    'blog/sustainable-materials-kenya.html',
    'blog/property-prices-stabilize.html',
    'blog/safety-protocols-highrise.html'
]

all_pages = main_pages + blog_articles

print("=" * 60)
print("NAVIGATION STANDARDIZATION SCRIPT")
print("=" * 60)

# Step 1: Update Help/Support/FAQs links
print("\n[STEP 1] Updating Help/Support/FAQs links...")

for page in main_pages:
    filepath = os.path.join(base_dir, page)
    
    if not os.path.exists(filepath):
        print(f"  ✗ {page} - File not found")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Update Help link - change # to contact.html
    content = re.sub(
        r'(<li><a href=")[#](">\s*Help\s*</a></li>)',
        r'\1contact.html\2',
        content
    )
    
    # Update Support link - change # to contact.html
    content = re.sub(
        r'(<li><a href=")[#](">\s*Support\s*</a></li>)',
        r'\1contact.html\2',
        content
    )
    
    # Update Faqs link - ensure it points to faq.html
    content = re.sub(
        r'(<li><a href=")[#](">\s*Faqs\s*</a></li>)',
        r'\1faq.html\2',
        content
    )
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ {page} - Updated Help/Support/FAQs links")
    else:
        print(f"  ✓ {page} - Already correct")

# Step 2: Remove duplicate scroll JavaScript
print("\n[STEP 2] Removing duplicate inline scroll JavaScript...")

scroll_pattern = re.compile(
    r'<script>\s*'
    r'(?:[\s\S]*?)'
    r'const navigationWrapper = document\.querySelector\(\'\.navigation-wrapper\'\);'
    r'(?:[\s\S]*?)'
    r'window\.addEventListener\(\'scroll\'[\s\S]*?'
    r'}\);'
    r'\s*</script>',
    re.MULTILINE | re.DOTALL
)

for page in all_pages:
    filepath = os.path.join(base_dir, page)
    
    if not os.path.exists(filepath):
        print(f"  ✗ {page} - File not found")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Check for inline scroll JavaScript
    if 'const navigationWrapper = document.querySelector' in content and 'window.addEventListener(\'scroll\'' in content:
        # Remove the inline scroll script but keep other inline scripts (like blog card hover)
        # We need to be more surgical here
        
        # Find the script block with scroll logic
        lines = content.split('\n')
        new_lines = []
        skip_script = False
        in_script_block = False
        script_start = -1
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Detect script tag start
            if '<script>' in line and not skip_script:
                script_start = i
                in_script_block = True
            
            # Check if this script contains navigation scroll logic
            if in_script_block and 'const navigationWrapper' in line:
                # This is the scroll script - we'll skip this entire block
                skip_script = True
            
            # Detect script tag end
            if '</script>' in line and in_script_block:
                if skip_script:
                    # Skip all lines from script_start to here
                    skip_script = False
                    in_script_block = False
                    script_start = -1
                    i += 1
                    continue
                else:
                    in_script_block = False
                    script_start = -1
            
            if not skip_script or not in_script_block:
                if skip_script and not in_script_block:
                    skip_script = False
                    i += 1
                    continue
                new_lines.append(line)
            
            i += 1
        
        content = '\n'.join(new_lines)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ {page} - Removed inline scroll JavaScript")
    else:
        print(f"  ⊙ {page} - No inline scroll script found")

print("\n" + "=" * 60)
print("✅ NAVIGATION STANDARDIZATION COMPLETE!")
print("=" * 60)
print("\nSummary:")
print("- Updated Help/Support links to point to contact.html")
print("- Updated FAQs links to point to faq.html")
print("- Removed duplicate inline scroll JavaScript from all pages")
print("- Scroll effects now centralized in navigation.js")
