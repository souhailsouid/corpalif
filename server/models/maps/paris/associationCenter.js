const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ParisMapsAssociationCenterSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},

	centerlong: { type: String, coordinates: [ Number ] },
	centerlat: { type: String, coordinates: [ Number ] },
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = MapsAssociationCenter_paris = mongoose.model(
	'MapsAssociationCenter_paris',
	ParisMapsAssociationCenterSchema
)
