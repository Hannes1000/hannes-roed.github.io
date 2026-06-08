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

export type SkillGroupId = 'programming' | 'gameDevelopment' | 'aiMachineLearning' | 'softwareEngineering';
export type ProjectId = 'bachelorThesis' | 'franzFotoArchiv' | 'fruitShop' | 'quisepp' | 'snmpTool';
export type ExperienceId = 'internship' | 'studentDeveloper' | 'researchCollaboration';
export type EducationId = 'bachelorComputerScience' | 'futureCredential';
export type BlogPostId = 'speechInterfaces' | 'simulationSystems' | 'learningNext';
export type ContactLinkId = 'email' | 'github' | 'linkedin' | 'location';

export type SkillGroup = {
  id: SkillGroupId;
  icon: LucideIcon;
};

export type ProjectImage = {
  id: string;
  url: string;
};

export type ProjectArtifact = {
  id: string;
  url: string;
};

export type Project = {
  id: ProjectId;
  technologies: string[];
  sourceUrl?: string;
  liveUrl?: string;
  artifacts?: ProjectArtifact[];
  images: ProjectImage[];
  accent: string;
};

export type TimelineItem<TId extends string> = {
  id: TId;
};

export type BlogPost = {
  id: BlogPostId;
  icon: LucideIcon;
};

export type ContactLink = {
  id: ContactLinkId;
  href: string;
  icon: LucideIcon;
};

export const profileAssets = {
  cvUrl: './cv-hannes-roed.pdf',
  imageUrl: new URL('../../ressources/profile_picture.png', import.meta.url).href,
};

export const skillGroups: SkillGroup[] = [
  { id: 'programming', icon: Code2 },
  { id: 'gameDevelopment', icon: Gamepad2 },
  { id: 'aiMachineLearning', icon: Brain },
  { id: 'softwareEngineering', icon: Wrench },
];

export const projects: Project[] = [
  {
    id: 'bachelorThesis',
    technologies: ['Unity', 'C#', 'Speech Recognition', 'ASR', 'UX Research'],
    artifacts: [
      {
        id: 'thesis',
        url: './bachelor-thesis-hannes-roed.pdf',
      },
      {
        id: 'presentation',
        url: './bachelor-presentation-hannes-roed.pdf',
      },
    ],
    images: [
      {
        id: 'sandboxInstruction',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/1_sandbox_instruction.jpg', import.meta.url).href,
      },
      {
        id: 'voiceProduction',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/2_VoiceProductionAndWaveForm_1.jpg', import.meta.url).href,
      },
      {
        id: 'timeDomain',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/3.0_TimeDomainWithTranscription_2.jpg', import.meta.url).href,
      },
      {
        id: 'windowing',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/3.1_windowing_3.jpg', import.meta.url).href,
      },
      {
        id: 'wer',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/4_WER_3.jpg', import.meta.url).href,
      },
      {
        id: 'werRtf',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/5_WER_vs_RTFx_lego.jpg', import.meta.url).href,
      },
      {
        id: 'sandboxTasks',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/6_sandbox_tasks.jpg', import.meta.url).href,
      },
      {
        id: 'sandboxTutorial',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/7_sandbox_tutorial.jpg', import.meta.url).href,
      },
      {
        id: 'sandboxTask3',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/8_sandbox_task3.jpg', import.meta.url).href,
      },
      {
        id: 'hypothesizedWords',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/9_hypothesized_words_accross_model_family.jpg', import.meta.url).href,
      },
      {
        id: 'results10',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/10_results.jpg', import.meta.url).href,
      },
      {
        id: 'results11',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/11_results.jpg', import.meta.url).href,
      },
      {
        id: 'results12',
        url: new URL('../../ressources/projects_bachelor/bachelor_thesis/12_results.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'franzFotoArchiv',
    technologies: ['Web App', 'Authentication', 'Image Archive', 'Database'],
    sourceUrl: 'https://github.com/Hannes1000/Foto-Archiv',
    liveUrl: 'http://3.72.107.197/',
    images: [
      {
        id: 'login',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/1.0.jpg', import.meta.url).href,
      },
      {
        id: 'alternateLogin',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/1.1.jpg', import.meta.url).href,
      },
      {
        id: 'gallery',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/2.jpg', import.meta.url).href,
      },
      {
        id: 'imageDetail',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/4.jpg', import.meta.url).href,
      },
      {
        id: 'album',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/5.jpg', import.meta.url).href,
      },
      {
        id: 'archive',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/6.jpg', import.meta.url).href,
      },
      {
        id: 'management',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/7.jpg', import.meta.url).href,
      },
      {
        id: 'workflow',
        url: new URL('../../ressources/projects_highschool/franz-foto-archiv/8.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-amber-500 to-orange-500',
  },
  {
    id: 'fruitShop',
    technologies: ['Web Shop', 'Product UI', 'Frontend', 'School Project'],
    sourceUrl: 'https://github.com/Hannes1000/GemueseShop',
    images: [
      {
        id: 'home',
        url: new URL('../../ressources/projects_highschool/fruit-shop/1.jpg', import.meta.url).href,
      },
      {
        id: 'products',
        url: new URL('../../ressources/projects_highschool/fruit-shop/2.jpg', import.meta.url).href,
      },
      {
        id: 'cart',
        url: new URL('../../ressources/projects_highschool/fruit-shop/3.jpg', import.meta.url).href,
      },
      {
        id: 'checkout',
        url: new URL('../../ressources/projects_highschool/fruit-shop/4.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-lime-500 to-emerald-500',
  },
  {
    id: 'quisepp',
    technologies: ['Quiz App', 'Frontend', 'Team Project', 'Education'],
    sourceUrl: 'https://github.com/4BT-TP-19-20/QuiSepp/tree/master',
    images: [
      {
        id: 'createQuiz',
        url: new URL('../../ressources/projects_highschool/quisepp/create_quiz_example.jpg', import.meta.url).href,
      },
      {
        id: 'playQuiz',
        url: new URL('../../ressources/projects_highschool/quisepp/quiz_example.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-sky-500 to-blue-500',
  },
  {
    id: 'snmpTool',
    technologies: ['Networking', 'SNMP', 'Monitoring', 'Tooling'],
    sourceUrl: 'https://github.com/Hannes1000/SNMPTool',
    images: [
      {
        id: 'overview',
        url: new URL('../../ressources/projects_highschool/snmp-tool/1.1.jpg', import.meta.url).href,
      },
      {
        id: 'alternateOverview',
        url: new URL('../../ressources/projects_highschool/snmp-tool/1.2.jpg', import.meta.url).href,
      },
      {
        id: 'deviceInfo',
        url: new URL('../../ressources/projects_highschool/snmp-tool/2.jpg', import.meta.url).href,
      },
      {
        id: 'monitoring',
        url: new URL('../../ressources/projects_highschool/snmp-tool/3.jpg', import.meta.url).href,
      },
      {
        id: 'networkData',
        url: new URL('../../ressources/projects_highschool/snmp-tool/4.jpg', import.meta.url).href,
      },
      {
        id: 'finalData',
        url: new URL('../../ressources/projects_highschool/snmp-tool/5.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-rose-500 to-red-500',
  },
];

export const experienceItems: TimelineItem<ExperienceId>[] = [
  { id: 'internship' },
  { id: 'studentDeveloper' },
  { id: 'researchCollaboration' },
];

export const educationItems: TimelineItem<EducationId>[] = [
  { id: 'bachelorComputerScience' },
  { id: 'futureCredential' },
];

export const blogPosts: BlogPost[] = [
  { id: 'speechInterfaces', icon: Microscope },
  { id: 'simulationSystems', icon: Settings2 },
  { id: 'learningNext', icon: Sparkles },
];

export const contactLinks: ContactLink[] = [
  { id: 'email', href: 'mailto:your.email@example.com', icon: Mail },
  { id: 'github', href: 'https://github.com/your-github', icon: Github },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/your-linkedin', icon: Linkedin },
  { id: 'location', href: '#contact', icon: Rocket },
];
