var I18N_STRINGS = {
  ar: {
    search_placeholder: 'ابحث في القائمة...',
    all_categories: 'الكل',
    currency: 'ر.س',
    available: 'متوفر',
    sold_out: 'غير متوفر',
    no_results: 'لا توجد نتائج مطابقة',
    order_done: 'قائمة',
    contact_phone: 'اتصل بنا',
    contact_whatsapp: 'واتساب',
    contact_instagram: 'انستغرام',
    follow_us: 'تابعنا',
    shop_default_name: 'مقهى رواق'
  },
  en: {
    search_placeholder: 'Search the menu...',
    all_categories: 'All',
    currency: 'IQD',
    available: 'Available',
    sold_out: 'Sold out',
    no_results: 'No matching items',
    order_done: 'Menu',
    contact_phone: 'Call us',
    contact_whatsapp: 'WhatsApp',
    contact_instagram: 'Instagram',
    follow_us: 'Follow us',
    shop_default_name: 'RIWAQ CAFÉ'
  }
};

var LANG_KEY = 'menu.lang';
var DEFAULT_LANG = 'ar';

function getLang() {
  return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  var dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dir);
  document.body.classList.toggle('is-ar', lang === 'ar');
  document.body.classList.toggle('is-en', lang === 'en');
}

function t(key, lang) {
  var dict = I18N_STRINGS[lang || getLang()] || I18N_STRINGS.ar;
  return dict[key] || key;
}

function pickL10n(ar, en, lang) {
  return (lang || getLang()) === 'en' ? en : ar;
}