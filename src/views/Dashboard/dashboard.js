import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Spinner from 'views/common/Spinner'
import ProfileActions from './ProfileActions'
import HeaderComponent from 'views/Header/AppBar.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import CompleteProfile from 'views/create-profile/complete'
// Redux
import { withRouter, Link } from 'react-router-dom'
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
		const { user } = this.props.auth
		const { profile, loading } = this.props.profile
		const { classes } = this.props

		let dashboardContent

		if (profile === null || loading) {
			dashboardContent = <Spinner />
		} else {
			// Check if logged in user has profile data
			if (Object.keys(profile).length > 0) {
				dashboardContent = (
					<div>
						{Object.keys(profile).length - 3}
						<h5>Vos informations</h5>

						<ProfileActions />
						<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
							<div
								style={{ marginTop: 20, paddingLeft: 10, border: '2px solid  #000000', width: 'auto' }}
							>
								<ul style={{ paddingLeft: 0 }}>
									<b style={{ color: '#337467' }}>Nom:</b> {user.name}
								</ul>
								<ul style={{ paddingLeft: 0 }}>
									{' '}
									<b style={{ color: '#337467' }}> Prenom:</b> {user.last_name}{' '}
								</ul>
								<ul style={{ paddingLeft: 0 }}>
									{' '}
									<b style={{ color: '#337467' }}>Structure:</b> {profile.structure}
								</ul>
								<ul style={{ paddingLeft: 0 }}>
									{' '}
									<b style={{ color: '#337467' }}>Company:</b> {profile.company}
								</ul>
								<ul style={{ paddingLeft: 0 }}>
									{' '}
									<b style={{ color: '#337467' }}>Fonction:</b> {profile.fonction}
								</ul>
								<ul style={{ paddingLeft: 0 }}>
									{' '}
									<b style={{ color: '#337467' }}>Localisation:</b> {profile.location}
								</ul>
							</div>
						</GridItem>
						<div style={{ marginBottom: '60px' }} />
						<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
							Delete My Account
						</button>
					</div>
				)
			} else {
				// User is logged in but has no profile
				dashboardContent = (
					<div>
						{/* <p className="lead text-muted">Welcome {user.name}</p>
						<p>You have not yet setup a profile, please add some info</p>
						<Link to="/complete-profile" className="btn btn-lg btn-info">
							Create Profile
						</Link> */}
						<CompleteProfile />
					</div>
				)
			}
		}

		return (
			<div className="dashboard">
				<HeaderComponent />
				<div className={classNames(classes.main, classes.mainRaised)}>
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
