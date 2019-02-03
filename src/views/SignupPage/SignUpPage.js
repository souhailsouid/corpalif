import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'

import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

// @material-ui/icons
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
import Timeline from '@material-ui/icons/Timeline'
import Snackbar from '@material-ui/core/Snackbar'
import Close from '@material-ui/icons/Close'
import Face from '@material-ui/icons/Face'
import Assignment from '@material-ui/icons/Assignment'
import Mail from '@material-ui/icons/Mail'
// core components
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerUser } from '../../actions/authActions'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class SignUp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: false,
			simpleSelect: '',
			name: '',
			email: '',
			company: '',
			password: '',
			password2: '',
			structure: '',
			fonction: '',
			status: '',
			last_name: '',
			location: '',
			errors: {},
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				displaySnack: false,
				errors: nextProps.errors
			})
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit(e) {
		e.preventDefault()
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
			last_name: this.state.last_name,
			status: this.state.status
		}
		// const snack = {
		// 	variant: 'success',
		// 	message: 'Enregistrer avec succés!'
		// }

		// this.setState({ snack, displaySnack: true })
		// setTimeout(
		// 	function() {
		// 		this.setState({ displaySnack: false })
		// 	}.bind(this),
		// 	1500
		// )

		this.props.registerUser(newUser, this.props.history)
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

		const { classes } = this.props
		return (
			<div>
				<div>
					<Button
						round
						onClick={() => this.handleClickOpen('signupModal')}
						style={{
							width: 120,
							backgroundColor: '#fff',
							padding: 0,
							paddingBottom: 0,
							margin: 0,
							marginTop: 20,
							color: '#000000'
						}}
					>
						<Assignment /> Inscription
					</Button>

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
							<DialogTitle
								id="signup-modal-slide-title"
								disableTypography
								className={classes.modalHeader}
							>
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
										Inscription
									</h2>
									{/* <h5
										className={`${classes.cardTitle} ${classes.modalTitle}`}
										style={{ justifyContent: 'center' }}
									>
										{' '}
										Pour acceder à des informations plus détaillées ...
									</h5> */}
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
										<InfoArea
											className={classes.infoArea}
											title="Pourquoi s'inscrire ?"
											description={
												<div style={{ paddingTop: 20 }}>
													<p>
														<b>
															Chaque semaine recevez par mail <br />
															les nouveautés en ligne
														</b>
													</p>
													<p>
														<br />
														<b>
															{' '}
															Retrouvez toutes les informations et <br />
															supports de nos rencontres
														</b>
													</p>
													<br />
													<p>
														<b>
															{' '}
															Vous êtes adhérents ?<br />
															Accédez aux rapports d'activité
														</b>
													</p>
												</div>
											}
											icon={Timeline}
											iconColor="rose"
										/>
									</GridItem>
									<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
										<form
											noValidate
											onSubmit={this.onSubmit}
											className={classes.form}
											style={{ marginTop: 40 }}
										>
											{/* <RadioExample/> */}
											<div style={{ textAlign: 'center' }}>
												{' '}
												<FormHelperText>Chosir votre status</FormHelperText>
											</div>
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
															<Radio
																isRequired
																error={errors.registerStatus}
																checked={this.state.status === 'individuel'}
																onChange={this.onChange}
																value="individuel"
																name="status"
																aria-label="A"
																icon={
																	<FiberManualRecord
																		className={classes.radioUnchecked}
																	/>
																}
																checkedIcon={
																	<FiberManualRecord
																		className={classes.radioChecked}
																	/>
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
														label="Individuel"
													/>

													<FormControlLabel
														control={
															<Radio
																isRequired
																error={errors.registerStatus}
																checked={this.state.status === 'collectif'}
																onChange={this.onChange}
																value="collectif"
																name="status"
																aria-label="B"
																icon={
																	<FiberManualRecord
																		className={classes.radioUnchecked}
																	/>
																}
																checkedIcon={
																	<FiberManualRecord
																		className={classes.radioChecked}
																	/>
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
														label="collectif"
													/>
												</div>
											</div>
											<br />
											<TextFieldGroup
												placeholder="Nom ..."
												className={classes.margin}
												name="name"
												value={this.state.name}
												onChange={this.onChange}
												error={errors.registerName}
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
												placeholder="Prénom ..."
												className={classes.margin}
												name="last_name"
												value={this.state.last_name}
												onChange={this.onChange}
												error={errors.registerLast_name}
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
											{/* <TextFieldGroup
												placeholder="Structure"
												className={classes.margin}
												name="structure"
												value={this.state.structure}
												onChange={this.onChange}
												error={errors.registerStructure}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<div>
																<LocationCity />
															</div>
														</InputAdornment>
													)
												}}
											/>
											<br /> <br />
											<TextFieldGroup
												placeholder="Etablissement"
												name="company"
												value={this.state.company}
												onChange={this.onChange}
												error={errors.registerCompany}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<div>
																<LocationCity />
															</div>
														</InputAdornment>
													)
												}}
											/>
											<br />
											<br />
											<TextFieldGroup
												placeholder="Localisation"
												className={classes.margin}
												name="location"
												value={this.state.location}
												onChange={this.onChange}
												error={errors.registerLocation}
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
										</GridItem>
										<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
											<TextFieldGroup
												placeholder="Fonction"
												className={classes.margin}
												name="fonction"
												value={this.state.fonction}
												onChange={this.onChange}
												error={errors.registerFonction}
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
											<br /> <br /> */}
											<TextFieldGroup
												type="email"
												placeholder="Votre adresse email"
												className={classes.margin}
												name="email"
												value={this.state.email}
												onChange={this.onChange}
												error={errors.email}
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
											<br /> <br />
											<TextFieldGroup
												type="password"
												placeholder="Mot de passe"
												className={classes.margin}
												name="password"
												value={this.state.password}
												onChange={this.onChange}
												error={errors.registerPassword}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<div>
																<Icon className={classes.icon}>lock_outline</Icon>
															</div>
														</InputAdornment>
													)
												}}
											/>
											<br /> <br />
											<TextFieldGroup
												type="password"
												placeholder="Confirmer le mot de passe"
												className={classes.margin}
												name="password2"
												value={this.state.password2}
												onChange={this.onChange}
												error={errors.registerPassword2}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<div>
																<Icon className={classes.icon}>lock_outline</Icon>
															</div>
														</InputAdornment>
													)
												}}
											/>
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

SignUp.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(connect(mapStateToProps, { registerUser })(withRouter(SignUp)))
