'use client'
import FacultyCourseList from "@/components/facultyCourseList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const GetCourses = ()=>{
    const {data:session} = useSession();
    const router = useRouter();
    useEffect(()=> {
        if(!(session?.user)){
          router.push('/');
        }
    },[]
    )

    return <FacultyCourseList/>
}

export default GetCourses;