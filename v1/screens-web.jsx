// screens-web.jsx — Responsive web / PWA variant.
// Renders inside a Chrome browser frame; viewport ~1180×740.

function DDWebSearch({ c, t, dark }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    }}>
      {/* Top nav */}
      <div style={{
        height: 60, padding: '0 40px',
        display: 'flex', alignItems: 'center', gap: 30,
        borderBottom: `1px solid ${c.line}`, background: c.bg,
        flexShrink: 0,
      }}>
        <DDLogo c={c} size="md" />
        <div style={{ display: 'flex', gap: 22 }}>
          {t.nav.map((n, i) => (
            <span key={i} style={{
              fontSize: 13, fontWeight: i === 0 ? 600 : 500,
              color: i === 0 ? c.text : c.muted, cursor: 'pointer',
            }}>{n}</span>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: c.muted }}>
          {DDIcons.pin(13, c.muted)} Бишкек, Дордой
        </div>
        <button style={{
          height: 34, padding: '0 14px', borderRadius: 10, border: `1px solid ${c.border}`,
          background: 'transparent', color: c.text, fontSize: 12, fontWeight: 600,
          cursor: 'pointer', fontFamily: 'inherit',
        }}>{t.web_install}</button>
        <button style={{
          height: 34, padding: '0 14px', borderRadius: 10, border: 'none',
          background: c.primary, color: '#fff', fontSize: 12, fontWeight: 600,
          cursor: 'pointer', fontFamily: 'inherit',
        }}>{t.web_open_mobile} ↗</button>
      </div>

      {/* Body — split: hero search left, results preview right */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Left: hero + filters */}
        <div style={{
          flex: '0 0 460px', padding: '36px 40px',
          borderRight: `1px solid ${c.line}`,
          background: c.bg, overflow: 'auto',
          position: 'relative',
        }}>
          {/* Ornament watermark */}
          <svg width="240" height="240" style={{ position: 'absolute', top: 80, right: -30, opacity: dark ? 0.06 : 0.05, pointerEvents: 'none' }} viewBox="0 0 240 240">
            <g fill={c.primary}>
              {[0, 60, 120, 180, 240].map(y =>
                [0, 60, 120, 180, 240].map(x => (
                  <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                    <rect x="-3" y="-13" width="6" height="6" transform="rotate(45)" />
                    <rect x="-3" y="7"   width="6" height="6" transform="rotate(45)" />
                    <rect x="-13" y="-3" width="6" height="6" transform="rotate(45)" />
                    <rect x="7"  y="-3"  width="6" height="6" transform="rotate(45)" />
                    <circle r="2.5"/>
                  </g>
                ))
              )}
            </g>
          </svg>

          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 11px', borderRadius: 999,
              background: c.primarySoft, color: c.primary,
              fontSize: 11, fontWeight: 600, marginBottom: 18,
            }}>
              <DDStamp color={c.primary} size={11} /> PWA · {t.brand}
            </div>
            <h1 style={{
              margin: 0, fontSize: 42, lineHeight: 1.05, fontWeight: 800,
              letterSpacing: -1.4, color: c.text, maxWidth: 380,
            }}>{t.web_h1}</h1>
            <p style={{
              marginTop: 16, fontSize: 15, color: c.muted, lineHeight: 1.5, maxWidth: 380,
            }}>{t.web_sub}</p>

            {/* Big search */}
            <div style={{
              marginTop: 26,
              height: 64, borderRadius: 18,
              background: c.bg, border: `1.5px solid ${c.border}`,
              display: 'flex', alignItems: 'center', padding: '0 8px 0 20px', gap: 12,
              boxShadow: dark ? '0 6px 24px rgba(0,0,0,0.4)' : '0 12px 30px rgba(17,24,39,0.08)',
            }}>
              {DDIcons.search(20, c.primary)}
              <span style={{ flex: 1, fontSize: 15, color: c.muted }}>{t.search_hint}</span>
              <button style={{
                height: 48, padding: '0 22px', borderRadius: 12, border: 'none',
                background: c.primary, color: '#fff',
                fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                {DDIcons.search(15, '#fff')} Найти
              </button>
            </div>

            {/* Category chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
              {t.cats.slice(0, 6).map((cat, i) => (
                <DDChip key={i} c={c} size="sm" active={i === 0}>{cat}</DDChip>
              ))}
            </div>

            {/* Bullets */}
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                [t.onb_b1, c.primary],
                [t.onb_b2, c.whatsapp],
                [t.onb_b3, c.accent],
              ].map(([txt, col], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: col,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: i === 2 ? '#1F1500' : '#fff', flexShrink: 0,
                  }}>{DDIcons.check(14, i === 2 ? '#1F1500' : '#fff')}</div>
                  <span style={{ fontSize: 14, color: c.text, fontWeight: 500 }}>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: results preview */}
        <div style={{
          flex: 1, background: c.surface, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Result toolbar */}
          <div style={{
            padding: '18px 32px 14px', background: c.bg,
            borderBottom: `1px solid ${c.line}`,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{ fontSize: 13, color: c.muted }}>
              {t.search_ph.slice(0, -1)}: <span style={{ color: c.text, fontWeight: 600 }}>«куртки женские оптом»</span>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', gap: 6 }}>
              <DDChip c={c} size="sm" active icon="◇">{t.f_wholesale}</DDChip>
              <DDChip c={c} size="sm" icon="✓">{t.f_verified}</DDChip>
              <DDChip c={c} size="sm" icon="●">{t.f_open}</DDChip>
              <DDChip c={c} size="sm" icon="◎">{t.f_nearby}</DDChip>
            </div>
          </div>

          <div style={{
            flex: 1, overflow: 'auto',
            padding: '18px 32px 24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 13, color: c.muted }}>
                <span style={{ color: c.text, fontWeight: 700 }}>{t.results_count(47)}</span> · {t.sort_relevant}
              </span>
              <span style={{ fontSize: 12, color: c.primary, fontWeight: 600 }}>Показать на карте →</span>
            </div>

            {/* Grid of results */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
            }}>
              {DD_SUPPLIERS_RU.slice(0, 4).map(sup => (
                <div key={sup.id} style={{
                  borderRadius: 16, overflow: 'hidden',
                  background: c.bg, border: `1px solid ${c.border}`,
                  boxShadow: dark ? 'none' : '0 2px 6px rgba(17,24,39,0.04)',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ position: 'relative' }}>
                    <DDPhoto label={sup.photoLabel} hue={sup.hue} height={130} radius={0} dark={dark} />
                    <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', gap: 4 }}>
                      {sup.tags.includes('verified') && <DDBadge kind="verified" c={c} t={t} mini />}
                      {sup.tags.includes('wholesale') && <DDBadge kind="wholesale" c={c} t={t} mini />}
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 8, right: 8,
                      background: 'rgba(0,0,0,0.7)', color: '#fff', backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      padding: '3px 8px', borderRadius: 999, fontSize: 11, fontWeight: 600,
                    }}>{sup.price}</div>
                  </div>
                  <div style={{ padding: '10px 12px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: c.text, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {sup.name}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontSize: 11, color: c.text, fontWeight: 600 }}>
                        {DDIcons.star(10, c.accent)} 4.{6 + (sup.id.charCodeAt(1) % 4)}
                      </span>
                    </div>
                    <div style={{ fontSize: 11.5, color: c.muted, marginBottom: 8, lineHeight: 1.3 }}>
                      {ddLocation(sup, t)}
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button style={{
                        flex: 1, height: 32, borderRadius: 10, border: `1px solid ${c.border}`,
                        background: 'transparent', color: c.text,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                        fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                      }}>{DDIcons.phone(12, c.text)} {t.call}</button>
                      <button style={{
                        flex: 1.2, height: 32, borderRadius: 10, border: 'none',
                        background: c.whatsapp, color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                        fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                      }}>{DDIcons.wa(12, '#fff')} {t.whatsapp}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Request-product banner */}
            <div style={{
              marginTop: 18,
              padding: '14px 18px', borderRadius: 16,
              background: c.primary, color: '#fff',
              display: 'flex', alignItems: 'center', gap: 14,
              position: 'relative', overflow: 'hidden',
            }}>
              <svg width="120" height="80" style={{ position: 'absolute', right: -10, top: -10, opacity: 0.15 }} viewBox="0 0 120 80">
                <g fill="#fff">
                  {[20, 60, 100].map(x => [20, 60].map(y => (
                    <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                      <rect x="-3" y="-12" width="6" height="6" transform="rotate(45)" />
                      <rect x="-3" y="6"   width="6" height="6" transform="rotate(45)" />
                      <rect x="-12" y="-3" width="6" height="6" transform="rotate(45)" />
                      <rect x="6"  y="-3"  width="6" height="6" transform="rotate(45)" />
                      <circle r="2"/>
                    </g>
                  )))}
                </g>
              </svg>
              <div style={{ flex: 1, position: 'relative' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{t.notfound}</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>{t.notfound_sub}</div>
              </div>
              <button style={{
                height: 38, padding: '0 16px', borderRadius: 11, border: 'none',
                background: c.accent, color: '#1F1500',
                fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                position: 'relative',
              }}>{t.rq_cta} →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DDWebSearch });
