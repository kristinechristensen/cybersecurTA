"use client"
import { useEffect, useState, useTransition } from "react"
import { useSession} from "next-auth/react"
import { useRouter } from "next/navigation"
import { getSchool } from "@/actions/manageSchools"
import Image from "next/image"
import Link from "next/link"
import CoursesList from "@/components/courseList"
import PageHeader from "@/components/pageHeader"
import { Button } from "@/components/ui/button"

const individualSchool = ({params})=> {

const [schoolData, setSchoolData] = useState({});
const [pending, startTransition] = useTransition();

const router = useRouter();
useEffect(()=> {
    const getData = async ()=> {
        const data = await getSchool(params.id);
        const parseSchool = JSON.parse(data);
        if(parseSchool.error && parseSchool.error=="Not Logged in") {
            router.push('/')
            return null;
        }
        setSchoolData(parseSchool.school)
    }

if(params?.id) getData();
},[params.id]);

return (
<div>
 <PageHeader title={schoolData?.name} />

 
 <div className="flex flex-wrap">
 <div className="md:w-1/2 sm:w-full p-x-24 flex flex-column justify-end pr-20 items-center"> 
         <Image src={schoolData?.photo} alt={schoolData?.name} width={400} height={400} className="rounded hidden sm:block"/> 
     </div>
     <div className="md:w-1/2 sm:w-full px-24 flex flex-column items-center h-80">
         <div>
             <p className="mb-6">{schoolData?.desc}</p>
             <Link href="/schools"> <Button variant="custom" >Back to School Listing </Button> </Link>
         </div>
     </div>
    <h2 className="w-full text-center text-2xl font-medium p-6 bg-cyan-600 text-white"> Courses Offered at this School</h2>
    <div className="w-full content-center">
     <CoursesList schoolId={params.id}/>
   </div>
 </div>
{/* Consider adding student/faculty lists of each school */}






</div>


)

}
export default individualSchool