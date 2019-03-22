const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    studentID:{
        type: String,
        required: true
    },
	phone: {
        type: String,
        required: false
    },
    skills: {
        type: Array,
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    resume: {
        type: String,
        required: false
    },
    dob: {
        type: String,
        required: false
    },
    houseNo: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    }
});

schema.set("toJSON", {
	virtuals: true
});

module.exports = mongoose.model("Student", schema);