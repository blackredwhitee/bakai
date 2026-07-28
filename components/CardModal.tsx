"use client";

import { useEffect, useId, useRef } from "react";
import type { Card } from "@/content/cards";
import { rowsForCard } from "@/content/compare";
import { useEscape, useLockScroll } from "@/lib/hooks";

export default function CardModal({ card, onClose }: { card: Card | null; onClose: () => void }) {
  const open = card !== null;
  const panelRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  const restoreFocus = useRef<HTMLElement | null>(null);

  useLockScroll(open);
  useEscape(open, onClose);

  // Запоминаем триггер, переносим фокус в модалку, возвращаем при закрытии.
  useEffect(() => {
    if (!open) return;
    restoreFocus.current = document.activeElement as HTMLElement;
    const panel = panelRef.current;
    const first = panel?.querySelector<HTMLElement>("button, a[href]");
    first?.focus();

    return () => {
      restoreFocus.current?.focus?.();
    };
  }, [open]);

  // Простой focus-trap внутри панели.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!card) return null;
  const rows = rowsForCard(card.key);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(6,11,26,.72)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 560,
          maxHeight: "88vh",
          overflowY: "auto",
          background: "#fff",
          borderRadius: 24,
          padding: "clamp(24px,4vw,36px)",
          boxShadow: "0 40px 90px rgba(6,11,26,.5)",
        }}
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            cursor: "pointer",
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "#f0f3f8",
            border: "none",
            color: "#5b6479",
            fontSize: 18,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>

        <p style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#3f7bff", margin: "0 0 10px" }}>
          Подробно о карте
        </p>
        <h3 id={titleId} style={{ fontWeight: 800, fontSize: "clamp(24px,3vw,30px)", color: "#0e1730", margin: "0 0 6px", letterSpacing: "-.02em" }}>
          {card.name}
        </h3>
        <p style={{ fontSize: 15, color: "#5b6479", margin: "0 0 20px" }}>{card.tagline}</p>

        <div style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "16px 20px", borderRadius: 16, background: "#f5f7fb", marginBottom: 24 }}>
          <span style={{ fontSize: 13.5, color: "#5b6479", fontWeight: 500, marginRight: "auto" }}>Стоимость оформления</span>
          <span style={{ fontWeight: 800, fontSize: 24, color: "#0e1730" }}>{card.price}</span>
        </div>

        <div style={{ fontWeight: 700, fontSize: 15, color: "#0e1730", marginBottom: 12 }}>Привилегии и возможности</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 26 }}>
          {card.perks.map((p) => (
            <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 11, fontSize: 14.5, color: "#38415a", lineHeight: 1.45 }}>
              <span
                style={{
                  flex: "none",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#e9f7ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2e9e63",
                  fontSize: 11,
                  fontWeight: 800,
                }}
              >
                ✓
              </span>
              {p}
            </div>
          ))}
        </div>

        <div style={{ fontWeight: 700, fontSize: 15, color: "#0e1730", marginBottom: 12 }}>Условия обслуживания</div>
        <div style={{ border: "1px solid #e7ebf3", borderRadius: 14, overflow: "hidden", marginBottom: 26 }}>
          {rows.map((r) => (
            <div key={r.k} style={{ display: "flex", justifyContent: "space-between", gap: 14, padding: "12px 16px", borderBottom: "1px solid #f0f3f8", fontSize: 14 }}>
              <span style={{ color: "#7a8398" }}>{r.k}</span>
              <span style={{ color: "#0e1730", fontWeight: 600, textAlign: "right" }}>{r.v}</span>
            </div>
          ))}
        </div>

        <a
          href={card.payLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            padding: 16,
            borderRadius: 14,
            background: "linear-gradient(135deg,#4f8bff,#2f5fe0)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            boxShadow: "0 12px 30px rgba(63,123,255,.4)",
          }}
        >
          Оформить {card.name}
        </a>
        <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "#7a8398", margin: "14px 0 0", textAlign: "center" }}>{card.note}</p>
      </div>
    </div>
  );
}
