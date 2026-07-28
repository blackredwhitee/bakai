/*
  Префикс basePath для ассетов из public/.
  На статическом экспорте (GitHub Pages) сайт живёт под /bakai/, но next/image
  с unoptimized не добавляет basePath к src автоматически — префиксуем вручную.
  В обычном режиме NEXT_PUBLIC_BASE_PATH пустой → пути остаются как есть.
*/
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
