import re

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove the "Proyectos de Diseño" section
# Starts at <!-- DESIGN PROJECTS GALLERY -->
# Ends before <section id="tools-stack"
html = re.sub(r'\s*<!-- DESIGN PROJECTS GALLERY -->\s*<section id="design-projects".*?(?=\s*<section id="tools-stack")', '', html, flags=re.DOTALL)

# 2. Remove the "DESIGN LIGHTBOX MODAL"
html = re.sub(r'\s*<!-- DESIGN LIGHTBOX MODAL -->\s*<div id="design-lightbox-modal".*?</div>\s*</div>\s*</div>\s*</div>', '', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# Update script.js
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Remove Design Projects Filter Logic
js = re.sub(r'\s*// --- Design Projects Filter Logic ---.*?(?=// --- Design Lightbox Logic ---)', '\n\n    ', js, flags=re.DOTALL)

# 2. Remove Design Lightbox Logic
# It starts with // --- Design Lightbox Logic --- and goes until the end of the DOMContentLoaded block
js = re.sub(r'\s*// --- Design Lightbox Logic ---.*?\}\n\s*\}\);\n*$', '\n});\n', js, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Removed 'Proyectos de Diseño' section successfully.")
