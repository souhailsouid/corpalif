const mongoose = require('mongoose')

const AdhererSchema = mongoose.Schema({
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
	subtitle3: {
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
	imgCardCollectif: {
		type: String
	},
	cardCategoryCollectifTitle: {
		type: String
	},
	cardCategoryCollectifSubTitle: {
		type: String
	},
	cardCategoryCollectifDescription: {
		type: String
	},

	imgCardIndividuel: {
		type: String
	},
	cardCategoryIndividuelTitle: {
		type: String
	},
	cardCategoryIndividuelSubTitle: {
		type: String
	},

	cardCategoryIndividuelDescription: {
		type: String
	},
	file: {
		type: String
	},

	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Adherer', AdhererSchema)
