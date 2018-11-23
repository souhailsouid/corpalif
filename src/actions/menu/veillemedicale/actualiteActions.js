import axios from 'axios'

import { GET_ACTUALITE, DELETE_ACTUALITE, GET_ERRORS } from 'actions/types'

// Get  all  Actualite
export const getCurrentActualite = () => (dispatch) => {
	axios.get('/api/actualite/').then((res) =>
		dispatch({
			type: GET_ACTUALITE,
			payload: res.data
		})
	)
}

// GetcurrentActualites
export const getCurrentActualite_id = (id) => (dispatch) => {
	axios
		.get(`/api/actualite/${id}`)
		.then((res) =>
			dispatch({
				type: GET_ACTUALITE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ACTUALITE,
				payload: null
			})
		)
}

// Delete Post
export const delete_Actualite = (id) => (dispatch) => {
	axios
		.delete(`/api/actualite/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_ACTUALITE,
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
export const updateActualite = (id, Data) => (dispatch) => {
	axios.patch(`/api/actualite/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
