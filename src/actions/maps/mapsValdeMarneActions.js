import axios from 'axios'

import {
	GET_STRUCTUREMAPS,
	GET_AUTRES,
	MAP_LOADING,
	DELETE_STRUCTUREMAPS,
	GET_ERRORS,
	GET_STRUCTUREMAPSASSOCIATION,
	DELETE_STRUCTUREMAPSASSOCIATION,
	GET_STRUCTURERESEAUXMAPS,
	DELETE_STRUCTURERESEAUXMAPS,
	GET_STRUCTUREHADMAPS,
	DELETE_STRUCTUREHADMAPS,
	GET_STRUCTURELITSMAPS,
	DELETE_STRUCTURELITSMAPS,
	GET_STRUCTURESOINSMAPS,
	DELETE_STRUCTURESOINSMAPS,
	GET_AUTRESMAPS,
	DELETE_AUTRESMAPS,
	GET_AUTRES_STRUCTUREMAPS,
	DELETE_AUTRES_STRUCTUREMAPS
} from 'actions/types'
//USP
// Get current structure
export const getCurrentStructureMaps = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdemarne/usp').then((res) =>
		dispatch({
			type: GET_STRUCTUREMAPS,
			payload: res.data
		})
	)
}

// Get all structures
export const getCurrentMaps_id = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/usp/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTUREMAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTUREMAPS,
				payload: {}
			})
		)
}

// Delete Post
export const deleteStructure_id = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/usp/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTUREMAPS,
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
	axios.put(`/api/maps/valdemarne/usp/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const post = (Data, history) => (dispatch) => {
	axios.post('/api/maps/valdemarne/usp', Data).then((res) => history.push('/admin/valdemarne/usp')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Structure loading
export const setStructureLoading = () => {
	return {
		type: MAP_LOADING
	}
}

//ASSOS
// Get all structures
export const getCurrentStructureAssociationMaps = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdemarne/association').then((res) =>
		dispatch({
			type: GET_STRUCTUREMAPSASSOCIATION,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idAssosMaps = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/association/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTUREMAPSASSOCIATION,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTUREMAPSASSOCIATION,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idAssosMaps = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/association/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTUREMAPSASSOCIATION,
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
export const updateStructureAssosMaps = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdemarne/association/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAssos = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdemarne/association', Data)
		.then((res) => history.push('/admin/ESSONNE/association'))
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
	axios.get('/api/maps/valdemarne/reseaux').then((res) =>
		dispatch({
			type: GET_STRUCTURERESEAUXMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idReseaux = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/reseaux/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURERESEAUXMAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURERESEAUXMAPS,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idReseaux = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/reseaux/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURERESEAUXMAPS,
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
	axios.put(`/api/maps/valdemarne/reseaux/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postReseaux = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdemarne/reseaux', Data)
		.then((res) => history.push('/admin/valdemarne/reseaux'))
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
	axios.get('/api/maps/valdemarne/team').then((res) =>
		dispatch({
			type: GET_STRUCTUREHADMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idTEAM = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/team/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTUREHADMAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTUREHADMAPS,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idTEAMMAPS = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/team/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTUREHADMAPS,
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
export const updateStructureTEAMMPAS = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdemarne/team/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postTEAMMAPS = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdemarne/team', Data)
		.then((res) => history.push('/admin/valdemarne/equipesmobiles'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
// Lits
// Get all structures
export const getCurrentStructureLITSMAPS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdemarne/LITS').then((res) =>
		dispatch({
			type: GET_STRUCTURELITSMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idLITSMAPS = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/LITS/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURELITSMAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURELITSMAPS,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idLITSMAPS = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/LITS/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURELITSMAPS,
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
export const updateStructureLITSMAPS = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdemarne/LITS/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postLITSMAPS = (Data, history) => (dispatch) => {
	axios.post('/api/maps/valdemarne/LITS', Data).then((res) => history.push('/admin/valdemarne/LITS')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
//STRUCTURES
// Get all structures
export const getCurrentStructureHADMAPS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdemarne/had').then((res) =>
		dispatch({
			type: GET_STRUCTURESOINSMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idHADMAPS = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/had/${id}`)
		.then((res) =>
			dispatch({
				type: GET_STRUCTURESOINSMAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_STRUCTURESOINSMAPS,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idHADMAPS = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/had/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_STRUCTURESOINSMAPS,
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
export const updateStructureHADMAPS = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdemarne//had/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postHADMAPS = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdemarne/had', Data)
		.then((res) => history.push('/admin/valdemarne/structure'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}

//STRUCTURES
// Get all structures
export const getCurrentStructureAutresstructuresMAPS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdemarne/autresStructures').then((res) =>
		dispatch({
			type: GET_AUTRES_STRUCTUREMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idAutresstructuresMAPS = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/autresStructures/${id}`)
		.then((res) =>
			dispatch({
				type: GET_AUTRES_STRUCTUREMAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_AUTRES_STRUCTUREMAPS,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idAutresstructuresMAPS = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/autresStructures/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_AUTRES_STRUCTUREMAPS,
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
export const updateStructureAutresstructuresMAPS = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdemarne/autresStructures/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAutresstructuresMAPS = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdemarne/autresStructures', Data)
		.then((res) => history.push('/admin/valdemarne/structure'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}

//STRUCTURES
// Get all structures
export const getCurrentStructureAutresMAPS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdemarne/had').then((res) =>
		dispatch({
			type: GET_AUTRESMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idAutresMAPS = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdemarne/Autres/${id}`)
		.then((res) =>
			dispatch({
				type: GET_AUTRESMAPS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_AUTRES,
				payload: null
			})
		)
}

// Delete Post
export const deleteStructure_idAutresMAPS = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdemarne/Autres/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_AUTRESMAPS,
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
export const updateStructureAutresMAPS = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdemarne/Autres/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAutresMAPS = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdemarne/Autres', Data)
		.then((res) => history.push('/admin/valdemarne/structure'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
