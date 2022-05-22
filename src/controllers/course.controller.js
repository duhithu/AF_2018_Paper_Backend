const Course = require('../models/course.model');

const createCourse = async (req, res) => {
    if(req.body){
        const course = new Course(req.body);
        await course.save()
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

//populate() -- For get the individual subjects details for a given course
const getAllCourses = async (req, res) =>{
    await Course.find({}).populate('subjects', 'course tripType duration charge')
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
}

const getSubjectsForCourses = async (req, res) => {
    if(req.params && req.params.id) {
        await Course.findById(req.params.id)
            .populate('subjects', 'name description amount')
            .then(data => {
                res.status(200).send({subjects: data.subjects });
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

const calculateAmount = async (req, res) => {
    if (req.params && req.params.id) {
        const course = await Course.findById(req.params.id).populate('subjects', 'amount')
        let totalAmount = 0;
        if (course.subjects.length > 0) {
            course.subjects.map((subject) => {
                totalAmount += subject.amount;
            });
        }
        res.status(200).send({ totalAmount: totalAmount });
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    getSubjectsForCourses,
    calculateAmount
};