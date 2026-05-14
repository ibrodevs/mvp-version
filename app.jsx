// app.jsx — Composition: design canvas + tweaks.
// v2: radically simplified — fewer screens, one primary action per screen.

const DD_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "ru",
  "dark": false
}/*EDITMODE-END*/;

const PHONE_W = 402;
const PHONE_H = 874;

// Factory (not a component) so the resulting element's type is DCArtboard.
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

  React.useEffect(() => {
    document.body.style.background = dark ? '#16151a' : '#f0eee9';
  }, [dark]);

  return (
    <React.Fragment>
      <DesignCanvas>
        {/* ── Mobile flow ─────────────────────────────────────────── */}
        <DCSection
          id="mobile"
          title="Мобильное приложение"
          subtitle="Один экран — одно действие. Большие кнопки, без табов, без лишнего."
        >
          {phoneArtboard('onb',  '1 · Welcome',     dark, <DDOnboarding     c={c} t={t} dark={dark} />)}
          {phoneArtboard('home', '2 · Главная',     dark, <DDHomeSimple     c={c} t={t} dark={dark} />)}
          {phoneArtboard('res',  '3 · Результаты',  dark, <DDResults        c={c} t={t} dark={dark} />)}
          {phoneArtboard('prof', '4 · Поставщик',   dark, <DDSupplierProfile c={c} t={t} dark={dark} />)}
          {phoneArtboard('req',  '5 · Не нашли',    dark, <DDRequestProduct c={c} t={t} dark={dark} />)}
        </DCSection>

        {/* ── Web ─────────────────────────────────────────────────── */}
        <DCSection
          id="web"
          title="Веб-сайт · PWA"
          subtitle="Полный цикл: главная → результаты → поставщик → запрос. Одна большая поисковая строка в центре всего."
        >
          <DCArtboard id="web-home" label="1 · Главная" width={1180} height={740}>
            <ChromeWindow width={1180} height={740} tabs={[{ title: 'Dordoi Digital' }]} url="dordoi.digital">
              <DDWebHome c={c} t={t} dark={dark} />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="web-results" label="2 · Результаты" width={1180} height={740}>
            <ChromeWindow width={1180} height={740} tabs={[{ title: 'куртки женские оптом — Dordoi Digital' }]} url="dordoi.digital/search?q=куртки+женские">
              <DDWebResults c={c} t={t} dark={dark} />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="web-supplier" label="3 · Поставщик" width={1180} height={740}>
            <ChromeWindow width={1180} height={740} tabs={[{ title: 'Айдай Текстиль — Dordoi Digital' }]} url="dordoi.digital/s/aidai-tekstil">
              <DDWebSupplier c={c} t={t} dark={dark} />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="web-request" label="4 · Запрос" width={1180} height={740}>
            <ChromeWindow width={1180} height={740} tabs={[{ title: 'Найти поставщика — Dordoi Digital' }]} url="dordoi.digital/request">
              <DDWebRequest c={c} t={t} dark={dark} />
            </ChromeWindow>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Dordoi · Tweaks">
        <TweakSection label="Language" />
        <TweakRadio
          label="Язык"
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
          label="Тёмная тема"
          value={tw.dark}
          onChange={v => setTweak('dark', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DordoiApp />);
