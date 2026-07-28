"use client";

import { useEffect } from "react";

/** Блокирует скролл body, пока активно (для модалки и мобильного меню).
 *  Компенсирует ширину скроллбара, чтобы страница не «дёргалась». */
export function useLockScroll(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [active]);
}

/** Вызывает callback при нажатии Escape, пока active. */
export function useEscape(active: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, onEscape]);
}
