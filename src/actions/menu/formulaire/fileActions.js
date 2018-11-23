import axios from 'axios'

import { GET_FILE, DELETE_FILE, GET_ERRORS } from 'actions/types'

// Get current Caroussel
export const getCurrentfile = () => (dispatch) => {
	axios.get('/api/register_file/').then((res) =>
		dispatch({
			type: GET_FILE,
			payload: res.data
		})
	)
}

export const getCurrentfile_id = (id) => (dispatch) => {
	axios
		.get(`/api/register_file/${id}`)
		.then((res) =>
			dispatch({
				type: GET_FILE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_FILE,
				payload: null
			})
		)
}

// Add Comment
export const updatefile = (id, Data, picture) => (dispatch) => {
	const config = { headers: { 'Content-Type': 'multipart/form-data' } }
	let fd = new FormData()
	fd.append('picture', picture)

	axios.patch(`/api/register_file/${id}`, Data, config, fd).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// // Create structure
// export const post_file = (Data, history, file) => (dispatch) => {
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
