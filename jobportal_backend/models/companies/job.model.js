const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    companyID:{
        type: String, 
        required: true
    },
	name:{
        type: String, 
        required: true
    },
    type:{
        type: String, 
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    location:{
        type: String, 
        required: true
    },
    salary:{
        type: String, 
        required: true
    },
    experience:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    dateOfPosting:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        default: "active"
    }
});

schema.set("toJSON", {
	virtuals: true
});

module.exports = mongoose.model("Job", schema);