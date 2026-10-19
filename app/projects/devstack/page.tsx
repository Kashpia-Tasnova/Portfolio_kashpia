
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Explore Technologies",
    description:
      "Browse technologies from different categories, including Frontend, Backend, Database, Language, Styling, and DevOps, to discover tools used in web development.",
  },
  {
    number: "02",
    title: "Build Your Technology Stack",
    description:
      "Create a personalized technology stack by selecting the technologies you want to use in your projects.",
  },
  {
    number: "03",
    title: "Add and Remove Technologies",
    description:
      "Manage your selected stack by adding new technologies or removing items whenever your project requirements change.",
  },
  {
    number: "04",
    title: "Prevent Duplicate Selections",
    description:
      "The application checks existing selections and prevents the same technology from being added to the stack more than once.",
  },
  {
    number: "05",
    title: "Interactive Notifications",
    description:
      "Toast notifications provide immediate feedback when a technology is added, removed, or selected more than once.",
  },
  {
    number: "06",
    title: "Dynamic Technology Data",
    description:
      "Technology information is loaded from JSON data, making it easier to organize and display technologies across different categories.",
  },
  {
    number: "07",
    title: "Interactive React Interface",
    description:
      "React state and hooks manage technology selections, loading status, and changes to the user interface.",
  },
  {
    number: "08",
    title: "Responsive Design",
    description:
      "The interface uses Tailwind CSS to provide a clean, organized experience across different screen sizes.",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "React Toastify",
  "JSON",
  "Vite",
  "Git",
  "GitHub",
  "Vercel",
];

const challenges = [
  {
    title: "Managing Component State",
    description:
      "Managing technology data and selected items required keeping the interface synchronized with the current application state using React's useState hook.",
  },
  {
    title: "Loading JSON Data",
    description:
      "Using useEffect to load technology information when the application starts helped separate data loading from the presentation of the interface.",
  },
  {
    title: "Handling User Selections",
    description:
      "Preventing duplicate technologies and supporting add and remove actions required careful selection handling and clear feedback for user interactions.",
  },
];

const learningPoints = [
  {
    title: "JSX and React Components",
    description:
      "Understanding how JSX combines JavaScript expressions with HTML-like syntax to build reusable user interface components.",
  },
  {
    title: "Props and State",
    description:
      "Learning how props pass data from parent components to children, while state manages changing information within a component.",
  },
  {
    title: "React Hooks",
    description:
      "Using useState to manage application data and useEffect to perform tasks such as loading JSON data after rendering.",
  },
  {
    title: "Rendering Lists and Conditional UI",
    description:
      "Using unique keys when rendering lists and conditional rendering to display appropriate messages when the selected stack is empty.",
  },
  {
    title: "Parent and Child Communication",
    description:
      "Passing data through props and allowing child components to trigger parent actions through callback functions.",
  },
];

const futurePlans = [
  "Add more technologies and expand the available categories.",
  "Include short descriptions and documentation links for each technology.",
  "Allow users to save and restore multiple technology stacks.",
  "Introduce search and filtering to make technologies easier to discover.",
  "Explore exporting a selected stack for use in project planning.",
];

export default function DevStackProjectPage() {
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
              PROJECT 03 · REACT APPLICATION
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              DevStack<span className="text-[#A259FF]">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#B7AFBF]">
              An interactive technology stack builder that helps developers
              explore web technologies, select tools from different
              categories, and build a personalized technology stack through
              a simple and responsive interface.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "React Toastify",
                "Vite",
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
                href="https://assignment-5-devstack.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#873BDA] to-[#A259FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#A259FF]/20"
              >
                Visit Live Website ↗
              </a>

              <a
                href="https://github.com/Kashpia-Tasnova/Assignment-5_devstack"
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
                src="/projects/devstack.png"
                alt="DevStack technology stack builder application screenshot"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="block h-auto w-full"
                priority
              />
            </div>

            <p className="px-2 pb-1 pt-4 text-center text-xs text-[#AAA4B3]">
              DevStack — Technology Stack Builder
            </p>
          </div>
        </div>
      </section>

      {/* Project overview */}
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
              DevStack is a simple and interactive React application designed
              to help users explore web development technologies and build
              their own technology stack. It organizes technologies into
              categories such as Frontend, Backend, Database, Language,
              Styling, and DevOps.
            </p>

            <p>
              Users can select technologies to build a personalized stack,
              remove selections, and receive instant feedback through toast
              notifications. Duplicate selections are prevented to keep the
              stack organized.
            </p>

            <p>
              The application uses React state to manage interactions and
              JSON data to organize technology information. It also provides
              practical experience with React hooks, reusable components,
              props, conditional rendering, and parent-child communication.
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
            description="The main features that make DevStack an interactive technology exploration and stack-building tool."
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
            description="The tools and technologies used to develop and deploy DevStack."
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
            description="Key implementation areas that helped strengthen the understanding of React development."
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

      {/* React learning outcomes */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="REACT FUNDAMENTALS"
            title="What I Learned"
            description="Core React concepts explored through the development of DevStack."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learningPoints.map((point, index) => (
              <article
                key={point.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0D0C11] p-6 transition hover:border-[#A259FF]/40"
              >
                <span className="text-sm font-semibold text-[#B066FF]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#AAA4B3]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Future improvements */}
      <section className="border-y border-white/[0.06] bg-[#09080C] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#B066FF]">
              WHAT COMES NEXT
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Future Improvements
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#AAA4B3]">
              DevStack can be extended with additional features to make
              technology discovery and stack management more useful for
              developers.
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
            Explore DevStack in action.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#AAA4B3]">
            Try the live technology stack builder or explore the source code
            on GitHub to learn more about the implementation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://assignment-5-devstack.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#873BDA] to-[#A259FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Live Project ↗
            </a>

            <a
              href="https://github.com/Kashpia-Tasnova/Assignment-5_devstack"
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
