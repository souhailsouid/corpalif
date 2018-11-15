import axios from 'axios'

import {
	GET_STRUCTURE,
	GET_STRUCTURES,
	STRUCTURE_LOADING,
	DELETE_STRUCTURE,
	GET_ERRORS,
	GET_STRUCTUREASSOCIATION,
	DELETE_STRUCTUREASSOCIATION,
	GET_STRUCTURERESEAUX,
	DELETE_STRUCTURERESEAUX,
	GET_STRUCTUREHAD,
	DELETE_STRUCTUREHAD,
	GET_STRUCTURELITS,
	DELETE_STRUCTURELITS,
	GET_STRUCTURESOINS,
	DELETE_STRUCTURESOINS
} from './types'
//USP
// Get current structure
export const getCurrentStructure = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/seinesaintdenis/seinesaintdenis/usp').then((res) =>
		dispatch({
			type: GET_STRUCTURE,
			payload: res.data
		})
	)
}
// Get all structures
export const getCurrentStructures = (usps) => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/seinesaintdenis/seinesaintdenis/usp').then((res) =>
		dispatch({
			type: GET_STRUCTURES,
			payload: { usps }
		})
	)
}
// Get all structures
export const getCurrentStructure_id = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/seinesaintdenis/seinesaintdenis/usp/${id}`)
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
		.delete(`/api/annuaire/seinesaintdenis/seinesaintdenis/usp/${id}`)
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
export const updateStructure = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/seinesaintdenis/seinesaintdenis/usp/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const post = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/seinesaintdenis/seinesaintdenis/usp', Data)
		.then((res) => history.push('/admin/seinesaintdenis/usp'))
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

//ASSOS
// Get all structures
export const getCurrentStructureAssos = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/seinesaintdenis/seinesaintdenis/association').then((res) =>
		dispatch({
			type: GET_STRUCTUREASSOCIATION,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idAssos = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/seinesaintdenis/seinesaintdenis/association/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTUREASSOCIATION,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTUREASSOCIATION,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idAssos = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/seinesaintdenis/seinesaintdenis/association/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTUREASSOCIATION,
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
export const updateStructureAssos = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/seinesaintdenis/seinesaintdenis/association/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAssos = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/seinesaintdenis/seinesaintdenis/association', Data)
		.then((res) => history.push('/admin/seinesaintdenis/association'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
//RESEAUX
// Get all structures
export const getCurrentStructureReseaux = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/seinesaintdenis/seinesaintdenis/reseaux').then((res) =>
		dispatch({
			type: GET_STRUCTURERESEAUX,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idReseaux = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/seinesaintdenis/seinesaintdenis/reseaux/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURERESEAUX,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURERESEAUX,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idReseaux = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/seinesaintdenis/seinesaintdenis/reseaux/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURERESEAUX,
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
export const updateStructureReseaux = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/seinesaintdenis/seinesaintdenis/reseaux/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postReseaux = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/seinesaintdenis/seinesaintdenis/reseaux', Data)
		.then((res) => history.push('/admin/seinesaintdenis/reseaux'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}

//Had
// Get all structures
export const getCurrentStructureHAD = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/seinesaintdenis/seinesaintdenis/HAD').then((res) =>
		dispatch({
			type: GET_STRUCTUREHAD,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idHAD = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/seinesaintdenis/seinesaintdenis/HAD/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTUREHAD,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTUREHAD,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idHAD = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/seinesaintdenis/seinesaintdenis/HAD/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTUREHAD,
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
export const updateStructureHAD = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/seinesaintdenis/seinesaintdenis/HAD/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postHAD = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/seinesaintdenis/seinesaintdenis/HAD', Data)
		.then((res) => history.push('/admin/seinesaintdenis/HAD'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
//Lits
// Get all structures
export const getCurrentStructureLITS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/seinesaintdenis/seinesaintdenis/LITS').then((res) =>
		dispatch({
			type: GET_STRUCTURELITS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idLITS = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/seinesaintdenis/seinesaintdenis/LITS/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURELITS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURELITS,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idLITS = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/seinesaintdenis/seinesaintdenis/LITS/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURELITS,
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
export const updateStructureLITS = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/seinesaintdenis/seinesaintdenis/LITS/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postLITS = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/seinesaintdenis/seinesaintdenis/LITS', Data)
		.then((res) => history.push('/admin/seinesaintdenis/LITS'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
//STRUCTURES
// Get all structures
export const getCurrentStructureSOINS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/seinesaintdenis/seinesaintdenis/structure').then((res) =>
		dispatch({
			type: GET_STRUCTURESOINS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idSOINS = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/seinesaintdenis/seinesaintdenis/structure/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURESOINS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURESOINS,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idSOINS = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/seinesaintdenis/seinesaintdenis/structure/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURESOINS,
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
export const updateStructureSOINS = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/seinesaintdenis/seinesaintdenis/structure/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postSOINS = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/seinesaintdenis/seinesaintdenis/structure', Data)
		.then((res) => history.push('/admin/seinesaintdenis/structures'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
