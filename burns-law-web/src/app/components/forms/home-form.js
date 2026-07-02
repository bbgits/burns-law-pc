"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const HomeForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("");

    if (!formData.firstName || !formData.email || !formData.message || !captchaVerified) {
      setSubmitStatus("validation-error");
      return;
    }

    try {
      await addDoc(collection(db, "form"), {
        firstName: formData.firstName.trim(),
        email: formData.email,
        phoneNumber: formData.phoneNumber.trim(),
        message: formData.message,
        captchaVerified: true,
        source: "home-header",
        timestamp: Timestamp.now(),
      });

      setFormData({ firstName: "", phoneNumber: "", email: "", message: "" });
      setCaptchaVerified(false);
      setSubmitStatus("success");
      router.push("/success/home-form");
    } catch (error) {
      console.error("Error submitting home header form:", error);
      setSubmitStatus("submit-error");
    }
  };

  return (
    <>
      <form id="home-contact-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Your name"
          required
          className="rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Your phone number (optional)"
          className="rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your email"
          required
          className="md:col-span-2 rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Briefly describe your legal issue"
          required
          className="md:col-span-2 rounded-lg border border-dark/20 px-4 py-2.5 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </form>
      <div className="mt-3">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
          onChange={(value) => setCaptchaVerified(Boolean(value))}
        />
      </div>
      <div className="mt-3 w-full flex justify-center">
        <button
          type="submit"
          form="home-contact-form"
          className="rounded-lg bg-green-900 hover:bg-green-950 text-white font-semibold px-8 py-2.5"
        >
          Submit
        </button>
      </div>
      {submitStatus === "success" && (
        <p className="mt-3 text-sm text-green-700 dark:text-green-400 font-semibold">
          Message received. I&apos;ll be in touch soon.
        </p>
      )}
      {submitStatus === "validation-error" && (
        <p className="mt-3 text-sm text-red-700 dark:text-red-400 font-semibold">
          Please provide your name, email, message, and complete the CAPTCHA.
        </p>
      )}
      {submitStatus === "submit-error" && (
        <p className="mt-3 text-sm text-red-700 dark:text-red-400 font-semibold">
          Submission failed. Please try again in a moment.
        </p>
      )}
    </>
  );
};

export default HomeForm;
