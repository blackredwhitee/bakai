/*
  Реальная карта мира из датасета @svg-maps/world (страны — ISO alpha-2).
  Подсвечены страны/регионы покрытия; РФ выделена красным «не работает».
  Не ручная отрисовка — используется готовый гео-датасет.
*/

import World from "@svg-maps/world";

type Location = { id: string; name: string; path: string };
const map = (World as { viewBox: string; locations: Location[] });

// Европа (Шенген и шире) — приём Visa/Mastercard по всему региону.
const EUROPE = [
  "al", "ad", "at", "ba", "be", "bg", "ch", "cy", "cz", "de", "dk", "ee", "es",
  "fi", "fr", "gb", "gr", "hr", "hu", "ie", "is", "it", "li", "lt", "lu", "lv",
  "mc", "md", "me", "mk", "mt", "nl", "no", "pl", "pt", "ro", "rs", "se", "si",
  "sk", "sm", "ua", "va", "xk",
];

// Отдельно перечисленные страны покрытия.
const EXTRA = ["us", "ae", "tr", "kz", "ge", "am", "th", "kr"];

const COVERED = new Set([...EUROPE, ...EXTRA]);
const BLOCKED = new Set(["ru"]);

export default function WorldMap() {
  return (
    <svg
      viewBox={map.viewBox}
      role="img"
      aria-label="Карта мира: страны, где принимается карта; Россия — не работает"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {map.locations.map((loc) => {
        const covered = COVERED.has(loc.id);
        const blocked = BLOCKED.has(loc.id);
        const fill = blocked
          ? "rgba(235,70,70,.5)"
          : covered
            ? "rgba(94,224,160,.55)"
            : "rgba(127,160,232,.12)";
        const stroke = blocked
          ? "rgba(255,138,138,.9)"
          : covered
            ? "rgba(94,224,160,.9)"
            : "rgba(127,160,232,.28)";
        return (
          <path key={loc.id} d={loc.path} fill={fill} stroke={stroke} strokeWidth={0.4}>
            <title>{loc.name}</title>
          </path>
        );
      })}
    </svg>
  );
}
