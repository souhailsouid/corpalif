import axios from 'axios'

import { GET_PROFILE_ADHERENT, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS } from './types'

// Get current profile
export const getCurrentMember = () => (dispatch) => {
	dispatch(setProfileLoading())
	axios
		.get('/api/profileadherent')
		.then((res) =>
			dispatch({
				type: GET_PROFILE_ADHERENT,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILE_ADHERENT,
				payload: {}
			})
		)
}

// // Get profile by handle
// export const getProfileByHandle = (handle) => (dispatch) => {
// 	dispatch(setProfileLoading())
// 	axios
// 		.get(`/api/profile/handle/${handle}`)
// 		.then((res) =>
// 			dispatch({
// 				type: GET_PROFILE,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_PROFILE,
// 				payload: null
// 			})
// 		)
// }

// Create Profile
export const createMember = (profileData, history) => (dispatch) => {
	axios.post('/api/profileadherent/', profileData).then((res) => history.push('/')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	)
}
// Complete Profile in order to Payment Process
export const completeProfile = (profileData, history) => (dispatch) => {
	axios
		.post('/api/profileadherent/', profileData)
		.then((res) => history.push('/adherents/adherer/final'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}

// Profile loading
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	}
}

// Clear profile
export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE
	}
}
