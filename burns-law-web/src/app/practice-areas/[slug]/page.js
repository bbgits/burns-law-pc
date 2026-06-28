import { notFound } from "next/navigation";
import { getPracticeAreaBySlug, practiceAreas } from "../practiceAreas";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }) {
  const area = getPracticeAreaBySlug(params.slug);

  if (!area) {
    return {
      title: "Practice Area Not Found",
    };
  }

  return {
    title: area.title,
    description: area.shortDescription,
  };
}

export default function PracticeAreaDetailPage({ params }) {
  const area = getPracticeAreaBySlug(params.slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="w-full px-4 md:px-10 lg:px-24 py-10 md:py-14 text-dark dark:text-light">
      <article className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-accent dark:text-accentDark">
          Practice Areas
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
          {area.articleTitle}
        </h1>
        <p className="mt-6 text-base md:text-xl leading-relaxed text-dark/90 dark:text-light/90">
          {area.intro}
        </p>

        <section className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold">Common issues</h2>
          <div className="mt-5 grid gap-5">
            {area.commonIssues.map((issue) => (
              <section
                key={issue.title}
                className="rounded-2xl border border-dark/15 dark:border-light/20 bg-white dark:bg-bbDark/40 p-6"
              >
                <h3 className="text-xl font-semibold">{issue.title}</h3>
                <p className="mt-3 leading-7 text-dark/90 dark:text-light/90">
                  {issue.description}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Questions clients often ask
          </h2>
          <div className="mt-5 space-y-5">
            {area.faqs.map((faq) => (
              <section
                key={faq.question}
                className="rounded-2xl border border-dark/15 dark:border-light/20 bg-white dark:bg-bbDark/40 p-6"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-dark/90 dark:text-light/90">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-dark/15 dark:border-light/20 bg-light/70 dark:bg-bbDark/30 p-6 md:p-8">
          <h2 className="text-2xl font-bold">Talk through your situation</h2>
          <p className="mt-3 leading-7 text-dark/90 dark:text-light/90">
            Every legal matter turns on its facts. If you want advice tailored to
            your situation, contact Burns Law P.C. to discuss the issue, the
            available options, and the next practical steps.
          </p>
        </section>
      </article>
    </main>
  );
}