// screens-results.jsx — RADICALLY SIMPLE version.
// Results · Profile · Request. One primary action each.

// ─────────────────────────────────────────────────────────────
// Search header (compact, back + query)
// ─────────────────────────────────────────────────────────────
function DDSearchHeader({ c, t, dark, query = 'куртки женские' }) {
  return (
    <div style={{
      padding: `${DD_TOP + 6}px 12px 10px`, background: c.bg,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <button style={{
        width: 42, height: 42, borderRadius: 14, border: 'none', background: c.surface,
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
      }}>{DDIcons.chevron(18, c.text, 'left')}</button>
      <div style={{
        flex: 1, height: 50, borderRadius: 16,
        background: c.surface,
        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
      }}>
        {DDIcons.search(17, c.primary)}
        <span style={{ flex: 1, fontSize: 15, color: c.text, fontWeight: 600 }}>{query}</span>
        <span style={{ color: c.muted, fontSize: 18, fontWeight: 400, padding: '0 4px', cursor: 'pointer' }}>×</span>
      </div>
    </div>
  );
}

// Simple 3-way segmented control: All / Wholesale / Retail
function DDSegment({ c, t, dark, active = 0 }) {
  const opts = [
    { key: 'all', lbl: tw_all_opt(t) },
    { key: 'wholesale', lbl: t.wholesale },
    { key: 'retail', lbl: t.retail },
  ];
  return (
    <div style={{
      margin: '4px 12px 12px',
      padding: 4, borderRadius: 14, background: c.surface,
      display: 'flex', gap: 4,
    }}>
      {opts.map((o, i) => (
        <button key={o.key} style={{
          appearance: 'none', border: 'none', flex: 1, height: 38, borderRadius: 11,
          background: i === active ? c.bg : 'transparent',
          color: i === active ? c.text : c.muted,
          fontSize: 13, fontWeight: i === active ? 700 : 500,
          fontFamily: 'inherit', cursor: 'pointer',
          boxShadow: i === active && !dark ? '0 1px 3px rgba(0,0,0,0.07)' : 'none',
        }}>{o.lbl}</button>
      ))}
    </div>
  );
}
function tw_all_opt(t) {
  if (t === DD_I18N.kg) return 'Баары';
  if (t === DD_I18N.en) return 'All';
  return 'Все';
}

// ─────────────────────────────────────────────────────────────
// Photo-led supplier card — SIMPLIFIED
// No ratings, no overlays, no bookmark. Just the essentials.
// ─────────────────────────────────────────────────────────────
function DDSupplierCard({ c, t, dark, sup }) {
  return (
    <div style={{
      margin: '0 12px 14px', borderRadius: 22, overflow: 'hidden',
      background: c.bg, border: `1px solid ${c.border}`,
      boxShadow: dark ? 'none' : '0 2px 8px rgba(17,24,39,0.05)',
    }}>
      <DDPhoto label={sup.photoLabel} hue={sup.hue} height={170} radius={0} dark={dark} />
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: c.text }}>{sup.name}</span>
          {sup.tags.includes('verified') && (
            <div style={{
              width: 18, height: 18, borderRadius: '50%', background: c.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>{DDIcons.check(11, '#fff')}</div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: c.muted, marginBottom: 14 }}>
          {DDIcons.pin(13, c.muted)} {ddLocation(sup, t)}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            flex: 1, height: 50, borderRadius: 15, border: `1.5px solid ${c.text}`,
            background: 'transparent', color: c.text,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
            fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          }}>{DDIcons.phone(16, c.text)} {t.call}</button>
          <button style={{
            flex: 1, height: 50, borderRadius: 15, border: 'none',
            background: c.whatsapp, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
            fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: '0 6px 14px rgba(37,211,102,0.32)',
          }}>{DDIcons.wa(16, '#fff')} {t.whatsapp}</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Results screen
// ─────────────────────────────────────────────────────────────
function DDResults({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.surface, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} />
      <div style={{ background: c.bg, borderBottom: `1px solid ${c.line}` }}>
        <DDSearchHeader c={c} t={t} dark={dark} />
        <DDSegment c={c} t={t} dark={dark} active={1} />
      </div>
      <div style={{ flex: 1, overflow: 'auto', paddingTop: 14 }}>
        <div style={{ padding: '0 16px 10px', fontSize: 13, color: c.muted }}>
          <span style={{ color: c.text, fontWeight: 700 }}>{t.results_count(15)}</span>
        </div>
        {DD_SUPPLIERS_RU.map(sup => (
          <DDSupplierCard key={sup.id} c={c} t={t} dark={dark} sup={sup} />
        ))}
        <div style={{ height: DD_BOT }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Supplier Profile — focus on contact
// ─────────────────────────────────────────────────────────────
function DDSupplierProfile({ c, t, dark }) {
  const sup = DD_SUPPLIERS_RU[0];
  const gallery = [
    { lbl: 'Парка зеленая',  hue: 150 },
    { lbl: 'Куртка пуховик', hue: 220 },
    { lbl: 'Куртка осень',   hue: 30  },
    { lbl: 'Курт. дет.',     hue: 340 },
  ];
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* Top nav over hero */}
      <div style={{
        position: 'absolute', top: DD_TOP - 6, left: 0, right: 0, zIndex: 10,
        padding: '0 12px', display: 'flex', justifyContent: 'space-between',
      }}>
        <button style={{
          width: 42, height: 42, borderRadius: '50%', border: 'none',
          background: 'rgba(255,255,255,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}>{DDIcons.chevron(18, c.text, 'left')}</button>
        <button style={{
          width: 42, height: 42, borderRadius: '50%', border: 'none',
          background: 'rgba(255,255,255,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}>{DDIcons.share(16, c.text)}</button>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Hero photo */}
        <DDPhoto label={sup.photoLabel} hue={sup.hue} height={300} radius={0} dark={dark} />

        {/* Content */}
        <div style={{ padding: '20px 20px 0' }}>
          {/* Name + verified */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: c.text, lineHeight: 1.1, flex: 1, letterSpacing: -0.6 }}>
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
            <div style={{ fontSize: 13, color: c.primary, fontWeight: 600, marginBottom: 18 }}>
              {t.verified_text}
            </div>
          )}

          {/* Location — single tap to map */}
          <button style={{
            appearance: 'none', border: `1px solid ${c.border}`,
            width: '100%', padding: 16, borderRadius: 18,
            background: c.surface, marginBottom: 14,
            display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', fontFamily: 'inherit',
            textAlign: 'left',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: c.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>{DDIcons.pin(20, '#fff')}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: c.text, lineHeight: 1.2 }}>
                {t[sup.sector]}
              </div>
              <div style={{ fontSize: 13, color: c.muted, marginTop: 3 }}>
                {sup.row} {t.row} · {t.container} {sup.cont}
              </div>
            </div>
            {DDIcons.chevron(16, c.muted)}
          </button>

          {/* Hours — single line */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 16px', borderRadius: 18,
            background: c.surface, border: `1px solid ${c.border}`, marginBottom: 24,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: c.text, lineHeight: 1.2 }}>
                {t.open_now}
              </div>
              <div style={{ fontSize: 13, color: c.muted, marginTop: 3 }}>
                {t.open_until} 16:00 · Пн–Сб
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div style={{ fontSize: 12, fontWeight: 700, color: c.muted, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 10 }}>
            {t.gallery}
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            {gallery.map((g, i) => (
              <div key={i} style={{ flex: 1 }}>
                <DDPhoto label={g.lbl} hue={g.hue} height={74} radius={12} dark={dark} dense />
              </div>
            ))}
          </div>

          <div style={{ height: 120 }} /> {/* spacer for sticky CTA */}
        </div>
      </div>

      {/* Sticky CTAs */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: `14px 16px ${DD_BOT}px`,
        background: dark ? 'rgba(10,15,31,0.94)' : 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderTop: `1px solid ${c.border}`,
      }}>
        <DDContactButtons c={c} t={t} size="lg" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Request Product — minimum viable form (2 fields + phone)
// ─────────────────────────────────────────────────────────────
function DDRequestProduct({ c, t, dark }) {
  const Field = ({ label, ph, multiline = false }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: c.text, marginBottom: 8 }}>{label}</div>
      <div style={{
        background: c.surface, borderRadius: 16, padding: '14px 16px',
        border: `1px solid ${c.border}`,
        minHeight: multiline ? 88 : 0,
        display: 'flex', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 15, color: c.muted, lineHeight: 1.4 }}>{ph}</span>
      </div>
    </div>
  );

  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} />

      {/* Top */}
      <div style={{ padding: `${DD_TOP + 4}px 12px 0`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <button style={{
          width: 42, height: 42, borderRadius: 14, border: 'none', background: c.surface,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{DDIcons.chevron(18, c.text, 'left')}</button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 24px 0' }}>
        {/* Big helmet */}
        <div style={{
          width: 72, height: 72, borderRadius: 22, background: c.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 36, fontWeight: 800, color: '#1F1500',
          marginTop: 14, marginBottom: 18,
        }}>?</div>

        <h1 style={{
          margin: 0, fontSize: 30, fontWeight: 800, letterSpacing: -1, lineHeight: 1.05, color: c.text,
        }}>{t.notfound}</h1>
        <p style={{
          margin: '12px 0 28px', fontSize: 15, color: c.muted, lineHeight: 1.45, maxWidth: 320,
        }}>{t.notfound_sub}</p>

        {/* Just 3 fields */}
        <Field label={t.rq_name} ph={t.rq_name_ph} multiline />
        <Field label={t.rq_phone} ph="+996 ___ __ __ __" />

        <div style={{ height: 140 }} />
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: `14px 20px ${DD_BOT}px`,
        background: dark ? 'rgba(10,15,31,0.94)' : 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderTop: `1px solid ${c.border}`,
      }}>
        <button style={{
          width: '100%', height: 60, borderRadius: 20,
          background: c.accent, color: '#1F1500', border: 'none',
          fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          boxShadow: '0 12px 26px rgba(250,204,21,0.45)',
        }}>
          {t.rq_cta}
          {DDIcons.arrow(20, '#1F1500')}
        </button>
        <p style={{ textAlign: 'center', fontSize: 12, color: c.muted, marginTop: 10, marginBottom: 0 }}>
          {t.rq_disclaimer}
        </p>
      </div>
    </div>
  );
}

Object.assign(window, {
  DDSearchHeader, DDSegment, DDSupplierCard, DDResults, DDSupplierProfile, DDRequestProduct, tw_all_opt,
});
