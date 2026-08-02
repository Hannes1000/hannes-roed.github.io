export const contentEn = {
  languageName: 'English',
  languageToggleLabel: 'Switch language',
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  profile: {
    name: 'Hannes Röd',
    title: 'Software Engineer',
    location: 'Innsbruck, Austria',
    email: 'roedhannes@gmail.com',
    githubValue: 'https://github.com/Hannes1000',
    linkedinValue: 'linkedin.com/in/your-linkedin',
    heroEyebrow: 'Computer Science · Innsbruck / Ahrntal',
    intro:
      'I completed my Bachelor’s degree in Computer Science at the University of Innsbruck and enjoy building software that is interactive, robust, and technically engaging. My interests include artificial intelligence, speech recognition, machine learning, and simulation. I like turning complex systems into usable applications—for example through voice control in a Unity sandbox, the evaluation of ASR systems, or the implementation of physics and simulation techniques.',
    bio:
      'I hold a Bachelor degree in Computer Science from the University of Innsbruck and focus on software that feels interactive, robust, and technically ambitious. My interests span artificial intelligence, speech recognition, machine learning, game development, and simulation. I enjoy turning complex systems into usable experiences, whether that means integrating speech commands into a Unity sandbox, evaluating ASR systems, or implementing physics and fluid simulation techniques.',
    imageAlt: 'Hannes Röd profile portrait',
    profileCardLabel: 'Profile',
    profileCardText: 'Software engineering, AI, simulation, and interactive systems.',
  },
  buttons: {
    downloadCv: 'Download CV',
    contactMe: 'Contact Me',
    viewProjects: 'View Projects',
    contact: 'Contact',
    source: 'Source',
    liveDemo: 'Live demo',
    openProject: 'Open project',
    sendMessage: 'Send Message',
  },
  highlights: [
    { label: 'Degree', value: 'BSc Computer Science' },
    { label: 'Focus', value: 'AI, Simulation, Games' },
    { label: 'Tools', value: 'C++, C#, Python, Unity' },
  ],
  sections: {
    about: {
      eyebrow: 'About me',
      title: 'Engineering interactive systems from idea to implementation',
    },
    skills: {
      eyebrow: 'Technical profile',
      title: 'Skills grouped by how they create value',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Portfolio projects',
    },
    experience: {
      eyebrow: 'Professional timeline',
      title: 'Experience',
      description: 'Practical experience in software development, IT support, manufacturing, and customer service.',
    },
    education: {
      eyebrow: 'Academic profile',
      title: 'Education',
      description: 'My path from technical high school to a Bachelor’s degree in Computer Science.',
    },
    blog: {
      eyebrow: 'Optional writing',
      title: 'Blog ideas',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us build something technically interesting',
    },
  },
  aboutBullets: [
    'Artificial intelligence and speech recognition',
    'Machine learning and neural systems',
    'Unity game development and simulation',
    'Clean, maintainable software architecture',
  ],
  skillGroups: {
    programming: {
      title: 'Programming',
      skills: ['C++', 'C#', 'Python', 'JavaScript', 'TypeScript'],
    },
    gameDevelopment: {
      title: 'Game Development',
      skills: ['Unity', 'Physics Simulation', 'Procedural Systems', 'Performance Optimization'],
    },
    aiMachineLearning: {
      title: 'AI & Machine Learning',
      skills: ['Speech Recognition', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing'],
    },
    softwareEngineering: {
      title: 'Software Engineering',
      skills: ['Git', 'GitHub', 'Object-Oriented Design', 'Design Patterns', 'Testing'],
    },
  },
  projects: {
    bachelorThesis: {
      title: 'Bachelor Thesis: Speech-Controlled LEGO Sandbox',
      description:
        'For my bachelor thesis, I built a 3D brick-building sandbox in Unity where bricks can be selected, placed, rotated, grouped, and coloured using speech. Recognition runs fully offline. I compared 16 models from Vosk/Kaldi, Whisper, and Wav2Vec 2.0 using Word Error Rate, Real-Time Factor, and 2.71 hours of audio from my user study.',
      artifacts: {
        thesis: 'Open thesis',
        presentation: 'Open presentation',
      },
      images: {
        sandboxInstruction: 'Speech-controlled LEGO sandbox instruction screen',
        voiceProduction: 'Voice production and waveform illustration from the bachelor thesis',
        timeDomain: 'Time-domain audio view with transcription from the bachelor thesis',
        windowing: 'Audio windowing illustration from the bachelor thesis',
        wer: 'Word error rate explanation from the bachelor thesis',
        werRtf: 'WER versus real-time factor chart for LEGO command recognition',
        sandboxTasks: 'Sandbox task overview from the speech-controlled LEGO prototype',
        sandboxTutorial: 'Sandbox tutorial screen from the speech-controlled LEGO prototype',
        sandboxTask3: 'Speech-controlled LEGO sandbox task screenshot',
        hypothesizedWords: 'Hypothesized words across ASR model families chart',
        results10: 'Evaluation results from the bachelor thesis speech recognition study',
        results11: 'Additional evaluation results from the bachelor thesis',
        results12: 'Final evaluation results from the bachelor thesis',
      },
    },
    roboticsInverseKinematics: {
      title: 'Robotics: Inverse Kinematics Control',
      description:
        'A robotics assignment focused on inverse kinematics control, showing how a simulated robotic system can be guided through target-driven motion.',
      artifacts: {
        presentation: 'Open presentation',
      },
      images: {
        inverseKinematicsDemo: 'Inverse kinematics robotics demo video',
      },
    },
    roboticsPickAndPlace: {
      title: 'Robotics: Pick and Place',
      description:
        'A robotics pick-and-place project demonstrating object handling, motion planning, and simulated robot behavior through short and extended demo videos.',
      images: {
        pickPlaceShortDemo: 'Short robotics pick-and-place demo video',
        pickPlaceLongDemo: 'Extended robotics pick-and-place demo video',
      },
    },
    distributedSystems: {
      title: 'Distributed Systems Presentation',
      description:
        'A bachelor-level distributed systems project artifact focused on core concepts, system trade-offs, and presentation of distributed computing topics.',
      artifacts: {
        presentation: 'Open presentation',
      },
      images: {},
    },
    memori: {
      title: 'Memori',
      description:
        'A software architecture team project for a flashcard learning platform, including deck management, publishing/import flows, learning views, admin screens, and architecture documentation.',
      artifacts: {
        uiSketch: 'Open UI sketch',
        domainModel: 'Open domain model',
      },
      images: {
        login: 'Memori login screen',
        myDecks: 'Memori deck overview',
        publishedDecks: 'Memori published decks import screen',
        importedDecks: 'Memori imported decks screen',
        editDeck: 'Memori deck editor with cards',
        learnFront: 'Memori learning card front',
        learnAnswer: 'Memori learning card answer',
        userManagement: 'Memori admin user management',
        deckModeration: 'Memori admin deck moderation',
      },
    },
    plantHealth: {
      title: 'Plant Health Monitoring',
      description:
        'In this software engineering team project, I helped develop an application for monitoring plants. A React front end, Spring Boot back end, and SQL data model connect plants, sensor stations, and measurements. It also includes role-based views, an audit log, and Arduino hardware.',
      images: {
        landing: 'Plant Health landing page',
        login: 'Plant Health login page',
        accesspoints: 'Plant Health admin access points dashboard',
        sensorstations: 'Plant Health admin sensor stations dashboard',
        adminPlant: 'Plant Health admin plant detail',
        measurements: 'Plant Health measurement table',
        users: 'Plant Health admin user management',
        auditLog: 'Plant Health audit log',
        hardware: 'Plant Health Arduino hardware schematic',
        gardenerDashboard: 'Plant Health gardener dashboard',
        gardenerPlant: 'Plant Health gardener plant detail',
        userDashboard: 'Plant Health user dashboard',
        userPlant: 'Plant Health user plant detail',
      },
    },
    physicallyBasedSimulation: {
      title: 'Physically Based Simulation: Cloth Simulation',
      description:
        'Together with Martin Berktold, I implemented a mass-spring simulator in C++ for oscillators, double pendulums, collisions, and a 15 × 10 cloth grid. It includes Forward Euler, Symplectic Euler, and Leapfrog, plus ground collisions using penalty forces and velocity clamping.',
      artifacts: {
        clothSimulation: 'Open cloth simulation PDF',
      },
      images: {
        clothSimulationDemo: 'Cloth simulation demo video',
      },
    },
    currentTopicsComputerScience: {
      title: 'Scene Understanding',
      description:
        'Together with Adam Pescoller, I built a Unity system that turns camera images into a queryable scene description. YOLO12s runs through the Unity Inference Engine; the bounding boxes form a graph with spatial relations. Llama 3.2 1B answers natural-language questions about it through UnityLLM.',
      artifacts: {
        presentation: 'Open presentation',
      },
      images: {
        topicOverview: 'Current topics presentation overview slide',
        topicDetail: 'Current topics presentation detail slide',
        topicAnalysis: 'Current topics presentation analysis slide',
        topicSummary: 'Current topics presentation summary slide',
      },
    },
    lowPowerSystemDesign: {
      title: 'Low Power System Design: Thermal Sensor Station',
      description:
        'Together with Manuel Reichegger, I developed a low-power temperature sensing station using an ESP32-C6, a 15 kΩ NTC thermistor, and the 12-bit ADC. The controller wakes from deep sleep every 30 seconds, keeps readings in RTC memory, and transmits ten measurements together over Wi-Fi.',
      artifacts: {
        proposal: 'Open proposal',
      },
      images: {
        sensorStation: 'Low power thermal sensor station prototype',
      },
    },
    mixedReality: {
      title: 'Mixed Reality: Kitchen Countdown',
      description:
        'Kitchen Countdown was built during a project week as a multiplayer game for Meta Quest 3. In Unity, we created a mixed-reality kitchen where several players complete recipes against the clock. The main challenges were headset synchronisation, Wi-Fi stability, and latency.',
      artifacts: {
        presentation: 'Open project PDF',
      },
      images: {
        mixedRealityDemo: 'Kitchen Countdown mixed reality gameplay video',
      },
    },
    franzFotoArchiv: {
      title: 'Franz Foto Archiv',
      description:
        'A hosted photo archive web app with user accounts and a gallery workflow, built as a larger school project around organizing and browsing image collections.',
      images: {
        login: 'Franz Foto Archiv login screenshot',
        alternateLogin: 'Franz Foto Archiv alternate login screenshot',
        gallery: 'Franz Foto Archiv gallery overview screenshot',
        imageDetail: 'Franz Foto Archiv image detail screenshot',
        album: 'Franz Foto Archiv album view screenshot',
        archive: 'Franz Foto Archiv archive view screenshot',
        management: 'Franz Foto Archiv management view screenshot',
        workflow: 'Franz Foto Archiv final workflow screenshot',
      },
    },
    fruitShop: {
      title: 'Fruit Shop',
      description:
        'A small online shop prototype for browsing fruit and vegetable products, practicing classic shop pages, product presentation, and checkout-style flows.',
      images: {
        home: 'Fruit Shop home page screenshot',
        products: 'Fruit Shop product listing screenshot',
        cart: 'Fruit Shop cart workflow screenshot',
        checkout: 'Fruit Shop checkout-style page screenshot',
      },
    },
    quisepp: {
      title: 'QuiSepp',
      description:
        'A quiz application for creating and playing question sets, including a creator flow and a player-facing quiz view for classroom-style learning.',
      images: {
        createQuiz: 'QuiSepp quiz creation screenshot',
        playQuiz: 'QuiSepp quiz player screenshot',
      },
    },
    snmpTool: {
      title: 'SNMP Tool',
      description:
        'A school networking tool for reading and displaying SNMP device information, focused on making network monitoring data easier to inspect.',
      images: {
        overview: 'SNMP Tool overview screenshot',
        alternateOverview: 'SNMP Tool alternate overview screenshot',
        deviceInfo: 'SNMP Tool device information screenshot',
        monitoring: 'SNMP Tool monitoring screenshot',
        networkData: 'SNMP Tool network data screenshot',
        finalData: 'SNMP Tool final network data screenshot',
      },
    },
  },
  experience: {
    vvt: {
      title: 'Customer Centre · Internship',
      organization: 'Verkehrsverbund Tirol, Innsbruck',
      period: 'Summer 2025',
      description: 'Supported customers in the service centre and gained insight into service-oriented public transport operations.',
      tags: ['Customer Service', 'Public Transport'],
    },
    gkn: {
      title: 'Manufacturing',
      organization: 'GKN Driveline & GKN Sinter Metals',
      period: '2021–2023',
      description: 'Manufacturing work during several summers in Bruneck and Sand in Taufers.',
      tags: ['Manufacturing', 'Practical Work'],
    },
    engl: {
      title: 'Software Development · Internship',
      organization: 'Engl GmbH, Sand in Taufers',
      period: '2020',
      description: 'First professional software-development experience in January and summer 2020.',
      tags: ['Software Development', 'Internship'],
    },
    zirkonzahn: {
      title: 'IT Support · Internship',
      organization: 'Zirkonzahn, Gais',
      period: '2019',
      description: 'Supported IT operations by activating dongles, recording and creating support tickets, and helping develop technical solutions.',
      tags: ['IT Support', 'Internship'],
    },
    elektrisola: {
      title: 'Manufacturing Assistant · Internship',
      organization: 'Elektrisola, Sand in Taufers',
      period: '2018',
      description: 'Summer internship as a manufacturing assistant in the enamelling department, supporting production processes, material preparation, and ongoing quality checks.',
      tags: ['Manufacturing', 'Internship'],
    },
  },
  education: {
    bachelorComputerScience: {
      title: 'Bachelor Degree in Computer Science',
      organization: 'University of Innsbruck',
      period: '2021–2025',
      description:
        'Academic foundation in computer science, software engineering, algorithms, systems, artificial intelligence, and interactive technologies.',
      tags: ['Computer Science', 'University'],
    },
    tfoBrixen: {
      title: 'TFO Brixen',
      organization: 'Technological High School Brixen · Computer Science programme',
      period: '2018–2021',
      description: 'Focused on software development, databases, systems and networks, network programming, telecommunications, web services, project planning, and technical documentation.',
      tags: ['Computer Science', 'Systems & Networks', 'Databases', 'Web Development'],
    },
    tfoBruneck: {
      title: 'TFO Bruneck',
      organization: 'Technological High School Bruneck · technical biennium',
      period: '2016–2018',
      description: 'Technical biennium covering mathematics, physics, chemistry, technical drawing, applied technologies, and scientific work, followed by a move to the Computer Science programme in Brixen.',
      tags: ['Technology', 'Natural Sciences', 'Technical Drawing'],
    },
  },
  blogPosts: {
    speechInterfaces: {
      title: 'Notes on Speech Interfaces for Creative Tools',
      description: 'A future article about turning spoken commands into reliable interactions.',
    },
    simulationSystems: {
      title: 'Building Simulation Systems That Feel Playable',
      description: 'A future write-up on balancing physical correctness with game feel.',
    },
    learningNext: {
      title: 'What I Am Learning Next',
      description: 'A running list of technologies, papers, and engineering ideas worth exploring.',
    },
  },
  contactLinks: {
    email: {
      label: 'Email',
      value: 'roedhannes@gmail.com',
    },
    phone: {
      label: 'Phone',
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
      label: 'Location',
      value: 'Innsbruck, Austria',
    },
  },
  contactForm: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about the role, project, or collaboration.',
  },
  slideshow: {
    previous: 'Previous image',
    next: 'Next image',
    showPrevious: 'Show previous image for',
    showNext: 'Show next image for',
    showImage: 'Show image',
    image: 'Image',
  },
  footer: {
    builtWith: 'Built with React, TypeScript, and Tailwind CSS.',
  },
  structuredData: {
    jobTitle: 'Software Engineer',
    knowsAbout: [
      'Software Engineering',
      'Artificial Intelligence',
      'Speech Recognition',
      'Machine Learning',
      'Game Development',
      'Simulation',
    ],
  },
} as const;
