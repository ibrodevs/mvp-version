// screens-home.jsx — RADICALLY SIMPLE version.
// Two screens: Onboarding + Home. One action per screen. No tab bar, no clutter.

const DD_TOP = 56;
const DD_BOT = 38;

function DDStatusBarBg({ c }) {
  return <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: DD_TOP, background: c.bg, zIndex: 5 }} />;
}

// ─────────────────────────────────────────────────────────────
// Onboarding — ONE action only
// ─────────────────────────────────────────────────────────────
function DDOnboarding({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* hero ornament wash */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 480,
        background: `radial-gradient(120% 100% at 50% 25%, ${c.primarySoft} 0%, ${c.bg} 70%)`,
      }} />

      <div style={{ flex: 1, padding: `${DD_TOP + 24}px 32px 0`, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{
            background: 'transparent', border: 'none', color: c.muted, fontSize: 15, fontWeight: 500,
            cursor: 'pointer', fontFamily: 'inherit', padding: '4px 8px',
          }}>{t.onb_skip}</button>
        </div>

        {/* Big mark */}
        <div style={{ flex: 0.4 }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 140, height: 140, borderRadius: 40, background: c.primary,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 80, letterSpacing: -2, position: 'relative',
            boxShadow: `0 24px 60px ${dark ? 'rgba(91,124,240,0.35)' : 'rgba(30,58,138,0.30)'}`,
          }}>
            D
            <div style={{
              position: 'absolute', top: -10, right: -10,
              width: 46, height: 46, borderRadius: 999, background: c.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <DDStamp color={c.primary} size={22} />
            </div>
          </div>
        </div>

        <h1 style={{
          marginTop: 40, marginBottom: 0,
          fontSize: 38, lineHeight: 1.05, fontWeight: 800, letterSpacing: -1.2,
          textAlign: 'center', color: c.text, whiteSpace: 'pre-line',
        }}>{t.onb_h}</h1>
        <p style={{
          marginTop: 18, marginBottom: 0,
          fontSize: 16, lineHeight: 1.45, textAlign: 'center', color: c.muted,
          maxWidth: 300, alignSelf: 'center',
        }}>{t.onb_sub}</p>

        <div style={{ flex: 1 }} />
      </div>

      {/* CTA */}
      <div style={{ padding: `16px 32px ${DD_BOT}px`, position: 'relative', zIndex: 2 }}>
        <button style={{
          width: '100%', height: 62, borderRadius: 22,
          background: c.primary, color: '#fff', border: 'none',
          fontSize: 18, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          boxShadow: `0 14px 28px ${dark ? 'rgba(91,124,240,0.28)' : 'rgba(30,58,138,0.32)'}`,
        }}>
          {t.onb_cta}
          {DDIcons.arrow(20, '#fff')}
        </button>
        <p style={{ textAlign: 'center', fontSize: 12, color: c.muted, marginTop: 14, marginBottom: 0 }}>
          {t.onb_b3.replace(/Verified suppliers/i, 'No login · Free').replace(/Текшерилген сатуучулар/, 'Каттоосуз · Бекер').replace(/Проверенные поставщики/, 'Без регистрации · Бесплатно')}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Home — ONE focus: search.
// ─────────────────────────────────────────────────────────────
const DD_CAT_TILES = [
  { i: 0, hue: 340 },  // Women
  { i: 1, hue: 30 },   // Kids
  { i: 2, hue: 12 },   // Shoes
  { i: 3, hue: 280 },  // Fabrics
];

function DDHomeSimple({ c, t, dark }) {
  return (
    <div style={{
      position: 'relative', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <DDStatusBarBg c={c} />

      {/* Top bar — minimal: brand + language hint */}
      <div style={{
        padding: `${DD_TOP + 10}px 20px 0`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <DDLogo c={c} size="sm" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: c.muted, fontWeight: 500 }}>
          {DDIcons.pin(13, c.muted)} Дордой
        </div>
      </div>

      {/* faint ornament watermark */}
      <svg width="320" height="240" style={{
        position: 'absolute', top: 110, left: '50%', transform: 'translateX(-50%)',
        opacity: dark ? 0.07 : 0.05, pointerEvents: 'none',
      }} viewBox="0 0 320 240">
        <g fill={c.primary}>
          {[20, 80, 140, 200, 260, 320].map(x => [20, 80, 140, 200].map(y => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
              <rect x="-3" y="-12" width="6" height="6" transform="rotate(45)" />
              <rect x="-3" y="6" width="6" height="6" transform="rotate(45)" />
              <rect x="-12" y="-3" width="6" height="6" transform="rotate(45)" />
              <rect x="6" y="-3" width="6" height="6" transform="rotate(45)" />
              <circle r="2.4"/>
            </g>
          )))}
        </g>
      </svg>

      <div style={{ flex: 1, padding: '32px 20px 0', position: 'relative', zIndex: 1, overflow: 'auto' }}>
        {/* Big question */}
        <h1 style={{
          margin: 0, marginBottom: 18,
          fontSize: 30, fontWeight: 800, letterSpacing: -1, color: c.text,
          textAlign: 'center', lineHeight: 1.1,
        }}>
          {t.search_ph}
        </h1>

        {/* HUGE search bar */}
        <div style={{
          height: 68, borderRadius: 22,
          background: c.bg, border: `2px solid ${c.primary}`,
          boxShadow: dark
            ? `0 8px 28px rgba(0,0,0,0.45)`
            : `0 14px 36px rgba(30,58,138,0.18)`,
          display: 'flex', alignItems: 'center', padding: '0 10px 0 22px', gap: 12,
        }}>
          {DDIcons.search(22, c.primary)}
          <span style={{ flex: 1, fontSize: 16, color: c.muted }}>{t.search_hint}</span>
          <button style={{
            width: 48, height: 48, borderRadius: 16, border: 'none', background: c.primary,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>{DDIcons.mic(20, '#fff')}</button>
        </div>

        {/* Tiny helper */}
        <p style={{
          margin: '12px 8px 0', fontSize: 13, color: c.muted, textAlign: 'center', lineHeight: 1.35,
        }}>
          {t.suggestions[0][0]} · {t.suggestions[2][0]} · {t.suggestions[3][0]}
        </p>

        {/* OR */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '28px 0 18px' }}>
          <div style={{ flex: 1, height: 1, background: c.line }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: c.muted, letterSpacing: 1, textTransform: 'uppercase' }}>
            {tw_or(t)}
          </span>
          <div style={{ flex: 1, height: 1, background: c.line }} />
        </div>

        {/* Category tiles — 2x2 grid, BIG */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {DD_CAT_TILES.map(({ i, hue }) => (
            <button key={i} style={{
              appearance: 'none', border: 'none',
              borderRadius: 20, padding: 0,
              background: c.surface, overflow: 'hidden',
              cursor: 'pointer', textAlign: 'left',
              boxShadow: dark ? 'none' : '0 1px 3px rgba(17,24,39,0.05)',
            }}>
              <div style={{
                height: 88,
                background: `repeating-linear-gradient(135deg, oklch(${dark?0.32:0.88} 0.055 ${hue}) 0 10px, oklch(${dark?0.38:0.82} 0.07 ${hue}) 10px 12px)`,
              }} />
              <div style={{
                padding: '12px 14px 14px',
                fontSize: 15, fontWeight: 700, color: c.text, lineHeight: 1.2,
              }}>
                {t.cats[i]}
              </div>
            </button>
          ))}
        </div>

        {/* All categories link */}
        <button style={{
          appearance: 'none', border: 'none', background: 'transparent',
          width: '100%', textAlign: 'center', padding: '18px 0 8px',
          fontSize: 14, color: c.primary, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
        }}>
          {tw_all_cats(t)}
        </button>

        <DDDivider color={c.primary} opacity={dark ? 0.22 : 0.18} count={5} style={{ margin: '4px 0 18px' }} />

        {/* Request product CTA — second action, clearly secondary */}
        <div style={{
          padding: 16, borderRadius: 18,
          background: c.accentSoft,
          display: 'flex', alignItems: 'center', gap: 12,
          marginBottom: 24,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, background: c.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            fontSize: 20, fontWeight: 800, color: '#1F1500',
          }}>?</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: c.text, lineHeight: 1.2 }}>
              {t.notfound}
            </div>
            <div style={{ fontSize: 12, color: dark ? c.muted : '#5a4a2a', marginTop: 3, lineHeight: 1.3 }}>
              {t.notfound_sub.split('—')[1]?.trim() || t.notfound_sub}
            </div>
          </div>
          {DDIcons.chevron(16, c.text)}
        </div>
      </div>
    </div>
  );
}

// Helpers for the OR / "All categories" labels (light i18n inline)
function tw_or(t) {
  if (t === DD_I18N.kg) return 'же';
  if (t === DD_I18N.en) return 'or';
  return 'или';
}
function tw_all_cats(t) {
  if (t === DD_I18N.kg) return 'Бардык категориялар →';
  if (t === DD_I18N.en) return 'All categories →';
  return 'Все категории →';
}

Object.assign(window, {
  DDOnboarding, DDHomeSimple, DDStatusBarBg, DD_TOP, DD_BOT, tw_or, tw_all_cats,
});
