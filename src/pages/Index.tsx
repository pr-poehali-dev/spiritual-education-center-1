import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const LOGO_COLOR = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/ba8bcf18-ec80-4704-932a-b1cbc43c89f7.png";
const LOGO_WHITE = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/45fbc628-6f01-464e-b5c2-94c0c700cecd.png";
const HERO_IMAGE = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/files/68c6f3d6-7955-444e-8594-cf5a045c0d2a.jpg";
const SCHOOL_IMAGE = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/files/00825c27-7423-417c-9077-b525bd268d20.jpg";
const ICON_IMAGE = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/files/8adc616d-6f11-4735-bead-e32309f81ac4.jpg";

const NAV_ITEMS = [
  { label: "О центре", href: "#about" },
  { label: "Направления", href: "#directions" },
  { label: "Мастерские", href: "#workshops" },
  { label: "Спорт", href: "#sport" },
  { label: "Мероприятия", href: "#events" },
  { label: "Галерея", href: "#gallery" },
  { label: "Педагоги", href: "#teachers" },
  { label: "Расписание", href: "#schedule" },
  { label: "Контакты", href: "#contacts" },
];

const TEACHERS = [
  { name: "Иерей Иоанн Новиков", role: "Настоятель храма", subject: "Духовные беседы", icon: "Cross" },
  { name: "Володин Лука Михайлович", role: "Педагог", subject: "Священное Писание. Новый Завет", icon: "BookOpen" },
  { name: "Копысов Дмитрий Александрович", role: "Педагог", subject: "Урок «Хлеб насущный»", icon: "Wheat" },
  { name: "Наталья Васильевна Антонова", role: "Педагог", subject: "Закон Божий, урок «Хлеб насущный»", icon: "BookMarked" },
  { name: "Елена Викторовна Тросникова", role: "Педагог", subject: "Рассказы о святых", icon: "ScrollText" },
  { name: "Людмила Павловна Медведьева", role: "Педагог", subject: "Язык православного богослужения", icon: "Church" },
  { name: "Мария Анатольевна Пузина", role: "Педагог", subject: "Церковнославянский язык", icon: "Languages" },
  { name: "Матрона Дмитровна Патрушева", role: "Педагог", subject: "Церковное пение", icon: "Music" },
  { name: "Юлия Анатольевна Харитонова", role: "Педагог", subject: "Экскурсии и паломничество", icon: "MapPin" },
  { name: "Илюхин Владимир", role: "Мастер", subject: "Столярная мастерская", icon: "Hammer" },
  { name: "Кибец Вероника Вадимовна", role: "Педагог", subject: "Живопись", icon: "Paintbrush" },
  { name: "Тряпицина Анна Андреевна", role: "Педагог", subject: "Швейное мастерство", icon: "Scissors" },
];

const DIRECTIONS = [
  { icon: "BookOpen", title: "Воскресная школа", desc: "Занятия для детей и взрослых по основам православной веры, истории Церкви и духовной жизни", age: "5–18 лет" },
  { icon: "Mic", title: "Лекции и беседы", desc: "Просветительские встречи, открытые беседы с духовенством, тематические вечера и дискуссии", age: "Все возрасты" },
  { icon: "Heart", title: "Благотворительность", desc: "Социальные проекты помощи нуждающимся, работа с людьми с ОВЗ, волонтёрское служение", age: "Все возрасты" },
  { icon: "Users", title: "Патриотическое воспитание", desc: "Культурно-массовые и патриотические мероприятия, связь поколений и историческая память", age: "5–25 лет" },
];

const WORKSHOPS = [
  { icon: "Hammer", title: "Столярное дело", desc: "Работа с деревом, создание изделий ручной работы, освоение традиционных техник" },
  { icon: "Paintbrush", title: "Живопись и иконопись", desc: "Классическая живопись, акварель, основы иконописи в традиции православного искусства" },
  { icon: "Music", title: "Музыка и хоровое пение", desc: "Обучение игре на инструментах, церковное пение, хоровая студия" },
  { icon: "Scissors", title: "Швейное мастерство", desc: "Основы шитья, вышивка, рукоделие и традиционные народные ремёсла" },
];

const SPORT = [
  { icon: "Shield", title: "Самбо", desc: "Секция самбо для детей и подростков — дисциплина, сила духа, уважение к сопернику" },
  { icon: "Swords", title: "Рукопашный бой", desc: "Традиционный рукопашный бой, воспитание воли и характера, уроки чести" },
  { icon: "Activity", title: "Оздоровительная физкультура", desc: "Занятия для всех возрастов: утренняя гимнастика, общефизическая подготовка, ЛФК" },
];

const SCHEDULE = [
  { day: "Воскресенье", items: ["09:00 — Воскресная школа (дети 5–10 лет)", "11:00 — Воскресная школа (дети 11–16 лет)", "13:00 — Закон Божий", "14:00 — Рассказы о святых", "15:00 — Хоровое пение"] },
  { day: "Понедельник", items: ["16:00 — Столярное дело", "17:00 — Рукопашный бой", "18:00 — Церковнославянский язык", "19:00 — Оздоровительная физкультура"] },
  { day: "Среда", items: ["15:00 — Живопись (дети)", "16:00 — Священное Писание. Новый Завет", "17:00 — Урок «Хлеб насущный»", "18:00 — Швейное мастерство", "19:00 — Иконопись (взрослые)"] },
  { day: "Пятница", items: ["16:00 — Самбо", "17:00 — Язык православного богослужения", "18:00 — Музыка", "19:00 — Лекция / открытая беседа"] },
];

const EVENTS_LIST = [
  { date: "15 июня", title: "День защиты детей", desc: "Праздничная программа для детей и семей прихода", type: "Праздник" },
  { date: "22 июня", title: "День памяти и скорби", desc: "Патриотический вечер, молебен о погибших воинах", type: "Патриотика" },
  { date: "12 июля", title: "День святых апостолов Петра и Павла", desc: "Торжественное богослужение и концертная программа", type: "Богослужение" },
  { date: "1 сентября", title: "День знаний", desc: "Молебен о начале учебного года, чаепитие, знакомство с программами центра", type: "Образование" },
];

const ORNAMENT_URL = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/fb22308e-ee49-42a2-9697-8f204206dc67.png";

function Ornament({ flip = false, opacity = 0.55 }: { flip?: boolean; opacity?: number }) {
  return (
    <div className="w-full overflow-hidden pointer-events-none" style={{ lineHeight: 0 }}>
      <img
        src={ORNAMENT_URL}
        alt=""
        className="w-full"
        style={{
          transform: flip ? "scaleY(-1)" : "none",
          opacity,
          maxHeight: "90px",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </div>
  );
}

function useIntersect(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useIntersect();
  return (
    <div ref={ref} className={`section-enter ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

interface RegistrationModalProps {
  onClose: () => void;
}

function RegistrationModal({ onClose }: RegistrationModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", direction: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const directions = [
    "Воскресная школа", "Столярное дело", "Живопись", "Иконопись",
    "Музыка", "Швейное мастерство", "Самбо", "Рукопашный бой",
    "Оздоровительная физкультура", "Лекции и беседы", "Благотворительность",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(26,45,31,0.7)", backdropFilter: "blur(4px)" }}
    >
      <div className="w-full max-w-lg bg-white rounded-sm shadow-2xl overflow-hidden animate-fade-in">
        <div className="px-8 py-6 flex items-start justify-between" style={{ backgroundColor: "var(--c-green-dark)" }}>
          <div>
            <p className="font-golos text-xs tracking-widest uppercase mb-1" style={{ color: "var(--c-gold)" }}>Запись на занятие</p>
            <h3 className="font-cormorant text-2xl font-light text-white">Центр св. Киприана</h3>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors mt-1">
            <Icon name="X" size={20} />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-golos text-xs tracking-wider uppercase mb-2 block" style={{ color: "var(--c-text-muted)" }}>Имя и фамилия *</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border-b py-2 text-sm font-golos outline-none transition-all"
                  style={{ borderColor: "var(--c-green-light)", backgroundColor: "transparent" }}
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="font-golos text-xs tracking-wider uppercase mb-2 block" style={{ color: "var(--c-text-muted)" }}>Телефон *</label>
                <input
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border-b py-2 text-sm font-golos outline-none transition-all"
                  style={{ borderColor: "var(--c-green-light)", backgroundColor: "transparent" }}
                  placeholder="+7 (900) 000-00-00"
                />
              </div>
            </div>
            <div>
              <label className="font-golos text-xs tracking-wider uppercase mb-2 block" style={{ color: "var(--c-text-muted)" }}>Email</label>
              <input
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full border-b py-2 text-sm font-golos outline-none transition-all"
                style={{ borderColor: "var(--c-green-light)", backgroundColor: "transparent" }}
                placeholder="mail@example.com"
              />
            </div>
            <div>
              <label className="font-golos text-xs tracking-wider uppercase mb-2 block" style={{ color: "var(--c-text-muted)" }}>Направление *</label>
              <select
                required
                value={form.direction}
                onChange={e => setForm(f => ({ ...f, direction: e.target.value }))}
                className="w-full border-b py-2 text-sm font-golos outline-none transition-all bg-transparent"
                style={{ borderColor: "var(--c-green-light)" }}
              >
                <option value="">Выберите направление...</option>
                {directions.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="font-golos text-xs tracking-wider uppercase mb-2 block" style={{ color: "var(--c-text-muted)" }}>Комментарий</label>
              <textarea
                value={form.comment}
                onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                rows={2}
                className="w-full border-b py-2 text-sm font-golos outline-none transition-all resize-none"
                style={{ borderColor: "var(--c-green-light)", backgroundColor: "transparent" }}
                placeholder="Возраст участника, вопросы..."
              />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <button type="submit" className="btn-primary flex-1">Отправить заявку</button>
              <p className="text-xs font-golos" style={{ color: "var(--c-text-muted)" }}>Свяжемся в течение дня</p>
            </div>
          </form>
        ) : (
          <div className="px-8 py-12 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--c-green-pale)" }}>
              <Icon name="Check" size={28} style={{ color: "var(--c-green-mid)" }} />
            </div>
            <h4 className="font-cormorant text-2xl mb-3" style={{ color: "var(--c-green-dark)" }}>Заявка принята</h4>
            <p className="font-golos text-sm mb-6" style={{ color: "var(--c-text-muted)" }}>
              Спасибо, {form.name}! Мы свяжемся с вами по телефону или email для подтверждения записи.
            </p>
            <button onClick={onClose} className="btn-primary">Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const galleryImages = [
    { src: HERO_IMAGE, caption: "Храм Троицы Живоначальной" },
    { src: SCHOOL_IMAGE, caption: "Занятия воскресной школы" },
    { src: ICON_IMAGE, caption: "Мастерская иконописи" },
    { src: HERO_IMAGE, caption: "Территория центра" },
    { src: SCHOOL_IMAGE, caption: "Праздничное мероприятие" },
    { src: ICON_IMAGE, caption: "Мастер-класс по росписи" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--c-beige)" }}>

      {/* ── НАВИГАЦИЯ ── */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247,243,237,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid var(--c-beige-dark)" : "none",
          boxShadow: scrolled ? "0 1px 20px rgba(26,61,43,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between gap-8">
          <a href="#" className="flex-shrink-0">
            <img
              src={scrolled ? LOGO_COLOR : LOGO_WHITE}
              alt="Центр св. Киприана"
              className="transition-all duration-300 object-contain"
              style={{
                height: "52px",
                width: "auto",
                maxWidth: "160px",
                filter: scrolled ? "none" : "drop-shadow(0 1px 4px rgba(0,0,0,0.18))",
              }}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-4 flex-1 justify-center flex-nowrap">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} className="nav-link whitespace-nowrap" style={{ fontSize: "0.7rem" }}>{item.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center flex-shrink-0">
            <button onClick={() => setModalOpen(true)} className="btn-primary text-sm">Записаться</button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--c-green-dark)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t px-6 py-6 space-y-4" style={{ backgroundColor: "var(--c-beige)", borderColor: "var(--c-beige-dark)" }}>
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} className="block nav-link py-1" onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <button onClick={() => { setModalOpen(true); setMenuOpen(false); }} className="btn-primary w-full mt-4">Записаться</button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Центр" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,30,18,0.88) 40%, rgba(13,30,18,0.35) 100%)" }} />
        </div>
        <div className="absolute top-1/3 right-16 hidden xl:block opacity-20">
          <div className="w-px h-40 mx-auto" style={{ backgroundColor: "var(--c-gold)" }} />
          <div className="w-3 h-3 rounded-full mx-auto -mt-1.5 -ml-1" style={{ backgroundColor: "var(--c-gold)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <img
              src={LOGO_WHITE}
              alt="Логотип"
              className="mb-8 animate-fade-in object-contain"
              style={{ height: "160px", width: "auto", maxWidth: "320px", animationDelay: "0.1s", opacity: 0, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))" }}
            />
            <p className="font-golos text-xs tracking-widest uppercase mb-6 animate-fade-in" style={{ color: "var(--c-gold)", animationDelay: "0.2s", opacity: 0 }}>
              Духовно-просветительский центр
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight mb-6 text-white animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
              Во имя<br /><em>святителя<br />Киприана</em>
            </h1>
            <div className="gold-divider animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }} />
            <p className="font-golos text-base md:text-lg leading-relaxed mt-6 mb-10 animate-fade-in" style={{ color: "rgba(255,255,255,0.75)", animationDelay: "0.7s", maxWidth: "520px", opacity: 0 }}>
              Пространство духовного роста, образования и служения при храме Троицы Живоначальной
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.9s", opacity: 0 }}>
              <button onClick={() => setModalOpen(true)} className="btn-outline">Записаться на занятие</button>
              <a href="#directions" className="btn-outline">Наши направления</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 animate-pulse" style={{ backgroundColor: "var(--c-gold)" }} />
        </div>
      </section>

      {/* ── СТАТИСТИКА ── */}
      <section style={{ backgroundColor: "var(--c-green-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10+", label: "направлений" },
              { num: "200+", label: "участников" },
              { num: "15+", label: "педагогов" },
              { num: "5", label: "дней в неделю" },
            ].map(s => (
              <div key={s.label}>
                <p className="font-cormorant text-5xl font-light mb-2" style={{ color: "var(--c-gold)" }}>{s.num}</p>
                <p className="font-golos text-sm tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ornament flip opacity={0.4} />

      {/* ── О ЦЕНТРЕ ── */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>О центре</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: "var(--c-green-dark)" }}>
                Духовное ядро<br /><em>общественной жизни</em>
              </h2>
              <div className="gold-divider" />
              <p className="font-golos text-base leading-relaxed mt-6 mb-5" style={{ color: "var(--c-text-muted)" }}>
                Центр создан при храме Троицы Живоначальной как многофункциональное пространство, объединяющее образовательную, культурную, социальную и спортивную деятельность.
              </p>
              <p className="font-golos text-base leading-relaxed mb-8" style={{ color: "var(--c-text-muted)" }}>
                Назван в честь святителя Киприана — митрополита Московского и всея Руси, выдающегося просветителя, ревнителя церковного единства и православной образованности. Его духовный облик задаёт ценностный вектор всей деятельности центра.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Образование", "Культура", "Спорт", "Служение"].map(tag => (
                  <span key={tag} className="font-golos text-xs tracking-wider uppercase px-4 py-2 border" style={{ borderColor: "var(--c-green-light)", color: "var(--c-green-mid)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </AnimSection>
            <AnimSection className="relative">
              <div className="relative">
                <img src={SCHOOL_IMAGE} alt="О центре" className="w-full object-cover rounded-sm shadow-lg" style={{ height: "420px" }} />
                <div className="absolute -bottom-6 -left-6 w-48 p-5 hidden md:block" style={{ backgroundColor: "var(--c-green-dark)" }}>
                  <p className="font-cormorant text-3xl font-light mb-1" style={{ color: "var(--c-gold)" }}>XIV в.</p>
                  <p className="font-golos text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Время жизни святителя Киприана</p>
                </div>
                <div className="absolute top-6 -right-6 w-px h-24 hidden md:block" style={{ backgroundColor: "var(--c-gold)", opacity: 0.5 }} />
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      <Ornament opacity={0.35} />

      {/* ── НАПРАВЛЕНИЯ ── */}
      <section id="directions" className="py-24" style={{ backgroundColor: "var(--c-green-pale)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimSection className="text-center mb-16">
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Направления деятельности</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Что мы делаем</h2>
          </AnimSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIRECTIONS.map(d => (
              <AnimSection key={d.title}>
                <div className="bg-white p-8 h-full card-hover" style={{ borderTop: "2px solid var(--c-gold)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--c-green-pale)" }}>
                    <Icon name={d.icon} size={22} style={{ color: "var(--c-green-mid)" }} />
                  </div>
                  <h3 className="font-cormorant text-xl font-medium mb-3" style={{ color: "var(--c-green-dark)" }}>{d.title}</h3>
                  <p className="font-golos text-sm leading-relaxed mb-4" style={{ color: "var(--c-text-muted)" }}>{d.desc}</p>
                  <span className="font-golos text-xs tracking-wider uppercase px-3 py-1" style={{ backgroundColor: "var(--c-green-pale)", color: "var(--c-green-mid)" }}>
                    {d.age}
                  </span>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── МАСТЕРСКИЕ ── */}
      <section id="workshops" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimSection>
              <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Мастерские</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: "var(--c-green-dark)" }}>
                Кружки<br /><em>и ремёсла</em>
              </h2>
              <div className="gold-divider" />
              <p className="font-golos text-base leading-relaxed mt-6 mb-8" style={{ color: "var(--c-text-muted)" }}>
                Мастерские центра открыты для детей и взрослых. Здесь традиционное ремесло встречается с творчеством, а ручной труд становится путём к духовному сосредоточению.
              </p>
              <img src={ICON_IMAGE} alt="Мастерская" className="w-full object-cover rounded-sm shadow-md" style={{ height: "280px" }} />
            </AnimSection>
            <div className="space-y-4 lg:pt-20">
              {WORKSHOPS.map(w => (
                <AnimSection key={w.title}>
                  <div
                    className="flex gap-5 p-6 bg-white card-hover rounded-sm group cursor-pointer"
                    onClick={() => setModalOpen(true)}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "var(--c-green-pale)" }}>
                      <Icon name={w.icon} size={20} style={{ color: "var(--c-green-mid)" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-cormorant text-xl font-medium mb-2" style={{ color: "var(--c-green-dark)" }}>{w.title}</h3>
                      <p className="font-golos text-sm leading-relaxed" style={{ color: "var(--c-text-muted)" }}>{w.desc}</p>
                    </div>
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity self-center">
                      <Icon name="ArrowRight" size={18} style={{ color: "var(--c-gold)" }} />
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── СПОРТ ── */}
      <section id="sport" className="py-24" style={{ backgroundColor: "var(--c-green-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimSection className="text-center mb-16">
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Спортивные секции</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white">
              Здоровый дух —<br /><em style={{ color: "var(--c-gold-light)" }}>здоровое тело</em>
            </h2>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {SPORT.map(s => (
              <AnimSection key={s.title}>
                <div
                  className="p-8 h-full card-hover cursor-pointer"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}
                  onClick={() => setModalOpen(true)}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                    <Icon name={s.icon} size={22} style={{ color: "var(--c-gold)" }} />
                  </div>
                  <h3 className="font-cormorant text-2xl font-light text-white mb-3">{s.title}</h3>
                  <p className="font-golos text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
                  <button className="font-golos text-xs tracking-wider uppercase" style={{ color: "var(--c-gold)" }}>
                    Записаться →
                  </button>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── МЕРОПРИЯТИЯ ── */}
      <section id="events" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimSection className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Мероприятия</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Ближайшие события</h2>
            </div>
            <a href="#schedule" className="font-golos text-sm tracking-wider" style={{ color: "var(--c-green-mid)" }}>Расписание занятий →</a>
          </AnimSection>
          <div className="grid md:grid-cols-2 gap-6">
            {EVENTS_LIST.map(ev => (
              <AnimSection key={ev.title}>
                <div className="flex gap-6 p-7 bg-white card-hover rounded-sm">
                  <div className="flex-shrink-0 text-center w-14">
                    <p className="font-cormorant text-3xl font-light leading-none" style={{ color: "var(--c-green-dark)" }}>{ev.date.split(" ")[0]}</p>
                    <p className="font-golos text-xs mt-1" style={{ color: "var(--c-text-muted)" }}>{ev.date.split(" ")[1]}</p>
                  </div>
                  <div className="w-px flex-shrink-0" style={{ backgroundColor: "var(--c-beige-dark)" }} />
                  <div>
                    <span className="font-golos text-xs tracking-wider uppercase px-2 py-0.5 mb-3 inline-block" style={{ backgroundColor: "var(--c-green-pale)", color: "var(--c-green-mid)" }}>
                      {ev.type}
                    </span>
                    <h4 className="font-cormorant text-xl font-medium mb-2" style={{ color: "var(--c-green-dark)" }}>{ev.title}</h4>
                    <p className="font-golos text-sm" style={{ color: "var(--c-text-muted)" }}>{ev.desc}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ГАЛЕРЕЯ ── */}
      <section id="gallery" className="py-24" style={{ backgroundColor: "var(--c-beige-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimSection className="text-center mb-16">
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Галерея</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Жизнь центра</h2>
          </AnimSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <AnimSection key={i}>
                <div
                  className="relative overflow-hidden cursor-pointer group"
                  style={{ aspectRatio: i === 0 || i === 3 ? "4/3" : "1/1" }}
                  onClick={() => setActiveGallery(i)}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(13,30,18,0.7), transparent)" }}>
                    <p className="font-golos text-sm text-white">{img.caption}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <Ornament flip opacity={0.4} />

      {/* ── РАСПИСАНИЕ ── */}
      <section id="schedule" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimSection className="text-center mb-16">
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Расписание</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Занятия по дням</h2>
          </AnimSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHEDULE.map(day => (
              <AnimSection key={day.day}>
                <div className="h-full">
                  <div className="py-3 px-5 mb-4" style={{ backgroundColor: "var(--c-green-dark)" }}>
                    <p className="font-cormorant text-lg text-white">{day.day}</p>
                  </div>
                  <div className="space-y-3">
                    {day.items.map((item, j) => (
                      <div key={j} className="flex gap-3 p-3 bg-white rounded-sm">
                        <div className="w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--c-gold)" }} />
                        <p className="font-golos text-sm leading-relaxed" style={{ color: "var(--c-text)" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection className="mt-12 text-center">
            <button onClick={() => setModalOpen(true)} className="btn-primary">Записаться на занятие</button>
          </AnimSection>
        </div>
      </section>

      <Ornament opacity={0.35} />

      {/* ── ПЕДАГОГИ ── */}
      <section id="teachers" className="py-24" style={{ backgroundColor: "var(--c-green-pale)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimSection className="text-center mb-16">
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Преподаватели</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Наши педагоги</h2>
          </AnimSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TEACHERS.map(t => (
              <AnimSection key={t.name}>
                <div className="bg-white rounded-sm card-hover flex flex-col overflow-hidden">
                  {/* Место для фото */}
                  <div className="relative flex items-center justify-center" style={{ height: "200px", backgroundColor: "var(--c-beige-dark)" }}>
                    <div className="flex flex-col items-center gap-3 opacity-40">
                      <Icon name="User" size={48} style={{ color: "var(--c-green-mid)" }} />
                      <p className="font-golos text-xs" style={{ color: "var(--c-text-muted)" }}>Фото</p>
                    </div>
                    {/* Иконка направления */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--c-green-dark)" }}>
                      <Icon name={t.icon} size={14} style={{ color: "var(--c-gold)" }} fallback="BookOpen" />
                    </div>
                  </div>
                  {/* Контент */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-golos text-xs tracking-wider uppercase mb-1" style={{ color: "var(--c-gold)" }}>{t.role}</p>
                    <h4 className="font-cormorant text-lg font-medium leading-snug mb-3" style={{ color: "var(--c-green-dark)" }}>{t.name}</h4>
                    <div className="mt-auto pt-3" style={{ borderTop: "1px solid var(--c-beige-dark)" }}>
                      <p className="font-golos text-xs leading-relaxed" style={{ color: "var(--c-text-muted)" }}>{t.subject}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--c-green-mid)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, var(--c-gold) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--c-green-dark) 0%, transparent 50%)" }} />
        <AnimSection className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Запись на занятия</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Начните свой путь<br /><em>прямо сейчас</em>
          </h2>
          <p className="font-golos text-base mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
            Оставьте заявку — мы свяжемся с вами, расскажем о программах и поможем выбрать подходящее направление для вас или вашего ребёнка
          </p>
          <button onClick={() => setModalOpen(true)} className="btn-outline text-base px-10 py-4">Оставить заявку</button>
        </AnimSection>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" className="py-24" style={{ backgroundColor: "var(--c-beige)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimSection className="text-center mb-16">
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Контакты</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Как нас найти</h2>
          </AnimSection>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["ул. Мосфильмовская, 18А", "Москва"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 000-00-00", "Пн–Пт: 9:00–20:00"] },
              { icon: "Mail", title: "Email", lines: ["info@kiprian-center.ru", "Отвечаем в течение дня"] },
            ].map(c => (
              <AnimSection key={c.title}>
                <div className="p-8 bg-white text-center card-hover">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "var(--c-green-pale)" }}>
                    <Icon name={c.icon} size={24} style={{ color: "var(--c-green-mid)" }} />
                  </div>
                  <h4 className="font-cormorant text-xl font-medium mb-3" style={{ color: "var(--c-green-dark)" }}>{c.title}</h4>
                  {c.lines.map(l => (
                    <p key={l} className="font-golos text-sm" style={{ color: "var(--c-text-muted)" }}>{l}</p>
                  ))}
                </div>
              </AnimSection>
            ))}
          </div>
          <AnimSection className="mt-8">
            <div className="w-full overflow-hidden rounded-sm" style={{ height: "360px", border: "1px solid var(--c-beige-dark)" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.527%2C55.726&z=16&pt=37.527,55.726,pm2gnm~37.527,55.726&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D0%9C%D0%BE%D1%81%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+18%D0%90"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "var(--c-green-dark)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src={LOGO_WHITE} alt="Логотип" className="opacity-90 object-contain" style={{ height: "80px", width: "auto", maxWidth: "160px" }} />
              <div className="text-center md:text-left">
                <p className="font-cormorant text-xl font-light text-white mb-1">Центр имени святителя Киприана</p>
                <p className="font-golos text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>при храме Троицы Живоначальной</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {NAV_ITEMS.slice(0, 5).map(item => (
                <a key={item.href} href={item.href} className="font-golos text-xs tracking-wider uppercase transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="font-golos text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              © 2025 Духовно-просветительский центр имени святителя Киприана
            </p>
          </div>
        </div>
      </footer>

      {/* ── МОДАЛЬНОЕ ОКНО ЗАПИСИ ── */}
      {modalOpen && <RegistrationModal onClose={() => setModalOpen(false)} />}

      {/* ── LIGHTBOX ── */}
      {activeGallery !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setActiveGallery(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white">
            <Icon name="X" size={28} />
          </button>
          <img src={galleryImages[activeGallery].src} alt="" className="max-w-full max-h-full object-contain rounded-sm" />
          <p className="absolute bottom-8 font-golos text-sm text-white/70">{galleryImages[activeGallery].caption}</p>
        </div>
      )}
    </div>
  );
}