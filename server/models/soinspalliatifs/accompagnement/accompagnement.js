const mongoose = require('mongoose')

const AccompagnementSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	title2: {
		type: String
	},

	description: {
		type: String
	},
	description2: {
		type: String
	},

	subtitle: {
		type: String
	},
	subtitle2: {
		type: String
	},
	subtitleDescription: {
		type: String
	},
	subtitle2Description: {
		type: String
	},

	linksTitle: {
		type: String
	},
	linksTitle2: {
		type: String
	},

	linksURL: {
		type: String
	},
	linksURL2: {
		type: String
	},

	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Accompagnement', AccompagnementSchema)
