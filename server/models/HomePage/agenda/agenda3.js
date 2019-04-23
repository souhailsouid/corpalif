const mongoose = require('mongoose')

const Agenda3Schema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},

	theme: {
		type: String
	},
	lieu: {
		type: String
	},

	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Agenda3', Agenda3Schema)
