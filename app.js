const projects = [
  {name:'EcoQuest',repo:'https://github.com/yashKumar2412/EcoQuest',skills:['fullstack','backend','frontend'],type:'COMMUNITY / HACKATHON',caption:'SMALL ACTIONS. SHARED IMPACT.',color:'#d5df8a',date:'April 2025',metric:'2nd place · SJ Hacks',summary:'Making community cleanup a little more rewarding.',tech:['FastAPI','JavaScript','Google Maps','Firebase'],details:['Built a gamified platform to promote community-driven cleanup efforts.','Integrated maps and activity tracking to help people record and earn rewards for their participation.','Won 2nd place at SJ Hacks 2025.']},
  {name:'Scales',repo:'https://github.com/yashKumar2412/Scales',skills:['distributed','cloud','backend','reliability','performance'],type:'DISTRIBUTED SYSTEMS',caption:'KEEP THE TRAFFIC MOVING.',color:'#aec9df',date:'January 2025',metric:'Custom load balancer',summary:'Distributing traffic across healthy servers, built from scratch.',tech:['Spring Boot','AWS EC2','Amazon SQS'],details:['Constructed a custom load balancer to distribute traffic dynamically across healthy AWS EC2 instances.','Implemented an SQS-driven heartbeat protocol to support fault tolerance and auto-scaling mechanisms.']},
  {name:'MarketMind AI Hub',repo:'https://github.com/ankitojha2705/marketmind_AI_Hub',skills:['ai','fullstack','backend','frontend','cloud'],type:'AI / MULTI-AGENT',caption:'A TEAM BEHIND THE WORKFLOW.',color:'#eab492',date:'September 2025 – May 2026',metric:'5+ social platforms',summary:'A multi-agent platform for end-to-end marketing workflows.',tech:['React','FastAPI','AWS ECS'],details:['Designed a multi-agent platform to automate marketing workflows across more than five social media platforms.','Built orchestrator-driven agent services for content scheduling and analytics feedback loops.','Deployed the agent services on AWS ECS.']},
  {name:'NextMeal',repo:'https://github.com/shahchayan9/NextMeal',skills:['backend','distributed','cloud','devops','ai'],type:'CLOUD / AI',caption:'WHAT’S NEXT FOR DINNER?',color:'#d9cee9',date:'October – December 2024',metric:'Distributed microservices',summary:'Restaurant discovery with recommendations and an AI assistant.',tech:['Spring Boot','Python','AWS','OpenSearch','OpenAI API'],details:['Delivered a restaurant platform using distributed REST microservices on AWS.','Implemented a RAG-based assistant with OpenSearch vector search.','Built automated container deployment pipelines with GitHub Actions, ECR, and ECS.','Trained a recommendation model using restaurant data, ratings, and review sentiment.']},
  {name:'Audit Blockchain',repo:'https://github.com/shahchayan9/Audit-Blockchaining',skills:['distributed','reliability','backend'],type:'RELIABILITY / SYSTEMS',caption:'A RECORD YOU CAN VERIFY.',color:'#b9cfb8',date:'April – May 2025',metric:'Fault-tolerant audit logs',summary:'A distributed system for securely logging and verifying file audits.',tech:['Python','gRPC','Protobuf'],details:['Built a fault-tolerant distributed blockchain system to log and verify file audits.','Implemented leader election, heartbeats, and automatic recovery to improve reliability and consistency.']},
  {name:'SmartReach',repo:'https://github.com/yashKumar2412/SmartReach',skills:['ai','fullstack','backend','frontend','reliability'],type:'AI / AUTOMATION',caption:'RESEARCH BEFORE REACHING OUT.',color:'#e5ce86',date:'November – December 2025',metric:'Verification in the loop',summary:'Research, verification, and review in one outreach workflow.',tech:['Next.js','FastAPI','SerpAPI'],details:['Built a multi-agent outreach platform that automates research, verification, content generation, and review cycles.','Integrated company verification into the agent pipeline to reduce hallucinations and improve reliability.']}
];
const journey = [
  {date:'AUG 2026 – PRESENT',name:'Uber',role:'Software Engineer II',current:true,logo:'assets/logo-uber.svg',logoAlt:'Uber logo',skills:['backend','distributed','reliability','performance','modernization'],points:['Migrated rider-to-driver upgrades off legacy asynchronous write logic at 99.96% success rate for over 1.7M requests/day in Go.','Enabled onboarding flow resolution to deprecate legacy writes for fleet driver cases, reaching 100% shadow parity and 99.998% success for over 24k requests/day by designing and building a new gRPC endpoint in Go and integrating with fleet services.','Fixed 68 integration test suites, including ones gating deployment, raising shared suite pass rates from 89.7% to 98.9%.']},
  {date:'AUG 2025 – MAY 2026',name:'ZETIC',role:'Software Engineering Intern',logo:'assets/logo-zetic.png',logoAlt:'ZETIC logo',skills:['fullstack','frontend','backend','data','ai','performance','devops','leadership'],points:['Enabled SDK integration for 1000+ customers by leading engineering of the SaaS dashboard on Next.js, TypeScript, and Django.','Achieved a 20× improvement in dashboard latency via API batching, caching, schema optimizations, and backend offloading.','Reduced distribution costs by extending an Airflow pipeline to publish models to Hugging Face, saving $3 per model download.','Improved performance on over 20% of devices by expanding benchmarking across 5 hardware backends using ExecuTorch.','Built a React Native library enabling app developers to integrate AI models into their applications via an SDK wrapper.','Streamlined engineering workflows by rewriting documentation and automating GitHub Actions CI pipelines for faster releases.']},
  {date:'AUG 2024 – MAY 2026',name:'San José State University',role:'MS · Software Engineering',logo:'assets/logo-sjsu.png',logoAlt:'San José State Spartans logo',skills:['distributed','ai'],points:['Graduated with a 3.86 GPA.','Studied distributed systems, software platforms, security, data mining, and IoT.','Built projects spanning multi-agent systems, distributed infrastructure, and community applications.']},
  {date:'AUG 2021 – JUL 2024',name:'Fidelity Investments',role:'Software Engineer',logo:'assets/logo-fidelity.png',logoAlt:'Fidelity Investments logo',skills:['backend','fullstack','frontend','distributed','cloud','data','reliability','performance','modernization','devops','leadership'],points:['Modernized legacy data infrastructure by architecting a real-time data pipeline to migrate and transform 60M+ transaction records to Oracle on AWS, improving resiliency and idempotency, and reducing licensing and maintenance costs due to vendor lock-in.','Built and integrated 2 microservices in Spring Boot, incorporating polling mechanisms and shared JAR dependencies into the pipeline.','Engineered an auto-failover application resiliency library, enabling switchover between AWS regions in under 1 minute.','Resolved 10+ production bugs and wrote JUnit tests, reducing daily errors by 70% and boosting Sonar coverage to over 90%.','Automated daily reporting for fintech fund managers with interactive Tableau dashboards, and reduced render times by 60–70% by optimizing SQL queries and offloading live calculations to scheduled ETL scripts.','Managed the SDLC for 25 Spring Boot–Angular full-stack apps, ensuring consistent delivery for the Mutual Funds Ops Platform.','Migrated 10 apps from on-prem to AWS using Jenkins and Terraform, enabling seamless CI/CD and accelerating release cycles.']},
  {date:'MAY – JUN 2020',name:'Fidelity Investments',role:'Software Engineering Intern',logo:'assets/logo-fidelity.png',logoAlt:'Fidelity Investments logo',skills:['data','modernization'],points:['Contributed to saving millions in licensing and maintenance by writing Spring Batch ETL jobs to decommission legacy software.']},
  {date:'JUL 2017 – MAY 2021',name:'VNIT Nagpur',role:'BTech · Computer Science & Engineering',logo:'assets/logo-vnit.png',logoAlt:'VNIT Nagpur logo',skills:['ai','leadership'],points:['Graduated with a 3.66 GPA.','Led the ACM Student Chapter and organized coding contests, talks, and workshops.','Built a real-time vision-based sign language translator using Python and OpenCV.']}
];

const VIEWS = {
  journey:{eyebrow:'THE EXPERIENCE SERIES',title:'The journey so far',opening:'OPENING · THE JOURNEY SO FAR',partnerNote:'WAITING AT YOUR CURRENT STOP',items:journey},
  projects:{eyebrow:'THE BUILDER SERIES',title:'Things I’ve built',opening:'OPENING · THINGS I’VE BUILT',partnerNote:'YOUR FIRST ENTRY',items:projects}
};
const viewNames = Object.keys(VIEWS);

// Capabilities, drawn from the master résumé. Each job and project lists the capability ids it shows in `skills`.
// `pattern` marks the evidence in the text (and tech tags) when that capability is selected; the matched
// terms also become the "tools" line under the filter.
const SKILLS = [
  ['backend', 'Backend & APIs', '\\bGo\\b|\\bgRPC\\b|endpoint|\\bAPIs?\\b|microservices?|Spring Boot|Spring Batch|FastAPI|Django|\\bREST\\b|Protobuf|\\bbackend\\b', 'i'],
  ['distributed', 'Distributed systems', 'distributed|asynchronous|shadow parity|fault[- ]toleran\\w*|leader election|load balanc\\w*|heartbeat\\w*|auto-failover|between AWS regions|blockchain', 'i'],
  ['cloud', 'Cloud & infrastructure', '\\bAWS\\b|\\bEC2\\b|\\bSQS\\b|\\bECS\\b|\\bECR\\b|Terraform|on-prem\\w*|\\bcloud\\b', 'i'],
  ['fullstack', 'Full-stack', 'full-stack|SaaS dashboard|Spring Boot–Angular|Next\\.js|Django|FastAPI|\\bReact\\b|JavaScript'],
  ['frontend', 'Frontend', 'Next\\.js|React Native|\\bReact\\b|Angular|JavaScript|TypeScript|Google Maps'],
  ['data', 'Data engineering', 'data pipeline|Airflow pipeline|into the pipeline|\\bETL\\b|Oracle|\\bSQL\\b|transaction records|Tableau|schema optimizations|Hugging Face'],
  ['ai', 'AI & ML', '\\bAI\\b|multi-agent|\\bagents?\\b|\\bRAG\\b|OpenAI|\\bLLMs?\\b|hallucinations?|ExecuTorch|Hugging Face|recommendation model|vision|OpenSearch', 'i'],
  ['reliability', 'Reliability & testing', '\\btest\\w*|JUnit|Sonar|shadow parity|[\\d.]+% success( rate)?|resilien\\w*|idempoten\\w*|fault[- ]toleran\\w*|auto-failover|recovery|reliability|errors', 'i'],
  ['performance', 'Performance & scale', '\\d[\\d.,]*[MK]?\\+? (?:requests/day|transaction records)|latency|\\d+× improvement|benchmark\\w*|render times|auto-scaling|load balanc\\w*|performance|scalab\\w*', 'i'],
  ['modernization', 'Legacy modernization', 'migrat\\w*|legacy|deprecat\\w*|decommission\\w*|moderniz\\w*|on-prem', 'i'],
  ['devops', 'CI/CD & DevOps', 'CI/CD|\\bCI\\b pipelines|GitHub Actions|Jenkins|Terraform|containers?|Docker|\\bECR\\b|releases?\\b|release cycles', 'i'],
  ['leadership', 'Leadership', '\\bLed\\b|leading engineering|Managed the SDLC|organized|Streamlined']
].map(([id, label, pattern, flags = '']) => ({id, label, re:new RegExp(pattern, flags + 'g')}));
const SKILL = Object.fromEntries(SKILLS.map(s => [s.id, s]));
let activeSkill = null;

// Random Pokémon: National Dex #1–649 (Generations I–V), drawn as animated Black / White sprites.
// Pinned to one PokeAPI/sprites commit (2026-11-13) so upstream changes can't break the site.
const SPRITE_BASE = 'https://cdn.jsdelivr.net/gh/PokeAPI/sprites@c0542f7c51215d9672439012838c99f520596cbd/sprites/pokemon/versions/generation-v/black-white/';
const SHINY_ODDS = 64;

const $ = (s) => document.querySelector(s);
const collection = $('#collection');
const panel = $('#collection-body');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const narrowLayout = window.matchMedia('(max-width: 1000px)');
let selectedView = 'journey';
let selectedProject = 0;
let openingTimer;
let openingView;
let lastTrigger;

const esc = (s) => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pad = (n) => String(n).padStart(3, '0');
const scrollBehavior = () => reducedMotion.matches ? 'instant' : 'smooth';

function rollPokemon(used) {
  let id;
  do id = 1 + Math.floor(Math.random() * POKEDEX.length); while (used.has(id));
  used.add(id);
  return {id, shiny: Math.random() < 1 / SHINY_ODDS};
}
function rollParty(count) {const used = new Set();return Array.from({length:count}, () => rollPokemon(used));}
function spriteUrl(mon, animated = true) {const dir = mon.shiny ? 'shiny/' : '';return animated ? `${SPRITE_BASE}animated/${dir}${mon.id}.gif` : `${SPRITE_BASE}${dir}${mon.id}.png`;}
function preload(party) {party.forEach(mon => {new Image().src = spriteUrl(mon);});return party;}
function monInfo(mon) {const [name, genus] = POKEDEX[mon.id - 1];return {name, genus};}

// The party on screen, plus the next party for each ball, rolled ahead so the reveal sprite is already cached.
const encounters = {};
const nextEncounters = {};
viewNames.forEach(view => {
  const size = VIEWS[view].items.length;
  encounters[view] = rollParty(size);
  nextEncounters[view] = rollParty(size);
  preload(nextEncounters[view].slice(0, 1));
});

function spriteImg(mon) {
  const {name, genus} = monInfo(mon);
  return `<img class="sprite" src="${spriteUrl(mon)}" data-fallback="${spriteUrl(mon, false)}" alt="${mon.shiny ? 'Shiny ' : ''}${esc(name)}" title="#${pad(mon.id)} ${esc(name)} · ${esc(genus)} Pokémon" decoding="async">`;
}
function partnerButton(view, i, delay) {
  const mon = encounters[view][i];
  const {name} = monInfo(mon);
  return `<button class="partner${mon.shiny ? ' shiny' : ''}" style="--d:${delay}" data-reroll="${view}" data-index="${i}" aria-label="${mon.shiny ? 'Shiny ' : ''}${esc(name)}. Swap for another Pokémon">${spriteImg(mon)}<span class="partner-platform" aria-hidden="true"></span></button>`;
}

function renderProjects() {
  const entries = projects.map((p, i) => `<li><button class="dex-entry" data-project="${i}" aria-current="${i === selectedProject}" style="--card-bg:${p.color}"><span class="dex-mini">${spriteImg(encounters.projects[i])}</span><span class="dex-entry-copy"><span class="dex-no">No. ${pad(i + 1)}</span><span class="dex-name">${p.name}</span></span></button></li>`).join('');
  // Every entry is rendered into the same grid cell and only the selected one is visible,
  // so the screen is always as tall as the longest entry and the device never changes size.
  const pages = projects.map((_, i) => `<article class="dex-page${i === selectedProject ? ' is-active' : ''}" data-page="${i}" aria-labelledby="dex-title-${i}"${i === selectedProject ? '' : ' inert'}>${renderEntry(i, 0)}</article>`).join('');
  return `<div class="dex"><div class="dex-bar" aria-hidden="true"><span class="dex-lens"></span><span class="dex-led"></span><span class="dex-led"></span><span class="dex-led"></span><span class="dex-bar-label">YK·DEX &nbsp;·&nbsp; ${pad(projects.length)} BUILT</span></div><div class="dex-body"><ol class="dex-list" aria-label="Projects">${entries}</ol><div class="dex-screen" id="dex-screen">${pages}</div></div></div>`;
}
function dexPage(i) {return document.querySelector(`.dex-page[data-page="${i}"]`);}
// Replays the screen flicker and the Pokémon's release animation on the newly shown page.
function replay(el) {el.style.animation = 'none';void el.offsetWidth;el.style.animation = '';}
function renderEntry(i, delay) {
  const p = projects[i];
  const mon = encounters.projects[i];
  const {name, genus} = monInfo(mon);
  return `<div class="dex-stage" style="--card-bg:${p.color}"><span class="dex-stage-top"><span>No. ${pad(i + 1)}</span><span>${p.type}</span></span>${partnerButton('projects', i, delay)}<span class="partner-tag">${mon.shiny ? '<span class="shiny-mark">✦ SHINY</span> ' : ''}#${pad(mon.id)} ${esc(name)}<small>${esc(genus)} Pokémon · tap to swap</small></span></div><div class="dex-info"><p class="dex-flavor">${p.caption}</p><h3 id="dex-title-${i}">${p.name}</h3><p class="dex-meta">${p.date} · ${p.metric}</p><p class="dex-summary">${p.summary}</p><h4>What I built</h4><ul>${bulletsHTML(p.details, skillFor(p))}</ul><h4>Built with</h4><div class="tech-tags">${techHTML(p.tech, skillFor(p))}</div>${repoLink(p)}</div>`;
}
// The active skill if this job or project used it, otherwise null.
function skillFor(item) {return activeSkill && item.skills.includes(activeSkill) ? SKILL[activeSkill] : null;}
function markSkill(text, skill) {return skill ? text.replace(skill.re, m => `<mark>${m}</mark>`) : text;}
function bulletsHTML(points, skill) {return points.map(t => `<li>${markSkill(t, skill)}</li>`).join('');}
function techHTML(tech, skill) {return tech.map(t => `<span${skill && t.search(skill.re) !== -1 ? ' class="is-hit"' : ''}>${t}</span>`).join('');}
// Repos on a teammate's account are labelled as team repos with the owner's handle.
function repoLink(p) {
  const owner = new URL(p.repo).pathname.split('/')[1];
  const team = owner.toLowerCase() !== 'yashkumar2412';
  return `<div class="repo-row"><a class="detail-link" href="${p.repo}" target="_blank" rel="noopener">${team ? 'Team repo on GitHub' : 'View the code on GitHub'} ↗</a>${team ? `<span class="repo-owner">Hosted by @${esc(owner)}</span>` : ''}</div>`;
}
function encounterHTML(i, delay) {
  const mon = encounters.journey[i];
  return `${partnerButton('journey', i, delay)}<span class="partner-tag">A wild ${mon.shiny ? '<span class="shiny-mark">shiny</span> ' : ''}${esc(monInfo(mon).name)} appeared!</span>`;
}
function renderJourney() {
  const stops = journey.map((j, i) => `<li class="stop ${i % 2 ? 'stop-right' : 'stop-left'}${j.current ? ' current' : ''}" style="--i:${i}"><div class="stop-card"><details data-state="${j.current ? 'open' : 'closed'}"${j.current ? ' open' : ''}><summary><span class="journey-logo-wrap"><img class="journey-logo" src="${j.logo}" alt="${j.logoAlt}"></span><span class="milestone-copy"><time>${j.date}</time>${j.current ? '<span class="now-badge">YOU ARE HERE</span>' : ''}<h3>${j.name}</h3><span class="role">${j.role}</span></span></summary><ul>${bulletsHTML(j.points, skillFor(j))}</ul></details></div><span class="stop-node" aria-hidden="true"></span><div class="stop-encounter">${encounterHTML(i, i)}</div></li>`).join('');
  return `<p class="timeline-intro">The latest chapter first, from the systems I work on today back to where I started. Every stop has its own wild encounter.</p><ol class="route">${stops}</ol>`;
}

function showCollection(view, focus = true) {
  if (!VIEWS[view]) return;
  selectedView = view;
  collection.hidden = false;
  $('#collection-eyebrow').textContent = VIEWS[view].eyebrow;
  $('#collection-title').textContent = VIEWS[view].title;
  document.querySelectorAll('[role="tab"]').forEach(tab => {const active = tab.dataset.view === view;tab.setAttribute('aria-selected', String(active));tab.tabIndex = active ? 0 : -1;});
  panel.setAttribute('aria-labelledby', `tab-${view}`);
  // Each tab offers only the skills it can show; a selection with no matches here is dropped.
  if (activeSkill && !skillCount(activeSkill)) activeSkill = null;
  renderSkillFilter();
  panel.innerHTML = view === 'projects' ? renderProjects() : renderJourney();
  applyFilter();
  history.replaceState(null, '', `#${view}`);
  if (focus) {collection.scrollIntoView({behavior:scrollBehavior(), block:'start'});$('#collection-title').focus({preventScroll:true});}
}
// A badge in the hero opens the journey at that stop.
function showStop(i) {
  showCollection('journey', false);
  const stop = panel.querySelectorAll('.stop')[i];
  if (!stop) return;
  // Switch cards instantly here, so the scroll target doesn't move while cards animate.
  openOnly(i, false);
  stop.scrollIntoView({behavior:scrollBehavior(), block:'center'});
  stop.querySelector('summary').focus({preventScroll:true});
}
function selectProject(i, fromKeyboard = false) {
  if (!projects[i]) return;
  selectedProject = i;
  document.querySelectorAll('.dex-entry').forEach(b => b.setAttribute('aria-current', String(Number(b.dataset.project) === i)));
  document.querySelectorAll('.dex-page').forEach(page => {const active = Number(page.dataset.page) === i;page.classList.toggle('is-active', active);page.inert = !active;});
  const page = dexPage(i);
  replay(page);
  page.querySelectorAll('.sprite').forEach(replay);
  if (fromKeyboard) document.querySelector(`.dex-entry[data-project="${i}"]`).focus();
  else if (narrowLayout.matches) page.scrollIntoView({behavior:scrollBehavior(), block:'nearest'});
}
// Swap the Pokémon shown for one item, or for every item in the current view.
function refreshSprite(view, i) {
  if (view === 'projects') {
    const mini = document.querySelector(`.dex-entry[data-project="${i}"] .dex-mini`);
    if (mini) mini.innerHTML = spriteImg(encounters.projects[i]);
    const page = dexPage(i);
    if (page) page.innerHTML = renderEntry(i, 0);
  } else {
    const slot = document.querySelectorAll('.stop-encounter')[i];
    if (slot) slot.innerHTML = encounterHTML(i, 0);
  }
}
function reroll(view, i) {
  encounters[view][i] = rollPokemon(new Set(encounters[view].map(mon => mon.id)));
  refreshSprite(view, i);
  document.querySelector(`.partner[data-reroll="${view}"][data-index="${i}"]`)?.focus();
}
function rerollAll() {
  encounters[selectedView] = rollParty(VIEWS[selectedView].items.length);
  encounters[selectedView].forEach((_, i) => refreshSprite(selectedView, i));
}

function openModal(dialog) {dialog.showModal();document.body.classList.add('modal-open');}
function closeModal(dialog) {if (dialog.open) dialog.close();if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');}
function finishOpening() {clearTimeout(openingTimer);closeModal($('#reveal-dialog'));showCollection(openingView);}
function openPack(view, trigger) {
  if (!VIEWS[view]) return;
  openingView = view;lastTrigger = trigger;
  encounters[view] = preload(nextEncounters[view]);
  nextEncounters[view] = rollParty(VIEWS[view].items.length);
  preload(nextEncounters[view].slice(0, 1));
  if (view === 'projects') selectedProject = 0;
  if (reducedMotion.matches) {showCollection(view);return;}
  const partner = encounters[view][0];
  $('#opening-ball').className = `opening-ball opening-${view}`;
  $('#reveal-title').textContent = VIEWS[view].opening;
  $('#reveal-partner').innerHTML = spriteImg(partner);
  $('.reveal-message').innerHTML = `Go, ${esc(monInfo(partner).name)}!<small>${partner.shiny ? '✦ SHINY · ' : ''}#${pad(partner.id)} · ${VIEWS[view].partnerNote}</small>`;
  openModal($('#reveal-dialog'));
  openingTimer = setTimeout(finishOpening, 2900);
}

document.addEventListener('click', event => {
  const pack = event.target.closest('[data-pack]');if (pack) {openPack(pack.dataset.pack, pack);return;}
  const partner = event.target.closest('[data-reroll]');if (partner) {reroll(partner.dataset.reroll, Number(partner.dataset.index));return;}
  const entry = event.target.closest('[data-project]');if (entry) {selectProject(Number(entry.dataset.project));return;}
  const badge = event.target.closest('[data-stop]');if (badge) {showStop(Number(badge.dataset.stop));return;}
  const view = event.target.closest('[data-view]');if (view) showCollection(view.dataset.view);
});
// A sprite that fails to load falls back to the still sprite, then to a Poké Ball placeholder.
document.addEventListener('error', event => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement) || !img.classList.contains('sprite')) return;
  if (img.dataset.fallback) {img.src = img.dataset.fallback;delete img.dataset.fallback;}
  else img.parentElement.classList.add('sprite-missing');
}, true);
panel.addEventListener('keydown', e => {
  const entry = e.target.closest('.dex-entry');if (!entry) return;
  const step = {ArrowDown:1, ArrowRight:1, ArrowUp:-1, ArrowLeft:-1}[e.key];
  if (!step && e.key !== 'Home' && e.key !== 'End') return;
  e.preventDefault();
  const n = projects.length;const i = Number(entry.dataset.project);
  selectProject(e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : (i + step + n) % n, true);
});
$('.collection-tabs').addEventListener('keydown', e => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
  e.preventDefault();
  const n = viewNames.length;let i = viewNames.indexOf(selectedView);
  i = e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : (i + (e.key === 'ArrowRight' ? 1 : n - 1)) % n;
  showCollection(viewNames[i], false);$(`#tab-${viewNames[i]}`).focus();
});
$('#reroll-all').addEventListener('click', rerollAll);
// Journey cards: an accordion whose cards glide open and shut instead of snapping.
// `data-state` flips immediately (it drives the +/− icon); `open` only drops once the close animation ends.
function setOpen(details, open, animate = true) {
  const body = details.querySelector('ul');
  const running = details._anim;
  details.dataset.state = open ? 'open' : 'closed';
  if (!running && details.open === open) return;
  const from = details.open ? body.getBoundingClientRect().height : 0;
  if (running) {running.onfinish = null;running.cancel();details._anim = null;}
  if (!animate || reducedMotion.matches) {details.open = open;body.style.overflow = '';return;}
  details.open = true;
  body.style.overflow = 'hidden';
  const to = open ? body.scrollHeight : 0;
  const anim = body.animate([{height:`${from}px`, opacity:from ? 1 : 0}, {height:`${to}px`, opacity:open ? 1 : 0}], {duration:open ? 460 : 340, easing:'cubic-bezier(.45,0,.2,1)'});
  details._anim = anim;
  anim.onfinish = () => {details._anim = null;body.style.overflow = '';if (!open) details.open = false;};
}
function openOnly(index, animate = true) {panel.querySelectorAll('.stop details').forEach((d, n) => setOpen(d, n === index, animate));}
panel.addEventListener('click', e => {
  const summary = e.target.closest('.stop summary');if (!summary) return;
  e.preventDefault();
  const details = summary.parentElement;
  if (details.dataset.state === 'open') setOpen(details, false);
  else openOnly([...panel.querySelectorAll('.stop details')].indexOf(details));
});

// Skill filter: chips list only the capabilities present in the current tab, with counts for that tab.
// Selecting one fades work that doesn't show it and highlights the evidence where it does.
const SKILL_TOOLS = {
  backend:['Go::\\bGo\\b', 'gRPC', 'Protobuf', 'Spring Boot', 'Django', 'FastAPI', 'REST APIs::\\bREST\\b', 'Microservices'],
  distributed:['Async writes::asynchronous', 'Shadow parity', 'Multi-region failover::auto-failover', 'Load balancing::load balanc', 'Heartbeats::heartbeat', 'Leader election', 'Fault tolerance::fault toleran', 'Blockchain'],
  cloud:['AWS', 'EC2', 'SQS', 'ECS', 'ECR', 'Terraform', 'On-prem → AWS::on-prem'],
  fullstack:['Next.js', 'TypeScript', 'Django', 'Spring Boot', 'Angular', 'React::\\bReact\\b', 'FastAPI', 'JavaScript'],
  frontend:['Next.js', 'React Native', 'React::\\bReact\\b(?! Native)', 'Angular', 'TypeScript', 'JavaScript', 'Google Maps'],
  data:['Real-time pipelines::data pipeline', 'Airflow', 'Oracle', 'SQL::\\bSQL\\b', 'ETL', 'Tableau', 'Hugging Face'],
  ai:['Multi-agent systems::multi-agent', 'RAG::\\bRAG\\b', 'OpenAI API::OpenAI', 'OpenSearch', 'ExecuTorch', 'Hugging Face', 'Computer vision::vision', 'Recommendation models::recommendation model'],
  reliability:['Integration tests::integration test', 'JUnit', 'Sonar', 'Shadow parity', 'Auto-failover', 'Idempotency::idempoten', 'Fault tolerance::fault toleran', 'Automated recovery::recovery', 'Hallucination checks::hallucination'],
  performance:['1.7M requests/day::1\\.7M', '20× faster dashboard::20×', 'Benchmarking::benchmark', '60M+ records::60M', 'Load balancing::load balanc', 'Auto-scaling'],
  modernization:['Legacy write migration::legacy asynchronous', 'Legacy deprecation::deprecate', 'On-prem → AWS::on-prem', 'Data platform modernization::Modernized', 'Legacy decommission::decommission'],
  devops:['GitHub Actions', 'Jenkins', 'Terraform', 'Docker containers::container', 'CI/CD::CI/CD|\\bCI\\b'],
  leadership:['Led SaaS engineering::leading engineering', 'SDLC for 25 apps::Managed the SDLC', 'ACM chapter lead::ACM', 'Engineering workflows::Streamlined']
};
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const viewItems = (view = selectedView) => view === 'projects' ? projects : journey;
const itemText = (item) => [item.summary, ...(item.points || item.details), ...(item.tech || [])].filter(Boolean).join(' \n ');
function skillCount(id) {return viewItems().filter(item => item.skills.includes(id)).length;}
// Tools and practices behind a capability that actually appear in this tab, e.g. "gRPC · Django · Spring Boot".
function skillTools(skill) {
  const text = viewItems().filter(item => item.skills.includes(skill.id)).map(itemText).join(' \n ');
  return (SKILL_TOOLS[skill.id] || []).map(t => t.split('::')).filter(([label, pattern]) => new RegExp(pattern || escapeRe(label), 'i').test(text)).map(([label]) => label);
}
function renderSkillFilter() {
  const chips = SKILLS.filter(s => skillCount(s.id)).map(s => `<button class="skill-chip" data-skill="${s.id}" aria-pressed="false">${s.label}<span class="skill-count">${skillCount(s.id)}</span></button>`).join('');
  $('#skill-filter').innerHTML = `<div class="skill-head"><p class="eyebrow">FILTER BY SKILL</p><p class="skill-status" id="skill-status" aria-live="polite"></p><button class="skill-clear" id="skill-clear" hidden>Clear ✕</button></div><div class="skill-chips" id="skill-chips">${chips}</div><p class="skill-tools" id="skill-tools" hidden></p>`;
}
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
function applyFilter() {
  const skill = SKILL[activeSkill] || null;
  const items = viewItems();
  document.querySelectorAll('.skill-chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.skill === activeSkill)));
  $('#skill-clear').hidden = !skill;
  $('#skill-status').innerHTML = skill
    ? `<strong>${skill.label}</strong> · ${items.filter(i => i.skills.includes(skill.id)).length} of ${plural(items.length, selectedView === 'projects' ? 'project' : 'stop')}`
    : selectedView === 'projects' ? 'Pick a skill to see which projects show it.' : 'Pick a skill to see where I’ve used it.';
  const tools = skill ? skillTools(skill) : [];
  $('#skill-tools').hidden = !tools.length;
  $('#skill-tools').innerHTML = `<span class="skill-tools-label">Seen as</span>${tools.map(t => `<span class="skill-tool">${esc(t)}</span>`).join('')}`;
  collection.classList.toggle('is-filtering', !!skill);
  if (selectedView === 'journey') {
    let first = -1;
    panel.querySelectorAll('.stop').forEach((stop, i) => {
      const hit = !skill || journey[i].skills.includes(skill.id);
      stop.classList.toggle('is-dim', !hit);
      stop.classList.toggle('is-match', !!skill && hit);
      stop.querySelector('ul').innerHTML = bulletsHTML(journey[i].points, hit ? skill : null);
      if (skill && hit && first < 0) first = i;
    });
    if (first >= 0) openOnly(first);
  } else if (panel.querySelector('.dex')) {
    projects.forEach((p, i) => {
      const hit = !skill || p.skills.includes(skill.id);
      document.querySelector(`.dex-entry[data-project="${i}"]`).classList.toggle('is-dim', !hit);
      const page = dexPage(i);
      page.querySelector('.dex-info ul').innerHTML = bulletsHTML(p.details, hit ? skill : null);
      page.querySelector('.tech-tags').innerHTML = techHTML(p.tech, hit ? skill : null);
    });
    if (skill && !projects[selectedProject].skills.includes(skill.id)) {
      const first = projects.findIndex(p => p.skills.includes(skill.id));
      if (first >= 0) selectProject(first);
    }
  }
}
function setSkill(id) {activeSkill = activeSkill === id ? null : id;applyFilter();}
renderSkillFilter();
$('#skill-filter').addEventListener('click', e => {
  const chip = e.target.closest('[data-skill]');if (chip) {setSkill(chip.dataset.skill);return;}
  if (e.target.closest('#skill-clear')) setSkill(null);
});
$('#browse').addEventListener('click', () => showCollection('journey'));
$('#skip-reveal').addEventListener('click', finishOpening);
$('#reveal-dialog').addEventListener('cancel', e => {e.preventDefault();finishOpening();});
$('#back-packs').addEventListener('click', () => {collection.hidden = true;history.replaceState(null, '', location.pathname);$('#pack-title').scrollIntoView({behavior:scrollBehavior()});document.querySelector(`[data-pack="${selectedView}"]`).focus({preventScroll:true});});
$('#credits-button').addEventListener('click', e => {lastTrigger = e.target;openModal($('#credits-dialog'));});
$('#close-credits').addEventListener('click', () => closeModal($('#credits-dialog')));
document.querySelectorAll('dialog').forEach(d => {
  d.addEventListener('close', () => {if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');if (d.id !== 'reveal-dialog') lastTrigger?.focus();});
  d.addEventListener('click', e => {if (e.target !== d || d.id === 'reveal-dialog') return;const r = d.getBoundingClientRect();if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeModal(d);});
});
// Hero battle text: types each line like an in-game message. Clicking skips the typing,
// moves to the next line, and on the last line scrolls down to the Poké Balls.
const BATTLE_LINES = ['Trainer Yash challenges you!', 'Career or projects? Pick a ball below.'];
const battleBox = $('#battle-box');
let battleIndex = BATTLE_LINES.length - 1;
let battleTyping = null;
let battleNext = null;
function showBattleLine(i, type = true) {
  clearInterval(battleTyping);clearTimeout(battleNext);battleTyping = battleNext = null;
  battleIndex = i;
  const text = BATTLE_LINES[i];
  const line = $('#battle-line');
  const done = () => {
    line.textContent = text;battleBox.classList.add('is-done');battleTyping = null;
    if (i < BATTLE_LINES.length - 1) battleNext = setTimeout(() => showBattleLine(i + 1), 1500);
  };
  battleBox.classList.remove('is-done');
  if (!type || reducedMotion.matches) {done();return;}
  let n = 0;
  line.textContent = '';
  battleTyping = setInterval(() => {n += 1;line.textContent = text.slice(0, n);if (n >= text.length) {clearInterval(battleTyping);done();}}, 32);
}
battleBox.addEventListener('click', () => {
  if (battleTyping) showBattleLine(battleIndex, false);
  else if (battleIndex < BATTLE_LINES.length - 1) showBattleLine(battleIndex + 1);
  else $('#pack-title').scrollIntoView({behavior:scrollBehavior(), block:'center'});
});
if (reducedMotion.matches) showBattleLine(BATTLE_LINES.length - 1, false);
else setTimeout(() => showBattleLine(0), 450);

$('#year').textContent = new Date().getFullYear();
const initialView = location.hash.slice(1);
if (VIEWS[initialView]) showCollection(initialView, false);
