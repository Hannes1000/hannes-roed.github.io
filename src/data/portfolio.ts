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
  githubUrl: string;
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
    title: 'Speech-Controlled LEGO Sandbox',
    description:
      'A Unity-based sandbox where players construct LEGO models using speech commands. Includes logging systems, user studies, and speech recognition integration.',
    technologies: ['Unity', 'C#', 'Speech Recognition', 'UX Research', 'Logging'],
    githubUrl: 'https://github.com/your-github/speech-lego-sandbox',
    accent: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'ASR Benchmarking Thesis',
    description:
      'Evaluation and benchmarking of Automatic Speech Recognition systems using metrics such as Word Error Rate and Real-Time Factor.',
    technologies: ['Python', 'ASR', 'WER', 'Benchmarking', 'Research'],
    githubUrl: 'https://github.com/your-github/asr-benchmarking',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    title: '2D Fluid Simulation',
    description:
      'Implementation of Euler fluid simulation including Semi-Lagrangian advection, pressure solving, velocity projection, and multigrid methods.',
    technologies: ['C++', 'Numerical Methods', 'Simulation', 'Multigrid', 'Visualization'],
    githubUrl: 'https://github.com/your-github/2d-fluid-simulation',
    accent: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Physics-Based LEGO Construction Game',
    description:
      'A physically accurate LEGO-inspired game focusing on creative building, structural stability, and simulation-driven gameplay.',
    technologies: ['Unity', 'C#', 'Physics', 'Game Design', 'Optimization'],
    githubUrl: 'https://github.com/your-github/physics-lego-game',
    accent: 'from-rose-500 to-red-500',
  },
  {
    title: 'Tyrolean Dialect TTS Research',
    description:
      'Exploration of text-to-speech systems for Tyrolean and South Tyrolean dialects, with attention to low-resource speech technology workflows.',
    technologies: ['Python', 'TTS', 'Speech Synthesis', 'Linguistics', 'ML'],
    githubUrl: 'https://github.com/your-github/tyrolean-tts',
    accent: 'from-violet-500 to-fuchsia-500',
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
