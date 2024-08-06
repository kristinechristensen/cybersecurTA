"use client"
import { useEffect} from "react"
import { useState } from "react"
import { getSchools } from "@/actions/getSchools"
import { SchoolCards } from "./uiViews/schoolCards"
import PageHeader from "./pageHeader"
import Link from "next/link"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

//show school listing

const SchoolListAdmin = () => {
    
    const [schools, setSchools] = useState([]);
    const router = useRouter();
    const getData = async()=>{
        const values = await getSchools();
        const resp = JSON.parse(values);
        if(resp.error && resp.error=="Not Logged in") {
            router.push('/')
            return null;
        }
        setSchools([...resp]);
    }
    useEffect(() => {
        getData();
        console.log(schools);
    }, [])

    return (

        <div>
            <PageHeader title="Add or Edit Schools" />
            <div class="p-10">
                <Link href='/manageSchools/add' style={{float:'right'}}><Button variant="custom">Add Schools</Button></Link>
            </div>
            <SchoolCards schoolList={schools} showEdit={true}/>
        </div>




    )

}
export default SchoolListAdmin;