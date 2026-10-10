var THEME_KEY = 'menu.theme';
var DEFAULT_THEME = 'dark';
var THEME_COLORS = { dark: '#12100E', light: '#f5f1ea' };

function getTheme() {
  var saved = localStorage.getItem(THEME_KEY);
  return saved === 'light' || saved === 'dark' ? saved : DEFAULT_THEME;
}

function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

function applyTheme(theme) {
  document.body.classList.toggle('theme-light', theme === 'light');
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[theme] || THEME_COLORS.dark);
}

function toggleTheme() {
  var next = getTheme() === 'light' ? 'dark' : 'light';
  setTheme(next);
  return next;
}
