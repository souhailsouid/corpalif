import { combineReducers } from 'redux'
import authReducer from './login/authReducer'
import errorReducer from './errorReducer'
import validationReducer from './validationReducer'
import resetpasswordReducer from './login/resetpasswordReducer'
import profileReducer from './profileReducer'
import annuaireReducer from './annuaire/annuaireReducer'
import recommandationReducer from './menu/veillemedicale/recommandationReducer'
import carousselReducer from './pagedaccueil/carousselReducer'
import fileReducer from './pagedaccueil/fileReducer'
import adherentReducer from './pagedaccueil/adherentReducer'
import agendaReducer from './pagedaccueil/agendaReducer'
import agenda1Reducer from './notifications/agenda1Reducer'
import agenda2Reducer from './notifications/agenda2Reducer'
import offreReducer from './notifications/offreReducer'
import rencontreReducer from './menu/veillemedicale/rencontreReducer'
import actualiteReducer from './menu/veillemedicale/actualiteReducer'
import evenementReducer from './menu/veillemedicale/evenementReducer'
export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	validations: validationReducer,
	reset: resetpasswordReducer,
	profile: profileReducer,
	association: annuaireReducer,
	usp: annuaireReducer,
	reseaux: annuaireReducer,
	lit: annuaireReducer,
	had: annuaireReducer,
	soin: annuaireReducer,
	recommandation: recommandationReducer,
	caroussel: carousselReducer,
	file: fileReducer,
	adherent: adherentReducer,
	agenda: agendaReducer,
	agenda1: agenda1Reducer,
	agenda2: agenda2Reducer,
	offre: offreReducer,
	rencontre: rencontreReducer,
	actualite: actualiteReducer,
	evenement: evenementReducer
})
