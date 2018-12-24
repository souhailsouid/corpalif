import { GET_PRIVATE_INFOADHERENTS, DELETE_PRIVATE_INFOADHERENTS } from 'actions/types'

const initialState = {
	privateInfoAdherent: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_PRIVATE_INFOADHERENTS:
			return {
				...state,
				privateInfoAdherent: action.payload
			}

		case DELETE_PRIVATE_INFOADHERENTS:
			return {
				...state,
				posts: state.privateInfoAdherents.filter(
					(privateInfoAdherent) => privateInfoAdherent._id !== action.payload
				)
			}

		default:
			return state
	}
}
