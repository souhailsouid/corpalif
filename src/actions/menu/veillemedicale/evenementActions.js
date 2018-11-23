import axios from 'axios'

import { GET_EVENEMENT, DELETE_EVENEMENT, GET_ERRORS } from 'actions/types'

// Get all Evenement
export const getCurrentEvenement = () => (dispatch) => {
	axios.get('/api/evenement/').then((res) =>
		dispatch({
			type: GET_EVENEMENT,
			payload: res.data
		})
	)
}

// Getcurrent  Evenements
export const getCurrentEvenement_id = (id) => (dispatch) => {
	axios
		.get(`/api/evenement/${id}`)
		.then((res) =>
			dispatch({
				type: GET_EVENEMENT,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_EVENEMENT,
				payload: null
			})
		)
}

// Delete Post
export const delete_Evenement = (id) => (dispatch) => {
	axios
		.delete(`/api/evenement/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_EVENEMENT,
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
export const updateEvenement = (id, Data) => (dispatch) => {
	axios.patch(`/api/evenement/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
