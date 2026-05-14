// tokens.jsx — Design tokens, i18n, ornaments.
// Exposed via window so other Babel scripts can read them.

const DD_PALETTE = {
  light: {
    primary:    '#1E3A8A',
    primaryHi:  '#2D4FC7',
    primarySoft:'#EEF2FB',
    accent:     '#FACC15',
    accentSoft: '#FEF6CD',
    bg:         '#FFFFFF',
    surface:    '#F3F4F6',
    surface2:   '#E5E7EB',
    text:       '#111827',
    muted:      '#6B7280',
    border:     '#E5E7EB',
    line:       '#F1F2F4',
    whatsapp:   '#25D366',
    whatsappDk: '#1FAE54',
    verified:   '#1E3A8A',
    danger:     '#DC2626',
  },
  dark: {
    primary:    '#5B7CF0',
    primaryHi:  '#7A95FF',
    primarySoft:'#1B2444',
    accent:     '#FACC15',
    accentSoft: '#3A2F08',
    bg:         '#0A0F1F',
    surface:    '#151B2D',
    surface2:   '#1F2740',
    text:       '#F4F6FA',
    muted:      '#8893B0',
    border:     '#27304A',
    line:       '#1B2238',
    whatsapp:   '#25D366',
    whatsappDk: '#1FAE54',
    verified:   '#5B7CF0',
    danger:     '#F87171',
  },
};

// ── i18n ────────────────────────────────────────────────────────────────────
// RU primary, KG/EN secondary. KG transliterations are best-effort.
const DD_I18N = {
  ru: {
    brand: 'Dordoi Digital',
    tagline: 'Найди товар на Дордое за 1 минуту',
    // onboarding
    onb_h:  'Дордой\nза 60 секунд',
    onb_sub:'Поиск товара, поставщика и контейнера. Без беготни по рядам.',
    onb_b1: 'Поиск по 14 000 контейнерам',
    onb_b2: 'Звонок и WhatsApp в один тап',
    onb_b3: 'Проверенные поставщики',
    onb_cta:'Начать поиск',
    onb_skip:'Войти позже',
    // home
    search_ph: 'Что вы ищете?',
    search_hint: 'товар, поставщик, контейнер…',
    cats: ['Женская одежда','Детское','Обувь','Ткани','Опт','Аксессуары','Текстиль','Спорт'],
    popular: 'Популярные запросы',
    recent: 'Недавние',
    nearby_now: 'Рядом сейчас',
    explore: 'Смотреть рынок',
    suggestions: [
      ['Куртки женские зимние',  'Опт'],
      ['Джинсы мужские',          'Розница'],
      ['Сапоги детские',          'Опт'],
      ['Ткань хлопок Турция',     'Метраж'],
      ['Спортивные костюмы',      'Опт'],
    ],
    // filter chips
    f_wholesale: 'Опт',
    f_cheap:     'Дёшево',
    f_verified:  'Проверено',
    f_nearby:    'Рядом',
    f_open:      'Открыто сейчас',
    // sections
    sec_east: 'Сектор Восток',
    sec_west: 'Сектор Запад',
    sec_south:'Сектор Юг',
    sec_aigul:'Сектор Айгуль',
    row: 'ряд',
    container: 'контейнер',
    // supplier card
    retail: 'Розница',
    wholesale: 'Опт',
    verified: 'Проверено',
    call: 'Позвонить',
    whatsapp: 'WhatsApp',
    write_wa: 'Написать в WhatsApp',
    open_until: 'Открыто до',
    min_walk: 'мин пешком',
    // results
    results_count: (n) => `${n} поставщиков`,
    sort: 'Сортировка',
    sort_relevant: 'По релевантности',
    sort_near:    'Сначала ближайшие',
    sort_cheap:   'Сначала дешевле',
    // profile
    open_now: 'Открыто',
    closed:   'Закрыто',
    address:  'Адрес',
    hours:    'Часы работы',
    categories: 'Категории',
    gallery:  'Галерея',
    description: 'О магазине',
    verified_text: 'Проверенный поставщик',
    verified_sub:  'Подтверждены телефон и WhatsApp',
    // request form
    notfound: 'Не нашли товар?',
    notfound_sub: 'Опишите, что ищете — найдём поставщика за 24 часа.',
    rq_name: 'Что ищете',
    rq_name_ph: 'Например: куртки парка женские, размер S–XL',
    rq_qty: 'Количество',
    rq_qty_ph: '500 шт',
    rq_budget: 'Бюджет за единицу',
    rq_budget_ph: '800–1200 сом',
    rq_note: 'Комментарий',
    rq_note_ph: 'Цвет, материал, сроки…',
    rq_phone: 'Ваш телефон',
    rq_cta: 'Найти поставщика для меня',
    rq_disclaimer: 'Ответ обычно в течение 2–6 часов. Бесплатно.',
    // web
    web_h1: 'Дордой. Найди любой товар за минуту.',
    web_sub:'Поиск по поставщикам крупнейшего оптового рынка Центральной Азии. Без регистрации.',
    web_install: 'Установить как приложение',
    web_open_mobile: 'Открыть на телефоне',
    nav: ['Поиск','Категории','Для оптовиков','Помощь'],
  },
  kg: {
    brand: 'Dordoi Digital',
    tagline: 'Дордойдон керектүү буюмду 1 мүнөттө тап',
    onb_h:  'Дордой\n60 секундада',
    onb_sub:'Буюм, сатуучу жана контейнерди изде. Тилкелерди кыдыруусуз.',
    onb_b1: '14 000 контейнер боюнча издөө',
    onb_b2: 'Чалуу жана WhatsApp бир тийүүдө',
    onb_b3: 'Текшерилген сатуучулар',
    onb_cta:'Издөөнү баштоо',
    onb_skip:'Кийинчерээк кирүү',
    search_ph: 'Эмне издеп жатасыз?',
    search_hint: 'буюм, сатуучу, контейнер…',
    cats: ['Аялдар кийими','Балдарга','Бут кийим','Кездеме','Дүң','Аксессуар','Тексиль','Спорт'],
    popular: 'Көп изделгендер',
    recent: 'Жакында',
    nearby_now: 'Жакында ачык',
    explore: 'Базарды кароо',
    suggestions: [
      ['Аялдар кышкы курткалары','Дүң'],
      ['Эркектер джинсы',         'Бирдиктеп'],
      ['Балдар өтүктөрү',         'Дүң'],
      ['Кездеме пахта Түркия',    'Метр'],
      ['Спорт костюмдары',        'Дүң'],
    ],
    f_wholesale: 'Дүң',
    f_cheap:     'Арзан',
    f_verified:  'Текшерилген',
    f_nearby:    'Жакын',
    f_open:      'Азыр ачык',
    sec_east: 'Чыгыш сектору',
    sec_west: 'Батыш сектору',
    sec_south:'Түштүк сектору',
    sec_aigul:'Айгүл сектору',
    row: 'катар',
    container: 'контейнер',
    retail: 'Бирдиктеп',
    wholesale: 'Дүң',
    verified: 'Текшерилген',
    call: 'Чалуу',
    whatsapp: 'WhatsApp',
    write_wa: 'WhatsApp жазуу',
    open_until: 'Ачык',
    min_walk: 'мин жөө',
    results_count: (n) => `${n} сатуучу`,
    sort: 'Иргөө',
    sort_relevant: 'Тиешелүүлүгү боюнча',
    sort_near:    'Жакындары мурда',
    sort_cheap:   'Арзандары мурда',
    open_now: 'Ачык',
    closed:   'Жабык',
    address:  'Дарек',
    hours:    'Иштөө убактысы',
    categories: 'Категориялар',
    gallery:  'Сүрөттөр',
    description: 'Дүкөн жөнүндө',
    verified_text: 'Текшерилген сатуучу',
    verified_sub:  'Телефон жана WhatsApp ырасталган',
    notfound: 'Буюм табылган жокпу?',
    notfound_sub: 'Эмне керек экенин жазыңыз — 24 саатта сатуучу табабыз.',
    rq_name: 'Эмне издейсиз',
    rq_name_ph: 'Мисалы: аял парка курткасы, S–XL',
    rq_qty: 'Саны',
    rq_qty_ph: '500 даана',
    rq_budget: 'Бирдик баасы',
    rq_budget_ph: '800–1200 сом',
    rq_note: 'Комментарий',
    rq_note_ph: 'Түс, материал, мөөнөт…',
    rq_phone: 'Телефонуңуз',
    rq_cta: 'Мага сатуучу тапкыла',
    rq_disclaimer: 'Жооп көбүнчө 2–6 саатта келет. Бекер.',
    web_h1: 'Дордой. Каалаган буюмду бир мүнөттө.',
    web_sub:'Борбордук Азиянын эң чоң дүң базарынын сатуучулары боюнча издөө. Каттоосуз.',
    web_install: 'Тиркеме катары орнотуу',
    web_open_mobile: 'Телефондо ачуу',
    nav: ['Издөө','Категориялар','Дүңчүлөргө','Жардам'],
  },
  en: {
    brand: 'Dordoi Digital',
    tagline: 'Find any product at Dordoi market in 1 minute',
    onb_h:  'Dordoi\nin 60 seconds',
    onb_sub:'Search products, suppliers and containers. No more walking the rows.',
    onb_b1: 'Search across 14,000 containers',
    onb_b2: 'Call & WhatsApp in one tap',
    onb_b3: 'Verified suppliers',
    onb_cta:'Start searching',
    onb_skip:'Skip for now',
    search_ph: 'What are you looking for?',
    search_hint: 'product, supplier, container…',
    cats: ['Women','Kids','Shoes','Fabrics','Wholesale','Accessories','Textiles','Sport'],
    popular: 'Popular searches',
    recent: 'Recent',
    nearby_now: 'Open nearby',
    explore: 'Browse market',
    suggestions: [
      ['Women winter jackets', 'Wholesale'],
      ['Men jeans',            'Retail'],
      ['Kids boots',           'Wholesale'],
      ['Cotton fabric Turkey', 'By meter'],
      ['Tracksuits',           'Wholesale'],
    ],
    f_wholesale: 'Wholesale',
    f_cheap:     'Cheap',
    f_verified:  'Verified',
    f_nearby:    'Nearby',
    f_open:      'Open now',
    sec_east: 'East Sector',
    sec_west: 'West Sector',
    sec_south:'South Sector',
    sec_aigul:'Aigul Sector',
    row: 'row',
    container: 'container',
    retail: 'Retail',
    wholesale: 'Wholesale',
    verified: 'Verified',
    call: 'Call',
    whatsapp: 'WhatsApp',
    write_wa: 'Message on WhatsApp',
    open_until: 'Open until',
    min_walk: 'min walk',
    results_count: (n) => `${n} suppliers`,
    sort: 'Sort',
    sort_relevant: 'Most relevant',
    sort_near:    'Nearest first',
    sort_cheap:   'Cheapest first',
    open_now: 'Open',
    closed:   'Closed',
    address:  'Address',
    hours:    'Hours',
    categories: 'Categories',
    gallery:  'Gallery',
    description: 'About',
    verified_text: 'Verified supplier',
    verified_sub:  'Phone & WhatsApp confirmed',
    notfound: 'Didn\u2019t find it?',
    notfound_sub: 'Describe what you need — we\u2019ll find a supplier in 24h.',
    rq_name: 'What you\u2019re looking for',
    rq_name_ph: 'e.g. women parka jackets, S–XL',
    rq_qty: 'Quantity',
    rq_qty_ph: '500 pcs',
    rq_budget: 'Budget per unit',
    rq_budget_ph: '800–1200 KGS',
    rq_note: 'Notes',
    rq_note_ph: 'Color, material, deadlines…',
    rq_phone: 'Your phone',
    rq_cta: 'Find me a supplier',
    rq_disclaimer: 'Usually answered in 2–6 hours. Free.',
    web_h1: 'Dordoi. Any product in a minute.',
    web_sub:'Search across suppliers of Central Asia\u2019s largest wholesale market. No signup.',
    web_install: 'Install as app',
    web_open_mobile: 'Open on phone',
    nav: ['Search','Categories','Wholesalers','Help'],
  },
};

// ── Mock suppliers ──────────────────────────────────────────────────────────
const DD_SUPPLIERS_RU = [
  { id:'s1', name:'Айдай Текстиль',  sector:'sec_east',  row:12, cont:248, cats:['Женская одежда','Куртки'],   tags:['wholesale','verified'], minOrder:'от 20 шт',  price:'от 1 200 с.',  hue: 220, photoLabel:'Куртки женские' },
  { id:'s2', name:'Бакыт Trade',     sector:'sec_west',  row:7,  cont:122, cats:['Джинсы','Брюки'],            tags:['wholesale'],            minOrder:'от 50 шт',  price:'от 650 с.',    hue: 35,  photoLabel:'Джинсы оптом' },
  { id:'s3', name:'Нур Обувь',       sector:'sec_south', row:19, cont:401, cats:['Обувь','Детская'],           tags:['verified'],             minOrder:'розница',   price:'от 450 с.',    hue: 12,  photoLabel:'Детская обувь' },
  { id:'s4', name:'Чолпон Ткани',    sector:'sec_aigul', row:3,  cont:88,  cats:['Ткани','Метраж'],            tags:['wholesale','verified'], minOrder:'от 10 м',   price:'от 180 с/м',   hue: 280, photoLabel:'Хлопок Турция' },
  { id:'s5', name:'Эркин Спорт',     sector:'sec_east',  row:24, cont:512, cats:['Спорт','Костюмы'],           tags:['wholesale'],            minOrder:'от 30 шт',  price:'от 980 с.',    hue: 150, photoLabel:'Спорт костюмы' },
  { id:'s6', name:'Мээрим Стиль',    sector:'sec_west',  row:9,  cont:201, cats:['Платья','Женское'],          tags:['verified'],             minOrder:'розница',   price:'от 1 500 с.',  hue: 340, photoLabel:'Платья летние' },
];

// ── Ornaments (shyrdak-inspired, ultra simple) ──────────────────────────────
// Repeating diamond+dot motif. Composed of basic shapes only.
function DDOrnamentTile({ size = 28, color = 'currentColor', opacity = 0.18 }) {
  const s = size, h = size / 2;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ opacity, display:'block' }}>
      <g fill={color}>
        <rect x={h - 1} y={h - 5} width="2" height="2" transform={`rotate(45 ${h} ${h - 4})`} />
        <rect x={h - 1} y={h + 3} width="2" height="2" transform={`rotate(45 ${h} ${h + 4})`} />
        <rect x={h - 5} y={h - 1} width="2" height="2" transform={`rotate(45 ${h - 4} ${h})`} />
        <rect x={h + 3} y={h - 1} width="2" height="2" transform={`rotate(45 ${h + 4} ${h})`} />
        <circle cx={h} cy={h} r="1.2" />
      </g>
    </svg>
  );
}

// Pattern via SVG <pattern>: tileable, transparent background.
function DDOrnamentPattern({ id, color = '#1E3A8A', size = 28, opacity = 0.12 }) {
  const h = size / 2;
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <g fill={color} opacity={opacity}>
            <rect x={h-1} y={h-6}  width="2" height="2.5" transform={`rotate(45 ${h} ${h-4.5})`} />
            <rect x={h-1} y={h+3.5} width="2" height="2.5" transform={`rotate(45 ${h} ${h+4.5})`} />
            <rect x={h-6} y={h-1}  width="2.5" height="2" transform={`rotate(45 ${h-4.5} ${h})`} />
            <rect x={h+3.5} y={h-1} width="2.5" height="2" transform={`rotate(45 ${h+4.5} ${h})`} />
            <circle cx={h} cy={h} r="1.3" />
            <circle cx="0" cy="0" r="1" /><circle cx={size} cy="0" r="1" />
            <circle cx="0" cy={size} r="1" /><circle cx={size} cy={size} r="1" />
          </g>
        </pattern>
      </defs>
    </svg>
  );
}

// Horizontal ornamental divider (row of diamonds + dots).
function DDDivider({ color = 'currentColor', opacity = 0.35, count = 7, style = {} }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      color, opacity, ...style,
    }}>
      <div style={{ flex: 1, height: 1, background: 'currentColor', opacity: 0.4 }} />
      {Array.from({ length: count }).map((_, i) => (
        <React.Fragment key={i}>
          <svg width="8" height="8" viewBox="0 0 8 8" style={{ display:'block' }}>
            <rect x="3" y="0" width="2" height="2" transform="rotate(45 4 1)" fill="currentColor"/>
          </svg>
          {i < count - 1 && <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor' }} />}
        </React.Fragment>
      ))}
      <div style={{ flex: 1, height: 1, background: 'currentColor', opacity: 0.4 }} />
    </div>
  );
}

// Compact ornament stamp (single small diamond cluster) — for use beside the logo.
function DDStamp({ color = 'currentColor', size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ display:'block' }}>
      <g fill={color}>
        <rect x="6" y="0" width="2" height="2" transform="rotate(45 7 1)" />
        <rect x="6" y="12" width="2" height="2" transform="rotate(45 7 13)" />
        <rect x="0" y="6" width="2" height="2" transform="rotate(45 1 7)" />
        <rect x="12" y="6" width="2" height="2" transform="rotate(45 13 7)" />
        <circle cx="7" cy="7" r="1.4" />
      </g>
    </svg>
  );
}

Object.assign(window, {
  DD_PALETTE, DD_I18N, DD_SUPPLIERS_RU,
  DDOrnamentTile, DDOrnamentPattern, DDDivider, DDStamp,
});
