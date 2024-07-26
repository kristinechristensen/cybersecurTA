import { Schema, model, models } from "mongoose";


const CourseSchema = new Schema ({
    userId:{    
        type:Schema.Types.ObjectId, 
        ref:'User', 
        required:[true, "User ID is required"]        
    },
    schoolId:{
        type:Schema.Types.ObjectId,
        ref:'School', 
        required:[true, "School required]"]
    }, 
    title:{
        type:String, 
        required:[true, "Course Title Required"]
    },
    crn:{
        type:String, 
        required:[true, "Course Record Number is required"], 
        
    },
    desc:{
        type:String, 
        required:[true, "Course Description is required"]
    },
    level:{
        type:String, 
        required:[true, "Course Level is required"]
    }, 
    nTA:{
        type:Number, 
        required:[true, "Number of TAs needed is required"] //set default value to 0 and hide element for student
    }   
});

//checks to see if the model User exists, if it doesn't create one, otherwise use the User model
const Course = models.Course || model("Course", CourseSchema);

export default Course;