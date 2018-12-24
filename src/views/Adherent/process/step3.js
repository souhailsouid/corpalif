import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'

import DialogContent from '@material-ui/core/DialogContent'

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'

// core components
import SectionFooter from 'views/Footer/SectionFooter'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import HeaderComponent from 'views/Header/AppBar.jsx'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerUser } from 'actions/authActions'
import { withRouter } from 'react-router-dom'
import OpenLogin from './connection'
import { getCurrentProfile } from 'actions/profileActions'
import Spinner from 'views/common/Spinner'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Step2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: true,
			simpleSelect: '',
			name: '',
			email: '',
			company: '',
			password: '',
			password2: '',
			structure: '',
			fonction: '',
			last_name: '',
			location: '',

			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}
	componentDidMount() {
		this.props.getCurrentProfile()
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
					<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
						<div style={{ marginTop: 20, paddingLeft: 10, border: '2px solid  #000000', width: 'auto' }}>
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
						<p>Vous pouvez aller à l'étape 2</p>
					</GridItem>
				)
			} else {
				dashboardContent = (
					<div>
						<Card plain className={classes.modalSignupCard}>
							<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
										<form
											noValidate
											onSubmit={this.onSubmit}
											className={classes.form}
											style={{ marginTop: 100, height: 200 }}
										/>
									</GridItem>
								</GridContainer>
							</DialogContent>
						</Card>
					</div>
				)
			}
		}
		return (
			<div>
				<div>
					<HeaderComponent />

					<Card>{dashboardContent}</Card>
					<OpenLogin />
				</div>
				<SectionFooter />
			</div>
		)
	}
}

Step2.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	registerUser: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { registerUser, getCurrentProfile })(withRouter(Step2))
)
