"use client"
import { useEffect} from "react"
import { useState } from "react"
import { getTestimonials } from "@/actions/getTestimonials"
import { TestimonialCards } from "./uiViews/testimonialCards" 
import PageHeader from "./pageHeader"
import { useRouter } from "next/navigation"



//show school listing

const TestimonialList = () => {
    
    const [testimony, setTestimony] = useState([]);
    const router = useRouter();
    const getData = async()=>{
        const values = await getTestimonials();
        const resp = JSON.parse(values);
        if(resp.error){
            alert(resp.error)
            console.log(resp.error);
            return;
        }
        setTestimony([...resp]);
    }
    useEffect(() => {
        getData();
    }, [])

    return (

        <div>
            <PageHeader title="Hear from Our Participants"/>

            <TestimonialCards testimonyList={testimony} />

        </div>
    )

}
export default TestimonialList;
