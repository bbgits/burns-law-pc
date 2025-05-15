"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../../../firebaseConfig"; // Import Firestore configuration

const FormSimple = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
    
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks if the form is submitted
  const [error, setError] = useState(""); // Tracks any errors during submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Validate form data
    if (!formData.firstName || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    try {
      // Add the form data to Firestore
      await addDoc(collection(db, "form"), formData);
      setIsSubmitted(true); // Mark the form as submitted
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <section className="w-full p-5">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {isSubmitted ? (
        <p className="text-green-600 text-lg font-bold">
          Thank you for your message! We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              required
              className="w-full px-3 py-2 border rounded h-32"
            ></textarea>
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default FormSimple;
