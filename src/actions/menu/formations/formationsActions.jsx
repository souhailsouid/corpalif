import axios from 'axios'

import { GET_FORMATION, DELETE_FORMATION, GET_ERRORS } from 'actions/types'

// Get all Evenement
export const getCurrentFormation = () => (dispatch) => {
	axios.get('/api/formations/').then((res) =>
		dispatch({
			type: GET_FORMATION,
			payload: res.data
		})
	)
}

// Getcurrent  Evenements
export const getCurrentFormation_id = (id) => (dispatch) => {
	axios
		.get(`/api/formations/${id}`)
		.then((res) =>
			dispatch({
				type: GET_FORMATION,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_FORMATION,
				payload: null
			})
		)
}

// Delete Post
export const delete_Formation = (id) => (dispatch) => {
	axios
		.delete(`/api/formations/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_FORMATION,
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
export const update_Formation = (id, Data) => (dispatch) => {
	axios.patch(`/api/formations/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
