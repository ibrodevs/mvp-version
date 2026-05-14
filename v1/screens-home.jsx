// screens-home.jsx — Onboarding + 3 Home variants
// Each screen takes { c, t, dark } and renders the BODY ONLY (no device frame).

// ─────────────────────────────────────────────────────────────
// Common scaffolding: status-bar-aware top spacer + home-indicator-aware bottom spacer
// ─────────────────────────────────────────────────────────────
const DD_TOP = 56;     // below dynamic island
const DD_BOT = 38;     // above home indicator

// Shared status-bar overlay used inside the iOS device frame.
function DDStatusBarBg({ c, dark }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: DD_TOP,
      background: c.bg, zIndex: 5,
    }} />
  );
}

// ─────────────────────────────────────────────────────────────
// 1) Onboarding
// ─────────────────────────────────────────────────────────────
function DDOnboarding({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <DDOrnamentPattern id="orn-onb" color={c.primary} size={36} opacity={dark ? 0.08 : 0.06} />
      {/* Hero ornament wash */}
      <div style={{
        position: 'absolute', top: -40, left: -40, right: -40, height: 360,
        background: `radial-gradient(120% 80% at 50% 30%, ${c.primarySoft} 0%, ${c.bg} 70%)`,
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 380,
        background: 'url(#orn-onb)', pointerEvents: 'none',
      }}>
        <svg width="100%" height="380" style={{ position: 'absolute', inset: 0 }}>
          <rect width="100%" height="100%" fill="url(#orn-onb)" />
        </svg>
      </div>

      <div style={{ flex: 1, padding: `${DD_TOP + 24}px 28px 0`, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Brand */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DDLogo c={c} size="md" />
          <button style={{
            background: 'transparent', border: 'none', color: c.muted, fontSize: 14, fontWeight: 500,
            cursor: 'pointer', fontFamily: 'inherit',
          }}>{t.onb_skip}</button>
        </div>

        {/* Hero mark */}
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 132, height: 132, borderRadius: 36, background: c.primary,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 78, letterSpacing: -2,
            position: 'relative',
            boxShadow: `0 22px 50px ${dark ? 'rgba(91,124,240,0.35)' : 'rgba(30,58,138,0.32)'}`,
          }}>
            D
            <div style={{
              position: 'absolute', top: -10, right: -10,
              width: 44, height: 44, borderRadius: 999, background: c.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <DDStamp color={c.primary} size={22} />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 style={{
          marginTop: 36, marginBottom: 0,
          fontSize: 36, lineHeight: 1.05, fontWeight: 800, letterSpacing: -1,
          textAlign: 'center', whiteSpace: 'pre-line', color: c.text,
        }}>{t.onb_h}</h1>
        <p style={{
          marginTop: 14, marginBottom: 0,
          fontSize: 15.5, lineHeight: 1.45, textAlign: 'center', color: c.muted,
          maxWidth: 320, alignSelf: 'center',
        }}>{t.onb_sub}</p>

        <DDDivider color={c.primary} opacity={dark ? 0.25 : 0.22} count={5} style={{ margin: '28px 0 18px' }} />

        {/* Benefit lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            [t.onb_b1, '14k', c.primary],
            [t.onb_b2, '1s',  c.accent],
            [t.onb_b3, '✓',   '#16A34A'],
          ].map(([txt, icon, color], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: color,
                color: i === 1 ? '#1F1500' : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: i === 0 ? 13 : 16,
              }}>{icon}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: c.text, lineHeight: 1.3, flex: 1 }}>
                {txt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: `16px 28px ${DD_BOT}px`, position: 'relative', zIndex: 2 }}>
        <button style={{
          width: '100%', height: 56, borderRadius: 18,
          background: c.primary, color: '#fff', border: 'none',
          fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          boxShadow: `0 10px 24px ${dark ? 'rgba(91,124,240,0.28)' : 'rgba(30,58,138,0.32)'}`,
        }}>
          {t.onb_cta}
          {DDIcons.arrow(18, '#fff')}
        </button>
        <p style={{ textAlign: 'center', fontSize: 11, color: c.muted, marginTop: 12, marginBottom: 0 }}>
          {t.onb_b3} · No login required
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 2) Home V1 — Minimal "Google-for-Dordoi"
// ─────────────────────────────────────────────────────────────
function DDHomeMinimal({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} dark={dark} />

      {/* Top brand row */}
      <div style={{
        padding: `${DD_TOP + 8}px 20px 0`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <DDLogo c={c} size="sm" />
        <div style={{
          width: 32, height: 32, borderRadius: '50%', background: c.surface,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: c.primary }}>{t.brand[0]}</span>
        </div>
      </div>

      {/* Ornament watermark */}
      <svg width="280" height="280" style={{ position: 'absolute', top: 90, left: '50%', transform: 'translateX(-50%)', opacity: dark ? 0.07 : 0.06, pointerEvents: 'none' }} viewBox="0 0 280 280">
        <g fill={c.primary}>
          {[0, 70, 140, 210, 280].map((y, j) =>
            [0, 70, 140, 210, 280].map((x, i) => (
              <g key={`${i}-${j}`} transform={`translate(${x} ${y})`}>
                <rect x="-3" y="-14" width="6" height="6" transform="rotate(45)" />
                <rect x="-3" y="8"  width="6" height="6" transform="rotate(45)" />
                <rect x="-14" y="-3" width="6" height="6" transform="rotate(45)" />
                <rect x="8"  y="-3" width="6" height="6" transform="rotate(45)" />
                <circle r="3" />
              </g>
            ))
          )}
        </g>
      </svg>

      {/* Centered hero */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px', position: 'relative', zIndex: 1, marginTop: -40 }}>
        <h1 style={{
          margin: 0, marginBottom: 26,
          fontSize: 30, fontWeight: 800, letterSpacing: -1, color: c.text,
          textAlign: 'center', lineHeight: 1.05,
        }}>
          {t.search_ph}
        </h1>

        {/* Big search bar */}
        <div style={{
          height: 62, borderRadius: 22,
          background: c.bg, border: `1.5px solid ${c.border}`,
          boxShadow: dark ? '0 6px 24px rgba(0,0,0,0.4)' : '0 10px 30px rgba(17,24,39,0.08)',
          display: 'flex', alignItems: 'center', padding: '0 12px 0 20px', gap: 12,
        }}>
          {DDIcons.search(20, c.primary)}
          <span style={{ flex: 1, fontSize: 15, color: c.muted }}>{t.search_hint}</span>
          <button style={{
            width: 44, height: 44, borderRadius: 14, border: 'none', background: c.primary,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>{DDIcons.mic(18, '#fff')}</button>
        </div>

        {/* Category chips */}
        <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {t.cats.slice(0, 5).map((cat, i) => (
            <DDChip key={i} c={c} active={i === 0}>{cat}</DDChip>
          ))}
        </div>
      </div>

      {/* Popular */}
      <div style={{ padding: `0 20px ${DD_BOT + 8}px`, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: c.muted, textTransform: 'uppercase', letterSpacing: 0.6 }}>
            {t.popular}
          </span>
          <span style={{ fontSize: 12, color: c.primary, fontWeight: 500 }}>{t.explore} →</span>
        </div>
        <div style={{
          background: c.surface, borderRadius: 18, padding: 4,
        }}>
          {t.suggestions.slice(0, 4).map(([txt, tag], i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '11px 14px', borderRadius: 14,
              background: i === 0 ? c.bg : 'transparent',
              boxShadow: i === 0 && !dark ? '0 1px 2px rgba(0,0,0,0.04)' : 'none',
            }}>
              <div style={{ opacity: 0.55 }}>{DDIcons.search(15, c.muted)}</div>
              <span style={{ flex: 1, fontSize: 14, color: c.text }}>{txt}</span>
              <span style={{
                fontSize: 10, fontWeight: 600, color: c.primary,
                background: c.primarySoft, padding: '2px 7px', borderRadius: 999,
              }}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3) Home V2 — Category-led with imagery
// ─────────────────────────────────────────────────────────────
function DDHomeCategories({ c, t, dark }) {
  const catData = [
    { i: 0, hue: 340 }, { i: 1, hue: 30 }, { i: 2, hue: 15 }, { i: 3, hue: 280 },
    { i: 4, hue: 220 }, { i: 5, hue: 60 },
  ];
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} dark={dark} />

      {/* Header */}
      <div style={{ padding: `${DD_TOP + 8}px 20px 8px` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <DDLogo c={c} size="sm" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {DDIcons.pin(14, c.muted)}
            <span style={{ fontSize: 13, color: c.muted, fontWeight: 500 }}>Бишкек</span>
          </div>
        </div>

        {/* Compact search */}
        <div style={{
          height: 52, borderRadius: 18,
          background: c.surface, border: `1px solid ${c.border}`,
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
        }}>
          {DDIcons.search(18, c.primary)}
          <span style={{ flex: 1, fontSize: 15, color: c.muted }}>{t.search_ph}</span>
          {DDIcons.mic(18, c.muted)}
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '14px 20px 8px' }}>
        {/* Category grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {catData.map(({ i, hue }) => (
            <div key={i} style={{
              borderRadius: 16, padding: 10,
              background: c.surface, position: 'relative', overflow: 'hidden',
              aspectRatio: '1',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              {/* mini photo */}
              <div style={{
                height: 56, borderRadius: 10, overflow: 'hidden',
                background: `repeating-linear-gradient(135deg, oklch(${dark?0.32:0.9} 0.045 ${hue}) 0 8px, oklch(${dark?0.38:0.84} 0.06 ${hue}) 8px 9px)`,
              }} />
              <div style={{ fontSize: 12, fontWeight: 600, color: c.text, lineHeight: 1.2 }}>
                {t.cats[i]}
              </div>
            </div>
          ))}
        </div>

        <DDDivider color={c.primary} opacity={dark ? 0.22 : 0.18} count={5} style={{ margin: '20px 0 14px' }} />

        {/* Nearby now */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: c.text }}>{t.nearby_now}</span>
          <span style={{ fontSize: 12, color: c.primary, fontWeight: 500 }}>{t.explore}</span>
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', margin: '0 -20px', padding: '0 20px 4px' }}>
          {DD_SUPPLIERS_RU.slice(0, 4).map((s) => (
            <div key={s.id} style={{
              flex: '0 0 144px', borderRadius: 16, background: c.surface, padding: 8,
            }}>
              <DDPhoto label={s.photoLabel} hue={s.hue} height={88} radius={10} dark={dark} />
              <div style={{ padding: '8px 4px 2px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: c.text, lineHeight: 1.2, marginBottom: 3 }}>{s.name}</div>
                <div style={{ fontSize: 11, color: c.muted, lineHeight: 1.2 }}>
                  {t[s.sector].replace('Сектор ','').replace(' сектору','').replace(' Sector','')} · {s.row}/{s.cont}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular searches */}
        <div style={{ marginTop: 18 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: c.muted, textTransform: 'uppercase', letterSpacing: 0.6 }}>
            {t.popular}
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
            {t.suggestions.slice(0, 5).map(([txt], i) => (
              <DDChip key={i} c={c} size="sm" icon="↗">{txt}</DDChip>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom tab bar */}
      <DDTabBar c={c} t={t} dark={dark} active={0} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 4) Home V3 — Discovery/Map-aware
// ─────────────────────────────────────────────────────────────
function DDHomeDiscovery({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* Tinted hero band */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 280,
        background: c.primary,
        overflow: 'hidden',
      }}>
        <svg width="100%" height="100%" style={{ opacity: 0.13 }} preserveAspectRatio="none">
          <defs>
            <pattern id="orn-disc" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <g fill="#fff">
                <rect x="13" y="2"  width="6" height="6" transform="rotate(45 16 5)" />
                <rect x="13" y="24" width="6" height="6" transform="rotate(45 16 27)" />
                <rect x="2"  y="13" width="6" height="6" transform="rotate(45 5 16)" />
                <rect x="24" y="13" width="6" height="6" transform="rotate(45 27 16)" />
                <circle cx="16" cy="16" r="2"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#orn-disc)" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: `${DD_TOP + 8}px 20px 0`, color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DDLogo c={{ ...c, text: '#fff', primary: '#fff' }} size="sm" />
          <button style={{
            border: 'none', background: 'rgba(255,255,255,0.15)', color: '#fff',
            padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer',
          }}>
            {DDIcons.pin(12, '#fff')} Дордой
          </button>
        </div>

        <div style={{ marginTop: 28, color: '#fff' }}>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: -0.6, lineHeight: 1.15, maxWidth: 280 }}>
            {t.tagline}
          </h1>
        </div>

        {/* Floating search bar */}
        <div style={{
          marginTop: 22,
          height: 58, borderRadius: 20,
          background: c.bg, color: c.text,
          display: 'flex', alignItems: 'center', padding: '0 8px 0 18px', gap: 12,
          boxShadow: '0 14px 32px rgba(0,0,0,0.25)',
        }}>
          {DDIcons.search(20, c.primary)}
          <span style={{ flex: 1, fontSize: 15, color: c.muted }}>{t.search_ph}</span>
          <button style={{
            height: 42, padding: '0 16px', borderRadius: 14, border: 'none',
            background: c.accent, color: '#1F1500',
            fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          }}>{t.search_ph.includes('?') ? 'Go' : 'Go'}</button>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, marginTop: 80, padding: '0 20px', overflow: 'auto' }}>
        {/* Category strip */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', margin: '0 -20px', padding: '0 20px 4px' }}>
          {t.cats.slice(0, 6).map((cat, i) => (
            <DDChip key={i} c={c} active={i === 0}>{cat}</DDChip>
          ))}
        </div>

        {/* Recent searches */}
        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: c.text }}>{t.recent}</span>
            <span style={{ fontSize: 11, color: c.muted }}>×</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['Куртки парка', 'Джинсы дет.', 'Хлопок 100%'].map((txt, i) => (
              <div key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 10px', borderRadius: 999,
                background: c.surface, fontSize: 12, color: c.text,
              }}>
                <span style={{ opacity: 0.5 }}>{DDIcons.search(11, c.muted)}</span>
                {txt}
              </div>
            ))}
          </div>
        </div>

        {/* Popular suppliers near */}
        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: c.text }}>{t.popular}</span>
          </div>
          {t.suggestions.slice(0, 4).map(([txt, tag], i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 0',
              borderBottom: i < 3 ? `1px solid ${c.line}` : 'none',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, background: c.primarySoft,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: c.primary, fontWeight: 700,
              }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: c.text }}>{txt}</div>
                <div style={{ fontSize: 11, color: c.muted, marginTop: 2 }}>{tag} · 24 поставщика</div>
              </div>
              <span style={{ color: c.muted }}>{DDIcons.chevron(14, c.muted)}</span>
            </div>
          ))}
        </div>
      </div>

      <DDTabBar c={c} t={t} dark={dark} active={0} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Bottom tab bar (shared)
// ─────────────────────────────────────────────────────────────
function DDTabBar({ c, t, dark, active = 0 }) {
  const tabs = [
    { lbl: 'Поиск',  icon: DDIcons.search(20) },
    { lbl: 'Карта',   icon: DDIcons.pin(20) },
    { lbl: 'Сохр.',  icon: DDIcons.bookmark(20) },
    { lbl: 'Запрос', icon: DDIcons.arrow(20) },
  ];
  return (
    <div style={{
      borderTop: `1px solid ${c.border}`,
      background: c.bg,
      padding: `8px 0 ${DD_BOT - 6}px`,
      display: 'flex',
    }}>
      {tabs.map((tab, i) => (
        <div key={i} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          color: i === active ? c.primary : c.muted,
        }}>
          {tab.icon}
          <span style={{ fontSize: 10, fontWeight: i === active ? 700 : 500 }}>{tab.lbl}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  DDOnboarding, DDHomeMinimal, DDHomeCategories, DDHomeDiscovery, DDTabBar, DDStatusBarBg, DD_TOP, DD_BOT,
});
