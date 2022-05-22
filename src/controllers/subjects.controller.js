//category
const Subject = require("../models/subjects.model");

//create a arrow function with async
const createSubject = async (req, res) => {
    if (req.body) {     //check if the req body is there or not
        const subject = new Subject(req.body); //pass the req data
        subject.save()
            .then(data => {
                res.status(200).send({data: data}); //send the data
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

const getSubjectForCourses = async (req, res) => {
    if(req.params && req.params.id) {
        await Subject.find({'subject._id': req.params.id})
            .then(response => {
                res.status(200).send({data: response });
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

const getSubject = async (req, res) => {
    await Subject.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// Update subject
const updateSubject = async (req, res) => {
    await Subject.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Subject updated successfully !')
        }
    })
};

module.exports = {
    createSubject,
    getSubject,
    getSubjectForCourses,
    updateSubject
};