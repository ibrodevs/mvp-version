// screens-web.jsx — Web Home page.
// Uses DDWebHeader + DDWebFooter from web-shared.jsx.

function DDWebHome({ c, t, dark, onNavigate, onSearch, query = 'куртки женские оптом' }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'auto',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      position: 'relative',
    }}>
      <DDWebHeader c={c} t={t} dark={dark} page="home" onNavigate={onNavigate} onSearch={onSearch} />

      {/* Faint ornament watermark */}
      <svg width="640" height="380" style={{
        position: 'absolute', top: 100, left: '50%', transform: 'translateX(-50%)',
        opacity: dark ? 0.05 : 0.04, pointerEvents: 'none',
      }} viewBox="0 0 640 380">
        <g fill={c.primary}>
          {[40, 120, 200, 280, 360, 440, 520, 600].map(x =>
            [40, 120, 200, 280, 360].map(y => (
              <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                <rect x="-4" y="-16" width="8" height="8" transform="rotate(45)" />
                <rect x="-4" y="8"   width="8" height="8" transform="rotate(45)" />
                <rect x="-16" y="-4" width="8" height="8" transform="rotate(45)" />
                <rect x="8"  y="-4"  width="8" height="8" transform="rotate(45)" />
                <circle r="3"/>
              </g>
            ))
          )}
        </g>
      </svg>

      {/* Centered hero */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '36px 40px 28px', position: 'relative', zIndex: 1, flexShrink: 0,
      }}>
        {/* Big mark */}
        <div style={{ position: 'relative', marginBottom: 6 }}>
          <div style={{
            width: 86, height: 86, borderRadius: 26, background: c.primary,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 50, letterSpacing: -2,
            boxShadow: `0 18px 40px ${dark ? 'rgba(91,124,240,0.35)' : 'rgba(30,58,138,0.28)'}`,
          }}>D</div>
          <div style={{
            position: 'absolute', top: -7, right: -7,
            width: 30, height: 30, borderRadius: 999, background: c.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <DDStamp color={c.primary} size={15} />
          </div>
        </div>

        <h1 style={{
          margin: '20px 0 12px', fontSize: 52, lineHeight: 1.0, fontWeight: 800,
          letterSpacing: -2, color: c.text, textAlign: 'center', maxWidth: 760,
        }}>
          {t.web_h1}
        </h1>
        <p style={{
          margin: 0, marginBottom: 30, fontSize: 17, color: c.muted, lineHeight: 1.45,
          textAlign: 'center', maxWidth: 560,
        }}>
          {t.web_sub}
        </p>

        {/* HUGE search */}
        <div style={{
          width: '100%', maxWidth: 680,
          height: 72, borderRadius: 24,
          background: c.bg, border: `2px solid ${c.primary}`,
          display: 'flex', alignItems: 'center', padding: '0 10px 0 26px', gap: 14,
          boxShadow: dark ? '0 14px 36px rgba(0,0,0,0.5)' : '0 18px 40px rgba(30,58,138,0.16)',
        }}>
          {DDIcons.search(22, c.primary)}
          <span style={{ flex: 1, fontSize: 16, color: c.muted }}>{t.search_hint}</span>
          <button
            onClick={() => onSearch ? onSearch(query) : onNavigate && onNavigate('results')}
            style={{
            height: 52, padding: '0 24px', borderRadius: 16, border: 'none',
            background: c.primary, color: '#fff',
            fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {DDIcons.search(16, '#fff')} {tw_find(t)}
          </button>
        </div>

        {/* Category chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18, justifyContent: 'center', maxWidth: 680 }}>
          {t.cats.slice(0, 6).map((cat, i) => (
            <DDChip key={i} c={c} active={i === 0} onClick={() => onSearch ? onSearch(cat) : onNavigate && onNavigate('results')}>{cat}</DDChip>
          ))}
        </div>

        <p style={{ margin: '16px 0 0', fontSize: 13, color: c.muted, textAlign: 'center' }}>
          {tw_examples(t)}: «{t.suggestions[0][0]}» · «{t.suggestions[2][0]}» · «{t.suggestions[3][0]}»
        </p>
      </div>

      {/* 3-step band */}
      <div style={{
        background: c.surface, padding: '22px 40px', borderTop: `1px solid ${c.line}`,
        position: 'relative', zIndex: 2, flexShrink: 0,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28,
          maxWidth: 880, margin: '0 auto', alignItems: 'center',
        }}>
          {[
            { n: '1', label: tw_step1(t), icon: DDIcons.search(20, '#fff'),     bg: c.primary,  fg: '#fff' },
            { n: '2', label: tw_step2(t), icon: DDIcons.phone(20, '#fff'),      bg: c.text,     fg: '#fff' },
            { n: '3', label: tw_step3(t), icon: DDIcons.wa(20, '#fff'),         bg: c.whatsapp, fg: '#fff' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: s.bg, color: s.fg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{s.icon}</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: c.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  {tw_step_word(t)} {s.n}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: c.text, marginTop: 2 }}>
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories grid section */}
      <div style={{
        padding: '32px 40px 24px', flexShrink: 0,
        maxWidth: 1100, width: '100%', margin: '0 auto', boxSizing: 'border-box',
      }}>
        <h2 style={{
          margin: 0, marginBottom: 16, fontSize: 22, fontWeight: 700, letterSpacing: -0.5,
          color: c.text,
        }}>{tw_all_cats(t)}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { i: 0, hue: 340 }, { i: 1, hue: 30 }, { i: 2, hue: 12 }, { i: 3, hue: 280 },
            { i: 5, hue: 200 }, { i: 6, hue: 60 }, { i: 7, hue: 150 }, { i: 4, hue: 220 },
          ].map(({ i, hue }) => (
            <button
              key={i}
              onClick={() => onSearch ? onSearch(t.cats[i]) : onNavigate && onNavigate('results')}
              style={{
              appearance: 'none', border: 'none', padding: 0, borderRadius: 18,
              background: c.surface, overflow: 'hidden', cursor: 'pointer',
              textAlign: 'left',
              boxShadow: dark ? 'none' : '0 1px 3px rgba(17,24,39,0.04)',
              fontFamily: 'inherit',
            }}>
              <div style={{
                height: 110,
                background: `repeating-linear-gradient(135deg, oklch(${dark?0.32:0.88} 0.055 ${hue}) 0 10px, oklch(${dark?0.38:0.82} 0.07 ${hue}) 10px 12px)`,
              }} />
              <div style={{ padding: '12px 14px 14px', fontSize: 14, fontWeight: 700, color: c.text }}>
                {t.cats[i]}
              </div>
            </button>
          ))}
        </div>
      </div>

      <DDWebFooter c={c} t={t} dark={dark} />
    </div>
  );
}

Object.assign(window, { DDWebHome, DDWebSearch: DDWebHome /* back-compat */ });
