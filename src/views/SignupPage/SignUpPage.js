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
import TextField from '@material-ui/core/TextField'
// @material-ui/icons
import Snackbar from '@material-ui/core/Snackbar'
import Close from '@material-ui/icons/Close'
import Face from '@material-ui/icons/Face'
import LocationCity from '@material-ui/icons/LocationCity'
import Mail from '@material-ui/icons/Mail'
// core components
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import Tooltip from '@material-ui/core/Tooltip'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerUser } from '../../actions/authActions'
import { withRouter } from 'react-router-dom'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})

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
			password: '',
			password2: '',
			structure: '',
			fonction: '',
			last_name: '',
			location: '',
			errors: {},
			displaySnack: false
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	handleCloseAlert = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			const snack = {
				variant: 'error',
				message: 'Connexion refusée!'
			}
			this.setState({
				errors: nextProps.errors,
				snack,
				displaySnack: true
			})
			setTimeout(
				function() {
					this.setState({ displaySnack: false })
				}.bind(this),
				2500
			)
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
			last_name: this.state.last_name
		}
		const snack = {
			variant: 'success',
			message: 'Enregistrement avec succés!'
		}

		this.setState({ snack, displaySnack: true, signupModal: false })
		setTimeout(
			function() {
				this.setState({ displaySnack: false })
			}.bind(this),
			3000
		)
		// this.props.history.push('/')

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
				<Button
					round
					onClick={() => this.handleClickOpen('signupModal')}
					style={{
						marginLeft: 20,
						width: 120,
						backgroundColor: '#fff',
						color: '#000000',
						paddingBottom: 0,
						padding: 0,
						margin: 0,
						marginTop: 20,
						height: 20
					}}
				>
					<b>Devenir membre</b>
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

							<h5 className={`${classes.cardTitle} ${classes.modalTitle}`} style={{ marginLeft: 30 }}>
								Devenir membre
							</h5>
							<div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
								<Tooltip
									id="tooltip-top"
									title="Consulter notre page Linkedin !"
									placement="top"
									classes={{ tooltip: classes.tooltip }}
								>
									<Button justIcon round color="linkedin">
										<i className="fab fa-linkedin" />
									</Button>
								</Tooltip>
								{` `}
								<Tooltip
									id="tooltip-right"
									title="Consulter notre page Facebook !"
									placement="right"
									classes={{ tooltip: classes.tooltip }}
								>
									<Button justIcon round color="facebook">
										<i className="fab fa-facebook-f" />
									</Button>
								</Tooltip>
								{` `}
							</div>
						</DialogTitle>

						<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
							<form noValidate onSubmit={this.onSubmit} className={classes.form} style={{ marginTop: 0 }}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
										<MuiThemeProvider theme={theme}>
											<TextField
												style={{ width: 300 }}
												placeholder="Votre nom ..."
												className={classes.margin}
												id="mui-theme-provider-input"
												name="name"
												value={this.state.name}
												onChange={this.onChange}
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
											{errors.name && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.name}{' '}
												</div>
											)}
										</MuiThemeProvider>
										<br /> <br />
										<MuiThemeProvider theme={theme}>
											<TextField
												style={{ width: 300 }}
												placeholder="Votre prénom ..."
												className={classes.margin}
												id="mui-theme-provider-input"
												name="last_name"
												value={this.state.last_name}
												onChange={this.onChange}
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
											{errors.last_name && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.last_name}{' '}
												</div>
											)}
										</MuiThemeProvider>
										<br /> <br />
										<MuiThemeProvider theme={theme}>
											<TextField
												style={{ width: 300 }}
												placeholder="Votre structure de travail"
												className={classes.margin}
												id="mui-theme-provider-input"
												name="structure"
												value={this.state.structure}
												onChange={this.onChange}
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
											{errors.structure && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.structure}{' '}
												</div>
											)}
										</MuiThemeProvider>
										<br /> <br />
										<MuiThemeProvider theme={theme}>
											<TextField
												style={{ width: 300 }}
												placeholder="Votre lieu de travail"
												className={classes.margin}
												id="mui-theme-provider-input"
												name="location"
												value={this.state.location}
												onChange={this.onChange}
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
											{errors.location && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.location}{' '}
												</div>
											)}
										</MuiThemeProvider>
									</GridItem>
									<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
										<MuiThemeProvider theme={theme}>
											<TextField
												style={{ width: 300 }}
												placeholder="Votre poste"
												className={classes.margin}
												id="mui-theme-provider-input"
												name="fonction"
												value={this.state.fonction}
												onChange={this.onChange}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<div>
																<i class="material-icons">work</i>
															</div>
														</InputAdornment>
													)
												}}
											/>
											{errors.fonction && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.fonction}{' '}
												</div>
											)}
										</MuiThemeProvider>
										<br /> <br />
										<MuiThemeProvider theme={theme}>
											<TextField
												style={{ width: 300 }}
												placeholder="Votre adresse email"
												className={classes.margin}
												id="mui-theme-provider-input"
												name="email"
												value={this.state.email}
												onChange={this.onChange}
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<div>
																<Mail />
															</div>
														</InputAdornment>
													)
												}}
											/>
											{errors.email && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.email}{' '}
												</div>
											)}
										</MuiThemeProvider>
										<br /> <br />
										<MuiThemeProvider theme={theme}>
											<TextField
												type="password"
												style={{ width: 300 }}
												placeholder="Votre mot de passe"
												className={classes.margin}
												id="mui-theme-provider-input"
												name="password"
												value={this.state.password}
												onChange={this.onChange}
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
											{errors.password && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.password}{' '}
												</div>
											)}
										</MuiThemeProvider>
										<br /> <br />
										<MuiThemeProvider theme={theme}>
											<TextField
												type="password"
												style={{ width: 300 }}
												placeholder="Confirmer votre mot de passe"
												className={classes.margin}
												name="password2"
												value={this.state.password2}
												onChange={this.onChange}
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
											{errors.password2 && (
												<div className="invalid-feedback" style={{ color: 'red' }}>
													{errors.password2}{' '}
												</div>
											)}
										</MuiThemeProvider>
									</GridItem>
								</GridContainer>
								<div className={classes.textCenter} style={{ marginTop: 40, justifyContent: 'center' }}>
									<Button type="submit" round style={{ backgroundColor: '#337467' }}>
										S'enregistrer
									</Button>
								</div>
							</form>
						</DialogContent>
					</Card>
				</Dialog>
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

SignUp.PropTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(connect(mapStateToProps, { registerUser })(withRouter(SignUp)))
