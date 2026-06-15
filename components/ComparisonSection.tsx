import { Container, SectionTitle } from "./ui";
import cardsData from "@/data/cards.json";

export default function ComparisonSection() {
  const names = cardsData.cards.map((c) => c.name);

  return (
    <section id="compare" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Сравнение карт"
          subtitle="Различия между картами — буквально за 10 секунд."
        />

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60">
                <th className="sticky left-0 bg-slate-50/60 px-4 py-4 font-semibold text-slate-500 md:px-6">
                  Параметр
                </th>
                {names.map((n) => (
                  <th key={n} className="px-4 py-4 font-semibold text-[var(--brand-navy)] md:px-6 whitespace-nowrap">
                    {n}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cardsData.comparison.rows.map((row, idx) => (
                <tr key={row.label} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="sticky left-0 bg-inherit px-4 py-3.5 font-medium text-slate-600 md:px-6">
                    {row.label}
                  </td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-4 py-3.5 text-slate-700 md:px-6 whitespace-nowrap">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
