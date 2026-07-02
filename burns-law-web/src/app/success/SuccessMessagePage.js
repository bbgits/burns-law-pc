import Link from "next/link";

export default function SuccessMessagePage() {
  return (
    <main className="w-full px-4 md:px-10 lg:px-24 py-16 md:py-24 text-dark dark:text-light">
      <section className="max-w-2xl mx-auto rounded-2xl border border-dark/15 dark:border-light/20 bg-white dark:bg-bbDark/40 p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Thank you for your submission.
        </h1>
        <p className="mt-5 text-base md:text-xl leading-relaxed text-dark/90 dark:text-light/90">
          Please check inbox for confirmation email and next steps.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 rounded-lg bg-green-900 hover:bg-green-950 text-white font-semibold px-8 py-3"
        >
          Back to Site
        </Link>
      </section>
    </main>
  );
}