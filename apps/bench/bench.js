/* Tek Bench — shell logic.
   Hash-routed (#/<tool-id>) so every tool is deep-linkable. A single iframe
   is created per selection and torn down on switch — the bundled drops are
   multi-MB, so we never keep more than one alive. */

import { GROUPS, TOOLS } from './tools.js';

const ROOT = '../../'; // apps/bench/ → repo root
const rail = document.getElementById('rail');
const home = document.getElementById('home');
const stage = document.getElementById('stage');
const toolbar = document.getElementById('toolbar');
const tbName = document.getElementById('tb-name');
const tbBadge = document.getElementById('tb-badge');
const tbSource = document.getElementById('tb-source');
const tbWidth = document.getElementById('tb-width');
const tbReload = document.getElementById('tb-reload');
const tbOpen = document.getElementById('tb-open');

const byId = Object.fromEntries(TOOLS.map(t => [t.id, t]));

/* ── Rail ── */
const railFooter = rail.querySelector('.rail-footer');
for (const group of GROUPS) {
  const tools = TOOLS.filter(t => t.group === group.id);
  if (!tools.length) continue;
  const wrap = document.createElement('div');
  wrap.className = 'rail-group';
  const label = document.createElement('div');
  label.className = 'rail-group-label';
  label.textContent = group.label;
  wrap.appendChild(label);
  for (const tool of tools) {
    const btn = document.createElement('button');
    btn.className = 'rail-item';
    btn.type = 'button';
    btn.dataset.tool = tool.id;
    btn.textContent = tool.name;
    btn.addEventListener('click', () => { location.hash = '#/' + tool.id; });
    wrap.appendChild(btn);
  }
  rail.insertBefore(wrap, railFooter);
}

/* ── Home cards ── */
{
  const intro = document.createElement('div');
  intro.innerHTML = `
    <h1 class="home-title">Tek Bench</h1>
    <p class="home-sub">One place for the design system’s micro tools, reference pages,
    and prototype drops. Pick a tool from the rail or a card below — everything opens
    in the stage and stays deep-linkable.</p>`;
  home.appendChild(intro);
  for (const group of GROUPS) {
    const tools = TOOLS.filter(t => t.group === group.id);
    if (!tools.length) continue;
    const label = document.createElement('div');
    label.className = 'home-group-label';
    label.textContent = group.label;
    home.appendChild(label);
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    for (const tool of tools) {
      const card = document.createElement('button');
      card.className = 'card';
      card.type = 'button';
      card.addEventListener('click', () => { location.hash = '#/' + tool.id; });
      card.innerHTML = `
        <div class="card-head">
          <span class="card-name"></span>
          <span class="badge ${tool.kind}">${tool.kind}</span>
        </div>
        <div class="card-desc"></div>
        <div class="card-source"></div>`;
      card.querySelector('.card-name').textContent = tool.name;
      card.querySelector('.card-desc').textContent = tool.desc;
      card.querySelector('.card-source').textContent = tool.source;
      grid.appendChild(card);
    }
    home.appendChild(grid);
  }
}

/* ── Routing ── */
let current = null;

function render() {
  const id = location.hash.replace(/^#\/?/, '');
  const tool = byId[id] || null;

  for (const btn of rail.querySelectorAll('.rail-item')) {
    btn.classList.toggle('active', !!tool && btn.dataset.tool === tool.id);
  }

  if (!tool) {
    current = null;
    document.title = 'Tek Bench — DS Workstation';
    toolbar.hidden = true;
    stage.hidden = true;
    stage.replaceChildren();
    home.hidden = false;
    return;
  }

  document.title = tool.name + ' — Tek Bench';
  home.hidden = true;
  toolbar.hidden = false;
  stage.hidden = false;

  tbName.textContent = tool.name;
  tbBadge.textContent = tool.kind;
  tbBadge.className = 'badge ' + tool.kind;
  tbSource.textContent = tool.source + (tool.note ? ' — ' + tool.note : '');
  tbSource.title = tool.source;
  tbOpen.href = ROOT + tool.path;

  if (current !== tool.id) {
    current = tool.id;
    mountFrame(tool);
  }
}

function mountFrame(tool) {
  stage.replaceChildren();
  const frame = document.createElement('iframe');
  frame.src = ROOT + tool.path;
  frame.title = tool.name;
  stage.appendChild(frame);
}

tbReload.addEventListener('click', () => {
  const tool = byId[current];
  if (tool) mountFrame(tool);
});

tbWidth.addEventListener('change', () => {
  stage.classList.toggle('sized', !!tbWidth.value);
  stage.style.setProperty('--frame-w', tbWidth.value || '100%');
});

window.addEventListener('hashchange', render);
render();
