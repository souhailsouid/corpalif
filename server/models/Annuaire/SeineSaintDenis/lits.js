const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const SeineSaintDenisLitsSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String
	},
	rue: {
		type: String
	},
	postcode: {
		type: String
	},
	compl: {
		type: String
	},
	phone: {
		type: String
	},
	email: {
		type: String
	},
	web: {
		type: String
	},

	date: {
		type: Date,
		default: Date.now
	}
})
module.exports = Lits_seinesaintdenis = mongoose.model('lits_seinesaintdenis', SeineSaintDenisLitsSchema)