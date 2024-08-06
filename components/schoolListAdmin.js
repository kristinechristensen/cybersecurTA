"use client"
import { useEffect} from "react"
import { useState } from "react"
import { getSchools } from "@/actions/getSchools"
import { SchoolCards } from "./uiViews/schoolCards"
import PageHeader from "./pageHeader"
import Link from "next/link"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { MdDomainAdd } from "react-icons/md";


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

            <div className="flex flex-wrap">
     
     <div className="px-24 flex flex-wrap justify-center w-full items-center text-lg">
     <div className="p-6 bg-blue-100"> 
        <h2 className="text-3xl font-semibold mb-4 flex items-center"><MdDomainAdd className="mr-2 text-4xl"/>Add or Edit Schools</h2>
        <p>To edit a school's information, find the school in the list and click its edit option. This opens a pre-filled form where you can update details like name and address. Review your changes carefully, then click the Submit button to save. Wait for a confirmation message. If you encounter any errors, make corrections and try again. After successful updates, you'll see the changes reflected in the main school list.</p>
        
        <p className="mt-4">To add a new school,  click the Add Schools button. This will take you to a form where you can enter the new school's details, including name, address, and other relevant information. Fill out all required fields carefully. Once you've entered all the necessary information, review it for accuracy, then click the Submit utton to create the new school entry. Wait for a confirmation message to ensure the school has been successfully added to the system.</p>
  
   
        <div class="mt-6">
                <Link href='/manageSchools/add' style={{float:'right'}}><Button variant="custom">Add Schools</Button></Link>
            </div>
            
            
            </div>
 </div>
</div>
            
            <SchoolCards schoolList={schools} showEdit={true}/>
        </div>




    )

}
export default SchoolListAdmin;