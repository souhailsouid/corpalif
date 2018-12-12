import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// @material-ui/icons
import FormHelperText from '@material-ui/core/FormHelperText'
import Snackbar from '@material-ui/core/Snackbar'
import Face from '@material-ui/icons/Face'
import Mail from '@material-ui/icons/Mail'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
// core components

import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx'
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { completeProfile } from 'actions/profileActions'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class CompleteProcess extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: true,
			simpleSelect: '',
			displaySocialInputs: false,
			structure: '',
			company: '',
			location: '',
			newsletter: '',
			fonction: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
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
			newsletter: this.state.newsletter
			// member: this.state.member
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
									<CustomLinearProgress variant="determinate" color="green" value={60} />
								</GridItem>
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
										<br />
										{/* <h5 style={{ textAlign: 'left' }}>Newsletter</h5> */}
										<div style={{ textAlign: 'center' }}>
											{' '}
											<FormHelperText>S'abonner à la newsletter</FormHelperText>
										</div>
										<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
											<div
												className={
													classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal
												}
											>
												<FormControlLabel
													control={
														<Radio
															checked={this.state.newsletter === 'oui'}
															onChange={this.onChange}
															value="oui"
															name="newsletter"
															aria-label="A"
															icon={
																<FiberManualRecord className={classes.radioUnchecked} />
															}
															checkedIcon={
																<FiberManualRecord className={classes.radioChecked} />
															}
															classes={{
																checked: classes.radio,
																root: classes.radioRoot
															}}
														/>
													}
													classes={{
														label: classes.label
													}}
													label="oui"
												/>

												<FormControlLabel
													control={
														<Radio
															checked={this.state.newsletter === 'non'}
															onChange={this.onChange}
															value="non"
															name="newsletter"
															aria-label="B"
															icon={
																<FiberManualRecord className={classes.radioUnchecked} />
															}
															checkedIcon={
																<FiberManualRecord className={classes.radioChecked} />
															}
															classes={{
																checked: classes.radio,
																root: classes.radioRoot
															}}
														/>
													}
													classes={{
														label: classes.label
													}}
													label="non"
												/>
											</div>
										</div>
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
											<br /> <br />
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

CompleteProcess.propTypes = {
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
	connect(mapStateToProps, { completeProfile })(withRouter(CompleteProcess))
)
