import { useEffect, useRef, useState } from "react";

export const LOGO_COLOR = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/ba8bcf18-ec80-4704-932a-b1cbc43c89f7.png";
export const LOGO_WHITE = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/45fbc628-6f01-464e-b5c2-94c0c700cecd.png";
export const L_HANDS   = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/92c6fcab-f17e-4c84-ad59-dc6313e374ff.png";
export const L_CIRCLES = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/48b4878a-4e9c-4f59-820d-2a4580fb175d.png";
export const L_TEXT    = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/ecf7b6ca-0c71-4696-b19d-99d4ad9c12f0.png";
export const HERO_IMAGE   = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/ca212f9c-0698-47c6-8045-5277242a3494.png";
export const SCHOOL_IMAGE = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/734a3b55-2c21-474e-b164-bf7df959cf16.png";
export const ICON_IMAGE   = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/files/8adc616d-6f11-4735-bead-e32309f81ac4.jpg";
export const ORNAMENT_URL = "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/fb22308e-ee49-42a2-9697-8f204206dc67.png";

export const NAV_ITEMS = [
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

export const TEACHERS = [
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

export const DIRECTIONS = [
  { icon: "BookOpen", title: "Воскресная школа", desc: "Занятия для детей и взрослых по основам православной веры, истории Церкви и духовной жизни", age: "5–18 лет" },
  { icon: "Mic", title: "Лекции и беседы", desc: "Просветительские встречи, открытые беседы с духовенством, тематические вечера и дискуссии", age: "Все возрасты" },
  { icon: "Heart", title: "Благотворительность", desc: "Социальные проекты помощи нуждающимся, работа с людьми с ОВЗ, волонтёрское служение", age: "Все возрасты" },
  { icon: "Users", title: "Патриотическое воспитание", desc: "Культурно-массовые и патриотические мероприятия, связь поколений и историческая память", age: "5–25 лет" },
];

export const WORKSHOPS = [
  { icon: "Hammer", title: "Столярное дело", desc: "Работа с деревом, создание изделий ручной работы, освоение традиционных техник" },
  { icon: "Paintbrush", title: "Живопись и иконопись", desc: "Классическая живопись, акварель, основы иконописи в традиции православного искусства" },
  { icon: "Music", title: "Музыка и хоровое пение", desc: "Обучение игре на инструментах, церковное пение, хоровая студия" },
  { icon: "Scissors", title: "Швейное мастерство", desc: "Основы шитья, вышивка, рукоделие и традиционные народные ремёсла" },
];

export const SPORT = [
  { icon: "Shield", title: "Самбо", desc: "Секция самбо для детей и подростков — дисциплина, сила духа, уважение к сопернику" },
  { icon: "Swords", title: "Рукопашный бой", desc: "Традиционный рукопашный бой, воспитание воли и характера, уроки чести" },
  { icon: "Activity", title: "Оздоровительная физкультура", desc: "Занятия для всех возрастов: утренняя гимнастика, общефизическая подготовка, ЛФК" },
];

export const SCHEDULE = [
  { day: "Воскресенье", items: ["09:00 — Воскресная школа (дети 5–10 лет)", "11:00 — Воскресная школа (дети 11–16 лет)", "13:00 — Закон Божий", "14:00 — Рассказы о святых", "15:00 — Хоровое пение"] },
  { day: "Понедельник", items: ["16:00 — Столярное дело", "17:00 — Рукопашный бой", "18:00 — Церковнославянский язык", "19:00 — Оздоровительная физкультура"] },
  { day: "Среда", items: ["15:00 — Живопись (дети)", "16:00 — Священное Писание. Новый Завет", "17:00 — Урок «Хлеб насущный»", "18:00 — Швейное мастерство", "19:00 — Иконопись (взрослые)"] },
  { day: "Пятница", items: ["16:00 — Самбо", "17:00 — Язык православного богослужения", "18:00 — Музыка", "19:00 — Лекция / открытая беседа"] },
];

export const EVENTS_LIST = [
  { date: "15 июня", title: "День защиты детей", desc: "Праздничная программа для детей и семей прихода", type: "Праздник" },
  { date: "22 июня", title: "День памяти и скорби", desc: "Патриотический вечер, молебен о погибших воинах", type: "Патриотика" },
  { date: "12 июля", title: "День святых апостолов Петра и Павла", desc: "Торжественное богослужение и концертная программа", type: "Богослужение" },
  { date: "1 сентября", title: "День знаний", desc: "Молебен о начале учебного года, чаепитие, знакомство с программами центра", type: "Образование" },
];

export function useIntersect(threshold = 0.15) {
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

export function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useIntersect();
  return (
    <div ref={ref} className={`section-enter ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Ornament({ flip = false, opacity = 1 }: { flip?: boolean; opacity?: number }) {
  return (
    <div className="w-full pointer-events-none flex items-center justify-center py-6" style={{ opacity }}>
      <div className="flex items-center w-full max-w-4xl px-8 gap-0">

        {/* Левая часть */}
        <div className="flex-1 flex items-center gap-2">
          <div className="flex-1" style={{ height: "1px", background: "linear-gradient(to right, transparent, var(--c-gold))" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--c-gold)", opacity: 0.7 }} />
          <div style={{ width: "6px", height: "6px", transform: "rotate(45deg)", border: "1px solid var(--c-gold)" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--c-gold)", opacity: 0.7 }} />
          <div style={{ width: "6px", height: "6px", transform: "rotate(45deg)", border: "1px solid var(--c-gold)" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--c-gold)", opacity: 0.7 }} />
        </div>

        {/* Центральный крест */}
        <div className="flex-shrink-0 flex items-center justify-center mx-4" style={{ width: "32px", height: "32px", position: "relative" }}>
          {/* вертикальная линия */}
          <div style={{ position: "absolute", width: "1px", height: "32px", backgroundColor: "var(--c-gold)" }} />
          {/* горизонтальная линия */}
          <div style={{ position: "absolute", width: "32px", height: "1px", backgroundColor: "var(--c-gold)", top: "35%" }} />
          {/* верхняя перекладина */}
          <div style={{ position: "absolute", width: "16px", height: "1px", backgroundColor: "var(--c-gold)", top: "18%" }} />
          {/* точка сверху */}
          <div style={{ position: "absolute", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "var(--c-gold)", top: 0, left: "50%", transform: "translateX(-50%)" }} />
        </div>

        {/* Правая часть */}
        <div className="flex-1 flex items-center gap-2">
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--c-gold)", opacity: 0.7 }} />
          <div style={{ width: "6px", height: "6px", transform: "rotate(45deg)", border: "1px solid var(--c-gold)" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--c-gold)", opacity: 0.7 }} />
          <div style={{ width: "6px", height: "6px", transform: "rotate(45deg)", border: "1px solid var(--c-gold)" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--c-gold)", opacity: 0.7 }} />
          <div className="flex-1" style={{ height: "1px", background: "linear-gradient(to left, transparent, var(--c-gold))" }} />
        </div>

      </div>
    </div>
  );
}