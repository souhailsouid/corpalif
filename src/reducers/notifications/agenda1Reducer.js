import { GET_AGENDA1 } from 'actions/types'

const initialState = {
	agenda1: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_AGENDA1:
			return {
				...state,
				agenda1: action.payload
			}

		default:
			return state
	}
}
