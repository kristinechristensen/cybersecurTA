"use server"
import connectToDB from "@/utils/database"
import Course from "@/models/course"
import {auth} from "@/auth"

//get individual course 
export const getCourse = async(id) => {

    if (!id) return JSON.stringify({error:"What Course are you looking for?"})  
   
    try {
        await connectToDB();
        const course = await Course.findById(id).populate("userId").populate("schoolId");
        console.log(course);
        return JSON.stringify(course)
    }
    catch(error) {
        console.log(error)
        return JSON.stringify({error:"Course Not Found"})       
    }
}

//get all of the courses by school and add users that created the courses
export const getCourses = async(schoolid) => {

    if (!schoolid) return JSON.stringify({error:"What school are you looking for?"})  
   
    try {
        await connectToDB();
        const course = await Course.find({schoolId:schoolid}).populate("userId").populate("schoolId"); //populate = join 
        return JSON.stringify(course)
    }
    catch(error) {
        return JSON.stringify({error:"Courses Cannot Be Retrieved"})       
    }
}

//insert
export const insertCourse = async(title, crn, desc,level, nTA, schoolId) => {
    const session = await auth(); //teachers/admin only


    if(session?.user?.userType == 0 || session?.user?.userType == 1) {

        try {
            await connectToDB();
            const course = new Course ();
            course.userId = session?.user?.id;
            course.schoolId = schoolId;
            course.title = title;
            course.crn = crn;
            course.desc = desc;
            course.level = level;
            course.nTA = nTA;

            await course.save(); //save course
            return {success:"The Course Has Been Added"}
        } 
        catch (error) {
            console.log(error)
            return {error:"Course not added, make sure to include all properties"}
        }
    }
    else {
        return {error:"You do not have permission to change or add courses"}
    }
}


//update
export const updateCourse = async(id, title, crn, desc,level, nTA) => {
    const session = await auth(); //teachers/admin only

    if(session?.user?.userType == 0 || session?.user?.userType == 1) {

        try {
            await connectToDB();
            const course = await Course.findById(id)
            if(session?.user?.id == course.userId)  {
            course.title = title;
            course.crn = crn;
            course.desc = desc;
            course.level = level;
            course.nTA = nTA;
            await course.save(); //save course
            return {success:"The Course Has Been Added"}
            }
        else {
            return {error: "This is not your course and you cannot update it "}
        }
        } 
        catch (error) {
            console.log(error)
            return{error:"Course not added, make sure to include all properties"}
        }
    }
    else {
        return {error:"You do not have permission to change or add courses"}
    }
}


// generate a list of courses by faculty
export const facultyCourses = async()=>{
    const session = await auth(); 

    if(session?.user?.userType == 0 || session?.user?.userType == 1) {

    try {
        await connectToDB();
        const facultyList = await Course.find({userId:session?.user?.id}).populate('schoolId');
        return JSON.stringify({success: facultyList});

    }
    catch(error) {
        console.error(error);
        return JSON.stringify({error:"Course List Could Not Be Retrieved"});
    }


    }
    else {
        return JSON.stringify({error:"You do not have permission to view courses"});
    }

}

export const deleteCourse = async(id) => {
    const session = await auth(); //teachers/admin only

    if(session?.user?.userType == 0 || session?.user?.userType == 1) {

        try {
            await connectToDB();
            const course = await Course.findById(id)
            if(session?.user?.id == course.userId)  {
            await course.findByIdAndRemove(id); //save course
            return {success:"The Course Has Been Deleted"}
            }
        else {
            return {error: "This is not your course and you cannot delete it "}
        }
        } 
        catch (error) {
            console.log(error)
            return{error:"Course not deleted, make sure to include all properties"}
        }
    }
    else {
        return {error:"You do not have permission to change or add courses"}
    }
}