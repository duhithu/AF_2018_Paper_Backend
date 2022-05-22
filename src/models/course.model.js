//vehicle
//get the dependency
const mongoose = require('mongoose');

//create model class schema
const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, trim: true },
    passmark: { type: Number, required: true },
    lecture: { type: String, required: true, trim: true },

    subjects: [{type: mongoose.Schema.Types.ObjectId, required: false, ref:'subjects'}]

});

//save it in  the mongodb as a model
const Course = mongoose.model('course', CourseSchema);
module.exports = Course; 