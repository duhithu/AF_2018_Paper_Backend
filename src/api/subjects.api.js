const express = require('express');
const router = express.Router();        // import the interface for create endpoints called get, put,...
const SubjectController = require('../controllers/subjects.controller');   // for get the createSubject function

module.exports = function (){
    router.post('/create', SubjectController.createSubject); //create reference
    router.get('/', SubjectController.getSubject);
    router.get('/:id', SubjectController.getSubjectForCourses);
    router.put('/update/:id', SubjectController.updateSubject);
    return router;
}