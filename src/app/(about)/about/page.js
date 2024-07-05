
import AboutCoverSection from "../../components/About/AboutCoverSection";
import Skills from "../../components/About/Skills";
import Link from "next/link";
import React from "react"; // Corrected import

export const metadata = {
    title: "About Me",
    description: `Here are some details about my self.`,
  };
  
  export default function About() {
    return (
      <>
        <AboutCoverSection />
        {/* <Skills />
        <h2 className='font-bold text-3xl xs:text-4xl sxl:text-5xl  text-center lg:text-left mt-4 text-dark dark:text-light'>
            portfolio
            </h2>
      
      
        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold">Burns Law P.C.</span>
        </h2>
      
       
        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold"> <Link href="https://github.com/bbgits/how_to"  className="!underline underline-offset-2"   >BrianBurns.com (THIS site!)</Link></span> - A blog and professional page written using JavaScript, CSS Tailwind, Next JS, ContentLayer, and advanced .mdx functionality to create a lightweight, performant, and easy to use website. Source code available on <Link href="https://github.com/bbgits/blog"  className="!underline underline-offset-2"   > Github </Link></h2>
      
       
        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold"> <Link href="mydailypdf.com"  className="!underline underline-offset-2"   >MyDailyPdf.com</Link></span> - Previous version of TurboTabs built using React JS and <Link href="mydailypdf.com" className="!underline underline-offset-2">deployed to AWS.</Link> and easy to use website. Source code available on <Link href="https://github.com/bbgits/blog"  className="!underline underline-offset-2"   > Github </Link></h2> */}
       
       
       
       
       
        {/* <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold">Smarty Tabs</span> - This micro publishing e-commerce website focuses on study aids for lawyers and other advanced degrees.  Find out more  <Link href="www.turbotabs.com"  className="!underline underline-offset-2"   >here</Link> and let's make it happen.</h2> */}
      
        {/* <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold">Zip2LatLon</span> - An open source Python utility that converts postal zip codes to latitude and longitude coordinates.   Find out more  <Link href="www.turbotabs.com"  className="!underline underline-offset-2"   >here</Link> and let's make it happen.</h2>

        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        <span className="font-extrabold"> <Link href="https://github.com/bbgits/how_to"  className="!underline underline-offset-2"   >how-to-code-book [in progress]</Link></span> - An open source library of .mdx files with step by step guides on to help with common coding tasks.  Hosted on   <Link href="https://github.com/bbgits/how_to"  className="!underline underline-offset-2"   > Github </Link> and let's make it happen.</h2>
      
      
      
        <h2 className='font-bold text-xl xs:text-2xl sxl:text-3xl  text-center lg:text-left mt-12 text-dark dark:text-light'>
            have a project in mind?
            </h2>
      
      
        <h2 className="mt-2 font-semibold text-lg md:text-2xl self-center text-center mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        let's get started: brian@brianburns.com
        </h2> */}
      </>
    );
  }