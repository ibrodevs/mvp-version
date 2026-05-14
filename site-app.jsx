const SITE_DEFAULTS = {
  lang: 'ru',
  dark: false,
  route: 'home',
  query: 'куртки женские оптом',
  requestSent: false,
};

function readHashRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash === 'results' || hash === 'supplier' || hash === 'request') {
    return hash;
  }
  return 'home';
}

function SiteApp() {
  const [state, setState] = React.useState(() => ({
    ...SITE_DEFAULTS,
    route: readHashRoute(),
  }));

  const c = DD_PALETTE[state.dark ? 'dark' : 'light'];
  const t = DD_I18N[state.lang] || DD_I18N.ru;

  React.useEffect(() => {
    document.body.style.background = state.dark ? '#0A0F1F' : '#FFFFFF';
  }, [state.dark]);

  React.useEffect(() => {
    const syncFromHash = () => {
      const route = readHashRoute();
      setState(prev => (prev.route === route ? prev : { ...prev, route }));
    };
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const navigate = React.useCallback((route) => {
    window.location.hash = route === 'home' ? '' : route;
    setState(prev => ({ ...prev, route }));
  }, []);

  const search = React.useCallback((query) => {
    setState(prev => ({ ...prev, query: query || prev.query, requestSent: false }));
    navigate('results');
  }, [navigate]);

  const submitRequest = React.useCallback(() => {
    setState(prev => ({ ...prev, requestSent: true }));
  }, []);

  const toggleTheme = React.useCallback(() => {
    setState(prev => ({ ...prev, dark: !prev.dark }));
  }, []);

  const cycleLang = React.useCallback(() => {
    setState(prev => {
      const next = prev.lang === 'ru' ? 'kg' : prev.lang === 'kg' ? 'en' : 'ru';
      return { ...prev, lang: next };
    });
  }, []);

  const pageProps = {
    c,
    t,
    dark: state.dark,
    query: state.query,
    onNavigate: navigate,
    onSearch: search,
  };

  let page = <DDWebHome {...pageProps} />;
  if (state.route === 'results') {
    page = <DDWebResults {...pageProps} />;
  } else if (state.route === 'supplier') {
    page = <DDWebSupplier {...pageProps} />;
  } else if (state.route === 'request') {
    page = <DDWebRequest {...pageProps} submitted={state.requestSent} onSubmit={submitRequest} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: c.bg }}>
      <div style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 50,
        display: 'flex',
        gap: 10,
      }}>
        <button
          onClick={cycleLang}
          style={{
            height: 42,
            padding: '0 14px',
            borderRadius: 999,
            border: `1px solid ${c.border}`,
            background: c.surface,
            color: c.text,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          {state.lang.toUpperCase()}
        </button>
        <button
          onClick={toggleTheme}
          style={{
            height: 42,
            padding: '0 14px',
            borderRadius: 999,
            border: `1px solid ${c.border}`,
            background: c.surface,
            color: c.text,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          {state.dark ? 'Light' : 'Dark'}
        </button>
      </div>
      {page}
    </div>
  );
}

const siteRoot = ReactDOM.createRoot(document.getElementById('root'));
siteRoot.render(<SiteApp />);
