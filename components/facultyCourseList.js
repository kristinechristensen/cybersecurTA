"use client"
import { useState, useEffect } from "react";
import { facultyCourses } from "@/actions/manageCourses";
import { CourseCards } from "./uiViews/courseCards";
import Link from "next/link";
import { deleteCourse } from "@/actions/manageCourses"
import { Button } from "./ui/button";
import PageHeader from "./pageHeader";
import { useRouter } from "next/navigation"
import { MdAssignmentAdd } from "react-icons/md";


//show course listing by faculty

const FacultyCourseList = () => {
    const router = useRouter();
    const [courses, setCourses] = useState([]);
    // const [filteredCourses, setFilteredCourses] = useState([]);
    // const [level, setLevel] = useState("");
    const getData = async()=>{
        const values = await facultyCourses(); 
        const resp = JSON.parse(values);
        if(resp.error && resp.error=="Not Logged in") {
            router.push('/')
            return null;
        }
        if(!resp?.error)setCourses([...resp.success]);
        // if(!resp?.error)setFilteredCourses([...resp.success]);
    }
    useEffect(() => {
        getData();
    }, [])
    const handleDelete = async (id)=>{
        try{
            await deleteCourse(id);
            const newArr = courses.filter(elem=>elem._id!=id);
            setCourses([...newArr]);
        }catch(error){
            console.error(error);
        }
    }

    // const handleFilter = ()=>{
    //     let newArr = courses.filter(elem=>elem.level.includes(level)); 
    //     newArr = newArr.filter(elem=>elem.skills.includes(skills));
    //     setFilteredUsers([...newArr]);
    // }
    
    return (

        




        <div>
            <PageHeader title="Manage Your Courses" />

            <div className="flex flex-wrap">
     
     <div className="px-24 flex flex-wrap justify-center w-full items-cente text-lg">
     <div className="p-6 bg-blue-100"> 
        <h2 className="text-3xl font-semibold mb-4 flex items-center"><MdAssignmentAdd className="mr-2 text-4xl" />Add, Edit, or Delete Courses</h2>
        <p>Enter or update the course information in the provided fields, including title, CRN, description, level, and number of TAs. Select the associated school from the dropdown menu. Click "Submit" to save your changes. If editing an existing course, the form will be pre-filled with current data. Any errors or success messages will be displayed after submission.</p>
        
        <p className="mt-4">Double-check all information before clicking the Submit button at the bottom to save your changes. You'll see a confirmation message upon successful update or an error message if there's an issue. If you have any questions or problems, please contact the <Link href="mailto:cybersecurta@gmail.com" className="text-cyan-700 hover:text-red-600 font-semibold">system administrator </Link>.</p>
  
   
   <div>
                <Link href='/manageCourses/add' style={{float:'right'}}><Button variant="custom">Add Courses</Button></Link>
            </div></div>
 </div>
</div>



            
            <CourseCards courseList={courses} showEdit={true} handleDelete={handleDelete}/>
        </div>




    )

}
export default FacultyCourseList;