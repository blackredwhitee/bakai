import Image from "next/image";
import Reveal from "./Reveal";
import { SUPPORT_TG } from "@/content/site";

export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: "relative",
        background:
          "radial-gradient(120% 90% at 80% -10%,#13265c 0%,#0b1736 42%,#070d1f 100%)",
        overflow: "hidden",
        padding: "clamp(120px,16vh,180px) clamp(20px,5vw,56px) clamp(80px,12vh,130px)",
      }}
    >
      {/* Декоративные glow-круги и сетка */}
      <div
        aria-hidden
        className="anim-glow"
        style={{
          position: "absolute",
          top: "-12%",
          right: "6%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(79,139,255,.42),transparent 62%)",
          filter: "blur(28px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-8%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(120,90,255,.28),transparent 62%)",
          filter: "blur(34px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(110% 80% at 50% 0,#000,transparent 75%)",
          WebkitMaskImage: "radial-gradient(110% 80% at 50% 0,#000,transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="herogrid"
        style={{
          position: "relative",
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 15px",
              borderRadius: 100,
              background: "rgba(79,139,255,.12)",
              border: "1px solid rgba(79,139,255,.3)",
              color: "#bcd2ff",
              fontSize: 13.5,
              fontWeight: 600,
              marginBottom: 26,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5ee0a0", boxShadow: "0 0 10px #5ee0a0" }} />
            Оформление из России · по паспорту РФ · без поездки
          </div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              color: "#fff",
              margin: "0 0 22px",
            }}
          >
            Международные карты{" "}
            <span
              style={{
                background: "linear-gradient(120deg,#7fb0ff,#bcd2ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Visa и Mastercard
            </span>{" "}
            для граждан России
          </h1>
          <p
            style={{
              fontSize: "clamp(17px,1.5vw,21px)",
              lineHeight: 1.6,
              color: "rgba(220,228,245,.8)",
              margin: "0 0 40px",
              maxWidth: 560,
            }}
          >
            Выпуск в банке Кыргызстана по российскому паспорту — без поездки и без ВНЖ. Для
            путешествий, оплаты зарубежных сервисов и переводов по всему миру.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a
              href="#cards"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "16px 30px",
                borderRadius: 14,
                background: "linear-gradient(135deg,#4f8bff,#2f5fe0)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 14px 34px rgba(63,123,255,.45)",
              }}
            >
              Оформить карту →
            </a>
            <a
              href={SUPPORT_TG}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "16px 30px",
                borderRadius: 14,
                background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.16)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Задать вопрос
            </a>
          </div>
        </Reveal>

        {/* Фото карт — приоритетная загрузка */}
        <Reveal
          style={{
            position: "relative",
            height: "clamp(400px,48vw,600px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            aria-hidden
            className="anim-glow"
            style={{
              position: "absolute",
              width: "88%",
              height: "88%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(79,139,255,.45),rgba(120,90,255,.2) 45%,transparent 68%)",
              filter: "blur(24px)",
            }}
          />
          <Image
            src="/cards/visa-infinite.png"
            alt="Международные карты Visa Infinite"
            width={700}
            height={470}
            priority
            sizes="(max-width: 880px) 90vw, 44vw"
            className="anim-floaty"
            style={{
              position: "relative",
              width: "118%",
              maxWidth: 700,
              height: "auto",
              filter: "drop-shadow(0 50px 80px rgba(0,0,0,.6))",
            }}
          />
        </Reveal>
      </div>
    </header>
  );
}
