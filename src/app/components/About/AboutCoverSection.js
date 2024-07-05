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
            Let&apos;s Connect!
            </h2>
            <p className='font-medium  mt-4 text-sm lg:text-base text-justify'>
            As a seasoned professional at the intersection of law, technology, and politics, I have cultivated a diverse and impactful career spanning various domains. 

            </p>
            <p className='font-medium  mt-4 text-sm lg:text-base text-justify'>
            From spearheading small businesses in professional services and e-commerce to serving clients in court as a civil litigator, my journey has been defined by a relentless pursuit of excellence and innovation.
            My recent deep dive into emerging technology has been hilighted by the development of multiple applications aimed at streamlining and automating the production of customizable word documents and PDFs.
            </p>
            <p className='font-medium  mt-4 text-sm lg:text-base text-justify'>
            I also believe that the most important problems can only be soloved by great teams that leverage diverse experiences.  I would love to talk with you about how we could collaborate - please do not hesitate to send me an email!        
            </p>
            <p className='font-medium  mt-4 text-sm lg:text-base'>-Brian Burns</p>
            <p>brian@brianburns.com</p>
        </div>
    </section>
  )
}

export default AboutCoverSection