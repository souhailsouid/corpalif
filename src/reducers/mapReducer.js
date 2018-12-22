import {
	GET_STRUCTUREHADMAPS,
	STRUCTURE_LOADING,
	GET_STRUCTUREMAPS,
	DELETE_STRUCTUREMAPS,
	GET_STRUCTUREMAPSASSOCIATION,
	DELETE_STRUCTUREMAPSASSOCIATION,
	GET_STRUCTURERESEAUXMAPS,
	DELETE_STRUCTURERESEAUXMAPS,
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

const initialState = {
	mapteam: [],
	mapusp: [],
	mapassociation: [],
	mapreseaux: [],
	maplit: [],
	mapsoin: [],
	mapautre: [],
	mapautresstructure: [],
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
		case GET_STRUCTUREMAPS:
			return {
				...state,
				mapusp: action.payload,
				loading: false
			}

		case DELETE_STRUCTUREMAPS:
			return {
				...state,
				posts: state.mapusps.filter((mapusp) => mapusp._id !== action.payload)
			}

		// association
		case GET_STRUCTUREMAPSASSOCIATION:
			return {
				...state,
				mapassociation: action.payload,
				loading: false
			}

		case DELETE_STRUCTUREMAPSASSOCIATION:
			return {
				...state,
				posts: state.mapassociations.filter((mapassociation) => mapassociation._id !== action.payload)
			}
		// HAD
		case GET_STRUCTUREHADMAPS:
			return {
				...state,
				mapteam: action.payload,
				loading: false
			}

		case DELETE_STRUCTUREHADMAPS:
			return {
				...state,
				posts: state.mapteams.filter((mapteam) => mapteam._id !== action.payload)
			}
		// RESEAUX
		case GET_STRUCTURERESEAUXMAPS:
			return {
				...state,
				mapreseaux: action.payload,
				loading: false
			}

		case DELETE_STRUCTURERESEAUXMAPS:
			return {
				...state,
				posts: state.mapreseauxs.filter((mapreseaux) => mapreseaux._id !== action.payload)
			}
		// LITS
		case GET_STRUCTURELITSMAPS:
			return {
				...state,
				maplit: action.payload,
				loading: false
			}

		case DELETE_STRUCTURELITSMAPS:
			return {
				...state,
				posts: state.maplits.filter((maplit) => maplit._id !== action.payload)
			}
		//STRUCTURES
		case GET_STRUCTURESOINSMAPS:
			return {
				...state,
				mapsoin: action.payload,
				loading: false
			}

		case DELETE_STRUCTURESOINSMAPS:
			return {
				...state,
				posts: state.mapsoins.filter((mapsoin) => mapsoin._id !== action.payload)
			}
		// AUTRES STRUCTURES
		case GET_AUTRES_STRUCTUREMAPS:
			return {
				...state,
				mapautresstructure: action.payload,
				loading: false
			}

		case DELETE_AUTRES_STRUCTUREMAPS:
			return {
				...state,
				posts: state.mapautresstructures.filter(
					(mapautresstructure) => mapautresstructure._id !== action.payload
				)
			}
		// AUTRES
		case GET_AUTRESMAPS:
			return {
				...state,
				mapautre: action.payload,
				loading: false
			}

		case DELETE_AUTRESMAPS:
			return {
				...state,
				posts: state.mapautres.filter((mapautre) => mapautre._id !== action.payload)
			}

		default:
			return state
	}
}
