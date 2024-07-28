"use client"
import { useEffect, useState, useTransition } from "react"
import { getSchool } from "@/actions/manageSchools"
import Image from "next/image"
import Link from "next/link"
import CoursesList from "@/components/courseList"
import PageHeader from "@/components/pageHeader"
import { Button } from "@/components/ui/button"

const individualSchool = ({params})=> {

const [schoolData, setSchoolData] = useState({});
const [pending, startTransition] = useTransition();

useEffect(()=> {

    const getData = async ()=> {
        const data = await getSchool(params.id);
        const parseSchool = JSON.parse(data);
        setSchoolData(parseSchool.school)
    }
// startTransition(()=>{
//     getSchool(params.id).then((data)=>{
//         data = JSON.parse(data); 
//         // console.log(data)
//         setSchoolData(data.school);
//     })
//     console.log(schoolData);
// })
if(params?.id) getData();
},[params.id]);

return (
<div>
 <PageHeader title={schoolData?.name} />

 
 <div className="flex flex-wrap">
     <div className="md:w-1/2 sm:w-full p-x-24 flex flex-column justify-center items-center h-80">
         <Image src={schoolData?.photo} alt={schoolData?.name} width={300} height={300} className="rounded"/> 
     </div>
     <div className="md:w-1/2 sm:w-full p-x-24 flex flex-column items-center h-80">
         <div>
             <p>{schoolData?.desc}</p>
             <Link href="/schools"> <Button variant="custom" >Back to School Listing </Button> </Link>
         </div>
     </div>
    <h2 className="w-full text-center text-2xl text-bold p-8 bg-cyan-800 text-white"> Courses Offered at this School</h2>
     <CoursesList schoolId={params.id}/>
 </div>
{/* Consider adding student/faculty lists of each school */}





</div>


)

}
export default individualSchool