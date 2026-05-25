import { useState } from "react";
import Icon from "@/components/ui/icon";

interface RegistrationModalProps {
  onClose: () => void;
}

export default function RegistrationModal({ onClose }: RegistrationModalProps) {
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
