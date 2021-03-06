import isEmpty from 'validation/is-empty'

import { SET_CURRENT_USER, GET_RESET_PASSWORD } from 'actions/types'

const initialState = {
	isAuthenticated: false,
	isAdmin: false,
	user: {}
}

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				isAdmin: !isEmpty(action.payload),
				user: action.payload
			}
		case GET_RESET_PASSWORD:
			return {
				...state,
				user: action.payload
			}

		default:
			return state
	}
}
