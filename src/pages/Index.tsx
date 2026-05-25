import { useState } from "react";
import Header from "@/components/center/Header";
import Sections from "@/components/center/Sections";
import RegistrationModal from "@/components/center/RegistrationModal";
const galleryImages = [
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/49d3264d-58fa-4bc8-bc70-37e90bcd6d42.jpg", caption: "Паломничество «По стопам Дмитрия Донского»" },
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/7ca56ce6-065b-499d-900d-482fc46d6e34.jpg", caption: "Воскресная школа" },
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/d7648cab-f376-478f-b551-a09402c9de21.jpg", caption: "Занятие на улице" },
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/bc15a8b0-c472-4578-baa0-b4facd764c6c.jpg", caption: "Урок «Хлеб насущный»" },
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/a79a4738-2305-4454-b744-61e51404bcea.jpg", caption: "Литургия — поёт хор воскресной школы" },
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/d8f8dc6f-bf8f-47b8-8fc4-38509748628c.jpg", caption: "Экскурсия" },
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/5e096c0e-f65a-4b9e-99b6-822e27dc57e7.jpg", caption: "Столярная мастерская" },
  { src: "https://cdn.poehali.dev/projects/0b1b6044-c174-4bad-b78b-1c48fd832b73/bucket/ca212f9c-0698-47c6-8045-5277242a3494.png", caption: "Храм Троицы Живоначальной" },
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