/*
  Линейка карт — единый источник правды для карточек, модалок, формы и SEO.
  Требование заказчика: цены и ссылки на оплату меняются здесь, без правки вёрстки.

  В ссылке оплаты зашита сумма — при смене цены менять и `price`, и `payLink`.
  Формат: https://t.me/TGMarketPayBot?start=pl_2bc2f2820f10302c_<сумма>_<КОД>
*/

export type CardKey = "gold" | "mcgold" | "infinite" | "elite";

export type CardSpec = { label: string; value: string };

export interface Card {
  key: CardKey;
  /** Платёжная система — для лица карты и подписи */
  system: "visa" | "mastercard";
  /** Уровень карты: печатается на нарисованном лице (без названия банка!) */
  level: string;
  name: string;
  price: string;
  priceNumber: number;
  payLink: string;
  tagline: string;
  /** Итоговый баланс при получении (годовое обслуживание/остаток) */
  note: string;
  /** Градиент лица карты (linear-gradient(...)) */
  faceGradient: string;
  /** Маскированный номер на лице карты */
  maskedNumber: string;
  /** Тёмная (флагманская) карточка в линейке */
  flagship?: boolean;
  /** 3 характеристики в карточке линейки */
  specs: [CardSpec, CardSpec, CardSpec];
  /** Привилегии для модалки */
  perks: string[];
}

const PAY_BASE = "https://t.me/TGMarketPayBot?start=pl_2bc2f2820f10302c";

export const CARDS: Card[] = [
  {
    key: "gold",
    system: "visa",
    level: "GOLD",
    name: "Visa Gold",
    price: "34 990 ₽",
    priceNumber: 34990,
    payLink: `${PAY_BASE}_34990_VISAGOLD`,
    tagline: "Получаешь больше, чем платишь — базовый уровень с плюсом на счёте",
    note: "Карта приезжает с балансом −$32 (годовое обслуживание и срочность выпуска).",
    faceGradient: "linear-gradient(135deg,#1e4585,#143062 55%,#0d2247)",
    maskedNumber: "•••• 7704",
    specs: [
      { label: "Суточный лимит", value: "$6 000" },
      { label: "Обслуживание", value: "$20 / год" },
      { label: "Apple Pay и Google Pay", value: "✓" },
    ],
    perks: [
      "Суточный лимит $6 000, с возможностью увеличения до $12 000",
      "До 20 операций в сутки",
      "Оплата онлайн и офлайн по всему миру",
      "Бесконтактная оплата и 3D Secure",
      "Apple Pay и Google Pay",
      "Управление через приложение банка",
    ],
  },
  {
    key: "mcgold",
    system: "mastercard",
    level: "GOLD",
    name: "Mastercard Gold",
    price: "34 990 ₽",
    priceNumber: 34990,
    payLink: `${PAY_BASE}_34990_MastercardGOLD`,
    tagline: "Международная карта для путешествий, покупок и ежедневного использования",
    note: "Карта приезжает с балансом −€20 за годовое обслуживание.",
    faceGradient: "linear-gradient(135deg,#7a2233,#5a1626 55%,#3c0d18)",
    maskedNumber: "•••• 3318",
    specs: [
      { label: "Суточный лимит", value: "€6 000" },
      { label: "Обслуживание", value: "€20 / год" },
      { label: "Apple Pay и Google Pay", value: "✓" },
    ],
    perks: [
      "Суточный лимит €6 000",
      "Срочность выпуска — бесплатно",
      "Валюта карты EUR / KGS",
      "Предложения и скидки Mastercard",
      "Подходит для отелей и авиабилетов",
      "Бесконтактная оплата, 3D Secure, Apple Pay и Google Pay",
    ],
  },
  {
    key: "infinite",
    system: "visa",
    level: "INFINITE",
    name: "Visa Infinite",
    price: "37 990 ₽",
    priceNumber: 37990,
    payLink: `${PAY_BASE}_37990_VISAINFINITE`,
    tagline: "Престиж, привилегии и персональный сервис",
    note: "Карта приезжает с балансом −$150 и несгораемым остатком 100 000 сом.",
    faceGradient: "linear-gradient(140deg,#23262c,#101113 55%,#050506)",
    maskedNumber: "•••• 9021",
    specs: [
      { label: "Суточный лимит", value: "$20 000" },
      { label: "VIP-залы", value: "6 раз в год" },
      { label: "Личный менеджер", value: "✓" },
    ],
    perks: [
      "Суточный лимит $20 000, с возможностью повышения до $50 000",
      "Личный менеджер",
      "VIP-залы аэропортов — 6 раз в год, с питанием, только на владельца",
      "Сомовая карта в комплекте",
      "До 20 операций в сутки",
      "Срочность выпуска — бесплатно",
    ],
  },
  {
    key: "elite",
    system: "mastercard",
    level: "WORLD ELITE",
    name: "Mastercard World Elite",
    price: "39 990 ₽",
    priceNumber: 39990,
    payLink: `${PAY_BASE}_39990_MastercardELITE`,
    tagline: "Максимум привилегий для путешествий и премиального обслуживания",
    note: "Карта приезжает с балансом −€150 и несгораемым остатком €1 200.",
    faceGradient: "linear-gradient(135deg,#2a2e37,#0c0e14)",
    maskedNumber: "•••• 5582",
    flagship: true,
    specs: [
      { label: "Суточный лимит", value: "€23 000" },
      { label: "LoungeKey", value: "Без ограничений" },
      { label: "Медстраховка", value: "✓" },
    ],
    perks: [
      "Суточный лимит €23 000",
      "LoungeKey без ограничений",
      "Fast Track в аэропортах",
      "Медицинская страховка в путешествиях",
      "Страхование от неудобств в поездках и роуминг данных",
      "Премиальные предложения Mastercard",
    ],
  },
];

/** Опции для селекта в форме заявки */
export const CARD_SELECT_OPTIONS = [
  ...CARDS.map((c) => `${c.name} — ${c.price}`),
  "Пока не выбрал — нужна консультация",
];
