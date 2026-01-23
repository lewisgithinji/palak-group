"""
Script to replace SVG logos with PNG logos in all blog article HTML files
"""

import re
import os

# Define the paths
BLOG_PATH = r"f:\Projects\palak\apps\palak-developers\blog"

# Get all HTML files in blog directory
HTML_FILES = [f for f in os.listdir(BLOG_PATH) if f.endswith('.html')]

# Header logo pattern (SVG to PNG)
HEADER_PATTERN_OLD = r'<div class="logo-icon">\s*<svg[^>]*>.*?</svg>\s*</div>\s*<span class="logo-text">Palak Developers</span>'
HEADER_REPLACEMENT = '<img src="../public/images/palak-logo.png" alt="Palak Developers" class="logo-img">'

# Footer logo pattern (SVG to PNG) 
FOOTER_PATTERN_OLD = r'<div class="logo-icon-footer">\s*<svg[^>]*>.*?</svg>\s*</div>\s*<span class="logo-text-footer">Palak Developers</span>'
FOOTER_REPLACEMENT = '<img src="../public/images/palak-logo.png" alt="Palak Developers" class="logo-img-footer">'

def update_html_file(filepath):
    """Update a single HTML file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace header logo
        content = re.sub(HEADER_PATTERN_OLD, HEADER_REPLACEMENT, content, flags=re.DOTALL)
        
        # Replace footer logo
        content = re.sub(FOOTER_PATTERN_OLD, FOOTER_REPLACEMENT, content, flags=re.DOTALL)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated: {os.path.basename(filepath)}")
        return True
    except Exception as e:
        print(f"✗ Error updating {os.path.basename(filepath)}: {e}")
        return False

def main():
    """Main function"""
    success_count = 0
    
    for html_file in HTML_FILES:
        filepath = os.path.join(BLOG_PATH, html_file)
        if update_html_file(filepath):
            success_count +=1
    
    print(f"\n{success_count}/{len(HTML_FILES)} blog files updated successfully")

if __name__ == "__main__":
    main()
