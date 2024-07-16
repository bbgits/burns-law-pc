import Image from 'next/image'
import React from 'react'
import profileCharacter from "public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex items-center justify-center'> 
            <Image src={profileCharacter} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-right'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl text-center lg:text-left mt-4'>
            About Brian Burns
            </h2>
            <p className='font-medium  mt-4 text-sm lg:text-base text-justify'>
            After graduating cum laude from the University of Memphis law school in 2016, I worked in-house at the Federal Election Commission and a consulting firm in D.C. before moving back home to Chicago to work at a financial technology startup.  For the past several years, I have focused my legal career exclussively on Family Law.

            </p>
            <p className='font-medium  mt-4 text-sm lg:text-base text-justify'>
            I created Burns Law P.C. in 2024 to so that I could leverage my professional and technical skills to provide top tier service to clients at an affordable price. I am also a self-taught computer programmer and have used my technology skills to streamline processes at Burns Law P.C. so that the client stays informed on their matter and ultimately walks away with the best result possible at an affordable price.
            </p>
            <p className='font-medium  mt-4 text-sm lg:text-base text-justify'>
            If you are going through a divorce or difficult family situation and are looking for an  Attorney who will fight for you and keep you informed every step of the way, please send me an email.  I am currently accepting new clients and would love to learn more about you and your needs.        
            </p>
            <p className='font-medium  mt-4 text-sm lg:text-base'>-Brian Burns</p>
            <p>brian@brianburns.com</p>
        </div>
    </section>
  )
}

export default AboutCoverSection