import Icon from "@/components/ui/icon";
import {
  AnimSection, Ornament,
  LOGO_WHITE,
  HERO_IMAGE, SCHOOL_IMAGE, ICON_IMAGE,
  NAV_ITEMS, DIRECTIONS, WORKSHOPS, SPORT,
  SCHEDULE, EVENTS_LIST, TEACHERS,
} from "./shared";

interface SectionsProps {
  onRegister: () => void;
  galleryImages: { src: string; caption: string }[];
  activeGallery: number | null;
  setActiveGallery: (i: number | null) => void;
}

export default function Sections({ onRegister, galleryImages, activeGallery, setActiveGallery }: SectionsProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Центр" className="w-full h-full object-cover" style={{ objectPosition: "center 20%", transform: "scale(1.1)", transformOrigin: "center 20%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,30,18,0.88) 40%, rgba(13,30,18,0.35) 100%)" }} />
        </div>
        <div className="absolute top-1/3 right-16 hidden xl:block opacity-20">
          <div className="w-px h-40 mx-auto" style={{ backgroundColor: "var(--c-gold)" }} />
          <div className="w-3 h-3 rounded-full mx-auto -mt-1.5 -ml-1" style={{ backgroundColor: "var(--c-gold)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl pt-24 md:pt-0">
            <img
              src={LOGO_WHITE}
              alt="Логотип"
              className="mb-8 object-contain logo-animate h-28 md:h-48 lg:h-[200px]"
              style={{ width: "auto", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.3))" }}
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
              <button onClick={onRegister} className="btn-outline">Записаться на занятие</button>
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
                    onClick={onRegister}
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
                  onClick={onRegister}
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
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Фотогалерея</h2>
          </AnimSection>
          {/* Ряд 1: большое фото + два маленьких */}
          <AnimSection className="grid grid-cols-3 gap-3 mb-3">
            {/* Большое — занимает 2 колонки */}
            <div
              className="col-span-2 relative overflow-hidden cursor-pointer group"
              style={{ height: "420px" }}
              onClick={() => setActiveGallery(0)}
            >
              <img src={galleryImages[0].src} alt={galleryImages[0].caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5" style={{ background: "linear-gradient(to top, rgba(13,30,18,0.7), transparent)" }}>
                <p className="font-golos text-sm text-white">{galleryImages[0].caption}</p>
              </div>
            </div>
            {/* Два маленьких справа */}
            <div className="flex flex-col gap-3">
              {[1, 2].map(i => (
                <div key={i} className="relative overflow-hidden cursor-pointer group flex-1" onClick={() => setActiveGallery(i)}>
                  <img src={galleryImages[i].src} alt={galleryImages[i].caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ height: "204px" }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(13,30,18,0.7), transparent)" }}>
                    <p className="font-golos text-xs text-white">{galleryImages[i].caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>

          {/* Ряд 2: четыре одинаковых */}
          <AnimSection className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.slice(3).map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden cursor-pointer group"
                style={{ height: "220px" }}
                onClick={() => setActiveGallery(i + 3)}
              >
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3" style={{ background: "linear-gradient(to top, rgba(13,30,18,0.7), transparent)" }}>
                  <p className="font-golos text-xs text-white">{img.caption}</p>
                </div>
              </div>
            ))}
          </AnimSection>
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
            <button onClick={onRegister} className="btn-primary">Записаться на занятие</button>
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
                  <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "260px", backgroundColor: "var(--c-beige-dark)" }}>
                    {t.photo ? (
                      <img src={t.photo} alt={t.name} className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                    ) : (
                      <div className="flex flex-col items-center gap-3 opacity-40">
                        <Icon name="User" size={48} style={{ color: "var(--c-green-mid)" }} />
                        <p className="font-golos text-xs" style={{ color: "var(--c-text-muted)" }}>Фото</p>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--c-green-dark)" }}>
                      <Icon name={t.icon} size={14} style={{ color: "var(--c-gold)" }} fallback="BookOpen" />
                    </div>
                  </div>
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
          <button onClick={onRegister} className="btn-outline text-base px-10 py-4">Оставить заявку</button>
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
    </>
  );
}