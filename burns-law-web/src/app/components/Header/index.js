// src\app\components\Header\index.js
"use client"
import Link from "next/link";
import Image from 'next/image';


import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import { practiceAreaMenuItems } from "@/src/app/practice-areas/practiceAreas";
import logoImg from '@/public/BLPC-logo-short-bw.png';
import darkLogoImg from '@/public/BLPC-logo-short-ws.png';

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}

  const practiceAreaDropdown = (
    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
      <div className="min-w-[15rem] rounded-2xl border border-solid border-accent/20 bg-light/95 dark:bg-dark/95 backdrop-blur-sm shadow-lg p-3">
        {practiceAreaMenuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-accent hover:bg-accent/10 dark:text-light dark:hover:bg-light/10"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="w-full p-4  px-5 md:px-10 flex items-center justify-between">
        {/* <Logo /> */}
        <Link href="/" className="flex items-center text-dark">
      <div className="w-30 h-12 flex items-center justify-center">
        {/* Dynamically switch logo based on the mode prop */}
        <Image
          src={mode === 'dark' ? darkLogoImg : logoImg}
          alt="blog logo"
          className="object-contain h-full w-full"
        />
      </div>
    </Link>

       {/* hamburger menu, only visible up to md (768 px) */}

        <div className="flex ">
        <button className=" object-cover fixed top-6 right-4 md:hidden z-40 mr-2" onClick={toggle} aria-label="Hamburger Menu" style={{ background: "#FF0000" }}>
  <div className="rounded-xl absolute top-0 right-0 bg-light dark:bg-dark bg-opacity-50 z-50 w-10 h-9 cursor-pointer transition-all ease duration-300">
    <div className="absolute top-4 right-8">
      <span
        className="absolute top-.5 inline-block w-6 h-0.5 bg-accent dark:bg-light rounded transition-all ease duration-200"
        style={{
          transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
        }}
      >
        &nbsp;
      </span>
      <span
        className="absolute top-.5 inline-block w-6 h-0.5 bg-accent dark:bg-light rounded transition-all ease duration-200"
        style={{
          opacity: click ? 0 : 1
        }}
      >
        &nbsp;
      </span>
      <span
        className="absolute top-.5 inline-block w-6 h-0.5 bg-accent dark:bg-light rounded transition-all ease duration-200"
        style={{
          transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
        }}
      >
        &nbsp;
      </span>
      </div>
  </div>
</button>

</div>


{/* visible when hamburger clicked on small screen */}
        <nav className=" w-max py-3 px-2 xs:px-4 sm:px-8 border border-solid border-accent dark:border-dark rounded-full font-medium capitalize  items-center flex  md:hidden
        fixed top-6 xxs:right-1/2 xxs:translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300 text-accent dark:text-dark text-xs xxs:text-sm
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mr-2">About</Link>
          <Link href="/practice-areas" className="mr-2">Practice Areas</Link>
            <Link href="/categories/all" className="mr-2">Blog</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-accent text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>

{/* primary nav menu, hidden on small screens */}
        <nav className=" w-max py-3 px-8 border border-solid border-accent dark:border-none rounded-full font-medium capitalize  items-center hidden md:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 ">
            <Link href="/" className="px-4 text-accent hover:text-accentDark dark:text-black dark:hover:text-accent">Home</Link>
            <span className="text-gray-300 select-none">|</span>
            <Link href="/about" className="px-4 text-accent dark:text-black">About</Link>
            <span className="text-gray-300 select-none">|</span>
            <div className="relative group px-4">
              <Link href="/practice-areas" className="text-accent dark:text-black">
                Practice Areas
              </Link>
              {practiceAreaDropdown}
            </div>
            <span className="text-gray-300 select-none">|</span>
            <Link href="/categories/all" className="px-4 text-accent dark:text-black">Blog</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-4  flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-accent dark:bg-black text-light" :
            "bg-light text-accent dark:text-black" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>

{/* social icons, visible only md screen (768px) and above */}
        <div className=" hidden md:flex items-center">
            <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="fill-accent hover:scale-125 transition-all ease duration-200 dark:fill-light dark:stroke-black dark:bg-clip-content" /></a>
            {/* <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="fill-accent hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a> */}
            {/* <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="fill-accent hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a> */}
        </div>
    </header>
  )
}

export default Header;