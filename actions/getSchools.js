//server action to retrieve school information
"use server";
import connectToDB from "@/utils/database";
import School from "@/models/school";
import { auth } from "@/auth";

export const getSchools = async(reg)=>{

    try {
        const session = await auth();
        if(!reg){
            if(!session?.user) return JSON.stringify({error: 'Not Logged in'});
        }
        await connectToDB();
        const schools = await School.find({}).sort({name:"asc"}); //bring back all schools alphabetically. 
        return JSON.stringify(schools);
    }
    catch(error) {
        console.log(error.message)
    }
    return{}  
}
