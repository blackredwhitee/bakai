import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const SITE_URL = "https://visacard-kg.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Международные карты Visa и Mastercard Кыргызстана | Оформление под ключ",
  description:
    "Оформите именную карту Visa или Mastercard с выпуском в Кыргызстане: оплата за границей, ChatGPT, Netflix, Booking, SWIFT-переводы, мультивалютные счета. Доставка по России без поездки в Кыргызстан.",
  keywords: [
    "иностранная карта",
    "карта Кыргызстана",
    "зарубежная карта",
    "международная карта",
    "карта для оплаты за границей",
    "карта для путешествий",
    "карта для оплаты зарубежных сервисов",
    "карта для ChatGPT",
    "карта для Booking",
    "карта для Netflix",
    "карта Visa Кыргызстан",
    "карта Mastercard Кыргызстан",
  ],
  openGraph: {
    title: "Международные карты Visa и Mastercard Кыргызстана",
    description:
      "Именные карты для путешествий, оплаты зарубежных сервисов и международных переводов. Выпуск в Кыргызстане, доставка по России.",
    url: SITE_URL,
    siteName: "Международные карты Кыргызстана",
    locale: "ru_RU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "Международная карта Кыргызстана (Visa / Mastercard)",
  description:
    "Именные карты Visa и Mastercard с выпуском в Кыргызстане для оплаты по всему миру, SWIFT-переводов и мультивалютных счетов.",
  provider: {
    "@type": "Organization",
    name: "TalkBank",
    legalName: "ООО «Толкфинанс»",
    url: SITE_URL,
  },
  offers: [
    { "@type": "Offer", name: "Visa Gold", price: "34990", priceCurrency: "RUB" },
    { "@type": "Offer", name: "Visa Infinite", price: "37990", priceCurrency: "RUB" },
    { "@type": "Offer", name: "Mastercard Gold", price: "34990", priceCurrency: "RUB" },
    { "@type": "Offer", name: "Mastercard World Elite", price: "39990", priceCurrency: "RUB" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
