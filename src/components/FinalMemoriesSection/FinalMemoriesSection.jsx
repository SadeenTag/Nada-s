import { useEffect, useRef, useState } from "react";
import "./FinalMemoriesSection.css";

const finalMemories = [
  `At some point, we went to El Ngma, and you told me that I still had a way out and that you don't think I can handle you, or that you might not be as good as I see you. But now,
2 years later and many, many great memories and bad times later, even after all the fights and rough patches, even after the break we had, even after our mistakes and our misunderstandings,
our flaws and our old trauma wounds that sometimes take over, I still see you the same way I did, and I love you even more than I did before. And I am 100X times more sure
of you as I ever was too. You're the one for me. I want no one else. No one can even compare to you in my eyes or heart. I love you, I always have, and always will.
And that means I'll always have growing love for you, because as we grow together, we expand, we change, we know more, do more, see more, and so there will always be
parts of us getting revealed to one another as time passes. And I love all of you, with every nice, great, or bad aspect about you, because I know you. I know your core.
And we as people are not traits that we pick or choose from.
People are an azeotrope of everything that's ever affected them, everything they've been through, everything they've learnt, whether to survive or to keep themselves safe.
And an azeotrope cannot be separated. A person would not be as kind as they are if they didn't know what it was like to be cruel. You wouldn't have the work ethic you have that I respect so much
if you weren't able to separate from your emotions completely when you need to and be nonchalant. You would not be the man you are without all the bad things you've experienced in life. You
wouldn't have so much self-respect, which I admire, if you didn't choose carefully what you can let slide and be picky with it. You wouldn't be the considerate gentleman you are
if you don't overthink sometimes, and you wouldn't be the friend there to help everyone kindly if you weren't okay to be overwhelmed with that at times. You would not accomplish all the things
you have that I'm so proud of you for if you didn't get too busy sometimes, and you couldn't have been good at protecting yourself from getting hurt without being a
little mean sometimes.
And so I do love all of you, and I say that intentionally and genuinely because I recognise and acknowledge that everything I love about you, all the awesomeness, is there in balance and at times because of
the very things we sometimes call "flaws." I love all of you because I know that as much as you are capable of hurting my feelings when things are rough between us, that you always know
how tegbor be 5try and to make up with me and hold me and reconnect with me, and that the exact reason you might hurt me is because you mean so much to me. I love all of you because I admire you as a person and respect you as a man.
We were best friends before we were ever lovers, and so I feel comfortable saying that I have seen the parts of you that you wouldn't like sometimes, and I still respect, admire, and love you
for all of you. I don't wanna pick you apart, and I don't only love you when you're at your best either. I love you at your lowest, deepest, and worst before I love you anywhere else. I love you unconditionally and not because of what you do for me, but because
of who you are. During our break, I didn't know if it would be a month, a year, or a decade, or even never, and my love for you still grew despite every hurt and doubt and fear.
And I will always choose to, no matter what storms we may see together, because when the rain stops and the sun comes out again, it is you I wanna look at and hug and say, "Look how beautiful the sky
is." And the sun always does come out again, even if it takes longer, so don't even think about saying that hahaha. (wa ena ma3 al 3osr yosr)
And whether you think it's crazy of me to want that or not, I do, and I know what I want because I have wanted all of you no matter what 3 years ago,
and now I'm even more sure of it. And I know I'll be more sure of it tomorrow, and I'll always choose you. And it's okay if you don't believe me now. I'm not looking to change your mind
because there's no need to prove what time and life will always show you is true. I've showed you before, and I'll forever live showing you that I mean my words and keep my promise,
because I love you on bad days, on good days, on days we are upset, stressed, and overwhelmed, on days we don't speak, on days we fight, on days we are at our best. I love you 3la toul.`,

  `And I want you to know something else too. I say a lot right now because words are most of what I have at the moment, not because I don't have actions, but because we are not living together
yet, and that's why talking and words are especially important to me right now. Because when we live together, I won't need to ask you, "Are you okay? Did you eat today? Did you sleep well?"
I won't need to tell you, "Hey, I love you, I'm always here," every time I wanna be there for you at 3 AM. I would just notice you, my love. I would notice when you're overstimulated, so I'd shut off
the TV and lower the light and stay quiet. I would notice you haven't eaten breakfast yet, so I would make you that breakfast recipe from a reel you sent me a week ago that you liked.
If you were having trouble sleeping, I'd get up and stay up with you until you slept, or try to take you in my arms and relax you. If I notice you have been working so long and up so late
because you have a deadline, I would stay up in the next room and make you snacks and drinks every few hours without disturbing you. I would notice your neck aching and give you a quick massage.
I would run to the door and greet you with excitement every single time you came home. I would call your aunt to surprise you with one of your all-time favorite recipes when you feel down.
I would rub your feet for you after a long day at work. I would make sure your favorite suit is always ready before any event. I would make sure your shoes were shined
and none of your buttons were missing in any shirt. I would make sure we never run out of your favorite drink in the fridge. I would stay up with you whenever you got sick and take care of you
and make you laugh. I would dance and sing across our home to cheer you up if I saw you were sad. I'd surprise you with a movie night in the middle of the living room on a random Tuesday
night, and I'd always keep you company, even if in silence, when the world is heavy on you. You would always be able to just lay your head on my lap as I read Quran while playing
with your hair. I wouldn't need the words. I would notice when I got a new snack that you didn't like, so I won't get it again. I would surprise you with nightgowns and dresses every week.
I would make sure the home is always clean and peaceful for you, and I would always make sure to play Quran every day to bring baraka into our home.
I would always welcome and host anyone you invite and make you proud. I would always know by just a glance, so please, baby, never forget that. Never forget that I do care and
don't doubt it, because I cannot wait to be doing these things and more, and that's because I care about all of you. And for now? When we are out with friends
and you glance at water, I will always bring it closer. And when we meet at Dusk, I will always make sure to have ice-cold water in the fridge that's ready for you,
because I know you've been walking and working all day. And I will always sit where I know you'll be most comfortable in a cafe, and if there is more than one option, then I call to ask you.
And I will always ask for your permission to go out before my own father, because he might say yes, but you might not be comfortable with it, and I don't want that. And I will always put alarms 30 to 15 minutes
apart if I take a nap so that I am still able to respond and talk to you if you text me, because I know you're busy and might get just a few minutes to chat. And when we are on call and you've slept, but I'm going to the gym or college,
I will always never hang up, and I will always answer you even if I'm in a lecture hahaha. And I will always save posts and reels you like so I can get that or make that for you later, like the teddy bear I made
you after you reposted it on Twitter. Baby, I adore you, and I cannot wait until we live together so I could show you every single detail of how much I love and care about you,
to wake you up in the morning with a kiss and feed you breakfast with my hands as I sit on your lap. I could go on and on and on, my love.`,

  `At the end, I'm beyond grateful for you, ya Adam, for everything you do for me. Always making time for me no matter what, being gentle with me even when I'm wrong,
teaching me gently how to be better in all genres, whether as a woman, wife, or friend, rooting for me and supporting me at all times, being there for me always, being the sweetest man and
treating me like a princess, making me feel like the most important girl in the world, listening to me and making me laugh, caring about me and all my details, repairing with me after fights,
being so good to my family even when it is not convenient for you, making me feel like the most beautiful girl in the world, complimenting me and teasing me, always treating me and getting
me sweets and chocolate, always holding my hand during tough conversations, being patient with me, pushing me to be a better version of myself, always being my backbone,
my safe space, my home, where I can break down knowing you'll hold me until I can put myself back together, not making me feel like a burden, and being gentle with me twice because yes,
you have no idea how much it means to me. I am so grateful for you, and I thank God I have you every single day, walahy. And till now, I pray for us and for you, and I will
until the day we get married, inshallah, because I know we will. You're my soulmate, and I can't wait. And I'll continue always praying for you even after we do, till the day I'm reunited with you
in Jannah, inshallah, my love.`
];

const homeMoments = [
  { id: "breakfast", label: "breakfast", icon: "☕" },
  { id: "work", label: "late work nights", icon: "⌨" },
  { id: "quran", label: "Quran", icon: "☾" },
  { id: "water", label: "ice-cold water", icon: "◌" },
  { id: "comfort", label: "comfort", icon: "♡" },
  { id: "home", label: "coming home", icon: "⌂" },
];

const gratitudeStars = [
  "your gentleness",
  "your patience",
  "your support",
  "your care",
  "your humor",
  "your strength",
  "your love",
  "your presence",
];

function FinalMemoriesSection() {
  const sectionRefs = useRef([]);
  const [visibleParts, setVisibleParts] = useState([]);

  const [stormCleared, setStormCleared] = useState(false);
  const [openedHomeMoments, setOpenedHomeMoments] = useState([]);
  const [gratitudeOpened, setGratitudeOpened] = useState([]);

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
          threshold: 0.12,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const openHomeMoment = (id) => {
    setOpenedHomeMoments((current) =>
      current.includes(id) ? current : [...current, id]
    );
  };

  const openGratitude = (item) => {
    setGratitudeOpened((current) =>
      current.includes(item) ? current : [...current, item]
    );
  };

  return (
    <section className="final-memories-section">

      {/* PART 1 — STORM TO SUN / AZEOTROPE */}
      <section
        ref={(node) => {
          sectionRefs.current[0] = node;
        }}
        className={`final-part azeotrope-part ${
          visibleParts.includes(0) ? "final-part-visible" : ""
        } ${stormCleared ? "storm-cleared" : ""}`}
      >
        <div className="weather-stage" aria-hidden="true">
          <div className="storm-cloud storm-cloud-one" />
          <div className="storm-cloud storm-cloud-two" />

          <div className="rain-field">
            {Array.from({ length: 26 }, (_, index) => (
              <span
                className="rain-drop"
                key={index}
                style={{
                  "--rain-left": `${(index * 37) % 100}%`,
                  "--rain-delay": `${(index % 9) * 0.13}s`,
                  "--rain-duration": `${1.15 + (index % 5) * 0.16}s`,
                }}
              />
            ))}
          </div>

          <div className="sun-core">☀</div>
        </div>

        <div className="azeotrope-orbit" aria-hidden="true">
          {Array.from({ length: 14 }, (_, index) => (
            <span
              className={`azeotrope-particle azeotrope-particle-${index + 1}`}
              key={index}
            >
              {index % 3 === 0 ? "♡" : index % 3 === 1 ? "✦" : "◦"}
            </span>
          ))}

          <div className="azeotrope-heart">
            <span>♡</span>
            <small>all of you</small>
          </div>
        </div>

        <button
          type="button"
          className="storm-button"
          onClick={() => setStormCleared(true)}
        >
          {stormCleared ? "the sun always comes out again ♡" : "clear the storm"}
        </button>

        <article
          className={`final-story-card azeotrope-story-card ${
            stormCleared ? "azeotrope-story-visible" : ""
          }`}
        >
          <p>{finalMemories[0]}</p>
        </article>
      </section>


      {/* PART 2 — INTERACTIVE FUTURE HOME */}
      <section
        ref={(node) => {
          sectionRefs.current[1] = node;
        }}
        className={`final-part future-home-part ${
          visibleParts.includes(1) ? "final-part-visible" : ""
        }`}
      >
        <header className="future-home-heading">
          <p>the little things I can't wait to do ♡</p>
        </header>

        <div className="future-home">
          <div className="home-roof" aria-hidden="true" />

          <div className="home-room">
            <div className="home-window" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="home-lamp" aria-hidden="true">
              <span />
            </div>

            <div className="home-sofa" aria-hidden="true">
              <span>♡</span>
            </div>

            <div className="home-rug" aria-hidden="true" />

            <div className="home-moment-grid">
              {homeMoments.map((moment, index) => {
                const opened = openedHomeMoments.includes(moment.id);

                return (
                  <button
                    type="button"
                    className={`home-moment home-moment-${index + 1} ${
                      opened ? "home-moment-open" : ""
                    }`}
                    key={moment.id}
                    onClick={() => openHomeMoment(moment.id)}
                  >
                    <span>{moment.icon}</span>
                    <strong>{moment.label}</strong>
                    <small>{opened ? "♡" : "tap"}</small>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="home-progress">
          <div
            className="home-progress-fill"
            style={{
              "--home-progress": `${
                (openedHomeMoments.length / homeMoments.length) * 100
              }%`,
            }}
          />
        </div>

        <article
          className={`final-story-card home-story-card ${
            openedHomeMoments.length === homeMoments.length
              ? "home-story-visible"
              : ""
          }`}
        >
          <p>{finalMemories[1]}</p>
        </article>
      </section>


      {/* PART 3 — GRATITUDE CONSTELLATION */}
      <section
        ref={(node) => {
          sectionRefs.current[2] = node;
        }}
        className={`final-part gratitude-part ${
          visibleParts.includes(2) ? "final-part-visible" : ""
        }`}
      >
        <header className="gratitude-heading">
          <p>everything I am grateful for ♡</p>
        </header>

        <div className="gratitude-sky">
          <svg
            className="gratitude-lines"
            viewBox="0 0 800 560"
            aria-hidden="true"
          >
            <line x1="400" y1="280" x2="150" y2="90" />
            <line x1="400" y1="280" x2="400" y2="70" />
            <line x1="400" y1="280" x2="650" y2="90" />
            <line x1="400" y1="280" x2="105" y2="310" />
            <line x1="400" y1="280" x2="695" y2="310" />
            <line x1="400" y1="280" x2="180" y2="490" />
            <line x1="400" y1="280" x2="400" y2="510" />
            <line x1="400" y1="280" x2="620" y2="490" />
          </svg>

          <div
            className={`gratitude-heart ${
              gratitudeOpened.length === gratitudeStars.length
                ? "gratitude-heart-complete"
                : ""
            }`}
          >
            <span>♡</span>
            <small>
              {gratitudeOpened.length} / {gratitudeStars.length}
            </small>
          </div>

          {gratitudeStars.map((item, index) => {
            const opened = gratitudeOpened.includes(item);

            return (
              <button
                type="button"
                className={`gratitude-star gratitude-star-${index + 1} ${
                  opened ? "gratitude-star-open" : ""
                }`}
                key={item}
                onClick={() => openGratitude(item)}
              >
                <span>{opened ? "★" : "☆"}</span>
                <strong>{item}</strong>
              </button>
            );
          })}
        </div>

        <article
          className={`final-story-card gratitude-story-card ${
            gratitudeOpened.length === gratitudeStars.length
              ? "gratitude-story-visible"
              : ""
          }`}
        >
          <p>{finalMemories[2]}</p>
        </article>

        <div
          className={`final-heart-ending ${
            gratitudeOpened.length === gratitudeStars.length
              ? "final-heart-ending-visible"
              : ""
          }`}
          aria-hidden="true"
        >
          <span>♡</span>
          <p>always you</p>
        </div>
      </section>

    </section>
  );
}

export default FinalMemoriesSection;