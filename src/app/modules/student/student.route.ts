import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

//will call controller
router.post('/create-students', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:studentID', studentController.getSingleStudents);

export const StudentRoutes = router;
