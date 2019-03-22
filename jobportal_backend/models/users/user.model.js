
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	createdDate: {
		type: Date,
		default: Date.now,
		required: false
	},
	hash: {
		type: String,
		required: true
	},
	typeOfUser: {
		type: String,
		required: true
	},
	resume: {
		type: String,
		required: false
	},
	EducationalDetails: {
		Tenthboard: {
			type: String,
			required: false
		},

		TenthYOP: {
			type: String,
			required: false
		},

		Tenthpercentage: {
			type: String,
			required: false
		},

		Twelveboard: {
			type: String,
			required: false
		},

		TwelveYOP: {
			type: String,
			required: false
		},

		Twelvepercentage: {
			type: String,
			required: false
		},


	},

	PersonalDetails: {

		dateOfBirth: {
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
		},

		phone: {
			type: String,
			required: false
		},

		photo: {
			type: String,
			required: false
		},

		resume: {
			type: String,
			required: false
		}
	},

	companyDetails: {
		phone:{
			type: String, 
			required: false
		},
		description:{
			type: String, 
			required: false
		},
		website:{
			type: String, 
			required: false
		},
		address:{
			type: String, 
			required: false
		},
		photo:{
			type: String, 
			required: false
		}
	},

});

schema.set("toJSON", {
	virtuals: true
});

module.exports = mongoose.model("User", schema);