'use client'
import { FiLock } from 'react-icons/fi';
import { IoIosLock } from "react-icons/io";
import { NavLinks } from '@/components/links';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Button } from './ui/button';
import styles from "../app/page.module.css";


export const Header = () => {
  const {data:session} = useSession();
  return (
    <header className="bg-white sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b border-b-2 border-blue-950 p-6 transition-all">
      <div className='flex gap-3 justify-center items-center'>
       <Link href="/">
        <Image src="/csTALogo.svg" width={250} className={styles.logo} height={80} alt="CybersecurTA" /></Link>
        {/* <FiLock className="h-6 w-6 text-red-600" />
        <IoIosLock className="h-6 w-6 text-red-600" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-50 dark:text-white"><Link href="/">CyberSecurTA</Link></span> */}
      </div>
      
      {(session?.user?.name)?
      <NavLinks />:
      <Link href='/api/auth/signin'><Button variant="custom">Sign In</Button></Link>
      }
    </header>
  )
}