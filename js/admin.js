var admin = {
  menu: null,
  itemEditingId: null
};

var AUTH_KEY = 'admin.auth';

function $id(id) {
  return document.getElementById(id);
}

function esc(str) {
  var d = document.createElement('div');
  d.textContent = str == null ? '' : String(str);
  return d.innerHTML;
}

function uid(prefix) {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function persist() {
  saveAdminWorkCopy(admin.menu);
}

function callLoadMenu(cb) {
  var copy = getAdminWorkCopy();
  if (copy) {
    admin.menu = copy;
    cb();
    return;
  }
  loadMenu(function (menu) {
    admin.menu = menu;
    persist();
    cb();
  });
}

function showPanel(name) {
  document.querySelectorAll('.panel').forEach(function (p) {
    p.classList.toggle('is-active', p.id === 'panel-' + name);
  });
  document.querySelectorAll('.nav-item').forEach(function (b) {
    b.classList.toggle('is-active', b.dataset.panel === name);
  });
}

function renderCategoryOptions() {
  var select = $id('item-category');
  select.innerHTML = '';
  admin.menu.categories.slice().sort(function (a, b) {
    return (a.sort || 0) - (b.sort || 0);
  }).forEach(function (cat) {
    var opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = (cat.icon || '') + ' ' + cat.name_ar + ' / ' + cat.name_en;
    select.appendChild(opt);
  });
}

function renderSettings() {
  var s = admin.menu.shop;
  $id('shop-name-ar').value = s.name_ar;
  $id('shop-name-en').value = s.name_en;
  $id('shop-currency-ar').value = s.currency_symbol_ar;
  $id('shop-currency-en').value = s.currency_symbol_en;
}

function renderCategoryList() {
  var ul = $id('category-list');
  ul.innerHTML = '';
  admin.menu.categories.slice().sort(function (a, b) {
    return (a.sort || 0) - (b.sort || 0);
  }).forEach(function (cat) {
    var li = document.createElement('li');
    li.className = 'admin-row';

    var info = document.createElement('div');
    info.className = 'admin-row-info';
    info.innerHTML = '<strong>' + esc(cat.icon) + ' ' + esc(cat.name_ar) + '</strong>' +
      '<small>' + esc(cat.name_en) + '</small>';

    var actions = document.createElement('div');
    actions.className = 'admin-row-actions';
    var edit = document.createElement('button');
    edit.className = 'btn btn-small';
    edit.textContent = 'تعديل';
    edit.addEventListener('click', function () { editCategory(cat); });
    var del = document.createElement('button');
    del.className = 'btn btn-small btn-danger';
    del.textContent = 'حذف';
    del.addEventListener('click', function () { deleteCategory(cat.id); });
    actions.appendChild(edit);
    actions.appendChild(del);

    li.appendChild(info);
    li.appendChild(actions);
    ul.appendChild(li);
  });
}

function renderItemList() {
  var ul = $id('item-list');
  ul.innerHTML = '';
  var catById = {};
  admin.menu.categories.forEach(function (c) { catById[c.id] = c; });
  admin.menu.items.slice().sort(function (a, b) {
    return (a.sort || 0) - (b.sort || 0);
  }).forEach(function (item) {
    var cat = catById[item.category_id] || {};
    var li = document.createElement('li');
    li.className = 'admin-row';

    var info = document.createElement('div');
    info.className = 'admin-row-info';
    info.innerHTML = '<strong>' + esc(item.name_ar) + ' / ' + esc(item.name_en) + '</strong>' +
      '<small>' + esc(item.desc_ar || '') + ' · ' + esc(cat.name_ar || '') + ' · ' +
      item.price + ' ' + esc(admin.menu.shop.currency_symbol_ar) +
      (item.available === false ? ' · غير متوفر' : '') + '</small>';

    var actions = document.createElement('div');
    actions.className = 'admin-row-actions';
    var edit = document.createElement('button');
    edit.className = 'btn btn-small';
    edit.textContent = 'تعديل';
    edit.addEventListener('click', function () { fillItemForm(item); });
    var del = document.createElement('button');
    del.className = 'btn btn-small btn-danger';
    del.textContent = 'حذف';
    del.addEventListener('click', function () { deleteItem(item.id); });
    actions.appendChild(edit);
    actions.appendChild(del);

    li.appendChild(info);
    li.appendChild(actions);
    ul.appendChild(li);
  });
}

function renderAll() {
  renderSettings();
  renderCategoryOptions();
  renderCategoryList();
  renderItemList();
}

function addCategory() {
  var nameAr = $id('cat-name-ar').value.trim();
  var nameEn = $id('cat-name-en').value.trim();
  if (!nameAr || !nameEn) { alert('أدخل اسم التصنيف بالعربية والإنجليزية'); return; }
  admin.menu.categories.push({
    id: uid('c'),
    sort: Number($id('cat-sort').value) || 0,
    icon: $id('cat-icon').value.trim() || '☕',
    name_ar: nameAr,
    name_en: nameEn
  });
  $id('cat-name-ar').value = '';
  $id('cat-name-en').value = '';
  $id('cat-icon').value = '';
  $id('cat-sort').value = '0';
  persist();
  renderAll();
}

function editCategory(cat) {
  var nameAr = prompt('اسم التصنيف - عربي', cat.name_ar);
  if (nameAr === null) return;
  var nameEn = prompt('اسم التصنيف - إنجليزي', cat.name_en);
  if (nameEn === null) return;
  var icon = prompt('أيقونة (إيموجي)', cat.icon);
  if (icon === null) return;
  var sort = prompt('الترتيب', String(cat.sort || 0));
  if (sort === null) return;
  cat.name_ar = nameAr.trim();
  cat.name_en = nameEn.trim();
  cat.icon = icon.trim() || '☕';
  cat.sort = Number(sort) || 0;
  persist();
  renderAll();
}

function deleteCategory(id) {
  var count = admin.menu.items.filter(function (i) { return i.category_id === id; }).length;
  if (count) {
    alert('لا يمكن حذف تصنيف يحتوي على منتجات (' + count + ')');
    return;
  }
  if (!confirm('حذف هذا التصنيف؟')) return;
  admin.menu.categories = admin.menu.categories.filter(function (c) { return c.id !== id; });
  persist();
  renderAll();
}

function resetItemForm() {
  admin.itemEditingId = null;
  $id('item-editing-id').value = '';
  ['item-name-ar', 'item-name-en', 'item-desc-ar', 'item-desc-en', 'item-image'].forEach(function (id) {
    $id(id).value = '';
  });
  $id('item-tags').value = '';
  $id('item-price').value = '';
  $id('item-sort').value = '0';
  $id('item-available').checked = true;
  $id('cancel-item-edit').hidden = true;
}

function fillItemForm(item) {
  admin.itemEditingId = item.id;
  $id('item-editing-id').value = item.id;
  $id('item-name-ar').value = item.name_ar;
  $id('item-name-en').value = item.name_en;
  $id('item-desc-ar').value = item.desc_ar || '';
  $id('item-desc-en').value = item.desc_en || '';
  $id('item-category').value = item.category_id;
  $id('item-price').value = item.price;
  $id('item-tags').value = (item.tags || []).join(', ');
  $id('item-image').value = item.image || '';
  $id('item-sort').value = item.sort || 0;
  $id('item-available').checked = item.available !== false;
  $id('cancel-item-edit').hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveItem() {
  var nameAr = $id('item-name-ar').value.trim();
  var nameEn = $id('item-name-en').value.trim();
  var price = Number($id('item-price').value);
  if (!nameAr || !nameEn) { alert('أدخل اسم المنتج بالعربية والإنجليزية'); return; }
  if (!(price >= 0)) { alert('أدخل سعراً صحيحاً'); return; }

  var tags = $id('item-tags').value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  var payload = {
    name_ar: nameAr,
    name_en: nameEn,
    desc_ar: $id('item-desc-ar').value.trim(),
    desc_en: $id('item-desc-en').value.trim(),
    category_id: $id('item-category').value,
    price: price,
    tags: tags,
    image: $id('item-image').value.trim(),
    sort: Number($id('item-sort').value) || 0,
    available: $id('item-available').checked
  };

  if (admin.itemEditingId) {
    var existing = admin.menu.items.find(function (i) { return i.id === admin.itemEditingId; });
    if (existing) Object.assign(existing, payload);
  } else {
    payload.id = uid('i');
    admin.menu.items.push(payload);
  }

  persist();
  resetItemForm();
  renderAll();
}

function deleteItem(id) {
  if (!confirm('حذف هذا المنتج؟')) return;
  admin.menu.items = admin.menu.items.filter(function (i) { return i.id !== id; });
  if (admin.itemEditingId === id) resetItemForm();
  persist();
  renderAll();
}

function copyText(text) {
  var ta = $id('copy-buffer');
  ta.value = text;
  ta.hidden = false;
  ta.select();
  var ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { /* ignore */ }
  ta.hidden = true;
  alert(ok ? 'تم النسخ' : 'تعذّر النسخ');
}

function importFile(file) {
  var reader = new FileReader();
  reader.onload = function () {
    try {
      var data = JSON.parse(reader.result);
      if (!data.shop || !data.items || !data.categories) throw new Error('bad shape');
      if (!data.version) data.version = 1;
      admin.menu = data;
      persist();
      renderAll();
      alert('تم الاستيراد بنجاح');
    } catch (e) {
      alert('ملف غير صالح');
    }
  };
  reader.readAsText(file);
}

function generateQR() {
  var url = $id('qr-url').value.trim();
  if (!url) { alert('الصق رابط المتجر المنشور'); return; }
  var qr = qrcode(0, 'M');
  qr.addData(url);
  qr.make();
  var svg = qr.createSvgTag({ cellSize: 6, margin: 2 });
  $id('qr-preview').innerHTML = svg;
  $id('qr-print').hidden = false;
}

function printQR() {
  var url = $id('qr-url').value.trim();
  var svg = $id('qr-preview').innerHTML;
  if (!svg) return;
  var win = window.open('', '_blank', 'width=420,height=520');
  if (!win) { alert('اسمح بالنوافذ المنبثقة للطباعة'); return; }
  var name = (admin.menu.shop.name_ar || 'Menu');
  win.document.write(
    '<html dir="rtl"><head><title>'+name+'</title>' +
    '<style>body{margin:24px;text-align:center;font-family:sans-serif} ' +
    'h1{font-size:20px}h2{font-weight:normal;font-size:14px;color:#555}' +
    '.qr{padding:12px;border:1px solid #ddd;display:inline-block;margin:12px 0}' +
    'p{font-size:13px}' + (url ? 'a{color:#6f4e37}' : '') + '</style></head><body>' +
    '<h1>' + esc(name) + '</h1>' +
    '<h2>امسح القراءة للاطلاع على القائمة</h2>' +
    '<div class="qr">' + svg + '</div>' +
    (url ? '<p><a href="' + esc(url) + '">' + esc(url) + '</a></p>' : '') +
    '<script>window.onload=function(){window.print();}<\/script>' +
    '</body></html>'
  );
  win.document.close();
}

function boot() {
  var authed = sessionStorage.getItem(AUTH_KEY) === '1';
  $id('gate').hidden = authed;
  $id('admin-app').hidden = !authed;
  if (authed) callLoadMenu(renderAll);
}

$id('pin-submit').addEventListener('click', function () {
  if ($id('pin-input').value === SHOP_PIN) {
    sessionStorage.setItem(AUTH_KEY, '1');
    $id('pin-error').hidden = true;
    $id('gate').hidden = true;
    $id('admin-app').hidden = false;
    callLoadMenu(renderAll);
  } else {
    $id('pin-error').hidden = false;
  }
});

$id('pin-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') $id('pin-submit').click();
});

$id('logout-btn').addEventListener('click', function () {
  sessionStorage.removeItem(AUTH_KEY);
  $id('admin-app').hidden = true;
  $id('gate').hidden = false;
  $id('pin-input').value = '';
});

document.querySelectorAll('.nav-item').forEach(function (btn) {
  btn.addEventListener('click', function () { showPanel(btn.dataset.panel); });
});

$id('save-settings').addEventListener('click', function () {
  admin.menu.shop = {
    name_ar: $id('shop-name-ar').value.trim(),
    name_en: $id('shop-name-en').value.trim(),
    currency_code: 'SAR',
    currency_symbol_ar: $id('shop-currency-ar').value.trim(),
    currency_symbol_en: $id('shop-currency-en').value.trim()
  };
  persist();
  alert('تم الحفظ');
});

$id('add-category').addEventListener('click', addCategory);
$id('save-item').addEventListener('click', saveItem);
$id('cancel-item-edit').addEventListener('click', function () {
  resetItemForm();
  renderAll();
});

$id('export-btn').addEventListener('click', function () { downloadMenu(admin.menu); });
$id('copy-btn').addEventListener('click', function () { copyText(JSON.stringify(admin.menu, null, 2)); });
$id('import-btn').addEventListener('click', function () { $id('import-file').click(); });
$id('import-file').addEventListener('change', function (e) {
  if (e.target.files && e.target.files[0]) importFile(e.target.files[0]);
  e.target.value = '';
});
$id('reset-btn').addEventListener('click', function () {
  if (!confirm('استعادة القائمة الافتراضية؟ (سيُمسح ما حفظت على هذا المتصفح)')) return;
  admin.menu = deepClone(DEFAULT_MENU);
  persist();
  renderAll();
});

$id('qr-generate').addEventListener('click', generateQR);
$id('qr-print').addEventListener('click', printQR);

boot();