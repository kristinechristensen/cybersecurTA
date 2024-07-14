//server action to retrieve school information
"use server";
import connectToDB from "@/utils/database";
import School from "@/models/school";

export const getSchools = async()=>{

    try {
        await connectToDB();
        const schools = await School.find({}); //bring back all schools
        return schools;
    }
    catch(error) {
        console.log(error.message)
    }
    return{}  
}
