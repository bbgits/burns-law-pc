// ~/src/app/(about)/about/page.js

"use client";

import Link from "next/link";
import AboutCoverSection from "../../components/About/AboutCoverSection";
import Skills from "../../components/About/Skills";
import React from "react";
import AboutForm from "../../components/forms/about-form";

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <AboutForm />
      <Skills />
      <h2 className="font-bold text-3xl xs:text-4xl sxl:text-5xl text-center lg:text-left mt-4 text-dark dark:text-light">
        Affordable Pricing Options
      </h2>

      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        <span className="font-extrabold underline">Free Consult (~20 min)</span>{" "}
        Video or voice call to discuss your matter and help you understand your legal
        options.{" "}
      </h2>

      <Link
        href="/contact"
        className="inline-block bg-green-900 hover:bg-green-950 text-md text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Schedule Intro Call
      </Link>

      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        <span className="font-extrabold underline">Pro-Se PLUS (from $500)</span>{" "}
        In law, &apos;Pro Se&apos; means that a person is representing themselves in court
        (I will not be representing you). This limited scope engagement includes
        a 1 hr initial consult where I will explain court procedures and provide
        guidance on getting started. I can also help you draft several of the
        most common pleadings and final agreements so that you are ready to
        represent yourself effectively.{" "}
      </h2>

      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        <span className="font-extrabold underline">
          Flat Fee(s) Divorce (from $2,500)
        </span>{" "}
        For straightforward cases, I offer a Flat Fee option that includes
        filing standardized pleadings and representing you in court. While I
        cannot guarantee that the Flat Fee will be sufficient to complete your
        case, we provide clear contingencies and pre-priced (&apos;add-on&apos;) services
        so that you know how much certain legal detours could cost ahead of
        time.
      </h2>

      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        <span className="font-extrabold underline">
          Classic Retainer (from $3,500)
        </span>{" "}
        For most cases, a standard retainer agreement is the best option. By
        paying your initial retainer, you have pre-paid for (&quot;retained&quot;) my time
        to work on your matter. This means that I will be able to move quicker
        to act on your behalf and prioritize your case.
      </h2>

      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        <span className="font-extrabold underline">
          Contingent Fees (from 20% of recovery)
        </span>{" "}
        For non-family law cases, I offer a contingent fee arrangement based on a percentage of the recovery. This means that my payment is directly tied to the outcome, aligning my interests with yours. The specific percentage and terms will be outlined in a written agreement.
      </h2>

      <h2 className="font-bold text-xl xs:text-2xl sxl:text-3xl text-center lg:text-left mt-12 text-dark dark:text-light">
        Want to Learn More?
      </h2>

      <h2 className="mt-2 font-semibold text-lg md:text-2xl self-center text-center mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Just send me an email: brian@burnslawpc.com
      </h2>
    </>
  );
}

// "use client";
// import AboutCoverSection from "../../components/About/AboutCoverSection";
// import Skills from "../../components/About/Skills";
// import React, { useState } from "react";
// import FormMain from "../../components/About/FormMain";


// // export const metadata = {
// //   title: "About Burns Law P.C.",
// //   description: "Here are some details about my self.",
// // };

// export default function About() {
//   return (
//     <>
//       <AboutCoverSection />
//       {/* <FormSimple />
//       <FormEasy /> */}
//       <FormMain />
//       <Skills />
//       <h2 className="font-bold text-3xl xs:text-4xl sxl:text-5xl  text-center lg:text-left mt-4 text-dark dark:text-light">
//         affordable pricing options
//       </h2>

//       <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
//         <span className="font-extrabold underline">
//           {" "}
//           1 Hr Consult ($225)
//         </span>{" "}
//        Video Call to discuss your matter and help you understand your legal options. Payment due at start of meeting, Book Here. {" "}
//       </h2>
//       <button
//         onClick={() => {
//           window.open('https://calendly.com/brian-burnslawpc/legal-consult', '_blank');
//         }}
//         className="bg-green-900 hover:bg-green-950 text-md text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Book 1 Hr Consult ($225 Due at Mtg.)
//       </button>

//       <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
//         <span className="font-extrabold underline">
//           {" "}
//           Pro-Se PLUS (from $300)
//         </span>{" "}
//         In law, 'Pro Se' means that a person is representing themselves in court
//         (I will not be representing you). This limited scope engagement includes
//         a 1 hr initial consult where I will explain court proceedures and
//         provide guidance on getting started. I can also help you draft several
//         of the most common pleadings and final agreements so that you are ready
//         to represent yourself effectively.{" "}
//       </h2>

//       <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
//         <span className="font-extrabold underline">
//           {" "}
//           Flat Fee(s) Divorce (from $2,500)
//         </span>{" "}
//         For straightforward cases, I offer a Flat Fee option that includes
//         filing standardized pleadings and representing you in court. While I
//         cannot gaurantee that the Flat Fee will be sufficient to complete your
//         case, we provide clear contingencies and pre-priced ('add-on') services so
//         that you know how much certain legal detours could cost ahead of time.
//       </h2>

//       <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
//         <span className="font-extrabold underline">
//           {" "}
//           Classic Retainer(from $3,500)
//         </span>{" "}
//         For most cases, a standard retainer agreement is the best option. By
//         paying your initial retainer, you have pre-paid for (&#34retained&#34) my time
//         to work on your matter. This means that I will be able to move quicker
//         to act on your behalf and prioritize your case.
//       </h2>

//       <h2 className="font-bold text-xl xs:text-2xl sxl:text-3xl  text-center lg:text-left mt-12 text-dark dark:text-light">
//         want to learn more?
//       </h2>

//       <h2 className="mt-2 font-semibold text-lg md:text-2xl self-center text-center mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
//         Just send me an email: brian@burnslawpc.com
//       </h2>
//     </>
//   );
// }
