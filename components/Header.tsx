"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/content/site";
import { useEscape, useLockScroll } from "@/lib/hooks";
import { asset } from "@/lib/asset";

const CTA_GRADIENT = "linear-gradient(135deg,#4f8bff,#2f5fe0)";

export default function Header() {
  const [open, setOpen] = useState(false);
  useLockScroll(open);
  useEscape(open, () => setOpen(false));

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "16px clamp(20px,5vw,56px)",
        background: "rgba(9,15,32,.72)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,.07)",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
        <Image src={asset("/talkbank-logo.svg")} alt="TalkBank" width={132} height={30} style={{ height: 30, width: "auto", display: "block" }} priority />
      </a>

      <div className="navlinks" style={{ display: "flex", alignItems: "center", gap: 30 }}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} style={{ textDecoration: "none", color: "rgba(255,255,255,.78)", fontSize: 15, fontWeight: 500 }}>
            {l.label}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <a
          href="#apply"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 22px",
            borderRadius: 12,
            background: CTA_GRADIENT,
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            boxShadow: "0 8px 24px rgba(63,123,255,.4)",
            whiteSpace: "nowrap",
          }}
        >
          Оставить заявку
        </a>
        <button
          type="button"
          className="burger"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.16)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <Menu size={22} aria-hidden />
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(6,11,26,.72)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "min(320px,86vw)",
              background: "#0b1329",
              borderLeft: "1px solid rgba(255,255,255,.08)",
              boxShadow: "-30px 0 70px rgba(4,8,20,.5)",
              padding: "20px clamp(20px,6vw,28px)",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.16)",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <X size={22} aria-hidden />
              </button>
            </div>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,.86)",
                  fontSize: 18,
                  fontWeight: 600,
                  padding: "14px 12px",
                  borderRadius: 12,
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 12,
                textDecoration: "none",
                textAlign: "center",
                padding: "15px",
                borderRadius: 14,
                background: CTA_GRADIENT,
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 14px 34px rgba(63,123,255,.4)",
              }}
            >
              Оставить заявку
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
