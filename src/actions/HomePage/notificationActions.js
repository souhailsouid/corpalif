import axios from 'axios'

import { GET_AGENDA, DELETE_AGENDA, GET_ERRORS, GET_AGENDA1, GET_AGENDA2, GET_OFFRE } from 'actions/types'

// Get current AGENDA
export const getCurrentAgenda = () => (dispatch) => {
	axios.get('/api/agenda/').then((res) =>
		dispatch({
			type: GET_AGENDA,
			payload: res.data
		})
	)
}
export const getCurrentAgenda_id = (id) => (dispatch) => {
	axios
		.get(`/api/agenda/${id}`)
		.then((res) =>
			dispatch({
				type: GET_AGENDA,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}
//Notification Page d'accueil
export const getCurrentAgenda1 = () => (dispatch) => {
	axios.get('/api/agenda1').then((res) =>
		dispatch({
			type: GET_AGENDA1,
			payload: res.data
		})
	)
}
export const getCurrentAgenda1_id = (id) => (dispatch) => {
	axios
		.get(`/api/agenda1/${id}`)
		.then((res) =>
			dispatch({
				type: GET_AGENDA1,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}
// Update post

export const updateAgenda1 = (id, Data) => (dispatch) => {
	axios.patch(`/api/agenda1/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

export const getCurrentAgenda2 = () => (dispatch) => {
	axios.get('/api/agenda2').then((res) =>
		dispatch({
			type: GET_AGENDA2,
			payload: res.data
		})
	)
}
export const getCurrentAgenda2_id = (id) => (dispatch) => {
	axios
		.get(`/api/agenda2/${id}`)
		.then((res) =>
			dispatch({
				type: GET_AGENDA2,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}
// Update post
export const updateAgenda2 = (id, Data) => (dispatch) => {
	axios.patch(`/api/agenda2/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Update post
export const updateAgenda = (id, Data) => (dispatch) => {
	axios.put(`/api/agenda/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Add Post
export const post = (Data, history) => (dispatch) => {
	axios.post('/api/agenda', Data).then((res) => history.push('/admin/agenda')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Delete Post
export const delete_Agenda = (id) => (dispatch) => {
	axios
		.delete(`/api/agenda/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_AGENDA,
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
// offre d'emploi

export const getCurrentOffre = () => (dispatch) => {
	axios.get('/api/offre').then((res) =>
		dispatch({
			type: GET_OFFRE,
			payload: res.data
		})
	)
}
export const getCurrentOffre_id = (id) => (dispatch) => {
	axios
		.get(`/api/offre/${id}`)
		.then((res) =>
			dispatch({
				type: GET_OFFRE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}
// Update post
export const updateOffre = (id, Data) => (dispatch) => {
	axios.patch(`/api/offre/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
