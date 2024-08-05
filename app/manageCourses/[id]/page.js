"use client"
import ManageCourse from "@/components/manageCourses";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";




const showAllCourses = ({params})=> {
    const {data:session} = useSession();
    const router = useRouter();
    useEffect(()=> {
        if(!(session?.user)){
          router.push('/');
        }
    },[]
)
    return  <ManageCourse update={true} id={params?.id}/>
    

}
export default showAllCourses