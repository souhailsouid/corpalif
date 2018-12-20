const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const EssonneMapsHadSchema = new Schema({
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

module.exports = MapsHad_Essonne = mongoose.model('MapsHad_Essonne', EssonneMapsHadSchema)
