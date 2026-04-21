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
- Crystal growth DLA simulation
- Plasma arc reactor lightning field
- Metaball contour marching-squares lab
- Hyperspace starfield warp tunnel
- Black hole lensing space distortion
- Electrostatic field sandbox simulation
- 3D Moebius ribbon geometry lab
- Procedural nebula noise clouds
- Ferrofluid magnet contour lab
- Polar vortex flow advection demo
- 3D wireframe wormhole tunnel
- Prism caustic interference effect
- Realistic smoke plume advection
- Volumetric fire column simulation
- Wildfire smoke front spread model
- Ember fog turbulence field

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

## Browse modes + tweak menu

From the gallery home page, users can switch between:

- `Card View`
- `Table View`

Every demo row/card includes:

- `Open + Tweaks`: launches `demo-viewer.html` with a compact slider menu
- `Open Raw Demo`: available inside the viewer
- `Download HTML`: downloads that exact standalone demo file

The tweak menu provides global sliders for:

- `Brightness`
- `Contrast`
- `Saturation`
- `Hue`
- `Bloom Blur`

## Repository structure

```text
web-effects-lab/
  index.html
  styles.css
  app.js
  demo-viewer.html
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
    crystal-growth-dla.html
    plasma-arc-reactor.html
    metaball-contour-lab.html
    hyperspace-starfield.html
    black-hole-lensing.html
    electrostatic-field-sandbox.html
    moebius-ribbon-lab.html
    nebula-noise-clouds.html
    ferrofluid-magnet-lab.html
    polar-vortex-flow.html
    wireframe-wormhole-3d.html
    prism-caustic-interference.html
    realistic-smoke-plume.html
    volumetric-fire-column.html
    wildfire-smoke-front.html
    ember-fog-turbulence.html
```

## Notes

- 3D demos import Three.js from a CDN.
- 2D demos are pure Canvas and run without build tooling.
- Designed for desktop and mobile viewport compatibility.
