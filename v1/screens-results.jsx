// screens-results.jsx — Search results (2 card variants), Supplier profile, Request product

// ─────────────────────────────────────────────────────────────
// Search header (shared between results variants) — back, query, mic
// ─────────────────────────────────────────────────────────────
function DDSearchHeader({ c, t, dark, query = 'куртки женские' }) {
  return (
    <div style={{
      padding: `${DD_TOP + 6}px 12px 10px`,
      background: c.bg,
      borderBottom: `1px solid ${c.line}`,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <button style={{
        width: 36, height: 36, borderRadius: 12, border: 'none', background: c.surface,
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
      }}>{DDIcons.chevron(16, c.text, 'left')}</button>
      <div style={{
        flex: 1, height: 44, borderRadius: 14,
        background: c.surface, border: `1px solid ${c.border}`,
        display: 'flex', alignItems: 'center', padding: '0 10px', gap: 8,
      }}>
        {DDIcons.search(16, c.primary)}
        <span style={{ flex: 1, fontSize: 14, color: c.text, fontWeight: 500 }}>{query}</span>
        <span style={{ color: c.muted, fontSize: 14, fontWeight: 600, padding: '0 4px' }}>×</span>
      </div>
      <button style={{
        width: 36, height: 36, borderRadius: 12, border: 'none', background: c.primary,
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
      }}>{DDIcons.mic(16, '#fff')}</button>
    </div>
  );
}

// Filter chip row
function DDFilterChips({ c, t, dark, active = ['f_wholesale'] }) {
  const filters = [
    { key: 'f_wholesale', icon: '◇' },
    { key: 'f_verified',  icon: '✓' },
    { key: 'f_nearby',    icon: '◎' },
    { key: 'f_cheap',     icon: '↓' },
    { key: 'f_open',      icon: '●' },
  ];
  return (
    <div style={{
      padding: '10px 12px',
      display: 'flex', gap: 6, overflowX: 'auto',
      background: c.bg, borderBottom: `1px solid ${c.line}`,
    }}>
      <DDChip c={c} size="sm" icon={DDIcons.filter(12, c.muted)}>Все фильтры</DDChip>
      {filters.map(f => (
        <DDChip key={f.key} c={c} size="sm" icon={f.icon} active={active.includes(f.key)}>
          {t[f.key]}
        </DDChip>
      ))}
    </div>
  );
}

// Results count + sort
function DDResultsHeader({ c, t, dark, count = 47 }) {
  return (
    <div style={{
      padding: '12px 16px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ fontSize: 13, color: c.muted }}>
        <span style={{ color: c.text, fontWeight: 600 }}>{t.results_count(count)}</span>
      </span>
      <button style={{
        appearance: 'none', border: 'none', background: 'transparent',
        fontSize: 12, fontWeight: 600, color: c.primary, display: 'flex', alignItems: 'center', gap: 4,
        cursor: 'pointer', fontFamily: 'inherit',
      }}>
        {t.sort_relevant} {DDIcons.chevron(11, c.primary, 'down')}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Compact card (horizontal photo + content)
// ─────────────────────────────────────────────────────────────
function DDSupplierCardCompact({ c, t, dark, sup }) {
  return (
    <div style={{
      margin: '0 12px 10px', borderRadius: 18, padding: 12,
      background: c.bg, border: `1px solid ${c.border}`,
      boxShadow: dark ? 'none' : '0 1px 3px rgba(17,24,39,0.04)',
      display: 'flex', gap: 12,
    }}>
      <div style={{ flexShrink: 0, position: 'relative' }}>
        <DDPhoto label={sup.photoLabel} hue={sup.hue} height={88} radius={12} dark={dark} dense />
        <div style={{ width: 88 }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
          <span style={{ fontSize: 14.5, fontWeight: 700, color: c.text, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {sup.name}
          </span>
          {sup.tags.includes('verified') && (
            <div style={{
              width: 16, height: 16, borderRadius: '50%', background: c.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>{DDIcons.check(10, '#fff')}</div>
          )}
        </div>
        <div style={{ fontSize: 11.5, color: c.muted, lineHeight: 1.3, marginBottom: 6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {ddLocation(sup, t)}
        </div>
        <div style={{ display: 'flex', gap: 4, marginBottom: 8, flexWrap: 'wrap' }}>
          {sup.tags.includes('wholesale') && <DDBadge kind="wholesale" c={c} t={t} mini />}
          <span style={{ fontSize: 11, fontWeight: 600, color: c.text }}>{sup.price}</span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}>
          <button style={{
            flex: 1, height: 34, borderRadius: 11, border: `1px solid ${c.border}`,
            background: 'transparent', color: c.text,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          }}>{DDIcons.phone(13, c.text)} {t.call}</button>
          <button style={{
            flex: 1, height: 34, borderRadius: 11, border: 'none',
            background: c.whatsapp, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          }}>{DDIcons.wa(13, '#fff')} {t.whatsapp}</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Photo-led card (large image, then content)
// ─────────────────────────────────────────────────────────────
function DDSupplierCardPhoto({ c, t, dark, sup }) {
  return (
    <div style={{
      margin: '0 12px 12px', borderRadius: 22, overflow: 'hidden',
      background: c.bg, border: `1px solid ${c.border}`,
      boxShadow: dark ? 'none' : '0 4px 14px rgba(17,24,39,0.06)',
    }}>
      <div style={{ position: 'relative' }}>
        <DDPhoto label={sup.photoLabel} hue={sup.hue} height={170} radius={0} dark={dark} />
        {/* photo overlay */}
        <div style={{
          position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6,
        }}>
          {sup.tags.includes('verified') && <DDBadge kind="verified" c={c} t={t} mini />}
          {sup.tags.includes('wholesale') && <DDBadge kind="wholesale" c={c} t={t} mini />}
        </div>
        <button style={{
          position: 'absolute', top: 10, right: 10,
          width: 32, height: 32, borderRadius: '50%', border: 'none',
          background: 'rgba(255,255,255,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>{DDIcons.bookmark(14, c.text)}</button>
        {/* price chip overlay */}
        <div style={{
          position: 'absolute', bottom: 10, left: 10,
          background: 'rgba(0,0,0,0.7)', color: '#fff',
          padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600,
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        }}>
          {sup.price}
        </div>
        <div style={{
          position: 'absolute', bottom: 10, right: 10,
          background: 'rgba(0,0,0,0.7)', color: '#fff',
          padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500,
        }}>
          {sup.minOrder}
        </div>
      </div>
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: c.text }}>{sup.name}</span>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: c.text, fontSize: 12, fontWeight: 600 }}>
            {DDIcons.star(11, c.accent)} 4.8
          </div>
        </div>
        <div style={{ fontSize: 12, color: c.muted, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
          {DDIcons.pin(12, c.muted)} {ddLocation(sup, t)}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            flex: 1, height: 42, borderRadius: 13, border: `1.5px solid ${c.border}`,
            background: 'transparent', color: c.text,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          }}>{DDIcons.phone(14, c.text)} {t.call}</button>
          <button style={{
            flex: 1.4, height: 42, borderRadius: 13, border: 'none',
            background: c.whatsapp, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: '0 4px 10px rgba(37,211,102,0.32)',
          }}>{DDIcons.wa(14, '#fff')} {t.whatsapp}</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 5) Search Results — Compact
// ─────────────────────────────────────────────────────────────
function DDResultsCompact({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.surface, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} dark={dark} />
      <div style={{ background: c.bg }}>
        <DDSearchHeader c={c} t={t} dark={dark} />
        <DDFilterChips c={c} t={t} dark={dark} active={['f_wholesale','f_verified']} />
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <DDResultsHeader c={c} t={t} dark={dark} count={47} />
        {DD_SUPPLIERS_RU.map(sup => (
          <DDSupplierCardCompact key={sup.id} c={c} t={t} dark={dark} sup={sup} />
        ))}
        <div style={{ height: 12 }} />
      </div>
      <DDTabBar c={c} t={t} dark={dark} active={0} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 6) Search Results — Photo-led
// ─────────────────────────────────────────────────────────────
function DDResultsPhoto({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.surface, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} dark={dark} />
      <div style={{ background: c.bg }}>
        <DDSearchHeader c={c} t={t} dark={dark} />
        <DDFilterChips c={c} t={t} dark={dark} active={['f_wholesale']} />
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <DDResultsHeader c={c} t={t} dark={dark} count={47} />
        {DD_SUPPLIERS_RU.map(sup => (
          <DDSupplierCardPhoto key={sup.id} c={c} t={t} dark={dark} sup={sup} />
        ))}
        <div style={{ height: 12 }} />
      </div>
      <DDTabBar c={c} t={t} dark={dark} active={0} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 7) Supplier Profile
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
      {/* Top nav (transparent over hero) */}
      <div style={{
        position: 'absolute', top: DD_TOP - 6, left: 0, right: 0, zIndex: 10,
        padding: '0 12px', display: 'flex', justifyContent: 'space-between',
      }}>
        <button style={{
          width: 36, height: 36, borderRadius: '50%', border: 'none',
          background: 'rgba(255,255,255,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{DDIcons.chevron(16, c.text, 'left')}</button>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            width: 36, height: 36, borderRadius: '50%', border: 'none',
            background: 'rgba(255,255,255,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{DDIcons.share(15, c.text)}</button>
          <button style={{
            width: 36, height: 36, borderRadius: '50%', border: 'none',
            background: 'rgba(255,255,255,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{DDIcons.bookmark(15, c.text)}</button>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Hero photo */}
        <DDPhoto label={sup.photoLabel} hue={sup.hue} height={310} radius={0} dark={dark} />

        {/* Floating photo-strip */}
        <div style={{
          margin: '-30px 12px 0', position: 'relative',
          padding: 6, borderRadius: 16,
          background: c.bg,
          boxShadow: dark ? '0 4px 14px rgba(0,0,0,0.4)' : '0 6px 18px rgba(17,24,39,0.1)',
          display: 'flex', gap: 4, overflowX: 'auto',
        }}>
          {gallery.map((g, i) => (
            <div key={i} style={{ flex: '0 0 70px' }}>
              <DDPhoto label={g.lbl} hue={g.hue} height={54} radius={10} dark={dark} dense />
            </div>
          ))}
          <div style={{
            flex: '0 0 70px', height: 54, borderRadius: 10,
            background: c.surface, color: c.muted,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 600,
          }}>+12</div>
        </div>

        {/* Content */}
        <div style={{ padding: '18px 20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 4 }}>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: c.text, lineHeight: 1.15, flex: 1 }}>
              {sup.name}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: c.text, fontSize: 13, fontWeight: 600 }}>
              {DDIcons.star(13, c.accent)} 4.8
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
            <DDBadge kind="verified" c={c} t={t} />
            <DDBadge kind="wholesale" c={c} t={t} />
            <DDBadge kind="open" c={c} t={t} />
          </div>

          {/* Verified explainer card */}
          <div style={{
            marginTop: 14, padding: 12, borderRadius: 14,
            background: c.primarySoft, display: 'flex', gap: 10, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', background: c.primary, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{DDIcons.check(14, '#fff')}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: c.text }}>{t.verified_text}</div>
              <div style={{ fontSize: 12, color: c.muted, marginTop: 2 }}>{t.verified_sub}</div>
            </div>
          </div>

          <DDDivider color={c.primary} opacity={dark ? 0.22 : 0.18} count={5} style={{ margin: '20px 0 16px' }} />

          {/* Location */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: c.muted, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 8 }}>
              {t.address}
            </div>
            <div style={{
              padding: 14, borderRadius: 16, background: c.surface,
              display: 'flex', alignItems: 'flex-start', gap: 12,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, background: c.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{DDIcons.pin(18, c.primary)}</div>
              <div style={{ flex: 1, fontSize: 13, color: c.text, lineHeight: 1.4 }}>
                <div style={{ fontWeight: 600 }}>{t[sup.sector]}</div>
                <div style={{ color: c.muted, marginTop: 2 }}>
                  {sup.row} {t.row} · {t.container} {sup.cont} · 6 {t.min_walk}
                </div>
              </div>
              <span style={{ color: c.primary, fontSize: 12, fontWeight: 600 }}>Карта</span>
            </div>
          </div>

          {/* Hours */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: c.muted, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 8 }}>
              {t.hours}
            </div>
            <div style={{ padding: '4px 0' }}>
              {[
                ['Пн–Сб', '6:00 – 16:00', false],
                ['Воскресенье', 'Выходной', true],
              ].map(([day, hrs, off], i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', padding: '8px 0',
                  borderBottom: i === 0 ? `1px solid ${c.line}` : 'none',
                  fontSize: 13, color: off ? c.muted : c.text,
                }}>
                  <span>{day}</span>
                  <span style={{ fontWeight: 500 }}>{hrs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: c.muted, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 8 }}>
              {t.categories}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Куртки парка', 'Пуховики', 'Пальто женское', 'Жилеты', 'Демисезонная'].map((tag, i) => (
                <DDChip key={i} c={c} size="sm">{tag}</DDChip>
              ))}
            </div>
          </div>

          <div style={{ height: 110 }} /> {/* leave space for sticky CTA */}
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: `12px 16px ${DD_BOT}px`,
        background: dark ? 'rgba(10,15,31,0.92)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderTop: `1px solid ${c.border}`,
      }}>
        <DDContactButtons c={c} t={t} size="lg" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 8) Request Product
// ─────────────────────────────────────────────────────────────
function DDRequestProduct({ c, t, dark }) {
  const Field = ({ label, ph, hint, multiline }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: c.muted, marginBottom: 6 }}>{label}</div>
      <div style={{
        background: c.surface, borderRadius: 14, padding: '12px 14px',
        border: `1px solid ${c.border}`,
        minHeight: multiline ? 76 : 0,
        display: 'flex', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 14, color: c.muted, lineHeight: 1.4 }}>{ph}</span>
        {hint && <span style={{ marginLeft: 'auto', fontSize: 11, color: c.muted, opacity: 0.7 }}>{hint}</span>}
      </div>
    </div>
  );

  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} dark={dark} />

      {/* Top */}
      <div style={{ padding: `${DD_TOP + 4}px 12px 0`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{
          width: 36, height: 36, borderRadius: 12, border: 'none', background: c.surface,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{DDIcons.chevron(16, c.text, 'left')}</button>
        <span style={{ fontSize: 15, fontWeight: 600, color: c.text }}>{t.notfound}</span>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '14px 20px 0' }}>
        {/* Hero */}
        <div style={{
          padding: 20, borderRadius: 22,
          background: `linear-gradient(135deg, ${c.primary} 0%, ${c.primaryHi} 100%)`,
          color: '#fff', position: 'relative', overflow: 'hidden',
        }}>
          <svg width="120" height="120" style={{ position: 'absolute', top: -20, right: -20, opacity: 0.18 }} viewBox="0 0 120 120">
            <g fill="#fff">
              {[20, 60, 100].map(x => [20, 60, 100].map(y => (
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
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 10px', borderRadius: 999,
            background: c.accent, color: '#1F1500',
            fontSize: 11, fontWeight: 700, marginBottom: 12,
          }}>
            {DDIcons.star(11, '#1F1500')} {t.rq_disclaimer.split('.')[0]}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, lineHeight: 1.15, maxWidth: 240 }}>
            {t.notfound}
          </div>
          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 8, maxWidth: 270, lineHeight: 1.4 }}>
            {t.notfound_sub}
          </div>
        </div>

        <DDDivider color={c.primary} opacity={dark ? 0.22 : 0.18} count={5} style={{ margin: '20px 0 14px' }} />

        {/* Form */}
        <Field label={t.rq_name} ph={t.rq_name_ph} />
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ flex: 1 }}>
            <Field label={t.rq_qty} ph={t.rq_qty_ph} />
          </div>
          <div style={{ flex: 1.2 }}>
            <Field label={t.rq_budget} ph={t.rq_budget_ph} />
          </div>
        </div>
        <Field label={t.rq_note} ph={t.rq_note_ph} multiline />
        <Field label={t.rq_phone} ph="+996 ___ __ __ __" />

        {/* WhatsApp toggle */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 14px', background: c.surface, borderRadius: 14,
          border: `1px solid ${c.border}`, marginBottom: 14,
        }}>
          {DDIcons.wa(20, c.whatsapp)}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: c.text }}>Связаться через WhatsApp</div>
            <div style={{ fontSize: 11, color: c.muted, marginTop: 1 }}>Поставщики ответят в чат</div>
          </div>
          <div style={{
            width: 36, height: 22, borderRadius: 999, background: c.whatsapp,
            position: 'relative', flexShrink: 0,
          }}>
            <div style={{
              position: 'absolute', top: 2, right: 2,
              width: 18, height: 18, borderRadius: '50%', background: '#fff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }} />
          </div>
        </div>

        <div style={{ height: 110 }} />
      </div>

      {/* Sticky CTA */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: `12px 20px ${DD_BOT}px`,
        background: dark ? 'rgba(10,15,31,0.92)' : 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderTop: `1px solid ${c.border}`,
      }}>
        <button style={{
          width: '100%', height: 54, borderRadius: 17,
          background: c.accent, color: '#1F1500', border: 'none',
          fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          boxShadow: '0 10px 22px rgba(250,204,21,0.4)',
        }}>
          {t.rq_cta}
          {DDIcons.arrow(18, '#1F1500')}
        </button>
        <p style={{ textAlign: 'center', fontSize: 11, color: c.muted, marginTop: 8, marginBottom: 0 }}>
          {t.rq_disclaimer}
        </p>
      </div>
    </div>
  );
}

Object.assign(window, {
  DDSearchHeader, DDFilterChips, DDResultsHeader, DDSupplierCardCompact, DDSupplierCardPhoto,
  DDResultsCompact, DDResultsPhoto, DDSupplierProfile, DDRequestProduct,
});
