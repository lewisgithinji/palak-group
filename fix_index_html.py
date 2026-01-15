# Final fix for index.html broken script tags
filepath = r'f:\Projects\palak\apps\palak-developers\index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the problematic section and fix it
# The issue is there's HTML comments inside a script tag
# Lines 1127-1138, we need to close the Swiper script properly

# Find and replace the broken section
broken =  """        });

        // Sticky Header Behavior

        <!-- Homepage Projects Carousel Script -->
        <script type="module" src="/src/scripts/home-projects.js"></script>

    <!-- Services Carousel Script -->
    <script type="module" src="/src/scripts/home-services.js"></script>

    <!-- Navigation JavaScript -->
    <script type="module" src="/src/scripts/navigation.js"></script>"""

fixed = """        });
    </script>

    <!-- Homepage Projects Carousel Script -->
    <script type="module" src="/src/scripts/home-projects.js"></script>

    <!-- Services Carousel Script -->
    <script type="module" src="/src/scripts/home-services.js"></script>

    <!-- Navigation JavaScript -->
    <script type="module" src="/src/scripts/navigation.js"></script>"""

content = content.replace(broken, fixed)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Fixed index.html script tags")
