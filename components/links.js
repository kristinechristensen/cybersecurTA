"use client"
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils"; 
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";




const Links = ()=>{
  const {data:session} = useSession();
  const path = usePathname();
  const router = useRouter();
  const endSession = ()=>{
    signOut(); 
    router.push('/');
  }
  return(
    <>
      <Link href="/" className={cn("font-bold hover:text-red-600 mx-2", (path=='/'?"text-red-700":"text-blue-950"))}>Home</Link>
      <Link href="/schools" className={cn("font-bold hover:text-red-600 mx-2", (path.includes('/schools')?"text-red-700":"text-blue-950"))}>Schools</Link>
      <Link href="/users" className={cn("font-bold hover:text-red-600 mx-2", (path.includes('/users')?"text-red-700":"text-blue-950"))}>Users</Link>
      <Link href="/profile" className={cn("font-bold hover:text-red-600 mx-2", (path.includes('/profile')?"text-red-700":"text-blue-950"))}>Profile</Link>
      {(session?.user?.userType === 1 || session?.user?.userType === 0) && (
             <Link href="/manageCourses" className={cn("font-bold hover:text-red-600 mx-2", (path.includes('/manageCourses')?"text-red-700":"text-blue-950"))}>Manage Courses</Link>
      )}
        {(session?.user?.userType === 0) &&( 
             <Link href="/manageSchools" className={cn("font-bold hover:text-red-600 mx-2", (path.includes('/manageSchools')?"text-red-700":"text-blue-950"))}>Manage Schools</Link>
          )}
     
      
      
      <Button size="sm" variant="link" className="px-3" onClick={endSession}><FiLogOut className="text-red-600 w-4 h-4 text-bold"/></Button>
    </>
  )
}

export const NavLinks = ()=>{
  const [isClosed, setClosed] = useState(true);
  const toggleNavbar = ()=>setClosed(!isClosed);
  return(
    <>
    <nav className="md:w-fit sm:1/4 flex justify-evenly">
      <div className="hidden md:flex w-full justify-between items-center">
        <Links/>
      </div>
      <div className="md:hidden">
        <Button onClick={toggleNavbar}  variant="link">
          {isClosed?<FiMenu className="h-5 w-5 text-blue-950"/>:<FiX className="h-5 w-5 text-blue-950"/>}
        </Button>
      </div>
    </nav>
      {!isClosed && (
        <div className="flex flex-col items-center basis-full gap-y-6">
        <Links/>
        </div>
      )}
    </>
  )
}