import { GET_OFFRE } from 'actions/types'

const initialState = {
	offre: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_OFFRE:
			return {
				...state,
				offre: action.payload
			}

		default:
			return state
	}
}
