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
    interaction: "Drag to orbit, wheel to zoom, press R to toggle ring pulse.",
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
