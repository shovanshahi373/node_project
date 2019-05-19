const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    studentList: {
        name: String,
        age: Number
    }
});

// const Student = mongoose.model('Student', schema);

module.exports = mongoose.model("Student", schema);