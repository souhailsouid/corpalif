import { GET_CAROUSSEL, DELETE_CAROUSSEL } from 'actions/types'

const initialState = {
	caroussel: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CAROUSSEL:
			return {
				...state,
				caroussel: action.payload
			}

		case DELETE_CAROUSSEL:
			return {
				...state,
				posts: state.caroussels.filter((caroussel) => caroussel._id !== action.payload)
			}

		default:
			return state
	}
}
