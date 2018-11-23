import { GET_EVENEMENT, DELETE_EVENEMENT } from 'actions/types'

const initialState = {
	evenement: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_EVENEMENT:
			return {
				...state,
				evenement: action.payload
			}

		case DELETE_EVENEMENT:
			return {
				...state,
				posts: state.evenements.filter((evenement) => evenement._id !== action.payload)
			}

		default:
			return state
	}
}
