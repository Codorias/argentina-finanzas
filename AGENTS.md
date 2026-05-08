<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version (16.2.4) has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

**React Compiler is enabled** (`babel-plugin-react-compiler@1.0.0` in devDependencies). Don't reach for `useMemo` / `useCallback` / `React.memo` reflexively — the compiler handles memoization. Only add manual memo when the compiler can't infer or you've measured a problem.

**Static export mode** (`output: 'export'`). This means: no `route.ts` API handlers, no `headers()` / `cookies()`, no on-demand revalidation, no Image Optimization (already opted out). Every page must be enumerable at build time. Forms / dynamic behavior must be client-side or rely on third-party services (Formspree, Resend, etc.).
<!-- END:nextjs-agent-rules -->

# Argentina Finanzas — Landing Page

## Project Overview
Landing page profesional, minimalista y responsive en español para **Joaquín Rodríguez** (Argentina Finanzas), asesor financiero independiente argentino.

**Live URL:** https://openv1.vercel.app  
**Repo:** https://github.com/Codorias/argentina-finanzas

---

## Stack
- **Framework:** Next.js 16.2.4 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Fonts:** Geist Sans + Geist Mono (Next.js built-in)
- **Deploy:** Vercel (static export)

---

## Architecture

### Static Export
- `next.config.ts`: `output: 'export'`, `distDir: 'dist'`, `images.unoptimized: true`
- No SSR / API routes. Todo es estático para Vercel free tier.

### File Structure
```
app/
  components/
    Navbar.tsx              # Nav responsive con mobile menu
    Hero.tsx                # Hero "Invertí desde Argentina hacia el mundo" + CTAs
    HeroDuck.tsx            # Ilustración SVG pato contracorriente animado
    TrustBar.tsx            # CNV #2245 / Abogado / UdeSA / Carteras globales
    WhyInvest.tsx           # Sección educativa "hasta el dólar se devalúa" + metas
    ClientSegments.tsx      # Inversores minoristas / Familias / Pymes
    Services.tsx            # Planificación / Gestión / Retiro / Acompañamiento
    TrustSafety.tsx         # "¿Vos manejás mi plata?" → No. Custodia + reportes
    Process.tsx             # 3 pasos con animaciones stagger
    RetirementCalculator.tsx # Calculadora interactiva de jubilación (5 sliders)
    About.tsx               # Bio Joaquín Rodríguez Nuin (CNV 2245, abogado, UdeSA)
    Testimonials.tsx        # 3 testimonios placeholder (TODO: reemplazar)
    FAQ.tsx                 # Acordeón con foco en custodia, retiro joven, inversión global
    Insights.tsx            # 3 artículos placeholder (educación + cartera global + retiro)
    LeadMagnet.tsx          # Banner "Tu primera cartera global desde Argentina"
    Contact.tsx             # Calendly + WhatsApp + Email + Formulario
    Footer.tsx              # Disclaimer colapsable CNV/Ley 25.326/BCRA
    FloatingWhatsApp.tsx    # Botón flotante WhatsApp (desktop only)
    StickyBottomBar.tsx     # Barra fija mobile (WhatsApp + Agendar)
    AnimatedSection.tsx     # Wrapper reutilizable Framer Motion
  globals.css               # Tailwind imports + custom utilities
  layout.tsx                # Metadata SEO + fonts
  page.tsx                  # Orden de todas las secciones
public/
  logo.png                  # Logo marca (pato contracorriente)
```

---

## Design System

### Colors
| Token | Hex | Uso |
|---|---|---|
| Primary (text) | `#000000` | Títulos, body |
| Accent | `#EF4444` (red-500) | CTAs, highlights, lead magnet |
| Background | `#FFFFFF` | Base |
| Muted | `#737373` (neutral-500) | Textos secundarios |
| Light BG | `#FAFAFA` (neutral-50) | Secciones alternadas |

### Typography
- **Sans:** Geist Sans (títulos, body)
- **Mono:** Geist Mono (stats, números, taglines)
- Scale: `text-4xl md:text-5xl lg:text-6xl` para H1, down to `text-sm` para captions

### Spacing
- Section padding: `py-16 md:py-24`
- Container max: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Mobile touch targets: min `44px`

---

## Components Conventions

### Animation Pattern
Todas las secciones usan `AnimatedSection` (Framer Motion):
```tsx
<AnimatedSection>
  {/* content */}
</AnimatedSection>
```
Props: `delay?: number`, `children`

Para grids con stagger, se usa `StaggerContainer` + `StaggerItem` dentro del componente.

### Responsive Strategy
- Mobile-first (`md:` / `lg:` breakpoints)
- Ilustraciones / decoraciones: `hidden md:block` cuando tapen contenido en mobile
- StickyBottomBar solo en mobile (`md:hidden`)
- FloatingWhatsApp solo en desktop (`hidden md:flex`)

---

## Placeholders & TODOs

### CRITICAL — Replace before production:
| Placeholder | Location | Real Value |
|---|---|---|
| `1234567890` | Hero.tsx, Contact.tsx, Footer.tsx, StickyBottomBar.tsx, FloatingWhatsApp.tsx | WhatsApp número real |
| `contacto@argentinafinanzas.com` | Footer.tsx, Contact.tsx | Email real |
| `calendly.com/tu-usuario` | Contact.tsx, StickyBottomBar.tsx | Calendly link real |
| Social URLs `@argentinafinanzas` | Footer.tsx | Confirmar handles exactos en TikTok / IG / YouTube |
| LinkedIn `joaquin-rodriguez-nuin` | Footer.tsx | Confirmar slug real |
| Testimonios | Testimonials.tsx | Nombres y textos reales |
| Artículos | Insights.tsx | URLs y títulos reales del blog |
| Lead magnet | LeadMagnet.tsx | Link real de descarga / formulario |

### Confirmados (no son placeholders)
- **Joaquín Rodríguez Nuin** — nombre completo del cliente (ABOUT.md)
- **Agente Productor CNV matrícula #2245**
- Abogado, idóneo en mercado de capitales, maestrando en finanzas en UdeSA

### Formulario de Contacto
- Simula envío con `setTimeout`
- No conectado a backend
- Opciones para integrar: Formspree, Resend, Google Forms, EmailJS

---

## SEO & Metadata
- `layout.tsx` tiene `metadata` completo (title, description, keywords, openGraph, twitter, authors)
- Keywords: asesor financiero argentina, planificación financiera, jubilación, inversión, CNV

---

## Security Checklist
- [x] No API keys / tokens en código
- [x] No archivos `.env*` commiteados
- [x] `.gitignore` cubre: `node_modules/`, `.env*`, `dist/`, `.next/`, `.vercel/`, `*.log`, `coverage/`, `*.tsbuildinfo`
- [x] No secrets en `package.json`, `next.config.ts`
- [x] `private: true` en `package.json`
- [ ] Revisar que no se suban datos personales reales de clientes en testimonios

---

## Build & Deploy

### Local
```bash
npm install
npm run dev        # localhost:3000 (Turbopack)
npm run build      # genera dist/ estático
npm run lint       # ESLint 9 + eslint-config-next
```
No hay test runner configurado.

### Deploy (Vercel)
```bash
npx vercel --prod --yes
```
O automático vía GitHub integration en cada push a `main`.

---

## Known Issues / Warnings
- `next-env.d.ts` se autogenera. No editar manualmente.
- `dist/` no debe commitearse (está en `.gitignore`).
- `safe-area-inset-bottom` se aplica inline en StickyBottomBar para evitar warning de PostCSS.
- `ABOUT.md` (sin track) contiene el brief del cliente (qué hace, propuesta de valor, target, objeciones). Es la fuente de verdad para messaging — leerlo antes de cambiar copy.

---

## Messaging / Voice
- Tono: argentino, directo, sin chamuyo. Usa **vos**.
- Anti-status-quo (alineado con el branding "pato contracorriente").
- Frases recurrentes que el cliente quiere transmitir:
  - "Hasta el dólar se devalúa"
  - "No hace falta ser rico para invertir"
  - "Tu plata queda en TUS cuentas" (objeción #1 a desactivar)
  - "Invertí desde Argentina, hacia el mundo"
- Target nuevo: gente joven (25–45) armando cartera de retiro. El cliente legacy es +60 pero no llegó por web.
- Objetivo de la página: capturar leads (nombre + email/WhatsApp) y agendar consultas. CTAs deben empujar a contacto/agenda.

## Next Steps (for future sessions)
1. Reemplazar todos los placeholders con datos reales (ver tabla arriba)
2. Integrar formulario de contacto con backend real (Formspree/Resend)
3. Conectar dominio propio en Vercel
4. Agregar Google Analytics / Tag Manager
5. Implementar blog real (ahora son placeholders)
6. Subir testimonios con fotos reales
7. Añadir schema.org JSON-LD para SEO local (FinancialService)
8. Internacionalización (i18n) si se expande a otros países
