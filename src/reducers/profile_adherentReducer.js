import { GET_PROFILE_ADHERENT, PROFILE_LOADING } from 'actions/types'

const initialState = {
	profile_adherent: null,
	loading: false
}

export default function(state = initialState, action) {
	switch (action.type) {
		case PROFILE_LOADING:
			return {
				...state,
				loading: true
			}
		case GET_PROFILE_ADHERENT:
			return {
				...state,
				profile_adherent: action.payload,
				loading: false
			}

		default:
			return state
	}
}