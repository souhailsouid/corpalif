const mongoose = require('mongoose')

const OrientationSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},

	title: {
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
	subtitleDescription: {
		type: String
	},
	subtitleDescription2: {
		type: String
	},
	subtitleDescription3: {
		type: String
	},
	description: {
		type: String
	},

	liensTitle: {
		type: String
	},
	liensTitle2: {
		type: String
	},
	liensUrl: {
		type: String
	},
	liensUrl2: {
		type: String
	},

	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Orientation', OrientationSchema)
