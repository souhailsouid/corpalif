import { GET_VALIDATIONS } from 'actions/types'
const initialState = {}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_VALIDATIONS:
			return action.payload

		default:
			return state
	}
}
