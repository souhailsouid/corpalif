import axios from 'axios'

import { GET_ORIENTATION, GET_ERRORS } from 'actions/types'

// Get  all  Orientation
export const getCurrentOrientation = () => (dispatch) => {
	axios.get('/api/orientation/').then((res) =>
		dispatch({
			type: GET_ORIENTATION,
			payload: res.data
		})
	)
}

// GetcurrentOrientations
export const getCurrentOrientation_id = (id) => (dispatch) => {
	axios
		.get(`/api/orientation/${id}`)
		.then((res) =>
			dispatch({
				type: GET_ORIENTATION,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ORIENTATION,
				payload: null
			})
		)
}

// Add Comment
export const updateOrientation = (id, Data) => (dispatch) => {
	axios.patch(`/api/orientation/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
