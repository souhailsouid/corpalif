import { GET_ADHERENT } from 'actions/types'

const initialState = {
	adherent: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ADHERENT:
			return {
				...state,
				adherent: action.payload
			}

		default:
			return state
	}
}
