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
];

const state = {
  query: "",
  activeTags: new Set(),
};

const grid = document.getElementById("demoGrid");
const template = document.getElementById("demoCardTemplate");
const searchInput = document.getElementById("searchInput");
const tagFilters = document.getElementById("tagFilters");
const clearFilters = document.getElementById("clearFilters");
const demoCount = document.getElementById("demoCount");

function getTags() {
  return [...new Set(demos.flatMap((demo) => demo.tags))].sort((a, b) => a.localeCompare(b));
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
    renderGrid();
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

function renderGrid() {
  grid.innerHTML = "";

  const visibleDemos = demos.filter(isVisible);
  demoCount.textContent = `${visibleDemos.length} demos visible`;

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

    const tagsContainer = clone.querySelector(".tags");
    demo.tags.forEach((tag) => {
      tagsContainer.append(createTagChip(tag, false, false));
    });

    const openButton = clone.querySelector(".open");
    openButton.href = demo.file;

    const downloadButton = clone.querySelector(".download");
    downloadButton.addEventListener("click", () => {
      downloadFile(demo.file, demo.id);
    });

    card.style.animationDelay = `${index * 70}ms`;
    grid.append(clone);
  });
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderGrid();
});

clearFilters.addEventListener("click", () => {
  state.activeTags.clear();
  state.query = "";
  searchInput.value = "";
  renderFilters();
  renderGrid();
});

renderFilters();
renderGrid();
