# G9 Energy Website

Multi-page React site (Vite + Tailwind), red/white/black theme.  
Pages: Home, Services, Industries, Team, Contact. Netlify Forms enabled.

## Run locally
npm i
npm run dev

## Build
npm run build

## Replace logo
Swap `public/assets/logo-placeholder.png` with your real logo file named `logo.png`, then update `Navbar` image src.

## Netlify
- Build command: `npm run build`
- Publish dir: `dist`
- Redirects: SPA fallback in `netlify.toml`

## GA4 (optional)
Add your GA4 snippet to `index.html` if needed.
