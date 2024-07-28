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
      <div className="md:w-1/2 sm:w-full items-center justify-center flex"> GRAPHIC Here</div>
      <div className="md:w-1/2 sm:w-full"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the rele
      {session?.user && (<InviteForm />)}
      </div>

    </div>




    </div>
  );
}
