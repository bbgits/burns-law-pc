import Image from "next/image";
import React from "react";
import profileCharacter from "../../../../public/character.png";
export const metadata = {
  title: "About Burns Law P.C.",
  description: "Here are some details about my self.",
};

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] mt-4 border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex items-center justify-center">
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-right"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16 py-4">
        <h2 className="font-bold capitalize text-4xl text-center lg:text-left mt-4">
          About Brian Burns
        </h2>
        <p className="font-medium  mt-4 text-sm lg:text-base text-justify">
          After graduating <i>cum laude</i> from the  Cecil C.
          Humphries School of Law in 2016, Brian worked for the Federal government, a global legal consulting firm, and a Chicago tech startup before 
          focusing his legal career exclussively on Family Law. He practices in Cook County, DuPage County, Lake County, McHenry County, Will County, Kendall County, and Kane County.
        </p>
        <p className="font-medium  mt-4 text-sm lg:text-base text-justify">
          Brian created Burns Law P.C. in 2024 to provide top tier service to
          clients at an affordable price.
          If you are going through a divorce or difficult family situation, please reach out - Burns Law P.C. is currently accepting new clients!
        </p>
        <p className="font-medium  mt-4 text-sm lg:text-base">-Brian Burns</p>
        <p className="font-medium text-sm lg:text-base">ph: (773)236-2002</p>
        <p className="font-medium text-sm lg:text-base">@: brian@burnslawpc.com</p>
        
      </div>
    </section>
  );
};

export default AboutCoverSection;
