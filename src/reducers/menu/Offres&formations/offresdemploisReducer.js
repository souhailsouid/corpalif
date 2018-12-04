import { GET_OFFREEMPLOI, DELETE_OFFREEMPLOI } from 'actions/types'

const initialState = {
	offreemploi: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_OFFREEMPLOI:
			return {
				...state,
				offreemploi: action.payload
			}
		case DELETE_OFFREEMPLOI:
			return {
				...state,
				posts: state.offreemplois.filter((offreemploi) => offreemploi._id !== action.payload)
			}

		default:
			return state
	}
}
