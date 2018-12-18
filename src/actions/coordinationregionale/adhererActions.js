import axios from 'axios'

import { GET_ADHERENTPAGE, GET_ERRORS } from 'actions/types'

// Get  all  ADHERENT
export const getCurrentAdherer = () => (dispatch) => {
	axios.get('/api/adherers/').then((res) =>
		dispatch({
			type: GET_ADHERENTPAGE,
			payload: res.data
		})
	)
}

// GetcurrentADHERENTs
export const getCurrentAdherer_id = (id) => (dispatch) => {
	axios
		.get(`/api/adherers/${id}`)
		.then((res) =>
			dispatch({
				type: GET_ADHERENTPAGE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ADHERENTPAGE,
				payload: null
			})
		)
}

// Add Comment
export const updateAdherer = (id, Data) => (dispatch) => {
	axios.patch(`/api/adherers/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
