# Dymas Alfin — Portfolio Landing Page

A single-screen portfolio hero built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.

## Run it

```bash
cd portfolio
npm install     # only needed on a fresh clone
npm run dev     # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Layout

**Navbar**
- Left — "Available for New Project" pill with a pulsing green dot
- Center — Work `[40]`, Service `[4]`, Experience `[9y+]`, Contact (underline grows on hover)
- Right — black "Let's Talk" pill button

**Hero**
- Oversized `DYMAS ALFIN` headline — "DYMAS" outlined, "ALFIN" solid
- Portrait sits on top of the headline, anchored to the bottom of the screen
- Left — "UI/UX Designer" + description + "Let's collaborate" button
- Right — Dribbble, Instagram, LinkedIn, Behance buttons

## Files

```
app/
  layout.tsx      Inter font + metadata
  page.tsx        composes Navbar + Hero
  globals.css     theme tokens, animations, .text-hollow utility
components/
  navbar.tsx      top bar
  hero.tsx        headline, portrait, intro copy
  social-rail.tsx social buttons
  icons.tsx       inline SVG icons (no icon dependency)
public/
  portrait.png    transparent-background portrait
```

## Notes

- The outlined headline uses `-webkit-text-stroke` via the `.text-hollow` utility in `globals.css`.
- Colors and fonts are Tailwind v4 `@theme` tokens — edit `--color-ink`, `--color-muted`, etc. in `globals.css`.
- Responsive: the overlap layout applies at `lg` and up; below that everything stacks vertically and the portrait gets a soft bottom fade.
- `prefers-reduced-motion` is respected — all animations are disabled.

## Swapping the portrait

Replace `public/portrait.png` with your own cutout (transparent PNG, subject cropped tight to the edges) and update the `width`/`height` props in `components/hero.tsx` to match.
