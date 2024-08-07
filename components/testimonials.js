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
        if(resp.error && resp.error=="Not Logged in") {
            router.push('/')
            return null;
        }
        setTestimony([...resp]);
    }
    useEffect(() => {
        getData();
    }, [])

    return (

        <div>
            <PageHeader title="Testimonials"/>
            <TestimonialCards testimonyList={testimony} />

        </div>
    )

}
export default TestimonialList;
