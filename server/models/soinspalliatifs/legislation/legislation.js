const mongoose = require('mongoose')

const LegislationSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	subtitle: {
		type: String
	},
	subtitlebis: {
		type: String
	},

	subtitledescription: {
		type: String
	},
	subtitledescriptionbis: {
		type: String
	},
	subtitle2: {
		type: String
	},
	subtitle2bis: {
		type: String
	},

	subtitledescription2: {
		type: String
	},
	subtitle3: {
		type: String
	},
	subtitle3bis: {
		type: String
	},

	subtitledescription3: {
		type: String
	},

	linksTitle: {
		type: String
	},
	linksTitle2: {
		type: String
	},
	linksTitle3: {
		type: String
	},
	linksTitle4: {
		type: String
	},
	linksTitle5: {
		type: String
	},
	linksURL: {
		type: String
	},
	linksURL2: {
		type: String
	},
	linksURL3: {
		type: String
	},
	linksURL4: {
		type: String
	},
	linksURL5: {
		type: String
	},

	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Legislation', LegislationSchema)
