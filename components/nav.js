'use client'
import { FiLock } from 'react-icons/fi';
import { IoIosLock } from "react-icons/io";
import { NavLinks } from '@/components/links';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Button } from './ui/button';
import styles from "../app/page.module.css";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const {data:session} = useSession();
  const path = usePathname();
  return (
    <header className="bg-white sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b-4 border-blue-950 p-7 transition-all text-xl">
      <div className='flex gap-3 justify-center items-center'>
       <Link href="/">
        <Image src="/csTALogo2.svg" width={350} className={styles.logo} height={80} alt="CybersecurTA" title="CybersecurTA logo"/></Link>
        {/* <FiLock className="h-6 w-6 text-red-600" />
        <IoIosLock className="h-6 w-6 text-red-600" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-50 dark:text-white"><Link href="/">CyberSecurTA</Link></span> */}
      </div>
      
      {(session?.user?.name)?
      <NavLinks />:
      <div className='flex justify-end items-center gap-2'>
       <Link href="/testimonials" className={cn("font-bold hover:text-red-600 mx-4", (path.includes('/testimonials')?"text-red-700":"text-blue-950"))}>Testimonials</Link>
        <Link href='/api/auth/signin'><Button variant="custom">Sign In</Button></Link>
      </div>
      }
    </header>
  )
}