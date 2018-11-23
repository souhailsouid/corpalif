import { GET_AGENDA, DELETE_AGENDA } from 'actions/types'

const initialState = {
	agenda: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_AGENDA:
			return {
				...state,
				agenda: action.payload
			}

		case DELETE_AGENDA:
			return {
				...state,
				posts: state.agendas.filter((agenda) => agenda !== action.payload)
			}

		default:
			return state
	}
}
