import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import InputAdornment from '@material-ui/core/InputAdornment'
import Snackbar from '@material-ui/core/Snackbar'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
import Mail from '@material-ui/icons/Mail'
// core components
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
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
			signupModal: false,
			email: '',
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
	}

	onSubmit(e) {
		e.preventDefault()
		const userData = {
			email: this.state.email
		}
		const snack = {
			variant: 'success',
			message: 'Un email vous a été adressé!'
		}

		this.setState({ snack, displaySnack: true })
		setTimeout(
			function() {
				this.setState({ displaySnack: false })
			}.bind(this),
			10000
		)

		this.props.forgotpassword(userData)
		this.setState({
			email: '',
			errors: '',
			signupModal: false
		})
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
		return (
			<div>
				<div>
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
							<b>Mot de passe oublié ?</b>
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
							<Card plain className={classes.modalLoginCard}>
								<DialogTitle
									id="login-modal-slide-title"
									disableTypography
									className={classes.modalHeader}
								>
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
											onClick={() => this.handleClose('signupModal')}
										>
											{' '}
											<Close className={classes.modalClose} />
										</Button>

										<div className={classes.socialLine} />
									</CardHeader>
								</DialogTitle>
								<DialogContent id="login-modal-slide-description" className={classes.modalBody}>
									<form onSubmit={this.onSubmit}>
										<CardBody className={classes.cardLoginBody}>
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
													width: 10,
													marginTop: 20
												}}
												simple
												size="lg"
											>
												<i class="material-icons">power_settings_new</i>
											</Button>
										</DialogActions>
									</form>
								</DialogContent>
							</Card>
						</Dialog>
					</div>
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
