import { forwardRef, useEffect, useRef, useState } from "react";
import "./NextMemoriesSection.css";

const fourthMemory = {
  title: "Then You Made Peel",
  subtitle: "I Was Genuinely So Proud Of You",
  message: [
    "Then you made peel and i was genuinely so proud of you even tho we had barely interacted thruogh the years at this point so i had made it importantto support that page and business in any way i can, i was so proud of you and i didnt even know why at that time, but i was.",
    "I started ordering tons of orders and i remember the very first order, we talked i told you what i wanted and we agreed to meet at school on whatsapp.",
    "I see you coming on ur bike, headphones on, you come and brake right infront of me, i ddnt even see you coming *blushes*.",
    "And you give me my stickers, we talk a bit, we talk about college, you welcomed me in the shitty ride ahead as you called it hahaha.",
    "And talked abit more then we left, safe to say i was flustered.",
    "You had no idea.",
    "I took tons of pictures that day of the order i remember hahaha.",
  ],
  leftPhoto: "/images/peelLogo.jpeg",
  rightPhoto: "/images/herOrder.jpeg",
  ending: "lets see whats next baby ♡",
};


const fifthMemory = {
  title: "We Kept Talking",
  subtitle: "Anime, Stories, And Many Many More Stickers",
  stickers: [
    {
      id: "stories",
      label: "stories ♡",
      symbol: "💬",
      text: "We would talk every now and then at this point. You'd reply to some stories.",
    },
    {
      id: "anime",
      label: "anime",
      symbol: "⚔",
      text: "We talked about anime, how you adore Demon Slayer, I now do too hahaha.",
    },
    {
      id: "stickers",
      label: "more stickers",
      symbol: "✦",
      text: "And I ordered many, many more stickers after that.",
    },
  ],
  transition: "Then came the day where my heart was set on you, not so spoiler alert hahaha, you already know, the marathon.",
};

const sixthMemory = {
  title: "The Marathon",
  subtitle: "The Day My Heart Was Set On You",
  stops: [
    {
      id: "station",
      label: "same station",
      icon: "01",
      text: "I was surprised that we were on the same station but very glad. You were the first one there, and we talked and joked and laughed for a long time. I think we were the only two talking at some point.",
    },
    {
      id: "single",
      label: "so single?",
      icon: "02",
      text: "And out of the blue I uttered a question that I didn't even fucking realise I was gonna ask. It was like something came over me, and I asked, (so single?) and on the inside I was like, wtf, why would you say that? What's he gonna think now! But I was still kinda curious and glad I asked. You said that you are, and on the inside after you said that, it felt like I had taken a deep breath that I was finally able to let go.",
      special: true,
    },
    {
      id: "notebook",
      label: "the notebook",
      icon: "03",
      text: "And after that we joked and talked more, and I told you about the notebook that I was trying to make but it was not working out, and you offered to help me. And we agreed to meet up later!",
    },
    {
      id: "cap",
      label: "the cap",
      icon: "04",
      text: "And at some point you take off your cap and place it on my head in such a cool, nonchalant, flirty way that got my heart beating so fast I couldn't react. But I loved it hehehe.",
    },
    {
      id: "ride",
      label: "the ride home",
      icon: "05",
      text: "And on the way home you helped me ride, and you did smth I'll always remember and I'll always tell our kids if we have any. You paid for a whole row, and you sat leaving one seat empty in the middle for me.",
    },
    {
      id: "manners",
      label: "i was shook",
      icon: "06",
      text: "I was shook. I was so amazed by your manners and your masculinity, and I was beyond grateful.",
    },
  ],
  leftPhoto: "/images/sidigaber.jpeg",
  rightPhoto: "/images/tshirt.jpeg",
  ending: "What happened then?",
};

const seventhMemory = {
  title: "Dusk, The Office, And You",
  subtitle: "The First Time It Was Just Us",
  deskItems: [
    {
      id: "notebook",
      label: "notebook",
      icon: "▤",
      text: "We met up at Dusk one day, and it was the first time ever that I was meeting a boy one on one. I was so nervous, just kept having to convince and remind myself that it is for work. *Come on girl, get it together.*",
    },
    {
      id: "dusk",
      label: "dusk",
      icon: "☕",
      text: "Then we talked for a bit, and you told me that we can go to your office and start working on it right now. I paid for both of us at Dusk that day, and you told me, never fucking do that again, and hahaha, it was indeed the last time I tried to, cause for the first time I loved being told what to do hehehe.",
    },
    {
      id: "office",
      label: "the office",
      icon: "⌨",
      text: "And we arrive at your office, and Sherif and Hamada are there, and I'm soooo nervous, and you introduce me, and they are teasing you unnoticeably, and I'm just there blushing with my hands together haha. Then we sit at the computer and start on designing, we being you hahaha.",
    },
    {
      id: "spotify",
      label: "spotify",
      icon: "♫",
      text: "And you decide to play some music on Spotify, and that's when you told me, anghami bta3 fala7een nooo, I never used it again after that hahahaha.",
    },
    {
      id: "call",
      label: "the call",
      icon: "☎",
      text: "And we talked and hung out for a long time, though it felt like just a few minutes, but I remember going home and on the way calling Lara saying, dude, I think imma fall, the guy is awesome, he's so cute, so nice, so smart, and she had to tell me, girl, you've been speaking for 2 hours, I wanna sleep, shut uppp hahhahaha.",
    },
    {
      id: "jacket",
      label: "your jacket",
      icon: "♡",
      text: "I also remember when we went to El Salam Space together, first time I felt jealousy over you but tried not to show it, and I took the desk place name you made for Mom. It was the first time you gave me your jacket, I never wanted to give it back.",
    },
  ],
  duskPhoto: "/images/dusk.jpeg",
  spotifyPhoto: "/images/spotify.jpeg",
  ending: "------------------->",
};


const eighthMemory = {
  title: "More And More, I Fell For You",
  subtitle: "The Closer We Got",
  moments: [
    {
      id: "graduation",
      label: "graduation calls",
      icon: "☎",
      text: "After that we began going out more and talking more, getting closer, you helping me when it came to my graduation. I would call you crying lol, and you'd calm me down.",
    },
    {
      id: "heart",
      label: "more and more",
      icon: "♡",
      text: "More and more I fell for you, and more and more my heart yearned for you, because you were kind and gentle and had great manners and OMFG you were so smart.",
    },
    {
      id: "everything",
      label: "everything about you",
      icon: "✦",
      text: "And the way you would talk to everyone around, not just me, the guys and everyone else, the way you handled yourself, the manner in which you walked and shook hands, the way you dressed, everything about you ya Adam.",
    },
  ],
  finalLine: "I was beyond obsessed.",
  ending: "-------------------->",
};

const boomPieces = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  symbol: index % 5 === 0 ? "♥" : index % 3 === 0 ? "✦" : index % 2 === 0 ? "♡" : "✧",
  angle: (360 / 24) * index,
  distance: 120 + (index % 6) * 24,
  delay: (index % 4) * 0.035,
  size: 18 + (index % 5) * 6,
}));

const NextMemoriesSection = forwardRef(function NextMemoriesSection(_, ref) {
  const sectionRef = useRef(null);
  const peelMemoryRef = useRef(null);
  const [isBoomed, setIsBoomed] = useState(false);

  const [revealedStickers, setRevealedStickers] = useState([]);
  const [activeMarathonStop, setActiveMarathonStop] = useState("station");
  const [activeDeskItem, setActiveDeskItem] = useState("notebook");
  const [eighthOpened, setEighthOpened] = useState([]);

  const revealSticker = (id) => {
    setRevealedStickers((current) =>
      current.includes(id) ? current : [...current, id]
    );
  };

  const revealEighthMoment = (id) => {
    setEighthOpened((current) =>
      current.includes(id) ? current : [...current, id]
    );
  };

  const setRefs = (node) => {
    sectionRef.current = node;

    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  useEffect(() => {
    const peelMemory = peelMemoryRef.current;

    if (!peelMemory) return;

    let hasBoomed = false;

    const triggerBoom = () => {
      if (hasBoomed) return;

      hasBoomed = true;

      // Two frames guarantee the browser paints the initial CSS state
      // before the .peel-boomed animation class is applied.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsBoomed(true);
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerBoom();
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(peelMemory);

    // Fallback for browsers/layouts where IntersectionObserver
    // does not fire as expected.
    const checkPosition = () => {
      const rect = peelMemory.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top <= viewportHeight * 0.82 &&
        rect.bottom >= viewportHeight * 0.12
      ) {
        triggerBoom();
        observer.disconnect();
        window.removeEventListener("scroll", checkPosition);
      }
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition);

    checkPosition();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  return (
    <section
      className="next-memories-section"
      ref={setRefs}
    >
      <div
        className={`peel-memory ${isBoomed ? "peel-boomed" : ""}`}
        ref={peelMemoryRef}
      >
        <div className="boom-stage" aria-hidden="true">
          <div className="boom-flash" />
          <div className="boom-ring boom-ring-one" />
          <div className="boom-ring boom-ring-two" />

          {boomPieces.map((piece) => (
            <span
              className="boom-piece"
              key={piece.id}
              style={{
                "--boom-angle": `${piece.angle}deg`,
                "--boom-distance": `${piece.distance}px`,
                "--boom-delay": `${piece.delay}s`,
                "--boom-size": `${piece.size}px`,
              }}
            >
              {piece.symbol}
            </span>
          ))}

          <div className="boom-word">
            <span>B</span>
            <span>O</span>
            <span>O</span>
            <span>M</span>
            <b>♡</b>
          </div>
        </div>

        <div className="peel-content">
          <header className="peel-heading">
            <p>{fourthMemory.subtitle}</p>
            <h2>{fourthMemory.title}</h2>
          </header>

          <div className="peel-layout">
            <figure className="peel-photo peel-photo-left">
              <div className="peel-photo-frame peel-logo-frame">
                {fourthMemory.leftPhoto ? (
                  <img src={fourthMemory.leftPhoto} alt="Peel logo" />
                ) : (
                  <div className="peel-photo-placeholder">
                    <span>[ADD PEEL LOGO HERE]</span>
                  </div>
                )}
              </div>

              <figcaption>the thing you built ♡</figcaption>
            </figure>

            <article className="peel-story-card">
              <span className="peel-card-detail peel-card-heart">♡</span>
              <span className="peel-card-detail peel-card-star">✦</span>

              <div className="peel-story-scroll">
                {fourthMemory.message.map((line, index) => (
                  <p
                    key={index}
                    style={{
                      "--peel-line-delay": `${1.15 + index * 0.36}s`,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </article>

            <figure className="peel-photo peel-photo-right">
              <div className="peel-photo-frame order-frame">
                {fourthMemory.rightPhoto ? (
                  <img src={fourthMemory.rightPhoto} alt="My first Peel order" />
                ) : (
                  <div className="peel-photo-placeholder">
                    <span>[ADD MY ORDER PHOTO HERE]</span>
                  </div>
                )}

                <span className="order-sticker order-sticker-one">♡</span>
                <span className="order-sticker order-sticker-two">✦</span>
              </div>

              <figcaption>the first order hahaha</figcaption>
            </figure>
          </div>

          <div className="peel-ending">
            <span>✧</span>
            <p>{fourthMemory.ending}</p>
            <span>♡</span>
          </div>
        </div>
      </div>


      <section className="part-five sticker-memory">
        <header className="next-part-heading">
          <p>{fifthMemory.subtitle}</p>
          <h2>{fifthMemory.title}</h2>
        </header>

        <div className="sticker-board">
          <div className="sticker-board-note">
            <span>♡</span>
            <p>tap the stickers</p>
            <span>✦</span>
          </div>

          <div className="sticker-grid">
            {fifthMemory.stickers.map((sticker, index) => {
              const isOpen = revealedStickers.includes(sticker.id);

              return (
                <button
                  type="button"
                  className={`memory-sticker memory-sticker-${index + 1} ${
                    isOpen ? "sticker-open" : ""
                  }`}
                  key={sticker.id}
                  onClick={() => revealSticker(sticker.id)}
                >
                  <span className="memory-sticker-symbol">{sticker.symbol}</span>
                  <span className="memory-sticker-label">{sticker.label}</span>

                  <span className="memory-sticker-reveal">
                    {isOpen ? sticker.text : "click me"}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className={`sticker-transition ${
              revealedStickers.length === fifthMemory.stickers.length
                ? "sticker-transition-visible"
                : ""
            }`}
          >
            <div className="sticker-transition-heart">♡</div>
            <p>{fifthMemory.transition}</p>
          </div>
        </div>
      </section>

      <section className="part-six marathon-memory">
        <header className="next-part-heading marathon-heading">
          <p>{sixthMemory.subtitle}</p>
          <h2>{sixthMemory.title}</h2>
        </header>

        <div className="marathon-shell">
          <div className="marathon-track" aria-hidden="true">
            <span />
          </div>

          <nav className="marathon-stops" aria-label="Marathon memory timeline">
            {sixthMemory.stops.map((stop) => (
              <button
                type="button"
                key={stop.id}
                className={`marathon-stop ${
                  activeMarathonStop === stop.id ? "marathon-stop-active" : ""
                } ${stop.special ? "marathon-stop-special" : ""}`}
                onClick={() => setActiveMarathonStop(stop.id)}
              >
                <span className="marathon-stop-number">{stop.icon}</span>
                <span>{stop.label}</span>
              </button>
            ))}
          </nav>

          <div
            className={`marathon-memory-card ${
              activeMarathonStop === "single" ? "single-question-active" : ""
            }`}
          >
            {sixthMemory.stops.map((stop) =>
              activeMarathonStop === stop.id ? (
                <div className="marathon-stop-content" key={stop.id}>
                  {stop.special && (
                    <div className="single-question">
                      <span className="single-question-bubble">so single?</span>
                      <span className="single-answer">you said that you are ♡</span>
                    </div>
                  )}

                  <p>{stop.text}</p>
                </div>
              ) : null
            )}
          </div>

          <div className="marathon-photo-row">
            <div className="marathon-photo-slot">
              {sixthMemory.leftPhoto ? (
                <img src={sixthMemory.leftPhoto} alt="Sidi Gaber memory" />
              ) : (
                <span>[ADD SIDI GABER PHOTO]</span>
              )}
            </div>

            <div className="marathon-photo-slot">
              {sixthMemory.rightPhoto ? (
                <img src={sixthMemory.rightPhoto} alt="T-shirt memory" />
              ) : (
                <span>[ADD T-SHIRT PHOTO]</span>
              )}
            </div>
          </div>

          <div className="marathon-ending">
            <span>✦</span>
            <p>{sixthMemory.ending}</p>
            <span>♡</span>
          </div>
        </div>
      </section>

      <section className="part-seven desk-memory">
        <header className="next-part-heading desk-heading">
          <p>{seventhMemory.subtitle}</p>
          <h2>{seventhMemory.title}</h2>
        </header>

        <div className="desk-scene">
          <div className="desk-top">
            <button
              type="button"
              className={`desk-object desk-notebook ${
                activeDeskItem === "notebook" ? "desk-object-active" : ""
              }`}
              onClick={() => setActiveDeskItem("notebook")}
            >
              <span>▤</span>
              <small>notebook</small>
            </button>

            <button
              type="button"
              className={`desk-object desk-coffee ${
                activeDeskItem === "dusk" ? "desk-object-active" : ""
              }`}
              onClick={() => setActiveDeskItem("dusk")}
            >
              <span>☕</span>
              <small>dusk</small>
            </button>

            <button
              type="button"
              className={`desk-object desk-keyboard ${
                activeDeskItem === "office" ? "desk-object-active" : ""
              }`}
              onClick={() => setActiveDeskItem("office")}
            >
              <span>⌨</span>
              <small>office</small>
            </button>

            <button
              type="button"
              className={`desk-object desk-spotify ${
                activeDeskItem === "spotify" ? "desk-object-active" : ""
              }`}
              onClick={() => setActiveDeskItem("spotify")}
            >
              <span className="spotify-disc">♫</span>
              <small>spotify</small>
            </button>

            <button
              type="button"
              className={`desk-object desk-phone ${
                activeDeskItem === "call" ? "desk-object-active" : ""
              }`}
              onClick={() => setActiveDeskItem("call")}
            >
              <span>☎</span>
              <small>lara</small>
            </button>

            <button
              type="button"
              className={`desk-object desk-jacket ${
                activeDeskItem === "jacket" ? "desk-object-active" : ""
              }`}
              onClick={() => setActiveDeskItem("jacket")}
            >
              <span>♡</span>
              <small>your jacket</small>
            </button>
          </div>

          <article className="desk-memory-screen">
            <div className="desk-screen-bar">
              <span />
              <span />
              <span />
              <p>memory.exe</p>
            </div>

            {seventhMemory.deskItems.map((item) =>
              activeDeskItem === item.id ? (
                <div className="desk-screen-content" key={item.id}>
                  <div className="desk-screen-icon">{item.icon}</div>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>

                  {item.id === "spotify" && (
                    <div className="fake-spotify">
                      <div className="fake-spotify-disc">♫</div>
                      <div>
                        <strong>Fascination</strong>
                        <span>By Tamino</span>
                      </div>
                    </div>
                  )}

                  {item.id === "call" && (
                    <div className="lara-call">
                      <span className="lara-avatar">L</span>
                      <div>
                        <small>calling lara...</small>
                        <strong>dude, i think imma fall</strong>
                      </div>
                    </div>
                  )}
                </div>
              ) : null
            )}
          </article>

          <div className="desk-photo-strip">
            <div>
              {seventhMemory.duskPhoto ? (
                <img src={seventhMemory.duskPhoto} alt="Dusk memory" />
              ) : (
                <span>[ADD DUSK PHOTO]</span>
              )}
            </div>

            <div>
              {seventhMemory.spotifyPhoto ? (
                <img src={seventhMemory.spotifyPhoto} alt="Spotify memory" />
              ) : (
                <span>[ADD SPOTIFY PHOTO]</span>
              )}
            </div>
          </div>

          <div className="desk-ending">
            <span>✧</span>
            <p>{seventhMemory.ending}</p>
            <span>♡</span>
          </div>
        </div>
      </section>


      <section className="part-eight heart-meter-memory">
        <header className="next-part-heading eighth-heading">
          <p>{eighthMemory.subtitle}</p>
          <h2>{eighthMemory.title}</h2>
        </header>

        <div className="heart-meter-shell">
          <div className="heart-meter-top">
            <div className="heart-meter-track" aria-hidden="true">
              <div
                className="heart-meter-fill"
                style={{
                  "--heart-progress": `${(eighthOpened.length / eighthMemory.moments.length) * 100}%`,
                }}
              />
            </div>

            <div className="heart-meter-status">
              <span className="heart-meter-icon">♡</span>
              <span>{eighthOpened.length} / {eighthMemory.moments.length}</span>
            </div>
          </div>

          <div className="eighth-memory-grid">
            {eighthMemory.moments.map((moment, index) => {
              const isOpen = eighthOpened.includes(moment.id);

              return (
                <button
                  type="button"
                  className={`eighth-memory-card eighth-memory-card-${index + 1} ${
                    isOpen ? "eighth-memory-card-open" : ""
                  }`}
                  key={moment.id}
                  onClick={() => revealEighthMoment(moment.id)}
                >
                  <span className="eighth-memory-card-icon">{moment.icon}</span>
                  <strong>{moment.label}</strong>

                  <span className="eighth-memory-card-text">
                    {isOpen ? moment.text : "click to open ♡"}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className={`eighth-final-heart ${
              eighthOpened.length === eighthMemory.moments.length
                ? "eighth-final-heart-visible"
                : ""
            }`}
          >
            <div className="eighth-big-heart" aria-hidden="true">♡</div>
            <p>{eighthMemory.finalLine}</p>
          </div>

          <div className="eighth-ending">
            <span>✦</span>
            <p>{eighthMemory.ending}</p>
            <span>♡</span>
          </div>
        </div>
      </section>

    </section>
  );
});

export default NextMemoriesSection;