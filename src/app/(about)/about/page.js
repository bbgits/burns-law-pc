
import AboutCoverSection from "../../components/About/AboutCoverSection";
import Skills from "../../components/About/Skills";
import Link from "next/link";
import React from "react"; // Corrected import

export const metadata = {
    title: "About Me",
    description: "Here are some details about my self.",
  };
  
  export default function About() {
    return (
      <>
        <AboutCoverSection />
        <Skills />
        <h2 className='font-bold text-3xl xs:text-4xl sxl:text-5xl  text-center lg:text-left mt-4 text-dark dark:text-light'>
            affordable pricing options
            </h2>
       
        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold underline"> Pro-Se PLUS (from $300)</span> In law, "Pro Se" means that a person is representing themselves in court (I will not be representing you). This limited scope engagement includes a 1 hr initial consult where I will explain court proceedures and provide guidance on getting started.  I will also help you draft several of the most common pleadings and final agreements so that you are ready to represent yourself effectively.  </h2>

        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold underline"> Flat Fee(s) Divorce (from $2,500)</span> For straightforward cases, we offer a Flat Fee option that includes filing standardized pleadings and representing you in court.  While we cannot gaurantee that the Flat Fee will be sufficient to complete your case, we provide clear contingencies and pre-priced 'add-on' services so that you know how much certain legal 'detours' will cost ahead of time.</h2>

        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold underline"> Classic Retainer(from $3,500)</span> For most cases, a standard retainer agreement is the best option.  By paying your initial retainer, you have pre-paid for ("retained") my time to work on your matter.  This means that I will be able to move quicker to act on your behalf and it also means that I will always have time to consult with you or return a call as quickly as possible.</h2>
      
        <h2 className='font-bold text-xl xs:text-2xl sxl:text-3xl  text-center lg:text-left mt-12 text-dark dark:text-light'>
            want to learn more?
            </h2>
      
      
        <h2 className="mt-2 font-semibold text-lg md:text-2xl self-center text-center mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        send me a quick email: brian@burnslawpc.com
        </h2>
      </>
    );
  }