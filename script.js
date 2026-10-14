const crafts = [
  { id: 'pottery',  name: 'Pottery',   em: '🏺', color: 'linear-gradient(160deg,#e08a64,#c4623f)' },
  { id: 'weaving',  name: 'Weaving',   em: '🧶', color: 'linear-gradient(160deg,#a7b594,#5f6f4f)' },
  { id: 'woodwork', name: 'Woodwork',  em: '🪵', color: 'linear-gradient(160deg,#b98a5e,#7a5232)' },
  { id: 'jewelry',  name: 'Jewelry',   em: '💍', color: 'linear-gradient(160deg,#4a5b93,#2f3e6b)' },
  { id: 'leather',  name: 'Leather',   em: '👜', color: 'linear-gradient(160deg,#a8714b,#6e4326)' },
  { id: 'candles',  name: 'Candles',   em: '🕯️', color: 'linear-gradient(160deg,#d8a24f,#b3772a)' }
];

const makers = [
  { id: 1, name: 'Ramesh Kumar',  craft: 'pottery',  town: 'Khurja',   em: 'R', color: '#c4623f', years: 28, x: 38, y: 40,
    story: 'Born into a family of potters, Ramesh learned to center clay at nine. Today he leads a cooperative of 12 women who glaze and fire each piece in a wood-fired kiln.',
    tags: ['Wheel-thrown', 'Wood-fired', 'Blue glaze'],
    timeline: [['1998','Started on his father\'s wheel'],['2009','Opened his own kiln'],['2019','Founded a women\'s pottery co-op'],['2025','Joined Haath']] },
  { id: 2, name: 'Savita Devi',   craft: 'weaving',  town: 'Panipat',  em: 'S', color: '#5f6f4f', years: 19, x: 62, y: 28,
    story: 'Savita weaves cotton and wool on a pit loom handed down by her grandmother. Each shawl takes five days and carries a tiny hidden motif — her signature.',
    tags: ['Handloom', 'Natural dyes', 'Wool'],
    timeline: [['2006','Learned the loom at home'],['2014','Trained 8 neighbours'],['2022','Switched to plant-based dyes'],['2025','Joined Haath']] },
  { id: 3, name: 'Imran Qureshi', craft: 'woodwork', town: 'Saharanpur', em: 'I', color: '#7a5232', years: 22, x: 74, y: 56,
    story: 'Saharanpur\'s carvers are famous for fine sheesham inlay. Imran designs each piece to be used daily, not just admired — joined without a single nail.',
    tags: ['Sheesham', 'Hand-carved', 'Nail-free joinery'],
    timeline: [['2003','Apprenticed at 14'],['2012','Own workshop'],['2020','Began upcycling timber offcuts'],['2025','Joined Haath']] },
  { id: 4, name: 'Meena Joshi',   craft: 'jewelry',  town: 'Jaipur',   em: 'M', color: '#2f3e6b', years: 15, x: 26, y: 62,
    story: 'Meena turns silver wire and semi-precious stones into everyday jewelry, inspired by the patterns on Rajasthani havelis she grew up walking past.',
    tags: ['Silver', 'Kundan', 'Handset stones'],
    timeline: [['2010','Silversmith training'],['2016','First market stall'],['2023','Sold in 6 cities'],['2025','Joined Haath']] },
  { id: 5, name: 'Arjun Singh',   craft: 'leather',  town: 'Kanpur',   em: 'A', color: '#6e4326', years: 12, x: 52, y: 70,
    story: 'Arjun hand-stitches vegetable-tanned leather bags that age beautifully. He uses saddle stitching, a thread and two needles — no machines.',
    tags: ['Veg-tanned', 'Saddle stitch', 'Zero waste'],
    timeline: [['2013','Learned from his uncle'],['2018','Started own label'],['2024','Waste-free pattern cutting'],['2025','Joined Haath']] },
  { id: 6, name: 'Lakshmi Bai',   craft: 'candles',  town: 'Pushkar',  em: 'L', color: '#b3772a', years: 9, x: 16, y: 32,
    story: 'Lakshmi pours soy and beeswax candles scented with rose, vetiver and marigold grown in her own courtyard. Each one is poured in small batches of twelve.',
    tags: ['Soy wax', 'Beeswax', 'Small batch'],
    timeline: [['2016','First candle in her kitchen'],['2020','Self-help group formed'],['2024','Festival bestseller'],['2025','Joined Haath']] }
];

const palettes = {
  pottery: ['#e9b79c','#c4623f'], weaving: ['#c9d3b8','#7d8f6a'], woodwork: ['#d3b08a','#8a5e3a'],
  jewelry: ['#b3bde0','#3f4f86'], leather: ['#cba07c','#7d5230'], candles: ['#f0cf8c','#c28a33']
};

const products = [
  { id: 1,  name: 'Indigo Glazed Tea Set',    craft: 'pottery',  maker: 1, price: 1899, em: '🫖', days: 5,  rating: 4.9, tag: 'Bestseller', mat: 'Stoneware clay, lead-free glaze', time: '3 days to make + 2 days kiln', inspo: 'The deep blue of monsoon evenings in Khurja.' },
  { id: 2,  name: 'Terracotta Diya Set (12)', craft: 'pottery',  maker: 1, price: 449,  em: '🪔', days: 3,  rating: 4.8, tag: 'Festival', mat: 'Red terracotta', time: '1 day', inspo: 'Shaped the way his grandmother taught him.' },
  { id: 3,  name: 'Pit-Loom Wool Shawl',      craft: 'weaving',  maker: 2, price: 3299, em: '🧣', days: 7,  rating: 5.0, tag: 'Made to order', mat: 'Merino wool, madder & indigo dyes', time: '5 days on the loom', inspo: 'Winter fields at dawn.' },
  { id: 4,  name: 'Cotton Table Runner',      craft: 'weaving',  maker: 2, price: 899,  em: '🧵', days: 4,  rating: 4.7, tag: '', mat: 'Organic cotton', time: '1.5 days', inspo: 'Patterns from a village wedding sari.' },
  { id: 5,  name: 'Carved Sheesham Tray',     craft: 'woodwork', maker: 3, price: 1499, em: '🪵', days: 6,  rating: 4.9, tag: 'Bestseller', mat: 'Sheesham wood, beeswax finish', time: '4 days', inspo: 'Mughal jaali windows.' },
  { id: 6,  name: 'Hand-Joined Spice Box',    craft: 'woodwork', maker: 3, price: 2199, em: '📦', days: 8,  rating: 4.8, tag: '', mat: 'Sheesham, brass hinges', time: '6 days', inspo: 'His mother\'s masala dabba.' },
  { id: 7,  name: 'Silver Haveli Earrings',   craft: 'jewelry',  maker: 4, price: 2499, em: '✨', days: 5,  rating: 4.9, tag: 'New', mat: '92.5 silver, rose quartz', time: '3 days', inspo: 'Arches of a Jaipur haveli.' },
  { id: 8,  name: 'Kundan Pendant',           craft: 'jewelry',  maker: 4, price: 3799, em: '📿', days: 9,  rating: 5.0, tag: 'Made to order', mat: 'Silver, kundan, freshwater pearl', time: '5 days', inspo: 'A bride\'s first jewel.' },
  { id: 9,  name: 'Saddle-Stitch Satchel',    craft: 'leather',  maker: 5, price: 4299, em: '👜', days: 10, rating: 4.9, tag: 'Bestseller', mat: 'Veg-tanned buffalo leather', time: '4 days, 1,200 stitches', inspo: 'Old postman bags.' },
  { id: 10, name: 'Slim Leather Wallet',      craft: 'leather',  maker: 5, price: 1299, em: '👛', days: 5,  rating: 4.7, tag: '', mat: 'Veg-tanned leather, waxed thread', time: '1 day', inspo: 'Simple things last longest.' },
  { id: 11, name: 'Rose & Vetiver Candle',    craft: 'candles',  maker: 6, price: 599,  em: '🕯️', days: 3,  rating: 4.8, tag: 'Festival', mat: 'Soy wax, rose, vetiver, cotton wick', time: 'Poured, 2 days to cure', inspo: 'Her courtyard after rain.' },
  { id: 12, name: 'Marigold Beeswax Trio',    craft: 'candles',  maker: 6, price: 1099, em: '🌼', days: 4,  rating: 4.9, tag: 'Gift pick', mat: 'Pure beeswax, marigold', time: '2 days', inspo: 'Temple offerings at Pushkar.' }
];

/* ===== State & helpers ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const inr = n => '₹' + n.toLocaleString('en-IN');
const state = {
  cart: JSON.parse(localStorage.getItem('haath_cart') || '[]'),
  wish: JSON.parse(localStorage.getItem('haath_wish') || '[]'),
  filter: 'all'
};
const save = () => {
  try { localStorage.setItem('haath_cart', JSON.stringify(state.cart)); localStorage.setItem('haath_wish', JSON.stringify(state.wish)); } catch (e) {}
};
const maker = id => makers.find(m => m.id === id);
const grad = c => `linear-gradient(145deg,${palettes[c][0]},${palettes[c][1]})`;
const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));

/* ===== Render: crafts ===== */
$('#craftGrid').innerHTML = crafts.map(c => `
  <div class="craft reveal" style="background:${c.color}" data-craft="${c.id}">
    <div class="em">${c.em}</div><h3>${c.name}</h3>
    <small>${products.filter(p => p.craft === c.id).length} pieces</small>
  </div>`).join('');
$('#craftGrid').addEventListener('click', e => {
  const t = e.target.closest('.craft'); if (!t) return;
  setFilter(t.dataset.craft);
  $('#products').scrollIntoView({ behavior: 'smooth' });
});

/* ===== Render: makers carousel ===== */
$('#makerCarousel').innerHTML = makers.map(m => `
  <div class="maker" data-maker="${m.id}">
    <div class="ph" style="background:${m.color}">${m.em}<span class="ver" title="Verified artisan">✓</span></div>
    <h3>${m.name}</h3><p>${m.town} · ${cap(m.craft)}</p><span class="tag">${m.years} yrs experience</span>
  </div>`).join('');
$('#carL').onclick = () => $('#makerCarousel').scrollBy({ left: -480, behavior: 'smooth' });
$('#carR').onclick = () => $('#makerCarousel').scrollBy({ left: 480, behavior: 'smooth' });
function cap(s) { return s[0].toUpperCase() + s.slice(1); }

/* ===== Render: map ===== */
const mapBox = $('#mapBox');
makers.forEach(m => {
  const pin = document.createElement('span');
  pin.className = 'pin'; pin.dataset.pin = m.id;
  pin.style.left = m.x + '%'; pin.style.top = m.y + '%';
  pin.setAttribute('role', 'button'); pin.setAttribute('aria-label', m.name + ', ' + m.town);
  mapBox.appendChild(pin);
  const lab = document.createElement('span');
  lab.className = 'pin-label'; lab.textContent = m.town;
  lab.style.left = m.x + '%'; lab.style.top = m.y + '%';
  mapBox.appendChild(lab);
});
mapBox.addEventListener('click', e => {
  const p = e.target.closest('.pin'); if (!p) return;
  $$('.pin').forEach(x => x.classList.remove('active')); p.classList.add('active');
  const m = maker(+p.dataset.pin);
  $('#mapCard').innerHTML = `
    <div class="ph" style="background:${m.color}">${m.em}</div>
    <h3>${m.name}</h3><p>${cap(m.craft)} · ${m.town}</p>
    <p style="color:var(--muted);font-size:.9rem">${m.story.slice(0, 110)}…</p>
    <button class="btn btn-primary" data-maker="${m.id}">Visit shop</button>`;
});

/* ===== Render: filters + products ===== */
$('#filters').innerHTML = `<button class="chip active" data-f="all">All</button>` +
  crafts.map(c => `<button class="chip" data-f="${c.id}">${c.em} ${c.name}</button>`).join('');
$('#filters').addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) setFilter(b.dataset.f); });
function setFilter(f) {
  state.filter = f;
  $$('.chip').forEach(c => c.classList.toggle('active', c.dataset.f === f));
  renderProducts();
}
function productCard(p, i = 0) {
  const m = maker(p.maker), on = state.wish.includes(p.id);
  return `
  <article class="card" data-product="${p.id}" style="animation-delay:${i * 60}ms">
    ${p.tag ? `<span class="tagpill">${p.tag}</span>` : ''}
    <button class="heart ${on ? 'on' : ''}" data-heart="${p.id}" aria-label="Save to wishlist">${on ? '♥' : '♡'}</button>
    <div class="img" style="background:${grad(p.craft)}">
      <div class="a"><span>${p.em}</span></div>
      <div class="b"><em>In use</em>Handmade by ${m.name.split(' ')[0]} in ${m.town}<small>Ready in ~${p.days} days</small></div>
    </div>
    <div class="info">
      <div class="by">by ${m.name} · ${m.town}</div>
      <h3>${p.name}</h3>
      <div class="row"><div><span class="price">${inr(p.price)}</span><div class="stars">${stars(p.rating)} <small>${p.rating}</small></div></div>
      <button class="add" data-add="${p.id}">Add</button></div>
    </div>
  </article>`;
}
function renderProducts() {
  const list = products.filter(p => state.filter === 'all' || p.craft === state.filter);
  $('#productGrid').innerHTML = list.map(productCard).map((h, i) => h.replace('animation-delay:0ms', `animation-delay:${i * 60}ms`)).join('');
}
renderProducts();

/* ===== Overlay / drawers / modal ===== */
const overlay = $('#overlay');
function openLayer(el) { closeAll(); el.classList.add('open'); overlay.classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeAll() {
  $$('.drawer,.modal,.search-pop').forEach(x => x.classList.remove('open'));
  overlay.classList.remove('show'); document.body.style.overflow = '';
}
overlay.onclick = closeAll;
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
$$('[data-close]').forEach(b => b.addEventListener('click', closeAll));
$('#cartBtn').onclick = () => { renderCart(); openLayer($('#cartDrawer')); };
$('#wishBtn').onclick = () => { renderWish(); openLayer($('#wishDrawer')); };
$('#searchBtn').onclick = () => { openLayer($('#searchPop')); setTimeout(() => $('#searchInput').focus(), 100); };
$('#menuToggle').onclick = () => $('#navLinks').classList.toggle('open');
$$('#navLinks a').forEach(a => a.addEventListener('click', () => $('#navLinks').classList.remove('open')));

/* ===== Cart ===== */
function addToCart(id, opts = {}) {
  const found = state.cart.find(i => i.id === id && JSON.stringify(i.opts || {}) === JSON.stringify(opts));
  if (found) found.qty++; else state.cart.push({ id, qty: 1, opts });
  save(); updateBadges(); renderCart(); openLayer($('#cartDrawer'));
}
function updateBadges() {
  const c = state.cart.reduce((n, i) => n + i.qty, 0);
  $('#cartCount').textContent = c; $('#wishCount').textContent = state.wish.length;
  [$('#cartCount'), $('#wishCount')].forEach(b => { b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); });
}
function renderCart() {
  const body = $('#cartItems');
  if (!state.cart.length) { body.innerHTML = '<div class="empty">Your basket is empty.<br>Meet a maker and fill it 🌿</div>'; }
  else body.innerHTML = state.cart.map((it, idx) => {
    const p = products.find(x => x.id === it.id);
    const extra = [it.opts.color && 'Colour: ' + it.opts.color, it.opts.engrave && 'Engraving: “' + it.opts.engrave + '”'].filter(Boolean).join(' · ');
    return `<div class="line">
      <div class="th" style="background:${grad(p.craft)}">${p.em}</div>
      <div class="meta"><h4>${p.name}</h4><small>${maker(p.maker).name}${extra ? '<br>' + extra : ''}</small>
        <div class="qty"><button data-q="${idx}" data-d="-1">−</button>${it.qty}<button data-q="${idx}" data-d="1">+</button></div></div>
      <div><strong>${inr(p.price * it.qty)}</strong><br><button class="rm" data-rm="${idx}" aria-label="Remove">×</button></div></div>`;
  }).join('');
  const total = state.cart.reduce((s, i) => s + products.find(p => p.id === i.id).price * i.qty, 0);
  $('#cartTotal').textContent = inr(total);
  const artisans = new Set(state.cart.map(i => products.find(p => p.id === i.id).maker)).size;
  $('#supportNote').textContent = artisans ? `💚 Supporting ${artisans} local artisan${artisans > 1 ? 's' : ''}` : '💚 Every order supports a local artisan';
}
$('#cartItems').addEventListener('click', e => {
  const q = e.target.closest('[data-q]'), r = e.target.closest('[data-rm]');
  if (q) { const it = state.cart[+q.dataset.q]; it.qty += +q.dataset.d; if (it.qty < 1) state.cart.splice(+q.dataset.q, 1); }
  if (r) state.cart.splice(+r.dataset.rm, 1);
  if (q || r) { save(); renderCart(); updateBadges(); }
});
$('#giftMode').onchange = e => { $('#giftNote').hidden = !e.target.checked; };
$('#checkoutBtn').onclick = () => {
  if (!state.cart.length) return botSay('Your basket is empty — want some picks?'), openChat();
  alert('This is a frontend demo — checkout would continue here. 🌿');
};

/* ===== Wishlist ===== */
function toggleWish(id) {
  const i = state.wish.indexOf(id); i > -1 ? state.wish.splice(i, 1) : state.wish.push(id);
  save(); updateBadges();
  $$(`[data-heart="${id}"]`).forEach(h => {
    const on = state.wish.includes(id); h.classList.toggle('on', on); h.textContent = on ? '♥' : '♡';
    h.classList.remove('beat'); void h.offsetWidth; h.classList.add('beat');
  });
}
function renderWish() {
  $('#wishItems').innerHTML = state.wish.length ? state.wish.map(id => {
    const p = products.find(x => x.id === id);
    return `<div class="line"><div class="th" style="background:${grad(p.craft)}">${p.em}</div>
      <div class="meta"><h4>${p.name}</h4><small>${inr(p.price)}</small></div>
      <button class="btn btn-primary" data-add="${p.id}" style="padding:.4rem 1rem">Add</button></div>`;
  }).join('') : '<div class="empty">Tap the ♡ on anything you love.</div>';
}

/* ===== Product modal ===== */
function openProduct(id) {
  const p = products.find(x => x.id === id), m = maker(p.maker);
  const colors = ['#c4623f', '#2f3e6b', '#8a9a77', '#e3c9a0'], cn = ['Terracotta', 'Indigo', 'Sage', 'Natural'];
  $('#modalBody').innerHTML = `
  <div class="pm">
    <div class="gal">
      <div class="main" id="pmMain" style="background:${grad(p.craft)}"><span>${p.em}</span></div>
      <div class="thumbs">
        <div class="on" style="background:${grad(p.craft)}" data-view="${p.em}">Finished</div>
        <div style="background:#7a6d62" data-view="✋">Process</div>
        <div style="background:#5f6f4f" data-view="🔍">Texture</div>
      </div>
    </div>
    <div class="det">
      <span class="eyebrow">${cap(p.craft)}</span>
      <h2>${p.name}</h2>
      <div class="stars">${stars(p.rating)} <small style="color:var(--muted)">${p.rating} · 48 reviews</small></div>
      <div class="pr">${inr(p.price)}</div>
      <div class="story"><h4>The story of this piece</h4>
        <p>${p.inspo}</p>
        <div class="facts"><span>🧱 ${p.mat}</span><span>⏳ ${p.time}</span></div></div>
      <div class="opt"><label>Colour</label><div class="swatches" id="sw">${colors.map((c, i) => `<span class="${i === 0 ? 'on' : ''}" style="background:${c}" data-c="${cn[i]}" title="${cn[i]}"></span>`).join('')}</div></div>
      <div class="opt"><label>Custom engraving / name (optional)</label><input type="text" id="engrave" maxlength="18" placeholder="e.g. Aarav"></div>
      <p style="font-size:.88rem">🚚 Handmade &amp; delivered in about <b>${p.days} days</b></p>
      <div style="display:flex;gap:.6rem;margin:1rem 0">
        <button class="btn btn-primary" style="flex:1" id="pmAdd">Add to basket</button>
        <button class="btn btn-ghost" data-heart="${p.id}" id="pmHeart">${state.wish.includes(p.id) ? '♥' : '♡'}</button>
      </div>
      <div class="maker-pin" data-maker="${m.id}">
        <div class="avatar" style="background:${m.color}">${m.em}</div>
        <div><strong>Meet ${m.name}</strong><small>${cap(m.craft)} · ${m.town}</small></div><span class="go">Visit shop →</span>
      </div>
    </div>
  </div>`;
  openLayer($('#modal'));
  $('#pmAdd').onclick = () => addToCart(p.id, { color: $('#sw .on').dataset.c, engrave: $('#engrave').value.trim() });
  $('#sw').onclick = e => { const s = e.target.closest('span'); if (!s) return; $$('#sw span').forEach(x => x.classList.remove('on')); s.classList.add('on'); };
  $('.thumbs').onclick = e => {
    const t = e.target.closest('div[data-view]'); if (!t) return;
    $$('.thumbs div').forEach(x => x.classList.remove('on')); t.classList.add('on'); $('#pmMain span').textContent = t.dataset.view;
  };
}

/* ===== Seller profile ===== */
function openMaker(id) {
  const m = maker(id), items = products.filter(p => p.maker === id);
  $('#modalBody').innerHTML = `
  <div class="sp">
    <div class="cover" style="background:${grad(m.craft)}"><div class="portrait" style="background:${m.color}">${m.em}</div></div>
    <div class="body">
      <div class="top"><div><h2>${m.name}</h2>
        <div class="badges"><span class="v">✓ Verified artisan</span><span>📍 Made in ${m.town}</span><span>🛠 ${m.years} years</span><span>★ 4.9</span></div>
        <div class="badges">${m.tags.map(t => `<span>${t}</span>`).join('')}</div></div>
        <button class="btn btn-primary" id="followBtn">+ Follow this maker</button></div>
      <h3>My story</h3><p>${m.story}</p>
      <h3>How it started</h3>
      <div class="timeline">${m.timeline.map(t => `<div><b>${t[0]}</b> — ${t[1]}</div>`).join('')}</div>
      <h3>Behind the scenes</h3>
      <div class="bts">
        <div style="background:${grad(m.craft)}">▶<small>Watch the process</small></div>
        <div style="background:#7a6d62">🔥<small>The workshop</small></div>
        <div style="background:#5f6f4f">🌿<small>Materials</small></div>
      </div>
      <h3>Shop ${m.name.split(' ')[0]}'s pieces</h3>
      <div class="mini-grid">${items.map(productCard).join('')}</div>
      <h3>Reviews</h3>
      <div class="review"><div class="stars">★★★★★</div>"Arrived wrapped in newspaper with a tiny handwritten note. You can feel 