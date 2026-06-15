type CardVisualProps = {
  name: string;
  brand: string;
  color: string;
  premium?: boolean;
  className?: string;
};

export default function CardVisual({ name, brand, color, premium, className = "" }: CardVisualProps) {
  const gradient = premium
    ? "linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 45%, #3d3d3d 100%)"
    : `linear-gradient(135deg, ${color} 0%, var(--brand-navy) 100%)`;

  return (
    <div
      className={`relative aspect-[1.586/1] w-full rounded-2xl p-5 md:p-6 text-white shadow-xl ${className}`}
      style={{ background: gradient }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.35), transparent 55%)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            International Card
          </span>
          {premium && (
            <span className="rounded-full border border-white/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80">
              Elite
            </span>
          )}
        </div>

        <div className="h-7 w-10 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-500/80 opacity-90" />

        <div>
          <div className="font-mono text-sm md:text-lg tracking-[0.18em]">•••• •••• •••• 4829</div>
          <div className="mt-3 flex items-end justify-between">
            <span className="text-sm md:text-base font-semibold">{name}</span>
            <BrandMark brand={brand} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandMark({ brand }: { brand: string }) {
  if (brand === "Mastercard") {
    return (
      <span className="flex items-center" aria-label="Mastercard">
        <span className="h-6 w-6 rounded-full bg-[#EB001B] opacity-90" />
        <span className="-ml-2.5 h-6 w-6 rounded-full bg-[#F79E1B] opacity-90" />
      </span>
    );
  }
  return (
    <span className="text-lg font-bold italic tracking-tight" aria-label="Visa">
      VISA
    </span>
  );
}
