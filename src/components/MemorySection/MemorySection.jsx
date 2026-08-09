import { forwardRef, useEffect, useRef, useState } from "react";
import "./MemorySection.css";

const firstMemory = {
    title: "I've Always Known Your Name",
  subtitle: "Ever Since I Was Like 11 Years Old",
  messageTitle: "I Would Always Only See You From a Distance",

  message: [
    "Ever since i was like 11 years old, ive always known your name, ive always know Adam Gaballa.",
    "I knew it because you were my friend's friend, i would always hear about you about how REAL you were such a good guy.",
    "And i always thought cool! wonder when ill get to meet this awesome guy! but i woud always only see you from a distance.",
    'Those curly light brown strands and cute but serious face with glasses and a look on your face saying "i have a purpose and im on my way, no time for distractions!"',
    "It made me very curious i was eager to get to know you, and from that time on i knew we would cross paths i just didn't know how or when.",
  ],
  leftPhoto: "/images/vc.jpeg",
  rightPhoto: "/images/him.jpeg",
};

const secondMemory = {
  title: "A Few Years Passed",
  subtitle: "We Grew Up a Little... or a Lot Hahaha",
  message: [
    "Few years passed, we both went on to have shit happen in our lives, we grew up a little or a lot hahaha, we matured a bit.",
    "Now it was after my car accident and after some truama and sadness bu i had gotten better and started going to school again.",
    "By that time id hear about you all the times from my girlfriends in glass because they had gotten into shutter.",
    "I hadnt yet cause i was still getting used to everything again and didnt want to take on more than i can handle.",
  ],
};

const thirdMemory = {
  title: "He Is Gonna Be Something So Great",
  subtitle: "I Would Hear All About You",
  message: [
    "I would hear all about your serious manner, profesionalism and insane work ethic, it appeared a bit too serious for them they were intimidated and nervous by it.",
    "But it intrigued me, it made me respect now before ever even meeting you, i would see you before or after the sessions ended sometimes when i was going to meet them.",
    "And you would be standing there tall, handsome, put together, a real man not a boy not a silly guy, no a man, i honestly remember a few times i looked at ya and i was like damn.",
    "He is gonna be something so great.",
  ],
  leftPhoto: "/images/class.jpeg",
  rightPhoto: "/images/looking.jpeg",
  ending: "we still have quite abit baby ♡",
};

function PhotoFrame({ src, alt, side }) {
  return (
    <figure className={`memory-photo memory-photo-${side}`}>
      <div className="memory-photo-frame">
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <div className="memory-photo-placeholder">
            <span>[ADD {side.toUpperCase()} PHOTO HERE]</span>
          </div>
        )}
      </div>
    </figure>
  );
}

const MemorySection = forwardRef(function MemorySection(_, ref) {
  const sectionRef = useRef(null);
  const secondPartRef = useRef(null);
  const thirdPartRef = useRef(null);

  const [isRevealed, setIsRevealed] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const [isThirdOpened, setIsThirdOpened] = useState(false);

  const setRefs = (node) => {
    sectionRef.current = node;

    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  useEffect(() => {
    const trigger = secondPartRef.current;

    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSecondVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);



  useEffect(() => {
    const trigger = thirdPartRef.current;

    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsThirdVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="memory-section" ref={setRefs}>
      <div
        className={`memory-part memory-part-one ${
          isRevealed ? "memory-part-visible" : ""
        }`}
      >
        <div className="memory-heading">
          <span className="memory-heading-sparkle">✦</span>
          <p>{firstMemory.subtitle}</p>
          <h2>{firstMemory.title}</h2>
          <span className="memory-heading-sparkle">✦</span>
        </div>

        <button
          type="button"
          className="memory-reveal-button"
          onClick={() => setIsRevealed(true)}
          aria-expanded={isRevealed}
        >
          <span>{isRevealed ? "memory opened ♡" : "open this memory ♡"}</span>
          <span className="memory-reveal-sparkle" aria-hidden="true">✦</span>
        </button>

        <div className="memory-first-layout">
          <PhotoFrame
            src={firstMemory.leftPhoto}
            alt="Left memory"
            side="left"
          />

          <article className="memory-message-card">
            <span className="message-corner message-corner-one">♡</span>
            <span className="message-corner message-corner-two">✦</span>

            <div className="message-title-row">
              <span />
              <h3>{firstMemory.messageTitle}</h3>
              <span />
            </div>

            <div className="memory-message-text">
              {firstMemory.message.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </article>

          <PhotoFrame
            src={firstMemory.rightPhoto}
            alt="Right memory"
            side="right"
          />
        </div>

        <div className="memory-hearts" aria-hidden="true">
          <span>♡</span>
          <span>♥</span>
          <span>♡</span>
        </div>

        <div className="memory-cute-corner" aria-hidden="true">
          <span className="cute-sparkle">✦</span>

          <span className="cute-flower">
            <i />
            <i />
            <i />
            <i />
            <b />
          </span>

          <span className="cute-sparkle small">✧</span>
        </div>
      </div>

      <div
        className={`memory-part memory-part-two ${
          isSecondVisible ? "memory-part-two-visible" : ""
        }`}
        ref={secondPartRef}
      >
        <div className="transition-thread" aria-hidden="true">
          <span className="thread-line" />

          <span className="heart-mascot">
            <span className="heart-face">
              <i className="heart-eye heart-eye-left" />
              <i className="heart-eye heart-eye-right" />
              <b className="heart-smile" />
            </span>

            <span className="heart-leg heart-leg-left" />
            <span className="heart-leg heart-leg-right" />
          </span>

          <span className="thread-spark thread-spark-one">✦</span>
          <span className="thread-spark thread-spark-two">♡</span>
          <span className="thread-spark thread-spark-three">✧</span>
        </div>

        <header className="second-memory-heading">
          <p>{secondMemory.subtitle}</p>
          <h2>{secondMemory.title}</h2>
        </header>

        <div className="second-memory-story">
          {secondMemory.message.map((line, index) => (
            <p
              className="second-memory-line"
              key={index}
              style={{
                "--second-line-delay": `${1.3 + index * 1.15}s`,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="second-memory-end" aria-hidden="true">
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
        </div>
      </div>


      <div
        className={`memory-part memory-part-three ${
          isThirdVisible ? "memory-part-three-visible" : ""
        } ${isThirdOpened ? "memory-part-three-opened" : ""}`}
        ref={thirdPartRef}
      >
        <div className="third-surprise">
          <div className="heart-cloud" aria-hidden="true">
            {Array.from({ length: 26 }, (_, index) => (
              <span
                className={`floating-heart floating-heart-${(index % 5) + 1}`}
                key={index}
                style={{
                  "--heart-delay": `${(index % 9) * 0.18}s`,
                  "--heart-x": `${((index * 37) % 320) - 160}px`,
                  "--heart-y": `${((index * 53) % 220) - 110}px`,
                  "--heart-size": `${16 + ((index * 11) % 24)}px`,
                }}
              >
                {index % 3 === 0 ? "♥" : "♡"}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="gift-button"
            onClick={() => setIsThirdOpened(true)}
            aria-expanded={isThirdOpened}
          >
            <span className="gift-lid">
              <i className="gift-bow gift-bow-left" />
              <i className="gift-bow gift-bow-right" />
            </span>

            <span className="gift-box">
              <i className="gift-ribbon" />
            </span>

            <span className="gift-click-text">click me ♡</span>
          </button>
        </div>

        <div className="third-memory-content">
          <header className="third-memory-heading">
            <p>{thirdMemory.subtitle}</p>
            <h2>{thirdMemory.title}</h2>
          </header>

          <div className="third-memory-layout">
            <figure className="third-photo third-photo-left">
              <div className="third-photo-frame">
                {thirdMemory.leftPhoto ? (
                  <img
                    src={thirdMemory.leftPhoto}
                    alt="Classroom memory"
                  />
                ) : (
                  <div className="third-photo-placeholder">
                    <span>[ADD CLASSROOM PHOTO HERE]</span>
                  </div>
                )}
              </div>

              <figcaption>the place i would sometimes see you</figcaption>
            </figure>

            <article className="third-memory-card">
              <span className="third-card-cute third-card-cute-one">♡</span>
              <span className="third-card-cute third-card-cute-two">✦</span>

              <div className="third-memory-text">
                {thirdMemory.message.map((line, index) => (
                  <p
                    key={index}
                    style={{
                      "--third-line-delay": `${0.7 + index * 0.65}s`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </article>

            <figure className="third-photo third-photo-right">
              <div className="third-photo-frame imagined-photo">
                {thirdMemory.rightPhoto ? (
                  <img
                    src={thirdMemory.rightPhoto}
                    alt="Imagined memory of me looking at him"
                  />
                ) : (
                  <div className="third-photo-placeholder">
                    <span>[ADD IMAGINED PHOTO HERE]</span>
                  </div>
                )}

                <span className="tiny-look-heart" aria-hidden="true">♡</span>
              </div>

              <figcaption>me looking at you like... damn</figcaption>
            </figure>
          </div>

          <div className="third-memory-ending">
            <span>✦</span>
            <p>{thirdMemory.ending}</p>
            <span>♡</span>
          </div>
        </div>
      </div>

    </section>
  );
});

export default MemorySection;