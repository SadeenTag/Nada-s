import { useRef, useState } from "react";
import OpeningSection from "./components/OpeningSection/OpeningSection";
import MemorySection from "./components/MemorySection/MemorySection";
import NextMemoriesSection from "./components/NextMemoriesSection/NextMemoriesSection";
import UsGallerySection from "./components/UsGallerySection/UsGallerySection";
import LaterMemoriesSection from "./components/LaterMemoriesSection/LaterMemoriesSection";
import FinalMemoriesSection from "./components/FinalMemoriesSection/FinalMemoriesSection";
import FilmTapeMemoriesSection from "./components/FilmTapeMemoriesSection/FilmTapeMemoriesSection";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const nextSectionRef = useRef(null);

  const openLetter = () => {
    setIsOpen(true);
  };

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className={isOpen ? "website letter-is-open" : "website"}>
      <OpeningSection
        isOpen={isOpen}
        openLetter={openLetter}
        scrollToNextSection={scrollToNextSection}
      />

      <MemorySection ref={nextSectionRef} />

      <NextMemoriesSection />

      <UsGallerySection />
      <LaterMemoriesSection />
      <FinalMemoriesSection />
      <FilmTapeMemoriesSection />
    </main>
  );
}

export default App;
