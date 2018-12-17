const mongoose = require('mongoose')

const DemarcheSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	description2: {
		type: String
	},
	InfoAreaTitle: {
		type: String
	},
	subtitle: {
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
	InfoAreaTitle6: {
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
	InfoAreaDescription6: {
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

module.exports = mongoose.model('Demarche', DemarcheSchema)
