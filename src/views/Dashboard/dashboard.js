import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Spinner from 'views/common/Spinner'
import HeaderComponent from 'views/Header/AppBar.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import CompleteProfile from 'views/create-profile/complete'

// Redux
import { withRouter } from 'react-router-dom'
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentProfile()
	}

	onDeleteClick(e) {
		this.props.deleteAccount()
	}

	render() {
		const { profile, loading } = this.props.profile
		const { classes } = this.props

		let dashboardContent

		if (profile === null || loading) {
			dashboardContent = <Spinner />
		} else {
			// Check if logged in user has profile data
			if (Object.keys(profile).length > 0) {
				dashboardContent = window.location.assign('/monprofile')
			} else {
				// User is logged in but has no profile
				dashboardContent = (
					<div>
						<CompleteProfile />
					</div>
				)
			}
		}

		return (
			<div className="dashboard">
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ height: 'auto' }}>
					<GridContainer style={{ justifyContent: 'center' }}>
						<GridItem xs={12} sm={12} md={8}>
							<div style={{ textAlign: 'center', marginTop: 200, marginBottom: 50 }}>
								<h2>Mon profile</h2>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-md-12">{dashboardContent}</div>
								</div>
							</div>
						</GridItem>
					</GridContainer>
				</div>
				<SectionFooter />
			</div>
		)
	}
}

Dashboard.propTypes = {
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
	connect(mapStateToProps, { getCurrentProfile, deleteAccount })(withRouter(Dashboard))
)
