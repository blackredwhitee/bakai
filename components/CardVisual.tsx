import type { Card } from "@/content/cards";

/* Логотип Mastercard — два пересекающихся круга (без названия банка). */
function McCircles({ size = 24 }: { size?: number }) {
  return (
    <span style={{ display: "flex" }}>
      <span style={{ width: size, height: size, borderRadius: "50%", background: "#eb001b" }} />
      <span
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "#f79e1b",
          marginLeft: -(size * 0.4),
          mixBlendMode: "screen",
        }}
      />
    </span>
  );
}

/* Слово-марка Visa + уровень (Gold / Infinite) — платёжная система, не банк. */
function VisaWord({ level }: { level: string }) {
  return (
    <span style={{ fontStyle: "italic", fontWeight: 800, fontSize: 18, color: "#fff" }}>
      VISA
      <span style={{ fontStyle: "normal", fontWeight: 600, fontSize: 11, color: "#d6b266", marginLeft: 4 }}>
        {level}
      </span>
    </span>
  );
}

// Настройки лица, зависящие от карты.
const FACE: Record<
  string,
  { levelColor: string; numberColor: string; glow: string; shadow: string }
> = {
  gold: {
    levelColor: "rgba(214,178,102,.85)",
    numberColor: "rgba(214,178,102,.75)",
    glow: "position:absolute;right:-10%;top:8%;width:75%;height:75%;background:radial-gradient(circle,rgba(214,178,102,.5),transparent 62%);filter:blur(6px)",
    shadow: "0 12px 28px rgba(13,34,71,.4)",
  },
  mcgold: {
    levelColor: "#e7c98f",
    numberColor: "rgba(231,201,143,.75)",
    glow: "position:absolute;left:-15%;bottom:-20%;width:65%;height:90%;background:radial-gradient(circle,rgba(214,178,102,.28),transparent 62%);filter:blur(8px)",
    shadow: "0 12px 28px rgba(90,22,38,.4)",
  },
  infinite: {
    levelColor: "#d6b266",
    numberColor: "rgba(214,178,102,.7)",
    glow: "position:absolute;right:-12%;top:6%;width:78%;height:80%;background:radial-gradient(circle,rgba(214,178,102,.32),transparent 60%);filter:blur(7px)",
    shadow: "0 12px 28px rgba(0,0,0,.5)",
  },
  elite: {
    levelColor: "#cfe0ff",
    numberColor: "rgba(207,224,255,.7)",
    glow: "position:absolute;bottom:-30%;left:-15%;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle,rgba(79,139,255,.35),transparent 65%)",
    shadow: "0 12px 30px rgba(0,0,0,.5),0 0 30px rgba(79,139,255,.25)",
  },
};

/** Преобразует строку "prop:val;prop:val" в объект стилей React. */
function toStyle(css: string): React.CSSProperties {
  const out: Record<string, string> = {};
  css.split(";").forEach((decl) => {
    const i = decl.indexOf(":");
    if (i === -1) return;
    const key = decl.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = decl.slice(i + 1).trim();
  });
  return out as React.CSSProperties;
}

export default function CardVisual({ card }: { card: Card }) {
  const f = FACE[card.key];
  const isVisa = card.system === "visa";
  const isElite = card.key === "elite";

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "1.585",
        borderRadius: 15,
        overflow: "hidden",
        background: card.faceGradient,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: f.shadow,
        marginTop: isElite ? 8 : 0,
      }}
    >
      <div aria-hidden style={toStyle(f.glow)} />
      {/* Блик */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: isElite
            ? "linear-gradient(115deg,transparent 35%,rgba(255,255,255,.16) 50%,transparent 62%)"
            : "linear-gradient(115deg,transparent 38%,rgba(255,255,255,.14) 50%,transparent 60%)",
        }}
      />

      {/* Верхняя строка */}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span />
        {isElite ? (
          <McCircles size={22} />
        ) : (
          <span style={{ fontSize: 11, letterSpacing: ".1em", color: f.levelColor, fontWeight: 600 }}>{card.level}</span>
        )}
      </div>

      {/* Чип */}
      <div
        aria-hidden
        style={{
          position: "relative",
          width: 34,
          height: 26,
          borderRadius: 6,
          background: "linear-gradient(135deg,#f0d58a,#c99a3a)",
        }}
      />

      {/* Нижняя строка: марка + маскированный номер */}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        {isElite ? (
          <span style={{ fontSize: 10, letterSpacing: ".08em", color: "#cfe0ff", fontWeight: 700 }}>WORLD ELITE</span>
        ) : isVisa ? (
          <VisaWord level={card.key === "infinite" ? "Infinite" : "Gold"} />
        ) : (
          <McCircles size={24} />
        )}
        <span style={{ fontSize: 11, color: f.numberColor }}>{card.maskedNumber}</span>
      </div>
    </div>
  );
}
