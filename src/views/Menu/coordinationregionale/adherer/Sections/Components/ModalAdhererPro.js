import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline'
import Face from '@material-ui/icons/Face'
import Mail from '@material-ui/icons/Mail'
import FormHelperText from '@material-ui/core/FormHelperText'
import Close from '@material-ui/icons/Close'
// core components
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import ComponentLogin from './loginInput'
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx'
import { Link } from 'react-router-dom'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import Spinner from 'views/common/Spinner'
// Redux
import isEmpty from 'validation/is-empty'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerUser } from 'actions/authActions'
import { withRouter } from 'react-router-dom'
import { completeProfile, getCurrentProfile } from 'actions/profileActions'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class AdhererParticulier extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: false,
			simpleSelect: '',
			displaySocialInputs: false,
			structure: '',
			company: '',
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

			// Set component fields state
			this.setState({
				structure: profile.structure,
				company: profile.company,
				fonction: profile.fonction,
				location: profile.location
			})
		}
		if (nextProps.auth.user) {
			const user = nextProps.auth.user
			this.setState({
				name: user.name,
				last_name: user.last_name,
				email: user.email
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const profileData = {
			company: this.state.company,
			location: this.state.location,
			fonction: this.state.fonction,
			structure: this.state.structure
		}
		this.props.completeProfile(profileData, this.props.history)
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
	handleClose(modal) {
		var x = []
		x[modal] = false
		this.setState(x)
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}
	render() {
		const { errors } = this.state
		const { profile, loading } = this.props.profile
		const { classes } = this.props
		const { isAuthenticated, user } = this.props.auth

		const authLinks = (
			<div>
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalSignup
					}}
					open={this.state.signupModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('signupModal')}
					aria-labelledby="signup-modal-slide-title"
					aria-describedby="signup-modal-slide-description"
				>
					<Card plain className={classes.modalSignupCard}>
						<DialogTitle id="signup-modal-slide-title" disableTypography className={classes.modalHeader}>
							<Button
								simple
								className={classes.modalCloseButton}
								key="close"
								aria-label="Close"
								onClick={() => this.handleClose('signupModal')}
							>
								{' '}
								<Close className={classes.modalClose} />
							</Button>
							<div>
								<h2
									className={`${classes.cardTitle} ${classes.modalTitle}`}
									style={{ justifyContent: 'center' }}
								>
									Vos informations
								</h2>
							</div>
							<GridItem
								xs={12}
								sm={7}
								md={7}
								className={classes.mlAuto}
								style={{
									marginRight: 'auto',
									marginLeft: 'auto',
									marginTop: 10
								}}
							>
								<CustomLinearProgress variant="determinate" color="green" value={70} />
							</GridItem>
						</DialogTitle>

						<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5} className={classes.mlAuto} style={{ paddingTop: 40 }}>
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
									<br /> <br />
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
									<br /> <br />
									<TextFieldGroup
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
								</GridItem>
								<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
									<form
										noValidate
										onSubmit={this.onSubmit}
										className={classes.form}
										style={{ marginTop: 40 }}
									>
										<TextFieldGroup
											placeholder="Votre lieu de travail"
											className={classes.margin}
											name="location"
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
										<br /> <br />
										<TextFieldGroup
											placeholder="Votre poste"
											className={classes.margin}
											name="fonction"
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
											placeholder="Votre structure"
											name="structure"
											value={this.state.structure}
											onChange={this.onChange}
											error={errors.structure}
										/>
										<FormHelperText>Votre structure de travail</FormHelperText>
										<br />
										<TextFieldGroup
											placeholder="Company"
											name="company"
											value={this.state.company}
											onChange={this.onChange}
											info="A unique handle for your profile URL. Your full name, company name, nickname"
										/>
									</form>
								</GridItem>
							</GridContainer>
							<br /> <br />
							<GridItem xs={12} sm={12} md={12} className={classes.mrAuto}>
								<form
									noValidate
									onSubmit={this.onSubmit}
									className={classes.form}
									style={{ marginTop: 40 }}
								>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											justifyContent: 'space-evenly'
										}}
									>
										<div className={classes.textCenter} style={{ justifyContent: 'center' }}>
											<Button type="submit" round style={{ backgroundColor: '#337467' }}>
												Suivant
											</Button>
										</div>
									</div>
								</form>
							</GridItem>
						</DialogContent>
					</Card>
				</Dialog>
			</div>
		)
		const guestLinks = (
			<div>
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalSignup
					}}
					open={this.state.signupModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('signupModal')}
					aria-labelledby="signup-modal-slide-title"
					aria-describedby="signup-modal-slide-description"
				>
					<Card plain className={classes.modalSignupCard}>
						<DialogTitle id="signup-modal-slide-title" disableTypography className={classes.modalHeader}>
							<Button
								simple
								className={classes.modalCloseButton}
								key="close"
								aria-label="Close"
								onClick={() => this.handleClose('signupModal')}
							>
								{' '}
								<Close className={classes.modalClose} />
							</Button>
							<div>
								<GridItem
									xs={12}
									sm={7}
									md={7}
									className={classes.mlAuto}
									style={{
										marginRight: 'auto',
										marginLeft: 'auto',
										marginTop: 20
									}}
								>
									<CustomLinearProgress variant="determinate" color="green" value={15} />
								</GridItem>
								<h2
									className={`${classes.cardTitle} ${classes.modalTitle}`}
									style={{ justifyContent: 'center' }}
								>
									Professionnel de santé
								</h2>
							</div>
						</DialogTitle>

						<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5} className={classes.mlAuto} style={{ paddingTop: 40 }}>
									<InfoArea
										className={classes.infoArea}
										title="Vous avez déja un compte ?"
										description={<div style={{ paddingTop: 20 }} />}
										icon={Timeline}
										iconColor="green"
									/>
									<ComponentLogin />
								</GridItem>

								<GridItem xs={12} sm={5} md={5} className={classes.mrAuto} style={{ paddingTop: 40 }}>
									<InfoArea
										className={classes.infoArea}
										title="Creer un compte en 2 minutes!"
										description={<div style={{ paddingTop: 20 }} />}
										icon={Timeline}
										iconColor="green"
									/>

									<div
										className={classes.textCenter}
										style={{ marginTop: 40, justifyContent: 'center' }}
									>
										<Link to="/register">
											<Button type="submit" round style={{ backgroundColor: '#cc4949' }}>
												Poursuivre
											</Button>
										</Link>
									</div>
								</GridItem>
							</GridContainer>
						</DialogContent>
					</Card>
				</Dialog>
			</div>
		)
		const ButtonLinks = (
			<Button round color="green" onClick={() => this.handleClickOpen('signupModal')}>
				{' '}
				<Icon>content_copy</Icon> Payer votre adhésion
			</Button>
		)
		const ButtonLocked = (
			<Button disabled round color="green" onClick={() => this.handleClickOpen('signupModal')}>
				{' '}
				<Icon>content_copy</Icon> Payer votre adhésion
			</Button>
		)
		const ButtonGuest = (
			<Button round color="green" onClick={() => this.handleClickOpen('signupModal')}>
				{' '}
				<Icon>content_copy</Icon> Payer votre adhésion
			</Button>
		)

		let dashboardContent

		if (profile === null || loading) {
			dashboardContent = ''
		} else {
			// Check if logged in user has profile data
			if (user.status === 'collectif') {
				dashboardContent = (
					<Button round color="green" onClick={() => this.handleClickOpen('signupModal')}>
						{' '}
						<Icon>content_copy</Icon> Payer votre adhésion
					</Button>
				)

				// <div style={{ marginBottom: '60px' }} />
				// <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
				// 	Delete My Account
				// </button>

				// </div>
			} else {
				// User is logged in but has no profile
				dashboardContent = (
					<Button disabled round color="green" onClick={() => this.handleClickOpen('signupModal')}>
						{' '}
						<Icon>content_copy</Icon> Payer votre adhésion
					</Button>
				)
			}
		}
		return (
			<div>
				{' '}
				{/* <Button round color="green" onClick={() => this.handleClickOpen('signupModal')}>
					{' '}
					<Icon>content_copy</Icon> Payer votre adhésion
				</Button> */}
				{isAuthenticated ? dashboardContent : ButtonGuest}
				{isAuthenticated ? authLinks : guestLinks}
			</div>
		)
	}
}

AdhererParticulier.propTypes = {
	completeProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
	profile: state.profile
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { registerUser, completeProfile, getCurrentProfile })(withRouter(AdhererParticulier))
)
