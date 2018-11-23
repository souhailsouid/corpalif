import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, GET_PROFILE, PROFILE_LOADING, GET_RESET_PASSWORD } from './types'

// Register User
export const registerUser = (newUser, history) => (dispatch) => {
	axios.post('/api/users/register', newUser).then((res) => history.push('/')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	)
}

// Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
	axios
		.post('/api/users/login', userData)
		.then((res) => {
			// Save to localStorage
			const { token } = res.data
			// Set token to ls
			localStorage.setItem('jwtToken', token)
			// Set token to Auth header
			setAuthToken(token)
			// Decode token to get user data
			const decoded = jwt_decode(token)
			// Set current user
			dispatch(setCurrentUser(decoded))
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}

// Set logged in user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}
}

// Log user out
export const logoutUser = () => (dispatch) => {
	// Remove token from localStorage
	localStorage.removeItem('jwtToken')
	// Remove auth header for future requests
	setAuthToken(false)
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}))
}
// Get Profile
export const getProfile = () => (dispatch) => {
	dispatch(setProfileLoading())
	axios
		.get('/api/users/')
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILE,
				payload: {}
			})
		)
}
// Profile loading
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	}
}

// Update Profile
export const updateProfile = (userData, history) => (dispatch) => {
	axios.post('/api/users/', userData).then((res) => history.push('/dashboard')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	)
}
// Forgot password
export const forgotpassword = (userData) => (dispatch) => {
	axios.post('/api/users/forgot_password', userData).then((res) => {}).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	)
}
// Forgot password
export const updatePassword = (token, userData) => (dispatch) => {
	axios.post(`/api/users/reset/${token}`, userData).then((res) => {}).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	)
}
export const getUpdatePassword = (token) => (dispatch) => {
	axios
		.get(`/api/users/reset/${token}`)
		.then((res) =>
			dispatch({
				type: GET_RESET_PASSWORD,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}

// Receive Email Contact
export const receivemail = (first_name, last_name, email, message) => (dispatch) => {
	axios.post('/api/users/api/form', first_name, last_name, email, message).then((res) => {})
}
