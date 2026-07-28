import { headers } from "next/headers";
import { z } from "zod";

/*
  Приём заявок и отправка в Telegram-группу.
  Токен и chat_id — только на сервере (env), на клиент не попадают.

  ENV (см. .env.example):
    TELEGRAM_BOT_TOKEN — токен бота (бот должен быть админом группы)
    TELEGRAM_CHAT_ID    — id группы, вида -100xxxxxxxxxx
*/

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LeadSchema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(120),
  contact: z.string().trim().min(1, "Укажите способ связи").max(160),
  card: z.string().trim().max(160).optional().default(""),
  comment: z.string().trim().max(2000).optional().default(""),
  // honeypot: реальные пользователи это поле не заполняют
  company: z.string().max(0).optional(),
  pageUrl: z.string().url().max(500).optional(),
});

const WINDOW_MS = 60_000;
const WINDOW_S = 60;
const MAX_REQUESTS = 5;

// In-memory (на инстанс) — дефолт для одного процесса.
const hits = new Map<string, number[]>();

function rateLimitedMemory(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

// Общий стор для нескольких инстансов — Upstash Redis по REST (если заданы env).
// Атомарно: INCR + EXPIRE на первый инкремент.
async function rateLimitedUpstash(ip: string): Promise<boolean | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null; // не настроено — используем in-memory
  try {
    const key = `lead:rl:${ip}`;
    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify([
        ["INCR", key],
        ["EXPIRE", key, String(WINDOW_S), "NX"],
      ]),
    });
    const data = (await res.json()) as Array<{ result: number }>;
    const count = data?.[0]?.result ?? 0;
    return count > MAX_REQUESTS;
  } catch (e) {
    console.error("[lead] Upstash rate-limit недоступен, fallback in-memory:", e);
    return null;
  }
}

async function rateLimited(ip: string): Promise<boolean> {
  const viaUpstash = await rateLimitedUpstash(ip);
  return viaUpstash ?? rateLimitedMemory(ip);
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";

  if (await rateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Слишком много запросов. Попробуйте через минуту." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Некорректный запрос." }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Укажите имя и способ связи — телефон или Telegram." },
      { status: 422 },
    );
  }

  const { name, contact, card, comment, company, pageUrl } = parsed.data;

  // Honeypot заполнен — тихо «успешно», ничего не отправляя.
  if (company && company.length > 0) {
    return Response.json({ ok: true });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы");
    return Response.json(
      { ok: false, error: "Приём заявок временно недоступен. Напишите нам в Telegram." },
      { status: 503 },
    );
  }

  const text = [
    "🆕 <b>Заявка с сайта карт</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Связь:</b> ${escapeHtml(contact)}`,
    card ? `<b>Карта:</b> ${escapeHtml(card)}` : null,
    comment ? `<b>Комментарий:</b> ${escapeHtml(comment)}` : null,
    "",
    pageUrl ? `<b>Страница:</b> ${escapeHtml(pageUrl)}` : null,
    `<b>Время:</b> ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    const data = (await res.json()) as { ok: boolean; description?: string };
    if (!data.ok) throw new Error(data.description || "Telegram error");
    return Response.json({ ok: true });
  } catch (e) {
    console.error("[lead] Ошибка отправки в Telegram:", e);
    return Response.json(
      { ok: false, error: "Не удалось отправить заявку. Напишите нам в Telegram." },
      { status: 502 },
    );
  }
}
