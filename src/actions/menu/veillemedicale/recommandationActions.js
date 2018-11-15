import axios from 'axios'

import { GET_RECOMMANDATION, DELETE_RECOMMANDATION, GET_ERRORS } from 'actions/types'

// Get current Recommandation
export const getCurrentRecommandation = () => (dispatch) => {
	axios.get('/api/recommandation/').then((res) =>
		dispatch({
			type: GET_RECOMMANDATION,
			payload: res.data
		})
	)
}

// Get all Recommandations
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
export const deleteRecommandation_id = (id) => (dispatch) => {
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
	axios.put(`/api/recommandation/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// // Create Recommandation
// export const post = (bodyFormData, Data) => (dispatch) => {
// 	axios({
// 		method: 'post',
// 		url: 'http://localhost:5000/api/recommandation/',
// 		data: bodyFormData,
// 		Data,
// 		config: { headers: { 'Content-Type': 'multipart/form-data' } }
// 	})
// 		.then(function(response) {
// 			//handle success
// 			console.log(response)
// 		})
// 		.catch(function(response) {
// 			//handle error
// 			console.log(response)
// 		})
// }
export const post = (file, Data) => (dispatch) => {
	const formData = new FormData()
	formData.append('fileUpload', file)

	axios
		.post('http://localhost:5000/api/recommandation/', formData, Data)
		.then((response) => {
			response.data
		})
		.catch((error) => {
			console.log('*****  ' + error)
		})
}
