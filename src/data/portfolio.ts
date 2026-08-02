import {
  Brain,
  Code2,
  Gamepad2,
  Github,
  Mail,
  Microscope,
  Phone,
  Rocket,
  Settings2,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SkillGroupId = 'programming' | 'gameDevelopment' | 'aiMachineLearning' | 'softwareEngineering';
export type ProjectId =
  | 'bachelorThesis'
  | 'roboticsInverseKinematics'
  | 'roboticsPickAndPlace'
  | 'memori'
  | 'plantHealth'
  | 'currentTopicsComputerScience'
  | 'lowPowerSystemDesign'
  | 'mixedReality'
  | 'physicallyBasedSimulation'
  | 'franzFotoArchiv'
  | 'fruitShop'
  | 'quisepp'
  | 'snmpTool';
export type ExperienceId = 'vvt' | 'gkn' | 'engl' | 'zirkonzahn' | 'elektrisola';
export type EducationId = 'bachelorComputerScience' | 'tfoBrixen' | 'tfoBruneck';
export type BlogPostId = 'speechInterfaces' | 'simulationSystems' | 'learningNext';
export type ContactLinkId = 'email' | 'phone' | 'github' | 'linkedin' | 'location';

export type SkillGroup = {
  id: SkillGroupId;
  icon: LucideIcon;
};

export type ProjectImage = {
  id: string;
  url: string;
  type?: 'image' | 'video';
  posterUrl?: string;
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
  cvUrl: new URL('../../ressources/cv_hannes_roed.pdf', import.meta.url).href,
  imageUrl: new URL('../../ressources/profile_picture.png', import.meta.url).href,
  backgroundUrl: new URL('../../ressources/background_profile_image.webp', import.meta.url).href,
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
    technologies: ['Unity', 'C#', 'Vosk / Kaldi', 'Whisper', 'Wav2Vec 2.0', 'WER / RTF'],
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
    id: 'roboticsInverseKinematics',
    technologies: ['Robotics', 'Inverse Kinematics', 'Control', 'Simulation'],
    artifacts: [
      {
        id: 'presentation',
        url: new URL('../../ressources/projects_bachelor/robotics/robotics_inverse_kinematics/First_Assignment_-_Inverse_kinematics_Control_-_Presentation.pdf', import.meta.url).href,
      },
    ],
    images: [
      {
        id: 'inverseKinematicsDemo',
        type: 'video',
        url: new URL('../../ressources/projects_bachelor/robotics/robotics_inverse_kinematics/1.mp4', import.meta.url).href,
        posterUrl: new URL('../../ressources/projects_bachelor/robotics/generated/inverse-kinematics-poster.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-indigo-500 to-sky-500',
  },
  {
    id: 'roboticsPickAndPlace',
    technologies: ['CoppeliaSim', 'Franka Panda', 'Gripper Control', 'Pick and Place', 'Motion Planning', 'Collision Avoidance'],
    images: [
      {
        id: 'pickPlaceLongDemo',
        type: 'video',
        url: new URL('../../ressources/projects_bachelor/robotics/robotics_pick_and_place/long.mp4', import.meta.url).href,
        posterUrl: new URL('../../ressources/projects_bachelor/robotics/generated/pick-place-long-poster.jpg', import.meta.url).href,
      },
      {
        id: 'pickPlaceShortDemo',
        type: 'video',
        url: new URL('../../ressources/projects_bachelor/robotics/robotics_pick_and_place/short.mp4', import.meta.url).href,
        posterUrl: new URL('../../ressources/projects_bachelor/robotics/generated/pick-place-short-poster.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 'memori',
    technologies: ['Software Architecture', 'Web App', 'UML', 'Team Project'],
    sourceUrl: 'https://git.uibk.ac.at/informatik/qe/swa_swe/swa/swapsws22/group2/g2t2',
    artifacts: [
      {
        id: 'uiSketch',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/complementary-material/UISKETCH.pdf', import.meta.url).href,
      },
      {
        id: 'domainModel',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/complementary-material/domain_model_uml.pdf', import.meta.url).href,
      },
    ],
    images: [
      {
        id: 'login',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/01-login-masteroogway.png', import.meta.url).href,
      },
      {
        id: 'myDecks',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/02-my-decks-grid.png', import.meta.url).href,
      },
      {
        id: 'publishedDecks',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/03-published-decks-to-import.png', import.meta.url).href,
      },
      {
        id: 'importedDecks',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/04-imported-decks.png', import.meta.url).href,
      },
      {
        id: 'editDeck',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/05-edit-deck-with-cards.png', import.meta.url).href,
      },
      {
        id: 'learnFront',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/06-learn-card-front.png', import.meta.url).href,
      },
      {
        id: 'learnAnswer',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/07-learn-card-answer.png', import.meta.url).href,
      },
      {
        id: 'userManagement',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/08-admin-user-management.png', import.meta.url).href,
      },
      {
        id: 'deckModeration',
        url: new URL('../../ressources/projects_bachelor/software_architecture_memori/09-admin-deck-moderation.png', import.meta.url).href,
      },
    ],
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'plantHealth',
    technologies: ['React', 'Spring Boot', 'SQL', 'Arduino', 'Role-based Access', 'IoT'],
    sourceUrl: 'https://git.uibk.ac.at/informatik/qe/swess23/group2/g2t2.git',
    images: [
      {
        id: 'landing',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/01-real-landing-page.png', import.meta.url).href,
      },
      {
        id: 'login',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/02-real-login-page.png', import.meta.url).href,
      },
      {
        id: 'accesspoints',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/03-real-admin-accesspoints-dashboard.png', import.meta.url).href,
      },
      {
        id: 'sensorstations',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/04-real-admin-sensorstations-dashboard.png', import.meta.url).href,
      },
      {
        id: 'adminPlant',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/05-real-admin-plant-detail.png', import.meta.url).href,
      },
      {
        id: 'measurements',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/06-real-measurement-table.png', import.meta.url).href,
      },
      {
        id: 'users',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/08-real-admin-user-management.png', import.meta.url).href,
      },
      {
        id: 'auditLog',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/09-real-audit-log.png', import.meta.url).href,
      },
      {
        id: 'hardware',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/10-hardware-arduino-schaltplan.png', import.meta.url).href,
      },
      {
        id: 'gardenerDashboard',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/10-real-gardener-dashboard.png', import.meta.url).href,
      },
      {
        id: 'gardenerPlant',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/11-real-gardener-plant-detail.png', import.meta.url).href,
      },
      {
        id: 'userDashboard',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/12-real-user-dashboard.png', import.meta.url).href,
      },
      {
        id: 'userPlant',
        url: new URL('../../ressources/projects_bachelor/software_engineering_plant_health/13-real-user-plant-detail.png', import.meta.url).href,
      },
    ],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'currentTopicsComputerScience',
    technologies: ['Unity', 'YOLO12s', 'Unity Inference Engine', 'UnityLLM', 'Llama 3.2 1B', 'Scene Graphs'],
    artifacts: [
      {
        id: 'presentation',
        url: new URL('../../ressources/projects_master/actuelle_themen_der_informatik/presentation.pdf', import.meta.url).href,
      },
    ],
    images: [
      {
        id: 'topicOverview',
        url: new URL('../../ressources/projects_master/actuelle_themen_der_informatik/1.png', import.meta.url).href,
      },
      {
        id: 'topicDetail',
        url: new URL('../../ressources/projects_master/actuelle_themen_der_informatik/2.png', import.meta.url).href,
      },
      {
        id: 'topicAnalysis',
        url: new URL('../../ressources/projects_master/actuelle_themen_der_informatik/3.png', import.meta.url).href,
      },
      {
        id: 'topicSummary',
        url: new URL('../../ressources/projects_master/actuelle_themen_der_informatik/4.png', import.meta.url).href,
      },
    ],
    accent: 'from-sky-500 to-cyan-500',
  },
  {
    id: 'lowPowerSystemDesign',
    technologies: ['ESP32-C6', '12-bit ADC', 'Deep Sleep', 'RTC Memory', 'Wi-Fi 6', 'NTC Thermistor'],
    artifacts: [
      {
        id: 'proposal',
        url: new URL('../../ressources/projects_master/low_power_system_design/LSPD_Proposal_Group4.pdf', import.meta.url).href,
      },
    ],
    images: [
      {
        id: 'sensorStation',
        url: new URL('../../ressources/projects_master/low_power_system_design/1.jpeg', import.meta.url).href,
      },
    ],
    accent: 'from-emerald-500 to-lime-500',
  },
  {
    id: 'mixedReality',
    technologies: ['Unity', 'C#', 'Meta Quest 3', 'Mixed Reality', 'Multiplayer'],
    artifacts: [
      {
        id: 'presentation',
        url: new URL('../../ressources/projects_master/mixed_reality/Kitchen Countdown.pdf', import.meta.url).href,
      },
    ],
    images: [
      {
        id: 'mixedRealityDemo',
        type: 'video',
        url: new URL('../../ressources/projects_master/mixed_reality/1.mp4', import.meta.url).href,
        posterUrl: new URL('../../ressources/projects_master/mixed_reality/poster.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-fuchsia-500 to-rose-500',
  },
  {
    id: 'physicallyBasedSimulation',
    technologies: ['C++', 'Mass-Spring', 'Forward / Symplectic Euler', 'Leapfrog', 'Collision Response', 'Cloth Simulation'],
    artifacts: [
      {
        id: 'clothSimulation',
        url: new URL('../../ressources/projects_master/physically_based_simulation/phys_sim_cloth_sim.pdf', import.meta.url).href,
      },
    ],
    images: [
      {
        id: 'clothSimulationDemo',
        type: 'video',
        url: new URL('../../ressources/projects_master/physically_based_simulation/1.mp4', import.meta.url).href,
        posterUrl: new URL('../../ressources/projects_master/physically_based_simulation/poster.jpg', import.meta.url).href,
      },
    ],
    accent: 'from-slate-500 to-zinc-500',
  },
  {
    id: 'franzFotoArchiv',
    technologies: ['React', 'Node.js', 'MySQL', 'Authentication', 'Digital Archive'],
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
  { id: 'vvt' },
  { id: 'gkn' },
  { id: 'engl' },
  { id: 'zirkonzahn' },
  { id: 'elektrisola' },
];

export const educationItems: TimelineItem<EducationId>[] = [
  { id: 'bachelorComputerScience' },
  { id: 'tfoBrixen' },
  { id: 'tfoBruneck' },
];

export const blogPosts: BlogPost[] = [
  { id: 'speechInterfaces', icon: Microscope },
  { id: 'simulationSystems', icon: Settings2 },
  { id: 'learningNext', icon: Sparkles },
];

export const contactLinks: ContactLink[] = [
  { id: 'email', href: 'mailto:roedhannes@gmail.com', icon: Mail },
  { id: 'phone', href: 'tel:+393476452458', icon: Phone },
  { id: 'github', href: 'https://github.com/Hannes1000', icon: Github },
  { id: 'location', href: '#contact', icon: Rocket },
];
