var MENU_FILE = 'menu.json';
var WORK_COPY_KEY = 'menu.admin.workcopy';

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadMenu(cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', MENU_FILE, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        cb(deepClone(JSON.parse(xhr.responseText)));
        return;
      } catch (e) { /* fall through to default */ }
    }
    cb(deepClone(DEFAULT_MENU));
  };
  xhr.onerror = function () {
    cb(deepClone(DEFAULT_MENU));
  };
  xhr.send();
}

function getAdminWorkCopy() {
  var raw = localStorage.getItem(WORK_COPY_KEY);
  if (raw) {
    try { return deepClone(JSON.parse(raw)); } catch (e) { /* ignore */ }
  }
  return null;
}

function saveAdminWorkCopy(menu) {
  localStorage.setItem(WORK_COPY_KEY, JSON.stringify(menu));
}

function clearAdminWorkCopy() {
  localStorage.removeItem(WORK_COPY_KEY);
}

function exportMenuBlob(menu) {
  return new Blob([JSON.stringify(menu, null, 2)], { type: 'application/json' });
}

function downloadMenu(menu) {
  var a = document.createElement('a');
  a.href = URL.createObjectURL(exportMenuBlob(menu));
  a.download = MENU_FILE;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}