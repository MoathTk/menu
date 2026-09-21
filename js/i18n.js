var I18N_STRINGS = {
  ar: {
    splash_title: 'اضغط للدخول إلى عالم رواق',
    start_now: 'ادخل',
    home_title: 'ابحث عن أفضل قهوة لذوقك',
    search_placeholder: 'ابحث عن قهوتك...',
    category_all: 'الكل',
    special_for_you: 'مميز لك',
    desc_title: 'الوصف',
    read_more: 'اقرأ المزيد',
    read_less: 'قراءة أقل',
    chocolate_type: 'نوع الشوكولاتة',
    size_label: 'الحجم',
    quantity_label: 'الكمية',
    price_label: 'السعر',
    buy_now: 'شراء الآن',
    choc_white: 'بيضاء',
    choc_milk: 'بالحليب',
    choc_dark: 'داكنة',
    size_s: 'صغير',
    size_m: 'وسط',
    size_l: 'كبير',
    roast_medium: 'تحميص وسط',
    nav_home: 'الرئيسية',
    nav_fav: 'المفضلة',
    nav_cart: 'السلة',
    nav_notif: 'الإشعارات',
    nav_profile: 'الحساب',
    available: 'متوفر',
    sold_out: 'غير متوفر',
    no_results: 'لا توجد نتائج مطابقة',
    default_desc: 'قهوتنا تُحمَّص طازجة يومياً على دفعات صغيرة، وتُطحن لحظة الطلب لتحصل على أفضل نكهة. اختر نوع الشوكولاتة والحجم الذي يناسبك، واستمتع بتجربة قهوة استثنائية.',
    order_done: 'قائمة',
    contact_phone: 'اتصل بنا',
    contact_whatsapp: 'واتساب',
    contact_instagram: 'انستغرام',
    follow_us: 'تابعنا',
    shop_default_name: 'مقهى رواق'
  },
  en: {
    splash_title: 'Click to enter Riwaq world',
    start_now: 'Enter',
    home_title: 'Find the best coffee for your taste',
    search_placeholder: 'Search your coffee...',
    category_all: 'All',
    special_for_you: 'Special for you',
    desc_title: 'Description',
    read_more: 'Read more',
    read_less: 'Read less',
    chocolate_type: 'Chocolate type',
    size_label: 'Size',
    quantity_label: 'Quantity',
    price_label: 'Price',
    buy_now: 'Buy now',
    choc_white: 'White',
    choc_milk: 'Milk',
    choc_dark: 'Dark',
    size_s: 'Small',
    size_m: 'Medium',
    size_l: 'Large',
    roast_medium: 'Medium roast',
    nav_home: 'Home',
    nav_fav: 'Favorites',
    nav_cart: 'Cart',
    nav_notif: 'Notifications',
    nav_profile: 'Profile',
    available: 'Available',
    sold_out: 'Sold out',
    no_results: 'No matching items',
    default_desc: 'Our coffee is freshly roasted daily in small batches and ground to order for the best flavor. Choose your chocolate type and size, and enjoy an exceptional coffee experience.',
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