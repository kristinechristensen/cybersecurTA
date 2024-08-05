"use client"
import ManageCourse from "@/components/manageCourses";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




const ShowAllCourses = ()=> {
    const {data:session} = useSession();
    const router = useRouter();
    if(!(session?.user)){
        router.push('/');
    }
    
    return  <ManageCourse/>
    

}
export default ShowAllCourses