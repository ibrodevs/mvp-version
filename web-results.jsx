// web-results.jsx — Web Search Results page.

function DDWebResultRow({ c, t, dark, sup, onOpenSupplier }) {
  const { isMobile } = useDDViewport();
  return (
    <div style={{
      borderRadius: 18, overflow: 'hidden',
      background: c.bg, border: `1px solid ${c.border}`,
      boxShadow: dark ? 'none' : '0 2px 6px rgba(17,24,39,0.04)',
      display: 'flex', flexDirection: 'column',
      transition: 'transform 0.15s, box-shadow 0.15s',
    }}>
      <div style={{ position: 'relative' }}>
        <DDPhoto label={sup.photoLabel} hue={sup.hue} height={150} radius={0} dark={dark} />
        {sup.tags.includes('verified') && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: c.primary, color: '#fff',
            padding: '4px 10px', borderRadius: 999,
            fontSize: 11, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4,
          }}>
            {DDIcons.check(11, '#fff')} {t.verified}
          </div>
        )}
        {sup.tags.includes('wholesale') && (
          <div style={{
            position: 'absolute', top: 10, right: 10,
            background: c.accent, color: '#1F1500',
            padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700,
          }}>
            {t.wholesale}
          </div>
        )}
      </div>
      <div style={{ padding: '14px 16px 16px' }}>
        <button
          onClick={() => onOpenSupplier && onOpenSupplier(sup)}
          style={{
            appearance: 'none', border: 'none', background: 'transparent', padding: 0,
            fontSize: 16, fontWeight: 700, color: c.text, marginBottom: 4, cursor: 'pointer',
          }}
        >
          {sup.name}
        </button>
        <div style={{ fontSize: 12.5, color: c.muted, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
          {DDIcons.pin(12, c.muted)} {ddLocation(sup, t)}
        </div>
        <div style={{ display: 'flex', gap: 8, flexDirection: isMobile ? 'column' : 'row' }}>
          <button
            onClick={() => onOpenSupplier && onOpenSupplier(sup)}
            style={{
            flex: 1, height: 40, borderRadius: 12, border: `1.5px solid ${c.text}`,
            background: 'transparent', color: c.text,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          }}>{DDIcons.phone(13, c.text)} {t.call}</button>
          <button style={{
            flex: 1, height: 40, borderRadius: 12, border: 'none',
            background: c.whatsapp, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          }}>{DDIcons.wa(13, '#fff')} {t.whatsapp}</button>
        </div>
      </div>
    </div>
  );
}

// Sidebar filters — simple checkboxes
function DDWebFilterSidebar({ c, t, dark }) {
  const { isMobile, isTablet } = useDDViewport();
  if (isMobile) {
    const chips = [t.f_wholesale, t.sec_east, t.sec_west, t.f_verified];
    return (
      <div style={{
        display: 'flex', gap: 8, overflowX: 'auto', padding: '12px 16px 0',
        background: c.surface, borderBottom: `1px solid ${c.line}`,
      }}>
        {chips.map((chip, i) => (
          <DDChip key={i} c={c} active={i < 2}>{chip}</DDChip>
        ))}
      </div>
    );
  }
  const sections = [
    {
      key: 'type', label: tw_filter_type(t),
      opts: [
        { lbl: t.f_wholesale, on: true },
        { lbl: t.retail, on: false },
      ],
    },
    {
      key: 'sector', label: tw_filter_sector(t),
      opts: [
        { lbl: t.sec_east, on: true },
        { lbl: t.sec_west, on: true },
        { lbl: t.sec_south, on: false },
        { lbl: t.sec_aigul, on: false },
      ],
    },
    {
      key: 'extra', label: tw_filter_extra(t),
      opts: [
        { lbl: t.f_verified, on: true },
        { lbl: t.f_open, on: false },
      ],
    },
  ];
  return (
    <div style={{
      width: isTablet ? 210 : 240, flexShrink: 0,
      padding: isTablet ? '20px 8px 20px 20px' : '24px 8px 24px 32px',
      borderRight: `1px solid ${c.line}`, background: c.bg,
      overflow: 'auto',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14,
      }}>
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: c.text }}>{tw_filter(t)}</h3>
        <span style={{ fontSize: 12, color: c.primary, fontWeight: 600, cursor: 'pointer' }}>{tw_clear(t)}</span>
      </div>
      {sections.map(s => (
        <div key={s.key} style={{ marginBottom: 22 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: c.muted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10,
          }}>{s.label}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {s.opts.map((o, i) => (
              <label key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '6px 8px', borderRadius: 10, cursor: 'pointer',
                background: o.on ? c.primarySoft : 'transparent',
                fontSize: 13.5, color: c.text, fontWeight: o.on ? 600 : 500,
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 6, flexShrink: 0,
                  background: o.on ? c.primary : 'transparent',
                  border: o.on ? 'none' : `1.5px solid ${c.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {o.on && DDIcons.check(11, '#fff')}
                </div>
                {o.lbl}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function tw_filter_type(t)   { if (t === DD_I18N.kg) return 'Сатуу түрү'; if (t === DD_I18N.en) return 'Sale type'; return 'Тип продажи'; }
function tw_filter_sector(t) { if (t === DD_I18N.kg) return 'Сектор'; if (t === DD_I18N.en) return 'Sector'; return 'Сектор'; }
function tw_filter_extra(t)  { if (t === DD_I18N.kg) return 'Башка'; if (t === DD_I18N.en) return 'Other'; return 'Дополнительно'; }
function tw_clear(t)         { if (t === DD_I18N.kg) return 'Тазалоо'; if (t === DD_I18N.en) return 'Clear'; return 'Сбросить'; }
function tw_no_results(t)    { if (t === DD_I18N.kg) return 'Табылган жок?'; if (t === DD_I18N.en) return 'Not found?'; return 'Не нашли?'; }

function DDWebResults({ c, t, dark, query = 'куртки женские оптом', onNavigate, onSearch }) {
  const { isMobile, isTablet } = useDDViewport();
  const compact = isMobile || isTablet;
  return (
    <div style={{
      width: '100%', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    }}>
      <DDWebHeader c={c} t={t} dark={dark} page="results" search={query} onNavigate={onNavigate} onSearch={onSearch} />

      <div style={{ flex: 1, display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden', background: c.surface }}>
        <DDWebFilterSidebar c={c} t={t} dark={dark} />

        {/* Main content */}
        <div style={{ flex: 1, overflow: 'auto', padding: compact ? '16px' : '24px 32px' }}>
          {/* Result count + sort */}
          <div style={{
            display: 'flex', alignItems: compact ? 'flex-start' : 'center', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', gap: compact ? 12 : 0, marginBottom: 18,
          }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: -0.4, color: c.text }}>
                «{query}»
              </h1>
              <div style={{ fontSize: 13, color: c.muted, marginTop: 4 }}>
                <span style={{ color: c.text, fontWeight: 700 }}>{t.results_count(47)}</span>
              </div>
            </div>
            <button style={{
              height: 38, padding: '0 14px', borderRadius: 11, border: `1px solid ${c.border}`,
              background: c.bg, color: c.text, fontSize: 13, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {t.sort_relevant} {DDIcons.chevron(12, c.muted, 'down')}
            </button>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 16,
          }}>
              {DD_SUPPLIERS_RU.map(sup => (
              <DDWebResultRow key={sup.id} c={c} t={t} dark={dark} sup={sup} onOpenSupplier={() => onNavigate && onNavigate('supplier')} />
            ))}
          </div>

          {/* "Didn't find" inline banner */}
          <div style={{
            marginTop: 22,
            padding: '18px 22px', borderRadius: 18,
            background: c.primary, color: '#fff',
            display: 'flex', alignItems: compact ? 'flex-start' : 'center', flexDirection: compact ? 'column' : 'row', gap: 16,
            position: 'relative', overflow: 'hidden',
          }}>
            <svg width="180" height="100" style={{ position: 'absolute', right: 24, top: -6, opacity: 0.16 }} viewBox="0 0 180 100">
              <g fill="#fff">
                {[20, 60, 100, 140].map(x => [20, 60].map(y => (
                  <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                    <rect x="-3" y="-12" width="6" height="6" transform="rotate(45)" />
                    <rect x="-3" y="6"   width="6" height="6" transform="rotate(45)" />
                    <rect x="-12" y="-3" width="6" height="6" transform="rotate(45)" />
                    <rect x="6"  y="-3"  width="6" height="6" transform="rotate(45)" />
                    <circle r="2.5"/>
                  </g>
                )))}
              </g>
            </svg>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: c.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              fontSize: 24, fontWeight: 800, color: '#1F1500', position: 'relative',
            }}>?</div>
            <div style={{ flex: 1, position: 'relative' }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{t.notfound}</div>
              <div style={{ fontSize: 13, opacity: 0.85, marginTop: 3 }}>{t.notfound_sub}</div>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('request')}
              style={{
              height: 44, padding: '0 18px', borderRadius: 13, border: 'none',
              background: c.accent, color: '#1F1500',
              fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', gap: 6, position: 'relative',
              width: isMobile ? '100%' : 'auto', justifyContent: 'center',
            }}>{t.rq_cta} {DDIcons.arrow(15, '#1F1500')}</button>
          </div>

          {/* Load more */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 22 }}>
            <button style={{
              height: 44, padding: '0 22px', borderRadius: 13, border: `1.5px solid ${c.border}`,
              background: c.bg, color: c.text, fontSize: 13, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>{tw_loadmore(t)}</button>
          </div>
        </div>
      </div>

      <DDWebFooter c={c} t={t} dark={dark} />
    </div>
  );
}

Object.assign(window, {
  DDWebResults, DDWebResultRow, DDWebFilterSidebar,
  tw_filter_type, tw_filter_sector, tw_filter_extra, tw_clear, tw_no_results,
});
