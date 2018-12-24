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
// @material-ui/icons

import Timeline from '@material-ui/icons/Timeline'
import Snackbar from '@material-ui/core/Snackbar'
import Face from '@material-ui/icons/Face'
import Assignment from '@material-ui/icons/Assignment'
import Mail from '@material-ui/icons/Mail'
// core components
import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx'
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
// Redux
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerPayment } from 'actions/authActions'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class SignUpOpen extends React.Component {
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
			status1: '',
			status: '',
			errors: {},
			displaySnack: false,
			snack: { variant: 'warning', message: '' },
			selectedEnabled: '',
			member: 'no',
			isAdmin: 'no'
		}
		this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
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
			structure: this.state.structure,
			fonction: this.state.fonction,
			location: this.state.location,
			last_name: this.state.last_name,
			company: this.state.company,
			status: this.state.status,
			status2: this.state.status2,
			member: this.state.member,
			isAdmin: this.state.isAdmin,
			selectedEnabled: this.state.selectedEnabled
		}

		this.props.registerPayment(newUser, this.props.history)
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
	handleChangeEnabled(event) {
		this.setState({ [event.target.selectedEnabled]: event.target.value })
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
							color: '#000000',
							paddingTop: 5,
							marginTop: 10,
							height: 20
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
										Inscription
									</h2>
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
										<CustomLinearProgress variant="determinate" color="green" value={35} />
									</GridItem>
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
										<br />
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
										</form>
									</GridItem>
								</GridContainer>
								<GridContainer
									justify="center"
									style={{
										justifyContent: ('center', 'space-evenly')
									}}
								>
									<GridItem xs={12} sm={12} md={12} className={classes.mlAuto}>
										<form
											noValidate
											onSubmit={this.onSubmit}
											className={classes.form}
											style={{ marginTop: 40 }}
										>
											<div
												style={{
													display: 'flex',
													justifyContent: ('center', 'space-evenly')
												}}
											>
												<div
													className={classes.textCenter}
													style={{ justifyContent: 'center' }}
												>
													<Link to="/menu/coordinationregionale/adherer">
														<Button round style={{ backgroundColor: '#337467' }}>
															Revenir
														</Button>
													</Link>
												</div>
												<br />
												<div
													className={classes.textCenter}
													style={{ justifyContent: 'center' }}
												>
													<Button type="submit" round style={{ backgroundColor: '#337467' }}>
														S'enregistrer
													</Button>
												</div>
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

SignUpOpen.propTypes = {
	registerPayment: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { registerPayment })(withRouter(SignUpOpen))
)
