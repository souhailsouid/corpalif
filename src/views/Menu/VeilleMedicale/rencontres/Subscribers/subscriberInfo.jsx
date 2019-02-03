import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Button from 'components/CustomButtons/Button.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter, Link } from 'react-router-dom'

class InfoSubscribers extends React.Component {
	render() {
		const { isAuthenticated } = this.props.auth

		const authLinks = (
			<Link to="/menu/veillemedicale/infosforSubscribers">
				<Button round color="red">
					Accéder
				</Button>
			</Link>
		)
		const ButtonGuest = (
			<Button disabled round color="red">
				Accéder
			</Button>
		)

		return <div>{isAuthenticated ? authLinks : ButtonGuest}</div>
	}
}

InfoSubscribers.propTypes = {
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(connect(mapStateToProps, {})(withRouter(InfoSubscribers)))
