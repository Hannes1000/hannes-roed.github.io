import {
  Brain,
  Code2,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  Microscope,
  Rocket,
  Settings2,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  sourceUrl?: string;
  liveUrl?: string;
  artifactUrl?: string;
  artifactLabel?: string;
  images: {
    url: string;
    alt: string;
  }[];
  accent: string;
};

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
};

export const profile = {
  name: 'Hannes Röd',
  title: 'Software Engineer | AI Enthusiast | Game Developer',
  location: 'Innsbruck, Austria',
  email: 'your.email@example.com',
  github: 'https://github.com/your-github',
  linkedin: 'https://www.linkedin.com/in/your-linkedin',
  cvUrl: './cv-hannes-roed.pdf',
  intro:
    'Computer Science graduate building interactive systems at the intersection of software engineering, artificial intelligence, simulation, and games.',
  bio:
    'I hold a Bachelor’s degree in Computer Science from the University of Innsbruck and focus on software that feels interactive, robust, and technically ambitious. My interests span artificial intelligence, speech recognition, machine learning, game development, and simulation. I enjoy turning complex systems into usable experiences, whether that means integrating speech commands into a Unity sandbox, evaluating ASR systems, or implementing physics and fluid simulation techniques.',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const highlights = [
  { label: 'Degree', value: 'BSc Computer Science' },
  { label: 'Focus', value: 'AI, Simulation, Games' },
  { label: 'Tools', value: 'C++, C#, Python, Unity' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['C++', 'C#', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Game Development',
    icon: Gamepad2,
    skills: ['Unity', 'Physics Simulation', 'Procedural Systems', 'Performance Optimization'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Speech Recognition', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing'],
  },
  {
    title: 'Software Engineering',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Object-Oriented Design', 'Design Patterns', 'Testing'],
  },
];

export const projects: Project[] = [
  {
    title: 'Bachelor Thesis: Speech-Controlled LEGO Sandbox',
    description:
      'A Unity sandbox for building LEGO-style models with speech commands, including ASR evaluation, interaction tasks, logging, and user-facing prototype work.',
    technologies: ['Unity', 'C#', 'Speech Recognition', 'ASR', 'UX Research'],
    artifactUrl: new URL('../../ressources/projects_bachelor/bachelor_thesis/_ba_hannes_roed_thesis.pdf', import.meta.url).href,
    artifactLabel: 'Open thesis',
    images: [
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/1_sandbox_instruction.jpg', import.meta.url).href,
        alt: 'Speech-controlled LEGO sandbox instruction screen',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/2_VoiceProductionAndWaveForm_1.jpg', import.meta.url).href,
        alt: 'Voice production and waveform illustration from the bachelor thesis',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/3.0_TimeDomainWithTranscription_2.jpg', import.meta.url).href,
        alt: 'Time-domain audio view with transcription from the bachelor thesis',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/3.1_windowing_3.jpg', import.meta.url).href,
        alt: 'Audio windowing illustration from the bachelor thesis',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/4_WER_3.jpg', import.meta.url).href,
        alt: 'Word error rate explanation from the bachelor thesis',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/5_WER_vs_RTFx_lego.jpg', import.meta.url).href,
        alt: 'WER versus real-time factor chart for LEGO command recognition',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/6_sandbox_tasks.jpg', import.meta.url).href,
        alt: 'Sandbox task overview from the speech-controlled LEGO prototype',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/7_sandbox_tutorial.jpg', import.meta.url).href,
        alt: 'Sandbox tutorial screen from the speech-controlled LEGO prototype',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/8_sandbox_task3.jpg', import.meta.url).href,
        alt: 'Speech-controlled LEGO sandbox task screenshot',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/9_hypothesized_words_accross_model_family.jpg', import.meta.url).href,
        alt: 'Hypothesized words across ASR model families chart',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/10_results.jpg', import.meta.url).href,
        alt: 'Evaluation results from the bachelor thesis speech recognition study',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/11_results.jpg', import.meta.url).href,
        alt: 'Additional evaluation results from the bachelor thesis',
      },
      {
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/12_results.jpg', import.meta.url).href,
        alt: 'Final evaluation results from the bachelor thesis',
      },
    ],
    accent: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Franz Foto Archiv',
    description:
      'A hosted photo archive web app with user accounts and a gallery workflow, built as a larger school project around organizing and browsing image collections.',
    technologies: ['Web App', 'Authentication', 'Image Archive', 'Database'],
    sourceUrl: 'https://github.com/Hannes1000/Foto-Archiv',
    liveUrl: 'http://3.72.107.197/',
    images: [
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/1.0.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv login screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/1.1.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv alternate login screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/2.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv gallery overview screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/4.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv image detail screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/5.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv album view screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/6.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv archive view screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/7.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv management view screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/8.jpg', import.meta.url).href,
        alt: 'Franz Foto Archiv final workflow screenshot',
      },
    ],
    accent: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Fruit Shop',
    description:
      'A small online shop prototype for browsing fruit and vegetable products, practicing classic shop pages, product presentation, and checkout-style flows.',
    technologies: ['Web Shop', 'Product UI', 'Frontend', 'School Project'],
    sourceUrl: 'https://github.com/Hannes1000/GemueseShop',
    images: [
      {
        url: new URL('../../ressources/projects_highschool/fruit-shop/1.jpg', import.meta.url).href,
        alt: 'Fruit Shop home page screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/fruit-shop/2.jpg', import.meta.url).href,
        alt: 'Fruit Shop product listing screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/fruit-shop/3.jpg', import.meta.url).href,
        alt: 'Fruit Shop cart workflow screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/fruit-shop/4.jpg', import.meta.url).href,
        alt: 'Fruit Shop checkout-style page screenshot',
      },
    ],
    accent: 'from-lime-500 to-emerald-500',
  },
  {
    title: 'QuiSepp',
    description:
      'A quiz application for creating and playing question sets, including a creator flow and a player-facing quiz view for classroom-style learning.',
    technologies: ['Quiz App', 'Frontend', 'Team Project', 'Education'],
    sourceUrl: 'https://github.com/4BT-TP-19-20/QuiSepp/tree/master',
    images: [
      {
        url: new URL('../../ressources/projects_highschool/quisepp/create_quiz_example.jpg', import.meta.url).href,
        alt: 'QuiSepp quiz creation screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/quisepp/quiz_example.jpg', import.meta.url).href,
        alt: 'QuiSepp quiz player screenshot',
      },
    ],
    accent: 'from-sky-500 to-blue-500',
  },
  {
    title: 'SNMP Tool',
    description:
      'A school networking tool for reading and displaying SNMP device information, focused on making network monitoring data easier to inspect.',
    technologies: ['Networking', 'SNMP', 'Monitoring', 'Tooling'],
    sourceUrl: 'https://github.com/Hannes1000/SNMPTool',
    images: [
      {
        url: new URL('../../ressources/projects_highschool/snmp-tool/1.1.jpg', import.meta.url).href,
        alt: 'SNMP Tool overview screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/snmp-tool/1.2.jpg', import.meta.url).href,
        alt: 'SNMP Tool alternate overview screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/snmp-tool/2.jpg', import.meta.url).href,
        alt: 'SNMP Tool device information screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/snmp-tool/3.jpg', import.meta.url).href,
        alt: 'SNMP Tool monitoring screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/snmp-tool/4.jpg', import.meta.url).href,
        alt: 'SNMP Tool network data screenshot',
      },
      {
        url: new URL('../../ressources/projects_highschool/snmp-tool/5.jpg', import.meta.url).href,
        alt: 'SNMP Tool final network data screenshot',
      },
    ],
    accent: 'from-rose-500 to-red-500',
  },
];

export const experience: TimelineItem[] = [
  {
    title: 'Software Engineering Internship',
    organization: 'Company Name',
    period: 'Add dates',
    description:
      'Placeholder for internship responsibilities, technical achievements, team context, and measurable results.',
    tags: ['Internship', 'Software Engineering'],
  },
  {
    title: 'Student Developer Role',
    organization: 'Organization Name',
    period: 'Add dates',
    description:
      'Placeholder for student jobs, research support, tooling work, teaching assistance, or production contributions.',
    tags: ['Student Job', 'Development'],
  },
  {
    title: 'Research or Project Collaboration',
    organization: 'Lab or Team Name',
    period: 'Add dates',
    description:
      'Placeholder for academic, AI, simulation, or game-development collaborations that should appear in the CV timeline.',
    tags: ['Research', 'Collaboration'],
  },
];

export const education: TimelineItem[] = [
  {
    title: 'Bachelor’s Degree in Computer Science',
    organization: 'University of Innsbruck',
    period: 'Completed',
    description:
      'Academic foundation in computer science, software engineering, algorithms, systems, artificial intelligence, and interactive technologies.',
    tags: ['Computer Science', 'University'],
  },
  {
    title: 'Future Certification or Degree',
    organization: 'Institution Name',
    period: 'Add dates',
    description: 'Placeholder for future degrees, professional certifications, or specialized training.',
    tags: ['Certification', 'Future'],
  },
];

export const blogPosts = [
  {
    title: 'Notes on Speech Interfaces for Creative Tools',
    description: 'A future article about turning spoken commands into reliable interactions.',
    icon: Microscope,
  },
  {
    title: 'Building Simulation Systems That Feel Playable',
    description: 'A future write-up on balancing physical correctness with game feel.',
    icon: Settings2,
  },
  {
    title: 'What I Am Learning Next',
    description: 'A running list of technologies, papers, and engineering ideas worth exploring.',
    icon: Sparkles,
  },
];

export const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/your-github', href: profile.github, icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/in/your-linkedin', href: profile.linkedin, icon: Linkedin },
  { label: 'Location', value: profile.location, href: '#contact', icon: Rocket },
];

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Software Engineer',
  description: profile.intro,
  url: 'https://hannes-roed.github.io/',
  sameAs: [profile.github, profile.linkedin],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Innsbruck',
  },
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence',
    'Speech Recognition',
    'Machine Learning',
    'Game Development',
    'Simulation',
  ],
};
