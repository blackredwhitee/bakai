/*
  Бренд-логотипы.
  Сервисы: реальные SVG из simple-icons (монохромно-белые под тёмный фон).
  Часть брендов (ChatGPT/OpenAI, Amazon, Canva, Adobe) удалена из simple-icons
  правообладателями — для них аккуратный текстовый плейсхолдер (хендофф запрещает
  рисовать логотипы вручную).
  Банки: в simple-icons отсутствуют — фирменная монограмма-плейсхолдер.
  TODO(design): при наличии официальных SVG заменить плейсхолдеры на реальные логотипы.
*/

import {
  siBookingdotcom, siAirbnb, siNetflix, siSpotify,
  siGoogle, siGoogleads, siSteam, siZoom,
} from "simple-icons";

type SimpleIcon = { path: string; title: string };

const SERVICE_ICONS: Record<string, SimpleIcon> = {
  Booking: siBookingdotcom,
  Airbnb: siAirbnb,
  Netflix: siNetflix,
  Spotify: siSpotify,
  Google: siGoogle,
  "Google Ads": siGoogleads,
  Steam: siSteam,
  Zoom: siZoom,
};

export function ServiceTile({ name }: { name: string }) {
  const icon = SERVICE_ICONS[name];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "18px 14px",
        borderRadius: 14,
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.08)",
        color: "rgba(225,232,248,.88)",
        fontWeight: 600,
        fontSize: 15,
        minHeight: 58,
      }}
    >
      {icon ? (
        <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden style={{ flex: "none", opacity: 0.92 }}>
          <path d={icon.path} />
        </svg>
      ) : null}
      <span>{name}</span>
    </div>
  );
}

// Фирменные цвета банков для монограмм-плейсхолдеров.
const BANK_BRANDS: Record<string, { letter: string; bg: string; fg: string }> = {
  "Сбер": { letter: "С", bg: "#21A038", fg: "#fff" },
  "Т-Банк": { letter: "Т", bg: "#FFDD2D", fg: "#0e1730" },
  "ВТБ": { letter: "В", bg: "#0A2896", fg: "#fff" },
  "Газпромбанк": { letter: "Г", bg: "#0079C1", fg: "#fff" },
  "Альфа-Банк": { letter: "А", bg: "#EF3124", fg: "#fff" },
};

export function BankTile({ name }: { name: string }) {
  const b = BANK_BRANDS[name];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 16px", borderRadius: 12, background: "#f7f9fc", border: "1px solid #eef1f7", color: "#0e1730", fontWeight: 600, fontSize: 14.5 }}>
      {b && (
        <span style={{ flex: "none", width: 26, height: 26, borderRadius: "50%", background: b.bg, color: b.fg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>
          {b.letter}
        </span>
      )}
      {name}
    </div>
  );
}
