import { GET_AGENDA2 } from 'actions/types'

const initialState = {
	agenda2: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_AGENDA2:
			return {
				...state,
				agenda2: action.payload
			}

		default:
			return state
	}
}
