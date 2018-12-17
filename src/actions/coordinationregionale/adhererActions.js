import axios from 'axios'

import { GET_ADHERENTPAGEPAGE, GET_ERRORS } from 'actions/types'

// Get  all  ADHERENT
export const getCurrentAdherent = () => (dispatch) => {
	axios.get('/api/adherent/').then((res) =>
		dispatch({
			type: GET_ADHERENTPAGE,
			payload: res.data
		})
	)
}

// GetcurrentADHERENTs
export const getCurrentAdherent_id = (id) => (dispatch) => {
	axios
		.get(`/api/adherent/${id}`)
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
export const updateAdherent = (id, Data) => (dispatch) => {
	axios.patch(`/api/adherent/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
