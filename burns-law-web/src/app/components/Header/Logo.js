import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoImg from '@/public/BLPC-logo-short-bw.png'
import darkLogoImg from '@/public/BLPC-logo-short-ws.png' // Import the dark mode logo image

const Logo = () => {
  const [mode, setMode] = useState("light"); // Set the initial mode state

  // Use useEffect to set up initial mode and listen for theme changes
  useEffect(() => {
    const userPreference = window.localStorage.getItem("theme");
    if (userPreference) {
      setMode(userPreference);
    } else {
      const preferDarkQuery = "(prefers-color-scheme: dark)";
      setMode(window.matchMedia(preferDarkQuery).matches ? "dark" : "light");
    }

    const handleThemeChange = () => {
      const newMode = window.localStorage.getItem("theme");
      if (newMode) {
        setMode(newMode);
      }
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-30 h-12 flex items-center justify-center">
        <Image src={mode === "dark" ? darkLogoImg : logoImg} alt="blog logo" className="object-contain h-full w-full" />
      </div>
    </Link>
  )
}

export default Logo
