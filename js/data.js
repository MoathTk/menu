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
    { id: 'c01', cat: 'cold', n: 'ايس لاتيه', e: 'Iced Latte', p: 4000, img: 'cold-1.jpg', da: 'إسبريسو طازج مخفوق مع حليب بارد وثلج، ناعم ومتوازن لنشاط منعش.', de: 'Fresh espresso shaken with cold milk and ice, smooth and balanced for a refreshing lift.' },
    { id: 'c02', cat: 'cold', n: 'ايس لاتيه كراميل', e: 'Caramel Iced Latte', p: 4500, img: 'cold-2.jpg', da: 'إيس لاتيه غني بصلصة الكراميل الذهبية، يجمع بين حلاوة الكراميل ونعومة القهوة.', de: 'Iced latte enriched with golden caramel sauce, blending caramel sweetness with silky coffee.' },
    { id: 'c03', cat: 'cold', n: 'ايس لاتيه فانيلا', e: 'Vanilla Iced Latte', p: 4500, img: 'cold-3.jpg', da: 'نكهة الفانيلا الطبيعية مع إسبريسو وحليب بارد، خيار هادئ ومريح بنكهة دافئة.', de: 'Natural vanilla with espresso and cold milk; a calm, comforting iced coffee.' },
    { id: 'c04', cat: 'cold', n: 'ايس لاتيه فراولة', e: 'Strawberry Iced Latte', p: 4500, img: 'cold-4.jpg', da: 'طبقات من الفراولة الطازجة مع الحليب وإسبريسو ناعم، لحلاوة منعشة ووردية.', de: 'Layers of fresh strawberry with milk and smooth espresso for a refreshing, rosy sweetness.' },
    { id: 'c05', cat: 'cold', n: 'ايس لاتيه آيرش', e: 'Irish Iced Latte', p: 4500, img: 'cold-5.jpg', da: 'لمسة آيرش مميزة مع إسبريسو مضاعف وحليب بارد، أقوى حجماً وأعمق نكهة.', de: 'A distinctive Irish twist with extra espresso and cold milk; fuller-bodied and deeper.' },
    { id: 'c06', cat: 'cold', n: 'ايس سبانش لاتيه', e: 'Spanish Iced Latte', p: 4500, img: 'cold-6.jpg', da: 'إسبريسو بارد مع حليب مكثف محلى، الطريقة الإسبانية الكريمية والحلوة قليلاً.', de: 'Cold espresso with sweet condensed milk, the creamy, lightly sweet Spanish way.' },
    { id: 'c07', cat: 'cold', n: 'ايس امريكانو', e: 'Iced Americano', p: 4000, img: 'cold-7.jpg', da: 'إسبريسو وماء بارد وثلج، نقية ومنعشة لمن يفضلون القهوة بدون حليب.', de: 'Espresso, cold water and ice; pure and refreshing for black-coffee lovers.' },
    { id: 'c08', cat: 'cold', n: 'فراب كراميل', e: 'Caramel Frappe', p: 4500, img: 'cold-8.jpg', da: 'فراب مثلج مخفوق بصلصة الكراميل والكريمة، سميك ومنعش ومحمّل بالحلاوة.', de: 'Iced blended frappe with caramel sauce and cream; thick, refreshing and indulgent.' },
    { id: 'c09', cat: 'cold', n: 'فراب وايت موكا', e: 'White Mocha Frappe', p: 4500, img: 'cold-9.jpg', da: 'فراب بشوكولاتة بيضاء ذائبة وحليب مثلج، حلاوة كريمية بلمسة قهوة خفيفة.', de: 'Frappe with melted white chocolate and iced milk; creamy sweetness with a light coffee touch.' },
    { id: 'c10', cat: 'cold', n: 'فراب دارك موكا', e: 'Dark Mocha Frappe', p: 4500, img: 'cold-10.jpg', da: 'فراب بشوكولاتة داكنة غنية وإسبريسو قوي، كثيف ومثالي لعشاق الكاكاو.', de: 'Rich dark chocolate and bold espresso in a thick frappe; perfect for cocoa lovers.' },
    { id: 'c11', cat: 'cold', n: 'فراب فراولة', e: 'Strawberry Frappe', p: 4500, img: 'cold-11.jpg', da: 'فراب فراولة مثلج مخفوق بالفواكه الطازجة والكريمة، منعش وحلو بشكل طبيعي.', de: 'Iced strawberry frappe blended with fresh fruit and cream; naturally sweet and refreshing.' },
    { id: 'c12', cat: 'cold', n: 'V60', e: 'V60', p: 5000, img: 'cold-12.jpg', da: 'قهوة مقطرة يدوياً بطريقة V60 بمياه مضبوطة، نقية تكشف طبقات حموضة ونكهة الفواكه.', de: 'Hand-brewed V60 pour-over with precise water control, revealing bright acidity and fruity notes.' },

    // ميلك شيك
    { id: 'm01', cat: 'milkshake', n: 'ميلك شيك اوريو', e: 'Oreo Milkshake', p: 5000, img: 'milkshake-1.jpg', da: 'ميلك شيك كثيف بقطع أوريو ومثلجات الفانيلا، كلاسيكي يذوب في الحلق.', de: 'Thick milkshake with Oreo chunks and vanilla ice cream; a melt-in-your-mouth classic.' },
    { id: 'm02', cat: 'milkshake', n: 'ميلك شيك نوتيلا', e: 'Nutella Milkshake', p: 5000, img: 'milkshake-2.jpg', da: 'نوتيلا ذائبة مع حليب ومثلجات، كريمية وغنية بنكهة البندق.', de: 'Melted Nutella with milk and ice cream, creamy and rich with hazelnut flavor.' },
    { id: 'm03', cat: 'milkshake', n: 'ميلك شيك بستاشيو', e: 'Pistachio Milkshake', p: 5000, img: 'milkshake-3.jpg', da: 'ميلك شيك بمعجون الفستق الحلبي، كريمي ومميز بنكهة فاخرة.', de: 'Milkshake with pistachio paste; creamy with a luxurious, distinctive flavor.' },
    { id: 'm04', cat: 'milkshake', n: 'ميلك شيك فراولة', e: 'Strawberry Milkshake', p: 5000, img: 'milkshake-4.jpg', da: 'فراولة طازجة مع مثلجات الفانيلا، ميلك شيك وردي طبيعي ومنعش.', de: 'Fresh strawberries blended with vanilla ice cream; a naturally refreshing pink shake.' },
    { id: 'm05', cat: 'milkshake', n: 'ميلك شيك لوتس', e: 'Lotus Milkshake', p: 5000, img: 'milkshake-5.jpg', da: 'بسكويت لوتس بالكراميل مع مثلجات، حلاوة مميزة بطعم الكراميل المقرمش.', de: 'Caramelized Lotus biscuits with ice cream; that signature caramel crunch.' },
    { id: 'm06', cat: 'milkshake', n: 'ميلك شيك سنيكرز', e: 'Snickers Milkshake', p: 5000, img: 'milkshake-6.jpg', da: 'ميلك شيك بنكهة سنيكرز بالشوكولاتة والفول السوداني والكراميل، وجبة حلوة كاملة.', de: 'Snickers-inspired shake with chocolate, peanuts and caramel; a whole candy treat.' },
    { id: 'm07', cat: 'milkshake', n: 'ميلك شيك قهوة', e: 'Coffee Milkshake', p: 5000, img: 'milkshake-8.jpg', da: 'ميلك شيك بقهوة الإسبريسو المخفوقة مع الحليب ومثلجات القهوة.', de: 'Espresso blended with milk and coffee ice cream for a caffeinated shake.' },
    { id: 'm08', cat: 'milkshake', n: 'ميلك شيك كندر', e: 'Kinder Milkshake', p: 5000, img: 'milkshake-9.jpg', da: 'ميلك شيك بالشوكولاتة بنكهة كندر الشهيرة مع الحليب الطازج.', de: 'Milkshake with Kinder\u2019s famous chocolate flavor, blended with fresh milk.' },

    // سموذي
    { id: 's01', cat: 'smoothie', n: 'سموذي رازبيري', e: 'Raspberry Smoothie', p: 4000, img: 'smoothie-1.jpg', da: 'سموذي التوت الأحمر بالحليب، غني بمضادات الأكسدة ومنعش.', de: 'Raspberry smoothie blended with milk; antioxidant-rich and refreshingly tart.' },
    { id: 's02', cat: 'smoothie', n: 'سموذي باشن فروت', e: 'Passion Fruit Smoothie', p: 4000, img: 'smoothie-2.jpg', da: 'سموذي باشن فروت استوائي، منعش بنكهة حامضية خفيفة وفوائد طبيعية.', de: 'Tropical passion fruit smoothie with a mild tang and natural goodness.' },
    { id: 's03', cat: 'smoothie', n: 'سموذي خوخ', e: 'Peach Smoothie', p: 4000, img: 'smoothie-3.jpg', da: 'سموذي الخوخ الطازج، ناعم وحلو بمذاق صيفي لطيف.', de: 'Smoothie made with fresh peaches; soft, sweet and summery.' },
    { id: 's04', cat: 'smoothie', n: 'سموذي فراولة', e: 'Strawberry Smoothie', p: 4000, img: 'smoothie-4.jpg', da: 'سموذي الفراولة بالحليب والعسل، كريمي ومليء بنكهة الفراولة الطبيعية.', de: 'Strawberry smoothie with milk and honey, creamy and bursting with natural berries.' },
    { id: 's05', cat: 'smoothie', n: 'سموذي مانجو', e: 'Mango Smoothie', p: 4000, img: 'smoothie-5.jpg', da: 'سموذي المانجو الاستوائي، سميك وكريمي بنكهة المانجو الغنية.', de: 'Tropical mango smoothie; thick and creamy with rich mango flavor.' },
    { id: 's06', cat: 'smoothie', n: 'سموذي بلو بيري', e: 'Blueberry Smoothie', p: 4000, img: 'smoothie-6.jpg', da: 'سموذي التوت الأزرق بالحليب، لذيذ ومليء بالفوائد والمضادات.', de: 'Blueberry smoothie with milk; delicious and loaded with antioxidants.' },

    // عصائر طبيعية
    { id: 'j01', cat: 'juice', n: 'عصير برتقال', e: 'Orange Juice', p: 3500, img: 'juice-1.jpg', da: 'عصير برتقال طازج معصور، بدون إضافات، فيتامين C بشكله النقي.', de: 'Freshly squeezed orange juice with no additives; pure vitamin C.' },
    { id: 'j02', cat: 'juice', n: 'عصير ليمون ونعناع', e: 'Lemon Mint Juice', p: 3500, img: 'juice-2.jpg', da: 'ليمون طازج مع أوراق النعناع، منعش ومتوسط الحلاوة.', de: 'Fresh lemon with mint leaves, refreshing and lightly sweet.' },
    { id: 'j03', cat: 'juice', n: 'عصير ليمون', e: 'Lemon Juice', p: 3500, img: 'juice-3.jpg', da: 'عصير ليمون طازج منعش، خيارك المثالي لمشروب خفيف.', de: 'Refreshing fresh lemon juice; a light and crisp pick-me-up.' },
    { id: 'j04', cat: 'juice', n: 'عصير موز وعسل', e: 'Banana Honey Juice', p: 3500, img: 'juice-4.jpg', da: 'موز مهروس مع عسل طبيعي، كريمي ومغذٍ وهو خيار إفطار مثالي.', de: 'Blended banana with natural honey; creamy, nourishing and great for breakfast.' },
    { id: 'j05', cat: 'juice', n: 'عصير نوتيلا وموز', e: 'Nutella Banana Juice', p: 3500, img: 'juice-5.jpg', da: 'موز مهروس مع نوتيلا، حلو وكثيف ومحبوب من الكبار والأطفال.', de: 'Fresh banana blended with Nutella; sweet, thick and loved by all ages.' },
    { id: 'j06', cat: 'juice', n: 'عصير بطيخ', e: 'Watermelon Juice', p: 3500, img: 'juice-6.jpg', da: 'عصير بطيخ طازج، خفيف ومنعش لأيام الصيف الحارة.', de: 'Fresh watermelon juice; light and hydrating for hot summer days.' },
    { id: 'j07', cat: 'juice', n: 'عصير فراولة وموز', e: 'Strawberry Banana Juice', p: 3500, img: 'juice-7.jpg', da: 'فراولة وموز معاً، سموذي جاهز بمذاق متوازن وحلو.', de: 'Strawberries and bananas together; a balanced, naturally sweet combo.' },
    { id: 'j08', cat: 'juice', n: 'عصير كركديه ونعناع', e: 'Hibiscus Mint Juice', p: 4000, img: 'juice-8.jpg', da: 'كركديه منقوع مع النعناع، حامض قليلاً ومنعش، غني بالألوان والفائدة.', de: 'Brewed hibiscus with mint; slightly tart, refreshing and richly colored.' },
    { id: 'j09', cat: 'juice', n: 'عصير برتقال وليمون', e: 'Orange Lemon Juice', p: 3500, img: 'juice-9.jpg', da: 'برتقال وليمون معاً، توازن ممتاز بين الحلاوة والحموضة.', de: 'Orange and lemon combined for the perfect balance of sweet and tangy.' },

    // القهوة الساخنة
    { id: 'h01', cat: 'hot', n: 'نسكافيه', e: 'Nescafe', p: 2000, img: 'hot-1.jpg', da: 'نسكافيه ساخن محضّر بعناية مع الحليب، سريع ولذيذ.', de: 'Hot Nescafe prepared with care and milk; quick and tasty.' },
    { id: 'h02', cat: 'hot', n: 'هوت تشوكليت', e: 'Hot Chocolate', p: 3500, img: 'hot-2.jpg', da: 'شوكولاتة ساخنة غنية بالحليب وتُتوّج بالكريمة، دافئة ومريحة.', de: 'Rich hot chocolate made with milk and topped with cream; warm and cozy.' },
    { id: 'h03', cat: 'hot', n: 'فلات وايت', e: 'Flat White', p: 3500, img: 'hot-3.jpg', da: 'شوت مزدوج من الإسبريسو مع حليب مبخّر قليل الرغوة، توازن قهوة ناعم.', de: 'Double espresso with velvety steamed milk; a smooth coffee balance.' },
    { id: 'h04', cat: 'hot', n: 'لاتيه', e: 'Latte', p: 3500, img: 'hot-4.jpg', da: 'لاتيه كلاسيكي بحليب مبخّر ورغوة ناعمة، ناعم ولطيف.', de: 'Classic latte with steamed milk and soft foam; gentle and smooth.' },
    { id: 'h05', cat: 'hot', n: 'دارك موكا', e: 'Dark Mocha', p: 4000, img: 'hot-5.jpg', da: 'موكا بالشوكولاتة الداكنة والإسبريسو مع حليب مبخّر، غني وفاخر.', de: 'Mocha with dark chocolate, espresso and steamed milk; rich and indulgent.' },
    { id: 'h06', cat: 'hot', n: 'قهوة تركية', e: 'Turkish Coffee', p: 2500, img: 'hot-6.jpg', da: 'قهوة تركية أصيلة مع رغوة، مطبوخة على الحرارة بعناية.', de: 'Authentic Turkish coffee with foam, slow-cooked to perfection.' },
    { id: 'h07', cat: 'hot', n: 'كابتشينو', e: 'Cappuccino', p: 1500, img: 'hot-7.jpg', da: 'كابتشينو برغوة حليب كثيفة، كلاسيكي متوازن ومحبوب.', de: 'Cappuccino with thick milk foam; a balanced, beloved classic.' },
    { id: 'h08', cat: 'hot', n: 'اسبريسو', e: 'Espresso', p: 2500, img: 'hot-8.jpg', da: 'شوت إسبريسو مركّز، طاقتك القهوة الأصيلة بنكهة كاملة.', de: 'A concentrated espresso shot; pure coffee energy with full flavor.' },
    { id: 'h09', cat: 'hot', n: 'امريكانو', e: 'Americano', p: 3000, img: 'hot-9.jpg', da: 'إسبريسو مضاف إليه ماء ساخن، أخف وأصفى وأكثر انعاشاً.', de: 'Espresso topped with hot water; lighter, cleaner and more refreshing.' },

    // موهيتو
    { id: 'mo01', cat: 'mojito', n: 'موهيتو ريد', e: 'Red Mojito', p: 3500, img: 'mojito-1.jpg', da: 'موهيتو أحمر منعش بشراب التوت والليمون والنعناع والثلج المجروش.', de: 'Refreshing red mojito with berry syrup, lime, mint and crushed ice.' },
    { id: 'mo02', cat: 'mojito', n: 'موهيتو بلو', e: 'Blue Mojito', p: 3500, img: 'mojito-2.jpg', da: 'موهيتو أزرق ملوّن منعش، مميز بنكهته ومظهره.', de: 'A striking blue mojito; refreshing with a unique look and taste.' },
    { id: 'mo03', cat: 'mojito', n: 'موهيتو فراولة', e: 'Strawberry Mojito', p: 3500, img: 'mojito-3.jpg', da: 'موهيتو بالفراولة الطازجة والنعناع، حلو وحامض في الوقت نفسه.', de: 'Mojito with fresh strawberries and mint, in a balanced sweet-tart mix.' },
    { id: 'mo04', cat: 'mojito', n: 'موهيتو ركي ونعناع', e: 'Raki Mint Mojito', p: 3500, img: 'mojito-4.jpg', da: 'موهيتو بنكهة الركي مع النعناع المنعش، قوي وخفيف.', de: 'Mojito with raki flavor and fresh mint; bold yet light.' },
    { id: 'mo05', cat: 'mojito', n: 'موهيتو كركديه', e: 'Hibiscus Mojito', p: 3500, img: 'mojito-5.jpg', da: 'موهيتو بالكركديه، حامض قليلاً ومنعش بلون وردي جذاب.', de: 'Hibiscus mojito; slightly tart, refreshing with a lovely pink hue.' },
    { id: 'mo06', cat: 'mojito', n: 'موهيتو ليمون ونعناع', e: 'Lemon Mint Mojito', p: 3500, img: 'mojito-6.jpg', da: 'الكلاسيكي الأصلي بالليمون والنعناع والثلج المجروش.', de: 'The original classic with lime, mint and crushed ice.' },
    { id: 'mo07', cat: 'mojito', n: 'موهيتو رمان', e: 'Pomegranate Mojito', p: 3500, img: 'mojito-7.jpg', da: 'موهيتو بالرمان الطازج، منعش وملوّن ومليء بنكهة الفاكهة.', de: 'Fresh pomegranate mojito; refreshing, colorful and fruity.' },
    { id: 'mo08', cat: 'mojito', n: 'مكسيكي', e: 'Mexican', p: 3500, img: 'mojito-8.jpg', da: 'موهيتو مكسيكي بنكهة مميزة وتوازن حار وحلو.', de: 'Mexican-style mojito with a distinct character and spicy-sweet balance.' },

    // المشروبات الجاهزة
    { id: 'd01', cat: 'drinks', n: 'ريد بول', e: 'Red Bull', p: 3000, img: 'drinks-1.jpg', da: 'ريد بول مثلج، طاقة فورية بعلبة باردة.', de: 'Iced Red Bull for an instant energy boost.' },
    { id: 'd02', cat: 'drinks', n: 'تايجر', e: 'Tiger', p: 1500, img: 'drinks-2.jpg', da: 'تايجر منعش بعلبة باردة.', de: 'Chilled Tiger soft drink.' },
    { id: 'd03', cat: 'drinks', n: 'سفن اب', e: '7up', p: 750, img: 'drinks-3.jpg', da: 'سفن أب مثلج بالليمون، منعش وفوّار ولذيذ.', de: 'Chilled 7up with lemon; crisp and fizzy.' },
    { id: 'd04', cat: 'drinks', n: 'بيبسي', e: 'Pepsi', p: 750, img: 'drinks-4.jpg', da: 'بيبسي مثلجة، الصودا الكلاسيكية المحبوبة.', de: 'Chilled Pepsi; the beloved classic cola.' },
    { id: 'd05', cat: 'drinks', n: 'ميرندا', e: 'Mirinda', p: 750, img: 'drinks-5.jpg', da: 'ميرندا مثلجة بنكهة البرتقال، منعشة.', de: 'Chilled Mirinda orange soda; refreshing.' },
    { id: 'd06', cat: 'drinks', n: 'شاي صغير', e: 'Small Tea', p: 500, img: 'drinks-6.jpg', da: 'شاي ساخن صغير، بسيط ولذيذ.', de: 'A small hot tea; simple and delicious.' },
    { id: 'd07', cat: 'drinks', n: 'شاي كبير', e: 'Large Tea', p: 1000, img: 'drinks-6.jpg', da: 'شاي ساخن كبير، مناسب للمجالس الطويلة.', de: 'A large hot tea; perfect for long gatherings.' },
    { id: 'd08', cat: 'drinks', n: 'ماء', e: 'Water', p: 500, img: 'drinks-7.jpg', da: 'ماء معبأ، نظيف ومنعش.', de: 'Bottled water; clean and refreshing.' },

    // النراكيل البابلي
    { id: 'hb01', cat: 'hookah_bably', n: 'نركيلة رواق طبيعي', e: 'Riwaq Natural Hookah', p: 15000, img: '', da: 'نركيلة رواق الطبيعية بخليط رواق الخاص وتجربة رواق الكاملة.', de: 'Riwaq Signature Natural Hookah with our exclusive blend and the full Riwaq experience.' },
    { id: 'hb02', cat: 'hookah_bably', n: 'نركيلة رواق بابلي', e: 'Riwaq Bably Hookah', p: 7000, img: '', da: 'نركيلة بابلي بنكهة رواق المميزة، دخنة وغنية.', de: 'Bably hookah with Riwaq\u2019s signature flavor; smooth and rich.' },
    { id: 'hb03', cat: 'hookah_bably', n: 'نركيلة باونتي بابلي', e: 'Bounty Bably Hookah', p: 6000, img: '', da: 'نركيلة بابلي بنكهة باونتي بجوز الهند والشوكولاتة.', de: 'Bably hookah with a chocolate-coconut Bounty treat.' },
    { id: 'hb04', cat: 'hookah_bably', n: 'نركيلة عنب بابلي', e: 'Grape Bably Hookah', p: 6000, img: '', da: 'نركيلة بابلي بعنب مدخّن غني النكهة.', de: 'Bably hookah with a rich, smoky grape flavor.' },
    { id: 'hb05', cat: 'hookah_bably', n: 'نركيلة نعناع بابلي', e: 'Mint Bably Hookah', p: 6000, img: '', da: 'نركيلة بابلي بنعناع منعش وبارد.', de: 'Bably hookah with a cool, refreshing mint.' },
    { id: 'hb06', cat: 'hookah_bably', n: 'نركيلة علج ونعناع بابلي', e: 'Gum & Mint Bably Hookah', p: 6000, img: '', da: 'نركيلة بابلي بمزيج العلج والنعناع الكلاسيكي.', de: 'Bably hookah with the classic gum and mint mix.' },
    { id: 'hb07', cat: 'hookah_bably', n: 'نركيلة انكليزي بابلي', e: 'English Bably Hookah', p: 6000, img: '', da: 'نركيلة بابلي بنكهة الفواكه الإنجليزية الكلاسيكية.', de: 'Bably hookah with the classic English fruity flavor.' },
    { id: 'hb08', cat: 'hookah_bably', n: 'نركيلة ليمون ونعناع بابلي', e: 'Lemon & Mint Bably Hookah', p: 6000, img: '', da: 'نركيلة بابلي بالليمون والنعناع، طازجة ومنتعشة.', de: 'Bably hookah with lemon and mint; fresh and zesty.' },

    // النراكيل الخشب
    { id: 'hw01', cat: 'hookah_wood', n: 'نركيلة ليمون ونعناع', e: 'Lemon & Mint Hookah', p: 4000, img: '', da: 'نركيلة خشب بالليمون والنعناع، منعشة وكلاسيكية.', de: 'Wood hookah with lemon and mint; refreshing and classic.' },
    { id: 'hw02', cat: 'hookah_wood', n: 'نركيلة امسية موسكو', e: 'Moscow Evening Hookah', p: 4000, img: '', da: 'نركيلة خشب بطابع مساء موسكو، نكهة مميزة ودخنة ناعمة.', de: 'Wood hookah with a Moscow-evening mood, distinctive flavor and smooth smoke.' },
    { id: 'hw03', cat: 'hookah_wood', n: 'نركيلة انكليزي', e: 'English Hookah', p: 4000, img: '', da: 'نركيلة خشب بنكهة إنجليزية كلاسيكية.', de: 'Wood hookah with an English-style classic flavor.' },
    { id: 'hw04', cat: 'hookah_wood', n: 'نركيلة علج ونعناع', e: 'Gum & Mint Hookah', p: 4000, img: '', da: 'نركيلة خشب بمزيج العلج والنعناع المتوازن.', de: 'Wood hookah with a balanced gum and mint mix.' },
    { id: 'hw05', cat: 'hookah_wood', n: 'نركيلة نعناع', e: 'Mint Hookah', p: 4000, img: '', da: 'نركيلة خشب بالنعناع، نقية ومنعشة.', de: 'Wood hookah with pure, fresh mint.' },
    { id: 'hw06', cat: 'hookah_wood', n: 'نركيلة تفاحة', e: 'Apple Hookah', p: 4000, img: '', da: 'نركيلة خشب بنكهة التفاح الحلو المميزة.', de: 'Wood hookah with sweet, signature apple flavor.' },
    { id: 'hw07', cat: 'hookah_wood', n: 'نركيلة تفاحتين', e: 'Double Apple Hookah', p: 4000, img: '', da: 'نركيلة خشب بالتفاحتين، الأقوى والأغنى نكهة.', de: 'Wood hookah with double apple; bolder and richer.' }
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
      desc_ar: row.da || '',
      desc_en: row.de || '',
      price: row.p,
      image: row.img ? 'assets/images/' + row.img : ''
    };
  });
}

var SHOP_PIN = '2026';