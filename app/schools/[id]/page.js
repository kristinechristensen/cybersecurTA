"use client"
import { useEffect, useState, useTransition } from "react"
import { getSchool } from "@/actions/manageSchools"
import Image from "next/image"
import Link from "next/link"

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
 <h1>{schoolData?.name}</h1>
<Image src={schoolData?.photo} alt={schoolData?.name} width={300} height={300}/> 
<h1>Test</h1>
{schoolData?.name}
{schoolData?.desc}

<Link href="/schools"> Back to School Listing </Link>


</div>


)

}
export default individualSchool