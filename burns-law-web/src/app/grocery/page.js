import React from "react";
import GroceryForm from "../components/forms/grocery-form";

export default function GroceryPage() {

  return (
    <main className="w-full px-4 md:px-10 lg:px-24 py-4 md:py-6 text-dark dark:text-light">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Grocery Store Digital Coupon Scam Investigation
        </h1>
        <p className="mt-5 text-base md:text-xl leading-relaxed text-dark/90 dark:text-light/90">
          Have you seen a low advertised shelf price, but then been required to pay a different price at the register? Have you tried to use
          use a digital coupon in a store with internet dead spots?
          </p>
        <p className="mt-3 text-base md:text-lg">
          
          We are reviewing claims involving unfair pricing practices in Illinois grocery stores, and <b> we want to hear from you.</b>
        </p>
        <p className="mt-3 text-base md:text-lg">
          Share your experience below and we will review your submission.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-10 bg-white dark:bg-bbDark/40 border border-dark/15 dark:border-light/20 rounded-xl p-6 md:p-8">
        <GroceryForm />
      </section>
    </main>
  );
}