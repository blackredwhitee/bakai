"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import CardVisual from "./CardVisual";
import CardModal from "./CardModal";
import { CARDS, type Card, type CardKey } from "@/content/cards";

export default function CardsSection() {
  const [openKey, setOpenKey] = useState<CardKey | null>(null);
  const activeCard = CARDS.find((c) => c.key === openKey) ?? null;

  return (
    <section id="cards" style={{ background: "#f5f7fb", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: 680, margin: "0 auto clamp(40px,5vw,60px)", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#3f7bff", margin: "0 0 12px" }}>
            Линейка карт
          </p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,4vw,46px)", color: "#0e1730", margin: "0 0 16px", letterSpacing: "-.025em" }}>
            Реальные банковские продукты
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#5b6479", margin: 0 }}>
            Именные карты Visa и Mastercard с выпуском в Кыргызстане. Выберите уровень — от базовой
            премиальной до флагманской.
          </p>
        </Reveal>

        <div className="cardsgrid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {CARDS.map((card) => (
            <CardTile key={card.key} card={card} onDetails={() => setOpenKey(card.key)} />
          ))}
        </div>
      </div>

      <CardModal card={activeCard} onClose={() => setOpenKey(null)} />
    </section>
  );
}

function CardTile({ card, onDetails }: { card: Card; onDetails: () => void }) {
  const dark = !!card.flagship;
  return (
    <Reveal
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: dark ? "linear-gradient(180deg,#0e1730,#0a1228)" : "#fff",
        borderRadius: 22,
        padding: 22,
        border: dark ? "1px solid rgba(79,139,255,.35)" : "1px solid #e7ebf3",
        boxShadow: dark
          ? "0 24px 56px rgba(11,23,54,.35),0 0 50px rgba(79,139,255,.18)"
          : "0 4px 18px rgba(16,30,70,.05)",
      }}
    >
      <CardVisual card={card} />

      <div style={{ marginTop: 18, flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontWeight: 700, fontSize: 19, color: dark ? "#fff" : "#0e1730", margin: "0 0 16px" }}>{card.name}</h3>

        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 14 }}>
          <span style={{ fontWeight: 800, fontSize: 26, color: dark ? "#fff" : "#0e1730" }}>
            {card.price.replace(" ₽", "")}
          </span>
          <span style={{ fontSize: 16, color: dark ? "#9fb0d4" : "#5b6479" }}>₽</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            paddingTop: 14,
            borderTop: dark ? "1px solid rgba(255,255,255,.1)" : "1px solid #eef1f7",
            marginBottom: 18,
          }}
        >
          {card.specs.map((s) => (
            <div key={s.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
              <span style={{ color: dark ? "#9fb0d4" : "#7a8398" }}>{s.label}</span>
              <span style={{ color: dark ? "#fff" : "#0e1730", fontWeight: 600 }}>{s.value}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 9 }}>
          <a
            href={card.payLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              textAlign: "center",
              padding: 13,
              borderRadius: 12,
              background: dark ? "linear-gradient(135deg,#4f8bff,#2f5fe0)" : "#0e1730",
              color: "#fff",
              fontWeight: dark ? 700 : 600,
              fontSize: 15,
              boxShadow: dark ? "0 12px 28px rgba(63,123,255,.45)" : "none",
            }}
          >
            Оформить
          </a>
          <button
            type="button"
            onClick={onDetails}
            style={{
              cursor: "pointer",
              fontFamily: "inherit",
              textAlign: "center",
              padding: 12,
              borderRadius: 12,
              background: dark ? "rgba(255,255,255,.07)" : "#fff",
              border: dark ? "1px solid rgba(255,255,255,.18)" : "1px solid #dfe5f0",
              color: dark ? "#fff" : "#0e1730",
              fontWeight: 600,
              fontSize: 14.5,
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
    </Reveal>
  );
}
