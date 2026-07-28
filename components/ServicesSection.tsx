import Reveal from "./Reveal";
import { HERO_BENEFITS, SERVICES } from "@/content/site";

export default function ServicesSection() {
  return (
    <section
      style={{
        background: "#070d1f",
        padding: "clamp(48px,7vw,78px) clamp(20px,5vw,56px)",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      {/* 8 преимуществ */}
      <Reveal style={{ maxWidth: 1100, margin: "0 auto clamp(48px,6vw,68px)" }}>
        <div className="benefitsgrid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {HERO_BENEFITS.map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 11,
                padding: "16px 18px",
                borderRadius: 14,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                color: "rgba(228,234,248,.92)",
                fontSize: 14.5,
                fontWeight: 500,
                lineHeight: 1.35,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 21,
                  height: 21,
                  borderRadius: "50%",
                  background: "rgba(94,224,160,.16)",
                  border: "1px solid rgba(94,224,160,.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5ee0a0",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                ✓
              </span>
              {b}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Зарубежные сервисы */}
      <Reveal style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#6f86c4", margin: "0 0 10px" }}>
          Оплата зарубежных сервисов
        </p>
        <h2 style={{ fontWeight: 700, fontSize: "clamp(24px,3vw,34px)", color: "#fff", margin: "0 0 36px", letterSpacing: "-.02em" }}>
          Подходит для сервисов, недоступных из России
        </h2>
        {/* TODO(design): заменить текстовые названия на реальные SVG-логотипы сервисов */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 14 }}>
          {SERVICES.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "18px 14px",
                borderRadius: 14,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                color: "rgba(225,232,248,.85)",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
