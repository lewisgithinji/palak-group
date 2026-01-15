# Add related-articles.js script to all article pages
import os

blog_dir = r'f:\Projects\palak\apps\palak-developers\blog'

# Get all HTML files except the main one
article_files = [
    'kenyas-construction-growth-2026.html',
    'green-building-certifications-rise.html',
    'westlands-real-estate-demand.html',
    'construction-tech-kenya.html',
    'affordable-housing-targets.html',
    'quality-control-practices.html',
    'sustainable-materials-kenya.html',
    'property-prices-stabilize.html',
    'safety-protocols-highrise.html'
]

script_to_add = '''
    <!-- Related Articles Script -->
    <script type="module" src="../src/scripts/related-articles.js"></script>'''

for filename in article_files:
    filepath = os.path.join(blog_dir, filename)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if script already exists
    if 'related-articles.js' in content:
        print(f"✓ {filename} already has related-articles script")
        continue
    
    # Find the navigation script tag and add related articles script after it
    if '<script src="../src/scripts/navigation.js"></script>' in content:
        # Old format (without type="module")
        content = content.replace(
            '<script src="../src/scripts/navigation.js"></script>',
            '<script src="../src/scripts/navigation.js"></script>' + script_to_add
        )
    elif '<script type="module" src="../src/scripts/navigation.js"></script>' in content:
        # New format (with type="module")
        content = content.replace(
            '<script type="module" src="../src/scripts/navigation.js"></script>',
            '<script type="module" src="../src/scripts/navigation.js"></script>' + script_to_add
        )
    else:
        print(f"✗ {filename} - Could not find navigation script")
        continue
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Added related-articles script to {filename}")

print("\n✅ All article pages updated!")
