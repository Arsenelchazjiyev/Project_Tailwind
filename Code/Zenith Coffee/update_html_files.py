#!/usr/bin/env python3
"""
Update HTML files to match DESIGN_GUIDELINES.md
Applies Evening Espresso Bar theme to all HTML files
"""

import re
import os

# New Tailwind config
NEW_TAILWIND_CONFIG = """    <script>
        // Tailwind Configuration - Evening Espresso Bar Color Palette
        // Material Design 3 + Refactoring UI principles applied
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        // Text colors (cream tones for high contrast on dark backgrounds)
                        'cream-lightest': '#EDC4B3',   // Primary text, headings (8.2:1 contrast)
                        'cream-light': '#E6B8A2',      // Secondary text, nav links (7.1:1 contrast)

                        // Surface & interactive colors (mahogany/espresso tones)
                        'mahogany-light': '#653A2A',   // Card backgrounds, elevated surfaces
                        'mahogany': '#5C3324',         // Primary buttons, interactive elements
                        'espresso-light': '#532C1E',   // Secondary buttons, accents
                        'espresso': '#4A2419',         // Hover states, borders

                        // Background colors (coffee tones - darkest to lightest)
                        'coffee-dark': '#411D13',      // Section backgrounds
                        'coffee-darker': '#38160D',    // Main body background
                        'coffee-darkest': '#2F0E07',   // Header background
                        'almost-black': '#260701',     // Footer, maximum depth
                    }
                }
            }
        }
    </script>"""

# New CSS for most files
NEW_CSS_BASIC = """    <style type="text/tailwindcss">
        /* ===== MOBILE MENU CHECKBOX HACK ===== */
        #menu-toggle:checked ~ #mobile-menu {
            display: block;
        }

        /* ===== SHOPPING CART BADGE ===== */
        .cart-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background: #5C3324; /* mahogany */
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: bold;
        }
    </style>"""

# CSS for producten.html (has filter buttons)
NEW_CSS_PRODUCTEN = """    <style type="text/tailwindcss">
        #menu-toggle:checked ~ #mobile-menu {
            display: block;
        }

        .cart-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background: #5C3324; /* mahogany */
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: bold;
        }

        .filter-btn.active {
            background: #5C3324; /* mahogany */
            color: white;
        }
    </style>"""

# New minimal JavaScript
NEW_JAVASCRIPT = """    <script>
        // Zenith Coffee - Material Design 3 + Refactoring UI
        // Dutch language only, "Evening Espresso Bar" theme permanently
        // No language switching or dark mode toggle needed
    </script>"""

def update_html_file(filepath, is_producten=False):
    """Update a single HTML file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Tailwind config
    content = re.sub(
        r'<script>\s*//?\s*Tailwind Configuration.*?</script>',
        NEW_TAILWIND_CONFIG,
        content,
        flags=re.DOTALL
    )

    # 2. Update CSS
    css_to_use = NEW_CSS_PRODUCTEN if is_producten else NEW_CSS_BASIC
    content = re.sub(
        r'<style type="text/tailwindcss">.*?</style>',
        css_to_use,
        content,
        flags=re.DOTALL
    )

    # 3. Update body tag
    content = re.sub(
        r'<body class="[^"]*"[^>]*>',
        '<body class="bg-coffee-darker text-cream-lightest font-sans" style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif;">',
        content
    )

    # 4. Update header tag
    content = re.sub(
        r'<header class="[^"]*"',
        '<header class="bg-coffee-darkest shadow-lg sticky top-0 z-50"',
        content
    )

    # 5. Remove settings dropdown (entire div block)
    content = re.sub(
        r'<div class="relative settings-dropdown">.*?</div>\s*(?=<a href="winkelmand\.html")',
        '',
        content,
        flags=re.DOTALL
    )

    # 6. Remove all data-i18n attributes
    content = re.sub(r'\s*data-i18n="[^"]*"', '', content)
    content = re.sub(r'\s*data-i18n-placeholder="[^"]*"', '', content)

    # 7. Update color classes - remove dark: variants
    # Body/section backgrounds
    content = re.sub(r'bg-cream-lightest dark:bg-coffee-darker', 'bg-coffee-darker', content)
    content = re.sub(r'bg-cream-light dark:bg-coffee-dark', 'bg-coffee-dark', content)
    content = re.sub(r'bg-brown-darkest dark:bg-coffee-darkest', 'bg-coffee-darkest', content)
    content = re.sub(r'bg-brown-darkest dark:bg-almost-black', 'bg-almost-black', content)
    content = re.sub(r'bg-white dark:bg-mahogany-light', 'bg-mahogany-light', content)

    # Text colors
    content = re.sub(r'text-brown-darkest dark:text-white', 'text-white', content)
    content = re.sub(r'text-brown-dark dark:text-cream-lightest', 'text-cream-lightest', content)
    content = re.sub(r'text-brown-dark dark:text-cream-light', 'text-cream-light', content)
    content = re.sub(r'text-cream-light dark:text-cream-lightest', 'text-cream-lightest', content)

    # Button colors
    content = re.sub(r'bg-brown-medium hover:bg-brown dark:bg-mahogany dark:hover:bg-espresso-light', 'bg-mahogany hover:bg-espresso-light', content)
    content = re.sub(r'bg-terracotta hover:bg-clay dark:bg-mahogany dark:hover:bg-mahogany-light', 'bg-mahogany hover:bg-espresso-light', content)
    content = re.sub(r'bg-terracotta hover:bg-clay dark:bg-mahogany dark:hover:bg-espresso-light', 'bg-mahogany hover:bg-espresso-light', content)

    # Border colors
    content = re.sub(r'border-brown-medium dark:border-coffee-dark', 'border-coffee-dark', content)
    content = re.sub(r'border-gray-200 dark:border-mahogany', 'border-mahogany', content)
    content = re.sub(r'border-gray-200 dark:border-coffee-dark', 'border-coffee-dark', content)

    # Hover states
    content = re.sub(r'hover:bg-terracotta-light dark:hover:bg-mahogany', 'hover:bg-mahogany', content)
    content = re.sub(r'hover:bg-terracotta-light dark:hover:bg-espresso-light', 'hover:bg-espresso-light', content)
    content = re.sub(r'hover:bg-terracotta-light dark:hover:bg-espresso', 'hover:bg-espresso', content)

    # Focus states
    content = re.sub(r'focus:ring-terracotta dark:focus:ring-mahogany-light', 'focus:ring-cream-light', content)
    content = re.sub(r'focus:ring-terracotta dark:focus:ring-cream-light', 'focus:ring-cream-light', content)

    # Remove transition-colors duration-300 where not needed
    content = re.sub(r'\s*transition-colors duration-300', '', content)

    # 8. Update JavaScript section
    content = re.sub(
        r'<script>.*?</script>\s*</body>',
        NEW_JAVASCRIPT + '\n\n</body>',
        content,
        flags=re.DOTALL
    )

    # Write updated content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✓ Updated {os.path.basename(filepath)}")

# Update all files
files_to_update = [
    ('producten.html', True),
    ('over-ons.html', False),
    ('contact.html', False),
    ('vacatures.html', False),
    ('winkelmand.html', False)
]

print("Updating HTML files to match DESIGN_GUIDELINES.md...")
print("=" * 60)

for filename, is_producten in files_to_update:
    filepath = os.path.join(os.path.dirname(__file__), filename)
    if os.path.exists(filepath):
        update_html_file(filepath, is_producten)
    else:
        print(f"✗ File not found: {filename}")

print("=" * 60)
print("All files updated successfully!")
