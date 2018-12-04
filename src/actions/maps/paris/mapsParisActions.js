import axios from 'axios'

import {
	GET_STRUCTURE,
	GET_MAPS,
	MAP_LOADING,
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
} from 'actions/types'
//USP
// Get current structure
export const getCurrentStructureMaps = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/paris/team').then((res) =>
		dispatch({
			type: GET_MAPS,
			payload: res.data
		})
	)
}

// // Get all structures
export const getCurrentMaps_id = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/paris/team/${id}`)
		.then((res) =>
			dispatch({
				type: GET_MAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_MAPS,
				payload: {}
			})
		)
}

// // Delete Post
// export const deleteStructure_id = (id) => (dispatch) => {
// 	axios
// 		.delete(`/api/annuaire/paris/paris/usp/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: DELETE_STRUCTURE,
// 				payload: id
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// // Add Comment
// export const updateStructure = (id, Data) => (dispatch) => {
// 	axios.put(`/api/annuaire/paris/paris/usp/${id}`, Data).then((res) => res.data).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }

// // Create structure
// export const post = (Data, history) => (dispatch) => {
// 	axios.post('/api/annuaire/paris/paris/usp', Data).then((res) => history.push('/admin/paris/usp')).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }

// // Structure loading
export const setStructureLoading = () => {
	return {
		type: MAP_LOADING
	}
}

// //ASSOS
// // Get all structures
// export const getCurrentStructureAssos = () => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios.get('/api/annuaire/paris/paris/association').then((res) =>
// 		dispatch({
// 			type: GET_STRUCTUREASSOCIATION,
// 			payload: res.data
// 		})
// 	)
// }

// // Get current structure
// export const getCurrentStructure_idAssos = (id) => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios
// 		.get(`/api/annuaire/paris/paris/association/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: GET_STRUCTUREASSOCIATION,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_STRUCTUREASSOCIATION,
// 				payload: null
// 			})
// 		)
// }

// // Delete Post
// export const deleteStructure_idAssos = (id) => (dispatch) => {
// 	axios
// 		.delete(`/api/annuaire/paris/paris/association/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: DELETE_STRUCTUREASSOCIATION,
// 				payload: id
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// // Add Comment
// export const updateStructureAssos = (id, Data) => (dispatch) => {
// 	axios.put(`/api/annuaire/paris/paris/association/${id}`, Data).then((res) => res.data).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }

// // Create structure
// export const postAssos = (Data, history) => (dispatch) => {
// 	axios
// 		.post('/api/annuaire/paris/paris/association', Data)
// 		.then((res) => history.push('/admin/paris/association'))
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// //RESEAUX
// // Get all structures
// export const getCurrentStructureReseaux = () => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios.get('/api/annuaire/paris/paris/reseaux').then((res) =>
// 		dispatch({
// 			type: GET_STRUCTURERESEAUX,
// 			payload: res.data
// 		})
// 	)
// }

// // Get current structure
// export const getCurrentStructure_idReseaux = (id) => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios
// 		.get(`/api/annuaire/paris/paris/reseaux/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: GET_STRUCTURERESEAUX,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_STRUCTURERESEAUX,
// 				payload: null
// 			})
// 		)
// }

// // Delete Post
// export const deleteStructure_idReseaux = (id) => (dispatch) => {
// 	axios
// 		.delete(`/api/annuaire/paris/paris/reseaux/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: DELETE_STRUCTURERESEAUX,
// 				payload: id
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// // Add Comment
// export const updateStructureReseaux = (id, Data) => (dispatch) => {
// 	axios.put(`/api/annuaire/paris/paris/reseaux/${id}`, Data).then((res) => res.data).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }

// // Create structure
// export const postReseaux = (Data, history) => (dispatch) => {
// 	axios
// 		.post('/api/annuaire/paris/paris/reseaux', Data)
// 		.then((res) => history.push('/admin/paris/reseaux'))
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }

// //Had
// // Get all structures
// export const getCurrentStructureTEAM = () => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios.get('/api/annuaire/paris/paris/team').then((res) =>
// 		dispatch({
// 			type: GET_STRUCTUREHAD,
// 			payload: res.data
// 		})
// 	)
// }

// // Get current structure
// export const getCurrentStructure_idTEAM = (id) => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios
// 		.get(`/api/annuaire/paris/paris/team/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: GET_STRUCTUREHAD,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_STRUCTUREHAD,
// 				payload: null
// 			})
// 		)
// }

// // Delete Post
// export const deleteStructure_idTEAM = (id) => (dispatch) => {
// 	axios
// 		.delete(`/api/annuaire/paris/paris/team/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: DELETE_STRUCTUREHAD,
// 				payload: id
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// // Add Comment
// export const updateStructureTEAM = (id, Data) => (dispatch) => {
// 	axios.put(`/api/annuaire/paris/paris/team/${id}`, Data).then((res) => res.data).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }

// // Create structure
// export const postTEAM = (Data, history) => (dispatch) => {
// 	axios
// 		.post('/api/annuaire/paris/paris/team', Data)
// 		.then((res) => history.push('/admin/paris/equipesmobiles'))
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// //Lits
// // Get all structures
// export const getCurrentStructureLITS = () => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios.get('/api/annuaire/paris/paris/LITS').then((res) =>
// 		dispatch({
// 			type: GET_STRUCTURELITS,
// 			payload: res.data
// 		})
// 	)
// }

// // Get current structure
// export const getCurrentStructure_idLITS = (id) => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios
// 		.get(`/api/annuaire/paris/paris/LITS/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: GET_STRUCTURELITS,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_STRUCTURELITS,
// 				payload: null
// 			})
// 		)
// }

// // Delete Post
// export const deleteStructure_idLITS = (id) => (dispatch) => {
// 	axios
// 		.delete(`/api/annuaire/paris/paris/LITS/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: DELETE_STRUCTURELITS,
// 				payload: id
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// // Add Comment
// export const updateStructureLITS = (id, Data) => (dispatch) => {
// 	axios.put(`/api/annuaire/paris/paris/LITS/${id}`, Data).then((res) => res.data).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }

// // Create structure
// export const postLITS = (Data, history) => (dispatch) => {
// 	axios.post('/api/annuaire/paris/paris/LITS', Data).then((res) => history.push('/admin/paris/LITS')).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }
// //STRUCTURES
// // Get all structures
// export const getCurrentStructureHAD = () => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios.get('/api/annuaire/paris/paris/had').then((res) =>
// 		dispatch({
// 			type: GET_STRUCTURESOINS,
// 			payload: res.data
// 		})
// 	)
// }

// // Get current structure
// export const getCurrentStructure_idHAD = (id) => (dispatch) => {
// 	dispatch(setStructureLoading())
// 	axios
// 		.get(`/api/annuaire/paris/paris/had/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: GET_STRUCTURESOINS,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_STRUCTURESOINS,
// 				payload: null
// 			})
// 		)
// }

// // Delete Post
// export const deleteStructure_idHAD = (id) => (dispatch) => {
// 	axios
// 		.delete(`/api/annuaire/paris/paris/had/${id}`)
// 		.then((res) =>
// 			dispatch({
// 				type: DELETE_STRUCTURESOINS,
// 				payload: id
// 			})
// 		)
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
// // Add Comment
// export const updateStructureHAD = (id, Data) => (dispatch) => {
// 	axios.put(`/api/annuaire/paris/paris/had/${id}`, Data).then((res) => res.data).catch((err) =>
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: {}
// 		})
// 	)
// }

// // Create structure
// export const postHAD = (Data, history) => (dispatch) => {
// 	axios
// 		.post('/api/annuaire/paris/paris/had', Data)
// 		.then((res) => history.push('/admin/paris/structure'))
// 		.catch((err) =>
// 			dispatch({
// 				type: GET_ERRORS,
// 				payload: {}
// 			})
// 		)
// }
