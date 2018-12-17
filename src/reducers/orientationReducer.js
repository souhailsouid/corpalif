import { GET_ORIENTATION } from 'actions/types'

const initialState = {
	orientation: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ORIENTATION:
			return {
				...state,
				orientation: action.payload
			}

		default:
			return state
	}
}
