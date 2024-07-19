"use server"
import connectToDB from "@/utils/database"
import School from "@/models/school"
import {auth} from "@/auth"

//3 actions - one to get individual school, one to update, and one to insert a new school

export const getSchool = async(id) => {

    if (!id) return {error:"What school are you looking for?"}  
   
    try {
        await connectToDB();
        const school = await School.findById(id);
        return JSON.stringify({school:school})
    }
    catch(error) {
        return {error:"School Not Found"}        
    }
}

//insert new school
export const insertSchool = async(schoolName, schoolsAddress, schoolCity, schoolState,schoolZip, schoolPhoto, schoolDesc) => {
    const session = await auth(); //admin only

    if(session?.user?.userType == 0) {

        try {
            await connectToDB();
            const school = new School();
            school.name = schoolName;
            school.sAddress = schoolsAddress;
            school.city = schoolCity;
            school.state = schoolState;
            school.zip = schoolZip;
            school.photo = schoolPhoto;
            school.desc = schoolDesc;     

            await school.save(); //save school
            return {success:"The School Has Been Added"}
        } 
        catch (error) {
            console.log(error)
            return{error:"School not added, make sure to include all properties"}
        }
    }
    else {
        return {error:"You do not have permission to change or add schools"}
    }
}

export const updateSchool = async(id,schoolName, schoolsAddress, schoolCity, schoolState,schoolZip, schoolPhoto, schoolDesc) => {

    const session = await auth(); //admin only
    if(session?.user?.userType == 0) {

        try {
            await connectToDB();

            const school = await School.findById(id);
            school.name = schoolName;
            school.sAddress = schoolsAddress;
            school.city = schoolCity;
            school.state = schoolState;
            school.zip = schoolZip;
            school.photo = schoolPhoto;
            school.Desc = schoolDesc;     

            await school.save(); //save school
            return {success:"The School Has Been Updated"}
        } 
        catch (error) {
            return{error:"School not updated, make sure to include all properties"}
        }
    }
}