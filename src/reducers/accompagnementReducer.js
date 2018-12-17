import { GET_ACCOMPAGNEMENT } from 'actions/types'

const initialState = {
	accompagnement: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ACCOMPAGNEMENT:
			return {
				...state,
				accompagnement: action.payload
			}

		default:
			return state
	}
}
