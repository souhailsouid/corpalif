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
import agenda3Reducer from './notifications/agenda3Reducer'
import offreReducer from './notifications/offreReducer'
import offresdemploisReducer from './menu/Offres&formations/offresdemploisReducer'
import formationReducer from './menu/Offres&formations/formationReducer'
import rencontreReducer from './menu/veillemedicale/rencontreReducer'
import privateInfoReducer from './menu/veillemedicale/privateInfoReducer'
import privateInfoAdherentsReducer from './menu/veillemedicale/privateInfoAdherentsReducer'
import actualiteReducer from './menu/veillemedicale/actualiteReducer'
import evenementReducer from './menu/veillemedicale/evenementReducer'
import statusReducer from './statusReducer'
import mapReducer from './mapReducer'
import profile_adherentReducer from './profile_adherentReducer'
import orientationReducer from './orientationReducer'
import legislationReducer from './legislationReducer'
import accompagnementReducer from './accompagnementReducer'
import corpalifReducer from './corpalifReducer'
import adherentPageReducer from './adherentPageReducer'
import demarcheReducer from './demarcheReducer'
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
	autres: annuaireReducer,
	autres_structures: annuaireReducer,
	caroussel: carousselReducer,
	file: fileReducer,
	adherent: adherentReducer,
	agenda: agendaReducer,
	agenda1: agenda1Reducer,
	agenda2: agenda2Reducer,
	agenda3: agenda3Reducer,
	notificationoffre: offreReducer,
	offreemploi: offresdemploisReducer,
	formation: formationReducer,
	rencontre: rencontreReducer,
	privateInfo: privateInfoReducer,
	actualite: actualiteReducer,
	evenement: evenementReducer,
	mapteam: mapReducer,
	mapusp: mapReducer,
	mapassociation: mapReducer,
	mapreseaux: mapReducer,
	maplit: mapReducer,
	mapsoin: mapReducer,
	mapautre: mapReducer,
	mapautresstructure: mapReducer,
	status: statusReducer,
	profile_adherent: profile_adherentReducer,
	orientation: orientationReducer,
	legislation: legislationReducer,
	accompagnement: accompagnementReducer,
	corpalif: corpalifReducer,
	adherentPage: adherentPageReducer,
	demarche: demarcheReducer,
	privateInfoAdherent: privateInfoAdherentsReducer
})
