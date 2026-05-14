// app.jsx — Top-level composition: design canvas + tweaks.

const DD_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "ru",
  "dark": false
}/*EDITMODE-END*/;

const PHONE_W = 402;
const PHONE_H = 874;

// Factory (not a component) so the resulting element's type is DCArtboard —
// DCSection filters children by type identity and will skip wrapper components.
function phoneArtboard(id, label, dark, body) {
  return (
    <DCArtboard id={id} label={label} width={PHONE_W} height={PHONE_H} key={id}>
      <IOSDevice width={PHONE_W} height={PHONE_H} dark={dark}>
        {body}
      </IOSDevice>
    </DCArtboard>
  );
}

function DordoiApp() {
  const [tw, setTweak] = useTweaks(DD_DEFAULTS);
  const c = DD_PALETTE[tw.dark ? 'dark' : 'light'];
  const t = DD_I18N[tw.lang] || DD_I18N.ru;
  const dark = tw.dark;

  // Canvas backdrop tracks dark mode subtly
  React.useEffect(() => {
    document.body.style.background = dark ? '#16151a' : '#f0eee9';
  }, [dark]);

  return (
    <React.Fragment>
      <DesignCanvas>
        {/* ── Onboarding + Home ────────────────────────────────────── */}
        <DCSection
          id="home"
          title="Onboarding · Home"
          subtitle="Splash + 3 home layouts. Pick the direction that fits the brand voice."
        >
          {phoneArtboard('onb', 'Onboarding',        dark, <DDOnboarding     c={c} t={t} dark={dark} />)}
          {phoneArtboard('hm1', 'Home · Minimal',    dark, <DDHomeMinimal    c={c} t={t} dark={dark} />)}
          {phoneArtboard('hm2', 'Home · Categories', dark, <DDHomeCategories c={c} t={t} dark={dark} />)}
          {phoneArtboard('hm3', 'Home · Discovery',  dark, <DDHomeDiscovery  c={c} t={t} dark={dark} />)}
        </DCSection>

        {/* ── Search Results — 2 card styles ───────────────────────── */}
        <DCSection
          id="results"
          title="Search results"
          subtitle="Two card systems for the same query. Compact = scannable; Photo-led = decisive."
        >
          {phoneArtboard('r1', 'Compact card',   dark, <DDResultsCompact c={c} t={t} dark={dark} />)}
          {phoneArtboard('r2', 'Photo-led card', dark, <DDResultsPhoto   c={c} t={t} dark={dark} />)}
        </DCSection>

        {/* ── Supplier Profile + Request Product ───────────────────── */}
        <DCSection
          id="detail"
          title="Profile · Request"
          subtitle="Supplier detail with sticky Call / WhatsApp, and the “request a product” fallback flow."
        >
          {phoneArtboard('prof', 'Supplier profile', dark, <DDSupplierProfile c={c} t={t} dark={dark} />)}
          {phoneArtboard('req',  'Request product',  dark, <DDRequestProduct  c={c} t={t} dark={dark} />)}
        </DCSection>

        {/* ── Responsive Web ───────────────────────────────────────── */}
        <DCSection
          id="web"
          title="Responsive web · PWA"
          subtitle="Hero search on the left, live results panel on the right. Mobile-first scales gracefully up to desktop."
        >
          <DCArtboard id="web1" label="Desktop / PWA" width={1180} height={740}>
            <ChromeWindow
              width={1180}
              height={740}
              tabs={[{ title: 'Dordoi Digital — поиск' }]}
              url={`dordoi.digital/search?q=куртки+женские`}
            >
              <DDWebSearch c={c} t={t} dark={dark} />
            </ChromeWindow>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      {/* ── Tweaks Panel ────────────────────────────────────────── */}
      <TweaksPanel title="Dordoi · Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="UI language"
          value={tw.lang}
          options={[
            { value: 'ru', label: 'RU' },
            { value: 'kg', label: 'KG' },
            { value: 'en', label: 'EN' },
          ]}
          onChange={v => setTweak('lang', v)}
        />
        <TweakSection label="Appearance" />
        <TweakToggle
          label="Dark mode"
          value={tw.dark}
          onChange={v => setTweak('dark', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DordoiApp />);
