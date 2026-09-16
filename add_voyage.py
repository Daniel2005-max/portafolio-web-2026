import re

# Add HTML
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

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
                    </div>
"""

# Insert before the closing div of the grid
pattern = re.compile(r'(                </div>\s*</div>\s*</section>)', re.DOTALL)
updated_html = pattern.sub(new_html_block + r'\1', index_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(updated_html)

# Add JS
with open('script.js', 'r', encoding='utf-8') as f:
    script_js = f.read()

new_js_block = """        'voyage': {
            title: 'VOYAGE',
            category: 'Fotografía Lifestyle / Dirección de Arte',
            desc: 'Dirección de arte y fotografía de producto para una marca de estilo de vida de lujo, destacando accesorios de viaje y relojería fina.',
            tools: 'Lightroom, Capture One, Photoshop',
            imgHtml: `<img src="assets/voyage.jpg" alt="VOYAGE">`
        },
"""

pattern_js = re.compile(r'(    \};\n)', re.DOTALL)
updated_js = pattern_js.sub(new_js_block + r'\1', script_js)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(updated_js)

print("Project VOYAGE added successfully.")
