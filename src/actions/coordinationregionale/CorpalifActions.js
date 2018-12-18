import axios from 'axios'

import { GET_CORPALIF, GET_ERRORS } from 'actions/types'

// Get  all  Corpalif
export const getCurrentCorpalif = () => (dispatch) => {
	axios.get('/api/corpalif/').then((res) =>
		dispatch({
			type: GET_CORPALIF,
			payload: res.data
		})
	)
}

// GetcurrentCorpalifs
export const getCurrentCorpalif_id = (id) => (dispatch) => {
	axios
		.get(`/api/corpalif/${id}`)
		.then((res) =>
			dispatch({
				type: GET_CORPALIF,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_CORPALIF,
				payload: null
			})
		)
}

// Add Comment
export const updateCorpalif = (id, Data, history) => (dispatch) => {
	axios.patch(`/api/corpalif/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
