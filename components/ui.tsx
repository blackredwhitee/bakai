import Reveal from "./Reveal";

/* Заголовочный блок секции: кикер + H2 + необязательный подзаголовок.
   theme "light" — на светлом фоне, "dark" — на тёмном. */
export function SectionHead({
  kicker,
  title,
  subtitle,
  theme = "light",
  maxWidth = 680,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  maxWidth?: number;
}) {
  const dark = theme === "dark";
  return (
    <Reveal style={{ maxWidth, margin: "0 auto clamp(36px,5vw,56px)", textAlign: "center" }}>
      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: dark ? "#7fa0e8" : "#3f7bff", margin: "0 0 12px" }}>
        {kicker}
      </p>
      <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,4vw,46px)", color: dark ? "#fff" : "#0e1730", margin: subtitle ? "0 0 16px" : 0, letterSpacing: "-.025em" }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 17, lineHeight: 1.6, color: dark ? "rgba(220,228,245,.78)" : "#5b6479", margin: 0 }}>{subtitle}</p>
      )}
    </Reveal>
  );
}

/** Круглая зелёная галочка (используется в списках преимуществ). */
export function Check({ size = 21 }: { size?: number }) {
  return (
    <span
      style={{
        flex: "none",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(94,224,160,.16)",
        border: "1px solid rgba(94,224,160,.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#5ee0a0",
        fontSize: 12,
        fontWeight: 800,
      }}
    >
      ✓
    </span>
  );
}
