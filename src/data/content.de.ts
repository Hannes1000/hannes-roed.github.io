export const contentDe = {
  languageName: 'Deutsch',
  languageToggleLabel: 'Sprache wechseln',
  navItems: [
    { label: 'Start', href: '#home' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Erfahrung', href: '#experience' },
    { label: 'Ausbildung', href: '#education' },
    { label: 'Kontakt', href: '#contact' },
  ],
  profile: {
    name: 'Hannes Röd',
    title: 'Informatik',
    location: 'Innsbruck, Österreich',
    email: 'roedhannes@gmail.com',
    githubValue: 'https://github.com/Hannes1000',
    linkedinValue: 'linkedin.com/in/your-linkedin',
    heroEyebrow: 'Informatik · Innsbruck / Ahrntal',
    intro:
      'Ich habe meinen Bachelor in Informatik an der Universität Innsbruck abgeschlossen und arbeite gerne an Software, die interaktiv, robust und technisch spannend ist. Meine Interessen umfassen künstliche Intelligenz, Spracherkennung, Machine Learning und Simulation. Ich mag es, komplexe Systeme in nutzbare Anwendungen zu verwandeln, zum Beispiel durch Sprachsteuerung in einer Unity-Sandbox, die Evaluation von ASR-Systemen oder die Umsetzung von Physik- und Simulationstechniken.',
    bio:
      'Ich habe meinen Bachelor in Informatik an der Universität Innsbruck abgeschlossen und arbeite gerne an Software, die interaktiv, robust und technisch spannend ist. Meine Interessen umfassen künstliche Intelligenz, Spracherkennung, Machine Learning, und Simulation. Ich mag es, komplexe Systeme in nutzbare Anwendungen zu verwandeln, zum Beispiel durch Sprachsteuerung in einer Unity-Sandbox, die Evaluation von ASR-Systemen oder die Umsetzung von Physik- und Simulationstechniken.',
    imageAlt: 'Profilfoto von Hannes Röd',
    profileCardLabel: 'Profil',
    profileCardText: 'Softwareentwicklung, KI, Simulation und interaktive Systeme.',
  },
  buttons: {
    downloadCv: 'CV herunterladen',
    contactMe: 'Kontakt aufnehmen',
    viewProjects: 'Projekte ansehen',
    contact: 'Kontakt',
    source: 'Source',
    liveDemo: 'Live-Demo',
    openProject: 'Projekt öffnen',
    sendMessage: 'Nachricht senden',
  },
  highlights: [
    { label: 'Abschluss', value: 'BSc Informatik' },
    { label: 'Fokus', value: 'KI, Simulation, Games' },
    { label: 'Tools', value: 'C++, C#, Python, Unity' },
  ],
  sections: {
    about: {
      eyebrow: 'Über mich',
      title: 'Interaktive Systeme von der Idee bis zur Umsetzung entwickeln',
    },
    skills: {
      eyebrow: 'Technisches Profil',
      title: 'Skills nach ihrem praktischen Nutzen gruppiert',
    },
    projects: {
      eyebrow: 'Ausgewählte Arbeiten',
      title: 'Portfolio-Projekte',
    },
    experience: {
      eyebrow: 'Beruflicher Überblick',
      title: 'Erfahrung',
      description: 'Praktische Stationen aus Softwareentwicklung, IT-Support, Produktion und Kundenservice.',
    },
    education: {
      eyebrow: 'Akademisches Profil',
      title: 'Ausbildung',
      description: 'Mein Weg von der technischen Oberschule bis zum Bachelorstudium in Informatik.',
    },
    blog: {
      eyebrow: 'Optionale Texte',
      title: 'Blog-Ideen',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Lass uns etwas technisch Spannendes bauen',
    },
  },
  aboutBullets: [
    'Künstliche Intelligenz und Spracherkennung',
    'Machine Learning und neuronale Systeme',
    'Unity Game Development und Simulation',
    'Saubere und wartbare Softwarearchitektur',
  ],
  skillGroups: {
    programming: {
      title: 'Programmierung',
      skills: ['C++', 'C#', 'Python', 'JavaScript', 'TypeScript'],
    },
    gameDevelopment: {
      title: 'Game Development',
      skills: ['Unity', 'Physiksimulation', 'Prozedurale Systeme', 'Performance-Optimierung'],
    },
    aiMachineLearning: {
      title: 'KI & Machine Learning',
      skills: ['Spracherkennung', 'Deep Learning', 'Neuronale Netze', 'Computer Vision', 'Natural Language Processing'],
    },
    softwareEngineering: {
      title: 'Software Engineering',
      skills: ['Git', 'GitHub', 'Objektorientiertes Design', 'Design Patterns', 'Testing'],
    },
  },
  projects: {
    bachelorThesis: {
      title: 'Bachelorarbeit: Sprachgesteuerte LEGO-Sandbox',
      description:
        'Für meine Bachelorarbeit habe ich in Unity eine 3D-Baustein-Sandbox gebaut, in der Steine per Sprache ausgewählt, platziert, gedreht, gruppiert und eingefärbt werden können. Die Spracherkennung läuft vollständig offline. Verglichen habe ich 16 Modelle aus den Familien Vosk/Kaldi, Whisper und Wav2Vec 2.0 anhand von Word Error Rate, Real-Time-Factor und 2,71 Stunden Audio aus meiner Nutzerstudie.',
      artifacts: {
        thesis: 'Thesis öffnen',
        presentation: 'Präsentation öffnen',
      },
      images: {
        sandboxInstruction: 'Anleitungsansicht der sprachgesteuerten LEGO-Sandbox',
        voiceProduction: 'Darstellung von Sprachproduktion und Wellenform aus der Bachelorarbeit',
        timeDomain: 'Zeitbereichsansicht mit Transkription aus der Bachelorarbeit',
        windowing: 'Darstellung von Audio-Windowing aus der Bachelorarbeit',
        wer: 'Erklärung der Word Error Rate aus der Bachelorarbeit',
        werRtf: 'WER-gegen-Real-Time-Factor-Diagramm für LEGO-Sprachbefehle',
        sandboxTasks: 'Aufgabenübersicht der sprachgesteuerten LEGO-Sandbox',
        sandboxTutorial: 'Tutorial-Ansicht der sprachgesteuerten LEGO-Sandbox',
        sandboxTask3: 'Screenshot einer Aufgabe in der sprachgesteuerten LEGO-Sandbox',
        hypothesizedWords: 'Diagramm zu hypothesierten Wörtern über ASR-Modellfamilien',
        results10: 'Evaluationsergebnisse der Spracherkennungsstudie',
        results11: 'Weitere Evaluationsergebnisse der Bachelorarbeit',
        results12: 'Finale Evaluationsergebnisse der Bachelorarbeit',
      },
    },
    roboticsInverseKinematics: {
      title: 'Robotik: Inverse-Kinematik-Steuerung',
      description:
        'Eine Robotik-Aufgabe zur Inverse-Kinematik-Steuerung, die zeigt, wie ein simuliertes Robotersystem ueber zielbasierte Bewegungen gefuehrt werden kann.',
      artifacts: {
        presentation: 'Praesentation oeffnen',
      },
      images: {
        inverseKinematicsDemo: 'Demo-Video zur Inverse-Kinematik in der Robotik',
      },
    },
    roboticsPickAndPlace: {
      title: 'Robotik: Pick and Place',
      description:
        'Ein Robotik-Projekt zu Pick-and-Place-Ablaeufen mit Objekthandling, Bewegungsplanung und simuliertem Roboterverhalten in kurzen und laengeren Demo-Videos.',
      images: {
        pickPlaceShortDemo: 'Kurzes Demo-Video zum Pick-and-Place-Roboter',
        pickPlaceLongDemo: 'Laengeres Demo-Video zum Pick-and-Place-Roboter',
      },
    },
    distributedSystems: {
      title: 'Distributed-Systems-Praesentation',
      description:
        'Ein Bachelor-Projektartefakt zu Distributed Systems mit Fokus auf zentrale Konzepte, System-Trade-offs und die Praesentation verteilter Rechensysteme.',
      artifacts: {
        presentation: 'Praesentation oeffnen',
      },
      images: {},
    },
    memori: {
      title: 'Memori',
      description:
        'Ein Softwarearchitektur-Teamprojekt fuer eine Flashcard-Lernplattform mit Deck-Verwaltung, Publish- und Import-Workflows, Lernansichten, Admin-Screens und Architekturdokumentation.',
      artifacts: {
        uiSketch: 'UI-Skizze oeffnen',
        domainModel: 'Domain Model oeffnen',
      },
      images: {
        login: 'Login-Ansicht von Memori',
        myDecks: 'Deck-Uebersicht von Memori',
        publishedDecks: 'Importansicht fuer veroeffentlichte Decks in Memori',
        importedDecks: 'Importierte Decks in Memori',
        editDeck: 'Deck-Editor mit Karten in Memori',
        learnFront: 'Vorderseite einer Lernkarte in Memori',
        learnAnswer: 'Antwortansicht einer Lernkarte in Memori',
        userManagement: 'Admin-Benutzerverwaltung in Memori',
        deckModeration: 'Admin-Deckmoderation in Memori',
      },
    },
    plantHealth: {
      title: 'Plant Health Monitoring',
      description:
        'In diesem Software-Engineering-Teamprojekt habe ich eine Anwendung zur Pflanzenüberwachung mitentwickelt. React-Frontend, Spring-Boot-Backend und SQL-Datenmodell verbinden Pflanzen, Sensorstationen und Messwerte. Dazu kommen rollenbasierte Ansichten, Audit-Log und Arduino-Hardware.',
      images: {
        landing: 'Landing Page von Plant Health',
        login: 'Login-Seite von Plant Health',
        accesspoints: 'Admin-Dashboard fuer Access Points in Plant Health',
        sensorstations: 'Admin-Dashboard fuer Sensorstationen in Plant Health',
        adminPlant: 'Admin-Pflanzendetailansicht in Plant Health',
        measurements: 'Messwerttabelle in Plant Health',
        users: 'Admin-Benutzerverwaltung in Plant Health',
        auditLog: 'Audit-Log in Plant Health',
        hardware: 'Arduino-Hardware-Schaltplan fuer Plant Health',
        gardenerDashboard: 'Gaertner-Dashboard in Plant Health',
        gardenerPlant: 'Gaertner-Pflanzendetailansicht in Plant Health',
        userDashboard: 'Benutzer-Dashboard in Plant Health',
        userPlant: 'Benutzer-Pflanzendetailansicht in Plant Health',
      },
    },
    physicallyBasedSimulation: {
      title: 'Physically Based Simulation: Cloth Simulation',
      description:
        'Gemeinsam mit Martin Berktold habe ich in C++ einen Mass-Spring-Simulator für Oszillatoren, Doppelpendel, Kollisionen und ein 15 × 10 großes Stoffgitter umgesetzt. Implementiert sind Forward Euler, Symplectic Euler und Leapfrog sowie Bodenkollisionen mit Penalty Forces und Velocity Clamping.',
      artifacts: {
        clothSimulation: 'Cloth-Simulation-PDF oeffnen',
      },
      images: {
        clothSimulationDemo: 'Demo-Video der Cloth-Simulation',
      },
    },
    currentTopicsComputerScience: {
      title: 'Scene Understanding',
      description:
        'Gemeinsam mit Adam Pescoller habe ich in Unity ein System gebaut, das Kamerabilder in eine abfragbare Szenenbeschreibung übersetzt. YOLO12s läuft über die Unity Inference Engine; aus den Bounding Boxes entsteht ein Graph mit räumlichen Beziehungen. Llama 3.2 1B beantwortet darüber via UnityLLM Fragen in natürlicher Sprache.',
      artifacts: {
        presentation: 'Praesentation oeffnen',
      },
      images: {
        topicOverview: 'Uebersichtsfolie der Praesentation zu aktuellen Informatikthemen',
        topicDetail: 'Detailfolie der Praesentation zu aktuellen Informatikthemen',
        topicAnalysis: 'Analysefolie der Praesentation zu aktuellen Informatikthemen',
        topicSummary: 'Zusammenfassungsfolie der Praesentation zu aktuellen Informatikthemen',
      },
    },
    lowPowerSystemDesign: {
      title: 'Low Power System Design: Thermal Sensor Station',
      description:
        'Gemeinsam mit Manuel Reichegger habe ich eine energiesparende Temperaturmessstation mit ESP32-C6, 15-kΩ-NTC-Thermistor und 12-Bit-ADC entwickelt. Der Controller wacht alle 30 Sekunden aus dem Deep Sleep auf, speichert die Messwerte im RTC-Speicher und überträgt zehn Werte gesammelt per WLAN.',
      artifacts: {
        proposal: 'Proposal oeffnen',
      },
      images: {
        sensorStation: 'Prototyp der Low-Power-Thermal-Sensor-Station',
      },
    },
    mixedReality: {
      title: 'Mixed Reality: Kitchen Countdown',
      description:
        'Kitchen Countdown entstand in einer Projektwoche als Multiplayer-Spiel für die Meta Quest 3. In Unity haben wir eine Mixed-Reality-Küche gebaut, in der mehrere Spieler Rezepte unter Zeitdruck abarbeiten. Die größten Herausforderungen waren die Synchronisation der Headsets, WLAN-Stabilität und Latenz.',
      artifacts: {
        presentation: 'Projekt-PDF oeffnen',
      },
      images: {
        mixedRealityDemo: 'Gameplay-Video von Kitchen Countdown in Mixed Reality',
      },
    },
    franzFotoArchiv: {
      title: 'Franz Foto Archiv',
      description:
        'Eine gehostete Fotoarchiv-Web-App mit Benutzerkonten und Galerie-Workflow, umgesetzt als größeres Schulprojekt zum Organisieren und Durchsuchen von Bildsammlungen.',
      images: {
        login: 'Login-Screenshot von Franz Foto Archiv',
        alternateLogin: 'Alternativer Login-Screenshot von Franz Foto Archiv',
        gallery: 'Galerieübersicht von Franz Foto Archiv',
        imageDetail: 'Bilddetailansicht von Franz Foto Archiv',
        album: 'Albumansicht von Franz Foto Archiv',
        archive: 'Archivansicht von Franz Foto Archiv',
        management: 'Verwaltungsansicht von Franz Foto Archiv',
        workflow: 'Finaler Workflow-Screenshot von Franz Foto Archiv',
      },
    },
    fruitShop: {
      title: 'Fruit Shop',
      description:
        'Ein kleiner Online-Shop-Prototyp für Obst- und Gemüseprodukte, mit Fokus auf klassische Shop-Seiten, Produktdarstellung und Checkout-ähnliche Abläufe.',
      images: {
        home: 'Startseiten-Screenshot des Fruit Shops',
        products: 'Produktlisten-Screenshot des Fruit Shops',
        cart: 'Warenkorb-Workflow des Fruit Shops',
        checkout: 'Checkout-ähnliche Ansicht des Fruit Shops',
      },
    },
    quisepp: {
      title: 'QuiSepp',
      description:
        'Eine Quiz-Anwendung zum Erstellen und Spielen von Fragensets, inklusive Creator-Flow und spielbarer Quiz-Ansicht für lernorientierte Szenarien.',
      images: {
        createQuiz: 'Screenshot der Quiz-Erstellung in QuiSepp',
        playQuiz: 'Screenshot der Quiz-Spielansicht in QuiSepp',
      },
    },
    snmpTool: {
      title: 'SNMP Tool',
      description:
        'Ein Schulprojekt-Tool zum Auslesen und Anzeigen von SNMP-Geräteinformationen, mit dem Netzwerk-Monitoring-Daten einfacher inspiziert werden können.',
      images: {
        overview: 'Übersicht des SNMP Tools',
        alternateOverview: 'Alternative Übersicht des SNMP Tools',
        deviceInfo: 'Geräteinformationsansicht des SNMP Tools',
        monitoring: 'Monitoring-Ansicht des SNMP Tools',
        networkData: 'Netzwerkdatenansicht des SNMP Tools',
        finalData: 'Finale Netzwerkdatenansicht des SNMP Tools',
      },
    },
  },
  experience: {
    vvt: {
      title: 'KundInnenCenter · Praktikum',
      organization: 'Verkehrsverbund Tirol, Innsbruck',
      period: 'Sommer 2025',
      description: 'Unterstützung im KundInnenCenter und Einblick in die serviceorientierten Abläufe des öffentlichen Verkehrs.',
      tags: ['Kundenservice', 'Öffentlicher Verkehr'],
    },
    gkn: {
      title: 'Produktion',
      organization: 'GKN Driveline & GKN Sinter Metals',
      period: '2021–2023',
      description: 'Mitarbeit in der Produktion während mehrerer Sommer in Bruneck und Sand in Taufers.',
      tags: ['Produktion', 'Praxis'],
    },
    engl: {
      title: 'Softwareentwicklung · Praktikum',
      organization: 'Engl GmbH, Sand in Taufers',
      period: '2020',
      description: 'Erste praktische Berufserfahrung in der Softwareentwicklung im Januar und Sommer 2020.',
      tags: ['Softwareentwicklung', 'Praktikum'],
    },
    zirkonzahn: {
      title: 'IT-Support · Praktikum',
      organization: 'Zirkonzahn, Gais',
      period: '2019',
      description: 'Unterstützung im IT-Support: Aktivierung von Dongles, Aufnahme und Erstellung von Support-Tickets sowie Mitarbeit an technischen Lösungen.',
      tags: ['IT-Support', 'Praktikum'],
    },
    elektrisola: {
      title: 'Fertigungshelfer · Praktikum',
      organization: 'Elektrisola, Sand in Taufers',
      period: '2018',
      description: 'Sommerpraktikum als Fertigungshelfer in der Emailliererei mit Unterstützung bei Produktionsabläufen, Materialbereitstellung und laufenden Qualitätskontrollen.',
      tags: ['Fertigung', 'Praktikum'],
    },
  },
  education: {
    bachelorComputerScience: {
      title: 'Bachelor in Informatik',
      organization: 'Universität Innsbruck',
      period: '2021–2025',
      description:
        'Akademische Grundlage in Informatik, Software Engineering, Algorithmen, Systemen, künstlicher Intelligenz und interaktiven Technologien.',
      tags: ['Informatik', 'Universität'],
    },
    tfoBrixen: {
      title: 'TFO Brixen',
      organization: 'Technologische Fachoberschule Brixen · Fachrichtung Informatik',
      period: '2018–2021',
      description: 'Schwerpunkte in Softwareentwicklung, Datenbanken, Systemen und Netzwerken, Netzwerkprogrammierung, Telekommunikation, Webservices, Projektplanung und technischer Dokumentation.',
      tags: ['Informatik', 'Systeme & Netze', 'Datenbanken', 'Webentwicklung'],
    },
    tfoBruneck: {
      title: 'TFO Bruneck',
      organization: 'Technologische Fachoberschule Bruneck · technisches Biennium',
      period: '2016–2018',
      description: 'Technisches Biennium mit Grundlagen in Mathematik, Physik, Chemie, technischem Zeichnen, angewandten Technologien und wissenschaftlichem Arbeiten; anschließend Wechsel in die Fachrichtung Informatik nach Brixen.',
      tags: ['Technik', 'Naturwissenschaften', 'Technisches Zeichnen'],
    },
  },
  blogPosts: {
    speechInterfaces: {
      title: 'Notizen zu Sprachinterfaces für kreative Tools',
      description: 'Ein zukünftiger Artikel darüber, wie gesprochene Befehle zu zuverlässigen Interaktionen werden.',
    },
    simulationSystems: {
      title: 'Simulationssysteme bauen, die spielbar wirken',
      description: 'Ein zukünftiger Text über die Balance zwischen physikalischer Korrektheit und Game Feel.',
    },
    learningNext: {
      title: 'Was ich als Nächstes lerne',
      description: 'Eine laufende Liste von Technologien, Papers und technischen Ideen, die ich weiterverfolgen möchte.',
    },
  },
  contactLinks: {
    email: {
      label: 'E-Mail',
      value: 'roedhannes@gmail.com',
    },
    phone: {
      label: 'Telefon',
      value: '+39 347 645 2458',
    },
    github: {
      label: 'GitHub',
      value: 'github.com/Hannes1000',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'linkedin.com/in/your-linkedin',
    },
    location: {
      label: 'Standort',
      value: 'Innsbruck, Österreich',
    },
  },
  contactForm: {
    nameLabel: 'Name',
    namePlaceholder: 'Dein Name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'du@example.com',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Erzähl mir von der Rolle, dem Projekt oder der Zusammenarbeit.',
  },
  slideshow: {
    previous: 'Vorheriges Bild',
    next: 'Nächstes Bild',
    showPrevious: 'Vorheriges Bild anzeigen für',
    showNext: 'Nächstes Bild anzeigen für',
    showImage: 'Bild anzeigen',
    image: 'Bild',
  },
  footer: {
    builtWith: 'Gebaut mit React, TypeScript und Tailwind CSS.',
  },
  structuredData: {
    jobTitle: 'Softwareentwickler',
    knowsAbout: [
      'Software Engineering',
      'Künstliche Intelligenz',
      'Spracherkennung',
      'Machine Learning',
      'Game Development',
      'Simulation',
    ],
  },
} as const;
