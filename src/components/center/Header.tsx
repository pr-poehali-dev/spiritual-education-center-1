import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { LOGO_COLOR, LOGO_WHITE, NAV_ITEMS } from "./shared";

interface HeaderProps {
  onRegister: () => void;
}

export default function Header({ onRegister }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
            className="transition-all duration-300 object-contain logo-animate"
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
          <button onClick={onRegister} className="btn-primary text-sm">Записаться</button>
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
          <button onClick={() => { onRegister(); setMenuOpen(false); }} className="btn-primary w-full mt-4">Записаться</button>
        </div>
      )}
    </header>
  );
}
