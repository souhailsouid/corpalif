import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import resetpasswordReducer from './resetpasswordReducer'
import profileReducer from './profileReducer'
import annuaireReducer from './annuaireReducer'

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	reset: resetpasswordReducer,
	profile: profileReducer,
	association: annuaireReducer,
	usp: annuaireReducer,
	reseaux: annuaireReducer,
	lit: annuaireReducer,
	had: annuaireReducer,
	soin: annuaireReducer
})
