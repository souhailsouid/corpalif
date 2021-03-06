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
	DELETE_STRUCTURESOINS,
	GET_STRUCTURE_AUTRES,
	GET_STRUCTURE_AUTRES_STRUCTURES,
	DELETE_STRUCTURE_AUTRES_STRUCTURES,
	DELETE_STRUCTURE_AUTRES
} from './types'
//USP
// Get current structure
export const getCurrentStructure = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/usp').then((res) =>
		dispatch({
			type: GET_STRUCTURE,
			payload: res.data
		})
	)
}
// Get all structures
export const getCurrentStructures = (usps) => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/usp').then((res) =>
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
		.get(`/api/annuaire/essonne/essonne/usp/${id}`)
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
		.delete(`/api/annuaire/essonne/essonne/usp/${id}`)
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
	axios.put(`/api/annuaire/essonne/essonne/usp/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const post = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/usp', Data)
		.then((res) => history.push('/admin/essonne/usp'))
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
	axios.get('/api/annuaire/essonne/essonne/association').then((res) =>
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
		.get(`/api/annuaire/essonne/essonne/association/${id}`)
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
		.delete(`/api/annuaire/essonne/essonne/association/${id}`)
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
	axios.put(`/api/annuaire/essonne/essonne/association/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAssos = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/association', Data)
		.then((res) => history.push('/admin/essonne/association'))
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
	axios.get('/api/annuaire/essonne/essonne/reseaux').then((res) =>
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
		.get(`/api/annuaire/essonne/essonne/reseaux/${id}`)
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
		.delete(`/api/annuaire/essonne/essonne/reseaux/${id}`)
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
	axios.put(`/api/annuaire/essonne/essonne/reseaux/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postReseaux = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/reseaux', Data)
		.then((res) => history.push('/admin/essonne/reseaux'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}

//Had
// Get all structures
export const getCurrentStructureTEAM = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/team').then((res) =>
		dispatch({
			type: GET_STRUCTUREHAD,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idTEAM = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/essonne/essonne/team/${id}`)
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
export const deleteStructure_idTEAM = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/essonne/essonne/team/${id}`)
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
export const updateStructureTEAM = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/essonne/essonne/team/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postTEAM = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/team', Data)
		.then((res) => history.push('/admin/essonne/equipesmobiles'))
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
	axios.get('/api/annuaire/essonne/essonne/LITS').then((res) =>
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
		.get(`/api/annuaire/essonne/essonne/LITS/${id}`)
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
		.delete(`/api/annuaire/essonne/essonne/LITS/${id}`)
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
	axios.put(`/api/annuaire/essonne/essonne/LITS/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postLITS = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/LITS', Data)
		.then((res) => history.push('/admin/essonne/LITS'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
//STRUCTURES
// Get all structures
export const getCurrentStructureHAD = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/HAD').then((res) =>
		dispatch({
			type: GET_STRUCTURESOINS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idHAD = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/essonne/essonne/HAD/${id}`)
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
export const deleteStructure_idHAD = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/essonne/essonne/HAD/${id}`)
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
export const updateStructureHAD = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/essonne/essonne/HAD/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postHAD = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/HAD', Data)
		.then((res) => history.push('/admin/essonne/structures'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}

// Autres_structures

// Get all structures
export const getCurrentStructure_autres_structures = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/autres_structures').then((res) =>
		dispatch({
			type: GET_STRUCTURE_AUTRES_STRUCTURES,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_id_autres_structures = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/essonne/essonne/autres_structures/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURE_AUTRES_STRUCTURES,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURE_AUTRES_STRUCTURES,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_id_autres_structures = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/essonne/essonne/autres_structures/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURE_AUTRES_STRUCTURES,
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
export const updateStructure_autres_structures = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/essonne/essonne/autres_structures/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const post_essonne_autres_structures = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/autres_structures', Data)
		.then((res) => history.push('/admin/essonne/autres_structures'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
//Autres ...

// Get all structures
export const getCurrentStructure_autres = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/annuaire/essonne/essonne/autres').then((res) =>
		dispatch({
			type: GET_STRUCTURE_AUTRES,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_id_autres = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/annuaire/essonne/essonne/autres/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURE_AUTRES,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURE_AUTRES,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_id_autres = (id) => (dispatch) => {
	axios
		.delete(`/api/annuaire/essonne/essonne/autres/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURE_AUTRES,
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
export const updateStructure_autres = (id, Data) => (dispatch) => {
	axios.put(`/api/annuaire/essonne/essonne/autres/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const post_essonne_autres = (Data, history) => (dispatch) => {
	axios
		.post('/api/annuaire/essonne/essonne/autres', Data)
		.then((res) => history.push('/admin/essonne/autres'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
