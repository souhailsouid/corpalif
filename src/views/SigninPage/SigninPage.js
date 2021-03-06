import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Snackbar from '@material-ui/core/Snackbar'
import Close from '@material-ui/icons/Close'
import Mail from '@material-ui/icons/Mail'
import Icon from '@material-ui/core/Icon'

// core components
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import SignUp from 'views/SignupPage/SignUpPage.js'
import ForgotPassword from 'views/SigninPage/ForgotPage/ResetPassword'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class SeConnecter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: false,
			email: '',
			password: '',
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
				errors: nextProps.errors
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()
		const userData = {
			email: this.state.email,
			password: this.state.password
		}

		this.props.loginUser(userData)
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
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

	render() {
		const { errors } = this.state
		const { classes } = this.props
		return (
			<div>
				<div>
					<Button
						round
						onClick={() => this.handleClickOpen('loginModal')}
						style={{
							width: 120,
							backgroundColor: '#337467',
							padding: 0,
							paddingBottom: 0,
							margin: 0,
							marginTop: 20
						}}
					>
						<b>Se connecter</b>
					</Button>
					<Dialog
						classes={{
							root: classes.modalRoot,
							paper: classes.modal + ' ' + classes.modalLogin
						}}
						open={this.state.loginModal}
						TransitionComponent={Transition}
						keepMounted
						onClose={() => this.handleClose('loginModal')}
						aria-labelledby="login-modal-slide-title"
						aria-describedby="login-modal-slide-description"
					>
						<Card plain className={classes.modalLoginCard}>
							<DialogTitle id="login-modal-slide-title" disableTypography className={classes.modalHeader}>
								<CardHeader
									plain
									style={{ backgroundColor: '#337467', height: 90 }}
									className={`${classes.textCenter} ${classes.cardLoginHeader}`}
								>
									<h4 className={classes.cardTitle} style={{ color: '#eee' }}>
										Connectez-vous
									</h4>
									<Button
										simple
										className={classes.modalCloseButton}
										key="close"
										aria-label="Close"
										onClick={() => this.handleClose('loginModal')}
									>
										{' '}
										<Close className={classes.modalClose} />
									</Button>

									<div className={classes.socialLine} />
								</CardHeader>
							</DialogTitle>
							<DialogContent id="login-modal-slide-description" className={classes.modalBody}>
								<form onSubmit={this.onSubmit}>
									<CardBody className={classes.cardLoginBody} style={{ height: 150, marginTop: 30 }}>
										<TextFieldGroup
											type="email"
											placeholder="Email..."
											className={classes.margin}
											name="email"
											value={this.state.email}
											onChange={this.onChange}
											error={errors.email}
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
										<br /> <br />
										<TextFieldGroup
											type="password"
											placeholder="Votre mot de passe ..."
											className={classes.margin}
											name="password"
											value={this.state.password}
											onChange={this.onChange}
											error={errors.password}
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
									</CardBody>
									<DialogActions
										className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
										style={{ paddingBottom: 30 }}
									>
										<Button
											type="submit"
											style={{
												backgroundColor: '#337467',
												height: 20,

												marginTop: 20,
												marginLeft: 'auto',
												marginRight: 'auto'
											}}
											simple
											size="lg"
										>
											<i
												class="material-icons"
												style={{
													marginLeft: 'auto',
													marginRight: 'auto'
												}}
											>
												power_settings_new
											</i>
										</Button>
									</DialogActions>
								</form>
							</DialogContent>
							<DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`}>
								<ForgotPassword />
							</DialogActions>
							<DialogActions
								className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
								style={{ paddingBottom: 10 }}
							>
								<SignUp />
							</DialogActions>
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
			</div>
		)
	}
}

SeConnecter.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(connect(mapStateToProps, { loginUser })(withRouter(SeConnecter)))
