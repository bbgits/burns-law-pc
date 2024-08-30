"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import the necessary Firestore methods
import { db } from "../../../../firebaseConfig";
import ReCAPTCHA from "react-google-recaptcha";

const FormMain = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

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
    if (
      formData.firstName &&
      formData.email &&
      formData.message &&
      captchaVerified
    ) {
      // Save the form data to the Cloud Firestore
      try {
        const docRef = await addDoc(collection(db, "form"), formData);
        console.log("Document written with ID: ", docRef.id);
        setSubmitStatus("success");
      } catch (e) {
        console.error("Error adding document: ", e);
        setSubmitStatus("error");
      }
    } else {
      console.error("Form data is incomplete or captcha not verified");
      setSubmitStatus("error");
    }
  };

  return (
    <section
      className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
       text-dark dark:text-light"
    >
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey="6LehmzAqAAAAANWXR415D1ebBeOR9GrsMoOpdLkI"
          onChange={handleCaptchaChange}
        />
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 text-lg text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      {submitStatus === "success" && (
        <p>Successfully submitted, we will be in touch soon!</p>
      )}
      {submitStatus === "error" && (
        <p>
          You must provide all required information and complete the CAPTCHA.
        </p>
      )}
    </section>
  );
};

export default FormMain;
