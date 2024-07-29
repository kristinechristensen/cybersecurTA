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
import { TempUserList } from "@/components/userList";
import CoursesList from "@/components/courseList";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import "./embla.css";
import EmblaCarousel from "@/components/slider";




export default function Home() {

  // const {data: session} = useSession();
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const {data:session} = useSession();


  return (
    <div className={styles.main}>
    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    {/* create two column layout */}

    <div className="flex flex-wrap w-full p-10">
      <div className="md:w-1/2 sm:w-full items-center justify-center flex">  
      <Image src="/assets/studentsWorking.png"
      width="300" height="300"
      alt="Students working together" />
      
      </div>
      <div className="md:w-1/2 sm:w-full"> Discover CyberSecurTA:
<h3 className="font-bold">Revolutionizing Cybersecurity Education!</h3>
<p className="m-t-4">Are you a cybersecurity student looking to gain real-world teaching
experience? Or an educator seeking skilled teaching assistants to
enhance your classroom? CyberSecurTA is your ultimate solution!</p>
<h3> Participation is Invitation Only</h3>
<p>Our innovative platform connects passionate cybersecurity
students with educators in need of knowledgeable TAs, creating a
seamless match based on skills and availability.</p>
Together, we are bridging the gap in cybersecurity education,
empowering future leaders, and securing our digital future.
      {session?.user && (<InviteForm />)}
      </div>

    </div>




    </div>
  );
}
