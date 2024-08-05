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
  const { data: session } = useSession();


  return (
    <div className={styles.main}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* create two column layout */}

      <div className="flex flex-wrap w-full p-10">
        <div className="md:w-1/2 sm:w-full items-center justify-center flex">
          <Image src="/assets/studentsWorking.png"
            width="300" height="300"
            alt="Students working together" />

        </div>
        {/* Show for users not logged in */}
          {!(session?.user) && (
            <div className="md:w-1/2 sm:w-full">
            <h3 className="text-5xl font-bold text-gray-900 sm:text-5xl md:text-6xl pb-6"> Discover <span className="bg-clip-text text-blue-900">CyberSecur</span><span className="bg-clip-text text-red-600">TA:</span>
            </h3>
            <h3 className="text-4xl font-bold">Revolutionizing Cybersecurity Education!</h3>
            <p className="mb-3 text-gray-500 dark:text-gray-400 pb-6">Are you a cybersecurity student looking to gain real-world teaching
              experience? Or an educator seeking skilled teaching assistants to
              enhance your classroom? CyberSecurTA is your ultimate solution!</p>
            <h3 className="text-2xl font-bold mb-5 text-red-700"> Participation is Invitation Only</h3>
            <p className="mb-3 text-gray-500 dark:text-gray-400 pb-6 ">Our innovative platform connects passionate cybersecurity
              students with educators in need of knowledgeable TAs, creating a
              seamless match based on skills and availability.</p>
            Together, we are bridging the gap in cybersecurity education,
            empowering future leaders, and securing our digital future.
          </div>
          )}
{/* 
          show to admins and faculty */}
          {(session?.user?.userType === 1 || session?.user?.userType === 0) && (
            <div className="md:w-1/2 sm:w-full">
              <h2>Invite a student</h2>
              <p>
                  To select a quality student for Cyber SecurTA, consider their academic performance, demonstrated skills in cybersecurity, and passion for teaching. Look for candidates with strong technical knowledge, relevant certifications, and hands-on experience in cybersecurity projects. Additionally, prioritize students who exhibit excellent communication skills, a collaborative mindset, and a genuine interest in educating others. Remember, Cyber SecurTA is an invite-only platform, so your selection ensures we maintain a high standard of excellence and dedication within our community.
</p>
              <InviteForm />
            </div>
          )}
          {(session?.user?.userType === 2) && (
            <div className="md:w-1/2 sm:w-full">
              <h2>Student View</h2>
            </div>
          )}
          

      </div>




    </div>
  );
}
