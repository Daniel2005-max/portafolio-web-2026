import re

with open('output_html.txt', 'r', encoding='utf-8') as f:
    new_html = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Replace the gallery block
# from <div class="design-gallery-grid" id="design-grid"> to the closing </div> of the grid
pattern = re.compile(r'(<div class="design-gallery-grid" id="design-grid">).*?(                </div>\s+</div>\s+</section>)', re.DOTALL)
replacement = r'\1\n' + new_html + r'\2'

updated_html = pattern.sub(replacement, index_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(updated_html)

print("HTML inyectado correctamente.")

# Now for script.js
with open('output_js.txt', 'r', encoding='utf-8') as f:
    new_js = f.read()

with open('script.js', 'r', encoding='utf-8') as f:
    script_js = f.read()

pattern_js = re.compile(r'(    const designData = \{).*?(    \};\n)', re.DOTALL)
replacement_js = new_js + '\n'

updated_js = pattern_js.sub(replacement_js, script_js)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(updated_js)

print("JS inyectado correctamente.")
