import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Workout Library",
    description:
      "Users can browse a collection of workouts covering different muscle groups. Workout information is loaded dynamically from the FitLog REST API.",
  },
  {
    number: "02",
    title: "Workout Details",
    description:
      "Users can view detailed workout information, including muscle groups, equipment, difficulty, sets and reps, duration, calories burned, ratings, and exercise instructions.",
  },
  {
    number: "03",
    title: "My Plan",
    description:
      "Users can create a daily workout plan with a maximum of five exercises, remove workouts, mark exercises as completed, and view total exercises, minutes, and calories.",
  },
  {
    number: "04",
    title: "Save Workouts",
    description:
      "Users can save their favorite workouts for later and access them from the Saved section. Saved workouts can also be removed whenever needed.",
  },
  {
    number: "05",
    title: "Workout Sorting",
    description:
      "Users can sort workouts by duration, calories burned, or rating to find exercises that better match their workout preferences.",
  },
  {
    number: "06",
    title: "Toast Notifications",
    description:
      "Interactive feedback helps users understand when workout-related actions, such as adding or removing exercises, have been performed.",
  },
  {
    number: "07",
    title: "Persistent Workout Data",
    description:
      "LocalStorage keeps workout plans and saved workouts available between browser sessions on the same browser and device.",
  },
  {
    number: "08",
    title: "Responsive Interface",
    description:
      "The application adapts to desktop, tablet, and mobile screens with responsive navigation, workout cards, and a custom 404 page.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Lucide React",
  "REST API",
  "LocalStorage",
  "Git",
  "GitHub",
  "Vercel",
];

const challenges = [
  {
    title: "Integrating the REST API",
    description:
      "Connecting the interface to workout endpoints required retrieving data and presenting workout information in a clear, organized, and user-friendly layout.",
  },
  {
    title: "Managing Workout Plans",
    description:
      "Implementing the five-exercise limit, adding and removing workouts, tracking completion status, and calculating workout summaries required careful state management.",
  },
  {
    title: "Persisting User Selections",
    description:
      "Using LocalStorage to preserve saved workouts and daily plans helped maintain user selections between browser sessions without requiring a separate database.",
  },
];

const futurePlans = [
  "Add workout progress charts to help users visualize their fitness activities.",
  "Introduce more workout categories and filtering options.",
  "Improve workout recommendations based on user preferences.",
  "Explore weekly workout planning and progress summaries.",
  "Continue improving accessibility and the mobile user experience.",
];

export default function FitLogProjectPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Top navigation */}
      <header className="border-b border-white/[0.08] bg-[#050505]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            Kashpia<span className="text-[#A259FF]">.</span>
          </Link>

          <Link
            href="/#projects"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#D4B5FF] transition hover:border-[#A259FF]/50 hover:bg-[#A259FF]/10"
          >
            ← All Projects
          </Link>
        </nav>
      </header>

      {/* Project hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#7928CA]/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#A259FF]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-[#B066FF]">
              PROJECT 02 · WEB APPLICATION
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              FitLog<span className="text-[#A259FF]">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#B7AFBF]">
              A responsive workout library and workout planning web
              application that helps users discover exercises, explore
              detailed workout information, create daily workout plans, save
              favorite exercises, and organize their fitness routines.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "REST API",
                "LocalStorage",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#A259FF]/25 bg-[#A259FF]/10 px-3 py-2 text-xs text-[#D4B5FF]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://fit-log-omega-indol.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#873BDA] to-[#A259FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#A259FF]/20"
              >
                Visit Live Website ↗
              </a>

              <a
                href="https://github.com/Kashpia-Tasnova/Fit-Log"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#A259FF]/50 hover:bg-[#A259FF]/10"
              >
                View GitHub Repository ↗
              </a>
            </div>
          </div>

          {/* Project screenshot */}
          <div className="overflow-hidden rounded-3xl border border-[#A259FF]/25 bg-[#100B17] p-3 sm:p-4">
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#08060B]">
              <Image
                src="/projects/fitlog.png"
                alt="FitLog workout library and planning application screenshot"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="block h-auto w-full"
                priority
              />
            </div>

            <p className="px-2 pb-1 pt-4 text-center text-xs text-[#AAA4B3]">
              FitLog — workout library and planning application
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#B066FF]">
              PROJECT OVERVIEW
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              About the Project
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[#AAA4B3] sm:text-base">
            <p>
              FitLog is a responsive workout library and workout planning
              application built with Next.js. It provides a convenient way
              for users to discover exercises, explore their details, and
              organize their daily fitness activities.
            </p>

            <p>
              The application retrieves workout information through a REST
              API. Users can explore different muscle groups, review equipment
              and exercise instructions, and compare workout duration,
              estimated calories burned, and ratings.
            </p>

            <p>
              FitLog also includes a personal workout plan with a maximum of
              five exercises, workout completion tracking, saved workouts,
              and sorting options. LocalStorage preserves workout plans and
              saved items between browser sessions on the same device and
              browser.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/[0.06] bg-[#09080C] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="WHAT IT CAN DO"
            title="Key Features"
            description="The main features implemented in FitLog to make workout discovery and planning easier."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-white/[0.08] bg-[#0D0C11] p-6 transition hover:border-[#A259FF]/40"
              >
                <span className="text-sm font-semibold text-[#B066FF]">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#AAA4B3]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="TOOLS & TECHNOLOGIES"
            title="Technology Stack"
            description="Technologies and tools used to build, style, and deploy the FitLog application."
          />

          <div className="mt-9 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-[#0D0C11] px-4 py-3 text-sm text-[#D2C6E2] transition hover:border-[#A259FF]/40 hover:bg-[#A259FF]/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Development challenges */}
      <section className="border-y border-white/[0.06] bg-[#09080C] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="LESSONS LEARNED"
            title="Development Challenges"
            description="Important areas that required attention while developing FitLog."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0D0C11] p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A259FF]/25 bg-[#A259FF]/10 text-sm font-bold text-[#D4B5FF]">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {challenge.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#AAA4B3]">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Future improvements */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#B066FF]">
              WHAT COMES NEXT
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Future Improvements
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#AAA4B3]">
              FitLog can be extended with additional fitness features to help
              users organize workouts and understand their progress over time.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#0A090D] p-6 sm:p-8">
            <ul className="space-y-5">
              {futurePlans.map((plan) => (
                <li key={plan} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A259FF]/15 text-xs text-[#D4B5FF]">
                    +
                  </span>

                  <span className="text-sm leading-7 text-[#C1B8CB]">
                    {plan}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Project links */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#A259FF]/25 bg-gradient-to-br from-[#1B1028] to-[#0A090D] p-8 sm:p-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#B066FF]">
            EXPLORE THE PROJECT
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            See FitLog in action.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#AAA4B3]">
            Visit the live application to explore the workout library and
            planning features, or browse the source code on GitHub.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://fit-log-omega-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#873BDA] to-[#A259FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Live Project ↗
            </a>

            <a
              href="https://github.com/Kashpia-Tasnova/Fit-Log"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#A259FF]/50 hover:bg-[#A259FF]/10"
            >
              GitHub Repository ↗
            </a>

            <Link
              href="/#projects"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#A259FF]/50 hover:bg-[#A259FF]/10"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-xs text-[#8F8799] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Kashpia Tasnova.</p>

          <Link href="/" className="transition hover:text-[#D4B5FF]">
            Back to Home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.22em] text-[#B066FF]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
        <span className="text-[#A259FF]">.</span>
      </h2>

      <p className="mt-4 text-sm leading-8 text-[#AAA4B3] sm:text-base">
        {description}
      </p>
    </div>
  );
}