"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { InviteForm } from "@/components/inviteForm";
import { useSession } from "next-auth/react";
import "./embla.css";
import EmblaCarousel from "@/components/slider";




export default function Home() {

  // const {data: session} = useSession();
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const { data: session } = useSession();


  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* create two column layout */}

      <div className="flex flex-wrap w-full p-10 text-xl">
        {/* Content for users not logged in */}
        {!(session?.user) && (
          <div className="flex flex-wrap md:w-full sm:w-full">
            <div className="md:w-1/2 sm:w-full items-start justify-center  flex p-4">
              <Image src="/assets/students1.jpg" width="700" height="300" className="rounded-lg dropshadow-xl mr-4" alt="Students working together"
              />
            </div>
            <div className="md:w-1/2 sm:w-full">
              <h3 className="text-4xl font-bold pb-2 text-gray-900 sm:text-5xl md:text-6xl my-4">
                Discover <span className="bg-clip-text text-blue-900">CyberSecur</span>
                <span className="bg-clip-text text-red-600">TA:</span>
              </h3>
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">Revolutionizing Cybersecurity Education!</h3>
              <p className="mb-3">
                Are you a cybersecurity student looking to gain real-world teaching
                experience? Or an educator seeking skilled teaching assistants to
                enhance your classroom? Talk to your teacher about joining <span className="bg-clip-text text-blue-900 font-semibold">CyberSecur</span>
                <span className="bg-clip-text text-red-600 font-semibold">TA</span> and help hack the gap !
              </p>
              <h3 className="text-2xl italic font-bold mb-3 text-red-700">Participation is Invitation Only</h3>
              <p className="mb-3">
                Our innovative platform connects passionate cybersecurity
                students with educators in need of knowledgeable TAs, creating a
                seamless match based on skills and availability.
              </p>
              <p className="mb-3 font-bold text-blue-900">
                Together, we are bridging the gap in cybersecurity education,
                empowering future leaders, and securing our digital future.
              </p>
            </div>
          </div>
        )}

        {/* Content for admins and faculty */}
        {(session?.user?.userType === 1 || session?.user?.userType === 0) && (
          <div className="flex flex-wrap md:w-full sm:w-full">
            <div className="md:w-1/2 sm:w-full items-start justify-center  flex p-4">
            <Image src="/assets/students2.jpg" width="700" height="300" className="rounded-lg dropshadow-xl mr-4" alt="Students working together"
              />
            </div>
            <div className="md:w-1/2 sm:w-full">
              <h3 className="text-3xl font-bold pb-2 text-gray-900 sm:text-5xl md:text-6xl my-4">
                Invite a Student to Join <span className="bg-clip-text text-blue-900">CyberSecur</span>
                <span className="bg-clip-text text-red-600">TA:</span>
              </h3>
              <p>
                To select a quality student for <span className="bg-clip-text text-blue-900 font-semibold">CyberSecur</span>
                <span className="bg-clip-text text-red-600 font-semibold">TA</span>, consider their academic performance, demonstrated skills in cybersecurity, and passion for teaching. Look for candidates with strong technical knowledge, relevant certifications, and hands-on experience in cybersecurity projects.
              </p>
              <p className="my-4">
                Additionally, prioritize students who exhibit excellent communication skills, a collaborative mindset, and a genuine interest in educating others. Remember, <span className="bg-clip-text text-blue-900 font-semibold">CyberSecur</span>
                <span className="bg-clip-text text-red-600 font-semibold">TA</span> is an <span className="font-bold">invite-only</span> platform, so your selection ensures we maintain a high standard of excellence and dedication within our community.
              </p>
              <InviteForm />
            </div>
          </div>
        )}

        {/* Content for students */}
        {(session?.user?.userType === 2) && (
 <div className="flex flex-wrap md:w-full sm:w-full"> 
 <div className="md:w-1/2 sm:w-full items-start justify-center flex p-4">
 <Image src="/assets/students2.jpg" width="700" height="300" className="rounded-lg dropshadow-xl mr-4" alt="Students working together"
   />
 </div>
 <div className="md:w-1/2 sm:w-full">
   <h3 className="text-2xl font-bold pb-2 text-gray-900 sm:text-5xl md:text-6xl my-4">
    Welcome to 
     <span className="bg-clip-text text-blue-900"> CyberSecur</span>
     <span className="bg-clip-text text-red-600">TA: </span>
     {session?.user?.firstName}
   </h3>
   <p>
    o select a quality student for <span className="bg-clip-text text-blue-900 font-semibold">CyberSecur</span>
     <span className="bg-clip-text text-red-600 font-semibold">TA</span>, consider their academic performance, demonstrated skills in cybersecurity, and passion for teaching. Look for candidates with strong technical knowledge, relevant certifications, and hands-on experience in cybersecurity projects.
   </p>
   <p className="my-4">
     Additionally, prioritize students who exhibit excellent communication skills, a collaborative mindset, and a genuine interest in educating others. Remember, <span className="bg-clip-text text-blue-900 font-semibold">CyberSecur</span>
     <span className="bg-clip-text text-red-600 font-semibold">TA</span> is an <span className="font-bold">invite-only</span> platform, so your selection ensures we maintain a high standard of excellence and dedication within our community.
   </p>
   
 </div>
</div>
        )}
      </div>
    </div>
  );
}
