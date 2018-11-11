import { RESET_PASSWORD } from '../actions/types'
import isEmpty from '../validation/is-empty'
export const initialState = {
	isAuthenticated: false,
	user: {},
	data: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case RESET_PASSWORD:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
				data: action.payload
			}

		default:
			return state
	}
}
