const demos = [
  {
    id: "smoke-cursor",
    title: "Smoke Cursor",
    stack: "Canvas 2D",
    level: "Beginner+",
    description:
      "Soft volumetric smoke plumes that trail your cursor with additive glow and turbulence.",
    interaction: "Move mouse or drag finger, click for a burst, press space to clear.",
    tags: ["2D", "smoke", "particles", "interactive"],
    file: "demos/smoke-cursor.html",
  },
  {
    id: "fluid-flow",
    title: "Fluid Flow Dye",
    stack: "Canvas + Grid Solver",
    level: "Intermediate",
    description:
      "A fluid-style dye simulation with velocity advection and pressure projection, tuned for browser speed.",
    interaction: "Drag to inject color and momentum into the field.",
    tags: ["2D", "fluid", "simulation", "interactive"],
    file: "demos/fluid-flow.html",
  },
  {
    id: "lightning-storm",
    title: "Lightning Storm",
    stack: "Canvas 2D",
    level: "Intermediate",
    description:
      "Fractal lightning bolts with branching strikes, cloud flicker, and click-to-strike targeting.",
    interaction: "Click or tap to strike a point; ambient strikes continue automatically.",
    tags: ["2D", "lightning", "light", "animation"],
    file: "demos/lightning-storm.html",
  },
  {
    id: "neon-light-grid",
    title: "Neon Light Grid",
    stack: "Canvas 2D",
    level: "Beginner+",
    description:
      "Animated moving lights over a geometric grid, useful for hero backgrounds and promo pages.",
    interaction: "Move pointer to add a live light source.",
    tags: ["2D", "light", "graphics", "interactive"],
    file: "demos/neon-light-grid.html",
  },
  {
    id: "particle-galaxy",
    title: "Particle Galaxy",
    stack: "Canvas 2.5D",
    level: "Intermediate",
    description:
      "Pseudo-3D galaxy with depth projection, camera orbit controls, and star haze.",
    interaction: "Drag to rotate the camera and wheel to zoom.",
    tags: ["3D", "particles", "space", "interactive"],
    file: "demos/particle-galaxy.html",
  },
  {
    id: "orbital-model-lab",
    title: "Orbital Model Lab",
    stack: "Three.js",
    level: "Intermediate",
    description:
      "Procedural hard-surface model with orbit rings, area lighting, and mouse orbit controls.",
    interaction: "Drag to orbit, wheel to zoom, press R for pulse and A for auto-spin.",
    tags: ["3D", "model", "lighting", "interactive"],
    file: "demos/orbital-model-lab.html",
  },
  {
    id: "forest-flight",
    title: "Forest Flight",
    stack: "Three.js",
    level: "Advanced",
    description:
      "Low-poly environment scene with procedural terrain, trees, moving sun, and WASD fly mode.",
    interaction: "WASD to move, mouse to look, Shift for speed boost.",
    tags: ["3D", "environment", "terrain", "interactive"],
    file: "demos/forest-flight.html",
  },
  {
    id: "aurora-ribbons",
    title: "Aurora Ribbons",
    stack: "Canvas 2D",
    level: "Beginner+",
    description:
      "Layered luminous wave ribbons with blend modes and pointer-reactive ripple distortions.",
    interaction: "Move pointer across the stage to bend and energize wave bands.",
    tags: ["2D", "waves", "light", "animation"],
    file: "demos/aurora-ribbons.html",
  },
  {
    id: "reactive-metaballs-webgl",
    title: "Reactive Metaballs Shader",
    stack: "WebGL Shader",
    level: "Advanced",
    description:
      "GPU-rendered metaball field with physically inspired lighting and real-time pointer influence.",
    interaction: "Move pointer to pull and shape the liquid blob field.",
    tags: ["2D", "shader", "webgl", "interactive"],
    file: "demos/reactive-metaballs-webgl.html",
  },
  {
    id: "raymarch-tunnel",
    title: "Raymarch Tunnel",
    stack: "WebGL Raymarching",
    level: "Advanced",
    description:
      "Signed-distance-field tunnel renderer with animated geometry and volumetric-style glow.",
    interaction: "Move pointer to steer, press Space to pause travel, and press Q to change speed.",
    tags: ["3D", "shader", "raymarch", "interactive"],
    file: "demos/raymarch-tunnel.html",
  },
  {
    id: "cloth-verlet-wind",
    title: "Cloth Verlet Wind",
    stack: "Canvas Physics",
    level: "Advanced",
    description:
      "Constraint-based cloth simulation with verlet integration, wind forces, and direct manipulation.",
    interaction: "Drag to pull cloth points; press space to reset the cloth.",
    tags: ["2D", "physics", "simulation", "interactive"],
    file: "demos/cloth-verlet-wind.html",
  },
  {
    id: "procedural-city-drive",
    title: "Procedural City Drive",
    stack: "Three.js",
    level: "Advanced",
    description:
      "Large procedural neon city scene with moving traffic lights and first-person street navigation.",
    interaction: "WASD to move, hold mouse and drag to look around.",
    tags: ["3D", "environment", "city", "interactive"],
    file: "demos/procedural-city-drive.html",
  },
  {
    id: "holographic-relief-model",
    title: "Holographic Relief Model",
    stack: "Three.js + GLSL",
    level: "Advanced",
    description:
      "Shader-deformed 3D relief object with scanline holographic shading and orbit inspection.",
    interaction: "Drag to orbit and inspect the animated model surface.",
    tags: ["3D", "model", "shader", "interactive"],
    file: "demos/holographic-relief-model.html",
  },
  {
    id: "boids-swarm-lab",
    title: "Boids Swarm Lab",
    stack: "Canvas Simulation",
    level: "Advanced",
    description:
      "Flocking simulation with alignment, cohesion, separation, and pointer-driven predator/prey behavior.",
    interaction: "Move pointer to influence flock; press F to toggle attract/repel mode.",
    tags: ["2D", "simulation", "physics", "interactive"],
    file: "demos/boids-swarm-lab.html",
  },
  {
    id: "reaction-diffusion-lab",
    title: "Reaction Diffusion Lab",
    stack: "Grid Simulation",
    level: "Advanced",
    description:
      "Gray-Scott style reaction-diffusion pattern generator with live reagent injection and palette cycling.",
    interaction: "Drag to inject reagent, press R to reset, T for palette, and P to pause.",
    tags: ["2D", "simulation", "chemistry", "interactive"],
    file: "demos/reaction-diffusion-lab.html",
  },
  {
    id: "fire-simulation-lab",
    title: "Fire Simulation Lab",
    stack: "Heat Field Simulation",
    level: "Advanced",
    description:
      "Advection-style fire simulation with turbulence, cooling, and spark embers over a dynamic heat field.",
    interaction: "Drag to inject flame, press W to toggle wind, and press R to reset.",
    tags: ["2D", "fire", "simulation", "interactive"],
    file: "demos/fire-simulation-lab.html",
  },
  {
    id: "steam-plume-3d",
    title: "Steam Plume 3D",
    stack: "Three.js Particles",
    level: "Advanced",
    description:
      "Volumetric-style 3D steam/smoke plume with layered particles, turbulence, and orbit camera controls.",
    interaction: "Drag to orbit, wheel to zoom, press S for density, and press W for wind.",
    tags: ["3D", "smoke", "steam", "simulation"],
    file: "demos/steam-plume-3d.html",
  },
  {
    id: "curl-noise-flowfield",
    title: "Curl Noise Flowfield",
    stack: "Particle Advection",
    level: "Advanced",
    description:
      "Incompressible-looking flow field from the curl of a scalar potential, driving dense particle trails.",
    interaction: "Drag to locally energize flow, press R to reseed, and press G to toggle glow.",
    tags: ["2D", "smoke", "flow", "simulation"],
    file: "demos/curl-noise-flowfield.html",
  },
  {
    id: "stable-fluid-smoke-lab",
    title: "Stable Fluid Smoke Lab",
    stack: "Grid Navier-Stokes",
    level: "Advanced",
    description:
      "Stable fluid variant with pressure projection, buoyancy, vorticity confinement, and colorful smoke advection.",
    interaction: "Drag to inject smoke, press R to reset, and press B to toggle buoyancy.",
    tags: ["2D", "fluid", "smoke", "simulation"],
    file: "demos/stable-fluid-smoke-lab.html",
  },
  {
    id: "volumetric-light-shafts",
    title: "Volumetric Light Shafts",
    stack: "WebGL Shader",
    level: "Advanced",
    description:
      "Procedural atmospheric shafts using radial sampling through animated occluders and dynamic light bloom.",
    interaction: "Move pointer to steer the light source and reshape visible rays.",
    tags: ["2D", "light", "shader", "animation"],
    file: "demos/volumetric-light-shafts.html",
  },
  {
    id: "stem-growth-simulation",
    title: "Stem Growth Simulation",
    stack: "Procedural Botany",
    level: "Advanced",
    description:
      "Rule-based plant growth with branching stems, light-seeking behavior, and leaf emergence.",
    interaction: "Click to plant seeds, press R to reset, and press W to toggle wind.",
    tags: ["2D", "stem", "growth", "simulation"],
    file: "demos/stem-growth-simulation.html",
  },
  {
    id: "falling-sand-lab",
    title: "Falling Sand Lab",
    stack: "Cellular Physics",
    level: "Advanced",
    description:
      "Classic particle-cell simulation with sand, water, and stone interactions under gravity.",
    interaction: "Drag to paint particles; keys 1/2/3/0 choose material, C clears.",
    tags: ["2D", "physics", "simulation", "interactive"],
    file: "demos/falling-sand-lab.html",
  },
  {
    id: "water-caustics-shader",
    title: "Water Caustics Shader",
    stack: "WebGL Shader",
    level: "Advanced",
    description:
      "Animated underwater caustic interference with pointer-driven ripple perturbations.",
    interaction: "Move pointer to disturb water-light patterns in real time.",
    tags: ["2D", "water", "shader", "light"],
    file: "demos/water-caustics-shader.html",
  },
  {
    id: "shockwave-ripples",
    title: "Shockwave Ripples",
    stack: "Wave Equation Grid",
    level: "Advanced",
    description:
      "Surface-wave simulation with refractive-style shading and interactive shockwave injection.",
    interaction: "Drag to inject ripples, press R to reset, and press A to toggle auto pulses.",
    tags: ["2D", "water", "simulation", "interactive"],
    file: "demos/shockwave-ripples.html",
  },
  {
    id: "magnetic-field-lines",
    title: "Magnetic Field Lines",
    stack: "Particle Field Tracing",
    level: "Advanced",
    description:
      "Dense tracer visualization of a dynamic electromagnetic-style vector field with interactive poles.",
    interaction: "Drag to move the interactive pole, press F to flip polarity, and press R to reseed.",
    tags: ["2D", "particles", "field", "interactive"],
    file: "demos/magnetic-field-lines.html",
  },
  {
    id: "glass-refraction-shader",
    title: "Glass Refraction Shader",
    stack: "WebGL Shader",
    level: "Advanced",
    description:
      "Real-time refractive glass distortion with chromatic separation and animated micro-surface noise.",
    interaction: "Move pointer to bend the refraction profile in real time.",
    tags: ["2D", "shader", "refraction", "light"],
    file: "demos/glass-refraction-shader.html",
  },
  {
    id: "rain-glass-distortion",
    title: "Rain Glass Distortion",
    stack: "2D Refraction FX",
    level: "Advanced",
    description:
      "Sliding raindrops distort and refract background lights for a cinematic wet-glass effect.",
    interaction: "Press D for dense rain and R to reset droplet distribution.",
    tags: ["2D", "rain", "distortion", "animation"],
    file: "demos/rain-glass-distortion.html",
  },
  {
    id: "fireworks-night-sky",
    title: "Fireworks Night Sky",
    stack: "Particle System",
    level: "Advanced",
    description:
      "Interactive fireworks with launch trails, radial burst physics, and glowing embers.",
    interaction: "Click/tap to launch fireworks and press A to toggle auto show.",
    tags: ["2D", "particles", "fireworks", "interactive"],
    file: "demos/fireworks-night-sky.html",
  },
  {
    id: "terrain-waves-3d",
    title: "Terrain Waves 3D",
    stack: "Three.js Geometry",
    level: "Advanced",
    description:
      "Deforming procedural terrain mesh with dynamic lighting and orbit camera controls.",
    interaction: "Drag to orbit, wheel to zoom, and press S to toggle wireframe.",
    tags: ["3D", "terrain", "waves", "interactive"],
    file: "demos/terrain-waves-3d.html",
  },
  {
    id: "kaleidoscope-mandala-shader",
    title: "Kaleidoscope Mandala Shader",
    stack: "WebGL Shader",
    level: "Advanced",
    description:
      "Symmetry-folded procedural mandala with layered noise petals and chromatic modulation.",
    interaction: "Move pointer to warp the symmetry center in real time.",
    tags: ["2D", "shader", "kaleidoscope", "animation"],
    file: "demos/kaleidoscope-mandala-shader.html",
  },
  {
    id: "crystal-growth-dla",
    title: "Crystal Growth DLA",
    stack: "Diffusion-Limited Aggregation",
    level: "Advanced",
    description:
      "Particle-walker crystal accretion simulation that grows branching aggregates from seeded nuclei.",
    interaction: "Click to add seeds, press R to reset, and press F for fast growth mode.",
    tags: ["2D", "simulation", "crystal", "interactive"],
    file: "demos/crystal-growth-dla.html",
  },
  {
    id: "plasma-arc-reactor",
    title: "Plasma Arc Reactor",
    stack: "Canvas Field FX",
    level: "Advanced",
    description:
      "Orbiting energy nodes connect through branching electrical arcs with overload bursts and glow trails.",
    interaction: "Move pointer to bend arcs, click to overload, R to regenerate nodes, S for slow mode.",
    tags: ["2D", "lightning", "plasma", "interactive"],
    file: "demos/plasma-arc-reactor.html",
  },
  {
    id: "metaball-contour-lab",
    title: "Metaball Contour Lab",
    stack: "Marching Squares",
    level: "Advanced",
    description:
      "Dynamic metaball scalar field visualized as animated contour isolines with live pointer injection.",
    interaction: "Move pointer to influence field, click to add blobs, C to clear extras, R to reseed.",
    tags: ["2D", "metaball", "simulation", "interactive"],
    file: "demos/metaball-contour-lab.html",
  },
  {
    id: "hyperspace-starfield",
    title: "Hyperspace Starfield",
    stack: "3D Projection Trails",
    level: "Advanced",
    description:
      "Perspective star tunnel with streaking particles, steerable vanishing point, and burst warp acceleration.",
    interaction: "Move pointer to steer, click burst, W toggles warp lock, and R resets the field.",
    tags: ["3D", "space", "particles", "interactive"],
    file: "demos/hyperspace-starfield.html",
  },
  {
    id: "black-hole-lensing",
    title: "Black Hole Lensing",
    stack: "2.5D Relativity FX",
    level: "Advanced",
    description:
      "Perspective starfield with gravitational-style lensing, accretion glow, and steerable event horizon.",
    interaction: "Move pointer to steer, wheel changes mass, A toggles drift, and R resets stars.",
    tags: ["3D", "space", "light", "interactive"],
    file: "demos/black-hole-lensing.html",
  },
  {
    id: "electrostatic-field-sandbox",
    title: "Electrostatic Field Sandbox",
    stack: "Particle Field Simulation",
    level: "Advanced",
    description:
      "Live electric-field playground where charged poles shape tracer streamlines and force flows.",
    interaction: "Click for + charge, Shift+click or right-click for -, F flips polarity, X resets.",
    tags: ["2D", "particles", "field", "simulation"],
    file: "demos/electrostatic-field-sandbox.html",
  },
  {
    id: "moebius-ribbon-lab",
    title: "Moebius Ribbon Lab",
    stack: "Three.js Geometry",
    level: "Advanced",
    description:
      "Procedural Moebius strip with dynamic lighting, floating sparks, and orbit-style camera controls.",
    interaction: "Drag to orbit, wheel to zoom, W for wireframe, A auto-spin, and R pulse burst.",
    tags: ["3D", "model", "geometry", "interactive"],
    file: "demos/moebius-ribbon-lab.html",
  },
  {
    id: "nebula-noise-clouds",
    title: "Nebula Noise Clouds",
    stack: "Procedural Noise Field",
    level: "Advanced",
    description:
      "Layered fractal-style cloud field with swirling turbulence and cinematic nebula palette shifts.",
    interaction: "Move pointer to stir flow, C cycles palette, P pauses, and R resets drift seed.",
    tags: ["2D", "clouds", "noise", "animation"],
    file: "demos/nebula-noise-clouds.html",
  },
  {
    id: "ferrofluid-magnet-lab",
    title: "Ferrofluid Magnet Lab",
    stack: "Field Contour Simulation",
    level: "Advanced",
    description:
      "Ferrofluid-style contour visualization driven by interactive magnetic poles and dynamic ripple ridges.",
    interaction: "Drag to move main pole, click to add poles, F flips polarity, and R resets.",
    tags: ["2D", "field", "simulation", "interactive"],
    file: "demos/ferrofluid-magnet-lab.html",
  },
  {
    id: "polar-vortex-flow",
    title: "Polar Vortex Flow",
    stack: "Particle Advection",
    level: "Advanced",
    description:
      "Multi-center vortex flowfield that advects dense tracers into spiraling atmospheric bands.",
    interaction: "Move pointer to steer flow, click swirl burst, R reset, and G toggle glow.",
    tags: ["2D", "flow", "particles", "interactive"],
    file: "demos/polar-vortex-flow.html",
  },
  {
    id: "wireframe-wormhole-3d",
    title: "Wireframe Wormhole 3D",
    stack: "Three.js Tunnel",
    level: "Advanced",
    description:
      "Neon wireframe tunnel flythrough with ring-slice deformation, camera steering, and speed boosts.",
    interaction: "Move pointer to steer, click boost, Q changes speed mode, and P pauses.",
    tags: ["3D", "tunnel", "wireframe", "interactive"],
    file: "demos/wireframe-wormhole-3d.html",
  },
  {
    id: "prism-caustic-interference",
    title: "Prism Caustic Interference",
    stack: "Interference Waves",
    level: "Advanced",
    description:
      "Chromatic caustic interference field with prism-like refraction patterns and animated wave pulses.",
    interaction: "Move pointer to refract center, click pulse, C cycles palette, and P pauses.",
    tags: ["2D", "light", "caustics", "animation"],
    file: "demos/prism-caustic-interference.html",
  },
  {
    id: "realistic-smoke-plume",
    title: "Realistic Smoke Plume",
    stack: "Grid Advection",
    level: "Advanced",
    description:
      "Buoyant smoke advection with thermal lift, turbulence, cooling, and wind-driven plume shaping.",
    interaction: "Drag to inject smoke, W toggles wind, D toggles dense mode, and R resets.",
    tags: ["2D", "smoke", "simulation", "interactive"],
    file: "demos/realistic-smoke-plume.html",
  },
  {
    id: "volumetric-fire-column",
    title: "Volumetric Fire Column",
    stack: "Particle Plume System",
    level: "Advanced",
    description:
      "Layered flame, ember, and soot particle system with turbulent updraft and cinematic volumetric look.",
    interaction: "Move pointer to steer nozzle, click burst, W cycles wind, and R resets.",
    tags: ["2D", "fire", "smoke", "simulation"],
    file: "demos/volumetric-fire-column.html",
  },
  {
    id: "wildfire-smoke-front",
    title: "Wildfire Smoke Front",
    stack: "Cellular Spread Model",
    level: "Advanced",
    description:
      "Wind-aware wildfire spread simulation with fuel burn-down, ignition fronts, and moving smoke cover.",
    interaction: "Click/drag to ignite terrain, W changes wind, P pauses, and R resets.",
    tags: ["2D", "fire", "smoke", "simulation"],
    file: "demos/wildfire-smoke-front.html",
  },
  {
    id: "ember-fog-turbulence",
    title: "Ember Fog Turbulence",
    stack: "Turbulent Particle Field",
    level: "Advanced",
    description:
      "Atmospheric fog simulation with turbulence-driven advection and glowing ember particulates.",
    interaction: "Move pointer to stir field, click ember burst, G toggles glow, and R resets.",
    tags: ["2D", "smoke", "embers", "interactive"],
    file: "demos/ember-fog-turbulence.html",
  },
  {
    id: "liquid-metal-flowfield",
    title: "Liquid Metal Flowfield",
    stack: "Scalar Field Chrome",
    level: "Advanced",
    description:
      "Reflective liquid-metal field with dynamic blob advection and chrome-like highlight response.",
    interaction: "Move pointer to pull flow, click to inject droplets, P pauses, and R resets.",
    tags: ["2D", "liquid", "metal", "interactive"],
    file: "demos/liquid-metal-flowfield.html",
  },
  {
    id: "storm-ocean-surface",
    title: "Storm Ocean Surface",
    stack: "Wave Grid Simulation",
    level: "Advanced",
    description:
      "Stormy ocean wave-grid with wind-driven chop, crest foam shading, and interactive splashes.",
    interaction: "Click/drag to splash, W cycles wind, A toggles auto storms, and R resets.",
    tags: ["2D", "water", "waves", "simulation"],
    file: "demos/storm-ocean-surface.html",
  },
  {
    id: "laser-scanner-arena",
    title: "Laser Scanner Arena",
    stack: "Light Beam System",
    level: "Advanced",
    description:
      "Multi-emitter scanner network with reflective nodes, sweep gating, and pulse-synchronized beams.",
    interaction: "Move pointer to steer center scanner, click pulse, C color mode, and R resets nodes.",
    tags: ["2D", "light", "laser", "interactive"],
    file: "demos/laser-scanner-arena.html",
  },
  {
    id: "ash-plume-simulation",
    title: "Ash Plume Simulation",
    stack: "Volcanic Particle Sim",
    level: "Advanced",
    description:
      "Volcanic ash and soot plume with thermal lift, wind drift, ember fallout, and layered haze.",
    interaction: "Click eruption burst, move pointer to shift vent, W cycles wind, and R resets.",
    tags: ["2D", "smoke", "ash", "simulation"],
    file: "demos/ash-plume-simulation.html",
  },
  {
    id: "dust-devil-vortex",
    title: "Dust Devil Vortex",
    stack: "Turbulent Particle Vortex",
    level: "Advanced",
    description:
      "Desert dust vortex effect with radial suction, swirling advection, and wind-sheared particulate trails.",
    interaction: "Move pointer to steer vortex, click gust burst, W changes wind, G glow, and R resets.",
    tags: ["2D", "particles", "vortex", "interactive"],
    file: "demos/dust-devil-vortex.html",
  },
  {
    id: "frost-crystal-growth",
    title: "Frost Crystal Growth",
    stack: "Cellular Ice Growth",
    level: "Advanced",
    description:
      "Branching frost propagation simulation with moisture gradients, cooling dynamics, and crystal bloom.",
    interaction: "Click/drag to seed frost, C triggers cold snap, and R resets the pane.",
    tags: ["2D", "simulation", "crystal", "interactive"],
    file: "demos/frost-crystal-growth.html",
  },
  {
    id: "hologram-particle-statue",
    title: "Hologram Particle Statue",
    stack: "Three.js Point Cloud",
    level: "Advanced",
    description:
      "Holographic particle statue with scanline sweeps, glitch offsets, and orbit camera inspection.",
    interaction: "Drag to orbit, wheel to zoom, click glitch burst, A auto-spin, and R reseed cloud.",
    tags: ["3D", "hologram", "particles", "interactive"],
    file: "demos/hologram-particle-statue.html",
  },
  {
    id: "lava-flow-topography",
    title: "Lava Flow Topography",
    stack: "Terrain Heat Simulation",
    level: "Advanced",
    description:
      "Molten lava spread model over synthetic terrain with slope-driven flow, cooling crust, and vent injection.",
    interaction: "Click/drag to open vents, F adds fissures, P pauses, and R rebuilds terrain.",
    tags: ["2D", "lava", "simulation", "interactive"],
    file: "demos/lava-flow-topography.html",
  },
  {
    id: "soap-film-iridescence",
    title: "Soap Film Iridescence",
    stack: "Thin-Film Interference",
    level: "Advanced",
    description:
      "Iridescent thin-film color simulation with flowing thickness waves and chromatic fringe shifts.",
    interaction: "Move pointer to bend film, click pulse, C cycles palette, and P pauses.",
    tags: ["2D", "shader", "iridescence", "interactive"],
    file: "demos/soap-film-iridescence.html",
  },
  {
    id: "fractal-lightning-web",
    title: "Fractal Lightning Web",
    stack: "Recursive Lightning",
    level: "Advanced",
    description:
      "Branching lightning network connecting charged nodes with recursive bolt splits and glow flicker.",
    interaction: "Move pointer to attract arcs, click overload burst, A toggles auto pulses, and R reseeds nodes.",
    tags: ["2D", "lightning", "light", "interactive"],
    file: "demos/fractal-lightning-web.html",
  },
  {
    id: "sandstorm-particle-wall",
    title: "Sandstorm Particle Wall",
    stack: "Particle Weather Field",
    level: "Advanced",
    description:
      "Dense sandstorm wall with depth-layer particles, directional shear wind, and gust-driven turbulence.",
    interaction: "Move pointer to bend gusts, click burst, W cycles wind, and D toggles density.",
    tags: ["2D", "particles", "weather", "interactive"],
    file: "demos/sandstorm-particle-wall.html",
  },
  {
    id: "bioluminescent-reef-3d",
    title: "Bioluminescent Reef 3D",
    stack: "Three.js Underwater Scene",
    level: "Advanced",
    description:
      "Underwater reef environment with glowing organisms, drifting particulate bloom, and orbit camera control.",
    interaction: "Drag to orbit, wheel to zoom, click glow pulse, A auto-spin, and R reseeds creatures.",
    tags: ["3D", "environment", "bioluminescent", "interactive"],
    file: "demos/bioluminescent-reef-3d.html",
  },
  {
    id: "heat-haze-distortion",
    title: "Heat Haze Distortion",
    stack: "2D Refraction Simulation",
    level: "Advanced",
    description:
      "Thermal shimmer distortion over a procedural scene with rising turbulence and localized heat columns.",
    interaction: "Move pointer to position heat source, click burst shimmer, W changes wind, and P pauses.",
    tags: ["2D", "distortion", "heat", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Wind Mode (W)",
    file: "demos/heat-haze-distortion.html",
  },
  {
    id: "ink-diffusion-paper",
    title: "Ink Diffusion Paper",
    stack: "Pigment Diffusion Solver",
    level: "Advanced",
    description:
      "Ink-on-paper simulation with wetness-dependent diffusion, capillary bleed, and textured absorption.",
    interaction: "Click/drag to paint ink, C cycles palette, W changes wetness mode, and R resets.",
    tags: ["2D", "ink", "simulation", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Wetness Mode (W)",
    file: "demos/ink-diffusion-paper.html",
  },
  {
    id: "raymarched-crystal-cavern",
    title: "Raymarched Crystal Cavern",
    stack: "WebGL Raymarching",
    level: "Advanced",
    description:
      "Signed-distance crystal cavern flythrough with reflective shards, volumetric fog, and pulse flares.",
    interaction: "Move pointer to steer, click pulse flare, Q cycles speed, and Space pauses travel.",
    tags: ["3D", "shader", "raymarch", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Speed Mode (Q)",
    file: "demos/raymarched-crystal-cavern.html",
  },
  {
    id: "jelly-softbody-grid",
    title: "Jelly Softbody Grid",
    stack: "Mass-Spring Physics",
    level: "Advanced",
    description:
      "Elastic jelly sheet simulation with spring damping, pointer grabbing, and impulse shockwave propagation.",
    interaction: "Drag to grab points, click impulse wave, G toggles gravity, P pauses, and R resets.",
    tags: ["2D", "physics", "simulation", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Gravity Toggle (G)",
    file: "demos/jelly-softbody-grid.html",
  },
  {
    id: "volumetric-cloud-chamber-3d",
    title: "Volumetric Cloud Chamber 3D",
    stack: "Three.js Point Cloud",
    level: "Advanced",
    description:
      "Dense volumetric-style cloud chamber with animated point fog, light shafts, and orbital camera motion.",
    interaction: "Drag to orbit, wheel to zoom, click pulse burst, A toggles auto-spin, C palette, and R reseeds.",
    tags: ["3D", "clouds", "volumetric", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Palette Cycle (C)",
    file: "demos/volumetric-cloud-chamber-3d.html",
  },
  {
    id: "electric-arc-tesla-field",
    title: "Electric Arc Tesla Field",
    stack: "Canvas Arc Simulation",
    level: "Advanced",
    description:
      "Branching high-voltage arc network with charged nodes, recursive bolts, and glow-heavy electrical bloom.",
    interaction: "Move pointer to bend arcs, click overload burst, C cycles palette, R reseeds, and A toggles autopilot.",
    tags: ["2D", "lightning", "particles", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Palette (C)",
    file: "demos/electric-arc-tesla-field.html",
  },
  {
    id: "fluid-ink-vortex",
    title: "Fluid Ink Vortex",
    stack: "Grid Advection",
    level: "Advanced",
    description:
      "Fluid-style dye and velocity advection with vortex forcing, pointer injection, and cinematic pigment drift.",
    interaction: "Drag to inject ink, click impulse burst, C cycles palette, W changes wind mode, and R resets.",
    tags: ["2D", "fluid", "ink", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Wind Mode (W)",
    file: "demos/fluid-ink-vortex.html",
  },
  {
    id: "pyroclastic-cloud-lab",
    title: "Pyroclastic Cloud Lab",
    stack: "Volcanic Particle Simulation",
    level: "Advanced",
    description:
      "Volcanic eruption plume with ash clouds, ember trails, buoyant lift, and wind-sheared pyroclastic drift.",
    interaction: "Move pointer to shift vent, click eruption burst, W changes wind, E adds extra burst, and R resets.",
    tags: ["2D", "fire", "smoke", "simulation"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Wind Mode (W)",
    file: "demos/pyroclastic-cloud-lab.html",
  },
  {
    id: "crystalline-orbit-assembly-3d",
    title: "Crystalline Orbit Assembly 3D",
    stack: "Three.js Procedural Model",
    level: "Advanced",
    description:
      "Procedural crystal machine with emissive orbit rings, floating shards, animated sparks, and orbit inspection.",
    interaction: "Drag to orbit, wheel to zoom, click pulse, A toggles auto-spin, C changes palette, and R reseeds shards.",
    tags: ["3D", "model", "crystal", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Palette Cycle (C)",
    file: "demos/crystalline-orbit-assembly-3d.html",
  },
  {
    id: "polar-light-interference-shader",
    title: "Polar Light Interference Shader",
    stack: "WebGL Shader",
    level: "Advanced",
    description:
      "Polar-domain light interference shader with chromatic fringes, concentric pulse rings, and pointer steering.",
    interaction: "Move pointer to steer center, click pulse ring, C cycles palette, S changes speed, and P pauses.",
    tags: ["2D", "shader", "light", "interactive"],
    controls: "Brightness, Saturation, Contrast, Hue, Blur + Speed Mode (S)",
    file: "demos/polar-light-interference-shader.html",
  },
];

const state = {
  query: "",
  activeTags: new Set(),
  viewMode: localStorage.getItem("effectsLabViewMode") === "table" ? "table" : "cards",
};

const grid = document.getElementById("demoGrid");
const tableWrap = document.getElementById("demoTableWrap");
const tableBody = document.getElementById("demoTableBody");
const template = document.getElementById("demoCardTemplate");
const rowTemplate = document.getElementById("demoRowTemplate");
const searchInput = document.getElementById("searchInput");
const tagFilters = document.getElementById("tagFilters");
const clearFilters = document.getElementById("clearFilters");
const demoCount = document.getElementById("demoCount");
const cardViewBtn = document.getElementById("cardViewBtn");
const tableViewBtn = document.getElementById("tableViewBtn");

const DEFAULT_TWEAK_CONTROLS = "Brightness, Saturation, Contrast, Hue, Blur";

function getTags() {
  return [...new Set(demos.flatMap((demo) => demo.tags))].sort((a, b) => a.localeCompare(b));
}

function getControlsLabel(demo) {
  return demo.controls || DEFAULT_TWEAK_CONTROLS;
}

function getViewerUrl(demo) {
  const params = new URLSearchParams({
    demo: demo.file,
    title: demo.title,
    id: demo.id,
  });
  return `demo-viewer.html?${params.toString()}`;
}

function isVisible(demo) {
  const haystack = `${demo.title} ${demo.description} ${demo.tags.join(" ")}`.toLowerCase();
  const matchesQuery = !state.query || haystack.includes(state.query);
  const matchesTags =
    state.activeTags.size === 0 || [...state.activeTags].every((tag) => demo.tags.includes(tag));

  return matchesQuery && matchesTags;
}

function createTagChip(tag, active = false, clickable = true) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = `chip${active ? " active" : ""}`;
  chip.textContent = tag;

  if (!clickable) {
    chip.setAttribute("aria-hidden", "true");
    chip.tabIndex = -1;
    return chip;
  }

  chip.addEventListener("click", () => {
    if (state.activeTags.has(tag)) {
      state.activeTags.delete(tag);
    } else {
      state.activeTags.add(tag);
    }

    renderFilters();
    renderResults();
  });

  return chip;
}

function renderFilters() {
  tagFilters.innerHTML = "";

  for (const tag of getTags()) {
    const chip = createTagChip(tag, state.activeTags.has(tag), true);
    tagFilters.append(chip);
  }
}

async function downloadFile(path, fallbackName) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }

    const content = await response.text();
    const blob = new Blob([content], { type: "text/html;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = objectUrl;
    anchor.download = `${fallbackName}.html`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
  } catch (error) {
    console.error(error);
    window.open(path, "_blank", "noopener");
  }
}

function renderGrid(visibleDemos) {
  grid.innerHTML = "";

  if (visibleDemos.length === 0) {
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = "No demos match your filters. Clear filters and try a broader query.";
    grid.append(empty);
    return;
  }

  visibleDemos.forEach((demo, index) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".demo-card");

    clone.querySelector(".stack").textContent = demo.stack;
    clone.querySelector(".level").textContent = demo.level;
    clone.querySelector(".title").textContent = demo.title;
    clone.querySelector(".description").textContent = demo.description;
    clone.querySelector(".interaction").textContent = demo.interaction;
    clone.querySelector(".controls").textContent = `Tweak menu: ${getControlsLabel(demo)}`;

    const tagsContainer = clone.querySelector(".tags");
    demo.tags.forEach((tag) => {
      tagsContainer.append(createTagChip(tag, false, false));
    });

    const openButton = clone.querySelector(".open");
    openButton.href = getViewerUrl(demo);

    const downloadButton = clone.querySelector(".download");
    downloadButton.addEventListener("click", () => {
      downloadFile(demo.file, demo.id);
    });

    card.style.animationDelay = `${index * 70}ms`;
    grid.append(clone);
  });
}

function renderTable(visibleDemos) {
  tableBody.innerHTML = "";

  if (visibleDemos.length === 0) {
    const row = document.createElement("tr");
    row.className = "empty-row";
    row.innerHTML =
      '<td colspan="6">No demos match your filters. Clear filters and try a broader query.</td>';
    tableBody.append(row);
    return;
  }

  visibleDemos.forEach((demo) => {
    const clone = rowTemplate.content.cloneNode(true);
    clone.querySelector(".title").textContent = demo.title;
    clone.querySelector(".description").textContent = demo.description;
    clone.querySelector(".interaction").textContent = demo.interaction;
    clone.querySelector(".stack").textContent = demo.stack;
    clone.querySelector(".level").textContent = demo.level;
    clone.querySelector(".controls").textContent = getControlsLabel(demo);

    const tagsContainer = clone.querySelector(".tags");
    demo.tags.forEach((tag) => {
      tagsContainer.append(createTagChip(tag, false, false));
    });

    const openButton = clone.querySelector(".open");
    openButton.href = getViewerUrl(demo);

    const downloadButton = clone.querySelector(".download");
    downloadButton.addEventListener("click", () => {
      downloadFile(demo.file, demo.id);
    });

    tableBody.append(clone);
  });
}

function setViewMode(mode) {
  state.viewMode = mode === "table" ? "table" : "cards";
  localStorage.setItem("effectsLabViewMode", state.viewMode);

  const cards = state.viewMode === "cards";
  grid.hidden = !cards;
  tableWrap.hidden = cards;

  cardViewBtn.classList.toggle("active", cards);
  tableViewBtn.classList.toggle("active", !cards);
}

function renderResults() {
  const visibleDemos = demos.filter(isVisible);
  demoCount.textContent = `${visibleDemos.length} / ${demos.length} demos`;
  renderGrid(visibleDemos);
  renderTable(visibleDemos);
  setViewMode(state.viewMode);
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderResults();
});

clearFilters.addEventListener("click", () => {
  state.activeTags.clear();
  state.query = "";
  searchInput.value = "";
  renderFilters();
  renderResults();
});

cardViewBtn.addEventListener("click", () => {
  setViewMode("cards");
});

tableViewBtn.addEventListener("click", () => {
  setViewMode("table");
});

renderFilters();
renderResults();
