# Add footer to blog.html
blogfile = r'f:\Projects\palak\apps\palak-developers\blog.html'

# Read the footer from index.html
with open(r'f:\Projects\palak\apps\palak-developers\index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Extract footer (from <!-- Footer --> to </footer>)
footer_start = index_content.find('    <!-- Footer -->\n    <footer class="footer-buildex">')
footer_end = index_content.find('    </footer>', footer_start) + len('    </footer>')
footer_html = index_content[footer_start:footer_end] + '\n\n'

# Read blog.html
with open(blogfile, 'r', encoding='utf-8') as f:
    blog_content = f.read()

# Find where to insert (before <!-- Navigation JavaScript -->)
insert_point = blog_content.find('    <!-- Navigation JavaScript -->')

# Insert footer
new_content = blog_content[:insert_point] + footer_html + blog_content[insert_point:]

# Write back
with open(blogfile, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✓ Footer added to blog.html")
