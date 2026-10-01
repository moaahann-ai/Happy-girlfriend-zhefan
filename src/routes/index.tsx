import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import introPhoto from "../assets/intro.jpg.asset.json";
import mainPhoto from "../assets/main.png.asset.json";
import messagePhoto from "../assets/message.jpg.asset.json";
import galleryOne from "../assets/gallery-one.jpg.asset.json";
import galleryTwo from "../assets/gallery-two.jpg.asset.json";
import closingPhoto from "../assets/closing.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Girlfriend Day Zhefana — Untuk Kamu" },
      { name: "description", content: "Sebuah hadiah digital penuh cinta, bunga, foto, dan pesan manis untuk Zhefana." },
      { property: "og:title", content: "Happy Girlfriend Day Zhefana — Untuk Kamu" },
      { property: "og:description", content: "Sebuah hadiah digital penuh cinta, bunga, foto, dan pesan manis untuk Zhefana." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className={`float-item ${i % 3 === 0 ? "heart" : "petal"}`}>
          {i % 3 === 0 ? (i % 2 === 0 ? "♥" : "🩷") : null}
        </span>
      ))}
    </div>
  );
}

function Index() {
  const [intro, setIntro] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 3000);
    const removeTimer = window.setTimeout(() => setIntro(false), 3700);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="love-page">
      {intro && (
        <div className={`intro-screen ${leaving ? "is-leaving" : ""}`} role="status" aria-label="Membuka hadiah untuk Zhefana">
          <span className="intro-sparkle" aria-hidden="true">♥</span>
          <span className="intro-sparkle" aria-hidden="true">✧</span>
          <span className="intro-sparkle" aria-hidden="true">♥</span>
          <span className="intro-sparkle" aria-hidden="true">✧</span>
          <div className="intro-inner">
            <div className="intro-photo-wrap"><img className="intro-photo" src={introPhoto.url} alt="Pesan cinta pembuka untuk Zhefana" /></div>
            <span className="intro-heart" aria-hidden="true">♥</span>
            <div className="intro-progress" aria-hidden="true" />
          </div>
        </div>
      )}

      <Atmosphere />
      <main className="page-content">
        <section className="hero" aria-labelledby="hero-title">
          <span className="hero-flower one" aria-hidden="true">✿</span>
          <span className="hero-flower two" aria-hidden="true">✿</span>
          <span className="hero-flower three" aria-hidden="true">✽</span>
          <span className="hero-small-heart" aria-hidden="true">♥</span>
          <p className="hero-topline">a little something, just for you</p>
          <h1 id="hero-title" className="hero-title"><span>happy girlfriend day</span><span>zhefana</span></h1>
          <div className="hero-divider" aria-hidden="true">♥</div>
          <span className="hero-bottom">scroll untuk kisah kita ↓</span>
        </section>

        <section className="feature-section" aria-label="Bunga untuk Zhefana">
          <Reveal>
            <div className="section-intro">
              <span className="eyebrow">01 / untuk kamu</span>
              <h2 className="section-title">A little love, in bloom</h2>
              <span className="section-flourish" aria-hidden="true">✿</span>
            </div>
            <div className="feature-photo-frame"><img className="feature-photo" src={mainPhoto.url} alt="Buket bunga yang diberikan untuk Zhefana" /></div>
          </Reveal>
          <span className="feature-ornament" aria-hidden="true">✿</span>
        </section>

        <section className="message-section" aria-label="Pesan romantis untuk Zhefana">
          <img className="message-bg" src={messagePhoto.url} alt="" aria-hidden="true" />
          <span className="message-side-heart left" aria-hidden="true">♥</span>
          <span className="message-side-heart right" aria-hidden="true">♥</span>
          <Reveal className="message-inner">
            <span className="eyebrow">02 / dari hati</span>
            <div className="message-text">
              <p>Halo babyyyy , happy girlfriend day 🫰</p>
              <p>Aku tau ini rada aneh aku buat web mulu tapi gapapa lah yaaa , apasih yang engga buat kamu zhee.....</p>
              <p>Aku harap kamu tambah baik , di lancarkan rezeki , dan kita selalu bersama ya...( Aku harap kita bisa bertahan selama lamanya )</p>
              <p>Heheheh love youuu babyyyy🩷🩷</p>
            </div>
            <span className="message-heart" aria-hidden="true">♥</span>
          </Reveal>
        </section>

        <section className="gallery-section" aria-label="Galeri foto berdua">
          <span className="gallery-bloom left" aria-hidden="true">✿</span>
          <span className="gallery-bloom right" aria-hidden="true">✽</span>
          <Reveal>
            <div className="section-intro">
              <span className="eyebrow">03 / kita berdua</span>
              <h2 className="section-title">Our little moments</h2>
              <span className="section-flourish" aria-hidden="true">♡</span>
            </div>
            <div className="gallery-grid">
              <div className="gallery-frame first"><img src={galleryOne.url} alt="Kolase kenangan foto berdua" loading="lazy" /></div>
              <div className="gallery-frame second"><img src={galleryTwo.url} alt="Rangkaian foto berdua di photobooth" loading="lazy" /></div>
            </div>
          </Reveal>
        </section>

        <section className="closing-section" aria-label="Penutup untuk Zhefana">
          <Reveal>
            <span className="eyebrow">always, us</span>
            <div className="closing-photo-frame"><img className="closing-photo" src={closingPhoto.url} alt="Bayangan berdua membentuk hati" loading="lazy" /></div>
            <h2 className="closing-title">🩷Aku sayangg sama kamu zhefaaa🩷</h2>
            <p className="closing-mark">✿ &nbsp; forever and always &nbsp; ✿</p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
