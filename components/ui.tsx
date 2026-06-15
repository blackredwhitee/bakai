import Link from "next/link";
import cardsData from "@/data/cards.json";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-7xl container-px ${className}`}>{children}</div>;
}

export function SectionTitle({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[var(--brand-navy)]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg text-slate-500 ${
            center ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform duration-200 hover:scale-[1.03] hover:bg-blue-700 active:scale-95 ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-[var(--brand-navy)] transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 active:scale-95 ${className}`}
    >
      {children}
    </Link>
  );
}

export const SUPPORT_TG = cardsData.supportTelegram;
export const PRIMARY_CARD_LINK = cardsData.cards[0].link;
