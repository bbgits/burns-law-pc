import React, { useState } from "react";
import dynamic from "next/dynamic";
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../../../firebaseConfig"; // Import Firestore configuration

// Dynamically import ReCAPTCHA with `ssr: false`
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const FormMain = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(""); // Tracks submission status
  const [captchaVerified, setCaptchaVerified] = useState(false); // Tracks CAPTCHA verification

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle CAPTCHA verification
  const handleCaptchaChange = (value) => {
    console.log("CAPTCHA value:", value); // Debugging log
    if (value) {
      setCaptchaVerified(true);
      console.log("CAPTCHA verified successfully.");
    } else {
      setCaptchaVerified(false);
      console.log("CAPTCHA verification failed.");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submission triggered.");
    console.log("Form data:", formData); // Debugging log
    console.log("Captcha verified:", captchaVerified); // Debugging log

    // Validate form fields and CAPTCHA
    if (formData.firstName && formData.email && formData.message && captchaVerified) {
      try {
        console.log("Submitting form to Firestore...");

        // Add the form data to Firestore
        const docRef = await addDoc(collection(db, "form"), {
          firstName: formData.firstName,
          email: formData.email,
          message: formData.message,
          captchaVerified: true,
          timestamp: Timestamp.now(), // Add a timestamp field
        });

        console.log("Document successfully written to Firestore with ID:", docRef.id);
        setSubmitStatus("success");
      } catch (error) {
        console.error("Error adding document to Firestore:", error);
        setSubmitStatus("error");
      }
    } else {
      console.error("Form data is incomplete or CAPTCHA not verified.");
      setSubmitStatus("error");
    }
  };

  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light text-dark dark:text-light">
      {submitStatus === "success" ? (
        <p className="text-green-600 text-lg font-bold">
          Successfully submitted! We will be in touch soon.
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
            <div className="mb-4 flex flex-wrap mx-4">
              <div className="w-full md:w-1/2 md:pr-3 mb-4 md:mb-0">
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
              <div className="w-full md:w-1/2 md:pl-3">
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
            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 text-lg text-white font-bold py-2 px-16 mt-5 rounded w-3/5 focus:outline-none focus:shadow-outline"
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

export default FormMain;
