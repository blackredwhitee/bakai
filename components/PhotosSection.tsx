import { Container, SectionTitle } from "./ui";
import cardsData from "@/data/cards.json";
import CardVisual from "./CardVisual";

const EXTRA_ITEMS = ["Конверт с картой", "Подписание договора", "Интерфейс мобильного приложения"];

export default function PhotosSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Карты и процесс выпуска"
          subtitle="На сайте используются фотографии реальных карт и материалов — без стоковых изображений."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.cards.map((card) => (
            <figure key={card.id} className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
              <CardVisual name={card.name} brand={card.brand} color={card.color} premium={card.premium} />
              <figcaption className="mt-3 text-center text-sm font-medium text-slate-600">{card.name}</figcaption>
            </figure>
          ))}

          {EXTRA_ITEMS.map((item) => (
            <figure key={item} className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center">
              <div className="aspect-[1.586/1] w-full rounded-xl bg-slate-100" />
              <figcaption className="mt-3 text-sm font-medium text-slate-500">{item}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
