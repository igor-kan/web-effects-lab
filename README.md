# Web Effects Lab

A standalone website repository packed with interactive, downloadable visual effect demos for modern web design work.

## Included demo types

- Smoke and volumetric-like particle effects
- Fluid-style dye simulation
- Lightning and atmospheric light effects
- Animated neon/grid lighting visuals
- Particle galaxy (pseudo-3D)
- 3D procedural model showcase (Three.js)
- 3D low-poly environment fly scene (Three.js)
- Aurora wave ribbons and layered animation graphics

Each demo is a single HTML file under [`demos/`](./demos), so you can copy or remix any effect fast.

## Quick start

Run any static file server from the repo root. Example:

```bash
cd web-effects-lab
python3 -m http.server 5500
```

Then open: `http://localhost:5500`

## Download workflow

From the gallery home page, each card includes:

- `Open Demo`: launches demo in a new tab
- `Download HTML`: downloads that exact standalone demo file

## Repository structure

```text
web-effects-lab/
  index.html
  styles.css
  app.js
  demos/
    smoke-cursor.html
    fluid-flow.html
    lightning-storm.html
    neon-light-grid.html
    particle-galaxy.html
    orbital-model-lab.html
    forest-flight.html
    aurora-ribbons.html
```

## Notes

- 3D demos import Three.js from a CDN.
- 2D demos are pure Canvas and run without build tooling.
- Designed for desktop and mobile viewport compatibility.
