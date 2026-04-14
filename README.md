# 🧱 Femax AI — Client Landing Template

Template base para landings de clientes.
Estructura modular, limpia y lista para clonar.

---

## 📁 Estructura

```
client-template/
│── index.html          ← HTML principal (secciones modulares)
│── robots.txt          ← SEO técnico
│── sitemap.xml         ← SEO técnico
│── .htaccess           ← Caché y seguridad (hosting Apache)
│── README.md           ← Este archivo
│
└── assets/
    ├── css/
    │   ├── variables.css   ← ⭐ ÚNICO archivo que tocás por cliente
    │   └── style.css       ← Base de estilos (no tocar)
    ├── js/
    │   ├── script.js       ← Lógica general (no tocar)
    │   └── form.js         ← ⭐ Webhook n8n (cambiar URL por cliente)
    └── img/
        ├── logo.svg        ← ⭐ Logo del cliente
        ├── favicon.svg     ← ⭐ Favicon del cliente
        ├── hero.webp       ← ⭐ Imagen hero
        └── og-cover.jpg    ← ⭐ Preview WhatsApp/redes (1200x630px)
```

---

## ✅ Checklist por cliente

### Antes de arrancar
- [ ] Clonar este repo con nombre del cliente: `git clone ... nombre-cliente`
- [ ] Crear proyecto en Vercel

### Archivos a editar

**`assets/css/variables.css`**
- [ ] Color primario
- [ ] Color secundario
- [ ] Color acento
- [ ] Fuentes (Google Fonts)

**`assets/js/form.js`**
- [ ] URL del webhook de n8n del cliente

**`index.html`**
- [ ] `<title>` — nombre y tagline del negocio
- [ ] `<meta name="description">` — descripción SEO
- [ ] `<link rel="canonical">` — URL del sitio
- [ ] Tags Open Graph (og:title, og:description, og:url, og:image)
- [ ] Fuentes en `<head>` — coincidir con variables.css
- [ ] Navbar: activar/comentar links según secciones del cliente
- [ ] Hero: título, subtítulo, CTAs, imagen
- [ ] Marquee: keywords del negocio (o comentar si no aplica)
- [ ] Servicios: nombre, descripción, ícono de cada servicio
- [ ] Precios: activar/comentar sección, completar planes
- [ ] Horarios: activar si aplica (gyms, clínicas, etc.)
- [ ] Testimonios: activar si hay reseñas reales
- [ ] FAQ: activar si hay preguntas frecuentes
- [ ] Contacto: WhatsApp, email, dirección del cliente
- [ ] Política de privacidad: nombre, dirección, teléfono/email del cliente
- [ ] Footer: nombre del negocio, crédito Femax
- [ ] Botón WhatsApp: número + mensaje predefinido

**`assets/img/`**
- [ ] `logo.svg` — logo del cliente
- [ ] `favicon.svg` — favicon del cliente
- [ ] `hero.webp` — imagen principal (ratio 4:3 recomendado)
- [ ] `og-cover.jpg` — imagen preview redes (1200x630px)

**`robots.txt`**
- [ ] Reemplazar `[DOMINIO O URL VERCEL]` con la URL real

**`sitemap.xml`**
- [ ] Reemplazar dominio y fecha

### Deploy
- [ ] Push a GitHub
- [ ] Verificar en Vercel que el deploy es READY
- [ ] Probar formulario — que llegue al n8n del cliente
- [ ] Probar en mobile
- [ ] Probar preview de WhatsApp (wa.me/...)

---

## 🎨 Cómo personalizar el diseño

Todo el diseño se controla desde `assets/css/variables.css`.
Solo tocás ese archivo — el resto se actualiza solo.

```css
:root {
  --color-primario:   #0066ff;   /* ← color del cliente */
  --font-titulo:      'Syne';    /* ← tipografía del cliente */
  --bg-base:          #ffffff;   /* ← fondo del sitio */
}
```

Para cambiar fuentes: buscar una en fonts.google.com, actualizar el `<link>` en el `<head>` del `index.html` y el valor en `variables.css`.

---

## 🔌 Secciones disponibles

| Sección       | Estado por defecto | Cuándo activar          |
|---------------|-------------------|-------------------------|
| Navbar        | ✅ Activo          | Siempre                 |
| Hero          | ✅ Activo          | Siempre                 |
| Marquee       | ✅ Activo          | Si hay keywords claras  |
| Servicios     | ✅ Activo          | Siempre                 |
| Estadísticas  | 💤 Comentado       | Si hay números reales   |
| Precios       | ✅ Activo          | Si el cliente los muestra|
| Horarios      | 💤 Comentado       | Gyms, clínicas, locales |
| Testimonios   | 💤 Comentado       | Si hay reseñas reales   |
| FAQ           | 💤 Comentado       | Si hay dudas frecuentes |
| Contacto      | ✅ Activo          | Siempre                 |
| Footer        | ✅ Activo          | Siempre                 |
| Modal Privacy | ✅ Activo          | Siempre                 |
| Botón WA      | ✅ Activo          | Si usa WhatsApp         |

---

## ⚡ Lo que tiene una buena estructura

1. **CSS separado del HTML** — `variables.css` + `style.css` fuera del `index.html`
2. **Variables CSS** — un solo archivo para cambiar colores y fuentes
3. **JS separado** — `script.js` (general) y `form.js` (webhook) en archivos propios
4. **Secciones modulares** — comentás/descomentás bloques en `index.html`
5. **SEO técnico** — meta tags, OG, canonical, robots, sitemap
6. **Política de privacidad** — modal integrado, editar datos del cliente
7. **Formulario accesible** — labels, required, feedback de estado
8. **Responsive** — mobile-first, 3 breakpoints
9. **Performance** — imágenes webp, caché en .htaccess, preconnect fuentes
10. **Accesibilidad** — aria-labels, roles, prefers-reduced-motion

---

Desarrollado por [Femax AI Automation](https://femaxaiautomation.co)
