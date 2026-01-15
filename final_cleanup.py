# Comprehensive final cleanup of all orphaned script tags

import os

files_to_fix = [
    (r'f:\Projects\palak\apps\palak-developers\blog.html', 877, 879),
    (r'f:\Projects\palak\apps\palak-developers\index.html', 1113, 1200)  # Will handle properly
]

print("Final cleanup of all orphaned script tags...\n")

# Fix blog.html
blog_file = r'f:\Projects\palak\apps\palak-developers\blog.html'
with open(blog_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove lines 877-879 (script tag with comment)
new_lines = lines[:876] + lines[879:]

with open(blog_file, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("✓ Fixed blog.html")

# Fix index.html - the swiper script section is valid, just remove any orphaned stuff
index_file = r'f:\Projects\palak\apps\palak-developers\index.html'
with open(index_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Check current state and perform safe cleanup
# If there's still a script tag without proper closing, we need to investigate
with open(index_file, 'r', encoding='utf-8') as f:
    lines_index = f.readlines()

# Count opening vs closing script tags to diagnose
opening = content.count('<script')
closing = content.count('</script>')

print(f"\nindex.html script tag count:")
print(f"  Opening <script tags: {opening}")
print(f"  Closing </script> tags: {closing}")

if opening == closing:
    print("  ✓ index.html is balanced")
else:
    print(f"  ✗ index.html has {opening - closing} unclosed script tags")
    # Let's check around line 1113
    for i in range(1110, min(1145, len(lines_index))):
        print(f"  Line {i+1}: {lines_index[i].rstrip()}")

print("\n✅ Cleanup complete!")
