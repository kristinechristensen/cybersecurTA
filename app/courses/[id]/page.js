"use client"
import { useEffect, useState} from "react"
import { getCourse } from "@/actions/manageCourses"
import Image from "next/image"
import Link from "next/link"


const IndividualCourse = ({params})=> {

const [courseData, setCourseData] = useState({});


useEffect(()=> {

    const getData = async ()=> {
        const data = await getCourse(params.id);
        const parseCourse = JSON.parse(data);
        setCourseData(parseCourse);
        console.log("Here is the data",parseCourse)
    }

if(params?.id) getData();
},[params.id]);

return (
<div>
 <h1>{courseData?.name}</h1>
<h1>Test</h1>
{courseData?.schoolId?.name}
{courseData?.userId?.firstName} {courseData?.userId?.firstLame} 
<Link href={"mailto:"+courseData?.userId?.email}>{courseData?.userId?.email} </Link>
{courseData?.userId?.phone}


<Link href={"/schools/"+courseData?.schoolId?._id}> Back to School Listing </Link>


</div>


)

}
export default IndividualCourse;