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

const Links = ()=>{
  const path = usePathname();
  return(
    <>
      <Link href="" className={cn("hover:text-indigo-300", (path=='/'?"text-slate-0":""))}>Home</Link>
      <Link href="" className={cn("hover:text-indigo-300", (path=='/schools'?"text-indigo-400":""))}>Schools</Link>
      <Link href="" className={cn("hover:text-indigo-300", (path=='/oportunities'?"text-indigo-400":""))}>Oportunities</Link>
      <Button size="sm" className="px-3" onClick={signOut}><FiLogOut className="text-red-600 w-4 h-4 text-bold"/></Button>
    </>
  )
}

export const NavLinks = ()=>{
  const [isClosed, setClosed] = useState(true);
  const toggleNavbar = ()=>setClosed(!isClosed);
  return(
    <>
    <nav className="w-1/5 flex justify-end">
      <div className="hidden md:flex w-full justify-between items-center">
        <Links/>
      </div>
      <div className="md:hidden">
        <Button onClick={toggleNavbar}  variant="link">
          {isClosed?<FiMenu className="h-5 w-5"/>:<FiX className="h-5 w-5"/>}
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