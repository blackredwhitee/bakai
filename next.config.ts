import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Отдаём современные форматы; исходники (фото карт/конверта) лежат в public/.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
