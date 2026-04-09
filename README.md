# Portafolio Profesional - Cristian Pineda

Portafolio profesional moderno y elegante desarrollado con HTML5, CSS3 y JavaScript Vanilla.

## ✨ Características

- ✅ Diseño moderno con efectos glassmorphism
- ✅ Animaciones suaves y transiciones fluidas
- ✅ Navegación inteligente con scroll suave
- ✅ Selector de idioma Español/Inglés
- ✅ Formulario de contacto funcional con EmailJS
- ✅ Diseño 100% responsive (móvil, tablet, desktop)
- ✅ Navbar con efecto de ocultación al scroll
- ✅ Tarjetas de proyectos con hover effects avanzados
- ✅ Botón volver arriba
- ✅ Barra de progreso de scroll
- ✅ Loading screen
- ✅ Scrollbar personalizada
- ✅ Optimizado para rendimiento y SEO
- ✅ Accesibilidad mejorada (ARIA labels)

## 🚀 Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript ES6+ (Vanilla)
- EmailJS para formulario de contacto
- Font Awesome para iconos
- Google Fonts (Inter & JetBrains Mono)

## 📂 Estructura del Proyecto

```
📁 Portafolio/
├── 📄 index.html      # Página principal
├── 📄 style.css       # Estilos
├── 📄 script.js       # JavaScript principal
├── 📄 lang.js         # Sistema de traducción ES/EN
├── 📄 sitemap.xml     # Mapa del sitio para SEO
├── 📄 robots.txt      # Instrucciones para bots
├── 📄 .gitignore      # Archivos ignorados por Git
└── 📄 README.md       # Este archivo
```

## 🎯 Secciones

1. **Hero** - Presentación con nombre, título y estadísticas
2. **Perfil** - Información profesional
3. **Habilidades** - Skills técnicas organizadas por categoría
4. **Stack** - Tecnologías que manejo
5. **Proyectos** - Portfolio de trabajos
6. **Contacto** - Formulario funcional y datos de contacto

## 🌐 Idiomas

El portafolio está disponible en:
- 🇪🇸 Español (por defecto)
- 🇺🇸 English

El idioma se guarda en localStorage y se mantiene entre sesiones.

## 📧 Configuración del Formulario

El formulario usa EmailJS. Para configurarlo:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea un template
4. Actualiza las credenciales en `index.html`:
   - `emailjs.init('TU_PUBLIC_KEY')`
5. Actualiza en `script.js`:
   - `SERVICE_ID`
   - `TEMPLATE_ID`

## 🚀 Cómo Usar

### Desarrollo Local

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo!

### Despliegue

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

Luego activa GitHub Pages en Settings → Pages

**Netlify:**
- Arrastra la carpeta a [Netlify Drop](https://app.netlify.com/drop)

**Vercel:**
```bash
npm i -g vercel
vercel
```

## 📝 Personalización

### Datos Personales

Actualiza en `index.html`:
- Nombre
- Email
- Teléfono
- Ubicación
- Enlaces de redes sociales

### Colores

Modifica las variables CSS en `style.css`:
```css
:root {
  --primary: #4f8cff;
  --accent: #22d3ee;
  --bg: #0a0c10;
  /* ... */
}
```

### Contenido

Edita las traducciones en `lang.js` para ambos idiomas.

## 📊 SEO

- ✅ Meta tags optimizados
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ HTML semántico
- ✅ Favicon

## ♿ Accesibilidad

- ✅ ARIA labels
- ✅ Roles semánticos
- ✅ Navegación por teclado
- ✅ Contraste de colores adecuado
- ✅ Textos alternativos

## 📱 Responsive

Optimizado para:
- 📱 Móviles (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Desktop (> 768px)

## 🔧 Mantenimiento

### Actualizar Proyectos

Edita la sección de proyectos en `index.html` y las traducciones en `lang.js`.

### Agregar Certificaciones

Crea una nueva sección siguiendo la estructura existente.

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como inspiración.

## 👤 Autor

**Cristian Pineda**
- Email: pinedandres002@gmail.com
- LinkedIn: [linkedin.com/in/cristian-pineda](https://linkedin.com/in/cristian-pineda)
- Ubicación: Yumbo

---

© 2026 Cristian Pineda — Analista de Datos Junior