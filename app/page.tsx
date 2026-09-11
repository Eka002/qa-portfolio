/* eslint-disable @next/next/no-img-element */

const skills = [
  "Web / API / Backend QA",
  "Postman / Swagger / REST API",
  "PostgreSQL & SQL",
  "Python",
  "Playwright & Selenium",
  "Docker",
  "DevTools & logs",
  "GitHub",
  "Android / ADB",
  "Kotlin / Espresso",
  "PowerShell",
  "Grafana / Loki / Zabbix",
];

const metrics = [
  ["3 года", "в QA и L3: от продукта до production-диагностики"],
  ["4", "продуктовых контура: HR, CRM, Android и POS/SAP"],
  ["165+", "дефектов Major, Minor и Critical выявлено"],
  ["5", "направлений автоматизации по всей системе"],
];

const automationAreas = [
  {
    number: "01",
    company: "Formatta",
    title: "Web UI / E2E",
    tools: "Python · Selenium · Playwright",
    description: "Создание набора автотестов с нуля для критических пользовательских сценариев — от входа до получения отчёта.",
    proof: "8 наборов · ежедневные прогоны",
  },
  {
    number: "02",
    company: "Formatta",
    title: "API",
    tools: "Postman · REST API · Swagger",
    description: "Автоматизированные API-проверки и контроль сценариев авторизации, ролей, назначений и отчётов.",
    proof: "контракты · интеграции · ошибки",
  },
  {
    number: "03",
    company: "Formatta · Universe-soft",
    title: "Backend & Data",
    tools: "Python · JUnit · PostgreSQL",
    description: "Серверные Python-проверки, поддержка JUnit-автотестов и контроль данных, расчётов и бизнес-логики.",
    proof: "server · logic · data",
  },
  {
    number: "04",
    company: "Universe-soft",
    title: "Android",
    tools: "Kotlin · Espresso · ADB",
    description: "Участие в разработке и поддержке мобильных автотестов, проверки на эмуляторах и реальных устройствах.",
    proof: "mobile UI · integration",
  },
  {
    number: "05",
    company: "ДМ-тех",
    title: "Operations",
    tools: "PowerShell · Python · SAP",
    description: "Автоматизация регулярных технических операций, включая доставку файлов SAP GUI и DLL-библиотек.",
    proof: "L3 · routine operations",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="На главную">
          ED<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#cases">Кейсы</a>
          <a href="#automation">Автоматизация</a>
          <a href="#experience">Опыт</a>
          <a href="#stack">Стек</a>
        </nav>
        <a className="nav-cta" href="#contact">Связаться</a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Открыта к удалённой работе и релокации</div>
          <p className="role">QA Engineer · Web / API / Backend</p>
          <h1>
            Проверяю продукт<br />
            <span>глубже интерфейса.</span>
          </h1>
          <p className="lede">
            Я Екатерина Дедяшкина, QA Engineer с 3 годами опыта. Проверяю frontend,
            backend/API и данные в БД, анализирую логи, нахожу причины дефектов
            и автоматизирую UI/E2E-сценарии на Python.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#cases">Смотреть кейсы <span>↘</span></a>
            <a className="button button-ghost" href="/documents/ekaterina-dediashkina-resume.pdf" target="_blank">Резюме PDF <span>↗</span></a>
          </div>
          <div className="hero-meta">
            <span>Астана · GMT+5</span>
            <span>English A2</span>
            <span>Deutsch B1</span>
          </div>
        </div>

        <div className="quality-card" aria-label="Пример процесса контроля качества">
          <div className="quality-head">
            <span>release / quality-gate</span>
            <span className="status"><i /> ready</span>
          </div>
          <div className="quality-body">
            <p className="terminal-label">E2E FLOW</p>
            <div className="flow-line"><b>01</b><span>Авторизация и роли</span><em>passed</em></div>
            <div className="flow-line"><b>02</b><span>API и данные</span><em>passed</em></div>
            <div className="flow-line"><b>03</b><span>Бизнес-логика</span><em>passed</em></div>
            <div className="flow-line active"><b>04</b><span>Отчёт и выгрузка</span><em>running</em></div>
            <div className="progress"><span /></div>
            <div className="signal-grid">
              <div><strong>0</strong><small>critical</small></div>
              <div><strong>24</strong><small>checks</small></div>
              <div><strong>98%</strong><small>stable</small></div>
            </div>
          </div>
          <p className="card-note">От пользовательского сценария — до логов и результата в БД.</p>
        </div>
      </section>

      <section className="metrics-wrap shell" id="metrics" aria-label="Опыт в цифрах и системах">
        <div className="metrics-heading">
          <strong>Опыт в цифрах и системах</strong>
          <span>Сводно по Formatta, ДМ-тех и Universe-soft</span>
        </div>
        <div className="metrics">
          {metrics.map(([value, label]) => (
            <div className="metric" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell approach">
        <div className="section-label"><span>01</span> Подход</div>
        <div className="section-intro">
          <h2>QA как инженерное исследование, а не финальная галочка.</h2>
          <p>
            Начинаю с пользовательской цели, раскладываю систему на точки риска,
            сверяю поведение на каждом слое и оставляю команде воспроизводимый результат.
          </p>
        </div>
        <div className="approach-grid">
          <article><span>01</span><h3>Понимаю контекст</h3><p>Изучаю требования, user flow, роли и ожидаемый бизнес-результат.</p></article>
          <article><span>02</span><h3>Ищу слабые места</h3><p>Проверяю границы, интеграции, данные, негативные сценарии и права доступа.</p></article>
          <article><span>03</span><h3>Доказываю фактами</h3><p>Связываю UI, запросы, SQL, логи и расчёты в понятную картину дефекта.</p></article>
          <article><span>04</span><h3>Закрепляю качество</h3><p>Добавляю чек-листы, автотесты и пост-релизные проверки для повторяемости.</p></article>
        </div>
      </section>

      <section className="section case-section" id="cases">
        <div className="shell">
          <div className="section-label light"><span>02</span> Избранный кейс</div>
          <div className="case-hero">
            <div>
              <p className="case-kicker">Formatta Assessment · UI/UX аудит</p>
              <h2>Карта платформы и сценарии улучшения сложного B2B‑продукта.</h2>
            </div>
            <p>
              Исследовала ключевые разделы HR‑платформы, описала потребности пользователей,
              проблемные места и конкретные варианты «до / после» — от фильтрации до массовых действий.
            </p>
          </div>

          <div className="case-facts">
            <div><small>Задача</small><p>Сделать сложные административные сценарии понятнее и безопаснее.</p></div>
            <div><small>Моя роль</small><p>QA‑исследование, user flow, JTBD, UI/UX‑гипотезы.</p></div>
            <div><small>Результат</small><p>Цельная карта продукта и наглядные рекомендации для разработки.</p></div>
          </div>

          <div className="gallery">
            <a className="shot shot-wide" href="/cases/platform-map.png" target="_blank" aria-label="Открыть карту платформы">
              <img src="/cases/platform-map.png" alt="Карта ключевого пользовательского потока платформы" />
              <span><b>01</b> Информационная архитектура</span>
            </a>
            <a className="shot" href="/cases/respondents-audit.png" target="_blank" aria-label="Открыть аудит раздела Респонденты">
              <img src="/cases/respondents-audit.png" alt="Аудит потребностей и проблем раздела Респонденты" />
              <span><b>02</b> JTBD и проблемные места</span>
            </a>
            <a className="shot" href="/cases/before-after.png" target="_blank" aria-label="Открыть концепты до и после">
              <img src="/cases/before-after.png" alt="Концепты интерфейса до и после улучшений" />
              <span><b>03</b> Концепты «до / после»</span>
            </a>
          </div>
          <div className="nda-note"><span>✓</span><p><strong>NDA‑safe.</strong> В кейсе нет персональных данных, клиентской информации и закрытой бизнес‑логики. Показан только мой подход к анализу.</p></div>
        </div>
      </section>

      <section className="section shell automation-case" id="automation">
        <div className="section-label"><span>03</span> Автоматизация</div>
        <div className="automation-intro">
          <div>
            <p className="case-kicker dark">UI/E2E · API · Backend · Mobile · Operations</p>
            <h2>Автоматизация на пяти уровнях системы.</h2>
          </div>
          <p>
            Автоматизирую не только браузер: связываю UI, API, backend, мобильный клиент
            и технические операции в воспроизводимый контур контроля качества.
          </p>
        </div>
        <div className="automation-cards">
          {automationAreas.map((area) => (
            <article className="automation-card" key={area.number}>
              <div className="automation-card-head">
                <span>{area.number}</span>
                <small>{area.company}</small>
              </div>
              <p className="automation-tools">{area.tools}</p>
              <h3>{area.title}</h3>
              <p className="automation-description">{area.description}</p>
              <div className="automation-proof"><i /> {area.proof}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience shell" id="experience">
        <div className="section-label"><span>04</span> Опыт</div>
        <div className="section-intro compact">
          <h2>От production‑инцидентов до качества продукта.</h2>
          <p>Опыт в QA и L3‑поддержке помогает видеть продукт целиком: от интерфейса до данных, логов и интеграций.</p>
        </div>

        <div className="timeline">
          <article className="job">
            <div className="job-date"><span>09.2025 — сейчас</span><small>Удалённо</small></div>
            <div className="job-main">
              <p className="company">Formatta</p><h3>QA Engineer</h3>
              <p>HR‑платформа: frontend, backend/API, административные панели, роли, отчёты, выгрузки и расчётная логика оценочных методологий.</p>
              <div className="job-tags"><span>Web / API / Backend</span><span>Automation</span><span>PostgreSQL</span><span>UI / E2E</span></div>
              <details>
                <summary>Подробнее о задачах и результатах <span>+</span></summary>
                <div className="details-grid">
                  <ul>
                    <li>Функциональное, регрессионное, интеграционное, системное, позитивное и негативное тестирование.</li>
                    <li>Релизные версии, ежедневные автопрогоны и пост‑релизные проверки.</li>
                    <li>Python‑автотесты на Selenium и Playwright; API‑автоматизация через Postman.</li>
                    <li>PostgreSQL, DevTools, логи и серверная диагностика для анализа дефектов и данных.</li>
                    <li>Сверка Excel‑моделей, методологических документов, серверных данных, расчётов и итоговых отчётов.</li>
                  </ul>
                  <ul>
                    <li>Баг‑репорты и взаимодействие с разработчиками, продуктовыми менеджерами и методологами.</li>
                    <li>Техническая поддержка клиентов и внутренних пользователей.</li>
                    <li>Карта платформы и визуальные предложения по улучшению UI/UX.</li>
                    <li>100+ изменений проверено, около 15 критичных дефектов найдено до релиза.</li>
                    <li>Инструкция администратора обновлена, созданы видеоинструкции.</li>
                  </ul>
                </div>
              </details>
            </div>
          </article>

          <article className="job">
            <div className="job-date"><span>12.2024 — 07.2025</span><small>Москва · гибрид</small></div>
            <div className="job-main">
              <p className="company">ДМ‑тех</p><h3>Technical Support Engineer L3</h3>
              <p>Обеспечивала стабильность POS‑систем, кассового ПО, SAP и внутренних сервисов: воспроизводила проблемы, анализировала данные и логи, локализовала причины сбоев.</p>
              <div className="job-tags"><span>SQL</span><span>Grafana / Loki</span><span>SAP</span><span>PowerShell</span></div>
              <details>
                <summary>Подробнее о задачах и результатах <span>+</span></summary>
                <div className="details-grid">
                  <ul>
                    <li>Диагностические проверки POS‑систем, кассового ПО, SAP и связанных сервисов.</li>
                    <li>Воспроизведение пользовательских и production‑дефектов, локализация источника ошибки.</li>
                    <li>SQL‑запросы для проверки данных, операций, транзакций и пользовательских сценариев.</li>
                    <li>Анализ логов в Grafana и Loki, мониторинг сервисов в Zabbix.</li>
                    <li>Интеграционные проверки POS‑систем, кассового ПО, SAP и внутренних сервисов.</li>
                  </ul>
                  <ul>
                    <li>Диагностика TCP/IP, DNS, ping, telnet и nslookup.</li>
                    <li>Локализация критичных production‑инцидентов и контроль стабильности после восстановления.</li>
                    <li>Автоматизация технических операций в PowerShell; Python для вспомогательных задач.</li>
                    <li>Взаимодействие с разработчиками и смежными командами при анализе дефектов.</li>
                    <li>Скрипт копирования установочных файлов SAP GUI и DLL‑библиотек.</li>
                  </ul>
                </div>
              </details>
            </div>
          </article>

          <article className="job">
            <div className="job-date"><span>08.2023 — 12.2024</span><small>Москва</small></div>
            <div className="job-main">
              <p className="company">Universe‑soft</p><h3>QA Engineer</h3>
              <p>CRM Universe, backend/API, интеграции и Android‑приложение для планшетов турникетных систем.</p>
              <div className="job-tags"><span>Android / ADB</span><span>Postman</span><span>Docker</span><span>JUnit / Espresso</span></div>
              <details>
                <summary>Подробнее о проектах и результатах <span>+</span></summary>
                <div className="details-grid">
                  <div><h4>Kerong · Web / backend</h4><ul>
                    <li>Функциональное, smoke и базовое нагрузочное тестирование.</li>
                    <li>Локальные окружения в Docker; Postman, Swagger и DevTools.</li>
                    <li>Поддержка JUnit‑автотестов, чек‑листов, баг‑репортов и API‑документации.</li>
                  </ul></div>
                  <div><h4>Android · турникетные системы</h4><ul>
                    <li>Функциональное, UI, usability и негативное тестирование.</li>
                    <li>Backend‑взаимодействие, эмуляторы и реальные устройства.</li>
                    <li>ADB, JWT‑токены, QR‑коды, авторизация и обработка ошибок.</li>
                    <li>Автотесты на Kotlin / Espresso; обучение новых сотрудников.</li>
                    <li>Более 150 выявленных дефектов уровня Major и Minor.</li>
                  </ul></div>
                </div>
              </details>
            </div>
          </article>
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="shell stack-grid">
          <div>
            <div className="section-label light"><span>05</span> Инструменты</div>
            <h2>Стек для проверки всей цепочки.</h2>
            <p>От браузера и мобильного клиента — до API, БД, логов и инфраструктуры.</p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill, index) => <span className={index < 4 ? "featured" : ""} key={skill}>{skill}</span>)}
          </div>
          <div className="capability-grid">
            <article><span>TEST</span><h3>Методы</h3><p>Функциональное · регрессионное · интеграционное · системное · smoke · release · UI · usability · негативное.</p></article>
            <article><span>AUTO</span><h3>Автоматизация</h3><p>Python · Selenium · Playwright · UI/E2E‑сценарии · Kotlin / Espresso · поддержка JUnit‑тестов.</p></article>
            <article><span>DIAG</span><h3>Диагностика</h3><p>SQL · DevTools · логи · Grafana · Loki · Zabbix · ADB · сетевые проверки.</p></article>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow"><span className="pulse" /> Давайте обсудим продукт</p>
        <h2>Нужен QA, который<br /><span>видит систему целиком?</span></h2>
        <p>Открыта к задачам в Web / API / Backend QA, автоматизации UI/E2E и технической диагностике.</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:evstifeevavita813@gmail.com">Написать на email <span>↗</span></a>
          <a className="button button-ghost" href="https://t.me/KeitAddams" target="_blank">Telegram @KeitAddams <span>↗</span></a>
        </div>
      </section>

      <footer className="footer shell">
        <div><a className="brand" href="#top">ED<span className="brand-dot">.</span></a><p>QA Engineer · Web / API / Backend</p></div>
        <div><p>Астана · удалённо · релокация</p><p>English A2 · Deutsch B1</p></div>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
