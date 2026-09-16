import re

projects = [
    {"id": "luma", "title": "LUMA", "cat": "Branding / Identidad Visual", "filter": "branding", "type": "img", "src": "luma.jpg"},
    {"id": "nord", "title": "NORD", "cat": "Interfaz Web / UI", "filter": "ui", "type": "img", "src": "nord.jpg"},
    {"id": "vanta", "title": "VANTA", "cat": "Campaña de Social Media", "filter": "social branding ui motion", "type": "img", "src": "vanta.jpg"},
    {"id": "mono", "title": "MONO", "cat": "Diseño de Packaging", "filter": "packaging", "type": "img", "src": "mono.jpg"},
    {"id": "aura", "title": "AURA", "cat": "Diseño Editorial", "filter": "editorial", "type": "img", "src": "aura.jpg"},
    {"id": "kora", "title": "KORA", "cat": "Publicidad / Key Visual", "filter": "advertising", "type": "img", "src": "kora.jpg"},
    {"id": "nova", "title": "NOVA", "cat": "SaaS UI & Branding", "filter": "ui branding motion", "type": "img", "src": "nova.jpg"},
    {"id": "noir", "title": "NOIR", "cat": "Luxury Packaging", "filter": "packaging branding photo", "type": "img", "src": "noir.jpg"},
    {"id": "abstract", "title": "ABSTRACT", "cat": "Dirección de Arte 3D", "filter": "3d", "type": "img", "src": "abstract.jpg"},
    {"id": "lens", "title": "LENS", "cat": "Fotografía Editorial", "filter": "photo", "type": "img", "src": "lens.jpg"},
    {"id": "folio", "title": "FOLIO", "cat": "Diseño de Libro", "filter": "editorial", "type": "img", "src": "folio.jpg"},
    {"id": "botanica", "title": "BOTANICA", "cat": "Cosmética Orgánica", "filter": "packaging", "type": "img", "src": "botanica.jpg"},
    
    # Newly added images
    {"id": "sora", "title": "SORA", "cat": "Mobile App UI", "filter": "ui", "type": "img", "src": "sora.jpg.jpeg"},
    {"id": "nexa", "title": "NEXA", "cat": "Innovación Tecnológica", "filter": "branding", "type": "img", "src": "nexa.jpg.jpeg"},
    {"id": "alma", "title": "ALMA", "cat": "Cafetería Boutique", "filter": "branding", "type": "img", "src": "alma.jpg.jpeg"},
    {"id": "forma", "title": "FORMA", "cat": "Arquitectura", "filter": "branding", "type": "img", "src": "forma.jpg.jpeg"},
    {"id": "zenith", "title": "ZENITH", "cat": "Fintech Dashboard", "filter": "ui", "type": "img", "src": "zenith.jpg.jpeg"},
    {"id": "omnia", "title": "OMNIA", "cat": "Sistema de Diseño", "filter": "ui", "type": "img", "src": "omnia.jpg.jpeg"},
    {"id": "flow", "title": "FLOW", "cat": "Motion Graphics", "filter": "motion social", "type": "img", "src": "flow.jpg.jpeg", "play": True},
    {"id": "pulse", "title": "PULSE", "cat": "Campaña Deportiva", "filter": "social advertising", "type": "img", "src": "pulse.jpg.jpeg"},
    {"id": "glow", "title": "GLOW", "cat": "Lanzamiento Skincare", "filter": "social", "type": "img", "src": "glow.jpg.jpeg"},
    {"id": "arch", "title": "ARCH", "cat": "Revista de Diseño", "filter": "editorial", "type": "img", "src": "arch.jpg.jpeg"},
    {"id": "neon", "title": "NEON", "cat": "Campaña Digital", "filter": "advertising", "type": "img", "src": "neon.jpg.jpeg"},
    {"id": "athletica", "title": "ATHLETICA", "cat": "Publicidad Exterior", "filter": "advertising", "type": "img", "src": "athletica.jpeg"},
    {"id": "dynamic", "title": "DYNAMIC", "cat": "Product Reel", "filter": "motion", "type": "img", "src": "dynamic.jpg.jpeg", "play": True},
    {"id": "dimension", "title": "DIMENSION", "cat": "Render 3D", "filter": "3d", "type": "img", "src": "dimension.jpg.jpeg"},
    {"id": "raw", "title": "RAW", "cat": "Fotografía de Producto", "filter": "photo", "type": "img", "src": "raw.jpg.jpeg"}
]

html_output = ""
for i, p in enumerate(projects):
    html_output += f"""                    <!-- Project {i+1}: {p['title']} -->
                    <div class="design-gallery-item filter-item {p['filter']} reveal-up open-lightbox-btn" data-project="{p['id']}">
                        <img src="assets/{p['src']}" alt="{p['title']} {p['cat']}" loading="lazy">\n"""
    if p.get("play"):
        html_output += f"""                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:60px; height:60px; background:rgba(255,255,255,0.1); backdrop-filter:blur(5px); border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.2); pointer-events:none;"><svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>\n"""
        
    html_output += f"""                        <div class="design-gallery-overlay">
                            <span class="modal-badge" style="margin-bottom: 0.5rem;">Proyecto Conceptual</span>
                            <h3 class="gallery-item-title">{p['title']}</h3>
                            <p class="gallery-item-cat">{p['cat']}</p>
                            <span class="view-project-link mt-2">Ver Proyecto &rarr;</span>
                        </div>
                    </div>\n"""

js_data = "    const designData = {\n"
for p in projects:
    desc = "Exploración de diseño conceptual y dirección de arte."
    tools = "Photoshop, Figma, Illustrator"
    if p["id"] == "luma":
        desc = "Identidad de marca conceptual para estilo de vida de lujo, enfocada en minimalismo, tonos cálidos y tipografía elegante."
    elif p["id"] == "nord":
        desc = "Diseño de interfaz web moderno y minimalista para un estudio de arquitectura. Layout a pantalla completa, elegante y brutalista."
    elif p["id"] == "vanta":
        desc = "Campaña de redes sociales oscura y futurista para una marca de tecnología. Acentos de neón brillante y estética cyber."
    elif p["id"] == "nova":
        desc = "Concepto de interfaz futurista modo oscuro para un dashboard de analítica SaaS, combinado con motion graphics."
    elif p["id"] == "noir":
        desc = "Dirección de arte y diseño de packaging para una fragancia de lujo, con estilo brutalista y minimalista."
    
    img_html = f'<img src="assets/{p["src"]}" alt="{p["title"]}">'
    
    js_data += f"""        '{p['id']}': {{
            title: '{p['title']}',
            category: '{p['cat']}',
            desc: '{desc}',
            tools: '{tools}',
            imgHtml: `{img_html}`
        }},\n"""
js_data += "    };"


# Inject into index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()
pattern = re.compile(r'(<div class="design-gallery-grid" id="design-grid">).*?(                </div>\s+</div>\s+</section>)', re.DOTALL)
updated_html = pattern.sub(r'\1\n' + html_output + r'\2', index_html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(updated_html)

# Inject into script.js
with open('script.js', 'r', encoding='utf-8') as f:
    script_js = f.read()
pattern_js = re.compile(r'(    const designData = \{).*?(    \};\n)', re.DOTALL)
updated_js = pattern_js.sub(js_data + '\n', script_js)
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(updated_js)

print("Updated HTML and JS successfully.")
