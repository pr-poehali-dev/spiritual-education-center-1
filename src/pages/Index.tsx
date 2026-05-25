import { useState } from "react";
import Header from "@/components/center/Header";
import Sections from "@/components/center/Sections";
import RegistrationModal from "@/components/center/RegistrationModal";
import { HERO_IMAGE, SCHOOL_IMAGE, ICON_IMAGE } from "@/components/center/shared";

const galleryImages = [
  { src: HERO_IMAGE,   caption: "Храм Троицы Живоначальной" },
  { src: SCHOOL_IMAGE, caption: "Занятия воскресной школы" },
  { src: ICON_IMAGE,   caption: "Мастерская иконописи" },
  { src: HERO_IMAGE,   caption: "Территория центра" },
  { src: SCHOOL_IMAGE, caption: "Праздничное мероприятие" },
  { src: ICON_IMAGE,   caption: "Мастер-класс по росписи" },
];

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--c-beige)" }}>
      <Header onRegister={() => setModalOpen(true)} />
      <Sections
        onRegister={() => setModalOpen(true)}
        galleryImages={galleryImages}
        activeGallery={activeGallery}
        setActiveGallery={setActiveGallery}
      />
      {modalOpen && <RegistrationModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
