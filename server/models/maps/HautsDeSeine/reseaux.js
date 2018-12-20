const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const HautsDeSeineMapsReseauxSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String
	},

	long: { type: String, coordinates: [ Number ] },
	lat: { type: String, coordinates: [ Number ] },
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = MapsReseaux_HautsDeSeine = mongoose.model('MapsReseaux_HautsDeSeine', HautsDeSeineMapsReseauxSchema)
