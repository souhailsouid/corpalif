const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const YvelinesMapsTeamSchema = new Schema({
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

module.exports = MapsTeam_Yvelines = mongoose.model('MapsTeam_Yvelines', YvelinesMapsTeamSchema)
