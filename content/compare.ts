/*
  Таблица сравнения — 23 строки, значения по 4 картам.
  Реальные тарифы заказчика. Значение "—" = параметр недоступен для карты
  (в мобильных карточках и в модалке такие строки отфильтрованы).
*/

import type { CardKey } from "./cards";
import { CARDS } from "./cards";

export interface CompareRow {
  label: string;
  gold: string;
  mcgold: string;
  infinite: string;
  elite: string;
}

export const COMPARE_ROWS: CompareRow[] = [
  { label: "Стоимость оформления", gold: "34 990 ₽", mcgold: "34 990 ₽", infinite: "37 990 ₽", elite: "39 990 ₽" },
  { label: "Платёжная система", gold: "Visa", mcgold: "Mastercard", infinite: "Visa", elite: "Mastercard" },
  { label: "Валюта карты", gold: "USD", mcgold: "EUR · KGS", infinite: "USD · KGS", elite: "EUR · KGS" },
  { label: "Суточный лимит", gold: "$6 000", mcgold: "€6 000", infinite: "$20 000", elite: "€23 000" },
  { label: "Увеличение лимита", gold: "до $12 000", mcgold: "—", infinite: "до $50 000", elite: "—" },
  { label: "Годовое обслуживание", gold: "$20", mcgold: "€20", infinite: "$150", elite: "€150" },
  { label: "Срочность выпуска", gold: "$12", mcgold: "бесплатно", infinite: "бесплатно", elite: "бесплатно" },
  { label: "Несгораемый остаток", gold: "—", mcgold: "—", infinite: "100 000 сом", elite: "€1 200" },
  { label: "Операций в сутки", gold: "до 20", mcgold: "—", infinite: "до 20", elite: "—" },
  { label: "Сомовая карта в комплекте", gold: "—", mcgold: "—", infinite: "✓", elite: "—" },
  { label: "VIP-залы аэропортов", gold: "—", mcgold: "—", infinite: "6 раз в год", elite: "LoungeKey, без ограничений" },
  { label: "Fast Track в аэропортах", gold: "—", mcgold: "—", infinite: "—", elite: "✓" },
  { label: "Личный менеджер", gold: "—", mcgold: "—", infinite: "✓", elite: "—" },
  { label: "Медицинская страховка", gold: "—", mcgold: "—", infinite: "—", elite: "✓" },
  { label: "Страхование от неудобств", gold: "—", mcgold: "—", infinite: "—", elite: "✓" },
  { label: "Роуминг данных", gold: "—", mcgold: "—", infinite: "—", elite: "✓" },
  { label: "Бесконтактная оплата", gold: "✓", mcgold: "✓", infinite: "✓", elite: "✓" },
  { label: "3D Secure", gold: "✓", mcgold: "✓", infinite: "✓", elite: "✓" },
  { label: "Управление в приложении", gold: "✓", mcgold: "✓", infinite: "✓", elite: "✓" },
  { label: "SWIFT-переводы", gold: "✓", mcgold: "✓", infinite: "✓", elite: "✓" },
  { label: "Google Pay", gold: "✓", mcgold: "✓", infinite: "✓", elite: "✓" },
  { label: "Apple Pay · новинка", gold: "✓", mcgold: "✓", infinite: "✓", elite: "✓" },
  { label: "Баланс при получении", gold: "−$32", mcgold: "−€20", infinite: "−$150 + 100 000 сом", elite: "−€150 + €1 200" },
];

/** Строки «ключ — значение» для карты (для мобильных карточек и модалки).
 *  Отфильтрованы: без строки «Стоимость оформления» и без значений "—". */
export function rowsForCard(key: CardKey): { k: string; v: string }[] {
  return COMPARE_ROWS.filter(
    (r) => r.label !== "Стоимость оформления" && r[key] !== "—",
  ).map((r) => ({ k: r.label, v: r[key] }));
}

/** Карточки сравнения для мобильной версии (≤880px) */
export function compareCards() {
  return CARDS.map((c) => ({
    name: c.name,
    price: c.price,
    rows: rowsForCard(c.key),
  }));
}
