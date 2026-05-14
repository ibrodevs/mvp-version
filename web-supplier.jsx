// web-supplier.jsx — Web Supplier Profile page.

function tw_breadcrumb_sup(t) {
  if (t === DD_I18N.kg) return 'Сатуучу';
  if (t === DD_I18N.en) return 'Supplier';
  return 'Поставщик';
}
function tw_desc_text(t) {
  if (t === DD_I18N.kg) return 'Турция жана Кытайдан өндүрүлгөн аялдар үчүн кышкы курткалар жана пуховиктер. 2018-жылдан Дордойдо иштейбиз. Дүң заказдар үчүн арзан баалар, бат жөнөтүү.';
  if (t === DD_I18N.en) return 'Women\u2019s winter jackets and down coats made in Turkey and China. Operating at Dordoi since 2018. Wholesale-friendly pricing, fast shipping.';
  return 'Женские зимние куртки и пуховики, производство Турция и Китай. Работаем на Дордое с 2018 года. Гибкие цены для опта, быстрая отгрузка.';
}

function DDWebSupplier({ c, t, dark, onNavigate, onSearch, query = 'куртки женские оптом' }) {
  const sup = DD_SUPPLIERS_RU[0];
  const similar = DD_SUPPLIERS_RU.slice(1, 4);
  const gallery = [
    { lbl: 'Парка зеленая',  hue: 150 },
    { lbl: 'Куртка пуховик', hue: 220 },
    { lbl: 'Куртка осень',   hue: 30  },
    { lbl: 'Курт. детская',  hue: 340 },
    { lbl: 'Жилет',          hue: 60  },
    { lbl: 'Пальто',         hue: 280 },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    }}>
      <DDWebHeader c={c} t={t} dark={dark} page="supplier" search={query} onNavigate={onNavigate} onSearch={onSearch} />

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Breadcrumb */}
        <div style={{
          padding: '14px 40px 0',
          maxWidth: 1200, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: c.muted }}>
            <button
              onClick={() => onNavigate && onNavigate('results')}
              style={{
                appearance: 'none', border: 'none', background: 'transparent', padding: 0,
                display: 'flex', alignItems: 'center', gap: 6, color: c.muted, cursor: 'pointer',
              }}
            >
              <span>{DDIcons.chevron(12, c.muted, 'left')}</span>
              <span>{tw_back_res(t)}</span>
            </button>
          </div>
        </div>

        {/* Main split */}
        <div style={{
          padding: '20px 40px',
          maxWidth: 1200, margin: '0 auto', width: '100%', boxSizing: 'border-box',
          display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 28,
        }}>
          {/* Left: hero + gallery + description */}
          <div>
            {/* Hero photo */}
            <div style={{ borderRadius: 22, overflow: 'hidden', marginBottom: 12 }}>
              <DDPhoto label={sup.photoLabel} hue={sup.hue} height={340} radius={0} dark={dark} />
            </div>
            {/* Gallery strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, marginBottom: 22 }}>
              {gallery.map((g, i) => (
                <DDPhoto key={i} label={g.lbl} hue={g.hue} height={62} radius={10} dark={dark} dense />
              ))}
            </div>

            {/* Description */}
            <h3 style={{ margin: '0 0 10px', fontSize: 16, fontWeight: 700, color: c.text }}>{tw_descr(t)}</h3>
            <p style={{
              margin: 0, fontSize: 14.5, color: c.text, lineHeight: 1.55, maxWidth: 620,
              opacity: 0.85,
            }}>{tw_desc_text(t)}</p>

            {/* Categories */}
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Куртки парка', 'Пуховики', 'Пальто', 'Жилеты', 'Демисезонные', 'Зимние'].map((tag, i) => (
                <DDChip key={i} c={c} size="sm">{tag}</DDChip>
              ))}
            </div>
          </div>

          {/* Right: contact sidebar */}
          <div style={{
            background: c.surface, borderRadius: 22, padding: 22,
            border: `1px solid ${c.border}`,
            alignSelf: 'start', position: 'sticky', top: 14,
          }}>
            {/* Name + verified */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: -0.6, color: c.text, flex: 1, lineHeight: 1.15 }}>
                {sup.name}
              </h1>
              {sup.tags.includes('verified') && (
                <div style={{
                  width: 26, height: 26, borderRadius: '50%', background: c.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{DDIcons.check(14, '#fff')}</div>
              )}
            </div>
            {sup.tags.includes('verified') && (
              <div style={{ fontSize: 12.5, color: c.primary, fontWeight: 600, marginBottom: 16 }}>
                {t.verified_text}
              </div>
            )}

            {/* Location */}
            <div style={{
              padding: 14, borderRadius: 14,
              background: c.bg, border: `1px solid ${c.border}`,
              display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: c.primary,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{DDIcons.pin(17, '#fff')}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: c.text }}>{t[sup.sector]}</div>
                <div style={{ fontSize: 12, color: c.muted, marginTop: 2 }}>
                  {sup.row} {t.row} · {t.container} {sup.cont}
                </div>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: c.primary, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {tw_show_map(t)} →
              </span>
            </div>

            {/* Open status */}
            <div style={{
              padding: 14, borderRadius: 14, background: c.bg, border: `1px solid ${c.border}`,
              display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: '#16A34A',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: c.text }}>{t.open_now}</div>
                <div style={{ fontSize: 12, color: c.muted, marginTop: 2 }}>{t.open_until} 16:00 · Пн–Сб</div>
              </div>
            </div>

            {/* Contact buttons */}
            <DDContactButtons c={c} t={t} size="lg" stacked />

            <p style={{ margin: '14px 0 0', fontSize: 11.5, color: c.muted, textAlign: 'center', lineHeight: 1.4 }}>
              {t.verified_sub}
            </p>
          </div>
        </div>

        {/* Similar suppliers */}
        <div style={{
          padding: '12px 40px 28px',
          maxWidth: 1200, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          <h2 style={{ margin: '0 0 14px', fontSize: 20, fontWeight: 700, letterSpacing: -0.4, color: c.text }}>
            {tw_similar(t)}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {similar.map(s => <DDWebResultRow key={s.id} c={c} t={t} dark={dark} sup={s} onOpenSupplier={() => onNavigate && onNavigate('supplier')} />)}
          </div>
        </div>
      </div>

      <DDWebFooter c={c} t={t} dark={dark} />
    </div>
  );
}

Object.assign(window, { DDWebSupplier, tw_breadcrumb_sup, tw_desc_text });
