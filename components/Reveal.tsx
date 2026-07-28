"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/*
  Обёртка reveal-анимации на IntersectionObserver.
  Параметры из README: threshold .12, rootMargin 0px 0px -7% 0px, срабатывает один раз.
  Само движение и его длительность (.75s cubic-bezier(.2,.7,.2,1)) заданы в globals.css
  (.reveal → .reveal.is-visible) и полностью отключаются при prefers-reduced-motion.
*/
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  style,
  id,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Если пользователь просит меньше движения — показываем сразу, без наблюдателя.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target); // один раз
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    observer.observe(el);

    // Подстраховка: если наблюдатель по какой-то причине не сработал
    // (throttling вкладки, редкие браузеры) — показываем через таймаут.
    const fallback = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal${visible ? " is-visible" : ""}${className ? " " + className : ""}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
