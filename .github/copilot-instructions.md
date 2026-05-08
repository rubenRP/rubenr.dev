# GitHub Copilot — instrucciones breves para este repo

Propósito: ayudar a agentes automatizados o asistentes en PRs a entender lo esencial rápidamente.

Resumen rápido
- Proyecto: página personal + blog (multilingüe: inglés y español).
- Deploy: Netlify (configuración en `netlify.toml`, publica `dist/`).

Comandos útiles
- `npm install` — instalar dependencias.
- `npm run dev` — servidor de desarrollo (Astro).
- `npm run build` — construir sitio estático en `dist/`.
- `npm run preview` — previsualizar build localmente.
- `npm run lint` y `npm run check` — lint y validaciones de contenido/TypeScript.
- `npm run ci` — tarea CI combinada (lint + check + build).

Dónde editar contenido
- Posts EN: `src/content/blog/en/`
- Posts ES: `src/content/blog/es/`
- Páginas (estáticas): `src/content/pages/en/` y `src/content/pages/es/`
- Rutas dinámicas: `src/pages/[...slug].astro`
- Esquema y validaciones: `src/content.config.ts` (Zod)

Convenciones importantes
- Idioma por defecto: inglés (sin prefijo); español en `/es/`.
- No eliminar ni renombrar claves de frontmatter requeridas por `src/content.config.ts`.
- Evitar refactors a gran escala sin abrir un issue/PR explicando el motivo.
- Antes de subir PRs que cambien componentes o estilos, ejecutar `npm run lint` y `npm run check` y verificar `npm run build`.

Notas de despliegue y entorno
- Netlify usa `npm run build` y publica `dist/` (ver `netlify.toml`).
- Revisar `engines` en `package.json` para la versión mínima de Node/NPM.

Referencias rápidas
- Orientación ampliada para agentes: [AGENTS.md](AGENTS.md)
- Configuración del proyecto: [package.json](package.json), [astro.config.mjs](astro.config.mjs)

Checklist mínima para PRs
1. Ejecutar `npm run lint` y `npm run check`.
2. Si el cambio afecta contenido, validar frontmatter y traducciones.
3. Ejecutar `npm run build` localmente para detectar errores de compilación.

Si quieres, puedo ajustar esto para añadir instrucciones de commit/PR automáticas o un skill que valide sincronía de traducciones.
