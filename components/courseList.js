"use client"

import { useEffect} from "react"
import { useState } from "react"
import { getCourses } from "@/actions/manageCourses"
import { CourseCards } from "./uiViews/courseCards"
import { useRouter } from "next/navigation"
//show course listing

const CoursesList = ({schoolId}) => {
    const router = useRouter();
    const [courses, setCourses] = useState([]);
    const getData = async()=>{
        const values = await getCourses(schoolId); //testing
        const resp = JSON.parse(values);
        if(resp.error && resp.error=="Not Logged in") {
            router.push('/')
            return null;
        }
        if(!resp.error) setCourses([...resp]);
    }
    useEffect(() => {
        getData();
    }, [])

    return (

        <div>
            <CourseCards courseList={courses} />
        </div>




    )

}
export default CoursesList;