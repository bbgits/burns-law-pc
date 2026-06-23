"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

function getReadableSubmitError(error) {
  const code = error?.code || "unknown";

  switch (code) {
    case "permission-denied":
      return "Firestore rejected the write. Check local Firestore rules and deployed rules for the groceryForm collection.";
    case "unavailable":
      return "Firebase is currently unavailable from the browser. Check your network connection and Firebase project status.";
    case "invalid-argument":
      return "The submitted document shape does not match what Firestore expects. Check field names and types.";
    default:
      return error?.message || "Unknown submission error.";
  }
}

const GroceryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    approximateVisitDate: "",
    purchaseOutcome: "",
    hasReceipt: "",
    experience: "",
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitErrorDetails, setSubmitErrorDetails] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("");
    setSubmitErrorDetails("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.approximateVisitDate ||
      !formData.purchaseOutcome ||
      !formData.hasReceipt ||
      !formData.experience ||
      !captchaVerified
    ) {
      console.warn("Grocery form validation failed before Firestore write.", {
        hasName: Boolean(formData.name),
        hasEmail: Boolean(formData.email),
        hasApproximateVisitDate: Boolean(formData.approximateVisitDate),
        hasPurchaseOutcome: Boolean(formData.purchaseOutcome),
        hasReceipt: Boolean(formData.hasReceipt),
        hasExperience: Boolean(formData.experience),
        hasRecaptchaKey: Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_KEY),
        captchaVerified,
      });
      setSubmitStatus("validation-error");
      return;
    }

    try {
      console.info("Submitting grocery form to Firestore.", {
        collection: "groceryForm",
        hasRecaptchaKey: Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_KEY),
        payloadShape: {
          name: typeof formData.name,
          email: typeof formData.email,
          phoneNumber: typeof formData.phoneNumber,
          approximateVisitDate: typeof formData.approximateVisitDate,
          purchaseOutcome: formData.purchaseOutcome,
          hasReceipt: formData.hasReceipt,
          experienceLength: formData.experience.length,
          captchaVerified,
        },
      });

      await addDoc(collection(db, "groceryForm"), {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber.trim(),
        approximateVisitDate: formData.approximateVisitDate,
        purchaseOutcome: formData.purchaseOutcome,
        hasReceipt: formData.hasReceipt,
        experience: formData.experience,
        source: "grocery-landing-page",
        captchaVerified: true,
        timestamp: Timestamp.now(),
      });

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        approximateVisitDate: "",
        purchaseOutcome: "",
        hasReceipt: "",
        experience: "",
      });
      setCaptchaVerified(false);
      setSubmitStatus("success");
    } catch (error) {
      const readableError = getReadableSubmitError(error);

      console.error("Error submitting grocery form:", {
        code: error?.code || "unknown",
        message: error?.message || "Unknown error message",
        readableError,
        stack: error?.stack,
      });

      setSubmitErrorDetails(
        `Error code: ${error?.code || "unknown"}. ${readableError}`
      );
      setSubmitStatus("submit-error");
    }
  };

  return (
    <>
      {submitStatus === "success" ? (
        <p className="text-green-700 dark:text-green-400 text-lg font-semibold">
          Thank you. Your report was submitted successfully.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900"
              placeholder="Your name"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 font-semibold" htmlFor="phoneNumber">
              Phone Number (optional)
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900"
              placeholder="(555) 555-5555"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 font-semibold" htmlFor="approximateVisitDate">
              Approximate Date of Purchase or Store Visit
            </label>
            <input
              id="approximateVisitDate"
              type="date"
              name="approximateVisitDate"
              value={formData.approximateVisitDate}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 font-semibold" htmlFor="purchaseOutcome">
              Did you buy the item at the full price or sale price?
            </label>
            <select
              id="purchaseOutcome"
              name="purchaseOutcome"
              value={formData.purchaseOutcome}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900"
            >
              <option value="">Select one</option>
              <option value="full price">full price</option>
              <option value="sale price">sale price</option>
              <option value="did not buy item">did not buy item</option>
            </select>
          </div>

          <div className="md:col-span-1">
            <label className="block mb-2 font-semibold" htmlFor="hasReceipt">
              Do you have the receipt?
            </label>
            <select
              id="hasReceipt"
              name="hasReceipt"
              value={formData.hasReceipt}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900"
            >
              <option value="">Select one</option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold" htmlFor="experience">
              Tell us about your experience:
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900"
              placeholder="What happened, where, and what price difference did you see?"
            />
          </div>

          <div className="md:col-span-2 mt-1">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
              onChange={(value) => setCaptchaVerified(Boolean(value))}
            />
          </div>

          <div className="md:col-span-2 mt-2 flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-green-900 hover:bg-green-950 text-white font-semibold px-12 sm:px-16 py-2.5"
            >
              Submit Grocery Store Complaint
            </button>
          </div>
        </form>
      )}

      {submitStatus === "validation-error" && (
        <p className="mt-4 text-red-700 dark:text-red-400 font-semibold">
          Please complete all fields and the CAPTCHA.
        </p>
      )}
      {submitStatus === "submit-error" && (
        <div className="mt-4 space-y-2">
          <p className="text-red-700 dark:text-red-400 font-semibold">
            Submission failed. Please try again in a moment.
          </p>
          {submitErrorDetails && (
            <p className="text-sm text-red-700 dark:text-red-300 break-words">
              {submitErrorDetails}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default GroceryForm;
