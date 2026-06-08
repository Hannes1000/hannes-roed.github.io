import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { languageOptions, siteContent, type Language, type SiteContent } from './data/content';
import {
  blogPosts,
  contactLinks,
  educationItems,
  experienceItems,
  profileAssets,
  projects,
  skillGroups,
  type BlogPostId,
  type ContactLinkId,
  type EducationId,
  type ExperienceId,
  type Project,
  type ProjectId,
  type SkillGroupId,
} from './data/portfolio';

type Theme = 'light' | 'dark';

function getInitialLanguage(): Language {
  const stored = localStorage.getItem('language') as Language | null;
  if (stored && languageOptions.includes(stored)) return stored;
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = siteContent[language];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: content.profile.name,
        jobTitle: content.structuredData.jobTitle,
        description: content.profile.intro,
        url: 'https://hannes-roed.github.io/',
        sameAs: [contactLinks.find((link) => link.id === 'github')?.href, contactLinks.find((link) => link.id === 'linkedin')?.href].filter(Boolean),
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: content.education.bachelorComputerScience.organization,
        },
        knowsAbout: content.structuredData.knowsAbout,
      }),
    [content],
  );

  return (
    <div className="min-h-screen bg-stone-50 text-ink-900 antialiased transition-colors duration-300 dark:bg-ink-950 dark:text-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Header
        content={content}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((current) => !current)}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Skills content={content} />
        <Projects content={content} />
        <TimelineSection
          id="experience"
          eyebrow={content.sections.experience.eyebrow}
          title={content.sections.experience.title}
          description={content.sections.experience.description}
          icon={<BriefcaseBusiness className="h-5 w-5" />}
          items={experienceItems}
          text={content.experience}
        />
        <TimelineSection
          id="education"
          eyebrow={content.sections.education.eyebrow}
          title={content.sections.education.title}
          description={content.sections.education.description}
          icon={<GraduationCap className="h-5 w-5" />}
          items={educationItems}
          text={content.education}
        />
        <Blog content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}

function Header({
  content,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  isMenuOpen,
  onMenuToggle,
  onNavigate,
}: {
  content: SiteContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-stone-50/90 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 font-bold tracking-tight" onClick={onNavigate}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink-900 text-sm text-white shadow-panel dark:bg-white dark:text-ink-950">
            HR
          </span>
          <span className="hidden sm:block">{content.profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {content.navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitch content={content} language={language} onLanguageChange={onLanguageChange} />
          <IconButton label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={onThemeToggle}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </IconButton>
          <a href="#contact" className="hidden rounded-lg bg-ink-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-600 dark:bg-white dark:text-ink-950 dark:hover:bg-accent-400 lg:inline-flex">
            {content.buttons.contact}
          </a>
          <IconButton label="Open navigation menu" onClick={onMenuToggle} className="lg:hidden">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </IconButton>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-ink-900/10 bg-stone-50 px-5 py-4 dark:border-white/10 dark:bg-ink-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {content.navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-ink-900/5 dark:hover:bg-white/10" onClick={onNavigate}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitch({
  content,
  language,
  onLanguageChange,
}: {
  content: SiteContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  return (
    <div className="language-switch" aria-label={content.languageToggleLabel}>
      {languageOptions.map((option) => (
        <button
          key={option}
          type="button"
          className={`language-option ${option === language ? 'language-option-active' : ''}`}
          aria-pressed={option === language}
          onClick={() => onLanguageChange(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function IconButton({
  label,
  children,
  onClick,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`grid h-10 w-10 place-items-center rounded-lg border border-ink-900/10 bg-white text-ink-800 shadow-sm transition hover:border-accent-500 hover:text-accent-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:text-accent-400 ${className}`}
    >
      {children}
    </button>
  );
}

function Hero({ content }: { content: SiteContent }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.22),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(245,158,11,0.16),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="animate-reveal">
          <p className="eyebrow">{content.profile.heroEyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] tracking-normal text-ink-950 dark:text-white sm:text-6xl lg:text-7xl">
            {content.profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-accent-600 dark:text-accent-400">{content.profile.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700 dark:text-ink-200">{content.profile.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={profileAssets.cvUrl} download className="button-primary">
              <Download className="h-5 w-5" />
              {content.buttons.downloadCv}
            </a>
            <a href="#contact" className="button-secondary">
              <Mail className="h-5 w-5" />
              {content.buttons.contactMe}
            </a>
            <a href="#projects" className="button-ghost">
              <ArrowDown className="h-5 w-5" />
              {content.buttons.viewProjects}
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {content.highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-ink-900/10 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-200">{item.label}</p>
                <p className="mt-2 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent-500/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-4 shadow-glow dark:border-white/10 dark:bg-white/5">
            <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(135deg,#0f172a,#115e59_50%,#d97706)] p-6 text-white">
              <div className="flex h-full flex-col justify-between rounded-lg border border-white/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur">{content.profile.profileCardLabel}</span>
                  <span className="h-3 w-3 rounded-full bg-accent-400" />
                </div>
                <div className="animate-float">
                  <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border border-white/30 bg-white/10 shadow-2xl backdrop-blur">
                    <img src={profileAssets.imageUrl} alt={content.profile.imageAlt} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-black">{content.profile.name}</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{content.profile.profileCardText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ content }: { content: SiteContent }) {
  return (
    <Section id="about" eyebrow={content.sections.about.eyebrow} title={content.sections.about.title}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-panel">
          <p className="text-lg leading-8 text-ink-700 dark:text-ink-200">{content.profile.bio}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.aboutBullets.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-ink-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-accent-600 dark:text-accent-400" />
              <p className="font-semibold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills({ content }: { content: SiteContent }) {
  return (
    <Section id="skills" eyebrow={content.sections.skills.eyebrow} title={content.sections.skills.title}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          const groupText = content.skillGroups[group.id];
          return (
            <article key={group.id} className="card group">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-accent-500/10 text-accent-600 transition group-hover:bg-accent-500 group-hover:text-white dark:text-accent-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{groupText.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {groupText.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Projects({ content }: { content: SiteContent }) {
  return (
    <Section id="projects" eyebrow={content.sections.projects.eyebrow} title={content.sections.projects.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => {
          const projectText = content.projects[project.id];
          return (
            <article key={project.id} className="project-card group">
              <ProjectSlideshow project={project} content={content} />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-black tracking-normal">{projectText.title}</h3>
                <ArrowUpRight className="h-6 w-6 flex-none text-accent-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-accent-400" />
              </div>
              <p className="mt-4 leading-7 text-ink-700 dark:text-ink-200">{projectText.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.sourceUrl && (
                  <a href={project.sourceUrl} className="project-link" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    {content.buttons.source}
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    {content.buttons.liveDemo}
                  </a>
                )}
                {project.artifacts?.map((artifact) => (
                  <a key={artifact.url} href={artifact.url} className="project-link" target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    {getArtifactLabel(projectText, artifact.id) ?? content.buttons.openProject}
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function getArtifactLabel(projectText: SiteContent['projects'][ProjectId], artifactId: string) {
  return (projectText as { artifacts?: Record<string, string> }).artifacts?.[artifactId];
}

function ProjectSlideshow({ project, content }: { project: Project; content: SiteContent }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = project.images.length > 1;
  const activeImage = project.images[activeIndex];
  const projectText = content.projects[project.id];
  const imageAlt = projectText.images[activeImage.id as keyof typeof projectText.images];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? project.images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % project.images.length);
  };

  return (
    <div className={`mb-6 overflow-hidden rounded-lg bg-gradient-to-br ${project.accent} p-1`}>
      <div className="relative aspect-video overflow-hidden rounded-md bg-white/85 p-3 dark:bg-ink-950/60">
        <img src={activeImage.url} alt={imageAlt} className="h-full w-full object-contain" loading="lazy" />
        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="slideshow-button left-3"
              aria-label={`${content.slideshow.showPrevious} ${projectText.title}`}
              title={content.slideshow.previous}
              onClick={showPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="slideshow-button right-3"
              aria-label={`${content.slideshow.showNext} ${projectText.title}`}
              title={content.slideshow.next}
              onClick={showNext}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {project.images.map((image, index) => (
                <button
                  key={image.url}
                  type="button"
                  className={`h-2 rounded-full transition ${
                    index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/55 hover:bg-white/80'
                  }`}
                  aria-label={`${content.slideshow.showImage} ${index + 1} ${projectText.title}`}
                  title={`${content.slideshow.image} ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function TimelineSection<TId extends ExperienceId | EducationId>({
  id,
  eyebrow,
  title,
  description,
  icon,
  items,
  text,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: { id: TId }[];
  text: Record<TId, { title: string; organization: string; period: string; description: string; tags: readonly string[] }>;
}) {
  return (
    <Section id={id} eyebrow={eyebrow} title={title} description={description}>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-ink-900/10 dark:bg-white/10 sm:left-1/2" />
        <div className="grid gap-8">
          {items.map((item, index) => {
            const itemText = text[item.id];
            return (
              <article key={item.id} className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${index % 2 === 0 ? '' : 'sm:[&>div]:col-start-2'}`}>
                <div className="timeline-dot">{icon}</div>
                <div className="ml-12 rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:ml-0">
                  <p className="text-sm font-bold text-accent-700 dark:text-accent-400">{itemText.period}</p>
                  <h3 className="mt-2 text-xl font-black">{itemText.title}</h3>
                  <p className="mt-1 font-semibold text-ink-600 dark:text-ink-300">{itemText.organization}</p>
                  <p className="mt-4 leading-7 text-ink-700 dark:text-ink-200">{itemText.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {itemText.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Blog({ content }: { content: SiteContent }) {
  return (
    <Section id="blog" eyebrow={content.sections.blog.eyebrow} title={content.sections.blog.title}>
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => {
          const Icon = post.icon;
          const postText = content.blogPosts[post.id as BlogPostId];
          return (
            <article key={post.id} className="card">
              <Icon className="h-7 w-7 text-signal-600 dark:text-signal-500" />
              <h3 className="mt-5 text-xl font-black">{postText.title}</h3>
              <p className="mt-3 leading-7 text-ink-700 dark:text-ink-200">{postText.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Contact({ content }: { content: SiteContent }) {
  return (
    <Section id="contact" eyebrow={content.sections.contact.eyebrow} title={content.sections.contact.title}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const linkText = content.contactLinks[link.id as ContactLinkId];
            return (
              <a key={link.id} href={link.href} className="flex items-center gap-4 rounded-lg border border-ink-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent-500 dark:border-white/10 dark:bg-white/5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-500 dark:text-ink-300">{linkText.label}</span>
                  <span className="break-all font-semibold">{linkText.value}</span>
                </span>
                <ExternalLink className="ml-auto h-4 w-4 text-ink-400" />
              </a>
            );
          })}
        </div>
        <form className="section-panel" action={`mailto:${content.profile.email}`} method="post" encType="text/plain">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              {content.contactForm.nameLabel}
              <input className="field" name="name" autoComplete="name" placeholder={content.contactForm.namePlaceholder} required />
            </label>
            <label className="field-label">
              {content.contactForm.emailLabel}
              <input className="field" type="email" name="email" autoComplete="email" placeholder={content.contactForm.emailPlaceholder} required />
            </label>
          </div>
          <label className="field-label mt-5">
            {content.contactForm.messageLabel}
            <textarea className="field min-h-36 resize-y" name="message" placeholder={content.contactForm.messagePlaceholder} required />
          </label>
          <button type="submit" className="button-primary mt-6">
            <Send className="h-5 w-5" />
            {content.buttons.sendMessage}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink-950 dark:text-white sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-lg leading-8 text-ink-700 dark:text-ink-200">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-ink-900/10 px-5 py-8 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-ink-600 dark:text-ink-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {content.profile.name}. {content.footer.builtWith}</p>
        <div className="flex gap-4">
          {contactLinks.filter((link) => link.id !== 'location').map((link) => {
            const linkText = content.contactLinks[link.id as Exclude<ContactLinkId, 'location'>];
            return (
              <a key={link.id} href={link.href} className="font-semibold hover:text-accent-600 dark:hover:text-accent-400">
                {linkText.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default App;
