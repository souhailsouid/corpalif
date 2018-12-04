import {
	GET_STRUCTURE,
	GET_MAPS,
	MAP_LOADING,
	STRUCTURE_LOADING,
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
	GET_STRUCTUREHAD
} from 'actions/types'

const initialState = {
	mapteam: [],
	mapusp: [],
	mapassociation: [],
	mapreseaux: [],
	maplit: [],
	mapsoin: [],
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
				mapusp: action.payload,
				loading: false
			}

		case DELETE_STRUCTURE:
			return {
				...state,
				posts: state.mapusps.filter((mapusp) => mapusp._id !== action.payload)
			}
		// association
		case GET_STRUCTUREASSOCIATION:
			return {
				...state,
				mapassociation: action.payload,
				loading: false
			}

		case DELETE_STRUCTUREASSOCIATION:
			return {
				...state,
				posts: state.mapassociations.filter((mapassociation) => mapassociation._id !== action.payload)
			}
		// HAD
		case GET_MAPS:
			return {
				...state,
				mapteam: action.payload,
				loading: false
			}

		case DELETE_STRUCTUREHAD:
			return {
				...state,
				posts: state.mapteams.filter((mapteam) => mapteam._id !== action.payload)
			}
		// RESEAUX
		case GET_STRUCTURERESEAUX:
			return {
				...state,
				mapreseaux: action.payload,
				loading: false
			}

		case DELETE_STRUCTURERESEAUX:
			return {
				...state,
				posts: state.mapreseauxs.filter((mapreseaux) => mapreseaux._id !== action.payload)
			}
		// LITS
		case GET_STRUCTURELITS:
			return {
				...state,
				maplit: action.payload,
				loading: false
			}

		case DELETE_STRUCTURELITS:
			return {
				...state,
				posts: state.maplits.filter((maplit) => maplit._id !== action.payload)
			}
		//STRUCTURES
		case GET_STRUCTURESOINS:
			return {
				...state,
				mapoins: action.payload,
				loading: false
			}

		case DELETE_STRUCTURESOINS:
			return {
				...state,
				posts: state.mapsoins.filter((mapsoin) => mapsoin._id !== action.payload)
			}
		default:
			return state
	}
}
