import connectToDB from '@/utils/database';
import School from '@/models/school';

/* CREATE School  ****************************************************************/

export const POST = async(request) => {
 //destructing JSON values from request
    const {name, sAddress, city, zip, photo, desc} = await request.json();    

  //required info 
    if(name && sAddress && city && zip && photo && desc) {

        try {
            await connectToDB();
            const school = new School({name, sAddress, city, zip, photo, desc});

            await school.save();
            
            return new Response(JSON.stringify(school), {status:200});

        } catch (error) {
            console.log(error);
            return new Response("Failed to create a school, try again later", {status:500});
        }
    }
    else {
        return new Response("Failed to create a new school, specify all  values", {status:400});
    }
}


/* GET Schoool Information ****************************************************************/

export const GET = async()=>{
    try {
        await connectToDB();
        const school = await School.find({}); 
        return new Response(JSON.stringify(school), {status:200});

    } catch(error) {
        console.log(error);
        return new Response("No School Found", {status:500});
    }
}


/* UPDATE User Information ****************************************************************/

export const PUT = async(request) => {
    const {id, name, sAddress, city, zip, photo, desc} = await request.json();   

    try {
        //connect to database **** 
        await connectToDB();
        const existingSchool = await School.findById(id);

        existingSchool.name = (name) ? name:existingUser.name;
        existingSchool.sAddress  = (sAddress ) ? sAddress :existingUser.sAddress   ;
        existingSchool.city = (city) ? city:existingUser.city;
        existingSchool.zip = (zip) ? zip:existingUser.zip;
        existingSchool.photo = (photo) ? photo:existingUser.photo;
        existingSchool.desc = (desc) ? desc:existingUser.desc;
        
        await existingSchool.save();
        return new Response("School information updated successfully", {status:200});
    }
     catch (error) {
        console.log(error);
        return new Response ("School information NOT updated", {status:500});
    }
   
}