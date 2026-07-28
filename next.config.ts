import type { NextConfig } from "next";

/*
  STATIC_EXPORT=1 — сборка статики для GitHub Pages (https://<user>.github.io/bakai/):
  output: export, basePath /bakai, картинки без оптимизации (нет сервера).
  В этом режиме серверный роут app/api/lead не поддерживается — в CI он удаляется
  из сборки, а форма уходит в Telegram через deep-link.

  Без флага — обычное приложение (dev / Node / Vercel) с рабочим /api/lead.
*/
const isExport = process.env.STATIC_EXPORT === "1";
const BASE = isExport ? "/bakai" : "";

const nextConfig: NextConfig = {
  images: isExport
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  ...(isExport ? { output: "export", basePath: BASE } : {}),
  // Пробрасываем basePath в клиент: next/image с unoptimized не префиксует
  // src сам, поэтому ассеты из public/ префиксуем вручную через lib/asset.ts.
  env: { NEXT_PUBLIC_BASE_PATH: BASE },
};

export default nextConfig;
