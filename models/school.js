import { Schema, model, models } from "mongoose";

const SchoolSchema = new Schema ({
    name:{
        type:String, 
        unique:true,
        required:[true, "School name Required"]
    },
    sAddress:{
        type:String, 
        required:[true, "Street Address Required"]
    },
    city:{
        type:String, 
        required:[true, "City Required"]
    },
    state:{
        type:String,
        },
    zip:{
        type:String, 
        required:[true, "Zip Code Required"]
    }, 
    photo:{
        type:String,  
    }, 
    desc:{
        type:String, 
        required: [true, "Description Required"]
    }
});

//checks to see if the model User exists, if it doesn't create one, otherwise use the User model
const School = models?.School || model("School", SchoolSchema, "School");

export default School;