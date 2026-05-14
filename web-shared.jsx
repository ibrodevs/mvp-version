// web-shared.jsx — Shared web chrome: header, footer, helper i18n labels.

// ── i18n helpers (web-only labels) ──────────────────────────
function tw_find(t)      { if (t === DD_I18N.kg) return 'Издөө'; if (t === DD_I18N.en) return 'Search'; return 'Найти'; }
function tw_examples(t)  { if (t === DD_I18N.kg) return 'Мисалы'; if (t === DD_I18N.en) return 'For example'; return 'Например'; }
function tw_step_word(t) { if (t === DD_I18N.kg) return 'Кадам'; if (t === DD_I18N.en) return 'Step'; return 'Шаг'; }
function tw_step1(t)     { if (t === DD_I18N.kg) return 'Издегениңди жаз'; if (t === DD_I18N.en) return 'Type what you need'; return 'Напиши, что ищешь'; }
function tw_step2(t)     { if (t === DD_I18N.kg) return 'Сатуучуга чал'; if (t === DD_I18N.en) return 'Call the supplier'; return 'Позвони поставщику'; }
function tw_step3(t)     { if (t === DD_I18N.kg) return 'WhatsApp менен сүйлөш'; if (t === DD_I18N.en) return 'Confirm on WhatsApp'; return 'Договорись в WhatsApp'; }
function tw_back(t)      { if (t === DD_I18N.kg) return 'Артка'; if (t === DD_I18N.en) return 'Back'; return 'Назад'; }
function tw_back_res(t)  { if (t === DD_I18N.kg) return 'Жыйынтыктарга кайтуу'; if (t === DD_I18N.en) return 'Back to results'; return 'К результатам'; }
function tw_show_map(t)  { if (t === DD_I18N.kg) return 'Картадан көрсөтүү'; if (t === DD_I18N.en) return 'Show on map'; return 'Показать на карте'; }
function tw_similar(t)   { if (t === DD_I18N.kg) return 'Окшош сатуучулар'; if (t === DD_I18N.en) return 'Similar suppliers'; return 'Похожие поставщики'; }
function tw_descr(t)     { if (t === DD_I18N.kg) return 'Дүкөн жөнүндө'; if (t === DD_I18N.en) return 'About this supplier'; return 'О магазине'; }
function tw_filter(t)    { if (t === DD_I18N.kg) return 'Чыпкалар'; if (t === DD_I18N.en) return 'Filters'; return 'Фильтры'; }
function tw_loadmore(t)  { if (t === DD_I18N.kg) return 'Көбүрөөк көрсөтүү'; if (t === DD_I18N.en) return 'Load more'; return 'Показать ещё'; }
function tw_trust(t) {
  if (t === DD_I18N.kg) return ['2–6 саатта жооп','Бекер','Каттоосуз'];
  if (t === DD_I18N.en) return ['Reply in 2–6 hours','Free','No signup'];
  return ['Ответ за 2–6 часов','Бесплатно','Без регистрации'];
}
function tw_footer_links(t) {
  if (t === DD_I18N.kg) return ['Кантип иштейт','Дүңчүлөргө','Жардам','Байланыш','Купуялык'];
  if (t === DD_I18N.en) return ['How it works','For wholesalers','Help','Contact','Privacy'];
  return ['Как это работает','Для оптовиков','Помощь','Контакты','Конфиденциальность'];
}
function tw_footer_made(t) {
  if (t === DD_I18N.kg) return 'Бишкекте, Кыргызстанда жасалган';
  if (t === DD_I18N.en) return 'Made in Bishkek, Kyrgyzstan';
  return 'Сделано в Бишкеке, Кыргызстан';
}
function tw_all_cats(t)  { if (t === DD_I18N.kg) return 'Бардык категориялар'; if (t === DD_I18N.en) return 'All categories'; return 'Все категории'; }
function tw_or(t)        { if (t === DD_I18N.kg) return 'же'; if (t === DD_I18N.en) return 'or'; return 'или'; }

function useDDViewport() {
  const [width, setWidth] = React.useState(() => window.innerWidth);

  React.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1100,
    isDesktop: width >= 1100,
  };
}

// ── Web Header (consistent across pages) ────────────────────
function DDWebHeader({ c, t, dark, page = 'home', search = '', onNavigate, onSearch }) {
  const { isMobile, isTablet } = useDDViewport();
  const compact = isMobile || isTablet;
  return (
    <div style={{
      minHeight: compact ? 72 : 64, padding: compact ? '12px 16px' : '0 40px',
      display: 'flex', alignItems: 'center', gap: compact ? 12 : 28,
      flexWrap: compact ? 'wrap' : 'nowrap',
      background: c.bg, borderBottom: page === 'home' ? 'none' : `1px solid ${c.line}`,
      flexShrink: 0, position: 'relative', zIndex: 3,
    }}>
      <button
        onClick={() => onNavigate && onNavigate('home')}
        style={{ appearance: 'none', border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}
      >
        <DDLogo c={c} size="md" />
      </button>

      {/* Inline search when not on home */}
      {page !== 'home' && (
        <button
          onClick={() => onSearch && onSearch(search)}
          style={{
          order: compact ? 3 : 0,
          flex: compact ? '1 1 100%' : 1, maxWidth: compact ? '100%' : 480, height: 42, borderRadius: 14,
          background: c.surface, border: `1px solid ${c.border}`,
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
          cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
        }}>
          {DDIcons.search(16, c.primary)}
          <span style={{ flex: 1, fontSize: 14, color: search ? c.text : c.muted, fontWeight: search ? 600 : 400 }}>
            {search || t.search_hint}
          </span>
          {search && <span style={{ color: c.muted, fontSize: 16 }}>×</span>}
        </button>
      )}

      {page === 'home' && <div style={{ flex: 1, minWidth: compact ? 0 : 'auto' }} />}

      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: c.muted, fontWeight: 500,
        marginLeft: compact && page === 'home' ? 'auto' : 0,
        whiteSpace: 'nowrap',
      }}>
        {DDIcons.pin(13, c.muted)} Бишкек · Дордой
      </div>
      {(!isMobile || page === 'home') && (
        <button style={{
          height: 38, padding: '0 16px', borderRadius: 12, border: `1.5px solid ${c.border}`,
          background: 'transparent', color: c.text, fontSize: 13, fontWeight: 600,
          cursor: 'pointer', fontFamily: 'inherit',
          width: compact ? '100%' : 'auto',
        }}
        onClick={() => onNavigate && onNavigate('request')}
        >{t.web_install}</button>
      )}
    </div>
  );
}

// ── Web Footer ───────────────────────────────────────────────
function DDWebFooter({ c, t, dark }) {
  const { isMobile } = useDDViewport();
  const links = tw_footer_links(t);
  return (
    <div style={{
      padding: isMobile ? '16px 16px' : '20px 40px',
      background: c.bg,
      borderTop: `1px solid ${c.line}`,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? 10 : 24,
      flexShrink: 0,
      fontSize: 12,
    }}>
      <DDLogo c={c} size="sm" />
      <div style={{ display: 'flex', gap: isMobile ? 12 : 18, flexWrap: 'wrap' }}>
        {links.map((l, i) => (
          <span key={i} style={{ color: c.muted, cursor: 'pointer', fontWeight: 500 }}>{l}</span>
        ))}
      </div>
      <span style={{ color: c.muted }}>© 2026 · {tw_footer_made(t)}</span>
    </div>
  );
}

// ── Trust badges row (used on Home + Request) ────────────────
function DDTrustRow({ c, t, dark }) {
  const labels = tw_trust(t);
  const icons = [
    DDIcons.phone(18, c.whatsapp),
    DDIcons.check(16, c.primary),
    DDIcons.search(18, c.text),
  ];
  return (
    <div style={{
      display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
    }}>
      {labels.map((lbl, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 16px', borderRadius: 999,
          background: c.surface, border: `1px solid ${c.border}`,
          fontSize: 13, fontWeight: 500, color: c.text,
        }}>
          {icons[i]}
          {lbl}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  DDWebHeader, DDWebFooter, DDTrustRow, useDDViewport,
  tw_find, tw_examples, tw_step_word, tw_step1, tw_step2, tw_step3,
  tw_back, tw_back_res, tw_show_map, tw_similar, tw_descr,
  tw_filter, tw_loadmore, tw_trust, tw_footer_links, tw_footer_made,
  tw_all_cats, tw_or,
});
