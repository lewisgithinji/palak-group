# Fix orphaned script tags in all HTML files
import os
import re

base_dir = r'f:\Projects\palak\apps\palak-developers'

files_with_orphaned_tags = [
    'projects.html',
    'index.html',
    'faq.html',
    'contact.html',
    'blog.html',
    'about.html',
    'blog/westlands-real-estate-demand.html',
    'blog/sustainable-materials-kenya.html',
    'blog/safety-protocols-highrise.html',
    'blog/quality-control-practices.html',
    'blog/property-prices-stabilize.html',
    'blog/kenyas-construction-growth-2026.html',
    'blog/green-building-certifications-rise.html',
    'blog/construction-tech-kenya.html',
    'blog/affordable-housing-targets.html'
]

print("Fixing orphaned <script> tags...")

for filename in files_with_orphaned_tags:
    filepath = os.path.join(base_dir, filename)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to find orphaned <script> tag followed immediately by </body>
    # This means: <script> with optional whitespace then </body>
    pattern = r'<script>\s*\n\s*</body>'
    
    if re.search(pattern, content):
        # Remove the orphaned script tag
        content = re.sub(pattern, '</body>', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"  ✓ Fixed {filename}")
    else:
        print(f"  ⊙ {filename} - No orphaned tag found")

print("\n✅ All orphaned script tags fixed!")
