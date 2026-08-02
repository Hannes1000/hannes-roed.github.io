import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

type Language = 'de' | 'en';

type LocalText = {
  de: string;
  en: string;
};

type Project = {
  number: string;
  slug: string;
  title: string;
  category: LocalText;
  description: LocalText;
  detail: LocalText;
  tags: string[];
  media:
    | { type: 'image'; src: string; alt: LocalText }
    | { type: 'video'; src: string; alt: LocalText; poster?: string };
  links: Array<{ label: LocalText; href: string }>;
};

const assets = {
  portrait: new URL('../ressources/profile_picture.png', import.meta.url).href,
  portraitBackground: new URL('../ressources/background_profile_image.jpg', import.meta.url).href,
  thesis: new URL(
    '../ressources/projects_bachelor/bachelor_thesis/1_sandbox_instruction.jpg',
    import.meta.url,
  ).href,
  mixedReality: new URL('../ressources/projects_master/mixed_reality/1.mp4', import.meta.url).href,
  mixedRealityPoster: new URL(
    '../ressources/projects_master/mixed_reality/poster.jpg',
    import.meta.url,
  ).href,
  mixedRealityPdf: new URL(
    '../ressources/projects_master/mixed_reality/Kitchen Countdown.pdf',
    import.meta.url,
  ).href,
  lowPower: new URL(
    '../ressources/projects_master/low_power_system_design/1.jpeg',
    import.meta.url,
  ).href,
  lowPowerPdf: new URL(
    '../ressources/projects_master/low_power_system_design/LSPD_Proposal_Group4.pdf',
    import.meta.url,
  ).href,
  sceneUnderstanding: new URL(
    '../ressources/projects_master/actuelle_themen_der_informatik/1.png',
    import.meta.url,
  ).href,
  sceneUnderstandingPdf: new URL(
    '../ressources/projects_master/actuelle_themen_der_informatik/presentation.pdf',
    import.meta.url,
  ).href,
  cloth: new URL(
    '../ressources/projects_master/physically_based_simulation/1.mp4',
    import.meta.url,
  ).href,
  clothPoster: new URL(
    '../ressources/projects_master/physically_based_simulation/poster.jpg',
    import.meta.url,
  ).href,
  clothPdf: new URL(
    '../ressources/projects_master/physically_based_simulation/phys_sim_cloth_sim.pdf',
    import.meta.url,
  ).href,
  plantHealth: new URL(
    '../ressources/projects_bachelor/software_engineering_plant_health/01-real-landing-page.png',
    import.meta.url,
  ).href,
};

const copy = {
  de: {
    nav: [
      { label: 'Start', href: '#top' },
      { label: 'Portfolio-Projekte', href: '#projects' },
      { label: 'Werdegang', href: '#path' },
      { label: 'Kontakt', href: '#contact' },
    ],
    skip: 'Zum Inhalt springen',
    navigationLabel: 'Hauptnavigation',
    menuOpen: 'Navigation öffnen',
    menuClose: 'Navigation schließen',
    language: 'Sprache auf Englisch wechseln',
    pageTitle: 'Hannes Röd — Informatik & interaktive Systeme',
    pageDescription:
      'Portfolio von Hannes Röd: Informatik, Spracherkennung, Embedded Systems, Robotik, Simulation und Mixed Reality.',
    eyebrow: 'Informatik · Innsbruck / Südtirol',
    heroLineOne: 'Ich baue Software,',
    heroLineTwo: 'die man ausprobieren kann.',
    intro:
      'Ich habe meinen Bachelor in Informatik an der Universität Innsbruck abgeschlossen und arbeite gerne an Software, die interaktiv, robust und technisch spannend ist. Meine Interessen umfassen künstliche Intelligenz, Spracherkennung, Machine Learning und Simulation. Ich mag es, komplexe Systeme in nutzbare Anwendungen zu verwandeln, zum Beispiel durch Sprachsteuerung in einer Unity-Sandbox, die Evaluation von ASR-Systemen oder die Umsetzung von Physik- und Simulationstechniken.',
    viewProjects: 'Meine Projekte',
    downloadCv: 'CV als PDF',
    portraitAlt: 'Porträt von Hannes Röd',
    portraitCaption: 'Hannes Röd, Informatiker zwischen Innsbruck und Südtirol',
    availability: 'Woran ich gerade arbeite',
    availabilityText:
      'Spracherkennung in Echtzeit, energiesparende Sensorik und Simulationen, die sich nachvollziehbar verhalten.',
    projectsEyebrow: 'Ausgewählte Arbeiten',
    projectsTitle: 'Portfolio-Projekte',
    projectsIntro:
      'Statt alles aufzulisten, zeige ich hier die Arbeiten, die meine Interessen am besten verbinden: Interaktion, robuste Systeme und ein Ergebnis, das man sehen oder messen kann.',
    projectIndexLabel: 'Direkt zu einem Projekt springen',
    detailLabel: 'Was daran interessant war',
    technologiesLabel: 'Verwendete Technologien',
    pathEyebrow: 'Werdegang',
    pathTitle: 'Nicht ganz geradlinig. Dafür praktisch.',
    workTitle: 'Praxis',
    educationTitle: 'Ausbildung',
    languagesTitle: 'Sprachen',
    languages: 'Deutsch · Italienisch · Englisch',
    contactEyebrow: 'Kontakt',
    contactTitle: 'Lust auf ein gemeinsames Projekt?',
    contactBody:
      'Wenn du an Software, Embedded Systems oder interaktiven Technologien arbeitest, freue ich mich über eine Nachricht.',
    mailMe: 'E-Mail schreiben',
    phoneLabel: 'Telefon',
    github: 'GitHub ansehen',
    location: 'Innsbruck, Österreich',
    footer: 'Entworfen und gebaut von Hannes Röd.',
    backToTop: 'Nach oben',
  },
  en: {
    nav: [
      { label: 'Home', href: '#top' },
      { label: 'Portfolio projects', href: '#projects' },
      { label: 'Background', href: '#path' },
      { label: 'Contact', href: '#contact' },
    ],
    skip: 'Skip to content',
    navigationLabel: 'Main navigation',
    menuOpen: 'Open navigation',
    menuClose: 'Close navigation',
    language: 'Switch language to German',
    pageTitle: 'Hannes Röd — Computer Science & interactive systems',
    pageDescription:
      'Portfolio of Hannes Röd: computer science, speech recognition, embedded systems, robotics, simulation, and mixed reality.',
    eyebrow: 'Computer Science · Innsbruck / South Tyrol',
    heroLineOne: 'I build software',
    heroLineTwo: 'you can actually try.',
    intro:
      'I completed my Bachelor’s degree in Computer Science at the University of Innsbruck and enjoy building software that is interactive, robust, and technically engaging. My interests include artificial intelligence, speech recognition, machine learning, and simulation. I like turning complex systems into usable applications—for example through voice control in a Unity sandbox, the evaluation of ASR systems, or the implementation of physics and simulation techniques.',
    viewProjects: 'My projects',
    downloadCv: 'CV as PDF',
    portraitAlt: 'Portrait of Hannes Röd',
    portraitCaption: 'Hannes Röd, computer scientist between Innsbruck and South Tyrol',
    availability: 'What I am working on',
    availabilityText:
      'Real-time speech recognition, low-power sensing, and simulations whose behavior can be understood and tested.',
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Portfolio projects',
    projectsIntro:
      'Rather than list everything, these are the projects that best connect my interests: interaction, robust systems, and results you can see or measure.',
    projectIndexLabel: 'Jump directly to a project',
    detailLabel: 'What made it interesting',
    technologiesLabel: 'Technologies used',
    pathEyebrow: 'Background',
    pathTitle: 'Not perfectly linear. Definitely practical.',
    workTitle: 'Experience',
    educationTitle: 'Education',
    languagesTitle: 'Languages',
    languages: 'German · Italian · English',
    contactEyebrow: 'Contact',
    contactTitle: 'Want to build something together?',
    contactBody:
      'If you are working on software, embedded systems, or interactive technology, I would be happy to hear from you.',
    mailMe: 'Write an email',
    phoneLabel: 'Phone',
    github: 'View GitHub',
    location: 'Innsbruck, Austria',
    footer: 'Designed and built by Hannes Röd.',
    backToTop: 'Back to top',
  },
} as const;

const projects: Project[] = [
  {
    number: '01',
    slug: 'speech-controlled-brick-building',
    title: 'Speech Controlled Brick Building',
    category: { de: 'Bachelorarbeit · Unity & ASR', en: 'Bachelor thesis · Unity & ASR' },
    description: {
      de: 'Eine virtuelle Bausteinwelt, die sich mit natürlicher Sprache steuern lässt. Dafür habe ich Vosk/Kaldi, Whisper und Wav2Vec 2.0 für Offline-Echtzeitnutzung verglichen und eine Nutzerstudie durchgeführt.',
      en: 'A virtual brick-building environment controlled with natural speech. I compared Vosk/Kaldi, Whisper, and Wav2Vec 2.0 for offline real-time use and conducted a user study.',
    },
    detail: {
      de: 'Whisper erkannte am genauesten, Wav2Vec war am schnellsten. In der Studie waren Farben zur Auswahl effizienter als Formen; ein beschriftetes Raster reduzierte Korrekturen beim Platzieren.',
      en: 'Whisper was the most accurate, while Wav2Vec was the fastest. In the study, selecting bricks by colour was more efficient than by shape, and a labelled grid reduced repositioning.',
    },
    tags: ['Unity', 'C#', 'Whisper', 'Wav2Vec 2.0', 'User Study'],
    media: {
      type: 'image',
      src: assets.thesis,
      alt: {
        de: 'Aufbau der sprachgesteuerten Baustein-Sandbox',
        en: 'Layout of the speech-controlled brick-building sandbox',
      },
    },
    links: [
      { label: { de: 'Arbeit lesen', en: 'Read thesis' }, href: './bachelor-thesis-hannes-roed.pdf' },
      {
        label: { de: 'Präsentation', en: 'Presentation' },
        href: './bachelor-presentation-hannes-roed.pdf',
      },
    ],
  },
  {
    number: '02',
    slug: 'kitchen-countdown',
    title: 'Kitchen Countdown',
    category: { de: 'Mixed Reality · Teamprojekt', en: 'Mixed reality · Team project' },
    description: {
      de: 'Ein Multiplayer-Spiel für die Meta Quest 3, das Kochen, räumliche Interfaces und einen Countdown verbindet. Rezepte, Fortschritt und Timer werden zwischen mehreren Headsets synchronisiert.',
      en: 'A Meta Quest 3 multiplayer game combining cooking, spatial interfaces, and a countdown. Recipes, progress, and timers are synchronised across multiple headsets.',
    },
    detail: {
      de: 'Die eigentliche Herausforderung war nicht die Szene, sondern das Zusammenspiel: stabile Synchronisation, WLAN-Latenz und eine Bedienung, die auch ohne lange Einführung verständlich bleibt.',
      en: 'The real challenge was not the scene itself, but making everything work together: stable synchronisation, Wi-Fi latency, and controls that remain understandable without a long introduction.',
    },
    tags: ['Unity', 'Meta Quest 3', 'Multiplayer', 'Spatial UX'],
    media: {
      type: 'video',
      src: assets.mixedReality,
      poster: assets.mixedRealityPoster,
      alt: {
        de: 'Demo des Mixed-Reality-Spiels Kitchen Countdown',
        en: 'Demo of the Kitchen Countdown mixed-reality game',
      },
    },
    links: [{ label: { de: 'Projektfolien', en: 'Project slides' }, href: assets.mixedRealityPdf }],
  },
  {
    number: '03',
    slug: 'low-power-sensor-station',
    title: 'Low-Power Sensor Station',
    category: { de: 'Embedded Systems · ESP32-C6', en: 'Embedded systems · ESP32-C6' },
    description: {
      de: 'Eine Temperaturmessstation für abgelegene Orte. Der ESP32-C6 wacht alle 30 Sekunden auf, misst und legt sich wieder schlafen; erst zehn Messwerte später wird das WLAN aktiviert.',
      en: 'A temperature sensing station for remote locations. The ESP32-C6 wakes every 30 seconds, takes a reading, and returns to sleep; Wi-Fi only activates after ten measurements.',
    },
    detail: {
      de: 'Das Projekt war eine Übung in echten Zielkonflikten: Messgenauigkeit gegen Widerstandswerte, Zuverlässigkeit gegen Wiederholungen und Funkkomfort gegen Energieverbrauch.',
      en: 'The project was an exercise in real trade-offs: measurement accuracy versus resistor values, reliability versus retries, and wireless convenience versus power consumption.',
    },
    tags: ['ESP32-C6', 'Deep Sleep', 'ADC', 'Wi-Fi 6'],
    media: {
      type: 'image',
      src: assets.lowPower,
      alt: {
        de: 'Prototyp der energiesparenden Temperaturmessstation',
        en: 'Prototype of the low-power temperature sensing station',
      },
    },
    links: [{ label: { de: 'Konzept lesen', en: 'Read proposal' }, href: assets.lowPowerPdf }],
  },
  {
    number: '04',
    slug: 'scene-understanding',
    title: 'Scene Understanding',
    category: { de: 'Computer Vision · Szenengraphen', en: 'Computer vision · Scene graphs' },
    description: {
      de: 'Ein System, das Objekte in einer Szene erkennt, ihre räumlichen Beziehungen als Graph beschreibt und Fragen wie „Wo ist der Truck?“ oder „Was liegt über ihm?“ beantwortbar macht.',
      en: 'A system that detects objects in a scene, represents their spatial relationships as a graph, and makes questions such as “Where is the truck?” answerable.',
    },
    detail: {
      de: 'Interessant war die Übersetzung von Pixeln in eine abstrakte, abfragbare Darstellung – also der Schritt vom Erkennen einzelner Objekte zum Verstehen ihrer Beziehungen.',
      en: 'The interesting part was translating pixels into an abstract, queryable representation—moving from detecting individual objects to understanding their relationships.',
    },
    tags: ['Object Detection', 'Scene Graphs', 'Computer Vision', 'NLP'],
    media: {
      type: 'image',
      src: assets.sceneUnderstanding,
      alt: {
        de: 'Präsentationsfolie zum Scene-Understanding-Projekt',
        en: 'Presentation slide for the scene-understanding project',
      },
    },
    links: [
      {
        label: { de: 'Präsentation', en: 'Presentation' },
        href: assets.sceneUnderstandingPdf,
      },
    ],
  },
  {
    number: '05',
    slug: 'cloth-simulation',
    title: 'Cloth Simulation',
    category: { de: 'Physiksimulation · Mass-Spring', en: 'Physics simulation · Mass-spring' },
    description: {
      de: 'Ein Mass-Spring-Simulator für Oszillatoren, Pendel, Kollisionen und ein 15 × 10 großes Stoffgitter – mit Forward Euler, Symplectic Euler und Leapfrog.',
      en: 'A mass-spring simulator for oscillators, pendulums, collisions, and a 15 × 10 cloth grid using Forward Euler, Symplectic Euler, and Leapfrog.',
    },
    detail: {
      de: 'Der Vergleich mit einer analytischen Lösung machte numerische Stabilität sichtbar: Forward Euler driftete, während Leapfrog den kleinsten Fehler zeigte.',
      en: 'Comparing against an analytical solution made numerical stability visible: Forward Euler drifted, while Leapfrog produced the smallest error.',
    },
    tags: ['C++', 'Numerical Integration', 'Collision', 'Simulation'],
    media: {
      type: 'video',
      src: assets.cloth,
      poster: assets.clothPoster,
      alt: {
        de: 'Video der simulierten Stoffoberfläche',
        en: 'Video of the simulated cloth surface',
      },
    },
    links: [{ label: { de: 'Report lesen', en: 'Read report' }, href: assets.clothPdf }],
  },
  {
    number: '06',
    slug: 'plant-health',
    title: 'Plant Health',
    category: { de: 'Software Engineering · Teamprojekt', en: 'Software engineering · Team project' },
    description: {
      de: 'Eine Webanwendung zur Pflanzenüberwachung mit Sensorstationen, Messwerten, rollenbasierten Ansichten und Audit-Log – vom Hardware-Schaltplan bis zur Oberfläche.',
      en: 'A plant-monitoring web application with sensor stations, measurements, role-based views, and an audit log—from the hardware schematic to the interface.',
    },
    detail: {
      de: 'Hier ging es weniger um ein einzelnes Feature als um das Gesamtsystem: Rollen und Rechte, nachvollziehbare Änderungen, Hardwaredaten und eine Oberfläche für unterschiedliche Nutzergruppen.',
      en: 'This was less about one feature than the complete system: roles and permissions, traceable changes, hardware data, and an interface for different user groups.',
    },
    tags: ['React', 'Spring Boot', 'SQL', 'IoT'],
    media: {
      type: 'image',
      src: assets.plantHealth,
      alt: {
        de: 'Startseite der Plant-Health-Anwendung',
        en: 'Landing page of the Plant Health application',
      },
    },
    links: [],
  },
];

const experience = [
  {
    period: 'Sommer 2025',
    title: { de: 'KundenCenter · Praktikum', en: 'Customer centre · Internship' },
    place: 'Verkehrsverbund Tirol, Innsbruck',
    description: {
      de: 'Praktische Erfahrung im KundenCenter und Einblick in serviceorientierte Abläufe des öffentlichen Verkehrs.',
      en: 'Practical experience in the customer centre and insight into service-oriented public transport operations.',
    },
  },
  {
    period: '2021–23',
    title: { de: 'Produktion', en: 'Manufacturing' },
    place: 'GKN Driveline & GKN Sinter Metals',
    description: {
      de: 'Mitarbeit in der Produktion während mehrerer Sommer in Bruneck und Sand in Taufers.',
      en: 'Manufacturing work during several summers in Bruneck and Sand in Taufers.',
    },
  },
  {
    period: '2020',
    title: { de: 'Softwareentwicklung · Praktikum', en: 'Software development · Internship' },
    place: 'Engl GmbH, Sand in Taufers',
    description: {
      de: 'Erste praktische Berufserfahrung in der Softwareentwicklung im Januar und Sommer 2020.',
      en: 'First professional software-development experience in January and summer 2020.',
    },
  },
  {
    period: '2019',
    title: { de: 'IT-Support · Praktikum', en: 'IT support · Internship' },
    place: 'Zirkonzahn, Gais',
    description: {
      de: 'Unterstützung im IT-Support und Einblick in den technischen Unternehmensalltag.',
      en: 'IT support work and insight into day-to-day technical operations.',
    },
  },
  {
    period: '2018',
    title: { de: 'Fertigungshelfer · Praktikum', en: 'Manufacturing assistant · Internship' },
    place: 'Elektrisola, Sand in Taufers',
    description: {
      de: 'Sommerpraktikum als Fertigungshelfer.',
      en: 'Summer internship as a manufacturing assistant.',
    },
  },
];

const education = [
  {
    period: '2021–24',
    periodEn: '2021–24',
    title: { de: 'Bachelorstudium Informatik', en: 'Bachelor’s degree in Computer Science' },
    place: 'Universität Innsbruck',
  },
  {
    period: '2018–21',
    periodEn: '2018–21',
    title: { de: 'Fachrichtung Informatik', en: 'Computer Science programme' },
    place: 'Technische Fachoberschule Brixen',
  },
  {
    period: '2016–18',
    periodEn: '2016–18',
    title: { de: 'Technische Fachoberschule', en: 'Technical high school' },
    place: 'Bruneck',
  },
];

const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hannes Röd',
  url: 'https://hannes1000.github.io/hannes-roed.github.io/',
  email: 'mailto:roedhannes@gmail.com',
  telephone: '+393476452458',
  sameAs: ['https://github.com/Hannes1000'],
  homeLocation: {
    '@type': 'Place',
    name: 'Innsbruck, Austria',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universität Innsbruck',
  },
  knowsAbout: [
    'Software Engineering',
    'Automatic Speech Recognition',
    'Embedded Systems',
    'Robotics',
    'Mixed Reality',
    'Physics Simulation',
  ],
});

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem('portfolio-language');
    return stored === 'en' ? 'en' : 'de';
  } catch {
    return 'de';
  }
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[language];
  const mailSubject =
    language === 'de' ? 'Kontakt über deine Portfolio-Webseite' : 'Contact via your portfolio website';
  const mailHref = `mailto:roedhannes@gmail.com?subject=${encodeURIComponent(mailSubject)}`;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = text.pageTitle;
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', text.pageDescription);
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      // The page remains fully usable when browser storage is unavailable.
    }
  }, [language, text.pageDescription, text.pageTitle]);

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeMenuOnEscape);
    return () => window.removeEventListener('keydown', closeMenuOnEscape);
  }, []);

  const toggleLanguage = () => setLanguage((current) => (current === 'de' ? 'en' : 'de'));

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <a className="skip-link" href="#main">
        {text.skip}
      </a>

      <header className="site-header">
        <nav className="nav-wrap" aria-label={text.navigationLabel}>
          <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>
            Hannes Röd<span>.</span>
          </a>

          <div id="site-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {text.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="language-button"
              onClick={toggleLanguage}
              aria-label={text.language}
            >
              <span className={language === 'de' ? 'active' : ''}>DE</span>
              <span>/</span>
              <span className={language === 'en' ? 'active' : ''}>EN</span>
            </button>
            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? text.menuClose : text.menuOpen}
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>
              <span>{text.heroLineOne}</span>
              <em>{text.heroLineTwo}</em>
            </h1>
            <p className="hero-intro">{text.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {text.viewProjects}
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="button button-text" href="./cv-hannes-roed.pdf" download>
                <Download aria-hidden="true" />
                {text.downloadCv}
              </a>
            </div>
          </div>

          <div className="portrait-wrap">
            <figure className="portrait-frame">
              <div className="portrait-scene">
                <img
                  className="portrait-background"
                  src={assets.portraitBackground}
                  alt=""
                  aria-hidden="true"
                />
                <img className="portrait-photo" src={assets.portrait} alt={text.portraitAlt} />
              </div>
              <figcaption>{text.portraitCaption}</figcaption>
            </figure>
            <aside className="current-note" aria-label={text.availability}>
              <span>{text.availability}</span>
              <p>{text.availabilityText}</p>
            </aside>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="project-intro">
            <div className="section-heading">
              <p className="eyebrow">{text.projectsEyebrow}</p>
              <h2>{text.projectsTitle}</h2>
            </div>
            <p>{text.projectsIntro}</p>
            <nav className="project-index" aria-label={text.projectIndexLabel}>
              <ol>
                {projects.map((project) => (
                  <li key={project.slug}>
                    <a href={`#${project.slug}`}>
                      <span>{project.number}</span>
                      {project.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" id={project.slug} key={project.number}>
                <div className="project-number" aria-hidden="true">
                  {project.number}
                </div>
                <div className="project-media">
                  {project.media.type === 'video' ? (
                    <video
                      controls
                      muted
                      playsInline
                      preload="none"
                      poster={project.media.poster}
                      aria-label={project.media.alt[language]}
                    >
                      <source src={project.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.media.src}
                      alt={project.media.alt[language]}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <div className="project-copy">
                  <p className="project-category">{project.category[language]}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description[language]}</p>
                  <div className="project-detail">
                    <span>{text.detailLabel}</span>
                    <p>{project.detail[language]}</p>
                  </div>
                  <ul className="tag-list" aria-label={text.technologiesLabel}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          <FileText aria-hidden="true" />
                          {link.label[language]}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="path section-wrap" id="path">
          <div className="section-heading">
            <p className="eyebrow">{text.pathEyebrow}</p>
            <h2>{text.pathTitle}</h2>
          </div>

          <div className="path-grid">
            <Timeline title={text.workTitle}>
              {experience.map((item) => (
                <TimelineItem
                  key={`${item.period}-${item.place}`}
                  period={item.period}
                  title={item.title[language]}
                  place={item.place}
                  description={item.description[language]}
                />
              ))}
            </Timeline>

            <Timeline title={text.educationTitle}>
              {education.map((item) => (
                <TimelineItem
                  key={`${item.period}-${item.place}`}
                  period={language === 'de' ? item.period : item.periodEn}
                  title={item.title[language]}
                  place={item.place}
                />
              ))}
              <li className="language-row">
                <span>{text.languagesTitle}</span>
                <strong>{text.languages}</strong>
              </li>
            </Timeline>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div>
            <p className="eyebrow">{text.contactEyebrow}</p>
            <h2>{text.contactTitle}</h2>
          </div>
          <div className="contact-copy">
            <p>{text.contactBody}</p>
            <div className="contact-actions">
              <a className="button button-light" href={mailHref}>
                <Mail aria-hidden="true" />
                {text.mailMe}
              </a>
              <a
                className="button button-outline"
                href="tel:+393476452458"
                aria-label={`${text.phoneLabel}: +39 347 645 2458`}
              >
                <Phone aria-hidden="true" />
                +39 347 645 2458
              </a>
              <a
                className="button button-outline"
                href="https://github.com/Hannes1000"
                target="_blank"
                rel="noreferrer"
              >
                <Github aria-hidden="true" />
                {text.github}
              </a>
            </div>
            <p className="contact-location">
              <MapPin aria-hidden="true" />
              {text.location}
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Hannes Röd</p>
        <p>{text.footer}</p>
        <a href="#top">↑ {text.backToTop}</a>
      </footer>
    </div>
  );
}

function Timeline({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="timeline">
      <h3>{title}</h3>
      <ol>{children}</ol>
    </div>
  );
}

function TimelineItem({
  period,
  title,
  place,
  description,
}: {
  period: string;
  title: string;
  place: string;
  description?: string;
}) {
  return (
    <li>
      <time>{period}</time>
      <div>
        <strong>{title}</strong>
        <span>{place}</span>
        {description && <p>{description}</p>}
      </div>
    </li>
  );
}

export default App;
