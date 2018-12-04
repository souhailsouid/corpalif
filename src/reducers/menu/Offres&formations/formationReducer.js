import { GET_FORMATION, DELETE_FORMATION } from 'actions/types'

const initialState = {
	formation: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FORMATION:
			return {
				...state,
				formation: action.payload
			}
		case DELETE_FORMATION:
			return {
				...state,
				posts: state.formations.filter((formation) => formation._id !== action.payload)
			}

		default:
			return state
	}
}
