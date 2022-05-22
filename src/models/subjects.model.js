//categories
const mongoose = require('mongoose');
//create model class schema (the way of save data)
const SubjectsSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    amount: { type: Number, required: true },

    //many to many relation
    //save the reference
    courses: [{type: mongoose.Schema.Types.ObjectId, required: false, ref:'courses'}]

});

//save it in  the mongodb as a model
const Subjects = mongoose.model('subjects', SubjectsSchema);

module.exports = Subjects;