import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
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
import {
  blogPosts,
  contactLinks,
  education,
  experience,
  highlights,
  navItems,
  profile,
  projects,
  skillGroups,
  structuredData,
  type TimelineItem,
} from './data/portfolio';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const jsonLd = useMemo(() => JSON.stringify(structuredData), []);

  return (
    <div className="min-h-screen bg-stone-50 text-ink-900 antialiased transition-colors duration-300 dark:bg-ink-950 dark:text-ink-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Header
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((current) => !current)}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TimelineSection
          id="experience"
          eyebrow="Professional timeline"
          title="Experience"
          description="Structured placeholders for internships, work experience, research collaborations, and student jobs."
          icon={<BriefcaseBusiness className="h-5 w-5" />}
          items={experience}
        />
        <TimelineSection
          id="education"
          eyebrow="Academic profile"
          title="Education"
          description="Education and certification entries are built as reusable timeline items so future credentials are easy to add."
          icon={<GraduationCap className="h-5 w-5" />}
          items={education}
        />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header({
  theme,
  onThemeToggle,
  isMenuOpen,
  onMenuToggle,
  onNavigate,
}: {
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
          <span className="hidden sm:block">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <IconButton label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={onThemeToggle}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </IconButton>
          <a href="#contact" className="hidden rounded-lg bg-ink-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-600 dark:bg-white dark:text-ink-950 dark:hover:bg-accent-400 lg:inline-flex">
            Contact
          </a>
          <IconButton label="Open navigation menu" onClick={onMenuToggle} className="lg:hidden">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </IconButton>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-ink-900/10 bg-stone-50 px-5 py-4 dark:border-white/10 dark:bg-ink-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
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

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.22),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(245,158,11,0.16),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="animate-reveal">
          <p className="eyebrow">Available for software engineering, AI, and game development roles</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] tracking-normal text-ink-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-accent-600 dark:text-accent-400">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700 dark:text-ink-200">{profile.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={profile.cvUrl} download className="button-primary">
              <Download className="h-5 w-5" />
              Download CV
            </a>
            <a href="#contact" className="button-secondary">
              <Mail className="h-5 w-5" />
              Contact Me
            </a>
            <a href="#projects" className="button-ghost">
              <ArrowDown className="h-5 w-5" />
              View Projects
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
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
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur">Profile</span>
                  <span className="h-3 w-3 rounded-full bg-accent-400" />
                </div>
                <div className="animate-float">
                  <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border border-white/30 bg-white/10 text-5xl font-black shadow-2xl backdrop-blur">
                    HR
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-black">{profile.name}</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">Replace this block with a profile photo when ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineering interactive systems from idea to implementation">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-panel">
          <p className="text-lg leading-8 text-ink-700 dark:text-ink-200">{profile.bio}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Artificial intelligence and speech recognition',
            'Machine learning and neural systems',
            'Unity game development and simulation',
            'Clean, maintainable software architecture',
          ].map((item) => (
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

function Skills() {
  return (
    <Section id="skills" eyebrow="Technical profile" title="Skills grouped by how they create value">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.title} className="card group">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-accent-500/10 text-accent-600 transition group-hover:bg-accent-500 group-hover:text-white dark:text-accent-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
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

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Portfolio projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="project-card group">
            <div className={`mb-6 aspect-video rounded-lg bg-gradient-to-br ${project.accent} p-5 text-white`}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-white/20 bg-black/10 p-4 backdrop-blur-[2px]">
                <span className="w-fit rounded-lg bg-white/20 px-3 py-2 text-sm font-semibold">Screenshot placeholder</span>
                <span className="text-2xl font-black leading-tight">{project.title}</span>
              </div>
            </div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-black tracking-normal">{project.title}</h3>
              <ArrowUpRight className="h-6 w-6 flex-none text-accent-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-accent-400" />
            </div>
            <p className="mt-4 leading-7 text-ink-700 dark:text-ink-200">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.githubUrl} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent-700 hover:text-accent-600 dark:text-accent-400" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub placeholder
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function TimelineSection({
  id,
  eyebrow,
  title,
  description,
  icon,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: TimelineItem[];
}) {
  return (
    <Section id={id} eyebrow={eyebrow} title={title} description={description}>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-ink-900/10 dark:bg-white/10 sm:left-1/2" />
        <div className="grid gap-8">
          {items.map((item, index) => (
            <article key={`${item.title}-${item.organization}`} className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${index % 2 === 0 ? '' : 'sm:[&>div]:col-start-2'}`}>
              <div className="timeline-dot">{icon}</div>
              <div className="ml-12 rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:ml-0">
                <p className="text-sm font-bold text-accent-700 dark:text-accent-400">{item.period}</p>
                <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                <p className="mt-1 font-semibold text-ink-600 dark:text-ink-300">{item.organization}</p>
                <p className="mt-4 leading-7 text-ink-700 dark:text-ink-200">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Blog() {
  return (
    <Section id="blog" eyebrow="Optional writing" title="Blog ideas">
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => {
          const Icon = post.icon;
          return (
            <article key={post.title} className="card">
              <Icon className="h-7 w-7 text-signal-600 dark:text-signal-500" />
              <h3 className="mt-5 text-xl font-black">{post.title}</h3>
              <p className="mt-3 leading-7 text-ink-700 dark:text-ink-200">{post.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something technically interesting">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} className="flex items-center gap-4 rounded-lg border border-ink-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent-500 dark:border-white/10 dark:bg-white/5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-500 dark:text-ink-300">{link.label}</span>
                  <span className="break-all font-semibold">{link.value}</span>
                </span>
                <ExternalLink className="ml-auto h-4 w-4 text-ink-400" />
              </a>
            );
          })}
        </div>
        <form className="section-panel" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input className="field" name="name" autoComplete="name" placeholder="Your name" required />
            </label>
            <label className="field-label">
              Email
              <input className="field" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
          </div>
          <label className="field-label mt-5">
            Message
            <textarea className="field min-h-36 resize-y" name="message" placeholder="Tell me about the role, project, or collaboration." required />
          </label>
          <button type="submit" className="button-primary mt-6">
            <Send className="h-5 w-5" />
            Send Message
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

function Footer() {
  return (
    <footer className="border-t border-ink-900/10 px-5 py-8 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-ink-600 dark:text-ink-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Tailwind CSS.</p>
        <div className="flex gap-4">
          <a href={profile.github} className="font-semibold hover:text-accent-600 dark:hover:text-accent-400">GitHub</a>
          <a href={profile.linkedin} className="font-semibold hover:text-accent-600 dark:hover:text-accent-400">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="font-semibold hover:text-accent-600 dark:hover:text-accent-400">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
