import { useState } from "react";
import Icon from "@/components/ui/icon";
import { AnimSection } from "./shared";

const FAQ_ITEMS = [
  {
    q: "С какого возраста можно записаться?",
    a: "Мы принимаем детей с 5 лет, а также подростков и взрослых. Для каждого возраста подобраны свои направления и группы — от первых занятий до серьёзного изучения предметов.",
  },
  {
    q: "Нужна ли предварительная подготовка?",
    a: "Нет, никакой специальной подготовки не требуется. Наши педагоги помогут освоиться с самого начала — приходите с желанием учиться и открытым сердцем.",
  },
  {
    q: "Сколько стоят занятия?",
    a: "Большинство занятий в центре проводятся бесплатно — это наше служение при храме. По отдельным мастерским может потребоваться небольшой взнос на материалы. Подробности уточняйте при записи.",
  },
  {
    q: "Как проходит запись?",
    a: "Оставьте заявку на сайте — мы свяжемся с вами, расскажем о программах и поможем выбрать подходящее направление для вас или вашего ребёнка.",
  },
  {
    q: "Можно ли посещать несколько направлений?",
    a: "Конечно! Многие наши ученики совмещают несколько занятий — например, церковное пение, живопись и столярную мастерскую. Мы поможем составить удобное расписание.",
  },
  {
    q: "Обязательно ли быть воцерковлённым?",
    a: "Нет. Мы рады каждому, кто хочет прикоснуться к православной культуре и традициям. Здесь вас встретят с теплотой, независимо от вашего опыта церковной жизни.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "var(--c-beige)" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <AnimSection className="text-center mb-16">
          <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-gold)" }}>Частые вопросы</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--c-green-dark)" }}>Вопросы и ответы</h2>
        </AnimSection>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <AnimSection key={item.q}>
                <div
                  className="bg-white rounded-sm overflow-hidden"
                  style={{ border: "1px solid var(--c-beige-dark)" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 transition-colors"
                  >
                    <span className="font-cormorant text-lg md:text-xl font-medium" style={{ color: "var(--c-green-dark)" }}>
                      {item.q}
                    </span>
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                      style={{
                        backgroundColor: isOpen ? "var(--c-green-dark)" : "var(--c-green-pale)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <Icon name="ChevronDown" size={16} style={{ color: isOpen ? "var(--c-gold)" : "var(--c-green-mid)" }} />
                    </div>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="font-golos text-sm leading-relaxed px-6 pb-5" style={{ color: "var(--c-text-muted)" }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
