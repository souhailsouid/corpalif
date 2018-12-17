import axios from 'axios'

import { GET_ACCOMPAGNEMENT, GET_ERRORS } from 'actions/types'

// Get  all  Accompagnement
export const getCurrentAccompagnement = () => (dispatch) => {
	axios.get('/api/accompagnement/').then((res) =>
		dispatch({
			type: GET_ACCOMPAGNEMENT,
			payload: res.data
		})
	)
}

// GetcurrentAccompagnements
export const getCurrentAccompagnement_id = (id) => (dispatch) => {
	axios
		.get(`/api/accompagnement/${id}`)
		.then((res) =>
			dispatch({
				type: GET_ACCOMPAGNEMENT,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ACCOMPAGNEMENT,
				payload: null
			})
		)
}

// Add Comment
export const updateAccompagnement = (id, Data) => (dispatch) => {
	axios.patch(`/api/accompagnement/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
