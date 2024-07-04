"use client"
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-4  px-5 md:px-10 flex items-center justify-between">
        <Logo />

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




        {/* <button className=" bg-blue-500 fixed top-10 right-4 md:hidden z-50 mr-6" onClick={toggle} aria-label="Hamburger Menu" style={{background:"black"}}>
          <div className="bg-blue-500 w-6 cursor-pointer transition-all ease duration-300">
            <div className="bg-blue-500 relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-accent dark:bg-light rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-accent dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-accent dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button> */}
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
            <Link href="/categories/all" className="mr-1 xxs:mr-2">Blog</Link>
            {/* <Link href="/contact" className="mr-1 xxs:mr-2">Contact</Link> */}
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
            <Link href="/" className="mr-2 text-accent hover:text-accentDark dark:text-black dark:hover:text-accent">Home</Link>
            <Link href="/about" className="mr-2 text-accent dark:text-black">About</Link>
            <Link href="/categories/all" className="mr-2 text-accent dark:text-black">Blog</Link>
            {/* <Link href="/contact" className="mx-2 text-accent dark:text-black">Contact</Link> */}
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2  flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-accent dark:bg-black text-light" :
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
            <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="fill-accent hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
            <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="fill-accent hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
        </div>
    </header>
  )
}

export default Header;