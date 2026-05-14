// ui.jsx — Shared UI primitives for Dordoi Digital.
// Depends on tokens.jsx (DD_PALETTE, DDStamp, DDOrnamentPattern, DDDivider).

// Striped placeholder block, monospace label — used for ALL product photos.
function DDPhoto({ label = 'photo', hue = 220, height = 160, radius = 16, dark = false, dense = false }) {
  // Tone the placeholder lightly by hue without being saturated.
  const bg = `oklch(${dark ? 0.32 : 0.92} 0.04 ${hue})`;
  const stripe = `oklch(${dark ? 0.38 : 0.86} 0.05 ${hue})`;
  const text = `oklch(${dark ? 0.7 : 0.42} 0.04 ${hue})`;
  return (
    <div style={{
      width: '100%', height, borderRadius: radius, overflow: 'hidden',
      position: 'relative',
      background: `repeating-linear-gradient(135deg, ${bg} 0 14px, ${stripe} 14px 16px)`,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: dense ? 'flex-end' : 'center', justifyContent: 'center',
        padding: 10, boxSizing: 'border-box',
      }}>
        <span style={{
          fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
          fontSize: dense ? 10 : 11, letterSpacing: '0.04em', color: text,
          background: dark ? 'rgba(0,0,0,0.32)' : 'rgba(255,255,255,0.7)',
          padding: '3px 8px', borderRadius: 4, textTransform: 'lowercase',
          maxWidth: '90%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{label}</span>
      </div>
    </div>
  );
}

// Brand mark: 'D' tile with ornament stamp + wordmark.
function DDLogo({ c, size = 'md', mono = false }) {
  const sizes = {
    sm: { tile: 22, font: 13, gap: 7, dot: 8 },
    md: { tile: 28, font: 15, gap: 8, dot: 10 },
    lg: { tile: 36, font: 20, gap: 10, dot: 12 },
  }[size];
  const bg = mono ? c.text : c.primary;
  const fg = mono ? c.bg : '#fff';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: sizes.gap }}>
      <div style={{
        width: sizes.tile, height: sizes.tile, borderRadius: sizes.tile * 0.28,
        background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: sizes.tile * 0.55, letterSpacing: -0.5,
        position: 'relative',
      }}>
        D
        <div style={{
          position: 'absolute', right: -3, bottom: -3,
          background: c.accent, borderRadius: '50%',
          width: sizes.dot, height: sizes.dot,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <DDStamp color={c.primary} size={sizes.dot - 3} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontWeight: 700, fontSize: sizes.font, color: c.text, letterSpacing: -0.3 }}>
          Dordoi <span style={{ color: c.primary }}>Digital</span>
        </span>
      </div>
    </div>
  );
}

// Badges
function DDBadge({ kind, c, t, mini = false }) {
  const map = {
    wholesale: { bg: c.accent,     fg: '#1F1500',   label: t.wholesale, icon: '◇' },
    retail:    { bg: c.surface2,   fg: c.text,      label: t.retail,    icon: null },
    verified:  { bg: c.primary,    fg: '#fff',      label: t.verified,  icon: '✓' },
    open:      { bg: '#16A34A',    fg: '#fff',      label: t.open_now,  icon: '●' },
    closed:    { bg: c.surface2,   fg: c.muted,     label: t.closed,    icon: '○' },
  };
  const s = map[kind];
  if (!s) return null;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: mini ? '2px 6px' : '3px 8px',
      borderRadius: 999, background: s.bg, color: s.fg,
      fontSize: mini ? 10 : 11, fontWeight: 600, letterSpacing: 0.1,
      whiteSpace: 'nowrap',
    }}>
      {s.icon && <span style={{ fontSize: mini ? 8 : 9, lineHeight: 1 }}>{s.icon}</span>}
      {s.label}
    </span>
  );
}

// Filter chip
function DDChip({ children, active = false, c, icon, onClick, size = 'md' }) {
  const pad = size === 'sm' ? '5px 10px' : '7px 12px';
  return (
    <button
      onClick={onClick}
      style={{
        appearance: 'none', border: 'none',
        background: active ? c.primary : c.surface,
        color: active ? '#fff' : c.text,
        padding: pad,
        borderRadius: 999,
        fontSize: size === 'sm' ? 12 : 13,
        fontWeight: 500,
        display: 'inline-flex', alignItems: 'center', gap: 5,
        whiteSpace: 'nowrap', cursor: 'pointer',
        transition: 'all 0.15s ease',
        boxShadow: active ? '0 1px 3px rgba(30,58,138,0.25)' : 'none',
        fontFamily: 'inherit',
      }}
    >
      {icon && <span style={{ opacity: 0.7, fontSize: 11 }}>{icon}</span>}
      {children}
    </button>
  );
}

// SVG icons (kept simple — line/path only)
const DDIcons = {
  search: (sz = 18, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  pin: (sz = 16, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  phone: (sz = 18, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  wa: (sz = 18, color = '#fff') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill={color}>
      <path d="M17.5 14.4c-.3-.15-1.8-.9-2.1-1s-.5-.15-.7.15-.8 1-1 1.2-.4.2-.7.05c-.3-.15-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.45.1-.6c.1-.1.3-.3.4-.5.15-.15.2-.3.3-.5s.05-.4 0-.55c-.05-.15-.7-1.7-1-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.55.1-.85.4-.3.3-1.1 1.1-1.1 2.7s1.15 3.1 1.3 3.3c.15.2 2.25 3.5 5.5 4.9.75.3 1.35.5 1.8.65.75.25 1.45.2 2 .1.6-.1 1.8-.75 2.05-1.45s.25-1.3.2-1.45c-.1-.1-.3-.2-.6-.35zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.45 1.3 4.9L2 22l5.2-1.35C8.6 21.5 10.25 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  ),
  chevron: (sz = 16, color = 'currentColor', dir = 'right') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: dir === 'left' ? 'rotate(180deg)' : dir === 'down' ? 'rotate(90deg)' : dir === 'up' ? 'rotate(-90deg)' : 'none' }}>
      <path d="m9 6 6 6-6 6"/>
    </svg>
  ),
  filter: (sz = 16, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="21" y1="6" x2="3" y2="6"/><line x1="17" y1="12" x2="3" y2="12"/><line x1="13" y1="18" x2="3" y2="18"/>
    </svg>
  ),
  close: (sz = 18, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
    </svg>
  ),
  mic: (sz = 18, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3"/>
      <path d="M5 10v2a7 7 0 0 0 14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>
    </svg>
  ),
  star: (sz = 14, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill={color} stroke="none">
      <polygon points="12,2 15,9 22,9.5 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9.5 9,9"/>
    </svg>
  ),
  bookmark: (sz = 18, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  share: (sz = 18, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/>
    </svg>
  ),
  check: (sz = 14, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  arrow: (sz = 18, color = 'currentColor') => (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

// Pretty location string from supplier mock
function ddLocation(sup, t) {
  return `${t[sup.sector]} · ${sup.row} ${t.row} · ${t.container} ${sup.cont}`;
}

// Pretty contact buttons (large, sticky-bottom ready)
function DDContactButtons({ c, t, size = 'md', stacked = false }) {
  const h = size === 'lg' ? 54 : 48;
  const fs = size === 'lg' ? 15 : 14;
  return (
    <div style={{ display: 'flex', gap: 10, flexDirection: stacked ? 'column' : 'row' }}>
      <button style={{
        flex: 1, height: h, borderRadius: 16, border: 'none',
        background: c.text, color: c.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontSize: fs, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
      }}>
        {DDIcons.phone(17, c.bg)}
        {t.call}
      </button>
      <button style={{
        flex: 1, height: h, borderRadius: 16, border: 'none',
        background: c.whatsapp, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontSize: fs, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
        boxShadow: '0 6px 16px rgba(37,211,102,0.32)',
      }}>
        {DDIcons.wa(18, '#fff')}
        {t.whatsapp}
      </button>
    </div>
  );
}

Object.assign(window, {
  DDPhoto, DDLogo, DDBadge, DDChip, DDIcons, DDContactButtons, ddLocation,
});
