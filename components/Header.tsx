"use client";

import { useState } from "react";
import { Container, PrimaryButton, SecondaryButton, SUPPORT_TG, PRIMARY_CARD_LINK } from "./ui";

const NAV = [
  { href: "#cards", label: "Карты" },
  { href: "#compare", label: "Сравнение" },
  { href: "#coverage", label: "Где работает" },
  { href: "#process", label: "Как оформить" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand-navy)] text-sm font-bold text-white">
            KG
          </span>
          <span className="text-base md:text-lg font-bold text-[var(--brand-navy)]">
            Карты Кыргызстана
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[var(--brand-blue)] transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <SecondaryButton href={SUPPORT_TG} className="px-5 py-2.5 text-sm">
            Задать вопрос
          </SecondaryButton>
          <PrimaryButton href={PRIMARY_CARD_LINK} className="px-5 py-2.5 text-sm">
            Оформить карту
          </PrimaryButton>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <SecondaryButton href={SUPPORT_TG}>Задать вопрос</SecondaryButton>
              <PrimaryButton href={PRIMARY_CARD_LINK}>Оформить карту</PrimaryButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
