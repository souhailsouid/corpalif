const mongoose = require('mongoose')

const CorpalifSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},

	text: {
		type: String
	},
	theme: {
		type: String
	},
	subtitle: {
		type: String
	},
	subtitle2: {
		type: String
	},
	subtitle3: {
		type: String
	},
	description: {
		type: String
	},

	InfoAreaTitle: {
		type: String
	},

	InfoAreaTitle2: {
		type: String
	},
	InfoAreaTitle3: {
		type: String
	},
	InfoAreaTitle4: {
		type: String
	},

	InfoAreaTitle5: {
		type: String
	},
	InfoAreaDescription: {
		type: String
	},
	InfoAreaDescription2: {
		type: String
	},
	InfoAreaDescription3: {
		type: String
	},
	InfoAreaDescription4: {
		type: String
	},
	InfoAreaDescription5: {
		type: String
	},
	paragraphe1: {
		type: String
	},
	paragraphe2: {
		type: String
	},
	paragraphe3: {
		type: String
	},

	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Corpalif', CorpalifSchema)
