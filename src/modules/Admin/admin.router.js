import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";

import endPoint from "./admin.endPoint.js";
import * as adminController from './controller/admin.js'
import * as validators from './admin.validation.js'
const router=Router()
router.post('/signupAdmin',validation(validators.signupAdmin),adminController.signupAdmin)
router.post('/AddStudent',validation(validators.addStudentNationalID),auth(endPoint.add),adminController.addStudentNationalID)
router.post('/addResult/:studentID',auth(endPoint.add),adminController.addResult)
router.patch('/updateResult/:id',auth(endPoint.add),adminController.updateResult)



router.post('/addCoursesLev1',auth(endPoint.add),adminController.addCourse1)
router.post('/addCoursesLev2',auth(endPoint.add),adminController.addCourse3)
router.post('/addCoursesLev3',auth(endPoint.add),adminController.addCourse3)
router.post('/addCoursesLev4',auth(endPoint.add),adminController.addCourse4)
router.delete('/deleteCourses/:id',auth(endPoint.delete),adminController.deleteCourse1)
router.delete('/deleteCourses/:id',auth(endPoint.delete),adminController.deleteCourse2)
router.delete('/deleteCourses/:id',auth(endPoint.delete),adminController.deleteCourse3)
router.delete('/deleteCourses/:id',auth(endPoint.delete),adminController.deleteCourse4)
export default router