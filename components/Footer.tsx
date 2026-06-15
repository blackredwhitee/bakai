import { Container, SUPPORT_TG } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-navy)] py-12 text-slate-300">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <span className="text-lg font-bold text-white">TalkBank</span>
            <p className="mt-3 text-sm text-slate-400">
              ООО «Толкфинанс»
              <br />
              ОГРН 1167746688944
              <br />
              ИНН 7734387717
              <br />
              Основано в 2019 году
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Документы</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://business.talkbank.io/policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Политика обработки персональных данных
                </a>
              </li>
              <li>
                <a href="https://business.talkbank.io/policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Поддержка</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a href={SUPPORT_TG} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Telegram поддержки
                </a>
              </li>
              <li>Контакты поддержки доступны через Telegram</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Сколково</h3>
            <div className="mt-3 inline-flex items-center rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-white">
              Сколково
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Деятельность осуществляется при грантовой поддержке Фонда «Сколково».
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          Используя сайт и подавая заявку, вы даёте согласие на обработку персональных данных в соответствии с
          {" "}
          <a href="https://business.talkbank.io/policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            Политикой обработки персональных данных
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}
