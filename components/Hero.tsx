import { Container, PrimaryButton, SecondaryButton, SUPPORT_TG, PRIMARY_CARD_LINK } from "./ui";
import CardVisual from "./CardVisual";
import cardsData from "@/data/cards.json";

const ADVANTAGES = [
  "Именная пластиковая карта",
  "Онлайн и офлайн платежи",
  "Google Pay",
  "SWIFT-переводы",
  "Счета в нескольких валютах",
  "Доставка по России",
  "Российский номер телефона подходит",
  "Выпуск без поездки в Кыргызстан",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-blue), transparent 70%)" }}
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs md:text-sm font-semibold text-[var(--brand-blue)]">
            Оформление через официального партнёра банка
          </span>

          <h1 className="mt-5 text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight text-[var(--brand-navy)]">
            Международные карты Visa и Mastercard с&nbsp;выпуском в&nbsp;Кыргызстане
          </h1>

          <p className="mt-5 max-w-xl text-base md:text-lg text-slate-500">
            Именные карты для путешествий, оплаты зарубежных сервисов, международных переводов и
            покупок по всему миру.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ADVANTAGES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-slate-700">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={PRIMARY_CARD_LINK}>Оформить карту</PrimaryButton>
            <SecondaryButton href={SUPPORT_TG}>Задать вопрос</SecondaryButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {cardsData.cards.map((card, i) => (
              <div
                key={card.id}
                className={`${i % 2 === 1 ? "translate-y-6 md:translate-y-10" : ""}`}
              >
                <CardVisual name={card.name} brand={card.brand} color={card.color} premium={card.premium} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 shrink-0 text-[var(--brand-blue)]"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
