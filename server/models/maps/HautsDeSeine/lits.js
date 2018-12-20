const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const HautsDeSeineMapsLitSchema = new Schema({
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

module.exports = MapsLit_HautsDeSeine = mongoose.model('MapsLit_HautsDeSeine', HautsDeSeineMapsLitSchema)
