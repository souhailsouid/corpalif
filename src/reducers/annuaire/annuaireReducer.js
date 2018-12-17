import {
	GET_STRUCTURE,
	STRUCTURE_LOADING,
	GET_STRUCTURES,
	DELETE_STRUCTURE,
	DELETE_STRUCTUREASSOCIATION,
	GET_STRUCTUREASSOCIATION,
	DELETE_STRUCTURERESEAUX,
	GET_STRUCTURERESEAUX,
	DELETE_STRUCTURELITS,
	GET_STRUCTURELITS,
	DELETE_STRUCTURESOINS,
	GET_STRUCTURESOINS,
	DELETE_STRUCTUREHAD,
	GET_STRUCTUREHAD,
	GET_STRUCTURE_AUTRES,
	GET_STRUCTURE_AUTRES_STRUCTURES,
	DELETE_STRUCTURE_AUTRES_STRUCTURES,
	DELETE_STRUCTURE_AUTRES
} from 'actions/types'

const initialState = {
	usp: [],
	association: [],
	reseaux: [],
	lit: [],
	had: [],
	soin: [],
	autres_structures: [],
	autres: [],
	loading: false
}

export default function(state = initialState, action) {
	switch (action.type) {
		case STRUCTURE_LOADING:
			return {
				...state,
				loading: true
			}
		// USP
		case GET_STRUCTURE:
			return {
				...state,
				usp: action.payload,
				loading: false
			}
		case GET_STRUCTURES:
			return {
				...state,
				usps: action.payload,
				loading: false
			}

		case DELETE_STRUCTURE:
			return {
				...state,
				posts: state.usps.filter((usp) => usp._id !== action.payload)
			}
		// association
		case GET_STRUCTUREASSOCIATION:
			return {
				...state,
				association: action.payload,
				loading: false
			}

		case DELETE_STRUCTUREASSOCIATION:
			return {
				...state,
				posts: state.associations.filter((association) => association._id !== action.payload)
			}
		// HAD
		case GET_STRUCTUREHAD:
			return {
				...state,
				had: action.payload,
				loading: false
			}

		case DELETE_STRUCTUREHAD:
			return {
				...state,
				posts: state.hads.filter((had) => had._id !== action.payload)
			}
		// RESEAUX
		case GET_STRUCTURERESEAUX:
			return {
				...state,
				reseaux: action.payload,
				loading: false
			}

		case DELETE_STRUCTURERESEAUX:
			return {
				...state,
				posts: state.reseauxs.filter((reseaux) => reseaux._id !== action.payload)
			}
		// LITS
		case GET_STRUCTURELITS:
			return {
				...state,
				lit: action.payload,
				loading: false
			}

		case DELETE_STRUCTURELITS:
			return {
				...state,
				posts: state.lits.filter((lit) => lit._id !== action.payload)
			}
		//STRUCTURES
		case GET_STRUCTURESOINS:
			return {
				...state,
				soin: action.payload,
				loading: false
			}

		case DELETE_STRUCTURESOINS:
			return {
				...state,
				posts: state.soins.filter((soin) => soin._id !== action.payload)
			}
		// AUTRES_STRUCTURES
		case GET_STRUCTURE_AUTRES_STRUCTURES:
			return {
				...state,
				autres_structures: action.payload,
				loading: false
			}

		case DELETE_STRUCTURE_AUTRES_STRUCTURES:
			return {
				...state,
				posts: state.autres_structures.filter((autres_structures) => autres_structures._id !== action.payload)
			}

		// AUTRES
		case GET_STRUCTURE_AUTRES:
			return {
				...state,
				autres: action.payload,
				loading: false
			}

		case DELETE_STRUCTURE_AUTRES:
			return {
				...state,
				posts: state.autres.filter((autres) => autres._id !== action.payload)
			}

		default:
			return state
	}
}
