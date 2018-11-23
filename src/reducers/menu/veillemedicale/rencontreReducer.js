import { GET_RENCONTRE, DELETE_RENCONTRE } from 'actions/types'

const initialState = {
	rencontre: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_RENCONTRE:
			return {
				...state,
				rencontre: action.payload
			}

		case DELETE_RENCONTRE:
			return {
				...state,
				posts: state.rencontres.filter((rencontre) => rencontre._id !== action.payload)
			}

		default:
			return state
	}
}
