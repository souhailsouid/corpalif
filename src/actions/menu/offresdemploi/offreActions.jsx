import axios from 'axios'

import { GET_OFFREEMPLOI, DELETE_OFFREEMPLOI, GET_ERRORS } from 'actions/types'

// Get all Evenement
export const getCurrentOffredemploi = () => (dispatch) => {
	axios.get('/api/offres/').then((res) =>
		dispatch({
			type: GET_OFFREEMPLOI,
			payload: res.data
		})
	)
}

// Getcurrent  Evenements
export const getCurrentOffredemploi_id = (id) => (dispatch) => {
	axios
		.get(`/api/offres/${id}`)
		.then((res) =>
			dispatch({
				type: GET_OFFREEMPLOI,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_OFFREEMPLOI,
				payload: null
			})
		)
}

// Delete Post
export const delete_Offredemploi = (id) => (dispatch) => {
	axios
		.delete(`/api/offres/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_OFFREEMPLOI,
				payload: id
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
// Add Comment
export const updateOffredemploi = (id, Data) => (dispatch) => {
	axios.patch(`/api/offres/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
