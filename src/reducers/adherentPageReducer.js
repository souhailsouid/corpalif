import { GET_ADHERENTPAGE } from 'actions/types'

const initialState = {
	adherentPage: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ADHERENTPAGE:
			return {
				...state,
				adherentPage: action.payload
			}

		default:
			return state
	}
}
