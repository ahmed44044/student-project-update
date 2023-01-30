import { create, find, findById, findByIdAndUpdate, findOne, findOneAndDelete, updateOne } from "../../../../DB/DBMethod.js";
import { courseModel1 } from "../../../../DB/model/courseLevel1.model.js";
import { courseModel2 } from "../../../../DB/model/courseLevel2.model .js";
import { courseModel3 } from "../../../../DB/model/courseLevel3.model .js";
import { courseModel4 } from "../../../../DB/model/courseLevel4.model .js";
import { materialModel } from "../../../../DB/model/material.model.js";
import userModel from "../../../../DB/model/user.model.js";
import { asyncHandler } from "../../../services/errorHandling.js";


export const addCourse= asyncHandler(
    async(req,res,next)=>{
        const student= await findById({
            model:userModel,
            filter:{_id:req.user._id},
            select:'userName email level'
        })
        if (student.level == 1) {
            const {course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus}=req.body
            const courseUser= await find({
                model:materialModel,
                filter:{createdBy:req.user._id}
            })
            if (courseUser.length >=7) {
                next(new Error('u can not add course Already add ,sorry'))
            } else {
                const courses= await findOne({
                    model:courseModel1,
                    filter:{course:course,courseCode:courseCode}
                })
                if (courses) {
                    const code= await findOne({
                        model:materialModel,
                        filter:{createdBy:req.user._id,course:course}
                    })
                    if (!code) {
                        const addCourse= await create({ 
                            model:materialModel,
                            data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,createdBy:student._id}
                        })
                        addCourse ? res.status(201).json({message:"done",addCourse}) : next(new Error('fail to add courses,sorry'))
                    } else {
                        next(new Error('u can not add this course u Already add'))
                    }
                } else {
                    next(new Error('u can not add this course ,sorry'))
                }
            }
            
        }
        else if (student.level == 2) {
            const {course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus}=req.body
            const courseUser= await find({
                model:materialModel,
                filter:{createdBy:req.user._id}
            })
            if (courseUser.length >=7) {
                next(new Error('u can not add course Already add ,sorry'))
            } else {
                const courses= await findOne({
                    model:courseModel2,
                    filter:{course:course,courseCode:courseCode}
                })
                if (courses) {
                    const code= await findOne({
                        model:materialModel,
                        filter:{createdBy:req.user._id,course:course}
                    })
                    if (!code) {
                        const addCourse= await create({ 
                            model:materialModel,
                            data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,createdBy:student._id}
                        })
                        addCourse ? res.status(201).json({message:"done",addCourse}) : next(new Error('fail to add courses,sorry'))
                    } else {
                        next(new Error('u can not add this course u Already add'))
                    }
                } else {
                    next(new Error('u can not add this course ,sorry'))
                }
            }
            
        }
        else if (student.level == 3) {
            const {course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus}=req.body
            const courseUser= await find({
                model:materialModel,
                filter:{createdBy:req.user._id}
            })
            if (courseUser.length >=7) {
                next(new Error('u can not add course Already add ,sorry'))
            } else {
                const courses= await findOne({
                    model:courseModel3,
                    filter:{course:course,courseCode:courseCode}
                })
                if (courses) {
                    const code= await findOne({
                        model:materialModel,
                        filter:{createdBy:req.user._id,course:course}
                    })
                    if (!code) {
                        const addCourse= await create({ 
                            model:materialModel,
                            data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,createdBy:student._id}
                        })
                        addCourse ? res.status(201).json({message:"done",addCourse}) : next(new Error('fail to add courses,sorry'))
                    } else {
                        next(new Error('u can not add this course u Already add'))
                    }
                } else {
                    next(new Error('u can not add this course ,sorry'))
                }
            }
            
        }
        else if (student.level == 4) {
            const {course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus}=req.body
            const courseUser= await find({
                model:materialModel,
                filter:{createdBy:req.user._id}
            })
            if (courseUser.length >=7) {
                next(new Error('u can not add course Already add ,sorry'))
            } else {
                const courses= await findOne({
                    model:courseModel4,
                    filter:{course:course,courseCode:courseCode}
                })
                if (courses) {
                    const code= await findOne({
                        model:materialModel,
                        filter:{createdBy:req.user._id,course:course}
                    })
                    if (!code) {
                        const addCourse= await create({ 
                            model:materialModel,
                            data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,createdBy:student._id}
                        })
                        addCourse ? res.status(201).json({message:"done",addCourse}) : next(new Error('fail to add courses,sorry'))
                    } else {
                        next(new Error('u can not add this course u Already add'))
                    }
                } else {
                    next(new Error('u can not add this course  ,sorry'))
                }
            }
            
        }
        else {
            next(new Error('u can not add courses,sorry'))
        }
    }
)


 










export const updateCourse= asyncHandler(
    async(req,res,next)=>{
        const {id}= req.params
        const {course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus} = req.body
        const student= await findById({
            model:userModel,
            filter:{_id:req.user._id},
            select:'userName email level'
        })
        if (student.level == 1) {
            const courses= await find({
                model:materialModel
            })
            if (courses.course === course || courses.courseCode === courseCode) {
                next(new Error('u con not update this course or courseCode , it is already Existing'))
            } else {
               const newCourse = await find({
                model:courseModel1,
                filter:{course:course,courseCode:courseCode}
               })
                if (newCourse) {
                    const updateCourse= await findByIdAndUpdate({
                        model:materialModel,
                        filter:{_id:id},
                        data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,updatedBy:req.user._id},
                        options:{new:true}
                    }) 
                    updateCourse ? res.status(200).json({message:'done',updateCourse}) : next(new Error('fail to update course'))
                } else {
                next(new Error('u con not update this course '))
                    
                }
            
            }
        }
       else if (student.level == 2) {
            const courses= await find({
                model:materialModel
            })
            if (courses.course === course || courses.courseCode === courseCode) {
                next(new Error('u con not update this course or courseCode , it is already Existing'))
            } else {
               const newCourse = await find({
                model:courseModel2,
                filter:{course:course,courseCode:courseCode}
               })
                if (newCourse) {
                    const updateCourse= await findByIdAndUpdate({
                        model:materialModel,
                        filter:{_id:id},
                        data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,updatedBy:req.user._id},
                        options:{new:true}
                    }) 
                    updateCourse ? res.status(200).json({message:'done',updateCourse}) : next(new Error('fail to update course'))
                } else {
                next(new Error('u con not update this course '))
                    
                }
            
            }
        }
        else if (student.level == 3) {
            const courses= await find({
                model:materialModel
            })
            if (courses.course === course || courses.courseCode === courseCode) {
                next(new Error('u con not update this course or courseCode , it is already Existing'))
            } else {
               const newCourse = await find({
                model:courseModel3,
                filter:{course:course,courseCode:courseCode}
               })
                if (newCourse) {
                    const updateCourse= await findByIdAndUpdate({
                        model:materialModel,
                        filter:{_id:id},
                        data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,updatedBy:req.user._id},
                        options:{new:true}
                    }) 
                    updateCourse ? res.status(200).json({message:'done',updateCourse}) : next(new Error('fail to update course'))
                } else {
                next(new Error('u con not update this course '))
                    
                }
            
            }
        }
        else if (student.level == 4) {
            const courses= await find({
                model:materialModel
            })
            if (courses.course === course || courses.courseCode === courseCode) {
                next(new Error('u con not update this course or courseCode , it is already Existing'))
            } else {
               const newCourse = await find({
                model:courseModel4,
                filter:{course:course,courseCode:courseCode}
               })
                if (newCourse) {
                    const updateCourse= await findByIdAndUpdate({
                        model:materialModel,
                        filter:{_id:id},
                        data:{course,courseCode,courseRequirement,numberOfHoursOfCourse,courseStatus,updatedBy:req.user._id},
                        options:{new:true}
                    }) 
                    updateCourse ? res.status(200).json({message:'done',updateCourse}) : next(new Error('fail to update course'))
                } else {
                next(new Error('u con not update this course '))
                    
                }
            
            }
        }
        else {
            next(new Error('u can not update courses,sorry'))
        }
       
    }
)




export const deleteCourse= asyncHandler(
    async(req,res,next)=>{
        const {id}= req.params
        const course= await findOne({
            model:materialModel,
            filter:{_id:id}
        })
        if (course) {
            const deleteCourse= await findOneAndDelete({model:materialModel,
            filter:{_id:id}})
            deleteCourse ? res.status(200).json({message:'done'}) : next(new Error('fail to delete course'))
        }else{
        next(new Error('not found this course'))
        }
    }

)