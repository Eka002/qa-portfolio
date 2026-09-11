"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type ReactNode } from "react";

type PortfolioModule = {
  id: string;
  number: string;
  title: string;
  short: string;
  position: string;
};

const portfolioModules: PortfolioModule[] = [
  { id: "about", number: "01", title: "Обо мне", short: "QA Engineer · 3+ года", position: "north" },
  { id: "experience", number: "02", title: "Опыт", short: "Product QA", position: "north-east" },
  { id: "e2e", number: "03", title: "E2E Automation", short: "8 suites · daily", position: "east" },
  { id: "backend", number: "04", title: "Business Logic / Data", short: "Расчёт · PostgreSQL", position: "south-east" },
  { id: "critical", number: "05", title: "Critical Defects", short: "Product / business risk", position: "bottom-east" },
  { id: "l3", number: "06", title: "Production Diagnostics / L3", short: "POS · SAP · SQL", position: "bottom-west" },
  { id: "automation", number: "07", title: "Integrations / Devices", short: "Android · Physical equipment", position: "south-west" },
  { id: "audit", number: "08", title: "Product QA / UX", short: "Admin scenarios", position: "west" },
  { id: "stack", number: "09", title: "Tech Stack", short: "Testing · Diagnostics", position: "north-west" },
];

const moduleIds = new Set(portfolioModules.map((module) => module.id));

function ArrowUpRightIcon() {
  return (
    <svg className="arrow-up-right" viewBox="0 0 18 18" focusable="false">
      <path d="M5 13 13 5M7 5h6v6" />
    </svg>
  );
}

const criticalDefects = [
  {
    category: "Потеря пользовательского сценария",
    title: "Некорректная дата → 404",
    problem: "Пользователь мог случайно ввести некорректный год и вместо validation error попадал в 404-состояние. Для восстановления требовались очистка cookies/cache и hard reload.",
    reasons: [
      "Блокировка пользовательского сценария",
      "Сложное самостоятельное восстановление",
      "Потенциальное обращение в поддержку",
      "Повторяемость проблемы до восстановления состояния браузера",
    ],
  },
  {
    category: "Integrity assessment",
    title: "Копирование защищённого задания",
    problem: "В тесте способностей пользователь мог копировать содержимое задания, хотя это действие должно было быть запрещено.",
    reasons: [
      "Нарушение условий прохождения assessment",
      "Риск распространения тестового контента",
      "Потенциальное влияние на валидность результатов тестирования",
    ],
  },
  {
    category: "Multi-tenant data integrity",
    title: "Массовый импорт в неверную организацию",
    problem: "При массовом создании администраторов выбранная организация игнорировалась, и аккаунты создавались в дефолтной организации.",
    reasons: [
      "Неправильная принадлежность пользователей",
      "Риск некорректных прав доступа",
      "Необходимость массового ручного исправления данных",
      "Нарушение multi-tenant логики продукта",
    ],
  },
];

type ExperienceJob = {
  period: string;
  company: string;
  role: string;
  context: string;
  focus?: string[];
  projects?: {
    title: string;
    details: string;
    groups?: { label: string; text: string }[];
    note?: string;
    emphasis?: string;
  }[];
  impact?: {
    label: string;
    title?: string;
    columns: {
      label: string;
      items?: string[];
      value?: string;
      description?: string;
      secondary?: string[];
      calculation?: string;
      primary?: boolean;
    }[];
    note?: string;
  };
  roleScale?: { value: string; label: string }[];
  personalResult?: string;
  results: string[];
};

const experience: ExperienceJob[] = [
  {
    period: "09.2025 — сейчас",
    company: "Formatta",
    role: "QA Engineer",
    context: "B2B HR-платформа: тестирование web-интерфейсов, API, интеграций и расчётной бизнес-логики.",
    focus: [
      "Методология тестов и расчётная бизнес-логика",
      "E2E-сценарии и автотесты",
      "Backend · Сервер · PostgreSQL · Логи",
      "Релизное тестирование · Клиентские кейсы и запросы",
      "UI/UX-аудит административных сценариев · Карта улучшений",
      "API testing · Postman collections · JS test scripts · Collection Runner",
    ],
    impact: {
      label: "E2E-автоматизация",
      columns: [
        { label: "Было", items: ["Полный ручной E2E занимал 8 часов", "Выполнялся 2 раза в неделю", "69 человеко-часов ручного E2E в месяц"] },
        { label: "Стало", items: ["Ежедневный автоматический прогон", "5 прогонов в неделю", "Machine runtime 1–2 часа"] },
        { label: "Эффект", items: ["До 69 ч/месяц повторяющегося ручного E2E переведено в автоматические проверки", "Частота полной E2E-проверки выросла в 2,5 раза", "Длительность одного прогона сократилась на 75–87,5%"] },
      ],
    },
    results: ["8 E2E suites · ежедневный автопрогон", "15 Critical до production"],
  },
  {
    period: "12.2024 — 07.2025",
    company: "ДМ-тех",
    role: "L3 Technical Support",
    context: "Production support распределённой retail-инфраструктуры, POS, SAP и внутренних систем.",
    focus: [
      "Active Directory · POS · SAP · Внутренние системы",
      "SQL · Логи · Мониторинг · Разбор production-инцидентов",
      "PowerShell / Python automation",
    ],
    impact: {
      label: "Автоматизация",
      title: "Подготовка и копирование установочных файлов SAP GUI и DLL-библиотек",
      columns: [
        {
          label: "Было",
          value: "30–60 мин на один магазин",
          description: "Ручная подготовка и копирование установочных файлов SAP GUI и DLL-библиотек.",
        },
        {
          label: "Стало",
          value: "10–15 мин на один магазин",
          description: "После PowerShell-автоматизации.",
        },
        {
          label: "Экономия времени",
          value: "≈250–833 человеко-часов",
          description: "Сэкономленного ручного труда на каждые 1 000 магазинов при одном массовом обновлении.",
          secondary: ["До автоматизации: 500–1 000 человеко-часов / 1 000 магазинов", "После автоматизации: ≈167–250 человеко-часов / 1 000 магазинов"],
          calculation: "15–50 мин экономии на один магазин × 1 000 магазинов = ≈250–833 человеко-часов",
          primary: true,
        },
      ],
      note: "Человеко-часы — суммарные трудозатраты специалистов; при параллельной работе календарное время могло быть меньше.",
    },
    personalResult: "~97% смен — 1-е место во внутреннем ежедневном SLA-рейтинге",
    results: [],
  },
  {
    period: "08.2023 — 12.2024",
    company: "Universe-soft",
    role: "QA Engineer",
    context: "Два направления: web/backend-продукт и Android-приложение, интегрированное с терминалами и физическим оборудованием.",
    projects: [
      {
        title: "Web / Backend",
        details: "CRM · Backend/API · Интеграции",
        groups: [
          { label: "Автоматизация", text: "JavaScript — разработка автотестов · JUnit — поддержка существующих" },
          { label: "API / инструменты", text: "Postman · Swagger · Docker" },
        ],
        note: "Диагностика дефектов и пользовательских обращений",
      },
      {
        title: "Android / терминалы",
        details: "Приложение для турникетных систем · Реальные устройства и эмуляторы · ADB · JWT / QR-сценарии · Kotlin / Espresso · Интеграция ПО с оборудованием",
        emphasis: "Инфотерминалы · Физические устройства · Биометрическая идентификация",
      },
    ],
    roleScale: [
      { value: "2 продуктовых направления", label: "Web / Backend + Android / терминалы" },
      { value: "150+ Major / Minor", label: "найдено и заведено дефектов" },
      { value: "Глубокая диагностика", label: "API · SQL · Логи · DevTools · ADB" },
      { value: "Передача знаний", label: "обучение новых сотрудников по продукту" },
    ],
    results: [],
  },
];

const stackGroups: { title: string; rows: { label: string; value: string }[] }[] = [
  {
    title: "QA / Testing",
    rows: [
      { label: "Контуры", value: "Web · Backend · REST API" },
      { label: "Проверки", value: "Integration · E2E · Regression · Release" },
      { label: "Логика", value: "Business logic" },
    ],
  },
  {
    title: "API / Data",
    rows: [
      { label: "API", value: "Postman · Swagger/OpenAPI" },
      { label: "Коллекции", value: "Postman Collections · Collection Runner" },
      { label: "Скрипты", value: "JavaScript test scripts" },
      { label: "Данные", value: "PostgreSQL · SQL" },
    ],
  },
  {
    title: "Automation",
    rows: [
      { label: "E2E", value: "Python · Selenium · Playwright" },
      { label: "JavaScript", value: "разработка автотестов" },
      { label: "JUnit", value: "поддержка существующих тестов" },
      { label: "PowerShell", value: "operational automation" },
    ],
  },
  {
    title: "Mobile / Devices",
    rows: [
      { label: "Среда", value: "Android · Real devices · Emulators" },
      { label: "Инструменты", value: "ADB · Kotlin · Espresso" },
      { label: "Сценарии", value: "JWT · QR scenarios" },
      { label: "Оборудование", value: "Инфотерминалы · Биометрические устройства" },
    ],
  },
  {
    title: "Diagnostics / Monitoring",
    rows: [
      { label: "Browser", value: "DevTools" },
      { label: "Monitoring", value: "Logs · Grafana · Loki · Zabbix" },
      { label: "Данные", value: "SQL diagnostics" },
      { label: "Артефакты", value: "Screenshots · Test reports" },
    ],
  },
  {
    title: "Infrastructure / Enterprise",
    rows: [
      { label: "Контейнеры", value: "Docker" },
      { label: "Доступ", value: "Active Directory" },
      { label: "Retail", value: "SAP GUI · POS" },
      { label: "Production", value: "Retail infrastructure · Production support" },
    ],
  },
];

const auditImages = [
  {
    src: "/cases/respondents-audit-cropped.png",
    title: "JTBD, риски и проблемные места",
    alt: "Карта потребностей пользователей и проблем административного раздела",
  },
  {
    src: "/cases/before-after-cropped.png",
    title: "Концепты до / после",
    alt: "Концепты улучшения фильтров и массовых действий",
  },
];

function Metric({ value, label, tone }: { value: string; label: string; tone?: "team" | "personal" }) {
  return (
    <div className={`dialog-metric${tone ? ` dialog-metric--${tone}` : ""}`}>
      {tone ? <small>{tone === "team" ? "Команда" : "Личный результат"}</small> : null}
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function AuditModule() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const returnFocusIndex = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    returnFocusIndex.current = index;
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    const triggerIndex = returnFocusIndex.current;
    setActiveImageIndex(null);
    window.requestAnimationFrame(() => {
      if (triggerIndex !== null) triggerRefs.current[triggerIndex]?.focus();
    });
  };

  const showPrevious = () => {
    setActiveImageIndex((current) => current === null ? 0 : (current - 1 + auditImages.length) % auditImages.length);
  };

  const showNext = () => {
    setActiveImageIndex((current) => current === null ? 0 : (current + 1) % auditImages.length);
  };

  useEffect(() => {
    if (activeImageIndex === null) return;

    window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(lightboxRef.current?.querySelectorAll<HTMLElement>("button") ?? []);
      if (!focusable.length) return;
      const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
      const nextIndex = event.shiftKey
        ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
        : (currentIndex === focusable.length - 1 ? 0 : currentIndex + 1);
      event.preventDefault();
      focusable[nextIndex].focus();
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [activeImageIndex]);

  const activeImage = activeImageIndex === null ? null : auditImages[activeImageIndex];

  return (
    <div className="audit-layout">
      <p className="dialog-lede">Анализировала административные пользовательские сценарии: фильтрацию, массовый выбор, статусы, блокировку и архивацию. Выявляла точки, где интерфейс повышал риск ошибки, и формулировала предложения по улучшению.</p>
      <div className="audit-gallery">
        {auditImages.map((image, index) => (
          <figure key={image.src}>
            <button
              className="audit-image-trigger"
              type="button"
              ref={(node) => { triggerRefs.current[index] = node; }}
              aria-label={`Открыть изображение ${String(index + 1).padStart(2, "0")} — ${image.title}`}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
              <span>Открыть <span className="link-arrow" aria-hidden="true"><ArrowUpRightIcon /></span></span>
            </button>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span> {image.title}</figcaption>
          </figure>
        ))}
      </div>
      <p className="result-note"><strong>Результат:</strong> выявленные проблемы и предложения были оформлены как задачи на доработку.</p>
      <p className="nda-note"><strong>NDA-safe.</strong> Без персональных данных, клиентской информации и закрытой бизнес-логики.</p>

      {activeImage ? (
        <div
          className="audit-lightbox"
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="audit-lightbox-title"
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
        >
          <div className="audit-lightbox-shell">
            <header>
              <p id="audit-lightbox-title"><span>{String(activeImageIndex! + 1).padStart(2, "0")}</span>{activeImage.title}</p>
              <button ref={closeButtonRef} data-lightbox-close="true" type="button" onClick={closeLightbox} aria-label="Закрыть полноразмерное изображение">×</button>
            </header>
            <div className="audit-lightbox-stage">
              <img src={activeImage.src} alt={activeImage.alt} />
            </div>
            <nav aria-label="Навигация по изображениям">
              <button type="button" onClick={showPrevious} aria-label="Предыдущее изображение">← <span>Назад</span></button>
              <p>{activeImageIndex! + 1} / {auditImages.length}</p>
              <button type="button" onClick={showNext} aria-label="Следующее изображение"><span>Далее</span> →</button>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PortfolioNode({
  module,
  active,
  onOpen,
}: {
  module: PortfolioModule;
  active: boolean;
  onOpen: (id: string) => void;
}) {
  return (
    <button
      className={`portfolio-node portfolio-node--${module.position}${active ? " is-active" : ""}`}
      type="button"
      aria-label={`Открыть раздел «${module.title}»`}
      aria-haspopup="dialog"
      aria-expanded={active}
      aria-controls="portfolio-dialog"
      onClick={() => onOpen(module.id)}
    >
      <span className="node-number">{module.number}</span>
      <span className="node-copy"><strong>{module.title}</strong><small>{module.short}</small></span>
      <span className="node-arrow" aria-hidden="true">
        <ArrowUpRightIcon />
      </span>
    </button>
  );
}

function ModuleContent({ id }: { id: string }): ReactNode {
  if (id === "about") {
    return (
      <div className="about-layout">
        <div className="about-description">
          <p>QA Engineer с 3+ годами опыта в тестировании web-платформ, API, интеграций и расчётной бизнес-логики. Проверяю frontend и backend, API и данные в БД, анализирую логи и локализую дефекты на стыке приложения, данных, интеграций и инфраструктуры.</p>
          <p>Есть опыт системной диагностики и работы с инфотерминалами, включая устройства с биометрической идентификацией. Участвую в релизном тестировании и автоматизирую UI/E2E-сценарии на Python с Selenium и Playwright.</p>
        </div>
        <p className="about-positioning">Рассматриваю позиции QA Engineer Middle · Manual + Automation · Web / API / Backend</p>
        <div className="about-facts">
          <Metric value="3+ года" label="Commercial QA experience" />
          <Metric value="QA Middle" label="Manual + Automation" />
          <Metric value="Web · API · Backend" label="E2E · Business logic · Data" />
        </div>
        <p className="about-metadata">Astana, Kazakhstan · GMT+5 · Remote / relocation</p>
      </div>
    );
  }

  if (id === "experience") {
    return (
      <div className="dialog-timeline">
        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`}>
            <div className="timeline-meta"><span>{job.period}</span><strong>{job.company}</strong></div>
            <div className="timeline-body">
              <h3>{job.role}</h3>
              <p className="timeline-context">{job.context}</p>
              {job.focus ? (
                <div className="timeline-focus">
                  <p className="timeline-section-label">Основные направления</p>
                  <ul className="timeline-directions">{job.focus.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ) : null}
              {job.projects ? (
                <div className="timeline-projects">
                  {job.projects.map((project) => (
                    <section key={project.title}>
                      <h4>{project.title}</h4>
                      <p>{project.details}</p>
                      {project.groups ? (
                        <div className="timeline-project-groups">
                          {project.groups.map((group) => <p key={group.label}><strong>{group.label}:</strong><span>{group.text}</span></p>)}
                        </div>
                      ) : null}
                      {project.note ? <p className="timeline-project-note">{project.note}</p> : null}
                      {project.emphasis ? <p className="timeline-project-emphasis">{project.emphasis}</p> : null}
                    </section>
                  ))}
                </div>
              ) : null}
              {job.impact ? (
                <div className="timeline-automation">
                  <p className="timeline-section-label">{job.impact.label}</p>
                  {job.impact.title ? <strong>{job.impact.title}</strong> : null}
                  <div className="timeline-automation-grid">
                    {job.impact.columns.map((column) => (
                      <section className={column.primary ? "is-primary" : undefined} key={column.label}>
                        <small>{column.label}</small>
                        {column.value ? <strong className="timeline-impact-value">{column.value}</strong> : null}
                        {column.description ? <p className="timeline-impact-description">{column.description}</p> : null}
                        {column.items ? <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                        {column.secondary ? <div className="timeline-impact-secondary">{column.secondary.map((item) => <span key={item}>{item}</span>)}</div> : null}
                        {column.calculation ? <p className="timeline-impact-calculation">{column.calculation}</p> : null}
                      </section>
                    ))}
                  </div>
                  {job.impact.note ? <p className="timeline-impact-note">{job.impact.note}</p> : null}
                </div>
              ) : null}
              {job.roleScale ? (
                <div className="timeline-role-scale">
                  <p className="timeline-section-label">Масштаб роли</p>
                  <div>{job.roleScale.map((item) => <section key={item.value}><strong>{item.value}</strong><span>{item.label}</span></section>)}</div>
                </div>
              ) : null}
              {job.personalResult ? <p className="timeline-personal"><span>Личный результат</span><strong>{job.personalResult}</strong></p> : null}
              {job.results.length ? <ul className="timeline-results">{job.results.map((result) => <li key={result}>{result}</li>)}</ul> : null}
            </div>
          </article>
        ))}
        <a className="inline-link" href="/documents/ekaterina-dediashkina-resume.pdf" target="_blank" rel="noreferrer">Подробный опыт в CV <span className="link-arrow" aria-hidden="true"><ArrowUpRightIcon /></span></a>
      </div>
    );
  }

  if (id === "e2e") {
    const journey = ["Login", "Profile", "Assignments", "Session", "Assessment", "Result / Report", "Logout"];
    const valueBlocks = [
      {
        title: "Ежедневный контроль",
        text: "Автотесты выявляют падения критического пути после релизов и небольших изменений, в том числе когда отдельный ручной regression не запускался.",
      },
      {
        title: "Диагностика падения",
        text: "При ошибке сохраняются screenshots и logs, которые дают контекст сбоя и помогают быстрее перейти к локализации причины.",
      },
      {
        title: "Отчётность",
        text: "После прогона доступен отчёт с результатами и падениями: видно, какой сценарий сломался и с какого участка начинать анализ.",
      },
    ];
    const signalFlow = ["Change", "Daily E2E", "Failure", "Screenshot / Logs", "Diagnosis"];

    return (
      <div className="e2e-layout">
        <p className="dialog-lede">Автоматизировала критический пользовательский путь B2B-платформы. Наборы запускаются каждое утро и дают независимый regression-сигнал после изменений продукта.</p>

        <div className="e2e-journey" aria-label="Критический E2E-путь">
          {journey.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < journey.length - 1 ? <b aria-hidden="true">→</b> : null}
            </div>
          ))}
        </div>

        <div className="e2e-value-grid">
          {valueBlocks.map((block, index) => (
            <article key={block.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>

        <div className="e2e-meta">
          <div><small>Stack</small><strong>Python · Selenium · Playwright</strong></div>
          <div><small>Coverage</small><strong>8 E2E suites · daily run</strong></div>
        </div>

        <div className="e2e-signal-flow" aria-label="Процесс диагностики">
          {signalFlow.map((step, index) => (
            <div key={step}>
              <strong>{step}</strong>
              {index < signalFlow.length - 1 ? <span aria-hidden="true">→</span> : null}
            </div>
          ))}
        </div>

        <p className="e2e-diagnosis-note"><strong>Граница автоматизации:</strong> screenshots, logs и отчёт дают данные для диагностики; причину сбоя локализую я.</p>
      </div>
    );
  }

  if (id === "backend") {
    const flow = ["Методология", "Тестовые данные", "API / Backend", "PostgreSQL", "Расчёт", "Отчёт"];
    const checks = [
      {
        title: "Ожидаемый результат",
        text: "Разбираю методологию и определяю, какой результат система должна получить на контрольных данных.",
      },
      {
        title: "Проверка по слоям",
        text: "Сверяю API-ответы, серверную логику, данные PostgreSQL и логи, чтобы найти уровень, на котором возникает расхождение.",
      },
      {
        title: "Итог для клиента",
        text: "Проверяю, что рассчитанные значения корректно доходят до финального результата и отчёта без искажений.",
      },
    ];

    return (
      <div className="backend-layout">
        <p className="dialog-lede">Проверяю корректность результата по всей цепочке — от методологии и входных данных до backend-расчёта, PostgreSQL и итогового клиентского отчёта.</p>
        <div className="backend-flow" aria-label="Цепочка проверки бизнес-логики">
          {flow.map((step, index) => (
            <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < flow.length - 1 ? <b aria-hidden="true">→</b> : null}</div>
          ))}
        </div>

        <div className="backend-value-grid">
          {checks.map((check, index) => (
            <article key={check.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{check.title}</h3>
              <p>{check.text}</p>
            </article>
          ))}
        </div>

        <div className="backend-client-case">
          <strong>Клиентские кейсы</strong>
          <p>Воспроизвожу спорный результат на данных клиента и прохожу расчёт по слоям, чтобы определить источник расхождения: входные данные, методология, backend-логика или формирование отчёта.</p>
        </div>
      </div>
    );
  }

  if (id === "critical") {
    return (
      <div className="critical-layout">
        <div className="critical-summary">
          <strong>15 Critical до production</strong>
          <span>User flow · Assessment integrity · Multi-tenant data</span>
        </div>
        <div className="critical-cases">
          {criticalDefects.map((defect, index) => (
            <article key={defect.title}>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{defect.category}</small>
              </header>
              <h3>{defect.title}</h3>
              <section>
                <h4>Проблема</h4>
                <p>{defect.problem}</p>
              </section>
              <section className="critical-reasons">
                <h4>Почему Critical</h4>
                <ul>{defect.reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
              </section>
            </article>
          ))}
        </div>
        <p className="critical-conclusion">Критичность оцениваю не только по внешнему проявлению дефекта, но и по его влиянию на пользовательский сценарий, корректность результата и данные, а также по сложности восстановления после релиза.</p>
      </div>
    );
  }

  if (id === "l3") {
    const diagnosticFlow = ["Обращение", "Воспроизведение", "Диагностика", "Локализация", "Решение / Эскалация"];
    const capabilities = [
      { title: "Системная диагностика", text: "Active Directory · SQL · logs · monitoring" },
      { title: "Production-среда", text: "POS · SAP · retail infrastructure · internal systems" },
      { title: "Эскалация дефекта", text: "сценарий воспроизведения · фактический результат · технические данные для разбора" },
    ];

    return (
      <div className="l3-layout">
        <p className="dialog-lede">Диагностировала проблемы production retail-инфраструктуры: POS, SAP и внутренних систем. Работала с Active Directory, SQL, логами и мониторингом, локализовала источник проблемы и передавала воспроизводимые дефекты на дальнейший разбор.</p>

        <div className="l3-flow" aria-label="Процесс production-диагностики">
          {diagnosticFlow.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < diagnosticFlow.length - 1 ? <b aria-hidden="true">→</b> : null}
            </div>
          ))}
        </div>

        <div className="l3-capabilities">
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>

        <div className="metric-grid metric-grid--three l3-metrics">
          <Metric value="~1 000" label="обращений в месяц" tone="team" />
          <Metric value="98–99%" label="закрытие заявок" tone="team" />
          <Metric value="~97% смен" label="1-е место во внутреннем daily SLA-рейтинге" tone="personal" />
        </div>
      </div>
    );
  }

  if (id === "automation") {
    const integrationFlow = ["Backend / API", "Android app", "Device", "Physical action", "Result"];
    const integrationAreas = [
      { title: "API / Integrations", text: "JWT · QR-сценарии · backend interaction" },
      { title: "Android", text: "реальные устройства · эмуляторы · ADB · Kotlin / Espresso" },
      { title: "Physical equipment", text: "инфотерминалы · турникетные системы · биометрическая идентификация" },
    ];

    return (
      <div className="integration-layout">
        <p className="dialog-lede">Тестировала сценарии на стыке программного обеспечения, Android-устройств и физического оборудования: от API и мобильного приложения до терминалов и систем идентификации.</p>

        <div className="integration-flow" aria-label="Полный интеграционный сценарий">
          {integrationFlow.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < integrationFlow.length - 1 ? <b aria-hidden="true">→</b> : null}
            </div>
          ))}
        </div>

        <div className="integration-areas">
          {integrationAreas.map((area, index) => (
            <article key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>

        <p className="integration-conclusion">Проверяла не только поведение приложения, но и полный интеграционный сценарий между ПО и физическим оборудованием.</p>
      </div>
    );
  }

  if (id === "audit") {
    return <AuditModule />;
  }

  if (id === "stack") {
    return (
      <div className="stack-layout">
        <div className="stack-grid">
          {stackGroups.map((group, index) => (
            <article key={group.title}>
              <div className="stack-heading"><span>{String(index + 1).padStart(2, "0")}</span><h3>{group.title}</h3></div>
              <dl>
                {group.rows.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function PortfolioDialog({ activeId, onClose }: { activeId: string | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeModule = portfolioModules.find((module) => module.id === activeId) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeModule && !dialog.open) dialog.showModal();
    if (!activeModule && dialog.open) dialog.close();
  }, [activeModule]);

  useEffect(() => {
    if (!activeModule) return;
    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
    };
  }, [activeModule]);

  return (
    <dialog
      id="portfolio-dialog"
      className="portfolio-dialog"
      ref={dialogRef}
      aria-labelledby={activeModule ? `dialog-title-${activeModule.id}` : undefined}
      onCancel={(event) => {
        event.preventDefault();
        const lightboxClose = dialogRef.current?.querySelector<HTMLButtonElement>("[data-lightbox-close]");
        if (lightboxClose) {
          lightboxClose.click();
          return;
        }
        onClose();
      }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      {activeModule ? (
        <div className="dialog-shell">
          <header className="dialog-header">
            <div><span>{activeModule.number}</span><p>QA profile module</p></div>
            <button className="dialog-close" type="button" onClick={onClose} aria-label={`Закрыть раздел «${activeModule.title}»`}>
              <span className="dialog-close-label">Закрыть</span>
              <span className="dialog-close-icon" aria-hidden="true">
                <svg viewBox="0 0 18 18" focusable="false">
                  <path d="m5.5 5.5 7 7m0-7-7 7" />
                </svg>
              </span>
            </button>
          </header>
          <div className={`dialog-content${activeModule.id === "about" ? " dialog-content--about" : activeModule.id === "stack" ? " dialog-content--stack" : ""}`}>
            <h2 id={`dialog-title-${activeModule.id}`}>{activeModule.title}</h2>
            <ModuleContent id={activeModule.id} />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

export default function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      setActiveId(moduleIds.has(hash) ? hash : null);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
    };
  }, []);

  const openModule = (id: string) => {
    window.history.pushState({ portfolioModule: id }, "", `#${id}`);
    setActiveId(id);
  };

  const closeModule = () => {
    if (window.history.state?.portfolioModule) {
      window.history.back();
      return;
    }

    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    setActiveId(null);
  };

  return (
    <main id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Екатерина Дедяшкина — начало страницы">ED<span>.</span></a>
        <nav aria-label="Основная навигация"><a href="#map">Карта</a><a href="#contact">Контакты</a></nav>
        <a className="nav-cta" href="/documents/ekaterina-dediashkina-resume.pdf" target="_blank" rel="noreferrer">CV <span className="link-arrow" aria-hidden="true"><ArrowUpRightIcon /></span></a>
      </header>

      <section className="portfolio-workspace" id="map" aria-labelledby="page-title">
        <div className="map-intro">
          <p>QA PROFILE · INTERACTIVE MAP</p>
          <span>Выберите направление, чтобы открыть детали</span>
        </div>

        <div className="portfolio-map">
          <div className="profile-core">
            <span className="core-mark" aria-hidden="true">ED.</span>
            <div className="core-copy">
              <p>Екатерина</p>
              <h1 id="page-title">Дедяшкина</h1>
              <strong>QA Engineer</strong>
              <span>Web · API · Backend</span>
              <span>Manual + Automation</span>
              <small>3+ года в QA</small>
            </div>
          </div>

          {portfolioModules.map((module) => (
            <PortfolioNode key={module.id} module={module} active={activeId === module.id} onOpen={openModule} />
          ))}
        </div>
      </section>

      <section className="contact-strip" id="contact" aria-labelledby="contact-title">
        <div>
          <span>Астана · GMT+5 · Гражданство РФ</span>
          <h2 id="contact-title">Рассматриваю позиции QA Engineer</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:evstifeevavita813@gmail.com">Email <span className="link-arrow" aria-hidden="true"><ArrowUpRightIcon /></span></a>
          <a href="https://t.me/KeitAddams" target="_blank" rel="noreferrer">Telegram <span className="link-arrow" aria-hidden="true"><ArrowUpRightIcon /></span></a>
        </div>
      </section>

      <footer className="footer">
        <p>Екатерина Дедяшкина · QA Engineer</p>
        <p>Web / API / Backend · Manual + Automation</p>
        <a href="#top">Наверх ↑</a>
      </footer>

      <PortfolioDialog activeId={activeId} onClose={closeModule} />
    </main>
  );
}
