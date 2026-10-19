"use client";

import Image from "next/image";
import { useState } from "react";

const skills = [
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "REST APIs", "Authentication", "MongoDB"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
];

const projects = [
  {
    number: "01",
    name: "BazarDor",
    category: "WEB APPLICATION",
    description:
      "A market-price platform designed to help people explore essential product prices and compare market information.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    href: "/projects/bazardor",
    visual: "from-violet-950 via-[#24133c] to-black",
    symbol: "৳",
  },
  {
    number: "02",
    name: "FitLog",
    category: "FITNESS APPLICATION",
    description:
      "A fitness application for exploring workouts, viewing exercise details, and organizing a personal workout plan.",
    stack: "Next.js · React · Tailwind CSS",
    href: "/projects/fitlog",
    visual: "from-[#241238] via-[#151020] to-black",
    symbol: "↗",
  },
  {
    number: "03",
    name: "Tomato Leaf Disease Detection",
    category: "AI / DEEP LEARNING",
    description:
      "An explainable deep-learning project exploring tomato leaf disease classification using transfer learning and XAI.",
    stack: "Python · TensorFlow · SHAP · LIME",
    href: "/projects/tomato-leaf-detection",
    visual: "from-[#30143d] via-[#1b1026] to-black",
    symbol: "✳",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Kashpia-Tasnova",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kashpia-tasnova-380ab2386",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Kashpia2580",
    icon: "facebook",
  },
] as const;

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function SocialIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: (typeof socialLinks)[number]["icon"];
  className?: string;
}) {
  if (icon === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.61 1.22 3.25.93.1-.73.39-1.22.71-1.5-2.5-.28-5.14-1.25-5.14-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.16 3.08-1.16.62 1.55.23 2.7.11 2.99.73.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.29-5.16 5.57.41.36.77 1.04.77 2.1v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"
        />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.35H4.96V9.02h2.97v9.33ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.6h-2.96v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.62H9.3V9.02h2.84v1.28h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.55 1.97 3.55 4.53v5.02Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.4c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.28h3.34l-.53 3.49h-2.81V24C19.61 23.09 24 18.09 24 12.07Z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2a9.83 9.83 0 0 0-8.4 14.93L2.3 22l5.2-1.36A9.95 9.95 0 0 0 12.04 22h.01a10 10 0 0 0 0-20Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.83-3.01-.2-.31A8.17 8.17 0 1 1 12.04 20.18Zm4.49-6.12c-.25-.13-1.47-.73-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.64.81-.78.98-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-.1-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.39.11-.52.12-.11.25-.29.38-.43.13-.15.17-.25.25-.42.09-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.08s.9 2.41 1.03 2.58c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.42 1.43.54.6.19 1.15.16 1.59.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

const education = [
  {
    level: "BACHELOR'S DEGREE",
    qualification: "B.Sc. in Computer Science and Engineering",
    institution: "International Islamic University Chittagong",
    description:
      "Studied computer science and engineering, developing knowledge of software development, programming, databases, and emerging technologies.",
  },
  {
    level: "HIGHER SECONDARY CERTIFICATE",
    qualification: "Higher Secondary Certificate (HSC)",
    institution: "Bangladesh Mahila Samiti Girls' High School and College",
    description:
      "Completed higher secondary education and built a foundation for further academic study.",
  },
  {
    level: "SECONDARY SCHOOL CERTIFICATE",
    qualification: "Secondary School Certificate (SSC)",
    institution: "Aunkur Society Girls' High School",
    description:
      "Completed secondary education and developed the academic foundation for higher studies.",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-[#E5E5EA] selection:bg-[#A259FF]/40">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <div className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-7">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-[#B8B3C0] transition hover:text-[#C28AFF] xl:text-[11px]"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden shrink-0 rounded-full border border-[#A259FF]/50 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-[#B066FF] hover:bg-[#A259FF]/15 sm:inline-flex"
          >
            LET&apos;S TALK <span className="ml-2 text-[#B066FF]">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-white transition hover:border-[#A259FF]/50 lg:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-[#D1D1D6] transition hover:bg-[#A259FF]/10 hover:text-white"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg border border-[#A259FF]/40 px-4 py-3 text-sm text-[#D4B5FF]"
              >
                Let&apos;s Talk ↗
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl scroll-mt-24 items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#873BDA]/15 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#A259FF]/10 blur-[120px]" />

        <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="animate-[fadeUp_0.8s_ease-out_both]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#A259FF]/25 bg-[#A259FF]/[0.07] px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#B066FF] shadow-[0_0_12px_#B066FF]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#C9A6F0]">
                Full-Stack Web Developer
              </span>
            </div>

            <p className="mb-4 text-sm tracking-[0.18em] text-[#B8B0C2]">
              HELLO, I&apos;M
            </p>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl xl:text-[84px]">
              Kashpia
              <br />
              <span className="bg-gradient-to-r from-[#D4B5FF] via-[#B066FF] to-[#8E4BE8] bg-clip-text text-transparent">
                Tasnova.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-[#E5E0EA] sm:text-2xl">
              Full-Stack Developer
              <span className="text-[#A259FF]"> &amp; </span>
              AI Enthusiast
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#AAA4B3] sm:text-base sm:leading-8">
              I build modern, responsive web applications from frontend
              interfaces to backend functionality. I enjoy solving real-world
              problems with clean code, thoughtful design, and emerging
              technologies.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#A259FF] to-[#873BDA] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_#A259FF30] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_#A259FF65]"
              >
                Explore My Work
                <span className="ml-3 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="/kashpia%20tasnova%20resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#B066FF]/70 hover:bg-[#A259FF]/10"
              >
                Download Resume
                <span className="ml-3 text-[#B066FF]">↓</span>
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="mr-1 text-[10px] font-semibold tracking-[0.2em] text-[#81788D]">
                FIND ME ON
              </span>

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  title={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#C3BDCB] transition duration-300 hover:-translate-y-1 hover:border-[#B066FF]/60 hover:bg-[#A259FF]/15 hover:text-[#D4B5FF] hover:shadow-[0_0_20px_#A259FF20]"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* PROFILE PHOTO — NO TEXT OVERLAYS */}
          <div className="relative mx-auto w-full max-w-[390px] animate-[fadeUp_1s_ease-out_both] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#A259FF]/20 via-transparent to-[#C882F0]/10 blur-2xl" />

            <div className="relative rounded-[1.8rem] border border-[#B066FF]/25 bg-gradient-to-br from-[#21142E] to-black p-3 shadow-[0_0_70px_#A259FF12]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem] bg-[radial-gradient(ellipse_at_50%_35%,#6B388B_0%,#25142F_38%,#000000_78%)]">
                <Image
                  src="/Polished%20Purple-Halo%20Hijab%20Portrait.png"
                  alt="Portrait of Kashpia Tasnova"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 390px, 390px"
                  className="object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

                <div className="pointer-events-none absolute inset-0 rounded-[1.3rem] border border-white/[0.04]" />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] tracking-[0.25em] text-[#81788D] transition hover:text-[#C28AFF] md:flex"
        >
          SCROLL TO EXPLORE
          <span className="animate-bounce text-lg">↓</span>
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/[0.06] bg-black px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#B066FF]">
              01 / ABOUT ME
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A little about
              <br />
              <span className="text-[#B066FF]">who I am.</span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[#AAA4B3] sm:text-base">
            <p>
              I&apos;m a Full-Stack Developer and AI enthusiast who enjoys
              combining technology, creativity, and problem-solving to build
              useful web experiences. My journey into programming has encouraged
              me to keep learning, experiment with new tools, and improve with
              every project.
            </p>

            <p>
              I particularly enjoy full-stack development, creating responsive
              user interfaces, building backend functionality, integrating APIs,
              and working with databases. I also explore machine learning to
              understand how intelligent systems can solve practical problems.
            </p>

            <p>
              Outside programming, I value continuous learning, creative
              exploration, and discovering new ideas. I believe curiosity,
              patience, and consistency are important parts of becoming a better
              developer.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#C28AFF] hover:text-white"
            >
              Let&apos;s connect <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-24 bg-black px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.25em] text-[#B066FF]">
            02 / MY TOOLKIT
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Skills &amp; <span className="text-[#B066FF]">technologies.</span>
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#92899E]">
              The tools and technologies I use to bring ideas to life and
              continue growing as a developer.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <div
                key={group.title}
                className="group rounded-2xl border border-white/[0.08] bg-[#090909] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A259FF]/40 hover:shadow-[0_15px_50px_#A259FF0B]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#B066FF]">
                    0{index + 1}
                  </span>
                  <span className="text-xl text-[#9D7CC1]">✳</span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-[#C7C0D0] transition hover:border-[#A259FF]/40 hover:text-[#D4B5FF]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 bg-black px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.25em] text-[#B066FF]">
            03 / SELECTED WORK
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Things I&apos;ve <span className="text-[#B066FF]">built.</span>
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#92899E]">
              A selection of projects that reflect my learning, technical
              interests, and approach to solving problems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808] transition duration-300 hover:-translate-y-1.5 hover:border-[#A259FF]/40 hover:shadow-[0_20px_55px_#A259FF10]"
              >
                <div
                  className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.visual}`}
                >
                  <div className="absolute h-36 w-36 rounded-full bg-[#A259FF]/20 blur-3xl transition duration-500 group-hover:bg-[#A259FF]/35" />
                  <div className="absolute inset-4 rounded-xl border border-white/[0.08]" />

                  <span className="relative text-7xl font-light text-white/90 transition duration-500 group-hover:scale-110 group-hover:text-[#D4B5FF]">
                    {project.symbol}
                  </span>

                  <span className="absolute left-6 top-6 text-xs tracking-[0.2em] text-[#C28AFF]">
                    PROJECT {project.number}
                  </span>
                  <span className="absolute bottom-6 right-6 text-xs text-white/50">
                    ↗
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#B066FF]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#AAA4B3]">
                    {project.description}
                  </p>
                  <p className="mt-4 border-t border-white/[0.07] pt-4 text-xs text-[#9D7CC1]">
                    {project.stack}
                  </p>
                  <a
                    href={project.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#C28AFF]"
                  >
                    View Project Details <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & GROWTH */}
      <section
        id="experience"
        className="scroll-mt-24 border-y border-white/[0.06] bg-black px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.25em] text-[#B066FF]">
            04 / MY JOURNEY
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Experience &amp; <span className="text-[#B066FF]">growth.</span>
          </h2>

          <div className="mt-12 space-y-12">
            {/* INTERNSHIP */}
            <div className="grid gap-6 md:grid-cols-[180px_1fr]">
              <div>
                <p className="text-sm font-medium text-[#C28AFF]">
                  INTERNSHIP
                </p>
                <p className="mt-2 text-xs text-[#81788D]">
                  Software Development
                </p>
              </div>

              <div className="border-l border-[#A259FF]/50 pl-6">
                <span className="mb-4 block h-3 w-3 -translate-x-[30px] rounded-full bg-[#B066FF] shadow-[0_0_18px_#B066FF]" />

                <h3 className="text-xl font-semibold text-white">
                  Software Development Intern
                </h3>

                <p className="mt-2 text-sm text-[#9D7CC1]">Diligite</p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#AAA4B3]">
                  Worked as an intern in the Software Development Department at
                  Diligite, gaining practical exposure to software development
                  workflows and the professional working environment. This
                  experience helped me connect my academic knowledge with
                  practical development work and continue growing my technical
                  skills.
                </p>
              </div>
            </div>

            {/* PERSONAL PROJECTS */}
            <div className="grid gap-6 md:grid-cols-[180px_1fr]">
              <div>
                <p className="text-sm font-medium text-[#C28AFF]">
                  ONGOING
                </p>
                <p className="mt-2 text-xs text-[#81788D]">
                  Continuous Learning
                </p>
              </div>

              <div className="border-l border-[#A259FF]/50 pl-6">
                <span className="mb-4 block h-3 w-3 -translate-x-[30px] rounded-full bg-[#B066FF] shadow-[0_0_18px_#B066FF]" />

                <h3 className="text-xl font-semibold text-white">
                  Learning &amp; Personal Projects
                </h3>

                <p className="mt-2 text-sm text-[#9D7CC1]">
                  Full-Stack Development · AI Exploration
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#AAA4B3]">
                  Developing practical web applications, strengthening
                  frontend and backend skills, working with APIs and
                  databases, and exploring machine learning concepts through
                  academic and personal projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="scroll-mt-24 bg-black px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.25em] text-[#B066FF]">
            05 / EDUCATION
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            My academic <span className="text-[#B066FF]">background.</span>
          </h2>

          <div className="mt-12 space-y-5">
            {education.map((item, index) => (
              <article
                key={item.level}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808] p-6 transition duration-300 hover:border-[#A259FF]/40 hover:bg-[#0B0710] sm:p-8"
              >
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#B066FF] to-[#5D279D] opacity-70 transition group-hover:opacity-100" />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#A259FF]/25 bg-[#A259FF]/10 text-lg font-semibold text-[#D4B5FF]">
                    0{index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#B066FF]">
                      {item.level}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                      {item.qualification}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-6 text-[#C28AFF]">
                      {item.institution}
                    </p>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[#AAA4B3]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-black px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#873BDA]/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#B066FF]">
              06 / GET IN TOUCH
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Have an idea?
              <br />
              <span className="text-[#B066FF]">Let&apos;s build it.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#AAA4B3]">
              Interested in working together, discussing a project, or sharing
              ideas? Feel free to reach out. I&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  title={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#C3BDCB] transition hover:border-[#B066FF]/60 hover:bg-[#A259FF]/15 hover:text-[#D4B5FF]"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {/* EMAIL */}
            <a
              href="mailto:kashpiatasnova@gmail.com"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#080808] p-5 transition hover:border-[#A259FF]/40 hover:bg-[#0B0710] sm:p-6"
            >
              <div className="min-w-0">
                <p className="text-xs tracking-[0.15em] text-[#9D7CC1]">
                  EMAIL ME
                </p>
                <p className="mt-2 break-all text-sm text-white transition group-hover:text-[#D4B5FF] sm:text-base">
                  kashpiatasnova@gmail.com
                </p>
              </div>
              <span className="shrink-0 text-xl text-[#B066FF] transition group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+8801776893440"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#080808] p-5 transition hover:border-[#A259FF]/40 hover:bg-[#0B0710] sm:p-6"
            >
              <div>
                <p className="text-xs tracking-[0.15em] text-[#9D7CC1]">
                  CALL ME
                </p>
                <p className="mt-2 text-sm text-white transition group-hover:text-[#D4B5FF] sm:text-base">
                  +880 1776-893440
                </p>
              </div>
              <span className="shrink-0 text-xl text-[#B066FF] transition group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/8801776893440"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact me on WhatsApp"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#080808] p-5 transition hover:border-[#A259FF]/40 hover:bg-[#0B0710] sm:p-6"
            >
              <div>
                <p className="text-xs tracking-[0.15em] text-[#9D7CC1]">
                  WHATSAPP
                </p>
                <p className="mt-2 text-sm text-white transition group-hover:text-[#D4B5FF] sm:text-base">
                  +880 1776-893440
                </p>
                <p className="mt-1 text-xs text-[#81788D]">
                  Message me on WhatsApp
                </p>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#A259FF]/30 bg-[#A259FF]/10 text-[#C28AFF] transition group-hover:bg-[#A259FF]/20 group-hover:text-white">
                <WhatsAppIcon />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] bg-black px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span className="text-sm font-semibold text-white">
              Kashpia Tasnova
            </span>
            <span className="h-1 w-1 rounded-full bg-[#B066FF]" />
            <span className="text-xs text-[#9D7CC1]">
              Full-Stack Developer
            </span>
          </div>

          <p className="text-xs text-[#81788D]">
            © {new Date().getFullYear()} Kashpia Tasnova. Built with Next.js.
          </p>

          {/* VIOLET BACK TO TOP BUTTON */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-full border border-[#A259FF]/40 bg-gradient-to-r from-[#873BDA]/25 to-[#A259FF]/20 px-5 py-3 text-xs font-semibold text-[#D4B5FF] shadow-[0_0_20px_#A259FF12] transition duration-300 hover:-translate-y-1 hover:border-[#B066FF]/70 hover:from-[#873BDA]/40 hover:to-[#A259FF]/35 hover:text-white hover:shadow-[0_0_28px_#A259FF30]"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}