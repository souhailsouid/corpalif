const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ValDeMarneMapsTeamSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String
	},
	message: {
		type: String
	},

	long: { type: String, coordinates: [ Number ] },
	lat: { type: String, coordinates: [ Number ] },
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = MapsTeam_ValDeMarne = mongoose.model('MapsTeam_ValDeMarne', ValDeMarneMapsTeamSchema)
