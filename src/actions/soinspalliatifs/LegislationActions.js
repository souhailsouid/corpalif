import axios from 'axios'

import { GET_LEGISLATION, GET_ERRORS } from 'actions/types'

// Get  all  Legislation
export const getCurrentLegislation = () => (dispatch) => {
	axios.get('/api/legislation/').then((res) =>
		dispatch({
			type: GET_LEGISLATION,
			payload: res.data
		})
	)
}

// GetcurrentLegislations
export const getCurrentLegislation_id = (id) => (dispatch) => {
	axios
		.get(`/api/legislation/${id}`)
		.then((res) =>
			dispatch({
				type: GET_LEGISLATION,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_LEGISLATION,
				payload: null
			})
		)
}

// Add Comment
export const updateLegislation = (id, Data) => (dispatch) => {
	axios.patch(`/api/legislation/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
