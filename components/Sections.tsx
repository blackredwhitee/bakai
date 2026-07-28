import Image from "next/image";
import Reveal from "./Reveal";
import { SectionHead, Check } from "./ui";
import { Icon } from "./icons";
import { BankTile } from "./brands";
import WorldMap from "./WorldMap";
import { asset } from "@/lib/asset";
import {
  COVERAGE, WHY_KG, INCLUDED, STEPS, DOCUMENTS, BANKS, CURRENCIES,
  APP_FEATURES, AUDIENCES, SECURITY, CLIENT_GETS,
} from "@/content/site";

/* ---------- 9. География (#coverage) ---------- */
export function CoverageSection() {
  return (
    <section
      id="coverage"
      style={{
        position: "relative",
        background: "radial-gradient(120% 100% at 25% 0,#13265c 0%,#0b1736 48%,#070d1f 100%)",
        padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          width: 620,
          height: 620,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(79,139,255,.2),transparent 62%)",
          filter: "blur(34px)",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead
          theme="dark"
          kicker="Где работает карта"
          title="Оплата по всему миру"
          subtitle="Принимается везде, где работают Visa и Mastercard — в магазинах, онлайн-сервисах, отелях и банкоматах."
        />
        <Reveal
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            background: "linear-gradient(180deg,rgba(13,26,58,.6),rgba(7,13,31,.6))",
            border: "1px solid rgba(127,160,232,.16)",
            padding: "clamp(28px,4vw,44px)",
            boxShadow: "0 24px 60px rgba(0,0,0,.4)",
          }}
        >
          {/* Реальная карта мира с подсветкой стран покрытия */}
          <div style={{ position: "relative", maxWidth: 860, margin: "0 auto 22px" }}>
            <WorldMap />
          </div>
          {/* Легенда */}
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center", marginBottom: 24 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#9fb0d4", fontSize: 13, fontWeight: 500 }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: "rgba(94,224,160,.7)" }} /> Карта принимается
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#9fb0d4", fontSize: 13, fontWeight: 500 }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: "rgba(235,70,70,.6)" }} /> Не работает (РФ)
            </span>
          </div>
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {COVERAGE.map((c) => (
              <div
                key={c.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "11px 18px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(127,160,232,.22)",
                }}
              >
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5ee0a0", boxShadow: "0 0 10px #5ee0a0", flex: "none" }} />
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 15.5 }}>{c.name}</span>
                <span style={{ color: "#7f93bf", fontSize: 12.5, fontWeight: 500 }}>{c.sub}</span>
              </div>
            ))}
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 26 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 22px", borderRadius: 14, background: "rgba(235,70,70,.1)", border: "1px solid rgba(235,70,70,.35)" }}>
              <span style={{ flex: "none", width: 24, height: 24, borderRadius: "50%", background: "rgba(235,70,70,.18)", border: "1px solid rgba(235,70,70,.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff8a8a", fontWeight: 800, fontSize: 13 }}>
                ✕
              </span>
              <span style={{ color: "#ffc9c9", fontWeight: 600, fontSize: 15 }}>Не работает на территории РФ</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 7. Почему карты Кыргызстана ---------- */
export function WhyKyrgyzstanSection() {
  return (
    <section style={{ background: "#f5f7fb", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="Почему карты Кыргызстана" title="Полноценный зарубежный счёт — удалённо" />
        <Reveal className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {WHY_KG.map((w) => (
            <div key={w.t} style={{ background: "#fff", borderRadius: 18, padding: 24, border: "1px solid #e7ebf3", boxShadow: "0 4px 16px rgba(16,30,70,.04)" }}>
              <div style={{ width: 44, height: 44, borderRadius: 13, background: "linear-gradient(135deg,#eaf1ff,#dbe7ff)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon name={w.icon} color="#2f5fe0" size={22} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", margin: "0 0 8px" }}>
                <h3 style={{ fontWeight: 700, fontSize: 16.5, color: "#0e1730", margin: 0, lineHeight: 1.25 }}>{w.t}</h3>
                {w.isNew && (
                  <span style={{ flex: "none", padding: "3px 9px", borderRadius: 100, background: "linear-gradient(135deg,#4f8bff,#7b6bff)", color: "#fff", fontSize: 10.5, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase" }}>
                    Новинка
                  </span>
                )}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "#5b6479", margin: 0 }}>{w.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 8. Что входит в стоимость ---------- */
export function IncludedSection() {
  return (
    <section style={{ background: "#fff", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)", borderTop: "1px solid #eef1f7" }}>
      <div className="splitgrid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "clamp(36px,5vw,64px)", alignItems: "center" }}>
        <Reveal>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#3f7bff", margin: "0 0 12px" }}>Что входит в стоимость</p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3.6vw,42px)", color: "#0e1730", margin: "0 0 18px", letterSpacing: "-.025em" }}>Пакет «под ключ» — без скрытых доплат</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#5b6479", margin: "0 0 24px" }}>Одна стоимость покрывает весь путь — от проверки документов до получения карты в руки.</p>
          <a href="#cards" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 28px", borderRadius: 13, background: "#0e1730", color: "#fff", fontWeight: 600, fontSize: 15.5 }}>Выбрать карту →</a>
        </Reveal>
        <Reveal style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {INCLUDED.map((it) => (
            <div key={it} style={{ display: "flex", alignItems: "center", gap: 13, background: "#f7f9fc", border: "1px solid #eef1f7", borderRadius: 14, padding: "16px 18px" }}>
              <span style={{ flex: "none", width: 26, height: 26, borderRadius: "50%", background: "rgba(63,123,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3f7bff", fontWeight: 800, fontSize: 13 }}>✓</span>
              <span style={{ color: "#0e1730", fontWeight: 600, fontSize: 14.5 }}>{it}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 8 (таймлайн). 8 шагов до карты ---------- */
export function ProcessSection() {
  return (
    <section id="steps" style={{ background: "#f5f7fb", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="Как проходит оформление" title="8 шагов до карты в руках" />
        <Reveal className="grid4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {STEPS.map((s, i) => (
            <div key={s.t} style={{ position: "relative", background: "#fff", borderRadius: 18, padding: 24, border: "1px solid #e7ebf3", boxShadow: "0 4px 16px rgba(16,30,70,.04)" }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#fff", width: 38, height: 38, borderRadius: 11, background: "linear-gradient(135deg,#4f8bff,#2f5fe0)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: "0 8px 20px rgba(63,123,255,.35)" }}>{i + 1}</div>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0e1730", margin: "0 0 6px" }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "#5b6479", margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </Reveal>
        <Reveal style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 26px", borderRadius: 16, background: "#fff", border: "1px solid #e7ebf3", boxShadow: "0 8px 26px rgba(16,30,70,.06)" }}>
            <span style={{ fontWeight: 800, fontSize: 24, color: "#0e1730" }}>10–14</span>
            <span style={{ fontSize: 14.5, color: "#5b6479", lineHeight: 1.4 }}>
              рабочих дней — средний срок выпуска.<br />
              <span style={{ color: "#9aa3b5", fontSize: 13 }}>Срок ориентировочный.</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 10. Документы ---------- */
export function DocumentsSection() {
  return (
    <section style={{ background: "#fff", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)", borderTop: "1px solid #eef1f7" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="Документы" title="Что нужно для оформления" />
        <Reveal className="grid6" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}>
          {DOCUMENTS.map((d) => (
            <div key={d.t} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center", background: "#f7f9fc", border: "1px solid #eef1f7", borderRadius: 16, padding: "22px 14px" }}>
              <span style={{ width: 46, height: 46, borderRadius: 13, background: "#fff", border: "1px solid #e7ebf3", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(16,30,70,.05)" }}>
                <Icon name={d.icon} color="#2f5fe0" size={20} />
              </span>
              <span style={{ color: "#0e1730", fontWeight: 600, fontSize: 14 }}>{d.t}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 10. Пополнение + Валюты ---------- */
export function TopUpCurrenciesSection() {
  return (
    <section style={{ background: "#f5f7fb", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)" }}>
      <div className="splitgrid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <Reveal style={{ background: "#fff", borderRadius: 22, padding: "clamp(28px,3.5vw,40px)", border: "1px solid #e7ebf3", boxShadow: "0 8px 26px rgba(16,30,70,.05)" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#3f7bff", margin: "0 0 12px" }}>Пополнение из РФ</p>
          <h3 style={{ fontWeight: 700, fontSize: "clamp(22px,2.5vw,28px)", color: "#0e1730", margin: "0 0 14px", letterSpacing: "-.02em" }}>Через СБП и банковские переводы</h3>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "#5b6479", margin: "0 0 24px" }}>Пополняйте счёт из привычных российских банков — деньги доходят на зарубежный счёт.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {BANKS.map((b) => (
              <BankTile key={b} name={b} />
            ))}
          </div>
        </Reveal>
        <Reveal style={{ background: "#fff", borderRadius: 22, padding: "clamp(28px,3.5vw,40px)", border: "1px solid #e7ebf3", boxShadow: "0 8px 26px rgba(16,30,70,.05)" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#3f7bff", margin: "0 0 12px" }}>Валюты</p>
          <h3 style={{ fontWeight: 700, fontSize: "clamp(22px,2.5vw,28px)", color: "#0e1730", margin: "0 0 20px", letterSpacing: "-.02em" }}>Мультивалютные счета</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {CURRENCIES.map((cu) => (
              <div key={cu.c} style={{ display: "flex", alignItems: "center", gap: 11, background: "#f7f9fc", border: "1px solid #eef1f7", borderRadius: 13, padding: "13px 14px" }}>
                <span style={{ flex: "none", width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#eaf1ff,#dbe7ff)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#2f5fe0" }}>{cu.s}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0e1730", lineHeight: 1.1 }}>{cu.c}</div>
                  <div style={{ fontSize: 11.5, color: "#9aa3b5" }}>{cu.n}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 11. Мобильное приложение ---------- */
export function MobileAppSection() {
  return (
    <section style={{ position: "relative", background: "radial-gradient(120% 100% at 80% 0,#13265c 0%,#0b1736 48%,#070d1f 100%)", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(120,90,255,.22),transparent 62%)", filter: "blur(34px)", pointerEvents: "none" }} />
      <div className="splitgrid" style={{ position: "relative", maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(36px,5vw,64px)", alignItems: "center" }}>
        <Reveal>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#7fa0e8", margin: "0 0 12px" }}>Мобильное приложение</p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3.8vw,44px)", color: "#fff", margin: "0 0 18px", letterSpacing: "-.025em" }}>Весь банк — в вашем телефоне</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(220,228,245,.78)", margin: "0 0 26px" }}>Баланс, переводы, мультивалютные счета, SWIFT, выписки и лимиты — управляйте всем удалённо, с российского номера.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {APP_FEATURES.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 13 }}>
                <Check size={24} />
                <span style={{ color: "#e4eaf8", fontSize: 15.5, fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal style={{ display: "flex", justifyContent: "center" }}>
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div style={{ position: "relative", width: 300, maxWidth: "80vw", aspectRatio: "300 / 610", borderRadius: 42, background: "linear-gradient(150deg,#1a1d26,#0a0c12)", padding: 11, boxShadow: "0 40px 80px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08),0 0 60px rgba(79,139,255,.2)" }}>
      <div style={{ position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)", width: 104, height: 26, borderRadius: 14, background: "#000", zIndex: 3 }} />
      <div style={{ width: "100%", height: "100%", borderRadius: 32, overflow: "hidden", background: "linear-gradient(180deg,#0e1730,#0a1326)", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "40px 20px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#9fb0d4", fontSize: 11, marginBottom: 3 }}>Общий баланс</div>
            <div style={{ fontWeight: 800, fontSize: 25, color: "#fff" }}>$ 12 480.50</div>
          </div>
          <span style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#4f8bff,#2f5fe0)" }} />
        </div>
        <div style={{ padding: "0 20px", display: "flex", gap: 9, marginBottom: 16 }}>
          {[["USD", "8 120"], ["EUR", "3 240"], ["KGS", "94 000"]].map(([c, v]) => (
            <div key={c} style={{ flex: 1, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 13, padding: 11, textAlign: "center" }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{c}</div>
              <div style={{ color: "#9fb0d4", fontSize: 11 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ margin: "0 20px 16px", background: "linear-gradient(135deg,#23262c,#0a0c12)", borderRadius: 14, padding: 15, boxShadow: "0 8px 20px rgba(0,0,0,.4)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <span style={{ color: "#d6b266", fontSize: 11, fontWeight: 700, letterSpacing: ".06em" }}>VISA INFINITE</span>
            <span style={{ display: "flex" }}>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#eb001b" }} />
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#f79e1b", marginLeft: -7, mixBlendMode: "screen" }} />
            </span>
          </div>
          <div style={{ color: "rgba(255,255,255,.9)", fontSize: 13, letterSpacing: ".12em" }}>•••• 7704</div>
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: "22px 22px 0 0", marginTop: "auto", padding: "18px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <span style={{ fontWeight: 700, fontSize: 13.5, color: "#0e1730" }}>Операции</span>
            <span style={{ fontSize: 11, color: "#3f7bff", fontWeight: 600 }}>SWIFT ↗</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 13 }}>
            <span style={{ width: 32, height: 32, borderRadius: 10, background: "#eaf1ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2f5fe0", fontWeight: 800, fontSize: 13 }}>↑</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0e1730" }}>SWIFT-перевод</div>
              <div style={{ fontSize: 10.5, color: "#9aa3b5" }}>Сегодня</div>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#0e1730" }}>−$1 200</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <span style={{ width: 32, height: 32, borderRadius: 10, background: "#e9f7ef", display: "flex", alignItems: "center", justifyContent: "center", color: "#16996e", fontWeight: 800, fontSize: 13 }}>↓</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0e1730" }}>Пополнение СБП</div>
              <div style={{ fontSize: 10.5, color: "#9aa3b5" }}>Вчера</div>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#16996e" }}>+$3 000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 12. Кому подойдут ---------- */
export function AudienceSection() {
  return (
    <section style={{ background: "#fff", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="Кому подойдут карты" title="Создано под ваши задачи" />
        <Reveal className="grid5" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
          {AUDIENCES.map((a) => (
            <div key={a.t} style={{ background: "#f7f9fc", border: "1px solid #eef1f7", borderRadius: 18, padding: "24px 20px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 13, background: "linear-gradient(135deg,#4f8bff,#2f5fe0)", marginBottom: 16, boxShadow: "0 8px 20px rgba(63,123,255,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={a.icon} color="#fff" size={22} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 15.5, color: "#0e1730", margin: "0 0 7px", lineHeight: 1.25 }}>{a.t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "#5b6479", margin: 0 }}>{a.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 13. Безопасность ---------- */
export function SecuritySection() {
  return (
    <section style={{ background: "#f5f7fb", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="Почему оформление безопасно" title="Официально и на ваше имя" />
        <Reveal className="grid3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {SECURITY.map((s) => (
            <div key={s.t} style={{ display: "flex", gap: 15, background: "#fff", border: "1px solid #e7ebf3", borderRadius: 18, padding: 24, boxShadow: "0 4px 16px rgba(16,30,70,.04)" }}>
              <span style={{ flex: "none", width: 42, height: 42, borderRadius: 12, background: "rgba(22,153,110,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={s.icon} color="#16996e" size={21} />
              </span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0e1730", margin: "0 0 6px", lineHeight: 1.25 }}>{s.t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "#5b6479", margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 15. После оформления вы получаете ---------- */
export function ClientGetsSection() {
  return (
    <section style={{ background: "#fff", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="Что получает клиент" title="После оформления вы получаете" />

        {/* Реальные фото конверта и карты */}
        <Reveal className="photopair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 22 }}>
          <PhotoTile src="/photos/photo-envelope.jpg" alt="Премиальный конверт с картой" caption="Премиальный конверт" />
          <PhotoTile src="/photos/photo-card.jpg" alt="Именная карта на руках" caption="Карта на руках" />
        </Reveal>

        <Reveal className="grid4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {CLIENT_GETS.map((c) => (
            <div key={c.t} style={{ textAlign: "center", background: "#f7f9fc", border: "1px solid #eef1f7", borderRadius: 18, padding: "26px 18px" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#eaf1ff,#dbe7ff)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Icon name={c.icon} color="#2f5fe0" size={23} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0e1730", margin: "0 0 6px" }}>{c.t}</h3>
              <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#5b6479", margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function PhotoTile({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", minHeight: 300, background: "#f0f3f8" }}>
      <Image src={asset(src)} alt={alt} fill loading="lazy" sizes="(max-width: 620px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      <span style={{ position: "absolute", bottom: 16, left: 16, padding: "7px 14px", borderRadius: 100, background: "rgba(10,17,40,.72)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", color: "#eaf0ff", fontSize: 12.5, fontWeight: 600 }}>
        {caption}
      </span>
    </div>
  );
}
