import Link from "next/link";
import { practiceAreas } from "./practiceAreas";

export const metadata = {
  title: "Practice Areas",
  description:
    "Overview of Burns Law P.C. practice areas, including family law, consumer protection, insurance disputes, negligence, and estate planning.",
};

export default function PracticeAreasPage() {
  return (
    <main className="w-full px-4 md:px-10 lg:px-24 py-10 md:py-14 text-dark dark:text-light">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Practice Areas
        </h1>
        <p className="mt-5 text-base md:text-xl leading-relaxed text-dark/90 dark:text-light/90">
          Burns Law P.C. handles a mix of family, consumer, civil, and planning
          matters. The summaries below are general information designed to help
          prospective clients understand the kinds of issues that often arise in
          each area.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-10 grid gap-6 md:grid-cols-2">
        {practiceAreas.map((area) => (
          <article
            key={area.slug}
            className="rounded-2xl border border-dark/15 dark:border-light/20 bg-white dark:bg-bbDark/40 p-6 md:p-7"
          >
            <h2 className="text-2xl font-bold">{area.title}</h2>
            <p className="mt-3 text-base leading-7 text-dark/90 dark:text-light/90">
              {area.shortDescription}
            </p>
            <Link
              href={`/practice-areas/${area.slug}`}
              className="inline-flex mt-5 font-semibold text-accent hover:text-accentDark"
            >
              Learn more about {area.title}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}