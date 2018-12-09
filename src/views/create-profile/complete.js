import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'

// @material-ui/icons
import FormHelperText from '@material-ui/core/FormHelperText'
import Snackbar from '@material-ui/core/Snackbar'
import Face from '@material-ui/icons/Face'
import Mail from '@material-ui/icons/Mail'
import Check from '@material-ui/icons/Check'
// core components
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createProfile } from 'actions/profileActions'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class CompleteProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: true,
			simpleSelect: '',
			displaySocialInputs: false,
			structure: '',
			company: '',
			location: '',
			fonction: '',
			member: 'non',
			errors: {},
			newsletter: '',
			checked: [ 24, 3 ],
			selectedEnabled: ''
		}
		this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	handleChangeEnabled(event) {
		this.setState({ [event.target.selectedEnabled]: event.target.value })
	}
	handleToggle(value) {
		const { checked } = this.state
		const currentIndex = checked.indexOf(value)
		const newChecked = [ ...checked ]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			checked: newChecked
		})
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
		if (nextProps.auth.user) {
			const user = nextProps.auth.user

			this.setState({
				name: user.name,
				last_name: user.last_name,
				email: user.email,
				password: user.password
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const profileData = {
			name: this.state.name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			structure: this.state.structure,
			company: this.state.company,
			fonction: this.state.fonction,
			location: this.state.location,
			member: this.state.member,
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
		return (
			<div>
				<div>
					<Dialog
						classes={{
							root: classes.modalRoot,
							paper: classes.modal + ' ' + classes.modalSignup
						}}
						open={this.state.signupModal}
						TransitionComponent={Transition}
						keepMounted
						aria-labelledby="signup-modal-slide-title"
						aria-describedby="signup-modal-slide-description"
					>
						<Card plain className={classes.modalSignupCard}>
							<DialogTitle
								id="signup-modal-slide-title"
								disableTypography
								className={classes.modalHeader}
							>
								<div>
									<h2
										className={`${classes.cardTitle} ${classes.modalTitle}`}
										style={{ justifyContent: 'center' }}
									>
										Completer votre Profile
									</h2>
								</div>
							</DialogTitle>

							<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
								<GridContainer>
									<GridItem
										xs={12}
										sm={5}
										md={5}
										className={classes.mlAuto}
										style={{ paddingTop: 40 }}
									>
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
											<br />
											<TextFieldGroup
												placeholder="Company"
												name="company"
												value={this.state.company}
												onChange={this.onChange}
												info="A unique handle for your profile URL. Your full name, company name, nickname"
											/>
											<br /> <br />
											<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
												<div
													className={
														classes.checkboxAndRadio +
														' ' +
														classes.checkboxAndRadioHorizontal
													}
												>
													<FormControlLabel
														control={
															<Checkbox
																tabIndex={-1}
																onClick={() => this.handleToggle(22)}
																onChange={this.onChange}
																value={
																	this.state.checked.indexOf(22) !== -1 ? (
																		'non'
																	) : (
																		'oui'
																	)
																}
																name="newsletter"
																checked={
																	this.state.checked.indexOf(22) !== -1 ? true : false
																}
																checkedIcon={<Check className={classes.checkedIcon} />}
																icon={<Check className={classes.uncheckedIcon} />}
																classes={{
																	checked: classes.checked,
																	root: classes.checkRoot
																}}
															/>
														}
														classes={{ label: classes.label }}
														label="Cochez la case si vous voulez vous abonner à la newsletter"
													/>
												</div>
											</div>
											<div
												className={classes.textCenter}
												style={{ marginTop: 40, justifyContent: 'center' }}
											>
												<Button type="submit" round style={{ backgroundColor: '#337467' }}>
													S'enregistrer
												</Button>
											</div>
										</form>
									</GridItem>
								</GridContainer>
							</DialogContent>
						</Card>
					</Dialog>
				</div>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right'
					}}
					open={this.state.displaySnack}
				>
					<MySnackbarContentWrapper {...this.state.snack} onClose={this.handleCloseAlert} />
				</Snackbar>
			</div>
		)
	}
}

CompleteProfile.propTypes = {
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,

	profile: state.profile,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { createProfile })(withRouter(CompleteProfile))
)
