import { GET_LEGISLATION } from 'actions/types'

const initialState = {
	legislation: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_LEGISLATION:
			return {
				...state,
				legislation: action.payload
			}

		default:
			return state
	}
}
