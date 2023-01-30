import { Schema , model,Types } from "mongoose";


const resultSchema=  new  Schema({

    Degree:{
        type:Number,
        required:true,
        max:[100,'max degree 100']
    },
    subjectName:{
        type:String,
        required:true,
        unique:[true,'subjectName unique ,u not con add two degree to same course']
    },
    studentId:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    }

},
{
    timestamps:true
})

const resultModel= model('result',resultSchema)
export default  resultModel  