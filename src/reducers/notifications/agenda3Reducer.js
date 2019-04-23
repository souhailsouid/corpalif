import { GET_AGENDA3 } from 'actions/types'

const initialState = {
	agenda3: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_AGENDA3:
			return {
				...state,
				agenda3: action.payload
			}

		default:
			return state
	}
}
