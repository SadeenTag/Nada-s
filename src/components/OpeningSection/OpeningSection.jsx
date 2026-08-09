import "./OpeningSection.css";

const letterLines = [
  "Well, hello there, my love! How are you? I hope you’re doing well.",
  "It has been a bit since I’ve written you a letter, baby—not because I had nothing to say or because I didn’t want to.",
  "But because I know that mere words on paper, no matter how sweet, can sometimes feel impersonal and flavorless.",
  "In the end, words are indeed just words, and I know that is your view of them. And hey, I respect it!",
  "So this time, I wanted to wait for a while and make you something much more special.",
  "I wanted to create a whole interactive experience filled with words, voice messages, and pictures.",
  "There might even be a surprise at the end, but I guess you’ll have to wait and see... hehehe.",
  "I wanted you to experience it all as closely as possible to how it feels in my heart. *blush*",
  "Anyway, let’s get into it!",
];

function seededRandom(seed) {
  let value = seed % 2147483647;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

const random = seededRandom(84920);

// Red and pink flower color tones
const flowerTones = [
  "crimson",
  "deep-red",
  "bright-red",
  "hot-pink",
  "rose-pink",
  "blush-pink",
];

// 3 distinct floral styles (daisy, 5-petal blossom, dahlia)
const flowerStyles = ["daisy", "blossom", "dahlia"];

// Background burst with 600 items (100% flowers, 0 dots)
const backgroundItems = Array.from({ length: 600 }, (_, index) => {
  const targetX = random() * 110 - 5;
  const targetY = random() * 110 - 5;

  const tone = flowerTones[Math.floor(random() * flowerTones.length)];
  const flowerStyle = flowerStyles[Math.floor(random() * flowerStyles.length)];

  return {
    id: index,
    type: "flower",
    flowerStyle,
    targetX,
    targetY,
    size: 20 + random() * 65,
    delay: random() * 2.5,
    duration: 4.5 + random() * 2.5,
    tone,
    rotation: random() * 360,
    scale: 0.6 + random() * 0.8,
    driftX: (random() - 0.5) * 45,
    driftY: (random() - 0.5) * 45,
  };
});

function Flower({
  flowerStyle,
  targetX,
  targetY,
  size,
  delay,
  duration,
  tone,
  rotation,
  scale,
  driftX,
  driftY,
}) {
  const styleVars = {
    "--target-x": `${targetX}vw`,
    "--target-y": `${targetY}vh`,
    "--flower-size": `${size}px`,
    "--flower-delay": `${delay}s`,
    "--flower-duration": `${duration}s`,
    "--flower-rotation": `${rotation}deg`,
    "--flower-scale": scale,
    "--drift-x": `${driftX}px`,
    "--drift-y": `${driftY}px`,
  };

  return (
    <div className={`flower style-${flowerStyle} tone-${tone}`} style={styleVars}>
      {flowerStyle === "daisy" && (
        <>
          <span className="petal petal-1" />
          <span className="petal petal-2" />
          <span className="petal petal-3" />
          <span className="petal petal-4" />
          <span className="petal petal-5" />
          <span className="petal petal-6" />
          <span className="petal petal-7" />
          <span className="petal petal-8" />
          <span className="flower-center" />
        </>
      )}

      {flowerStyle === "blossom" && (
        <>
          <span className="blossom-petal b-1" />
          <span className="blossom-petal b-2" />
          <span className="blossom-petal b-3" />
          <span className="blossom-petal b-4" />
          <span className="blossom-petal b-5" />
          <span className="flower-center" />
        </>
      )}

      {flowerStyle === "dahlia" && (
        <>
          <span className="dahlia-petal d-1" />
          <span className="dahlia-petal d-2" />
          <span className="dahlia-petal d-3" />
          <span className="dahlia-petal d-4" />
          <span className="dahlia-petal d-5" />
          <span className="dahlia-petal d-6" />
          <span className="dahlia-petal d-7" />
          <span className="dahlia-petal d-8" />
          <span className="dahlia-petal d-9" />
          <span className="dahlia-petal d-10" />
          <span className="dahlia-petal d-11" />
          <span className="dahlia-petal d-12" />
          <span className="flower-center" />
        </>
      )}
    </div>
  );
}

function OpeningSection({ isOpen, openLetter, scrollToNextSection }) {
  return (
    <section className="opening-section">
        <div className="opening-heading">
          <p className="small-heading">hehehe i hope you like it</p>
          <h1>welcome to Domi's interactive web letter</h1>
        </div>

        <div className="letter-scene">
          <div className="background-glow" />

          {/* Background Red & Pink Flower Burst */}
          <div className="flower-burst" aria-hidden="true">
            {backgroundItems.map((item) => (
              <Flower key={item.id} {...item} />
            ))}
          </div>

          <button
            type="button"
            className="envelope"
            onClick={openLetter}
            aria-label="Open the letter"
          >
            <span className="envelope-back" />

            <span className="opening-letter-preview">
              <span>LETTER</span>
            </span>

            <span className="opening-envelope-flap" />
            <span className="opening-envelope-front" />
            <span className="opening-envelope-seal">OPEN ME</span>
          </button>

          <article className="letter-card" aria-hidden={!isOpen}>
            <div className="letter-decoration">
              <span />
              <strong>✦</strong>
              <span />
            </div>

            <h2>Domi</h2>

            <div className="letter-message">
              {letterLines.map((line, index) => (
                <p
                  className="letter-line"
                  key={index}
                  style={{
                    "--line-delay": `${index * 0.16}s`,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            <button
              type="button"
              className="continue-button"
              onClick={scrollToNextSection}
            >
              click here to start the experience my love!
              <span aria-hidden="true">↓</span>
            </button>
          </article>
        </div>

      </section>
  );
}

export default OpeningSection;