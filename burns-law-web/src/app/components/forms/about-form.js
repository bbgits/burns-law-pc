"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const AboutForm = () => {
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
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(Boolean(value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.firstName &&
      formData.email &&
      formData.message &&
      captchaVerified
    ) {
      try {
        await addDoc(collection(db, "form"), {
          firstName: formData.firstName,
          email: formData.email,
          phoneNumber: formData.phoneNumber.trim(),
          message: formData.message,
          captchaVerified: true,
          source: "about-page",
          timestamp: Timestamp.now(),
        });

        setSubmitStatus("success");
      } catch (error) {
        console.error("Error adding document to Firestore:", error);
        setSubmitStatus("error");
      }
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light text-dark dark:text-light">
      {submitStatus === "success" ? (
        <p className="text-green-600 text-lg font-bold">
          Successfully submitted! Please check your email for next steps!
        </p>
      ) : (
        <>
          <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
            Get in Touch:
          </span>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded sm:px-8 md:px-12 lg:px-18 pt-6 pb-8 mt-8 mb-4 sm:mx-6 md:mx-20 lg:mx-24"
          >
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
              <div>
                <label
                  className="block text-gray-700 text-md font-bold mb-2 dark:text-black"
                  htmlFor="firstName"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black placeholder:text-gray-500 leading-tight focus:border-green-700 focus:ring-1 focus:ring-green-700 dark:text-black"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-md font-bold mb-2 dark:text-black"
                  htmlFor="phoneNumber"
                >
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black placeholder:text-gray-500 leading-tight focus:border-green-700 focus:ring-1 focus:ring-green-700 dark:text-black"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-gray-700 text-md font-bold mb-2 dark:text-black"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black placeholder:text-gray-500 leading-tight focus:border-green-700 focus:ring-1 focus:ring-green-700 dark:text-black"
                />
              </div>
            </div>
            <div className="mb-6 mx-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2 dark:text-black"
                htmlFor="message"
              >
                Describe your legal problem:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black placeholder:text-gray-500 leading-tight focus:border-green-700 focus:ring-1 focus:ring-green-700 h-32 dark:text-black"
              ></textarea>
            </div>
            <div className="flex w-full justify-center">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                onChange={handleCaptchaChange}
              />
            </div>
            <div className="flex w-full justify-center mt-5">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 text-lg text-white font-bold py-2 px-16 rounded w-3/5 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
      {submitStatus === "error" && (
        <p className="text-red-600 text-lg font-bold">
          You must provide all required information and complete the CAPTCHA.
        </p>
      )}
    </section>
  );
};

export default AboutForm;
