import axios from 'axios'

import { GET_PRIVATE_INFOADHERENTS, DELETE_PRIVATE_INFOADHERENTS, GET_ERRORS } from 'actions/types'

// Get all Rencontre
export const getCurrentRencontre_inscrit = () => (dispatch) => {
	axios.get('/api/rencontre_adherents').then((res) =>
		dispatch({
			type: GET_PRIVATE_INFOADHERENTS,
			payload: res.data
		})
	)
}

// Get current Rencontre
export const getCurrentRencontre_id_inscrit = (id) => (dispatch) => {
	axios
		.get(`/api/rencontre_adherents/${id}`)
		.then((res) =>
			dispatch({
				type: GET_PRIVATE_INFOADHERENTS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PRIVATE_INFOADHERENTS,
				payload: null
			})
		)
}

// Delete Post
export const delete_Rencontre_inscrit = (id) => (dispatch) => {
	axios
		.delete(`/api/rencontre_adherents/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_PRIVATE_INFOADHERENTS,
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
export const updateRencontre_inscrit = (id, Data) => (dispatch) => {
	axios.patch(`/api/rencontre_adherents/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
