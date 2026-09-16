import re

# Fix index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# The block to remove:
#                     <!-- Project 28: VOYAGE -->
#                     <div class="design-gallery-item filter-item photo reveal-up open-lightbox-btn" data-project="voyage">
#                         <img src="assets/voyage.jpg" alt="VOYAGE Lifestyle Photography" loading="lazy">
#                         <div class="design-gallery-overlay">
#                             <span class="modal-badge" style="margin-bottom: 0.5rem;">Proyecto Conceptual</span>
#                             <h3 class="gallery-item-title">VOYAGE</h3>
#                             <p class="gallery-item-cat">Fotografía Lifestyle</p>
#                             <span class="view-project-link mt-2">Ver Proyecto &rarr;</span>
#                         </div>
#                     </div>

# Removing it everywhere:
pattern = re.compile(r'(\s*<!-- Project 28: VOYAGE -->\s*<div class="design-gallery-item filter-item photo reveal-up open-lightbox-btn" data-project="voyage">\s*<img src="assets/voyage.jpg" alt="VOYAGE Lifestyle Photography" loading="lazy">\s*<div class="design-gallery-overlay">\s*<span class="modal-badge" style="margin-bottom: 0.5rem;">Proyecto Conceptual</span>\s*<h3 class="gallery-item-title">VOYAGE</h3>\s*<p class="gallery-item-cat">Fotografía Lifestyle</p>\s*<span class="view-project-link mt-2">Ver Proyecto &rarr;</span>\s*</div>\s*</div>)', re.DOTALL | re.IGNORECASE)

# Some characters might be mangled like Fotografía -> Fotografa
pattern = re.compile(r'\s*<!-- Project 28: VOYAGE -->.*?Ver Proyecto &rarr;</span>\s*</div>\s*</div>', re.DOTALL)
clean_html = pattern.sub('', index_html)

# Add it BACK in the right place:
# Find the exact place to put it: at the end of designData items.
# Let's find "Project 27: RAW" and its closing div
insertion_pattern = re.compile(r'(<!-- Project 27: RAW -->.*?Ver Proyecto &rarr;</span>\s*</div>\s*</div>)', re.DOTALL)

new_html_block = """
                    <!-- Project 28: VOYAGE -->
                    <div class="design-gallery-item filter-item photo reveal-up open-lightbox-btn" data-project="voyage">
                        <img src="assets/voyage.jpg" alt="VOYAGE Lifestyle Photography" loading="lazy">
                        <div class="design-gallery-overlay">
                            <span class="modal-badge" style="margin-bottom: 0.5rem;">Proyecto Conceptual</span>
                            <h3 class="gallery-item-title">VOYAGE</h3>
                            <p class="gallery-item-cat">Fotografía Lifestyle</p>
                            <span class="view-project-link mt-2">Ver Proyecto &rarr;</span>
                        </div>
                    </div>"""

fixed_html = insertion_pattern.sub(r'\1' + new_html_block, clean_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(fixed_html)

# Fix script.js
with open('script.js', 'r', encoding='utf-8') as f:
    script_js = f.read()

# Remove all VOYAGE blocks
pattern_js = re.compile(r"\s*'voyage': \{\s*title: 'VOYAGE',\s*category: 'Fotografía Lifestyle / Dirección de Arte',\s*desc: 'Dirección de arte y fotografía de producto para una marca de estilo de vida de lujo, destacando accesorios de viaje y relojería fina.',\s*tools: 'Lightroom, Capture One, Photoshop',\s*imgHtml: `<img src=\"assets/voyage\.jpg\" alt=\"VOYAGE\">`\s*\},", re.DOTALL)
# Due to mangled text, let's just use wildcard for the middle
pattern_js = re.compile(r"\s*'voyage': \{.*?imgHtml: `<img src=\"assets/voyage\.jpg\" alt=\"VOYAGE\">`\s*\},", re.DOTALL)
clean_js = pattern_js.sub('', script_js)

new_js_block = """        'voyage': {
            title: 'VOYAGE',
            category: 'Fotografía Lifestyle / Dirección de Arte',
            desc: 'Dirección de arte y fotografía de producto para una marca de estilo de vida de lujo, destacando accesorios de viaje y relojería fina.',
            tools: 'Lightroom, Capture One, Photoshop',
            imgHtml: `<img src="assets/voyage.jpg" alt="VOYAGE">`
        },
"""

insertion_pattern_js = re.compile(r"('raw': \{.*?imgHtml: `<img src=\"assets/raw\.jpg\.jpeg\" alt=\"RAW\">`\s*\},\n)", re.DOTALL)
fixed_js = insertion_pattern_js.sub(r'\1' + new_js_block, clean_js)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(fixed_js)

print("Files fixed successfully.")
