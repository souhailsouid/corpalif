import axios from 'axios'

import { GET_DEMARCHE, GET_ERRORS } from 'actions/types'

// Get  all  Demarche
export const getCurrentDemarche = () => (dispatch) => {
	axios.get('/api/demarche/').then((res) =>
		dispatch({
			type: GET_DEMARCHE,
			payload: res.data
		})
	)
}

// GetcurrentDemarches
export const getCurrentDemarche_id = (id) => (dispatch) => {
	axios
		.get(`/api/demarche/${id}`)
		.then((res) =>
			dispatch({
				type: GET_DEMARCHE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_DEMARCHE,
				payload: null
			})
		)
}

// Add Comment
export const updateDemarche = (id, Data) => (dispatch) => {
	axios.patch(`/api/demarche/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
