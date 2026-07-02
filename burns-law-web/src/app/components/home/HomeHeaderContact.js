"use client";

import React from "react";
import HomeForm from "../forms/home-form";

const HomeHeaderContact = () => {

  return (
    <section className="w-full mt-6 md:mt-10 px-4 lg:px-32">
      <div className="w-full p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light">
          Need a Lawyer? Let's Talk.
        </h1>
        <p className="mt-4 text-lg sm:text-2xl max-w-4xl text-dark/90 dark:text-light/90 leading-relaxed">
          Burns Law P.C. advises clients on family, consumer, civil, and estate planning
          matters with a practical focus on clear options, efficient strategy,
          and responsive communication.
        </p>
        <p className="mt-4 text-center text-2xl sm:text-3xl font-bold text-dark dark:text-light mb-2">
          (773) 236-2002
        </p>
        <p className="text-sm sm:text-base font-medium text-dark dark:text-light mb-3">
            Call or use the form below to schedule a free consultation:
        </p>
        <ul className="text-sm sm:text-base font-medium text-dark dark:text-light mb-3">
            <li className="ml-8">- <b>Family Matters</b> (divorce, child support, parenting issues, orders of protection, nuptial agreements)</li>
            <li className="ml-8">- <b>Consumer and Civil Disputes</b> (consumer protection, grocery pricing disputes, insurance disputes, negligence matters)</li>
            <li className="ml-8">- <b>Estate Planning</b> (wills, powers of attorney, health care directives, and related planning)</li>
        </ul>
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