"use client"
import { useEffect, useState } from "react"
import { getSchool } from "@/actions/manageSchools"
import Image from "next/image"



const individualSchool = ({params})=> {

const [schoolData, setSchoolData] = useState({});

useEffect(()=> {
    const getData = async ()=> {
        const data = await getSchool(params.id);
        const parseSchool = JSON.parse(data);
        setSchoolData(parseSchool)
    }
    if(params?.id)getData();
    console.log(schoolData);
},[params.id]);

return (
<div>
{/* <h1>{schoolData?.name}</h1>
<Image src={schoolData?.photo} alt={schoolData?.name}/> */}
<h1>Test</h1>
{schoolData?.name}


</div>


)

}
export default individualSchool