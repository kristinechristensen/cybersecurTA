import connectToDB from '@/utils/database';
import Course from '@/models/course';

/* CREATE School  ****************************************************************/

export const POST = async(request) => {
 //destructing JSON values from request
    const {userId, title, crn, des, level, nTA} = await request.json();    

  //required info 
    if(userId && title && crn && des && level && nTA) {

        try {
            await connectToDB();
            const course  = new Course ({userId, title, crn, des, level, nTA});

            await course.save();
            
            return new Response(JSON.stringify(course), {status:200});

        } catch (error) {
            console.log(error);
            return new Response("Failed to create a course, try again later", {status:500});
        }
    }
    else {
        return new Response("Failed to create a new course, specify all  values", {status:400});
    }
}


/* GET Course Information ****************************************************************/

export const GET = async()=>{
    try {
        await connectToDB();
        const course = await Course.find({}); 
        return new Response(JSON.stringify(course), {status:200});

    } catch(error) {
        console.log(error);
        return new Response("No Courses Found", {status:500});
    }
}


/* UPDATE Course Information ****************************************************************/

export const PUT = async(request) => {
    const {id, userId, title, crn, des, level, nTA} = await request.json();   

    try {
        await connectToDB();
        const existingCourse = await Course.findById(id);

        existingCourse.title = (title) ? title:existingCourse.title;
        existingCourse.crn  = (crn ) ? crn :existingCourse.crn   ;
        existingCourse.des = (des) ? des:existingCourse.des;
        existingCourse.level = (level) ? level:existingCourse.level;
        existingCourse.nTA = (nTA) ? nTA:existingCourse.nTA;
        
        await existingCourse.save();
        return new Response("Course information updated successfully", {status:200});
    }
     catch (error) {
        console.log(error);
        return new Response ("Course information NOT updated", {status:500});
    }
   
}