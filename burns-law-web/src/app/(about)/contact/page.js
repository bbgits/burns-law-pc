import HomeForm from "../../components/forms/home-form";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
  title: "Contact",
  description: `Contact Burns Law P.C. through the form on this page or email ${siteMetadata.email} to get started.`,
};

const Contact = () => {
  return (
    <main className="w-full px-4 md:px-10 lg:px-24 py-10 md:py-14 text-dark dark:text-light">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Contact</h1>
        <p className="mt-5 text-base md:text-xl leading-relaxed text-dark/90 dark:text-light/90">
          Send a message below and we will reach out to schedule your intro call.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-8 rounded-2xl border border-dark/15 dark:border-light/20 bg-white dark:bg-bbDark/40 p-6 md:p-8">
        <HomeForm />
      </section>
    </main>
  );
};

export default Contact;
