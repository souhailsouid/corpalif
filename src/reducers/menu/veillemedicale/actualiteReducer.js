import { GET_ACTUALITE, DELETE_ACTUALITE } from 'actions/types'

const initialState = {
	actualite: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ACTUALITE:
			return {
				...state,
				actualite: action.payload
			}

		case DELETE_ACTUALITE:
			return {
				...state,
				posts: state.actualites.filter((actualite) => actualite._id !== action.payload)
			}

		default:
			return state
	}
}
