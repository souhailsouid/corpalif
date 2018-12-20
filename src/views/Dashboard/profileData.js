import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'
import Spinner from 'views/common/Spinner'
// @material-ui/icons
import FormHelperText from '@material-ui/core/FormHelperText'
import Face from '@material-ui/icons/Face'
import Mail from '@material-ui/icons/Mail'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import SectionAdherent from './blockAdherent'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter, Link } from 'react-router-dom'
import { createProfile, getCurrentProfile } from 'actions/profileActions'
import isEmpty from 'validation/is-empty'
import { is } from 'immutable'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class ProfileData extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: true,
			simpleSelect: '',
			displaySocialInputs: false,
			structure: '',
			company: '',
			newsletter: '',

			member: '',
			location: '',
			fonction: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentDidMount() {
		this.props.getCurrentProfile()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}

		if (nextProps.profile.profile) {
			const profile = nextProps.profile.profile

			// If profile field doesnt exist, make empty string
			profile.company = !isEmpty(profile.company) ? profile.company : ''
			profile.structure = !isEmpty(profile.structure) ? profile.structure : ''
			profile.location = !isEmpty(profile.location) ? profile.location : ''
			profile.fonction = !isEmpty(profile.fonction) ? profile.fonction : ''
			profile.newsletter = !isEmpty(profile.newsletter) ? profile.newsletter : ''
			// profile.adherent.member = !isEmpty(profile.adherent.member) ? profile.adherent.member : ''
			// Set component fields state
			this.setState({
				structure: profile.structure,
				company: profile.company,
				fonction: profile.fonction,
				location: profile.location,
				newsletter: profile.newsletter
			})
		}
		if (nextProps.auth.user) {
			const user = nextProps.auth.user
			this.setState({
				name: user.name,
				last_name: user.last_name,
				email: user.email,
				status: user.status
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const profileData = {
			company: this.state.company,
			location: this.state.location,
			fonction: this.state.fonction,
			structure: this.state.structure,
			newsletter: this.state.newsletter
		}
		this.props.createProfile(profileData, this.props.history)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSimple = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}
	handleClickOpen(modal) {
		var x = []
		x[modal] = true
		this.setState(x)
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}
	render() {
		const { errors } = this.state

		const { classes } = this.props
		const { user } = this.props.auth
		const { profile, loading } = this.props.profile

		let dashboardContent

		if (profile === null || loading) {
			dashboardContent = <Spinner />
		} else {
			if (profile.member === undefined) {
				dashboardContent = (
					<div>
						<SectionAdherent />
					</div>
				)
			} else {
				// User is logged in but has no contract
				dashboardContent = (
					<div>
						<h2 style={{ textAlign: 'center' }}>
							Adhérent pour l'année <b>{Object.values(profile.adherent[0].date).slice(0, 4)} </b> depuis
							le: <br />
							<h3 style={{ textAlign: 'center' }}>
								{' '}
								<b>
									{Object.values(profile.adherent[0].date).slice(8, 10)}-{Object.values(profile.adherent[0].date).slice(5, 7)}-{Object.values(profile.adherent[0].date).slice(0, 4)}
								</b>{' '}
								et jusqu'au 31 décembre <b>{Object.values(profile.adherent[0].date).slice(0, 4)} </b>
							</h3>
						</h2>
					</div>
				)
			}
		}

		return (
			<div>
				<div>
					<GridContainer justify="left">
						<Card plain className={classes.modalSignupCard}>
							<DialogTitle
								id="signup-modal-slide-title"
								disableTypography
								className={classes.modalHeader}
							>
								<div>
									<GridItem xs={12} sm={10} md={10} className={classes.mlAuto}>
										<Link to="/">
											<i style={{ fontSize: 50, color: '#000000' }} class="material-icons">
												keyboard_return
											</i>{' '}
										</Link>
									</GridItem>
									<h2
										className={`${classes.cardTitle} ${classes.modalTitle}`}
										style={{ textAlign: 'center', color: '#cc4949' }}
									>
										Mon profile
									</h2>
								</div>
							</DialogTitle>

							<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
								<GridContainer justify="center">
									<GridItem
										xs={12}
										sm={5}
										md={3}
										className={classes.mlAuto}
										style={{ paddingTop: 40 }}
									>
										<div>
											<h3
												className={`${classes.cardTitle} ${classes.modalTitle}`}
												style={{ textAlign: 'center', marginBottom: '20px' }}
											>
												Vos informations
											</h3>
										</div>
										<br />
										<TextFieldGroup
											label="Status"
											name="status"
											value={this.state.status}
											onChange={this.onChange}
											disabled
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div> </div>
													</InputAdornment>
												)
											}}
										/>
										<TextFieldGroup
											label="Nom"
											name="name"
											disabled
											value={this.state.name}
											onChange={this.onChange}
											error={errors.profileName}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<Face />
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br />
										<TextFieldGroup
											label="Prenom"
											disabled
											className={classes.margin}
											name="last_name"
											value={this.state.last_name}
											onChange={this.onChange}
											error={errors.profileLast_name}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<Face />
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br />
										<TextFieldGroup
											label="Adresse email"
											type="email"
											disabled
											className={classes.margin}
											name="email"
											value={this.state.email}
											onChange={this.onChange}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<Mail />
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br />
										<TextFieldGroup
											label="Lieu de travail"
											className={classes.margin}
											name="location"
											disabled
											value={this.state.location}
											onChange={this.onChange}
											error={errors.location}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															<i class="material-icons">location_on</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br />
										<TextFieldGroup
											label="Poste occupé"
											className={classes.margin}
											name="fonction"
											disabled
											value={this.state.fonction}
											onChange={this.onChange}
											error={errors.fonction}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<i class="material-icons">work</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br />
										<TextFieldGroup
											label="Structure "
											name="structure"
											disabled
											value={this.state.structure}
											onChange={this.onChange}
											error={errors.structure}
										/>
										<FormHelperText>Votre structure de travail</FormHelperText>
										<br />
										<TextFieldGroup
											label="Etablissement"
											name="company"
											value={this.state.company}
											onChange={this.onChange}
											disabled
										/>
										<br />

										<TextFieldGroup
											label="Newsletter"
											name="newsletter"
											value={this.state.newsletter}
											onChange={this.onChange}
											disabled
										/>
										<div
											className={classes.textCenter}
											style={{ marginTop: 40, justifyContent: 'center' }}
										>
											<Link
												to="/edit-profile"
												className="btn btn-light"
												style={{ color: '#cc4949' }}
											>
												<Button type="submit" round style={{ backgroundColor: '#337467' }}>
													<i className="fas fa-user-circle text-info mr-1" /> Editer mon
													Profil
												</Button>
											</Link>
										</div>
									</GridItem>
									<GridItem
										xs={1}
										sm={1}
										md={1}
										className={classes.mlAuto}
										style={{ paddingTop: 40 }}
									/>
									<GridItem
										xs={12}
										sm={4}
										md={5}
										className={classes.mrAuto}
										style={{ paddingTop: 40 }}
									>
										{dashboardContent}
										{/* {valueMember} */}
									</GridItem>
								</GridContainer>
							</DialogContent>
						</Card>
					</GridContainer>
				</div>
			</div>
		)
	}
}

ProfileData.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	profile: state.profile,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateTopProps, { createProfile, getCurrentProfile })(withRouter(ProfileData))
)
