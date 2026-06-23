"use client";

import React from "react";
import HomeForm from "../forms/home-form";

const HomeHeaderContact = () => {

  return (
    <section className="w-full mt-6 md:mt-10 px-4 lg:px-32">
      <div className="w-full p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light">
          Legal Complexity - Simplified
        </h1>
        <p className="mt-4 text-lg sm:text-2xl max-w-4xl text-dark/90 dark:text-light/90 leading-relaxed">
          Keeping you informed, educated, and updated is the bedrock of my law
          practice. I listen first and advocate relentlessly. Call for a free
          consultation.
        </p>
        <p className="mt-4 text-center text-2xl sm:text-3xl font-bold text-dark dark:text-light">
          (773) 236-2002
        </p>

        <div className="mt-8">
          <p className="text-sm sm:text-base font-medium text-dark dark:text-light mb-3">
            Or Send me a message and I&apos;ll get back to you by the end of the day:
          </p>
          <HomeForm />
        </div>
      </div>
    </section>
  );
};

export default HomeHeaderContact;