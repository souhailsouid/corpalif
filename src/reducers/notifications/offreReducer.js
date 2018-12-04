import { GET_NOTIFICATIONOFFRE } from 'actions/types'

const initialState = {
	notificationoffre: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_NOTIFICATIONOFFRE:
			return {
				...state,
				notificationoffre: action.payload
			}

		default:
			return state
	}
}
