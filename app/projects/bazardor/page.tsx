import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Product Price Exploration",
    description:
      "Users can explore essential product prices in Bangladesh and view information about individual products.",
  },
  {
    number: "02",
    title: "Category Filtering",
    description:
      "Products are organized into categories to make browsing easier and help users find the items they need.",
  },
  {
    number: "03",
    title: "Market Price Comparison",
    description:
      "Market information helps users compare reported minimum and maximum prices across available markets.",
  },
  {
    number: "04",
    title: "Price Change Information",
    description:
      "Product listings present available price information, including comparisons with earlier prices.",
  },
  {
    number: "05",
    title: "Authentication",
    description:
      "Better Auth supports email and password authentication, as well as Google and GitHub sign-in.",
  },
  {
    number: "06",
    title: "Protected Product Details",
    description:
      "Product detail pages are protected so users must sign in before accessing them.",
  },
  {
    number: "07",
    title: "Custom Display Name",
    description:
      "Users can update their BazarDor display name from their profile without changing their original social account name.",
  },
  {
    number: "08",
    title: "Responsive Interface",
    description:
      "The interface is designed to adapt to desktop, tablet, and mobile screen sizes.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Better Auth",
  "MongoDB",
  "Google OAuth",
  "GitHub OAuth",
  "REST API",
  "Lucide React",
  "React Hot Toast",
  "Git",
  "GitHub",
  "Vercel",
];

const challenges = [
  {
    title: "Integrating the REST API",
    description:
      "Connecting the interface to product and category endpoints required handling API responses and organizing the retrieved information for the UI.",
  },
  {
    title: "Authentication and Protected Pages",
    description:
      "Configuring email/password authentication and social sign-in required attention to authentication settings, environment variables, and protected routes.",
  },
  {
    title: "Deployment Configuration",
    description:
      "Preparing the application for deployment required configuring environment variables and ensuring the authentication and database setup were compatible with the production environment.",
  },
];

const futurePlans = [
  "Add more product categories and market price information.",
  "Introduce interactive charts to visualize historical price changes.",
  "Improve product search and filtering options.",
  "Explore price alerts so users can follow changes in essential product prices.",
  "Continue improving accessibility and the mobile browsing experience.",
];

export default function BazarDorProjectPage() {
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
              PROJECT 01 · WEB APPLICATION
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              BazarDor<span className="text-[#A259FF]">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#B7AFBF]">
              A responsive web application that helps users explore essential
              product prices in Bangladesh, browse product categories, and
              compare market prices through an accessible interface.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Better Auth"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#A259FF]/25 bg-[#A259FF]/10 px-3 py-2 text-xs text-[#D4B5FF]"
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://bazardor-ceu6.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#873BDA] to-[#A259FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#A259FF]/20"
              >
                Visit Live Website ↗
              </a>

              <a
                href="https://github.com/Kashpia-Tasnova/bazardor"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#A259FF]/50 hover:bg-[#A259FF]/10"
              >
                View GitHub Repository ↗
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#A259FF]/25 bg-[#100B17] p-3 sm:p-4">
  <div className="relative w-full overflow-hidden rounded-2xl bg-[#08060B]">
    <Image
      src="/projects/bazardor.png"
      alt="BazarDor website project screenshot"
      width={1200}
      height={800}
      sizes="(max-width: 1024px) 100vw, 600px"
      className="block h-auto w-full"
      priority
    />
  </div>

  <p className="px-2 pb-1 pt-4 text-center text-xs text-[#AAA4B3]">
    BazarDor — project preview
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
              BazarDor is designed to make essential product price information
              easier to explore. Users can browse product categories, view
              available price details, and compare market information in one
              place.
            </p>

            <p>
              The application uses a REST API to retrieve product and category
              data. Authentication is implemented with Better Auth, including
              email/password authentication and Google and GitHub sign-in
              options.
            </p>

            <p>
              The project also includes protected product detail pages, a
              profile page for managing the BazarDor display name, responsive
              layouts, and user feedback through toast notifications.
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
            description="The main features implemented in BazarDor."
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

                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>

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
            description="Technologies and tools used to develop and deploy the application."
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

      {/* Challenges */}
      <section className="border-y border-white/[0.06] bg-[#09080C] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="LESSONS LEARNED"
            title="Development Challenges"
            description="Important areas that required attention while developing the application."
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
              There are several opportunities to extend BazarDor with more
              useful features and make the experience even better for users.
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
            See BazarDor in action.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#AAA4B3]">
            Visit the deployed application or explore the source code on
            GitHub to learn more about the implementation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://bazardor-ceu6.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#873BDA] to-[#A259FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Live Project ↗
            </a>

            <a
              href="https://github.com/Kashpia-Tasnova/bazardor"
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

          <Link
            href="/"
            className="transition hover:text-[#D4B5FF]"
          >
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