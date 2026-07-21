"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Language = "fr" | "en";

const copy = {
  fr: {
    nav: ["Le café", "Menu", "Événements", "Visiter"],
    direction: "Itinéraire",
    eyebrow: "Café • Gelato • Bord de l’eau",
    heroTitleA: "Votre pause",
    heroTitleB: "au bord de l’eau.",
    heroBody:
      "Du café fraîchement préparé, des gaufres généreuses et du gelato artisanal — servis avec une vue qui invite à ralentir.",
    seeMenu: "Découvrir le menu",
    findUs: "Nous trouver",
    terrace: "Terrasse au bord de l’eau",
    seasonal: "Heures d’ouverture",
    seasonalBody: "Lun–jeu et dim 11 h–20 h 30 • ven 11 h–21 h • sam 11 h 30–21 h",
    chapter: "Un café qui ressemble à une escapade",
    storyTitle: "À quelques minutes d’Ottawa. À mille lieues du quotidien.",
    storyBody:
      "Installez-vous à l’intérieur ou sur notre terrasse face à la marina. Café Fwanest réunit les petites choses qui font une belle journée : quelque chose de bon, des gens qu’on aime et le calme de la rivière.",
    water: "Vue sur la rivière",
    family: "Pour toute la famille",
    made: "Préparé avec soin",
    favourites: "Nos incontournables",
    favouritesTitle: "Du réconfort, servi frais.",
    menuIntro:
      "Des classiques bien faits, des douceurs généreuses et quelques surprises inspirées d’ici et d’ailleurs.",
    fullMenu: "Voir tout le menu",
    menuTitle: "Choisissez votre moment Fwanest.",
    menuNote: "Sélection représentative. Les choix peuvent varier selon la saison.",
    eventEyebrow: "Plus qu’un café",
    eventTitle: "Créer, goûter, se retrouver.",
    eventBody:
      "Ateliers créatifs, collaborations locales et après-midis gourmands : notre espace au bord de l’eau accueille des expériences pensées pour rassembler.",
    eventCta: "Voir les prochains événements",
    eventCard: "Atelier Art, Gaufres & Gelato",
    eventTag: "Expérience Fwanest",
    galleryTitle: "La vie est plus douce au bord de l’eau.",
    reviews: "Ce qu’on aime chez Fwanest",
    review1: "Une vue magnifique, une ambiance calme et un accueil chaleureux.",
    review2: "L’endroit parfait pour un latte, une douceur et une pause au soleil.",
    review3: "On vient pour le café. On reste pour la rivière.",
    visitEyebrow: "Planifiez votre visite",
    visitTitle: "Votre table vous attend.",
    addressLabel: "Adresse",
    hoursLabel: "Heures",
    hoursValue: [
      "Lundi 11 h–20 h 30",
      "Mardi 11 h–20 h 30",
      "Mercredi 11 h–20 h 30",
      "Jeudi 11 h–20 h 30",
      "Vendredi 11 h–21 h",
      "Samedi 11 h 30–21 h",
      "Dimanche 11 h–20 h 30",
    ],
    phoneLabel: "Téléphone",
    amenities: "Stationnement gratuit • Wi-Fi • Accessible • Terrasse",
    maps: "Ouvrir dans Google Maps",
    follow: "Suivre sur Instagram",
    footer: "Café et gelato au bord de l’eau à Gatineau.",
  },
  en: {
    nav: ["The café", "Menu", "Events", "Visit"],
    direction: "Directions",
    eyebrow: "Coffee • Gelato • By the water",
    heroTitleA: "Your escape",
    heroTitleB: "by the water.",
    heroBody:
      "Freshly made coffee, generous waffles and artisan gelato — served with a view that invites you to slow down.",
    seeMenu: "Explore the menu",
    findUs: "Find us",
    terrace: "Waterfront terrace",
    seasonal: "Opening hours",
    seasonalBody: "Mon–Thu & Sun 11–8:30 • Fri 11–9 • Sat 11:30–9",
    chapter: "A café that feels like an escape",
    storyTitle: "Minutes from Ottawa. Miles from the everyday.",
    storyBody:
      "Settle in inside or on our terrace overlooking the marina. Café Fwanest brings together the little things that make a great day: something delicious, people you love and the calm of the river.",
    water: "River views",
    family: "Family friendly",
    made: "Made with care",
    favourites: "House favourites",
    favouritesTitle: "Comfort, served fresh.",
    menuIntro:
      "Well-made classics, generous treats and a few surprises inspired by flavours from near and far.",
    fullMenu: "See the full menu",
    menuTitle: "Choose your Fwanest moment.",
    menuNote: "A representative selection. Items may vary with the season.",
    eventEyebrow: "More than a café",
    eventTitle: "Create, taste, connect.",
    eventBody:
      "Creative workshops, local collaborations and delicious afternoons: our waterfront space hosts experiences designed to bring people together.",
    eventCta: "See upcoming events",
    eventCard: "Art, Waffles & Gelato Workshop",
    eventTag: "A Fwanest experience",
    galleryTitle: "Life is sweeter by the water.",
    reviews: "What people love about Fwanest",
    review1: "A beautiful view, peaceful atmosphere and such a warm welcome.",
    review2: "The perfect place for a latte, something sweet and a sunny pause.",
    review3: "Come for the coffee. Stay for the river.",
    visitEyebrow: "Plan your visit",
    visitTitle: "Your table is waiting.",
    addressLabel: "Address",
    hoursLabel: "Hours",
    hoursValue: [
      "Monday 11 a.m.–8:30 p.m.",
      "Tuesday 11 a.m.–8:30 p.m.",
      "Wednesday 11 a.m.–8:30 p.m.",
      "Thursday 11 a.m.–8:30 p.m.",
      "Friday 11 a.m.–9 p.m.",
      "Saturday 11:30 a.m.–9 p.m.",
      "Sunday 11 a.m.–8:30 p.m.",
    ],
    phoneLabel: "Phone",
    amenities: "Free parking • Wi-Fi • Accessible • Patio seating",
    maps: "Open in Google Maps",
    follow: "Follow on Instagram",
    footer: "Coffee and gelato by the water in Gatineau.",
  },
};

const menu = [
  { category: "coffee", fr: "Latté au caramel", en: "Caramel latte", noteFr: "Velouté, riche et réconfortant", noteEn: "Smooth, rich and comforting" },
  { category: "coffee", fr: "Cappuccino", en: "Cappuccino", noteFr: "Espresso, lait chaud et mousse", noteEn: "Espresso, steamed milk and foam" },
  { category: "cold", fr: "Fwappé caramel", en: "Caramel Fwappé", noteFr: "Glacé, crémeux et gourmand", noteEn: "Icy, creamy and indulgent" },
  { category: "cold", fr: "Thé glacé maison", en: "House iced tea", noteFr: "Frais et parfaitement équilibré", noteEn: "Fresh and perfectly balanced" },
  { category: "sweet", fr: "Gaufre & gelato", en: "Waffle & gelato", noteFr: "Une douceur à partager — ou pas", noteEn: "A treat to share — or not" },
  { category: "sweet", fr: "Pâtisseries maison", en: "House pastries", noteFr: "Préparées sur place selon l’inspiration", noteEn: "Made in house, inspired by the day" },
  { category: "food", fr: "Sandwich au poulet jerk", en: "Jerk chicken sandwich", noteFr: "Ciabatta, cheddar et mayo épicée", noteEn: "Ciabatta, cheddar and spicy mayo" },
  { category: "food", fr: "Club au poulet jerk", en: "Jerk chicken club", noteFr: "Généreux, savoureux et frais", noteEn: "Generous, savoury and fresh" },
];

const filters = {
  fr: [
    ["all", "Tout"], ["coffee", "Cafés"], ["cold", "Boissons froides"], ["sweet", "Douceurs"], ["food", "Salé"],
  ],
  en: [
    ["all", "All"], ["coffee", "Coffee"], ["cold", "Cold drinks"], ["sweet", "Sweets"], ["food", "Savoury"],
  ],
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");
  const [activeFilter, setActiveFilter] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  const visibleMenu = useMemo(
    () => menu.filter((item) => activeFilter === "all" || item.category === activeFilter),
    [activeFilter],
  );

  const navTargets = ["cafe", "menu", "events", "visit"];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Café Fwanest — accueil">
          <span className="brand-mark">F</span>
          <span><strong>FWANEST</strong><small>CAFÉ • GELATO</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          {t.nav.map((label, index) => (
            <a key={label} href={`#${navTargets[index]}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            aria-label={language === "fr" ? "Switch to English" : "Passer au français"}
          >
            <span className={language === "fr" ? "active" : ""}>FR</span>
            <span className={language === "en" ? "active" : ""}>EN</span>
          </button>
          <a className="header-cta" href="https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Fwanest+1071+Rue+Jacques-Cartier+Gatineau" target="_blank" rel="noreferrer">
            {t.direction} <span>↗</span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Ouvrir le menu">
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Terrasse du Café Fwanest face à la marina">
          <div className="hero-photo-overlay" />
          <div className="photo-caption"><span>●</span> {t.terrace}<small>1071, rue Jacques-Cartier</small></div>
        </div>
        <div className="hero-copy">
          <div className="water-orbit orbit-one" />
          <div className="water-orbit orbit-two" />
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heroTitleA}<br /><em>{t.heroTitleB}</em></h1>
          <p className="hero-body">{t.heroBody}</p>
          <div className="hero-buttons">
            <a className="button button-dark" href="#menu">{t.seeMenu} <span>↓</span></a>
            <a className="text-link" href="#visit">{t.findUs} <span>→</span></a>
          </div>
          <div className="hours-card">
            <span className="sun-icon">☀</span>
            <div><strong>{t.seasonal}</strong><small>{t.seasonalBody}</small></div>
            <a href="https://www.instagram.com/cafefwanest/" target="_blank" rel="noreferrer" aria-label="Instagram">↗</a>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>CAFÉ FRAIS <span>✦</span> GELATO ARTISANAL <span>✦</span> GAUFRES LIÉGEOISES <span>✦</span> VUE SUR L’EAU <span>✦</span> CAFÉ FRAIS <span>✦</span> GELATO ARTISANAL <span>✦</span></div>
      </div>

      <section className="story section" id="cafe">
        <div className="story-grid">
          <div className="story-photo-wrap reveal">
            <Image src="/images/cafe/interior.jpg" alt="Intérieur lumineux du Café Fwanest avec vue sur la terrasse" width={1200} height={1600} sizes="(max-width: 1050px) 80vw, 40vw" />
            <div className="story-stamp"><span>AU BORD</span><strong>DE L’EAU</strong><small>GATINEAU</small></div>
          </div>
          <div className="story-copy">
            <p className="eyebrow dark">{t.chapter}</p>
            <h2>{t.storyTitle}</h2>
            <p>{t.storyBody}</p>
            <div className="story-features">
              <div><span>≈</span><strong>{t.water}</strong></div>
              <div><span>☺</span><strong>{t.family}</strong></div>
              <div><span>✦</span><strong>{t.made}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="favourites section">
        <div className="section-heading">
          <div><p className="eyebrow dark">{t.favourites}</p><h2>{t.favouritesTitle}</h2></div>
          <p>{t.menuIntro}</p>
        </div>
        <div className="favourite-grid">
          <article className="favourite-card tall">
            <Image src="/images/cafe/coffee.jpg" alt="Café glacé servi sur la terrasse" width={1600} height={1200} sizes="(max-width: 700px) 100vw, 50vw" />
            <div><span>01</span><h3>{language === "fr" ? "Cafés glacés" : "Iced coffees"}</h3><p>{language === "fr" ? "À savourer lentement" : "Made for slow sipping"}</p></div>
          </article>
          <article className="favourite-card wide">
            <Image src="/images/cafe/waffle.jpg" alt="Gaufre avec gelato, chocolat et fruits" width={1600} height={1066} sizes="(max-width: 700px) 100vw, 50vw" />
            <div><span>02</span><h3>{language === "fr" ? "Gaufre & gelato" : "Waffle & gelato"}</h3><p>{language === "fr" ? "Le duo signature" : "The signature pairing"}</p></div>
          </article>
          <article className="favourite-card mint">
            <Image src="/images/cafe/drink.jpg" alt="Boisson froide verte du Café Fwanest" width={1200} height={1600} sizes="(max-width: 700px) 100vw, 50vw" />
            <div><span>03</span><h3>Fwappés</h3><p>{language === "fr" ? "Frais, crémeux, colorés" : "Fresh, creamy, colourful"}</p></div>
          </article>
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="menu-header">
          <div><p className="eyebrow">MENU</p><h2>{t.menuTitle}</h2></div>
          <a href="https://restaurantsgatineau.ca/fr/restaurants/djeuner/caf-fwanest" target="_blank" rel="noreferrer">{t.fullMenu} ↗</a>
        </div>
        <div className="filters" role="group" aria-label="Catégories du menu">
          {filters[language].map(([value, label]) => (
            <button key={value} className={activeFilter === value ? "active" : ""} onClick={() => setActiveFilter(value)}>{label}</button>
          ))}
        </div>
        <div className="menu-list" aria-live="polite">
          {visibleMenu.map((item, index) => (
            <article className="menu-item" key={`${item.category}-${item.fr}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{language === "fr" ? item.fr : item.en}</h3><p>{language === "fr" ? item.noteFr : item.noteEn}</p></div>
              <b>✦</b>
            </article>
          ))}
        </div>
        <p className="menu-note">{t.menuNote}</p>
      </section>

      <section className="events section" id="events">
        <div className="event-copy">
          <p className="eyebrow dark">{t.eventEyebrow}</p>
          <h2>{t.eventTitle}</h2>
          <p>{t.eventBody}</p>
          <a className="button button-outline" href="https://www.instagram.com/cafefwanest/" target="_blank" rel="noreferrer">{t.eventCta} ↗</a>
        </div>
        <div className="event-card">
          <div className="event-art"><span>ART</span><b>&</b><strong>GELATO</strong></div>
          <div className="event-info"><small>{t.eventTag}</small><h3>{t.eventCard}</h3><span>Studio Crudo × Café Fwanest</span></div>
        </div>
      </section>

      <section className="gallery section">
        <div className="gallery-title"><span>01 — 03</span><h2>{t.galleryTitle}</h2></div>
        <div className="gallery-grid">
          <figure className="gallery-main"><Image src="/images/cafe/terrace.jpg" alt="Terrasse ensoleillée du Café Fwanest avec vue sur l’eau" width={1200} height={1600} sizes="(max-width: 700px) 100vw, 60vw" /></figure>
          <figure><Image src="/images/cafe/drink.jpg" alt="Boisson froide sur la terrasse" width={1200} height={1600} sizes="(max-width: 700px) 50vw, 40vw" /></figure>
          <figure><Image src="/images/cafe/waffle.jpg" alt="Gaufre garnie de gelato" width={1600} height={1066} sizes="(max-width: 700px) 50vw, 40vw" /></figure>
        </div>
      </section>

      <section className="reviews section">
        <p className="eyebrow dark">{t.reviews}</p>
        <div className="review-grid">
          {[t.review1, t.review2, t.review3].map((review, index) => (
            <blockquote key={review}><span>“</span><p>{review}</p><footer>0{index + 1} — {language === "fr" ? "Apprécié par nos visiteurs" : "Loved by our guests"}</footer></blockquote>
          ))}
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-watermark">FWANEST</div>
        <div className="visit-heading"><p className="eyebrow">{t.visitEyebrow}</p><h2>{t.visitTitle}</h2></div>
        <div className="visit-grid">
          <div><small>{t.addressLabel}</small><strong>1071, rue Jacques-Cartier<br />Gatineau, QC J8T 2W3</strong></div>
          <div><small>{t.hoursLabel}</small><strong>{t.hoursValue.map((line) => <span key={line}>{line}<br /></span>)}</strong><a href="https://www.instagram.com/cafefwanest/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
          <div><small>{t.phoneLabel}</small><strong><a href="tel:+18194143600">(819) 414-3600</a></strong></div>
        </div>
        <p className="amenities">{t.amenities}</p>
        <div className="visit-actions">
          <a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Fwanest+1071+Rue+Jacques-Cartier+Gatineau" target="_blank" rel="noreferrer">{t.maps} ↗</a>
          <a className="text-link light" href="https://www.instagram.com/cafefwanest/" target="_blank" rel="noreferrer">{t.follow} ↗</a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">F</span><span><strong>FWANEST</strong><small>CAFÉ • GELATO</small></span></a>
        <p>{t.footer}</p>
        <div><a href="https://www.instagram.com/cafefwanest/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com/p/Caf%C3%A9-Fwanest-61560487384209/" target="_blank" rel="noreferrer">Facebook ↗</a></div>
        <small>© 2026 Café Fwanest</small>
      </footer>

      <a className="mobile-direction" href="https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Fwanest+1071+Rue+Jacques-Cartier+Gatineau" target="_blank" rel="noreferrer">{t.direction} ↗</a>
    </main>
  );
}
