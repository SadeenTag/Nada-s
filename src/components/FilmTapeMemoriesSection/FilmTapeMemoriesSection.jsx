import { useEffect, useRef, useState } from "react";
import "./FilmTapeMemoriesSection.css";
import "./FilmTapeMusicButton.css";

const memories = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  src: `/images/img${index + 1}.jpeg`,
  alt: `Memory ${index + 1}`,
}));

function FilmTapeMemoriesSection() {
  const [focusedImage, setFocusedImage] = useState(null);
  const [musicBlocked, setMusicBlocked] = useState(false);

  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const sectionVisibleRef = useRef(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setFocusedImage(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const audio = audioRef.current;

    if (!section || !audio) return;

    audio.volume = 0.55;

    const observer = new IntersectionObserver(
      ([entry]) => {
        sectionVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          audio
            .play()
            .then(() => setMusicBlocked(false))
            .catch(() => setMusicBlocked(true));
        } else {
          audio.pause();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const unlockAudio = () => {
      const audio = audioRef.current;

      if (!audio) return;

      /*
        Browsers may block sound until the visitor interacts once.
        Your site already has buttons before this section, so this
        quietly unlocks this audio element on the first click/tap.
      */
      const wasPaused = audio.paused;

      audio
        .play()
        .then(() => {
          if (!sectionVisibleRef.current && wasPaused) {
            audio.pause();
            audio.currentTime = 0;
          }

          setMusicBlocked(false);
        })
        .catch(() => {});
    };

    window.addEventListener("pointerdown", unlockAudio, {
      once: true,
      capture: true,
    });

    return () =>
      window.removeEventListener("pointerdown", unlockAudio, {
        capture: true,
      });
  }, []);

  const startMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio
      .play()
      .then(() => setMusicBlocked(false))
      .catch(() => setMusicBlocked(true));
  };

  const repeatedMemories = [...memories, ...memories];

  return (
    <section className="film-tape-section" ref={sectionRef}>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/romantic-memories.mp3" type="audio/mpeg" />
        <source src="/audio/romantic-memories.wav" type="audio/wav" />
      </audio>

      {musicBlocked && (
        <button
          type="button"
          className="film-music-start"
          onClick={startMusic}
        >
          tap for music ♡
        </button>
      )}
      <div className="film-tape-grain" aria-hidden="true" />
      <div className="film-tape-light film-tape-light-one" aria-hidden="true" />
      <div className="film-tape-light film-tape-light-two" aria-hidden="true" />

      <header className="film-tape-heading">
        <p>20 little pieces of us</p>
        <h2>our memories on film ♡</h2>
      </header>

      <div className="film-tape-stage">
        <div className="film-tape-track">
          <div className="film-tape-holes film-tape-holes-top" aria-hidden="true">
            {Array.from({ length: 80 }, (_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className="film-tape-moving">
            {repeatedMemories.map((memory, index) => (
              <button
                type="button"
                className="film-frame"
                key={`${memory.id}-${index}`}
                onClick={() => setFocusedImage(memory)}
                aria-label={`Open ${memory.alt}`}
              >
                <div className="film-frame-image">
                  <img
                    src={memory.src}
                    alt={memory.alt}
                    loading={index < 8 ? "eager" : "lazy"}
                  />

                  <span className="film-frame-shine" aria-hidden="true" />
                </div>

                <div className="film-frame-info">
                  <span>DOMI FILM</span>
                  <strong>{String(memory.id).padStart(2, "0")}</strong>
                </div>
              </button>
            ))}
          </div>

          <div
            className="film-tape-holes film-tape-holes-bottom"
            aria-hidden="true"
          >
            {Array.from({ length: 80 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="film-tape-caption">
        <span>✦</span>
        <p>every frame, still you</p>
        <span>♡</span>
      </div>

      {focusedImage && (
        <div
          className="film-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={focusedImage.alt}
          onClick={() => setFocusedImage(null)}
        >
          <button
            type="button"
            className="film-lightbox-close"
            onClick={() => setFocusedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="film-lightbox-frame"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={focusedImage.src} alt={focusedImage.alt} />

            <span className="film-lightbox-number">
              {String(focusedImage.id).padStart(2, "0")} / 20
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default FilmTapeMemoriesSection