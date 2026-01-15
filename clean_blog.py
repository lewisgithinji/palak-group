# Clean blog.html by removing orphaned static content
with open(r'f:\Projects\palak\apps\palak-developers\blog.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Keep lines 0-575 (everything up to and including the main section close)
# Skip lines 576-1043 (all the orphaned garbage)  
# Keep lines 1044-end (scripts and closing tags)
clean_lines = lines[0:576] + lines[1044:]

with open(r'f:\Projects\palak\apps\palak-developers\blog.html', 'w', encoding='utf-8') as f:
    f.writelines(clean_lines)

print("✓ blog.html cleaned successfully!")
print(f"Removed {1044-576} lines of orphaned content")
