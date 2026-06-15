import { Container, SectionTitle, PrimaryButton } from "./ui";
import CardVisual from "./CardVisual";
import cardsData from "@/data/cards.json";

export default function CardsSection() {
  return (
    <section id="cards" className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Линейка международных карт"
          subtitle="Выберите карту под свои задачи — от ежедневных платежей до премиальных привилегий в аэропортах."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {cardsData.cards.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col rounded-3xl border p-6 md:p-8 transition-shadow hover:shadow-2xl ${
                card.premium
                  ? "border-slate-800 bg-[var(--brand-navy)] text-white shadow-2xl shadow-slate-900/20"
                  : "border-slate-100 bg-white shadow-sm"
              }`}
            >
              <CardVisual name={card.name} brand={card.brand} color={card.color} premium={card.premium} className="mb-6" />

              <div className="flex items-baseline justify-between gap-4">
                <h3 className={`text-xl md:text-2xl font-bold ${card.premium ? "text-white" : "text-[var(--brand-navy)]"}`}>
                  {card.name}
                </h3>
                <span className={`text-xl md:text-2xl font-bold whitespace-nowrap ${card.premium ? "text-white" : "text-[var(--brand-blue)]"}`}>
                  {card.price.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <p className={`mt-1 text-sm md:text-base ${card.premium ? "text-slate-300" : "text-slate-500"}`}>
                {card.tagline}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {card.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm md:text-base ${card.premium ? "text-slate-200" : "text-slate-700"}`}
                  >
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${card.premium ? "bg-white" : "bg-[var(--brand-blue)]"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <PrimaryButton
                href={card.link}
                className={`mt-7 w-full ${card.premium ? "bg-white text-[var(--brand-navy)] hover:bg-slate-100" : ""}`}
              >
                Оформить карту
              </PrimaryButton>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
