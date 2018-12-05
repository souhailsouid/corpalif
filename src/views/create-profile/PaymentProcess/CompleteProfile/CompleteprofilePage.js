import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Spinner from 'views/common/Spinner'
import CompleteProcess from 'views/create-profile/PaymentProcess/CompleteProfile/CompleteProcess'
import HeaderComponent from 'views/Header/AppBar.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
// Redux
import { withRouter } from 'react-router-dom'
import { getCurrentProfile, deleteAccount } from 'actions/profileActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
class CompleteprofilePage extends Component {
	componentDidMount() {
		this.props.getCurrentProfile()
	}
	render() {
		const { classes } = this.props
		const { user } = this.props.auth
		const { profile, loading } = this.props.profile
		let dashboardContent

		if (profile === null || loading) {
			dashboardContent = <Spinner />
		} else {
			// Check if logged in user has profile data
			if (Object.keys(profile).length > 0) {
				dashboardContent = window.location.assign('/adherent/check-profile')
			} else {
				// User is logged in but has no profile
				dashboardContent = (
					<div>
						<CompleteProcess />
					</div>
				)
			}
		}
		return (
			<div>
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ height: 'auto' }}>
					<div> {dashboardContent}</div>
				</div>
			</div>
		)
	}
}
CompleteprofilePage.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth
})

export default compose(withStyles(presentationStyle))(
	connect(mapStateToProps, { getCurrentProfile, deleteAccount })(withRouter(CompleteprofilePage))
)
