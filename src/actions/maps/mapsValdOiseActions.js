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
	axios.get('/api/maps/valdoise/usp').then((res) =>
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
		.get(`/api/maps/valdoise/usp/${id}`)
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
		.delete(`/api/maps/valdoise/usp/${id}`)
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
	axios.put(`/api/maps/valdoise/usp/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const post = (Data, history) => (dispatch) => {
	axios.post('/api/maps/valdoise/usp', Data).then((res) => history.push('/admin/valdoise/usp')).catch((err) =>
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
	axios.get('/api/maps/valdoise/association').then((res) =>
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
		.get(`/api/maps/valdoise/association/${id}`)
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
		.delete(`/api/maps/valdoise/association/${id}`)
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
	axios.put(`/api/maps/valdoise/association/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAssos = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdoise/association', Data)
		.then((res) => history.push('/admin/valdoise/association'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
//RESEAUX
// Get all structures
export const getCurrentStructureReseauxMAPS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdoise/reseaux').then((res) =>
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
		.get(`/api/maps/valdoise/reseaux/${id}`)
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
		.delete(`/api/maps/valdoise/reseaux/${id}`)
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
	axios.put(`/api/maps/valdoise/reseaux/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postReseaux = (Data, history) => (dispatch) => {
	axios.post('/api/maps/valdoise/reseaux', Data).then((res) => history.push('/admin/valdoise/reseaux')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

//Had
// Get all structures
export const getCurrentStructureTEAMMAPS = () => (dispatch) => {
	dispatch(setStructureLoading())
	axios.get('/api/maps/valdoise/team').then((res) =>
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
		.get(`/api/maps/valdoise/team/${id}`)
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
export const deleteStructure_idTEAM = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdoise/team/${id}`)
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
export const updateStructureTEAM = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdoise/team/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postTEAM = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdoise/team', Data)
		.then((res) => history.push('/admin/valdoise/equipesmobiles'))
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
	axios.get('/api/maps/valdoise/LITS').then((res) =>
		dispatch({
			type: GET_STRUCTURELITSMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idLITS = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdoise/LITS/${id}`)
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
export const deleteStructure_idLITS = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdoise/LITS/${id}`)
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
export const updateStructureLITS = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdoise/LITS/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postLITS = (Data, history) => (dispatch) => {
	axios.post('/api/maps/valdoise/LITS', Data).then((res) => history.push('/admin/valdoise/LITS')).catch((err) =>
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
	axios.get('/api/maps/valdoise/had').then((res) =>
		dispatch({
			type: GET_STRUCTURESOINSMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idHAD = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdoise/had/${id}`)
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
export const deleteStructure_idHAD = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdoise/had/${id}`)
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
export const updateStructureHAD = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdoise//had/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postHAD = (Data, history) => (dispatch) => {
	axios.post('/api/maps/valdoise/had', Data).then((res) => history.push('/admin/valdoise/structure')).catch((err) =>
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
	axios.get('/api/maps/valdoise/autresStructures').then((res) =>
		dispatch({
			type: GET_AUTRES_STRUCTUREMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idAutresstructures = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdoise/autresStructures/${id}`)
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
export const deleteStructure_idAutresstructures = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdoise/autresStructures/${id}`)
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
export const updateStructureAutresstructures = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdoise/autresStructures/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAutresstructures = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdoise/autresStructures', Data)
		.then((res) => history.push('/admin/valdoise/structure'))
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
	axios.get('/api/maps/valdoise/had').then((res) =>
		dispatch({
			type: GET_AUTRESMAPS,
			payload: res.data
		})
	)
}

// Get current structure
export const getCurrentStructure_idAutres = (id) => (dispatch) => {
	dispatch(setStructureLoading())
	axios
		.get(`/api/maps/valdoise/Autres/${id}`)
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
export const deleteStructure_idAutres = (id) => (dispatch) => {
	axios
		.delete(`/api/maps/valdoise/Autres/${id}`)
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
export const updateStructureAutres = (id, Data) => (dispatch) => {
	axios.put(`/api/maps/valdoise/Autres/${id}`, Data).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}

// Create structure
export const postAutres = (Data, history) => (dispatch) => {
	axios
		.post('/api/maps/valdoise/Autres', Data)
		.then((res) => history.push('/admin/valdoise/structure'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		)
}
