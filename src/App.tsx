import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Mail,
  MapPin,
  Menu,
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
  thesis: new URL(
    '../ressources/projects_bachelor/bachelor_thesis/1_sandbox_instruction.jpg',
    import.meta.url,
  ).href,
  mixedReality: new URL('../ressources/projects_master/mixed_reality/1.mp4', import.meta.url).href,
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
      { label: 'Über mich', href: '#about' },
      { label: 'Projekte', href: '#projects' },
      { label: 'Werdegang', href: '#path' },
      { label: 'Kontakt', href: '#contact' },
    ],
    skip: 'Zum Inhalt springen',
    menuOpen: 'Navigation öffnen',
    menuClose: 'Navigation schließen',
    language: 'Sprache auf Englisch wechseln',
    eyebrow: 'Informatik · Innsbruck / Südtirol',
    heroLineOne: 'Ich baue Software,',
    heroLineTwo: 'die man ausprobieren kann.',
    intro:
      'Hallo, ich bin Hannes. Mich interessieren Systeme, bei denen Code mit der echten Welt zusammenkommt: Sprache, Sensoren, Robotik, Simulation und Mixed Reality.',
    viewProjects: 'Meine Projekte',
    downloadCv: 'CV als PDF',
    portraitAlt: 'Porträt von Hannes Röd',
    portraitCaption: 'Hannes Röd, Informatiker zwischen Innsbruck und Südtirol',
    availability: 'Woran ich gerade arbeite',
    availabilityText:
      'Spracherkennung in Echtzeit, energiesparende Sensorik und Simulationen, die sich nachvollziehbar verhalten.',
    aboutEyebrow: 'Ein bisschen persönlicher',
    aboutTitle: 'Neugierig genug, um nachzumessen.',
    aboutBody:
      'Ich komme aus Sand in Taufers und studiere Informatik in Innsbruck. Technik mochte ich schon früh – erst als Schüler an der TFO Brixen, später in Software-, Robotik- und Forschungsprojekten an der Universität. Am meisten Spaß machen mir Aufgaben, bei denen nicht nur ein Konzeptpapier entsteht, sondern etwas, das läuft, reagiert oder sich testen lässt.',
    aboutSecond:
      'Mein Weg war dabei bewusst praktisch: IT-Support, Softwareentwicklung, Fertigung und zuletzt das KundenCenter des Verkehrsverbunds Tirol. Das hat mir gezeigt, dass gute Technik nicht bei der Implementierung endet. Sie muss für die Menschen funktionieren, die sie tatsächlich benutzen.',
    sideNote: 'Kurz gesagt:',
    sideNoteText: 'Ich tüftle gern, arbeite verlässlich im Team und frage lieber einmal mehr nach dem Warum.',
    toolkitTitle: 'Mein Werkzeugkasten',
    toolkitIntro: 'Keine Prozentbalken – nur Dinge, mit denen ich tatsächlich gearbeitet habe.',
    projectsEyebrow: 'Ausgewählte Arbeiten',
    projectsTitle: 'Projekte, an denen ich etwas gelernt habe.',
    projectsIntro:
      'Statt alles aufzulisten, zeige ich hier die Arbeiten, die meine Interessen am besten verbinden: Interaktion, robuste Systeme und ein Ergebnis, das man sehen oder messen kann.',
    detailLabel: 'Was daran interessant war',
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
    github: 'GitHub ansehen',
    location: 'Innsbruck, Österreich',
    footer: 'Entworfen und gebaut von Hannes Röd.',
  },
  en: {
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Background', href: '#path' },
      { label: 'Contact', href: '#contact' },
    ],
    skip: 'Skip to content',
    menuOpen: 'Open navigation',
    menuClose: 'Close navigation',
    language: 'Switch language to German',
    eyebrow: 'Computer Science · Innsbruck / South Tyrol',
    heroLineOne: 'I build software',
    heroLineTwo: 'you can actually try.',
    intro:
      'Hi, I’m Hannes. I’m interested in systems where code meets the real world: speech, sensors, robotics, simulation, and mixed reality.',
    viewProjects: 'My projects',
    downloadCv: 'CV as PDF',
    portraitAlt: 'Portrait of Hannes Röd',
    portraitCaption: 'Hannes Röd, computer scientist between Innsbruck and South Tyrol',
    availability: 'What I am working on',
    availabilityText:
      'Real-time speech recognition, low-power sensing, and simulations whose behavior can be understood and tested.',
    aboutEyebrow: 'A little more personal',
    aboutTitle: 'Curious enough to measure twice.',
    aboutBody:
      'I grew up in Sand in Taufers and study Computer Science in Innsbruck. I have been drawn to technology for a long time—first at the technical high school in Brixen, then through software, robotics, and research projects at university. I most enjoy work that results in more than a concept: something that runs, reacts, or can be tested.',
    aboutSecond:
      'My path has stayed deliberately practical: IT support, software development, manufacturing, and most recently the customer centre at Verkehrsverbund Tirol. It taught me that good technology does not end with implementation. It has to work for the people who actually use it.',
    sideNote: 'In short:',
    sideNoteText: 'I like to tinker, I am dependable in a team, and I would rather ask why once more than once too little.',
    toolkitTitle: 'My toolkit',
    toolkitIntro: 'No percentage bars—just things I have actually worked with.',
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Projects that taught me something.',
    projectsIntro:
      'Rather than list everything, these are the projects that best connect my interests: interaction, robust systems, and results you can see or measure.',
    detailLabel: 'What made it interesting',
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
    github: 'View GitHub',
    location: 'Innsbruck, Austria',
    footer: 'Designed and built by Hannes Röd.',
  },
} as const;

const projects: Project[] = [
  {
    number: '01',
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
      alt: {
        de: 'Demo des Mixed-Reality-Spiels Kitchen Countdown',
        en: 'Demo of the Kitchen Countdown mixed-reality game',
      },
    },
    links: [{ label: { de: 'Projektfolien', en: 'Project slides' }, href: assets.mixedRealityPdf }],
  },
  {
    number: '03',
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
      alt: {
        de: 'Video der simulierten Stoffoberfläche',
        en: 'Video of the simulated cloth surface',
      },
    },
    links: [{ label: { de: 'Report lesen', en: 'Read report' }, href: assets.clothPdf }],
  },
  {
    number: '06',
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
    period: '2025',
    title: { de: 'KundenCenter · Praktikum', en: 'Customer centre · Internship' },
    place: 'Verkehrsverbund Tirol, Innsbruck',
  },
  {
    period: '2021–23',
    title: { de: 'Produktion', en: 'Manufacturing' },
    place: 'GKN Driveline & GKN Sinter Metals',
  },
  {
    period: '2020',
    title: { de: 'Softwareentwicklung · Praktikum', en: 'Software development · Internship' },
    place: 'Engl GmbH, Sand in Taufers',
  },
  {
    period: '2019',
    title: { de: 'IT-Support · Praktikum', en: 'IT support · Internship' },
    place: 'Zirkonzahn, Gais',
  },
];

const education = [
  {
    period: 'seit 2021',
    periodEn: 'since 2021',
    title: { de: 'Informatik', en: 'Computer Science' },
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

const toolkit = [
  {
    label: { de: 'Code', en: 'Code' },
    value: 'C / C++ · C# · Python · Java · TypeScript',
  },
  {
    label: { de: 'Systeme', en: 'Systems' },
    value: 'Unity · React · Spring Boot · SQL · ESP32-C6',
  },
  {
    label: { de: 'Themen', en: 'Topics' },
    value: 'Speech Recognition · Computer Vision · Robotik · MR · Simulation',
  },
];

function getInitialLanguage(): Language {
  const stored = localStorage.getItem('portfolio-language');
  return stored === 'en' ? 'en' : 'de';
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => setLanguage((current) => (current === 'de' ? 'en' : 'de'));

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        {text.skip}
      </a>

      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>
            Hannes Röd<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
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
              <img src={assets.portrait} alt={text.portraitAlt} />
              <figcaption>{text.portraitCaption}</figcaption>
            </figure>
            <aside className="current-note" aria-label={text.availability}>
              <span>{text.availability}</span>
              <p>{text.availabilityText}</p>
            </aside>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">{text.aboutEyebrow}</p>
            <h2>{text.aboutTitle}</h2>
          </div>
          <div className="about-copy">
            <p>{text.aboutBody}</p>
            <p>{text.aboutSecond}</p>
          </div>
          <aside className="margin-note">
            <span>{text.sideNote}</span>
            <p>{text.sideNoteText}</p>
          </aside>
        </section>

        <section className="toolkit section-wrap" aria-labelledby="toolkit-title">
          <div className="toolkit-heading">
            <h2 id="toolkit-title">{text.toolkitTitle}</h2>
            <p>{text.toolkitIntro}</p>
          </div>
          <dl>
            {toolkit.map((item) => (
              <div key={item.value}>
                <dt>{item.label[language]}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="project-intro">
            <div className="section-heading">
              <p className="eyebrow">{text.projectsEyebrow}</p>
              <h2>{text.projectsTitle}</h2>
            </div>
            <p>{text.projectsIntro}</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-number" aria-hidden="true">
                  {project.number}
                </div>
                <div className="project-media">
                  {project.media.type === 'video' ? (
                    <video
                      controls
                      muted
                      playsInline
                      preload="metadata"
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
                  <ul className="tag-list" aria-label="Technologies">
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
              <a className="button button-light" href="mailto:roedhannes@gmail.com">
                <Mail aria-hidden="true" />
                {text.mailMe}
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
        <a href="#top">↑ Top</a>
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
}: {
  period: string;
  title: string;
  place: string;
}) {
  return (
    <li>
      <time>{period}</time>
      <div>
        <strong>{title}</strong>
        <span>{place}</span>
      </div>
    </li>
  );
}

export default App;
