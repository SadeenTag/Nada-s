import { useEffect, useRef, useState } from "react";
import "./LaterMemoriesSection.css";

const memories = [
  `Shortly after, I got a call from Shehab, and it all came crumbling down. We met after, you explained everything, and I understood. Only that exact day
made me fall for you even deeper—how loving, respectful, and genuinely good you are, how so fucking wonderful of a human being you are.
Even then, you took me home like the gentleman you are, you fed me, we listened to music, and I showed you Charlie the Unicorn hahahaha.
I went home, and I was very sad, to be honest. I actually had a whole bucket of ice cream in one sitting. I was crushed, and I cried all day for like 3 days. I was gonna do what I used to always
do and just cut off all communication for both of our sakes, but for some reason, I didn't feel like it that time.
Not because I wanted to force it or to have a hidden agenda, but I just didn't. I didn't even think about it, and a few days after that, we went to Shelter. We had stayed talking,
and you introduced me to it and to your closest friends, and we went. You were always by my side, trying to make sure I wasn't left out,
even checked on me in the car, and paid for the Uber to take me home, and even called me to make sure I got there safely. I was so grateful and so shy.
Then the next day, something happened that shifted things for me. Shelter had posted a picture of us where we stood side by side, and you sent it to me.
It was a surprise. That same day, I told myself that I was not gonna force myself to get over you. I was gonna ride the whole thing out, see where it goes,
but I will not force myself to end it like I always did, because seeing that picture felt like it was meant to be. And that night, I prayed Tahajjud for an hour
and said that I would pray it every day until the day we got married. I was not gonna give up the love I had in me, but would respect your wishes wherever they may be and remain just a close friend.
`,

  `Many days and months passed after that. Many things happened. I stayed as I am, and even though sometimes I would see the opposite of what I wished for happening,
I stayed steady and trusted God and had faith. My faith grew bigger and stronger, though I never knew how you were for sure. We started sending each other songs for messages,
seeing each other regularly, started working with you in Peel and later Teriaq, and going to meetings where I was the only girl in a group full of boys hahahaha.
My love for you grew every single day, every single time we interacted, every single moment I saw how you talked to those around you, how you handled hardships, how much of a man you are,
how much of a great friend you are, how you'd help anyone, how smart and wise you are. You as a person—I was in awe. The amount of respect and admiration I had for you was
greater than any other. Yes, my love for you grew too, but I had so much respect and admiration for you that I was just grateful to have noticed, observed, and been around you as long
as I have been.
`,

  `We grew closer and closer, flirted more. I still remember the first time you called me Nadosha. I was so fucking happy, omg, and the first time you let me call you Domi baby.
You sent me a reel with marry-me pancakes and told me you wanted to try mine, hehehe, and I made 'em for you 3ala toull hahaha. And we went to Cairo, omg. That trip was beyond amazing.
It was something I didn't think would be possible, but thank God it happened, and it was so fucking amazing from start to finish.
I remember I wanted to get such a specific outfit so I could look good, and I found it in like 15 minutes of shopping. Everything was going so smooth, and I made us breakfast
for the ride. Us almost missing the train hahaha, that was fun. And the ride was awesome. We talked the whole way, and it was the first time I realised we didn't need to listen to music.
I still have the note on my phone with that hahaha.
And we went so many places. We went to Khan El Khalili and West El Balad and then Cinema Zawya at the end. You took such good care of me everywhere, and I remember it was so hot and
you kept giving me water hahaha. I felt so taken care of, and you took a candid picture of me, and we went to that beautiful house to rest a bit and took many photos and looked around.
It was amazing, ya Adam. Then we said we wanted to go pray, but you wouldn't let me pray alone, so we missed it, and I felt so bad because I wanted you to pray, but you wouldn't take no for
an answer. You stayed with me. We went to Caribou for a bit, and I changed into my second outfit, which you liked hehehe. I was so glad you did.
And we looked for a place to eat and found this charming small Italian restaurant, where we shared a pizza. It was phenomenal, and you soft-launched your ragebaiting hahaha.
Do you remember, hun? When I told you, "Oh, this is the first time for us to eat together in an actual restaurant," and you said, "No, first time was at Dala3 Kershk," hahaha.
Then we got ourselves so full and so broke, lol, and we went to the show. We watched it together and ran in an Uber to go to Reem while we had 20 pounds total hahaha.
It was so fucking amazing, though. I made you talk to Reem because I was nervous, and we spoke about our day the entire way back. I went to Reem, and you had to go to work, and it was the
most amazing trip I've ever gone on, ever.
`,

  `After a few weeks, Reem got sick, and I got a call from her saying she needs me. I was stunned. You came, picked me up from college right away, and we went to Zahran, got food, and sat on
the tram station. That day meant more to me than you will ever understand. You comforted me, distracted me, and were there for me in a way no one has ever been before, ever. I fell deeper and
deeper. I remember you telling me about the day you got a toy from Farghaly. It was a car that was the cool black car with guns. You haven't seen anything like it since,
and I've made it my mission to find one. I still haven't, but I'm determined, hehe.
I went home feeling so calm, in all the chaos. Even while you had your H. pylori that you had to take painful shots for, even when you were weighed down with work and trying to get
the laptop, you had made time to do what you knew was most important for me: spend time with me and talk to me.
It's a day I'll never forget.
And the day after I arrived was when we said to each other "I love you" for the very first time, over text in the middle of a match kora. My heart exploded. I didn't know what to do. I was like, "Is this real?
Is this REAL?!" And it was. Oh, thank God it was real, and I went home in a daze.
`,

  `After that, we went on our first first date hahaha. It was such a special, lovely night. You picked me up from college, you took me to my favorite restaurant, and we talked, laughed, ate—we did everything.
We had a drink at Basilico afterwards and took a BeReal that forever stays in my heart. You gave me your jacket, I gave you the little paper heart I made you, you took me to Taiki after too,
got me cookies. I still have their labels. I carry them with me wherever I go, and you took me home. I did not know then it was our first date because I've always been too scared to assume
something, then get hurt, so I didn't.
But a few days later, you said it to me, and one thing led to another. I was not too patient hahaha, but we finally confessed to each other
clearly and honestly. And I remember what we were both wearing: a red turtleneck and formal black pants, and you were wearing jeans and your Mobaco navy crewneck. We were on our way back from Jesuit, which had become a frequent spot of ours, attending a Beda Wel 7agaar party.
And we started talking on our way back home in the taftaf, and by the time we got home, we talked and talked and talked, and I was so fucking happy, ya Adam.
It was the best sleep I've ever gotten that night, being able to finally call you mine and having such a right and a privilege. It was literally a dream come true.
Later that night, you sent me that you had gotten accepted in Sync, and I was so excited for you.
And when you got back, you had gotten your laptop!!!!! Which I would always tell you you would do and that it will all be okay, and you didn't believe me, but I prayed on it day and night.
And it was finally here!!! And you came to me right away. We unboxed it together and videoed it, and I was so proud of you that moment, and I was so beyond happy at you being so happy.
It was the best couple of nights ever.
`
];

const constellationNodes = [
  "faith",
  "songs",
  "Peel",
  "Teriaq",
  "admiration",
];

const cairoStops = [
  "train",
  "Khan El Khalili",
  "West El Balad",
  "Caribou",
  "Cinema Zawya",
];

const envelopeMemories = [
  "first date",
  "confession",
  "Sync + laptop",
];

function LaterMemoriesSection() {
  const sectionRefs = useRef([]);
  const [visibleParts, setVisibleParts] = useState([]);

  const [constellationOpen, setConstellationOpen] = useState([]);
  const [activeCairoStop, setActiveCairoStop] = useState(0);
  const [loveMessageOpen, setLoveMessageOpen] = useState(false);
  const [openedEnvelopes, setOpenedEnvelopes] = useState([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleParts((current) =>
              current.includes(index) ? current : [...current, index]
            );
            observer.disconnect();
          }
        },
        {
          threshold: 0.14,
          rootMargin: "0px 0px -9% 0px",
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const openConstellationNode = (node) => {
    setConstellationOpen((current) =>
      current.includes(node) ? current : [...current, node]
    );
  };

  const openEnvelope = (memory) => {
    setOpenedEnvelopes((current) =>
      current.includes(memory) ? current : [...current, memory]
    );
  };

  return (
    <section className="later-memories-section">

      {/* PART 1 — KEEP: CRUMBLING ANIMATION */}
      <section
        ref={(node) => {
          sectionRefs.current[0] = node;
        }}
        className={`later-part crumble-part ${
          visibleParts.includes(0) ? "later-part-visible" : ""
        }`}
      >
        <div className="crumble-scene" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => (
            <span
              className="crumble-piece"
              key={index}
              style={{
                "--piece-x": `${((index * 41) % 340) - 170}px`,
                "--piece-y": `${70 + ((index * 29) % 190)}px`,
                "--piece-delay": `${(index % 7) * 0.08}s`,
                "--piece-rotate": `${((index * 37) % 120) - 60}deg`,
              }}
            >
              {index % 3 === 0 ? "♡" : index % 3 === 1 ? "✦" : "◇"}
            </span>
          ))}

          <div className="crumble-heart">♡</div>
        </div>

        <article className="later-story-card crumble-story-card">
          <p>{memories[0]}</p>
        </article>
      </section>


      {/* PART 2 — NEW: CONSTELLATION GAME */}
      <section
        ref={(node) => {
          sectionRefs.current[1] = node;
        }}
        className={`later-part constellation-part ${
          visibleParts.includes(1) ? "later-part-visible" : ""
        }`}
      >
        <header className="constellation-heading">
          <span>✦</span>
          <p>touch every little thing that made the feeling grow</p>
          <span>♡</span>
        </header>

        <div className="constellation-scene">
          <div
            className={`constellation-center ${
              constellationOpen.length === constellationNodes.length
                ? "constellation-center-complete"
                : ""
            }`}
          >
            <span>♡</span>
            <small>
              {constellationOpen.length} / {constellationNodes.length}
            </small>
          </div>

          <svg
            className="constellation-lines"
            viewBox="0 0 700 500"
            aria-hidden="true"
          >
            <line x1="350" y1="250" x2="150" y2="100" />
            <line x1="350" y1="250" x2="550" y2="105" />
            <line x1="350" y1="250" x2="105" y2="335" />
            <line x1="350" y1="250" x2="590" y2="335" />
            <line x1="350" y1="250" x2="350" y2="445" />
          </svg>

          {constellationNodes.map((node, index) => {
            const opened = constellationOpen.includes(node);

            return (
              <button
                type="button"
                className={`constellation-node constellation-node-${index + 1} ${
                  opened ? "constellation-node-open" : ""
                }`}
                key={node}
                onClick={() => openConstellationNode(node)}
              >
                <span>{opened ? "✦" : "♡"}</span>
                <strong>{node}</strong>
              </button>
            );
          })}
        </div>

        <article
          className={`later-story-card constellation-story-card ${
            constellationOpen.length === constellationNodes.length
              ? "constellation-story-card-visible"
              : ""
          }`}
        >
          <p>{memories[1]}</p>
        </article>
      </section>


      {/* PART 3 — NEW: CAIRO TRAIN JOURNEY */}
      <section
        ref={(node) => {
          sectionRefs.current[2] = node;
        }}
        className={`later-part cairo-journey-part ${
          visibleParts.includes(2) ? "later-part-visible" : ""
        }`}
      >
        <header className="cairo-journey-heading">
          <p>one ridiculously perfect day in Cairo ♡</p>
        </header>

        <div className="cairo-rail">
          <div className="cairo-rail-line" aria-hidden="true" />

          <div
            className="cairo-train"
            style={{
              "--train-left": `${
                8 +
                (activeCairoStop / (cairoStops.length - 1)) * 84
              }%`,
            }}
            aria-hidden="true"
          >
            🚆
          </div>

          {cairoStops.map((stop, index) => (
            <button
              type="button"
              className={`cairo-station ${
                activeCairoStop === index ? "cairo-station-active" : ""
              }`}
              key={stop}
              onClick={() => setActiveCairoStop(index)}
            >
              <span>{index + 1}</span>
              <strong>{stop}</strong>
            </button>
          ))}
        </div>

        <div className="cairo-pass">
          <span>MEMORY PASS</span>
          <strong>{cairoStops[activeCairoStop]}</strong>
          <b>♡</b>
        </div>

        <article className="later-story-card cairo-journey-story-card">
          <p>{memories[2]}</p>
        </article>
      </section>


      {/* PART 4 — KEEP: PHONE / I LOVE YOU */}
      <section
        ref={(node) => {
          sectionRefs.current[3] = node;
        }}
        className={`later-part love-message-part ${
          visibleParts.includes(3) ? "later-part-visible" : ""
        }`}
      >
        <button
          type="button"
          className={`love-phone ${
            loveMessageOpen ? "love-phone-open" : ""
          }`}
          onClick={() => setLoveMessageOpen(true)}
        >
          <span className="love-phone-speaker" />

          <div className="love-phone-screen">
            <small>new message</small>
            <strong>
              {loveMessageOpen ? '“I love you”' : "tap to open ♡"}
            </strong>
          </div>

          <span className="love-phone-home">♡</span>
        </button>

        <article
          className={`later-story-card love-story-card ${
            loveMessageOpen ? "love-story-card-visible" : ""
          }`}
        >
          <p>{memories[3]}</p>
        </article>
      </section>


      {/* PART 5 — NEW: OPEN THE ENVELOPES */}
      <section
        ref={(node) => {
          sectionRefs.current[4] = node;
        }}
        className={`later-part envelope-part ${
          visibleParts.includes(4) ? "later-part-visible" : ""
        }`}
      >
        <header className="envelope-heading">
          <p>three little things that made it real ♡</p>
        </header>

        <div className="envelope-grid">
          {envelopeMemories.map((memory, index) => {
            const opened = openedEnvelopes.includes(memory);

            return (
              <button
                type="button"
                className={`memory-envelope memory-envelope-${index + 1} ${
                  opened ? "memory-envelope-open" : ""
                }`}
                key={memory}
                onClick={() => openEnvelope(memory)}
              >
                <span className="envelope-flap" />
                <span className="envelope-paper">
                  <b>{opened ? "♥" : "♡"}</b>
                  <strong>{memory}</strong>
                  <small>{opened ? "opened" : "open me"}</small>
                </span>
              </button>
            );
          })}
        </div>

        <article
          className={`later-story-card envelope-story-card ${
            openedEnvelopes.length === envelopeMemories.length
              ? "envelope-story-card-visible"
              : ""
          }`}
        >
          <p>{memories[4]}</p>
        </article>
      </section>

    </section>
  );
}

export default LaterMemoriesSection;