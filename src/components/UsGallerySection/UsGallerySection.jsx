import { useEffect, useRef, useState } from "react";
import "./UsGallerySection.css";

const galleryPhotos = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
];

function UsGallerySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`us-gallery-section ${
        isVisible ? "us-gallery-visible" : ""
      }`}
    >
      <header className="us-gallery-heading">
        <p>JUST US ♡</p>
        <h2>Here Are Some Pics Of Us</h2>
      </header>

      <div className="us-gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <figure
            className="us-gallery-photo"
            key={index}
            style={{
              "--gallery-delay": `${0.15 + index * 0.14}s`,
            }}
          >
            <div className="us-gallery-frame">
              {photo ? (
                <img src={photo} alt={`Us memory ${index + 1}`} />
              ) : (
                <div className="us-gallery-placeholder">
                  <span>ADD PHOTO {index + 1}</span>
                  <b>♡</b>
                </div>
              )}
            </div>
          </figure>
        ))}
      </div>

      <div className="us-gallery-ending" aria-hidden="true">
        <span>♡</span>
        <span>✦</span>
        <span>♡</span>
      </div>
    </section>
  );
}

export default UsGallerySection;
