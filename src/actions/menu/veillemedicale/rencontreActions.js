import axios from 'axios'

import { GET_RENCONTRE, DELETE_RENCONTRE, GET_ERRORS } from 'actions/types'

// Get all Rencontre
export const getCurrentRencontre = () => (dispatch) => {
	axios.get('/api/rencontre').then((res) =>
		dispatch({
			type: GET_RENCONTRE,
			payload: res.data
		})
	)
}

// Get current Rencontre
export const getCurrentRencontre_id = (id) => (dispatch) => {
	axios
		.get(`/api/rencontre/${id}`)
		.then((res) =>
			dispatch({
				type: GET_RENCONTRE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_RENCONTRE,
				payload: null
			})
		)
}

// Delete Post
export const delete_Rencontre = (id) => (dispatch) => {
	axios
		.delete(`/api/rencontre/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_RENCONTRE,
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
export const updatRencontre = (id, Data) => (dispatch) => {
	axios.patch(`/api/rencontre/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
