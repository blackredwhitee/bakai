"use client";

import { useState } from "react";
import { Container, SectionTitle, PrimaryButton, SecondaryButton, SUPPORT_TG, PRIMARY_CARD_LINK } from "./ui";

/* ---------- Block 2: Нам доверяют ---------- */
const TRUST_ITEMS = [
  "Выпуск карт с сопровождением под ключ",
  "Доставка по всей России",
  "Поддержка на русском языке",
  "Именные карты",
  "Выпуск в Кыргызстане",
  "Международные платежи",
];

export function TrustSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[var(--brand-blue)] font-bold">
                ✓
              </span>
              <span className="text-sm md:text-base font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 5: Оплачивайте по всему миру ---------- */
const MERCHANTS = ["Booking", "Airbnb", "Netflix", "Spotify", "ChatGPT", "Google", "Google Ads", "Amazon", "Steam", "Zoom", "Canva", "Adobe"];

export function MerchantsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Оплачивайте зарубежные сервисы и покупки" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {MERCHANTS.map((m) => (
            <div
              key={m}
              className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm md:text-base font-semibold text-slate-600 shadow-sm"
            >
              {m}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400">
          Работа отдельных сервисов зависит от их собственных ограничений на момент оплаты.
        </p>
      </Container>
    </section>
  );
}

/* ---------- Block 6: Где работает карта ---------- */
const COVERAGE_COUNTRIES = ["Европа", "США", "ОАЭ", "Турция", "Казахстан", "Грузия", "Армения", "Таиланд", "Южная Корея"];

export function CoverageSection() {
  return (
    <section id="coverage" className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Где работает карта" subtitle="Карта принимается для платежей по всему миру." />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 md:p-10">
            <WorldMap />
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {COVERAGE_COUNTRIES.map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm md:text-base font-medium text-[var(--brand-navy)]">
                  <span className="text-green-500">✅</span> {c}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm md:text-base font-medium text-red-600">
              <span>❌</span> Карта не работает на территории РФ
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorldMap() {
  return (
    <svg viewBox="0 0 600 300" className="w-full" aria-hidden>
      <rect width="600" height="300" rx="24" fill="#EFF6FF" />
      {[
        [80, 60], [150, 100], [220, 70], [300, 120], [360, 90], [430, 140],
        [480, 70], [520, 150], [200, 200], [350, 210], [120, 180], [450, 220],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 26 : 18} fill="#BFDBFE" opacity="0.7" />
      ))}
      {[
        [80, 60], [220, 70], [430, 140], [520, 150], [350, 210], [120, 180], [300, 120],
      ].map(([x, y], i) => (
        <circle key={`p-${i}`} cx={x} cy={y} r={5} fill="var(--brand-blue)" />
      ))}
    </svg>
  );
}

/* ---------- Block 7: Почему выбирают карты Кыргызстана ---------- */
const WHY_KG = [
  "Зарубежный банковский счёт",
  "Выпуск без поездки в Кыргызстан",
  "Российский номер телефона подходит",
  "Пополнение из российских банков",
  "Международные платежи",
  "SWIFT-переводы",
  "Мультивалютные счета",
  "Мобильное приложение банка",
];

export function WhyKyrgyzstanSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Почему выбирают карты Кыргызстана" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_KG.map((item) => (
            <div key={item} className="rounded-2xl bg-white border border-slate-100 p-6 text-sm md:text-base font-medium text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 8: Что входит в стоимость ---------- */
const INCLUDED = [
  "Проверка документов",
  "Подготовка банковской анкеты",
  "Передача документов в банк",
  "Выпуск карты",
  "Доставка карты в Россию",
  "Курьерская доставка клиенту",
  "Консультации менеджера",
  "Помощь при активации",
];

export function IncludedSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Что входит в стоимость" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-100 p-4 text-sm md:text-base text-slate-700">
              <span className="text-[var(--brand-blue)] font-bold">✓</span>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 9: Как проходит оформление ---------- */
const STEPS = [
  "Выбираете карту",
  "Оплачиваете выпуск",
  "Передаёте документы",
  "Отправляем анкету в банк",
  "Банк выпускает карту",
  "Получаете SMS и доступ в мобильное приложение",
  "Карта доставляется в Россию",
  "Курьер привозит карту",
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Как проходит оформление" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-navy)] text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="mt-4 text-sm md:text-base font-medium text-slate-700">{step}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Средний срок выпуска составляет 10–14 рабочих дней.
          <br />
          Срок ориентировочный и зависит от загрузки банка, логистики и праздничных дней.
        </p>
      </Container>
    </section>
  );
}

/* ---------- Block 10: Документы ---------- */
const DOCUMENTS = ["Паспорт РФ", "Загранпаспорт", "ИНН", "Email", "Номер телефона", "Адрес проживания"];

export function DocumentsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Документы для оформления" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {DOCUMENTS.map((doc) => (
            <div key={doc} className="rounded-xl bg-blue-50 px-4 py-5 text-center text-sm md:text-base font-medium text-[var(--brand-navy)]">
              {doc}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 11: Пополнение из России ---------- */
const RU_BANKS = ["Сбер", "Т-Банк", "ВТБ", "Газпромбанк", "Альфа-Банк"];

export function TopUpSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Пополнение из России" subtitle="Пополнение через СБП и банковские переводы." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {RU_BANKS.map((bank) => (
            <div key={bank} className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm md:text-base font-semibold text-slate-600">
              {bank}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
          Для большинства банков зачисление происходит практически моментально.
        </p>
      </Container>
    </section>
  );
}

/* ---------- Block 12: Валюты ---------- */
const CURRENCIES = ["USD", "EUR", "RUB", "KZT", "AED", "KGS"];

export function CurrenciesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Мультивалютные счета" subtitle="Мультивалютные счета доступны внутри мобильного приложения." />
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {CURRENCIES.map((cur) => (
            <div key={cur} className="flex h-20 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 text-lg md:text-xl font-bold text-[var(--brand-navy)]">
              {cur}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 13: Мобильное приложение ---------- */
const APP_FEATURES = [
  "Просмотр баланса",
  "Переводы",
  "Валютные счета",
  "SWIFT",
  "Выписки",
  "Управление лимитами",
  "Блокировка карты",
  "Поддержка банка",
];

export function MobileAppSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionTitle title="Мобильное приложение" center={false} />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {APP_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2.5 rounded-xl bg-white border border-slate-100 px-4 py-3 text-sm md:text-base text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)]" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 mx-auto flex justify-center lg:order-2">
          <div className="relative h-[420px] w-[230px] rounded-[2rem] border-8 border-[var(--brand-navy)] bg-white shadow-2xl">
            <div className="absolute inset-x-0 top-0 flex justify-center pt-4">
              <div className="h-1.5 w-16 rounded-full bg-slate-200" />
            </div>
            <div className="flex h-full flex-col gap-3 px-4 pt-12">
              <div className="rounded-xl bg-[var(--brand-navy)] p-4 text-white">
                <p className="text-xs text-white/60">Баланс</p>
                <p className="mt-1 text-2xl font-bold">$ 4 280.50</p>
              </div>
              {["USD", "EUR", "KGS"].map((c) => (
                <div key={c} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                  <span className="text-sm font-semibold text-slate-600">{c}</span>
                  <span className="text-sm text-slate-400">•••</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 14: Для кого ---------- */
const AUDIENCE = ["Путешественникам", "Предпринимателям", "Студентам", "Фрилансерам", "Специалистам, оплачивающим зарубежные сервисы"];

export function AudienceSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Для кого подойдут карты" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AUDIENCE.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center text-sm md:text-base font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 15: Почему оформление безопасно ---------- */
const SAFETY = [
  "Счёт открывается на ваше имя",
  "Карта выпускается официально в Кыргызстане",
  "Доступ к счёту получаете только вы",
  "Карта именная",
  "Все операции проходят через банковскую инфраструктуру",
  "Сопровождение до получения карты",
];

export function SafetySection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Почему нам можно доверять" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAFETY.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-white border border-slate-100 p-5 text-sm md:text-base text-slate-700 shadow-sm">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[var(--brand-blue)]">
                🔒
              </span>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Shared collapsible FAQ ---------- */
function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm md:text-base font-semibold text-[var(--brand-navy)]"
          >
            {item.q}
            <span className={`shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm md:text-base text-slate-500">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------- Block 16: Частые опасения ---------- */
const CONCERNS = [
  { q: "Это легально?", a: "Да. Карта выпускается официальным банком Кыргызстана на ваше имя, все операции проходят через банковскую инфраструктуру." },
  { q: "Нужно ли ехать в Кыргызстан?", a: "Нет, выпуск карты происходит полностью дистанционно — без поездки в Кыргызстан." },
  { q: "Почему оформление идёт через партнёра?", a: "Партнёр сопровождает заполнение анкеты, проверку документов и логистику доставки, упрощая процесс для клиента." },
  { q: "Что происходит после оплаты?", a: "После оплаты вы передаёте документы, мы готовим и отправляем анкету в банк, далее банк выпускает карту." },
  { q: "Как понять, что это не мошенники?", a: "Карта выпускается официальным банком, счёт открывается на ваше имя, доступ к нему получаете только вы." },
  { q: "Почему сроки могут отличаться?", a: "Срок зависит от загрузки банка, логистики и праздничных дней — в среднем 10–14 рабочих дней." },
  { q: "Можно ли оформить карту из другого города?", a: "Да, оформление доступно из любого города России — доставка осуществляется курьером." },
  { q: "Нужно ли уведомлять ФНС?", a: "Обязанность по уведомлению об открытии зарубежного счёта определяется законодательством РФ — рекомендуем уточнить актуальные требования." },
];

export function ConcernsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <SectionTitle title="Частые опасения" />
        <FaqList items={CONCERNS} />
      </Container>
    </section>
  );
}

/* ---------- Block 18: Отзывы ---------- */
const REVIEWS = [
  { name: "Артём", city: "Москва", card: "Visa Infinite", text: "Оформил карту для поездок — лимит и Lounge закрывают все вопросы. Доставка пришла за 12 дней." },
  { name: "Дарья", city: "Санкт-Петербург", card: "Mastercard Gold", text: "Удобно, что счёт в евро — оплачиваю европейские сервисы без проблем." },
  { name: "Ильяс", city: "Казань", card: "Visa Gold", text: "Подключил Google Pay сразу после активации. Поддержка отвечала быстро на каждом шаге." },
];

export function ReviewsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionTitle title="Отзывы клиентов" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
              <p className="text-sm md:text-base text-slate-600">«{r.text}»</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-navy)] text-sm font-bold text-white">
                  {r.name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-navy)]">{r.name}, {r.city}</p>
                  <p className="text-xs text-slate-400">{r.card}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Block 19: FAQ ---------- */
const FAQ = [
  { q: "Работает ли карта в Европе?", a: "Да, карта принимается для оплаты в Европе, США, ОАЭ, Турции и других странах из списка покрытия." },
  { q: "Можно ли оплачивать подписки?", a: "Да, карта подходит для оплаты подписок Netflix, Spotify, ChatGPT и других сервисов." },
  { q: "Можно ли получать SWIFT?", a: "Да, для карт с поддержкой SWIFT доступны входящие и исходящие международные переводы." },
  { q: "Нужно ли уведомлять ФНС?", a: "Это зависит от требований законодательства РФ к зарубежным счетам — рекомендуем проверить актуальные правила." },
  { q: "Какие документы нужны?", a: "Паспорт РФ, загранпаспорт, ИНН, email, номер телефона и адрес проживания." },
  { q: "Сколько занимает выпуск?", a: "В среднем 10–14 рабочих дней с учётом логистики и загрузки банка." },
  { q: "Почему карта может прийти позже?", a: "Срок доставки зависит от загрузки банка, праздничных дней и работы курьерской службы." },
  { q: "Можно ли открыть счёт в евро?", a: "Да, мультивалютные счета, включая евро, доступны в мобильном приложении банка." },
  { q: "Можно ли привязать карту к Google Pay?", a: "Да, все карты линейки поддерживают Google Pay." },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <SectionTitle title="Часто задаваемые вопросы" />
        <FaqList items={FAQ} />
      </Container>
    </section>
  );
}

/* ---------- Block 20: Финальный CTA ---------- */
export function FinalCtaSection() {
  return (
    <section className="bg-[var(--brand-navy)] py-16 md:py-24">
      <Container className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Оформите международную карту уже сегодня</h2>
        <p className="mx-auto mt-3 max-w-xl text-base md:text-lg text-slate-300">
          Оплата онлайн, доставка по России и сопровождение на каждом этапе.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href={PRIMARY_CARD_LINK}>Оформить карту</PrimaryButton>
          <SecondaryButton href={SUPPORT_TG} className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30">
            Задать вопрос
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
