# Coffee Shop Electronic Menu

A static, mobile-first menu web app: customers scan a QR code to open the menu on their phone. No build tools, no backend — just HTML, CSS, and JavaScript.

## Layout

```
index.html          Customer menu (Arabic RTL default, EN toggle)
admin.html          Shop editor (PIN-locked)
menu.json           Published menu data — customers fetch this
js/data.js          DEFAULT_MENU fallback snapshot + admin PIN
js/i18n.js          AR/EN strings + RTL/LTR handling
js/storage.js       Load/save menu, export blob helper
js/app.js           Customer page logic
js/admin.js         Admin page logic
js/qrcode.js        Vendored QR generator (MIT)
css/base.css        Reset + design tokens + shared controls
css/menu.css        Customer page styles
css/admin.css       Admin page styles
assets/images/      Optional product photos
```

## Run locally

```
python3 -m http.server 8080
# customer menu: http://localhost:8080
# admin:         http://localhost:8080/admin.html
```

Opening `index.html` directly from the file system also works (it falls back to the bundled data).

## How to update the menu

1. Open `/admin.html` and enter the PIN (`SHOP_PIN` in `js/data.js`, default `2026`). Change it before going live.
2. Edit the store name/currency, categories, and products. Changes are auto-saved to this browser.
3. Go to **Publish & Export** → **Download menu.json**.
4. Upload `menu.json` to your host, replacing the old one (GitHub Pages / Netlify drag-and-drop / whatever you use). Customers instantly see the new version — no rebuild, no redeploy of the app.

Import/export and "restore defaults" live in the same panel.

## QR code for tables

1. In **QR generator**, paste your published URL (e.g. `https://your-org.github.io/menu/index.html`).
2. Click **Generate**, then **Print** to print a table label. Customers scan it to open the menu.

## Notes

- The admin editor is stored in the browser's localStorage, so it only edits on the device you use. The published `menu.json` file is the single source of truth customers see.
- Photo URLs can be absolute links or relative file paths under `assets/images/`.
- The customer page fetches `menu.json` at runtime and falls back to the bundled `DEFAULT_MENU` snapshot when offline or when hosted somewhere that forbids relative fetch.