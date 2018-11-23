import axios from 'axios'

import { GET_CAROUSSEL, DELETE_CAROUSSEL, GET_ERRORS, GET_ADHERENT } from 'actions/types'

// Get current Caroussel
export const getCurrentCaroussel = () => (dispatch) => {
	axios.get('/api/caroussel/').then((res) =>
		dispatch({
			type: GET_CAROUSSEL,
			payload: res.data
		})
	)
}

export const getCurrentCaroussel_id = (id) => (dispatch) => {
	axios
		.get(`/api/caroussel/${id}`)
		.then((res) =>
			dispatch({
				type: GET_CAROUSSEL,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_CAROUSSEL,
				payload: null
			})
		)
}

// // Delete Post
export const delete_Caroussel = (id) => (dispatch) => {
	axios
		.delete(`/api/caroussel/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_CAROUSSEL,
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
export const updateCaroussel = (id, Data, picture) => (dispatch) => {
	const config = { headers: { 'Content-Type': 'multipart/form-data' } }
	let fd = new FormData()
	fd.append('picture', picture)

	axios.patch(`/api/caroussel/${id}`, Data, config, fd).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Get current ADHERENT
export const getCurrentAdherent = () => (dispatch) => {
	axios.get('/api/adherent/').then((res) =>
		dispatch({
			type: GET_ADHERENT,
			payload: res.data
		})
	)
}
export const getCurrentAdherent_id = (id) => (dispatch) => {
	axios
		.get(`/api/adherent/${id}`)
		.then((res) =>
			dispatch({
				type: GET_ADHERENT,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ADHERENT,
				payload: null
			})
		)
}
// // Delete Post

// Add Comment
export const updateAdherent = (id, Data, picture) => (dispatch) => {
	const config = { headers: { 'Content-Type': 'multipart/form-data' } }
	let fd = new FormData()
	fd.append('picture', picture)

	axios.patch(`/api/adherent${id}`, Data, config, fd).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// // Create structure
// export const post_Caroussel = (Data, history, file) => (dispatch) => {
// 	const formData = new FormData()
// 	formData.append('file', file)
// 	const config = {
// 		headers: {
// 			'content-type': 'multipart/form-data'
// 		}
// 	}
// 	axios.post('/api/caroussel/', Data, formData, config).then((res) => history.push('/admin')).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }
