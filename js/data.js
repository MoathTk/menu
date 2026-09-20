var DEFAULT_MENU = {
  version: 2,
  shop: {
    name_ar: 'مقهى رواق',
    name_en: 'RIWAQ CAFÉ',
    logo: 'assets/images/logo.png',
    currency_code: 'IQD',
    currency_symbol_ar: 'د.ع',
    currency_symbol_en: 'IQD',
    contact: {
      phone_display: '0785 994 4000',
      phone: '+9647859944000',
      whatsapp: '9647859944000',
      instagram: 'riwaq_.cafe'
    }
  },
  categories: [
    { id: 'cold',     sort: 1, name_ar: 'القهوة الباردة',    name_en: 'Iced Coffee' },
    { id: 'milkshake', sort: 2, name_ar: 'ميلك شيك',        name_en: 'Milkshakes' },
    { id: 'smoothie', sort: 3, name_ar: 'سموذي',            name_en: 'Smoothies' },
    { id: 'juice',    sort: 4, name_ar: 'عصائر طبيعية',     name_en: 'Fresh Juices' },
    { id: 'hot',      sort: 5, name_ar: 'القهوة الساخنة',    name_en: 'Hot Coffee' },
    { id: 'mojito',   sort: 6, name_ar: 'موهيتو',           name_en: 'Mojitos' },
    { id: 'drinks',   sort: 7, name_ar: 'المشروبات الجاهزة', name_en: 'Drinks' },
    { id: 'hookah_bably', sort: 8, name_ar: 'النراكيل البابلي', name_en: 'Bably Hookah' },
    { id: 'hookah_wood',  sort: 9, name_ar: 'النراكيل الخشب',   name_en: 'Wood Hookah' }
  ],
  items: buildItems([
    // القهوة الباردة
    { id: 'c01', cat: 'cold', n: 'ايس لاتيه', e: 'Iced Latte', p: 4000, img: 'cold-1.jpg' },
    { id: 'c02', cat: 'cold', n: 'ايس لاتيه كراميل', e: 'Caramel Iced Latte', p: 4500, img: 'cold-2.jpg' },
    { id: 'c03', cat: 'cold', n: 'ايس لاتيه فانيلا', e: 'Vanilla Iced Latte', p: 4500, img: 'cold-3.jpg' },
    { id: 'c04', cat: 'cold', n: 'ايس لاتيه فراولة', e: 'Strawberry Iced Latte', p: 4500, img: 'cold-4.jpg' },
    { id: 'c05', cat: 'cold', n: 'ايس لاتيه آيرش', e: 'Irish Iced Latte', p: 4500, img: 'cold-5.jpg' },
    { id: 'c06', cat: 'cold', n: 'ايس سبانش لاتيه', e: 'Spanish Iced Latte', p: 4500, img: 'cold-6.jpg' },
    { id: 'c07', cat: 'cold', n: 'ايس امريكانو', e: 'Iced Americano', p: 4000, img: 'cold-7.jpg' },
    { id: 'c08', cat: 'cold', n: 'فراب كراميل', e: 'Caramel Frappe', p: 4500, img: 'cold-8.jpg' },
    { id: 'c09', cat: 'cold', n: 'فراب وايت موكا', e: 'White Mocha Frappe', p: 4500, img: 'cold-9.jpg' },
    { id: 'c10', cat: 'cold', n: 'فراب دارك موكا', e: 'Dark Mocha Frappe', p: 4500, img: 'cold-10.jpg' },
    { id: 'c11', cat: 'cold', n: 'فراب فراولة', e: 'Strawberry Frappe', p: 4500, img: 'cold-11.jpg' },
    { id: 'c12', cat: 'cold', n: 'V60', e: 'V60', p: 5000, img: 'cold-12.jpg' },

    // ميلك شيك
    { id: 'm01', cat: 'milkshake', n: 'ميلك شيك اوريو', e: 'Oreo Milkshake', p: 5000, img: 'milkshake-1.jpg' },
    { id: 'm02', cat: 'milkshake', n: 'ميلك شيك نوتيلا', e: 'Nutella Milkshake', p: 5000, img: 'milkshake-2.jpg' },
    { id: 'm03', cat: 'milkshake', n: 'ميلك شيك بستاشيو', e: 'Pistachio Milkshake', p: 5000, img: 'milkshake-3.jpg' },
    { id: 'm04', cat: 'milkshake', n: 'ميلك شيك فراولة', e: 'Strawberry Milkshake', p: 5000, img: 'milkshake-4.jpg' },
    { id: 'm05', cat: 'milkshake', n: 'ميلك شيك لوتس', e: 'Lotus Milkshake', p: 5000, img: 'milkshake-5.jpg' },
    { id: 'm06', cat: 'milkshake', n: 'ميلك شيك سنيكرز', e: 'Snickers Milkshake', p: 5000, img: 'milkshake-6.jpg' },
    { id: 'm07', cat: 'milkshake', n: 'ميلك شيك قهوة', e: 'Coffee Milkshake', p: 5000, img: 'milkshake-8.jpg' },
    { id: 'm08', cat: 'milkshake', n: 'ميلك شيك كندر', e: 'Kinder Milkshake', p: 5000, img: 'milkshake-9.jpg' },

    // سموذي
    { id: 's01', cat: 'smoothie', n: 'سموذي رازبيري', e: 'Raspberry Smoothie', p: 4000, img: 'smoothie-1.jpg' },
    { id: 's02', cat: 'smoothie', n: 'سموذي باشن فروت', e: 'Passion Fruit Smoothie', p: 4000, img: 'smoothie-2.jpg' },
    { id: 's03', cat: 'smoothie', n: 'سموذي خوخ', e: 'Peach Smoothie', p: 4000, img: 'smoothie-3.jpg' },
    { id: 's04', cat: 'smoothie', n: 'سموذي فراولة', e: 'Strawberry Smoothie', p: 4000, img: 'smoothie-4.jpg' },
    { id: 's05', cat: 'smoothie', n: 'سموذي مانجو', e: 'Mango Smoothie', p: 4000, img: 'smoothie-5.jpg' },
    { id: 's06', cat: 'smoothie', n: 'سموذي بلو بيري', e: 'Blueberry Smoothie', p: 4000, img: 'smoothie-6.jpg' },

    // عصائر طبيعية
    { id: 'j01', cat: 'juice', n: 'عصير برتقال', e: 'Orange Juice', p: 3500, img: 'juice-1.jpg' },
    { id: 'j02', cat: 'juice', n: 'عصير ليمون ونعناع', e: 'Lemon Mint Juice', p: 3500, img: 'juice-2.jpg' },
    { id: 'j03', cat: 'juice', n: 'عصير ليمون', e: 'Lemon Juice', p: 3500, img: 'juice-3.jpg' },
    { id: 'j04', cat: 'juice', n: 'عصير موز وعسل', e: 'Banana Honey Juice', p: 3500, img: 'juice-4.jpg' },
    { id: 'j05', cat: 'juice', n: 'عصير نوتيلا وموز', e: 'Nutella Banana Juice', p: 3500, img: 'juice-5.jpg' },
    { id: 'j06', cat: 'juice', n: 'عصير بطيخ', e: 'Watermelon Juice', p: 3500, img: 'juice-6.jpg' },
    { id: 'j07', cat: 'juice', n: 'عصير فراولة وموز', e: 'Strawberry Banana Juice', p: 3500, img: 'juice-7.jpg' },
    { id: 'j08', cat: 'juice', n: 'عصير كركديه ونعناع', e: 'Hibiscus Mint Juice', p: 4000, img: 'juice-8.jpg' },
    { id: 'j09', cat: 'juice', n: 'عصير برتقال وليمون', e: 'Orange Lemon Juice', p: 3500, img: 'juice-9.jpg' },

    // القهوة الساخنة
    { id: 'h01', cat: 'hot', n: 'نسكافيه', e: 'Nescafe', p: 2000, img: 'hot-1.jpg' },
    { id: 'h02', cat: 'hot', n: 'هوت تشوكليت', e: 'Hot Chocolate', p: 3500, img: 'hot-2.jpg' },
    { id: 'h03', cat: 'hot', n: 'فلات وايت', e: 'Flat White', p: 3500, img: 'hot-3.jpg' },
    { id: 'h04', cat: 'hot', n: 'لاتيه', e: 'Latte', p: 3500, img: 'hot-4.jpg' },
    { id: 'h05', cat: 'hot', n: 'دارك موكا', e: 'Dark Mocha', p: 4000, img: 'hot-5.jpg' },
    { id: 'h06', cat: 'hot', n: 'قهوة تركية', e: 'Turkish Coffee', p: 2500, img: 'hot-6.jpg' },
    { id: 'h07', cat: 'hot', n: 'كابتشينو', e: 'Cappuccino', p: 1500, img: 'hot-7.jpg' },
    { id: 'h08', cat: 'hot', n: 'اسبريسو', e: 'Espresso', p: 2500, img: 'hot-8.jpg' },
    { id: 'h09', cat: 'hot', n: 'امريكانو', e: 'Americano', p: 3000, img: 'hot-9.jpg' },

    // موهيتو
    { id: 'mo01', cat: 'mojito', n: 'موهيتو ريد', e: 'Red Mojito', p: 3500, img: 'mojito-1.jpg' },
    { id: 'mo02', cat: 'mojito', n: 'موهيتو بلو', e: 'Blue Mojito', p: 3500, img: 'mojito-2.jpg' },
    { id: 'mo03', cat: 'mojito', n: 'موهيتو فراولة', e: 'Strawberry Mojito', p: 3500, img: 'mojito-3.jpg' },
    { id: 'mo04', cat: 'mojito', n: 'موهيتو ركي ونعناع', e: 'Raki Mint Mojito', p: 3500, img: 'mojito-4.jpg' },
    { id: 'mo05', cat: 'mojito', n: 'موهيتو كركديه', e: 'Hibiscus Mojito', p: 3500, img: 'mojito-5.jpg' },
    { id: 'mo06', cat: 'mojito', n: 'موهيتو ليمون ونعناع', e: 'Lemon Mint Mojito', p: 3500, img: 'mojito-6.jpg' },
    { id: 'mo07', cat: 'mojito', n: 'موهيتو رمان', e: 'Pomegranate Mojito', p: 3500, img: 'mojito-7.jpg' },
    { id: 'mo08', cat: 'mojito', n: 'مكسيكي', e: 'Mexican', p: 3500, img: 'mojito-8.jpg' },

    // المشروبات الجاهزة
    { id: 'd01', cat: 'drinks', n: 'ريد بول', e: 'Red Bull', p: 3000, img: 'drinks-1.jpg' },
    { id: 'd02', cat: 'drinks', n: 'تايجر', e: 'Tiger', p: 1500, img: 'drinks-2.jpg' },
    { id: 'd03', cat: 'drinks', n: 'سفن اب', e: '7up', p: 750, img: 'drinks-3.jpg' },
    { id: 'd04', cat: 'drinks', n: 'بيبسي', e: 'Pepsi', p: 750, img: 'drinks-4.jpg' },
    { id: 'd05', cat: 'drinks', n: 'ميرندا', e: 'Mirinda', p: 750, img: 'drinks-5.jpg' },
    { id: 'd06', cat: 'drinks', n: 'شاي صغير', e: 'Small Tea', p: 500, img: 'drinks-6.jpg' },
    { id: 'd07', cat: 'drinks', n: 'شاي كبير', e: 'Large Tea', p: 1000, img: 'drinks-6.jpg' },
    { id: 'd08', cat: 'drinks', n: 'ماء', e: 'Water', p: 500, img: 'drinks-7.jpg' },

    // النراكيل البابلي
    { id: 'hb01', cat: 'hookah_bably', n: 'نركيلة رواق طبيعي', e: 'Riwaq Natural Hookah', p: 15000, img: '' },
    { id: 'hb02', cat: 'hookah_bably', n: 'نركيلة رواق بابلي', e: 'Riwaq Bably Hookah', p: 7000, img: '' },
    { id: 'hb03', cat: 'hookah_bably', n: 'نركيلة باونتي بابلي', e: 'Bounty Bably Hookah', p: 6000, img: '' },
    { id: 'hb04', cat: 'hookah_bably', n: 'نركيلة عنب بابلي', e: 'Grape Bably Hookah', p: 6000, img: '' },
    { id: 'hb05', cat: 'hookah_bably', n: 'نركيلة نعناع بابلي', e: 'Mint Bably Hookah', p: 6000, img: '' },
    { id: 'hb06', cat: 'hookah_bably', n: 'نركيلة علج ونعناع بابلي', e: 'Gum & Mint Bably Hookah', p: 6000, img: '' },
    { id: 'hb07', cat: 'hookah_bably', n: 'نركيلة انكليزي بابلي', e: 'English Bably Hookah', p: 6000, img: '' },
    { id: 'hb08', cat: 'hookah_bably', n: 'نركيلة ليمون ونعناع بابلي', e: 'Lemon & Mint Bably Hookah', p: 6000, img: '' },

    // النراكيل الخشب
    { id: 'hw01', cat: 'hookah_wood', n: 'نركيلة ليمون ونعناع', e: 'Lemon & Mint Hookah', p: 4000, img: '' },
    { id: 'hw02', cat: 'hookah_wood', n: 'نركيلة امسية موسكو', e: 'Moscow Evening Hookah', p: 4000, img: '' },
    { id: 'hw03', cat: 'hookah_wood', n: 'نركيلة انكليزي', e: 'English Hookah', p: 4000, img: '' },
    { id: 'hw04', cat: 'hookah_wood', n: 'نركيلة علج ونعناع', e: 'Gum & Mint Hookah', p: 4000, img: '' },
    { id: 'hw05', cat: 'hookah_wood', n: 'نركيلة نعناع', e: 'Mint Hookah', p: 4000, img: '' },
    { id: 'hw06', cat: 'hookah_wood', n: 'نركيلة تفاحة', e: 'Apple Hookah', p: 4000, img: '' },
    { id: 'hw07', cat: 'hookah_wood', n: 'نركيلة تفاحتين', e: 'Double Apple Hookah', p: 4000, img: '' }
  ])
};

function buildItems(list) {
  return list.map(function (row, index) {
    return {
      id: row.id,
      category_id: row.cat,
      sort: index + 1,
      tags: [],
      name_ar: row.n,
      name_en: row.e,
      desc_ar: '',
      desc_en: '',
      price: row.p,
      image: row.img ? 'assets/images/' + row.img : ''
    };
  });
}

var SHOP_PIN = '2026';