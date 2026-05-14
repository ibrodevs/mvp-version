// web-request.jsx — Web Request Product page.

function tw_req_step1(t) { if (t === DD_I18N.kg) return 'Сурам жөнөтүңүз'; if (t === DD_I18N.en) return 'Send request'; return 'Опишите что нужно'; }
function tw_req_step2(t) { if (t === DD_I18N.kg) return 'Биз сатуучуларга жөнөтөбүз'; if (t === DD_I18N.en) return 'We notify suppliers'; return 'Мы передадим поставщикам'; }
function tw_req_step3(t) { if (t === DD_I18N.kg) return 'WhatsApp\'ка жооп күтүңүз'; if (t === DD_I18N.en) return 'Get replies on WhatsApp'; return 'Получите ответы в WhatsApp'; }
function tw_req_hero(t)  { if (t === DD_I18N.kg) return 'Биз сизге сатуучу табабыз'; if (t === DD_I18N.en) return 'We\u2019ll find a supplier for you'; return 'Мы найдём поставщика за вас'; }

function DDWebRequest({ c, t, dark, onNavigate, onSubmit, submitted = false }) {
  const { isMobile, isTablet } = useDDViewport();
  const compact = isMobile || isTablet;
  const Field = ({ label, ph, multiline = false }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: c.text, marginBottom: 8 }}>{label}</div>
      <div style={{
        background: c.bg, borderRadius: 14, padding: '14px 16px',
        border: `1.5px solid ${c.border}`,
        minHeight: multiline ? 96 : 0,
        display: 'flex', alignItems: 'flex-start',
        fontSize: 14.5, color: c.muted,
      }}>
        {ph}
      </div>
    </div>
  );

  return (
    <div style={{
      width: '100%', height: '100%', background: c.bg, color: c.text,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    }}>
      <DDWebHeader c={c} t={t} dark={dark} page="request" onNavigate={onNavigate} />

      <div style={{ flex: 1, overflow: 'auto', background: c.surface }}>
        {/* Hero */}
        <div style={{
          padding: compact ? '24px 16px 20px' : '28px 40px 24px',
          maxWidth: 1100, margin: '0 auto', width: '100%', boxSizing: 'border-box',
          textAlign: 'center', position: 'relative',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 12px', borderRadius: 999,
            background: c.accent, color: '#1F1500',
            fontSize: 11, fontWeight: 800, letterSpacing: 0.4, textTransform: 'uppercase',
            marginBottom: 14,
          }}>
            ? {t.notfound}
          </div>
          <h1 style={{
            margin: 0, fontSize: isMobile ? 32 : isTablet ? 36 : 40, fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.05,
            color: c.text, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
          }}>{tw_req_hero(t)}</h1>
          <p style={{
            margin: '14px auto 0', fontSize: isMobile ? 15 : 16, color: c.muted, lineHeight: 1.45, maxWidth: 540,
          }}>{t.notfound_sub}</p>
        </div>

        {/* Split: form left, info right */}
        <div style={{
          padding: compact ? '4px 16px 28px' : '4px 40px 28px',
          maxWidth: 1100, margin: '0 auto', width: '100%', boxSizing: 'border-box',
          display: 'grid', gridTemplateColumns: compact ? '1fr' : '1.4fr 1fr', gap: 24,
        }}>
          {/* Form card */}
          <div style={{
            background: c.bg, borderRadius: 22, padding: 28,
            border: `1px solid ${c.border}`,
            boxShadow: dark ? 'none' : '0 4px 14px rgba(17,24,39,0.05)',
          }}>
            <Field label={t.rq_name} ph={t.rq_name_ph} multiline />
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: 14 }}>
              <Field label={t.rq_qty} ph={t.rq_qty_ph} />
              <Field label={t.rq_budget} ph={t.rq_budget_ph} />
            </div>
            <Field label={t.rq_phone} ph="+996 ___ __ __ __" />

            {/* WhatsApp affordance */}
            <div style={{
              display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: 12,
              flexDirection: isMobile ? 'column' : 'row',
              padding: '12px 14px', background: c.surface, borderRadius: 14,
              marginBottom: 16,
            }}>
              {DDIcons.wa(20, c.whatsapp)}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: c.text }}>
                  {t === DD_I18N.kg ? 'WhatsApp аркылуу байланышуу' : t === DD_I18N.en ? 'Contact via WhatsApp' : 'Связаться через WhatsApp'}
                </div>
                <div style={{ fontSize: 11.5, color: c.muted, marginTop: 1 }}>
                  {t === DD_I18N.kg ? 'Сатуучулар чатка жооп беришет' : t === DD_I18N.en ? 'Suppliers reply directly in chat' : 'Поставщики ответят в чат'}
                </div>
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

            {/* CTA */}
            <button
              onClick={() => onSubmit && onSubmit()}
              style={{
              width: '100%', height: 58, borderRadius: 18,
              background: c.accent, color: '#1F1500', border: 'none',
              fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              boxShadow: '0 12px 26px rgba(250,204,21,0.4)',
            }}>
              {t.rq_cta}
              {DDIcons.arrow(20, '#1F1500')}
            </button>
            <p style={{ margin: '10px 0 0', fontSize: 12, color: submitted ? c.primary : c.muted, textAlign: 'center', fontWeight: submitted ? 700 : 400 }}>
              {submitted ? (t === DD_I18N.en ? 'Request sent. We will contact you on WhatsApp.' : t === DD_I18N.kg ? 'Сурам жөнөтүлдү. Биз сизге WhatsApp аркылуу жазабыз.' : 'Заявка отправлена. Мы свяжемся с вами в WhatsApp.') : t.rq_disclaimer}
            </p>
          </div>

          {/* How it works */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { n: 1, lbl: tw_req_step1(t), icon: DDIcons.search(18, '#fff'), bg: c.primary },
              { n: 2, lbl: tw_req_step2(t), icon: DDIcons.arrow(18, '#fff'),  bg: c.text },
              { n: 3, lbl: tw_req_step3(t), icon: DDIcons.wa(18, '#fff'),     bg: c.whatsapp },
            ].map((s, i) => (
              <div key={i} style={{
                background: c.bg, borderRadius: 18, padding: '16px 18px',
                border: `1px solid ${c.border}`,
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 13, background: s.bg, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  position: 'relative',
                }}>
                  {s.icon}
                  <div style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 22, height: 22, borderRadius: '50%', background: c.accent, color: '#1F1500',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800,
                  }}>{s.n}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: c.text, lineHeight: 1.25 }}>{s.lbl}</div>
                </div>
              </div>
            ))}

            {/* Trust card */}
            <div style={{
              marginTop: 4,
              background: c.primarySoft, borderRadius: 18, padding: '14px 18px',
              border: `1px solid ${dark ? c.border : 'transparent'}`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: c.primary, marginBottom: 6 }}>
                {t === DD_I18N.kg ? 'Эмне үчүн биз?' : t === DD_I18N.en ? 'Why us?' : 'Почему мы?'}
              </div>
              <div style={{ fontSize: 12.5, color: c.text, lineHeight: 1.5 }}>
                {t === DD_I18N.kg
                  ? '14 000 контейнерди билебиз. Сиз бир суроо жасайсыз, биз бир нече сатуучудан баа алабыз.'
                  : t === DD_I18N.en
                  ? 'We know 14,000 containers at Dordoi. You send one request, we collect quotes from multiple suppliers for you.'
                  : 'Мы знаем 14 000 контейнеров Дордоя. Вы отправляете один запрос — мы собираем предложения от нескольких поставщиков.'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DDWebFooter c={c} t={t} dark={dark} />
    </div>
  );
}

Object.assign(window, {
  DDWebRequest, tw_req_step1, tw_req_step2, tw_req_step3, tw_req_hero,
});
