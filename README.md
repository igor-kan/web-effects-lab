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
- GPU metaballs shader field (WebGL)
- SDF raymarched tunnel shader (WebGL)
- Verlet cloth physics with wind and user interaction
- Procedural neon city drive scene (Three.js)
- Holographic shader-relief model (Three.js + GLSL)
- Flocking boids swarm simulation
- Reaction-diffusion chemistry simulation
- Fire simulation with embers and wind
- 3D steam/smoke plume particle simulation
- Curl-noise incompressible flowfield
- Stable-fluid smoke simulation variant
- Volumetric light-shaft shader scene
- Procedural stem-growth simulation
- Falling sand cellular simulation
- Water caustics shader effect
- Shockwave ripple simulation
- Magnetic field line tracer effect
- Glass refraction shader effect
- Rain-on-glass distortion effect
- Fireworks particle simulation
- 3D terrain wave simulation
- Kaleidoscope mandala shader

Each demo is a single HTML file under [`demos/`](./demos), so you can copy or remix any effect fast.

## Quick start

Run any static file server from the repo root. Example:

```bash
cd web-effects-lab
python3 -m http.server 5500
```

Then open: `http://localhost:5500`

## Deployment (GitHub Pages)

This repository includes a workflow at `.github/workflows/deploy-pages.yml`.
Every push to `main` automatically deploys the static site to GitHub Pages.

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
    reactive-metaballs-webgl.html
    raymarch-tunnel.html
    cloth-verlet-wind.html
    procedural-city-drive.html
    holographic-relief-model.html
    boids-swarm-lab.html
    reaction-diffusion-lab.html
    fire-simulation-lab.html
    steam-plume-3d.html
    curl-noise-flowfield.html
    stable-fluid-smoke-lab.html
    volumetric-light-shafts.html
    stem-growth-simulation.html
    falling-sand-lab.html
    water-caustics-shader.html
    shockwave-ripples.html
    magnetic-field-lines.html
    glass-refraction-shader.html
    rain-glass-distortion.html
    fireworks-night-sky.html
    terrain-waves-3d.html
    kaleidoscope-mandala-shader.html
```

## Notes

- 3D demos import Three.js from a CDN.
- 2D demos are pure Canvas and run without build tooling.
- Designed for desktop and mobile viewport compatibility.
