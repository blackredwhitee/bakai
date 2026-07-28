"use client";

import { useState } from "react";
import { CARD_SELECT_OPTIONS } from "@/content/cards";
import { POLICY_URL, SUPPORT_TG } from "@/content/site";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.16)",
  color: "#fff",
  fontSize: 15,
  fontFamily: "inherit",
  outline: "none",
};

const labelText: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "rgba(200,214,245,.8)",
  marginBottom: 7,
};

export default function ApplyForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [card, setCard] = useState(CARD_SELECT_OPTIONS[0]);
  const [comment, setComment] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Фолбэк для статического хостинга (напр. GitHub Pages), где серверного
  // роута нет: открываем Telegram с готовым текстом заявки. Токен не нужен.
  function telegramFallback() {
    const text = [
      "🆕 Заявка с сайта карт",
      "",
      `Имя: ${name.trim()}`,
      `Связь: ${contact.trim()}`,
      `Карта: ${card}`,
      comment.trim() ? `Комментарий: ${comment.trim()}` : "",
      "",
      typeof window !== "undefined" ? `Страница: ${window.location.href}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    if (typeof window !== "undefined") {
      window.open(`${SUPPORT_TG}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
  }

  async function submit() {
    if (!name.trim() || !contact.trim()) {
      setError("Укажите имя и способ связи — телефон или Telegram.");
      return;
    }
    // honeypot заполнен — тихо «успешно», ничего не делаем
    if (company) {
      setSent(true);
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          card,
          comment,
          company,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      // Эндпоинта нет (статический билд) — уходим в Telegram-фолбэк.
      if (res.status === 404) {
        telegramFallback();
        setSending(false);
        setSent(true);
        return;
      }

      const data = (await res.json().catch(() => ({ ok: false }))) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || "Не удалось отправить заявку. Попробуйте ещё раз.");
        setSending(false);
        return;
      }
      setSending(false);
      setSent(true);
    } catch {
      // Сеть недоступна / статический хостинг — фолбэк в Telegram.
      telegramFallback();
      setSending(false);
      setSent(true);
    }
  }

  function reset() {
    setSent(false);
    setName("");
    setContact("");
    setComment("");
    setError("");
  }

  return (
    <div
      style={{
        background: "rgba(255,255,255,.05)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,.12)",
        borderRadius: 24,
        padding: "clamp(24px,3vw,34px)",
        boxShadow: "0 30px 70px rgba(4,8,20,.45)",
      }}
    >
      {sent ? (
        <div style={{ textAlign: "center", padding: "24px 0" }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(94,224,160,.14)", border: "1px solid rgba(94,224,160,.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#5ee0a0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }} aria-hidden>
              <path d="M4 12.5l5 5L20 6.5" />
            </svg>
          </div>
          <h3 style={{ fontWeight: 700, fontSize: 21, color: "#fff", margin: "0 0 10px" }}>Заявка отправлена</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(220,228,245,.75)", margin: "0 0 22px" }}>Менеджер свяжется с вами в течение рабочего дня.</p>
          <button
            type="button"
            onClick={reset}
            style={{ cursor: "pointer", fontFamily: "inherit", padding: "12px 24px", borderRadius: 12, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", color: "#fff", fontWeight: 600, fontSize: 14.5 }}
          >
            Отправить ещё одну
          </button>
        </div>
      ) : (
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "clamp(19px,2vw,23px)", color: "#fff", margin: "0 0 22px", letterSpacing: "-.01em" }}>Заявка на оформление</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <label style={{ display: "block" }}>
              <span style={labelText}>Имя</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Как к вам обращаться" style={inputStyle} autoComplete="name" />
            </label>
            <label style={{ display: "block" }}>
              <span style={labelText}>Телефон или Telegram</span>
              <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="+7 000 000-00-00 или @username" style={inputStyle} />
            </label>
            <label style={{ display: "block" }}>
              <span style={labelText}>Какая карта интересует</span>
              <select value={card} onChange={(e) => setCard(e.target.value)} style={{ ...inputStyle, appearance: "none" }}>
                {CARD_SELECT_OPTIONS.map((o) => (
                  <option key={o} value={o} style={{ color: "#0e1730" }}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label style={{ display: "block" }}>
              <span style={labelText}>
                Комментарий <span style={{ fontWeight: 400, color: "rgba(180,195,230,.55)" }}>— необязательно</span>
              </span>
              <textarea rows={3} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Город доставки, вопросы, пожелания" style={{ ...inputStyle, resize: "vertical" }} />
            </label>

            {/* Honeypot — скрыт от людей, ловит ботов */}
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            {error && (
              <div style={{ padding: "12px 15px", borderRadius: 11, background: "rgba(255,99,99,.12)", border: "1px solid rgba(255,99,99,.35)", color: "#ffc0c0", fontSize: 13.5, lineHeight: 1.45 }}>
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={submit}
              disabled={sending}
              style={{
                cursor: sending ? "default" : "pointer",
                fontFamily: "inherit",
                marginTop: 4,
                padding: 16,
                borderRadius: 14,
                background: "linear-gradient(135deg,#4f8bff,#2f5fe0)",
                border: "none",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 14px 34px rgba(63,123,255,.45)",
                opacity: sending ? 0.85 : 1,
              }}
            >
              {sending ? "Отправляем…" : "Отправить заявку"}
            </button>
            <p style={{ fontSize: 11.5, lineHeight: 1.5, color: "rgba(180,195,230,.55)", margin: "2px 0 0" }}>
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href={POLICY_URL} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(200,214,245,.8)" }}>
                политикой обработки персональных данных
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
