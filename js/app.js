var state = {
  menu: null,
  lang: getLang(),
  activeCategory: 'all',
  query: ''
};

function $id(id) {
  return document.getElementById(id);
}

function currencySymbol(shop, lang) {
  return lang === 'ar' ? shop.currency_symbol_ar : shop.currency_symbol_en;
}

function formatPrice(value) {
  var n = Number(value) || 0;
  return n.toLocaleString(undefined, { minimumFractionDigits: n % 1 ? 2 : 0 });
}

function buildItemCard(item) {
  var card = document.createElement('article');
  card.className = 'item-card' + (item.available === false ? ' is-soldout' : '');

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
    ph.className = 'item-media-icon';
    ph.textContent = pickL10n(item.name_ar, item.name_en, state.lang).slice(0, 1);
    media.appendChild(ph);
  }
  card.appendChild(media);

  var body = document.createElement('div');
  body.className = 'item-body';

  var heading = document.createElement('div');
  heading.className = 'item-heading';
  var name = document.createElement('h3');
  name.className = 'item-name';
  name.textContent = pickL10n(item.name_ar, item.name_en, state.lang);
  var price = document.createElement('span');
  price.className = 'item-price';
  price.textContent = formatPrice(item.price) + ' ' + currencySymbol(state.menu.shop, state.lang);
  heading.appendChild(name);
  heading.appendChild(price);
  body.appendChild(heading);

  if (item.desc_ar || item.desc_en) {
    var desc = document.createElement('p');
    desc.className = 'item-desc';
    desc.textContent = pickL10n(item.desc_ar, item.desc_en, state.lang);
    body.appendChild(desc);
  }

  if (item.tags && item.tags.length) {
    var badges = document.createElement('div');
    badges.className = 'item-tags';
    item.tags.forEach(function (tag) {
      var b = document.createElement('span');
      b.className = 'tag tag-' + tag;
      b.textContent = tag;
      badges.appendChild(b);
    });
    body.appendChild(badges);
  }

  if (item.available === false) {
    var sold = document.createElement('span');
    sold.className = 'soldout-label';
    sold.textContent = t('sold_out', state.lang);
    body.appendChild(sold);
  }

  card.appendChild(body);
  return card;
}

function renderCategories() {
  var nav = $id('category-tabs');
  nav.innerHTML = '';

  var allBtn = document.createElement('button');
  allBtn.className = 'cat-pill' + (state.activeCategory === 'all' ? ' is-active' : '');
  allBtn.textContent = t('all_categories', state.lang);
  allBtn.dataset.id = 'all';
  nav.appendChild(allBtn);

  state.menu.categories
    .slice()
    .sort(function (a, b) { return (a.sort || 0) - (b.sort || 0); })
    .forEach(function (cat) {
      var btn = document.createElement('button');
      btn.className = 'cat-pill' + (state.activeCategory === cat.id ? ' is-active' : '');
      btn.dataset.id = cat.id;
      btn.textContent = pickL10n(cat.name_ar, cat.name_en, state.lang);
      nav.appendChild(btn);
    });

  nav.querySelectorAll('.cat-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.activeCategory = btn.dataset.id;
      renderCategories();
      renderItems();
    });
  });
}

function renderItems() {
  var list = $id('menu-list');
  var empty = $id('empty-state');
  list.innerHTML = '';

  var query = state.query.trim().toLowerCase();

  var filtered = state.menu.items.filter(function (item) {
    if (state.activeCategory !== 'all' && item.category_id !== state.activeCategory) return false;
    if (!query) return true;
    var hay = (
      item.name_ar + ' ' + item.name_en + ' ' +
      (item.desc_ar || '') + ' ' + (item.desc_en || '') + ' ' +
      ((item.tags || []).join(' '))
    ).toLowerCase();
    return hay.indexOf(query) !== -1;
  });

  filtered
    .slice()
    .sort(function (a, b) { return (a.sort || 0) - (b.sort || 0); })
    .forEach(function (item) {
      list.appendChild(buildItemCard(item));
    });

  empty.hidden = filtered.length > 0;
  empty.textContent = t('no_results', state.lang);
  empty.setAttribute('lang', state.lang);
}

function renderShop() {
  var shop = state.menu.shop;
  var name = pickL10n(shop.name_ar, shop.name_en, state.lang);
  $id('shop-name').textContent = name;
  $id('footer-flag').textContent = t('order_done', state.lang) + ' · ' + name;
  document.title = name;
}

function renderToggleLabel() {
  var btn = $id('lang-toggle');
  btn.innerHTML = state.lang === 'ar'
    ? 'English <span class="lang-dot">EN</span>'
    : 'العربية <span class="lang-dot">AR</span>';
}

function renderAll() {
  applyLang(state.lang);
  renderToggleLabel();
  if (!state.menu) return;
  renderShop();
  renderCategories();
  renderItems();
}

function init() {
  applyLang(state.lang);
  loadMenu(function (menu) {
    state.menu = menu;
    renderAll();
  });

  $id('lang-toggle').addEventListener('click', function () {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    setLang(state.lang);
    renderAll();
  });

  $id('search-input').addEventListener('input', function (e) {
    state.query = e.target.value;
    renderItems();
  });
}

init();