"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getFirestore, collection, doc, serverTimestamp, addDoc, setDoc } from 'firebase/firestore';
import {app} from 'firebaseConfig';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';



// Use the initialized Firestore instance to access a collection
 // Replace 'emails' with the actual 

const Footer = () => {
  
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const [submitted, setSubmitted] = useState(false); 
  // const database = getFirestore(app);
  // const collectionRef = collection(database, 'emails');
  // const appCheck = initializeAppCheck(app, {
  //   provider: new ReCaptchaV3Provider('6Ld-2ggqAAAAAKGaPa6XCbHRliXRjtwpj6ghYnD-'),
  //   isTokenAutoRefreshEnabled: true
  // });

  // const onSubmit = async (data) => {
  //   console.log("submitting...")
  //   const database = getFirestore(app);
  //   console.log("database fetched...")
  //   const timestamp = new Date().getTime(); // Generate a timestamp
  //   const documentName = `${data['Email']}_${timestamp}`; // Custom document name
    
  //   await setDoc(doc(database, 'emails', documentName), { email: data['Email'], timestamp: serverTimestamp()});
  //   setSubmitted(true); // Set submitted state to true after successful form submission
  // };


  return (

    <footer className="mt-12 lg:mt-16 rounded-2xl bg-dark dark:bg-bbDark flex flex-col items-center text-light">
      {/* Existing content */}
      {/* {submitted ? ( // Conditionally render based on form submission */}
        <p className="mt-6 mb-2 lg:mt-16 font-medium text-center text-2xl">
          Got a legal problem? Send me an email:
        </p>
        <p className="mb-6 font-medium text-center text-xl sm:text-2xl lg:text-4xl px-4">
          Brian@BurnsLawPC.com
        </p>
      {/* ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 mb-3 min-w-[280px] flex items-stretch bg-light p-2 rounded mx-4"
        >
          <input
            type="email"
            placeholder="jo@gmail.com"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
          />
          <input
            type="submit"
            value="Sign Up"
            className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
          />
        </form> */}
      
      {/* Remaining content */}
      
    </footer>

  );
};

export default Footer;
