import Reveal from "./Reveal";
import { COMPARE_ROWS, compareCards } from "@/content/compare";

const TH_BASE: React.CSSProperties = {
  padding: "18px 14px",
  fontWeight: 700,
  color: "#0e1730",
  fontSize: 15,
};

export default function ComparisonSection() {
  const cards = compareCards();

  return (
    <section id="compare" style={{ background: "#fff", padding: "clamp(64px,9vw,110px) clamp(20px,5vw,56px)", borderTop: "1px solid #eef1f7" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: 680, margin: "0 auto clamp(36px,5vw,52px)", textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#3f7bff", margin: "0 0 12px" }}>
            Сравнение карт
          </p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,4vw,46px)", color: "#0e1730", margin: "0 0 16px", letterSpacing: "-.025em" }}>
            Что входит в каждый тариф
          </h2>
        </Reveal>

        {/* Десктоп: таблица */}
        <Reveal
          className="cmptable"
          style={{ border: "1px solid #e7ebf3", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 30px rgba(16,30,70,.06)" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
            <thead>
              <tr style={{ background: "#f7f9fc" }}>
                <th style={{ textAlign: "left", padding: "18px 22px", fontWeight: 600, color: "#5b6479", fontSize: 13, textTransform: "uppercase", letterSpacing: ".05em" }}>
                  Параметр
                </th>
                <th style={TH_BASE}>Visa Gold</th>
                <th style={TH_BASE}>Mastercard Gold</th>
                <th style={TH_BASE}>Visa Infinite</th>
                <th style={{ ...TH_BASE, background: "linear-gradient(180deg,rgba(79,139,255,.1),transparent)" }}>World Elite</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.label} style={{ borderTop: "1px solid #eef1f7" }}>
                  <td style={{ padding: "15px 22px", color: "#5b6479", fontWeight: 500 }}>{r.label}</td>
                  <td style={{ padding: "15px 14px", textAlign: "center", color: "#0e1730", fontWeight: 600 }}>{r.gold}</td>
                  <td style={{ padding: "15px 14px", textAlign: "center", color: "#0e1730", fontWeight: 600 }}>{r.mcgold}</td>
                  <td style={{ padding: "15px 14px", textAlign: "center", color: "#0e1730", fontWeight: 600 }}>{r.infinite}</td>
                  <td style={{ padding: "15px 14px", textAlign: "center", color: "#0e1730", fontWeight: 700, background: "rgba(79,139,255,.05)" }}>{r.elite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Мобайл: карточки сравнения (строки со значением «—» уже отфильтрованы) */}
        <div className="cmpcards" style={{ display: "none", flexDirection: "column", gap: 16 }}>
          {cards.map((c) => (
            <div key={c.name} style={{ border: "1px solid #e7ebf3", borderRadius: 18, overflow: "hidden" }}>
              <div style={{ padding: "16px 18px", background: "#f7f9fc", fontWeight: 700, fontSize: 16, color: "#0e1730", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {c.name}
                <span style={{ fontWeight: 600, color: "#3f7bff" }}>{c.price}</span>
              </div>
              {c.rows.map((row) => (
                <div key={row.k} style={{ display: "flex", justifyContent: "space-between", gap: 14, padding: "12px 18px", borderTop: "1px solid #f0f3f8", fontSize: 14 }}>
                  <span style={{ color: "#7a8398" }}>{row.k}</span>
                  <span style={{ color: "#0e1730", fontWeight: 600, textAlign: "right" }}>{row.v}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "#9aa3b5", margin: "18px 0 0" }}>
          Тарифы банка-эмитента. Годовое обслуживание и несгораемый остаток списываются со счёта
          карты и не входят в стоимость оформления.
        </p>
      </div>
    </section>
  );
}
