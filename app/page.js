"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { InviteForm } from "@/components/inviteForm";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  
  const {data: session} = useSession();


  return (
    <main className={styles.main}>
    {session?.user?.email} {/* testing the session */}
    {session?.user ? (<button className={styles.button} onClick={signOut}>Sign Out</button> ): (<Link href="/api/auth/signIn"><button className={styles.button} onClick={signIn}>Sign In</button></Link> )} 
    <h2> Create an Invite Link to Join</h2>
    {session?.user && (<InviteForm />)}

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="CyberSecurTA"
          width={283}
          height={228}
          priority
        />
      </div>
      <div className={styles.center}>
      <p className={styles.title1}>Coming Summer 2024!!  See You Soon!</p>
      </div>

      
    </main>
  );
}
