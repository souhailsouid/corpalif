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
import Assignment from '@material-ui/icons/Assignment'
import Mail from '@material-ui/icons/Mail'

// core components
import ConfirmationSendPassword from './modalSendPassword'
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import SignUp from 'views/SignupPage/SignUpPage.js'

import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { forgotpassword } from 'actions/authActions'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class ForgotPassword extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: false,
			email: '',
			complete: false,
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
				errors: nextProps.errors,
				displaySnack: false
			})
		}

		if (!nextProps.errors) {
			this.setState({
				complete: true
			})
		}
	}

	// async onSubmit(e) {
	// 	let response = await fetch('/api/users/forgot_password', {
	// 		method: 'POST'
	// 	})
	// 	if (response.ok) this.setState({ email: this.state.email })
	// }
	onSubmit(e, isEmpty) {
		e.preventDefault()

		const userData = {
			email: this.state.email
		}

		this.props.forgotpassword(userData, this.props.history)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleCloseAlert = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
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
		if (errors.message === 'done') return <ConfirmationSendPassword />
		return (
			<div>
				<div>
					<Button
						round
						onClick={() => this.handleClickOpen('loginModal')}
						style={{
							marginLeft: 50,
							width: 160,
							backgroundColor: '#337467',
							padding: 0,
							paddingBottom: 0,
							margin: 0,
							marginTop: 20
						}}
					>
						<Assignment /> <b>Mot de passe oublié ?</b>
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
										Mot de passe oublié ?
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
											fullWidth
											required
											placeholder="Email..."
											className={classes.margin}
											name="email"
											value={this.state.email}
											onChange={this.onChange}
											error={errors.forgot_password}
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
									</CardBody>
									<DialogActions
										className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
										style={{ paddingBottom: 30 }}
									>
										<Button
											type="submit"
											style={{ backgroundColor: '#337467', height: 20, width: 10, marginTop: 20 }}
											simple
											size="lg"
										>
											Envoyez!
										</Button>
									</DialogActions>
								</form>
							</DialogContent>
							<DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`} />
							<DialogActions
								className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
								style={{ paddingBottom: 10 }}
							>
								<SignUp />
							</DialogActions>
						</Card>
					</Dialog>
				</div>
			</div>
		)
	}
}

ForgotPassword.propTypes = {
	forgotpassword: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { forgotpassword })(withRouter(ForgotPassword))
)
