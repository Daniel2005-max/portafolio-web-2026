import json

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
    
    # CSS Placeholders
    {"id": "sora", "title": "SORA", "cat": "Mobile App UI", "filter": "ui", "type": "css", "bg": "linear-gradient(135deg, #f0f0f5, #e0e5ec)", "color": "rgba(0,0,0,0.04)"},
    {"id": "nexa", "title": "NEXA", "cat": "Innovación Tecnológica", "filter": "branding", "type": "css", "bg": "linear-gradient(135deg, #050b14, #122238)", "color": "rgba(255,255,255,0.05)"},
    {"id": "alma", "title": "ALMA", "cat": "Cafetería Boutique", "filter": "branding", "type": "css", "bg": "linear-gradient(135deg, #f2ebe3, #d9cec1)", "color": "rgba(100,60,40,0.05)"},
    {"id": "forma", "title": "FORMA", "cat": "Arquitectura", "filter": "branding", "type": "css", "bg": "linear-gradient(135deg, #111, #222)", "color": "rgba(255,255,255,0.03)"},
    {"id": "zenith", "title": "ZENITH", "cat": "Fintech Dashboard", "filter": "ui", "type": "css", "bg": "linear-gradient(135deg, #0d1b2a, #1b263b)", "color": "rgba(255,255,255,0.03)"},
    {"id": "omnia", "title": "OMNIA", "cat": "Sistema de Diseño", "filter": "ui", "type": "css", "bg": "linear-gradient(135deg, #2b2d42, #8d99ae)", "color": "rgba(255,255,255,0.08)"},
    {"id": "flow", "title": "FLOW", "cat": "Motion Graphics", "filter": "motion social", "type": "css", "bg": "linear-gradient(135deg, #ff0055, #220033)", "color": "rgba(255,255,255,0.05)", "play": True},
    {"id": "pulse", "title": "PULSE", "cat": "Campaña Deportiva", "filter": "social advertising", "type": "css", "bg": "linear-gradient(135deg, #ff4e00, #ec9f05)", "color": "rgba(255,255,255,0.1)"},
    {"id": "glow", "title": "GLOW", "cat": "Lanzamiento Skincare", "filter": "social", "type": "css", "bg": "linear-gradient(135deg, #ffcbf2, #f3c4fb)", "color": "rgba(0,0,0,0.05)"},
    {"id": "arch", "title": "ARCH", "cat": "Revista de Diseño", "filter": "editorial", "type": "css", "bg": "linear-gradient(135deg, #e5e5e5, #ffffff)", "color": "rgba(0,0,0,0.04)"},
    {"id": "neon", "title": "NEON", "cat": "Campaña Digital", "filter": "advertising", "type": "css", "bg": "linear-gradient(135deg, #0a0a0a, #00ffcc)", "color": "rgba(0,0,0,0.1)"},
    {"id": "athletica", "title": "ATHLETICA", "cat": "Publicidad Exterior", "filter": "advertising", "type": "css", "bg": "linear-gradient(135deg, #d90429, #ef233c)", "color": "rgba(255,255,255,0.05)"},
    {"id": "dynamic", "title": "DYNAMIC", "cat": "Product Reel", "filter": "motion", "type": "css", "bg": "linear-gradient(135deg, #4361ee, #3a0ca3)", "color": "rgba(255,255,255,0.05)", "play": True},
    {"id": "dimension", "title": "DIMENSION", "cat": "Render 3D", "filter": "3d", "type": "css", "bg": "linear-gradient(135deg, #7209b7, #f72585)", "color": "rgba(255,255,255,0.05)"},
    {"id": "raw", "title": "RAW", "cat": "Fotografía de Producto", "filter": "photo", "type": "css", "bg": "linear-gradient(135deg, #212529, #343a40)", "color": "rgba(255,255,255,0.03)"}
]

html_output = ""
for i, p in enumerate(projects):
    html_output += f"""                    <!-- Project {i+1}: {p['title']} -->
                    <div class="design-gallery-item filter-item {p['filter']} reveal-up open-lightbox-btn" data-project="{p['id']}">
"""
    if p["type"] == "img":
        html_output += f"""                        <img src="assets/{p['src']}" alt="{p['title']} {p['cat']}" loading="lazy">\n"""
        if p.get("play"):
            html_output += f"""                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:60px; height:60px; background:rgba(255,255,255,0.1); backdrop-filter:blur(5px); border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.2);"><svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>\n"""
    else:
        html_output += f"""                        <div style="background: {p['bg']}; display: flex; align-items: center; justify-content: center; min-height: 400px; width: 100%; position:relative; overflow:hidden;">
                            <div style="position:absolute; width: 150%; height: 150%; background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%); pointer-events: none;"></div>
                            <h2 style="color: {p['color']}; font-size: 5rem; letter-spacing: 10px; font-weight: 800; transform: rotate(-5deg); pointer-events: none;">{p['title']}</h2>
"""
        if p.get("play"):
            html_output += f"""                            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:60px; height:60px; background:rgba(0,0,0,0.2); backdrop-filter:blur(5px); border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.2);"><svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>\n"""
        html_output += "                        </div>\n"
        
    html_output += f"""                        <div class="design-gallery-overlay">
                            <span class="modal-badge" style="margin-bottom: 0.5rem;">Proyecto Conceptual</span>
                            <h3 class="gallery-item-title">{p['title']}</h3>
                            <p class="gallery-item-cat">{p['cat']}</p>
                            <span class="view-project-link mt-2">Ver Proyecto &rarr;</span>
                        </div>
                    </div>\n"""

print("--- HTML OUTPUT ---")
print(html_output)

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
    
    img_html = ""
    if p["type"] == "img":
        img_html = f'<img src="assets/{p["src"]}" alt="{p["title"]}">'
    else:
        img_html = f'<div class="css-placeholder" style="background: {p["bg"]}; display:flex; align-items:center; justify-content:center; min-height:500px; position:relative; overflow:hidden; border-radius:12px;"><div style="position:absolute; width: 150%; height: 150%; background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%); pointer-events: none;"></div><h2 style="color: {p["color"]}; font-size: 8rem; letter-spacing: 20px; font-weight: 800; transform: rotate(-5deg); pointer-events:none;">{p["title"]}</h2></div>'
    
    js_data += f"""        '{p['id']}': {{
            title: '{p['title']}',
            category: '{p['cat']}',
            desc: '{desc}',
            tools: '{tools}',
            imgHtml: `{img_html}`
        }},\n"""
js_data += "    };"

with open('output_html.txt', 'w', encoding='utf-8') as f:
    f.write(html_output)
    
with open('output_js.txt', 'w', encoding='utf-8') as f:
    f.write(js_data)

print("Archivos guardados.")
