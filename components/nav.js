import { FiLock } from 'react-icons/fi';
import { IoIosLock } from "react-icons/io";
import { NavLinks } from '@/components/links';
import Link from 'next/link';


export const Header = () => {
  return (
    <header className="bg-slate-900 sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b border-gray-800 p-6 transition-all">
      <div className='flex gap-3 justify-center items-center'>
        <FiLock className="h-6 w-6 text-red-600" />
        <IoIosLock className="h-6 w-6 text-red-600" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-50 dark:text-white"><Link href="/">CyberSecurTA</Link></span>
      </div>
      <NavLinks />
    </header>
  )
}