import Reveal from "./Reveal";
import ApplyForm from "./ApplyForm";
import { Check } from "./ui";
import { SUPPORT_TG } from "@/content/site";

const BULLETS = [
  "Ответ в течение рабочего дня",
  "Консультация без обязательств",
  "Средний срок выпуска — 10–14 рабочих дней",
];

export default function FinalCta() {
  return (
    <section
      id="apply"
      style={{
        position: "relative",
        background: "radial-gradient(110% 120% at 50% 0,#1b3370 0%,#0c1a40 45%,#070d1f 100%)",
        padding: "clamp(72px,10vw,120px) clamp(20px,5vw,56px)",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        className="anim-glow"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          width: 680,
          height: 680,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(79,139,255,.3),transparent 62%)",
          filter: "blur(36px)",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
      <Reveal
        className="splitgrid"
        style={{
          position: "relative",
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px,5vw,64px)",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(30px,4.2vw,48px)", color: "#fff", margin: "0 0 18px", letterSpacing: "-.03em", lineHeight: 1.08 }}>
            Оформите международную карту уже сегодня
          </h2>
          <p style={{ fontSize: "clamp(16px,1.5vw,19px)", lineHeight: 1.6, color: "rgba(220,228,245,.82)", margin: "0 0 28px" }}>
            Оплата онлайн, доставка по России и сопровождение на каждом этапе. Оставьте заявку —
            менеджер свяжется с вами и поможет выбрать карту.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 30 }}>
            {BULLETS.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 11, color: "rgba(228,234,248,.9)", fontSize: 15 }}>
                <Check />
                {b}
              </div>
            ))}
          </div>
          <a
            href={SUPPORT_TG}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 9, padding: "15px 28px", borderRadius: 14, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.18)", color: "#fff", fontWeight: 600, fontSize: 15.5 }}
          >
            Задать вопрос в Telegram
          </a>
        </div>

        <ApplyForm />
      </Reveal>
    </section>
  );
}
