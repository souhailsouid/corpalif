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
import Icon from '@material-ui/core/Icon'

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
import { updatePassword, getUpdatePassword } from 'actions/authActions'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class SeConnecter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: true,
			password: '',
			password2: '',
			errors: {},
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	componentDidMount() {
		this.props.getUpdatePassword(this.props.match.params.token)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	onSubmit(e, error) {
		e.preventDefault()
		const userData = {
			password: this.state.password,
			password2: this.state.password2
		}

		this.props.updatePassword(this.props.match.params.token, userData, this.props.history)
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
					<Dialog
						classes={{
							root: classes.modalRoot,
							paper: classes.modal + ' ' + classes.modalLogin
						}}
						open={this.state.loginModal}
						TransitionComponent={Transition}
						keepMounted
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
										Changer votre mot de passe
									</h4>

									<div className={classes.socialLine} />
								</CardHeader>
							</DialogTitle>
							<DialogContent id="login-modal-slide-description" className={classes.modalBody}>
								<form onSubmit={this.onSubmit}>
									<CardBody className={classes.cardLoginBody} style={{ height: 150, marginTop: 30 }}>
										<TextFieldGroup
											type="password"
											placeholder="password..."
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
										<br /> <br />
										<TextFieldGroup
											type="password"
											placeholder="Confirmer ..."
											className={classes.margin}
											name="password2"
											value={this.state.password2}
											onChange={this.onChange}
											error={errors.password2}
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
											style={{ backgroundColor: '#337467', height: 20, width: 10, marginTop: 20 }}
											simple
											size="lg"
										>
											<i class="material-icons">power_settings_new</i>
										</Button>
									</DialogActions>
								</form>
							</DialogContent>
							<DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`} />
							<DialogActions
								className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
								style={{ paddingBottom: 10 }}
							/>
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
	updatePassword: PropTypes.func.isRequired,
	getUpdatePassword: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { updatePassword, getUpdatePassword })(withRouter(SeConnecter))
)
