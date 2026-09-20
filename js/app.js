var SIZES = [
  { id: 's', letter: 'S', mult: 0.8 },
  { id: 'm', letter: 'M', mult: 1 },
  { id: 'l', letter: 'L', mult: 1.25 }
];

var CHOCOLATES = ['choc_white', 'choc_milk', 'choc_dark'];

var state = {
  menu: null,
  lang: getLang(),
  activeCat: 'all',
  query: '',
  details: {
    item: null,
    qty: 1,
    sizeId: 'm',
    chocId: 'choc_milk',
    expanded: false,
    fav: false
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
  state.details.qty = 1;
  state.details.sizeId = 'm';
  state.details.chocId = 'choc_milk';
  state.details.expanded = false;
  state.details.fav = false;
  renderDetails();
  showScreen('details');
  goldenGlow(ev ? ev.clientX : window.innerWidth / 2,
            ev ? ev.clientY : window.innerHeight / 2);
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

  var full = item.desc_ar || t('default_desc', 'ar');
  $id('d-desc-short').textContent = '';
  $id('d-desc-more').textContent = full;
  $id('d-desc-more').hidden = false;
  $id('d-read-more').hidden = true;

  $id('d-fav').classList.toggle('is-active', d.fav);

  /* localize static labels */
  $id('d-desc-title').textContent = t('desc_title', state.lang);
  $id('d-choc-title').textContent = t('chocolate_type', state.lang);
  $id('d-size-title').textContent = t('size_label', state.lang);
  $id('d-qty-title').textContent = t('quantity_label', state.lang);
  $id('d-price-label').textContent = t('price_label', state.lang);
  $id('buy-label').textContent = t('buy_now', state.lang);
  $id('d-read-more').textContent = t('read_more', state.lang);

  renderChocolateOptions();
  renderSizeOptions();
  renderQty();
  computeTotal();
}

function renderChocolateOptions() {
  var row = $id('choc-options');
  row.innerHTML = '';
  CHOCOLATES.forEach(function (key) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'pill' + (state.details.chocId === key ? ' is-active' : '');
    b.textContent = t(key, state.lang);
    b.dataset.key = key;
    b.addEventListener('click', function () {
      state.details.chocId = key;
      renderChocolateOptions();
    });
    row.appendChild(b);
  });
}

function renderSizeOptions() {
  var row = $id('size-options');
  row.innerHTML = '';
  SIZES.forEach(function (sz) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'size-btn' + (state.details.sizeId === sz.id ? ' is-active' : '');
    b.innerHTML = '<span class="sz-letter">' + sz.letter + '</span><span>' + t('size_' + sz.id, state.lang) + '</span>';
    b.dataset.id = sz.id;
    b.addEventListener('click', function () {
      state.details.sizeId = sz.id;
      renderSizeOptions();
      computeTotal();
    });
    row.appendChild(b);
  });
}

function setQty(n) {
  state.details.qty = Math.min(10, Math.max(1, n));
  renderQty();
  computeTotal();
}

function renderQty() {
  $id('q-num').textContent = state.details.qty;
}

function computeTotal() {
  var d = state.details;
  var size = SIZES.filter(function (s) { return s.id === d.sizeId; })[0] || SIZES[1];
  var total = Math.round(d.item.price * size.mult * d.qty);
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
  document.title = brand;
}

function renderSplash() {
  $id('splash-title').textContent = t('splash_title', state.lang);
  $id('splash-sub').textContent = t('splash_sub', state.lang);
  $id('splash-lang').textContent = state.lang === 'ar' ? 'EN' : 'AR';
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

  loadMenu(function (menu) {
    state.menu = menu;
    renderAll();
  });

  $id('splash-lang').addEventListener('click', toggleLang);
  setTimeout(function () { showScreen('home'); }, 1000);

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

  $id('d-fav').addEventListener('click', function () {
    state.details.fav = !state.details.fav;
    $id('d-fav').classList.toggle('is-active', state.details.fav);
  });

  $id('d-read-more').addEventListener('click', function () {
    state.details.expanded = !state.details.expanded;
    $id('d-read-more').textContent = state.details.expanded
      ? t('read_less', state.lang)
      : t('read_more', state.lang);
  });

  $id('q-minus').addEventListener('click', function () { setQty(state.details.qty - 1); });
  $id('q-plus').addEventListener('click', function () { setQty(state.details.qty + 1); });

  $id('buy-btn').addEventListener('click', function () {
    var d = state.details;
    var size = SIZES.filter(function (s) { return s.id === d.sizeId; })[0];
    var total = formatPrice(Math.round(d.item.price * size.mult * d.qty));
    alert(d.qty + ' × ' + pickL10n(d.item.name_ar, d.item.name_en, state.lang) + ' — ' + total + ' ' + currencySymbol(state.menu.shop, state.lang));
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