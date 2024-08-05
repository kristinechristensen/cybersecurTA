"use client"
import { useState, useEffect } from "react";
import { facultyCourses } from "@/actions/manageCourses";
import { CourseCards } from "./uiViews/courseCards";
import Link from "next/link";
import { deleteCourse } from "@/actions/manageCourses"
import { Button } from "./ui/button";
import PageHeader from "./pageHeader";



//show course listing by faculty

const FacultyCourseList = () => {
    
    const [courses, setCourses] = useState([]);
    // const [filteredCourses, setFilteredCourses] = useState([]);
    // const [level, setLevel] = useState("");
    const getData = async()=>{
        const values = await facultyCourses(); 
        const resp = JSON.parse(values);
        console.log(resp);
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
            <PageHeader title="Add or Edit Courses" />
            <div className="p-10">
                <Link href='/manageCourses/add' style={{float:'right'}}><Button variant="custom">Add Courses</Button></Link>
            </div>
            <CourseCards courseList={courses} showEdit={true} handleDelete={handleDelete}/>
        </div>




    )

}
export default FacultyCourseList;