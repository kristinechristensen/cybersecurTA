'use client'
import FacultyCourseList from "@/components/facultyCourseList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const GetCourses = ()=>{

    return <FacultyCourseList/>
}

export default GetCourses;