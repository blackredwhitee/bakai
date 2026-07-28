import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CARDS } from "@/content/cards";
import { LEGAL } from "@/content/site";

/*
  Шрифт заказчика — TT Firs Neue (без засечек; шрифты с засечками запрещены).
  Два веса: 400 и 700; display swap. Файлы co-located в app/fonts.
*/
const ttFirs = localFont({
  variable: "--font-tt-firs",
  display: "swap",
  src: [
    { path: "./fonts/TT_Firs_Neue_Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TT_Firs_Neue_Bold.woff2", weight: "700", style: "normal" },
  ],
});

const SITE_URL = "https://cards.talkbank.io";
const OG_TITLE = "Международные карты Visa и Mastercard для граждан России";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Международные карты Visa и Mastercard для граждан России — выпуск в Кыргызстане | TalkBank",
  description:
    "Именные карты Visa и Mastercard с выпуском в банке Кыргызстана по паспорту РФ — без поездки и без ВНЖ. Apple Pay и Google Pay, SWIFT, мультивалютные счета, доставка по России. От 34 990 ₽.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: OG_TITLE,
    description:
      "Выпуск в банке Кыргызстана по российскому паспорту — без поездки. Apple Pay и Google Pay, SWIFT-переводы, доставка по России.",
    url: SITE_URL,
    siteName: "TalkBank — международные карты",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description:
      "Именные карты Visa и Mastercard с выпуском в Кыргызстане по паспорту РФ. От 34 990 ₽.",
  },
  robots: { index: true, follow: true },
};

// Schema.org: Organization + Product по каждой карте.
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TalkBank",
  legalName: LEGAL.company,
  url: SITE_URL,
  logo: `${SITE_URL}/talkbank-logo.svg`,
  taxID: "7734387717",
  sameAs: ["https://t.me/TGMarketPayBot"],
};

const productsLd = CARDS.map((card) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: card.name,
  description: card.tagline,
  category: "Банковская карта",
  brand: { "@type": "Brand", name: card.system === "visa" ? "Visa" : "Mastercard" },
  offers: {
    "@type": "Offer",
    price: String(card.priceNumber),
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#cards`,
    seller: { "@type": "Organization", name: "TalkBank" },
  },
}));

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${ttFirs.variable} ${ttFirs.className}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsLd) }}
        />
        {children}
      </body>
    </html>
  );
}
