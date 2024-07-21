"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { InviteForm } from "@/components/inviteForm";
import { signIn, useSession } from "next-auth/react";
import UpdateUser from "@/components/updateProfile";
import ManageSchool from "@/components/manageSchools";
import ManageCourse from "@/components/manageCourses";
import SchoolList from "@/components/schoolList";

// import { signOut } from "next-auth/react";

export default function Home() {
  
  const {data: session} = useSession();


  return (
    <div className={styles.main}>
    {session?.user?.email} {/* testing the session */}
    {session?.user ? (<button className={styles.button}>Sign Out</button> ): (<Link href="/api/auth/signin"><button className={styles.button} onClick={signIn}>Sign In</button></Link> )} 
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
        
           {/* <UpdateUser /> */}

      <div>
      {/* <ManageSchool update={true} id="6670c4b06acf4ff7f0bc1855" /> */}
      <ManageSchool />
      <ManageCourse /> 
     
      </div>
        <SchoolList />
      </div>      
    </div>
  );
}
