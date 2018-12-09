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
import offresdemploisReducer from './menu/Offres&formations/offresdemploisReducer'
import formationReducer from './menu/Offres&formations/formationReducer'
import rencontreReducer from './menu/veillemedicale/rencontreReducer'
import actualiteReducer from './menu/veillemedicale/actualiteReducer'
import evenementReducer from './menu/veillemedicale/evenementReducer'
import statusReducer from './statusReducer'
import mapReducer from './mapReducer'
import profile_adherentReducer from './profile_adherentReducer'
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
	notificationoffre: offreReducer,
	offreemploi: offresdemploisReducer,
	formation: formationReducer,
	rencontre: rencontreReducer,
	actualite: actualiteReducer,
	evenement: evenementReducer,
	mapteam: mapReducer,
	mapusp: mapReducer,
	mapassociation: mapReducer,
	mapreseaux: mapReducer,
	maplit: mapReducer,
	mapsoin: mapReducer,
	status: statusReducer,
	profile_adherent: profile_adherentReducer
})
