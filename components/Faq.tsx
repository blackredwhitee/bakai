"use client";

import { useId, useState } from "react";
import { SectionHead } from "./ui";
import Reveal from "./Reveal";
import { FAQS } from "@/content/faq";

export default function Faq() {
  const [open, setOpen] = useState<number>(0); // открыт первый
  const baseId = useId();

  return (
    <section id="faq" style={{ background: "#fff", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)", borderTop: "1px solid #eef1f7" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <SectionHead kicker="Частые опасения" title="Отвечаем честно" maxWidth={820} />

        <Reveal style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const btnId = `${baseId}-btn-${i}`;
            return (
              <div key={f.q} style={{ border: "1px solid #e7ebf3", borderRadius: 16, overflow: "hidden", background: "#fff", boxShadow: "0 2px 10px rgba(16,30,70,.03)" }}>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 24px",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    fontFamily: "inherit",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 16.5, color: "#0e1730" }}>{f.q}</span>
                  <span
                    aria-hidden
                    style={{
                      flex: "none",
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isOpen ? "#3f7bff" : "#eef1f7",
                      color: isOpen ? "#fff" : "#3f7bff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 600,
                      transition: "transform .3s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                >
                  <p style={{ padding: "0 24px 22px", margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5b6479" }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
