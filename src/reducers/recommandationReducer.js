import { GET_RECOMMANDATION, DELETE_RECOMMANDATION } from '../actions/types'

const initialState = {
	recommandation: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_RECOMMANDATION:
			return {
				...state,
				recommandation: action.payload
			}

		case DELETE_RECOMMANDATION:
			return {
				...state,
				posts: state.recommandations.filter((recommandation) => recommandation._id !== action.payload)
			}

		default:
			return state
	}
}
