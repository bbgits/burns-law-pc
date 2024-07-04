import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logoImg from '@/public/critical-burns-logo.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-12 h-12 rounded-full overflow-clip flex justify-center items-center">
        <Image src={logoImg} alt="blog logo" className="h-full w-fit rounded-full align-middle self-center"/>
      </div>
      <span className="text-accent font-bold text-xl dark:text-light">Brian Burns</span>
    </Link>
  )
}

export default Logo
