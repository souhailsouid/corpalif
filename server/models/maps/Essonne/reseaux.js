const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const EssonneMapsReseauxSchema = new Schema({
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

module.exports = MapsReseaux_Essonne = mongoose.model('MapsReseaux_Essonne', EssonneMapsReseauxSchema)
