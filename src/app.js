import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './actions/authActions'
import 'assets/scss/material-kit-pro-react.css?v=1.2.0'
import { createBrowserHistory } from 'history'
import indexRoutes from 'routes/index.jsx'

import { Provider } from 'react-redux'
import store from './store'
var hist = createBrowserHistory()
// Check for token
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken)
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken)
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded))
}
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hist}>
					<Switch>
						{indexRoutes.map((prop, key) => {
							return <Route path={prop.path} key={key} component={prop.component} />
						})}
					</Switch>
				</Router>
			</Provider>
		)
	}
}

export default App
