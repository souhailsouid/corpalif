import { GET_DEMARCHE } from 'actions/types'

const initialState = {
	demarche: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_DEMARCHE:
			return {
				...state,
				demarche: action.payload
			}

		default:
			return state
	}
}
