"use client"
import ManageCourse from "@/components/manageCourses";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




const showAllCourses = ({params})=> {
    return  <ManageCourse update={true} id={params?.id}/>
    

}
export default showAllCourses