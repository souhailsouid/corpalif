import axios from 'axios'

import { GET_STRUCTURE, GET_STRUCTURES, STRUCTURE_LOADING, DELETE_STRUCTURE, GET_ERRORS } from './types'

// Get current structure
export const getCurrentStructure = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/association').then((res) =>
		dispatch({
			type: GET_STRUCTURE,
			payload: res.data
		})
	)
}
ss
// Get all structures
export const getCurrentStructures = (associations) => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/association').then((res) =>
		dispatch({
			type: GET_STRUCTURES,
			payload: { associations }
		})
	)
}
// Get all structures
export const getCurrentStructure_id = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/essonne/essonne/association/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURE,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_id = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/essonne/essonne/association/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURE,
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
export const updateStructure = (id, Data, history) => (dispatch) => {
	axios.put(`/api/annuaire/essonne/essonne/association/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const post = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/association', Data)
		.then((res) => history.push('/admin/paris/usp'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}

// Structure loading
export const setStructureLoading = () => {
	return {
		type: STRUCTURE_LOADING
	}
}
