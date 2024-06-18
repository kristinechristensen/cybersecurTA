//importing functions/objects from mongoose package
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema ({
    email: {
        type:String,
        unique:[true, "This email already exists"], 
        required:[true, "Email Account is "]
    }, 
    emailG:{
       type:String, 
       /*unique:[true, "This email already exists"] */
    },
    password:{
        type:String,
        required:[true, "Password Required"]
    }, 
    active:{
        type:Boolean,
        default:true
    },
    firstName:{
        type:String, 
        required:[true, "First Name Required"]
    }, 
    lastName:{
        type:String, 
        required:[true, "Last Name Required"]
    },
    phone:{
        type:String, 
        required:[true, "Phone Number Required"]
    },
    sAddress:{
        type:String, 
        required:[true, "Address Required"]
    },
    city:{
        type:String, 
        required:[true, "City Required"]
    },
    state:{
        type:String, 
        required:[true, "State Required"]
    },
    zip:{
        type:Number, 
        required:[true, "Zip Code Required"]
    },
    userType:{
        type:Number, 
        required:[true, "Please specify your user type"]
    },
    school:{
        type:Schema.Types.ObjectId, 
        ref:'School',
        //required:[true, "Please specify your school"]
    },
    pos:{
        type:String, 
        required:[true, "Program of Study Required"]
    },
    level:{
        type:String, 
        required:[true, "Level of Education Required"]
    },
    cert:{
        type:[String], 
        required:[true, "Certifications Required"]
    }, 
    skills:{
        type:[String], 
        required:[true, "Skills Required"]
    }, 
    interests:{
        type:[String], 
    }, 
    bio:{
        type:String
    }, 
    testimony:{
        type:String
    }, 
    linkedIn:{
        type:String
    }
   
});

//checks to see if the model User exists, if it doesn't create one, otherwise use the User model
const User = model.User || model("User", UserSchema);

export default User;