
"use client"
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import the necessary Firestore methods
import { db } from 'firebaseConfig.js' // Import the Firestore instance (replace 'path-to-your-firebase-config' with the actual path)

const FormMain = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.message) {
      // Save the form data to the Cloud Firestore
      try {
        const docRef = await addDoc(collection(db, 'MainFormSubmits'), formData);
        console.log('Document written with ID: ', docRef.id);
        setSubmitStatus('success');
      } catch (e) {
        console.error('Error adding document: ', e);
        setSubmitStatus('error');
      }
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {submitStatus === 'success' && (
        <p>Successfully submitted, we will be in touch soon!</p>
      )}
      {submitStatus === 'error' && (
        <p>You must provide all required information.</p>
      )}
    </div>
  );
};

export default FormMain;
