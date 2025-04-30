// // ~/src/app/components/About/FormMain.js
"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../../../firebaseConfig";
import ReCAPTCHA from "react-google-recaptcha";

const FormMain = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(""); // Tracks submission status
  const [captchaVerified, setCaptchaVerified] = useState(false); // Tracks CAPTCHA verification

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SUBMIT BUTTON CLICKED!!!")
    console.log("Form data:", formData);
    console.log("Captcha verified:", captchaVerified);
  
    if (formData.firstName && formData.email && formData.message && captchaVerified) {
      try {
        const docRef = await addDoc(collection(db, "form"), {
          ...formData,
          captchaVerified: true,
        });
        console.log("Document written with ID: ", docRef.id);
        setSubmitStatus("success");
      } catch (e) {
        console.error("Error adding document: ", e);
        setSubmitStatus("error");
      }
    } else {
      console.error("Form data is incomplete or CAPTCHA not verified");
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
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-3 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-green-700 focus:ring-1 focus:ring-green-700 "
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-3">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-green-700 focus:ring-1 focus:ring-green-700"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-green-700 focus:ring-1 focus:ring-green-700 h-32"
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













































