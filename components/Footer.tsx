import Image from "next/image";
import { NAV_LINKS, LEGAL, SUPPORT_TG, POLICY_URL } from "@/content/site";
import { asset } from "@/lib/asset";

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "rgba(200,210,232,.6)",
  fontSize: 14,
};

const colTitle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 13,
  color: "#fff",
  marginBottom: 16,
  letterSpacing: ".02em",
};

export default function Footer() {
  return (
    <footer style={{ background: "#060912", padding: "clamp(56px,7vw,80px) clamp(20px,5vw,56px) 40px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div className="footgrid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          <div>
            <Image src={asset("/talkbank-logo.svg")} alt="TalkBank" width={132} height={30} style={{ height: 30, width: "auto", display: "block", marginBottom: 18 }} />
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(200,210,232,.6)", margin: "0 0 18px", maxWidth: 340 }}>
              Международные карты Visa и Mastercard с выпуском в Кыргызстане. Оформление удалённо,
              доставка по России.
            </p>
            <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "rgba(160,172,200,.5)", margin: 0 }}>{LEGAL.disclaimer}</p>
          </div>

          <div>
            <div style={colTitle}>Разделы</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} style={linkStyle}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={colTitle}>Контакты и документы</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <a href={SUPPORT_TG} target="_blank" rel="noopener noreferrer" style={linkStyle}>Telegram поддержки</a>
              <a href={POLICY_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>Политика обработки данных</a>
              <a href={POLICY_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>Пользовательское соглашение</a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, paddingTop: 28, alignItems: "flex-start" }}>
          <div style={{ maxWidth: 620 }}>
            <p style={{ fontSize: 12.5, lineHeight: 1.7, color: "rgba(160,172,200,.55)", margin: 0 }}>
              {LEGAL.company} · {LEGAL.ogrn} · {LEGAL.inn} · {LEGAL.founded}.
              <br />
              {LEGAL.skolkovo}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 18px", borderRadius: 12, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
            <span style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#e8423a,#b81e16)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 15 }}>С</span>
            <span style={{ color: "rgba(200,210,232,.75)", fontSize: 12.5, fontWeight: 600, lineHeight: 1.3 }}>
              Резидент
              <br />
              Фонда «Сколково»
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
