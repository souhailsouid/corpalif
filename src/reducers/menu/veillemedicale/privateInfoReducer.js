import { GET_PRIVATE_INFO, DELETE_PRIVATE_INFO } from 'actions/types'

const initialState = {
	privateInfo: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_PRIVATE_INFO:
			return {
				...state,
				privateInfo: action.payload
			}

		case DELETE_PRIVATE_INFO:
			return {
				...state,
				posts: state.privateInfos.filter((privateInfo) => privateInfo._id !== action.payload)
			}

		default:
			return state
	}
}
