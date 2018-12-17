import { GET_CORPALIF } from 'actions/types'

const initialState = {
	corpalif: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CORPALIF:
			return {
				...state,
				corpalif: action.payload
			}

		default:
			return state
	}
}
