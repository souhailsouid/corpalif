import axios from 'axios'

import { GET_RECOMMANDATION, DELETE_RECOMMANDATION, GET_ERRORS } from 'actions/types'

// Get all  Recommandation
export const getCurrentRecommandation = () => (dispatch) => {
	axios.get('/api/recommandation/').then((res) =>
		dispatch({
			type: GET_RECOMMANDATION,
			payload: res.data
		})
	)
}

// Get current Recommandations
export const getCurrentRecommandation_id = (id) => (dispatch) => {
	axios
		.get(`/api/recommandation/${id}`)
		.then((res) =>
			dispatch({
				type: GET_RECOMMANDATION,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_RECOMMANDATION,
				payload: null
			})
		)
}

// Delete Post
export const delete_recommandation = (id) => (dispatch) => {
	axios
		.delete(`/api/recommandation/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_RECOMMANDATION,
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
export const updateRecommandation = (id, Data) => (dispatch) => {
	axios.patch(`/api/recommandation/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// // Create structure
// export const post_Recommandation = (Data, history, file) => (dispatch) => {
// 	const formData = new FormData()
// 	formData.append('file', file)
// 	const config = {
// 		headers: {
// 			'content-type': 'multipart/form-data'
// 		}
// 	}
// 	axios.post('/api/recommandation/', Data, formData, config).then((res) => history.push('/admin')).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }
