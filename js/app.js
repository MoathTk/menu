var state = {
  menu: null,
  lang: getLang(),
  activeCat: 'all',
  query: '',
  details: {
    item: null,
    expanded: false
  }
};

function $id(id) {
  return document.getElementById(id);
}

function currencySymbol(shop, lang) {
  return lang === 'ar' ? shop.currency_symbol_ar : shop.currency_symbol_en;
}

function formatPrice(value) {
  var n = Number(value) || 0;
  return n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0 });
}

function formatQty(value) {
  return Number(value).toLocaleString('en-US');
}

/* ---------------------------------------------------------------------------
   Screen navigation
---------------------------------------------------------------------------- */
function showScreen(name) {
  var leaving = null;
  ['splash', 'home', 'details'].forEach(function (n) {
    if (n === name || $id('screen-' + n).hidden) return;
    leaving = $id('screen-' + n);
  });

  if (leaving && leaving.id === 'screen-splash') {
    leaving.classList.add('is-leaving');
    setTimeout(function () { revealScreen(name); }, 300);
  } else {
    revealScreen(name);
  }
  window.scrollTo({ top: 0 });
}

function revealScreen(name) {
  ['splash', 'home', 'details'].forEach(function (n) {
    $id('screen-' + n).hidden = n !== name;
    $id('screen-' + n).classList.remove('is-leaving');
  });
  var el = $id('screen-' + name);
  el.classList.remove('screen-enter');
  void el.offsetWidth;
  el.classList.add('screen-enter');
}

/* ---------------------------------------------------------------------------
   Home rendering
---------------------------------------------------------------------------- */
function sortedCategories() {
  return state.menu.categories
    .slice()
    .sort(function (a, b) { return (a.sort || 0) - (b.sort || 0); });
}

function renderTabs() {
  var nav = $id('category-tabs');
  nav.innerHTML = '';
  var all = document.createElement('button');
  all.type = 'button';
  all.className = 'cat-tab' + (state.activeCat === 'all' ? ' is-active' : '');
  all.textContent = t('category_all', state.lang);
  all.dataset.id = 'all';
  nav.appendChild(all);

  sortedCategories().forEach(function (cat) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'cat-tab' + (state.activeCat === cat.id ? ' is-active' : '');
    b.textContent = pickL10n(cat.name_ar, cat.name_en, state.lang);
    b.dataset.id = cat.id;
    nav.appendChild(b);
  });

  nav.querySelectorAll('.cat-tab').forEach(function (b) {
    b.addEventListener('click', function () {
      state.activeCat = b.dataset.id;
      renderTabs();
      renderLists();
      renderFeatured();
    });
  });
}

function filteredItems() {
  var q = state.query.trim().toLowerCase();
  return state.menu.items.filter(function (item) {
    if (state.activeCat !== 'all' && item.category_id !== state.activeCat) return false;
    if (!q) return true;
    var hay = (
      item.name_ar + ' ' + item.name_en + ' ' +
      (item.desc_ar || '') + ' ' + (item.desc_en || '')
    ).toLowerCase();
    return hay.indexOf(q) !== -1;
  });
}

function buildCard(item) {
  var card = document.createElement('article');
  card.className = 'item-card';
  card.addEventListener('click', function (e) { openDetails(item, e); });

  var media = document.createElement('div');
  media.className = 'item-media';
  if (item.image) {
    var img = document.createElement('img');
    img.src = item.image;
    img.alt = pickL10n(item.name_ar, item.name_en, state.lang);
    img.loading = 'lazy';
    media.appendChild(img);
  } else {
    var ph = document.createElement('span');
    ph.className = 'item-media-ph';
    ph.textContent = pickL10n(item.name_ar, item.name_en, state.lang).slice(0, 1);
    media.appendChild(ph);
  }

  card.appendChild(media);

  var catById = {};
  state.menu.categories.forEach(function (c) { catById[c.id] = c; });
  var cat = catById[item.category_id] || {};

  var body = document.createElement('div');
  body.className = 'item-body';
  body.innerHTML =
    '<h3 class="item-name">' + pickL10n(item.name_ar, item.name_en, state.lang) + '</h3>' +
    '<p class="item-sub">' + pickL10n(cat.name_ar, cat.name_en, state.lang) + '</p>';

  var foot = document.createElement('div');
  foot.className = 'item-foot';
  var price = document.createElement('span');
  price.className = 'item-price';
  price.textContent = formatPrice(item.price) + ' ' + currencySymbol(state.menu.shop, state.lang);
  var add = document.createElement('button');
  add.type = 'button';
  add.className = 'add-btn';
  add.setAttribute('aria-label', '+');
  add.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
  add.addEventListener('click', function (e) { e.stopPropagation(); openDetails(item, e); });
  foot.appendChild(price);
  foot.appendChild(add);

  body.appendChild(foot);
  card.appendChild(body);
  return card;
}

function renderLists() {
  var wrap = $id('category-lists');
  wrap.innerHTML = '';
  var items = filteredItems();

  if (!items.length) {
    var empty = document.createElement('p');
    empty.className = 'empty-note';
    empty.textContent = t('no_results', state.lang);
    wrap.appendChild(empty);
    return;
  }

  var byCat = {};
  sortedCategories().forEach(function (c) { byCat[c.id] = []; });
  items.forEach(function (i) {
    if (!byCat[i.category_id]) byCat[i.category_id] = [];
    byCat[i.category_id].push(i);
  });

  Object.keys(byCat).forEach(function (cid) {
    var list = byCat[cid];
    if (!list.length) return;
    var cat = state.menu.categories.filter(function (c) { return c.id === cid; })[0];

    var group = document.createElement('div');
    group.className = 'cat-group';
    var head = document.createElement('h3');
    head.className = 'cat-group-head';
    head.textContent = pickL10n(cat.name_ar, cat.name_en, state.lang);
    group.appendChild(head);

    var row = document.createElement('div');
    row.className = 'h-scroll';
    list.forEach(function (item) { row.appendChild(buildCard(item)); });
    group.appendChild(row);
    wrap.appendChild(group);
  });
}

function renderFeatured() {
  var cats = sortedCategories();
  var items = filteredItems();
  if (state.activeCat === 'all') {
    items = state.menu.items;
  }
  var feats = items.filter(function (i) { return i.image; });
  var item = feats[0] || state.menu.items[0];
  if (!item) return;

  var catById = {};
  state.menu.categories.forEach(function (c) { catById[c.id] = c; });

  var box = $id('featured-card');
  box.innerHTML = '';
  box.addEventListener('click', function (e) { openDetails(item, e); });

  var media = document.createElement('div');
  media.className = 'featured-media';
  var img = document.createElement('img');
  img.src = item.image || (state.menu.shop.logo || '');
  img.alt = pickL10n(item.name_ar, item.name_en, state.lang);
  media.appendChild(img);

  var body = document.createElement('div');
  body.className = 'featured-body';
  body.innerHTML =
    '<h3 class="featured-name">' + pickL10n(item.name_ar, item.name_en, state.lang) + '</h3>' +
    '<p class="featured-sub">' + pickL10n((catById[item.category_id] || {}).name_ar || '', (catById[item.category_id] || {}).name_en || '', state.lang) + '</p>' +
    '<div class="featured-foot">' +
    '<span class="featured-price">' + formatPrice(item.price) + ' ' + currencySymbol(state.menu.shop, state.lang) + '</span>' +
    '</div>';

  box.appendChild(media);
  box.appendChild(body);

  $id('featured-title').textContent = t('special_for_you', state.lang);
}

/* ---------------------------------------------------------------------------
   Details screen
---------------------------------------------------------------------------- */
function openDetails(item, ev) {
  state.details.item = item;
  state.details.expanded = false;
  renderDetails();
  showScreen('details');
  goldenGlow(ev ? ev.clientX : window.innerWidth / 2,
            ev ? ev.clientY : window.innerHeight / 2);
}

var audioCtx = null;

function playClick() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    var t = audioCtx.currentTime;
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(950, t);
    osc.frequency.exponentialRampToValueAtTime(320, t + 0.08);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.16, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.12);
  } catch (e) {}
}

function goldenGlow(x, y) {
  var glow = document.createElement('div');
  glow.className = 'golden-glow';
  glow.style.left = x + 'px';
  glow.style.top = y + 'px';
  var s = Math.hypot(window.innerWidth, window.innerHeight) * 1.35 / 120;
  glow.style.setProperty('--s', s.toFixed(1));
  document.body.appendChild(glow);
  glow.addEventListener('animationend', function () {
    glow.remove();
  }, { once: true });
}

function renderDetails() {
  var d = state.details;
  var item = d.item;
  var shop = state.menu.shop;
  var catById = {};
  state.menu.categories.forEach(function (c) { catById[c.id] = c; });
  var cat = catById[item.category_id] || {};

  var name = pickL10n(item.name_ar, item.name_en, state.lang);

  $id('d-image').src = item.image || shop.logo || '';
  $id('d-image').alt = name;
  $id('d-name').textContent = name;
  $id('d-sub').textContent = pickL10n(cat.name_ar, cat.name_en, state.lang);

  $id('d-roast').textContent = t('roast_medium', state.lang);

  var full = state.lang === 'en'
    ? (item.desc_en || item.desc_ar || '')
    : (item.desc_ar || item.desc_en || '');
  full = full || t('default_desc', state.lang);
  $id('d-desc-short').textContent = '';
  $id('d-desc-more').textContent = full;
  $id('d-desc-more').hidden = false;
  $id('d-read-more').hidden = true;

  /* localize static labels */
  $id('d-desc-title').textContent = t('desc_title', state.lang);
  $id('d-price-label').textContent = t('price_label', state.lang);
  $id('d-read-more').textContent = t('read_more', state.lang);

  computeTotal();
}

function computeTotal() {
  var item = state.details.item;
  var total = Math.round(item.price);
  $id('d-total').textContent = formatPrice(total) + ' ' + currencySymbol(state.menu.shop, state.lang);
}

/* ---------------------------------------------------------------------------
   Static localization (splash, home chrome)
---------------------------------------------------------------------------- */
function renderHomeChrome() {
  $id('home-title').textContent = t('home_title', state.lang);
  $id('search-input').placeholder = t('search_placeholder', state.lang);
  var brand = state.menu && state.menu.shop
    ? pickL10n(state.menu.shop.name_ar, state.menu.shop.name_en, state.lang)
    : t('shop_default_name', state.lang);
  $id('home-brand').textContent = brand;
  var logo = state.menu && state.menu.shop && state.menu.shop.logo
    ? state.menu.shop.logo
    : 'assets/images/logo.png';
  $id('home-logo').src = logo;
  $id('home-logo').alt = brand;
  document.title = brand;
}

function renderSplash() {
  $id('splash-title').textContent = '';
  revealCharByChar($id('splash-title'), t('splash_title', state.lang), 3000);
  $id('start-label').textContent = t('start_now', state.lang);
  $id('splash-lang').textContent = state.lang === 'ar' ? 'EN' : 'AR';
}

function revealCharByChar(el, text, durationMs) {
  el.innerHTML = '';
  var step = durationMs / Math.max(text.length, 1);
  var delay = 0;
  for (var i = 0; i < text.length; i++) {
    var s = document.createElement('span');
    s.className = 'char-in';
    s.textContent = text[i];
    s.style.animationDelay = delay + 'ms';
    el.appendChild(s);
    delay += step;
  }
}

function renderAll() {
  applyLang(state.lang);
  renderSplash();
  renderHomeChrome();
  if (!state.menu) return;
  renderTabs();
  renderLists();
  renderFeatured();
  if (state.details.item) renderDetails();
}

/* ---------------------------------------------------------------------------
   Init / wiring
---------------------------------------------------------------------------- */
function init() {
  applyLang(state.lang);

  document.addEventListener('click', function (e) {
    if (e.target.closest('button, .item-card, .featured-card')) playClick();
  }, true);

  loadMenu(function (menu) {
    state.menu = menu;
    renderAll();
  });

  $id('splash-lang').addEventListener('click', toggleLang);

  $id('start-btn').addEventListener('click', function (e) {
    showScreen('home');
    goldenGlow(e.clientX, e.clientY);
  });

  $id('search-input').addEventListener('input', function (e) {
    state.query = e.target.value;
    renderTabs();
    renderLists();
    renderFeatured();
  });

  $id('filter-btn').addEventListener('click', function () {
    $id('search-input').focus();
  });

  $id('d-back').addEventListener('click', function () {
    state.query = '';
    $id('search-input').value = '';
    renderAll();
    showScreen('home');
  });

  $id('d-read-more').addEventListener('click', function () {
    state.details.expanded = !state.details.expanded;
    $id('d-read-more').textContent = state.details.expanded
      ? t('read_less', state.lang)
      : t('read_more', state.lang);
  });

  document.querySelectorAll('.bn-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.bn-item').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
    });
  });
}

function toggleLang() {
  state.lang = state.lang === 'ar' ? 'en' : 'ar';
  setLang(state.lang);
  applyLang(state.lang);
  renderAll();
}

init();