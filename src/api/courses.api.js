//vehicle
const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/course.controller');

module.exports = function (){
    router.post('/create', CourseController.createCourse);
    router.get('/', CourseController.getAllCourses);
    router.get('/:id', CourseController.getSubjectsForCourses);
    router.get('/amount/:id', CourseController.calculateAmount);
    return router;
}