import axios from 'axios'

import { GET_PRIVATE_INFO, DELETE_PRIVATE_INFO, GET_ERRORS } from 'actions/types'

// Get all Rencontre
export const getCurrentRencontre_inscrit = () => (dispatch) => {
	axios.get('/api/rencontre_inscrit').then((res) =>
		dispatch({
			type: GET_PRIVATE_INFO,
			payload: res.data
		})
	)
}

// Get current Rencontre
export const getCurrentRencontre_id_inscrit = (id) => (dispatch) => {
	axios
		.get(`/api/rencontre_inscrit/${id}`)
		.then((res) =>
			dispatch({
				type: GET_PRIVATE_INFO,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PRIVATE_INFO,
				payload: null
			})
		)
}

// Delete Post
export const delete_Rencontre_inscrit = (id) => (dispatch) => {
	axios
		.delete(`/api/rencontre_inscrit/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_PRIVATE_INFO,
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
export const updatRencontre_inscrit = (id, Data) => (dispatch) => {
	axios.patch(`/api/rencontre_inscrit/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
