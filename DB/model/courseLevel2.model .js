
import { Schema ,model ,Types } from "mongoose";

export const courseSchema= new Schema({
    course:{
        type:String,
        require:true,
        unique:[true, 'email is unique']
    },
    courseCode:{
        type:String,
        require:true,
        unique:[true, 'email is unique']
    },
    courseRequirement:{
        type:String,
        require:true
    },
    numberOfHoursOfCourse:{
        type:String,
        require:true
    },
    courseStatus:{
        type:String,
        default:"Compulsory course",
        require:true
    },
    
    isDeleted:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})

export const courseModel2=model('course2',courseSchema)