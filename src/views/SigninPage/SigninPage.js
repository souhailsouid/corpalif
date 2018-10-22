import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import InputAdornment from '@material-ui/core/InputAdornment'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

// @material-ui/icons
import Close from '@material-ui/icons/Close'
import Assignment from '@material-ui/icons/Assignment'
import Mail from '@material-ui/icons/Mail'
import Face from '@material-ui/icons/Face'

// core components
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

class SeConnecter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: false,
			email: '',
			password: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}

		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}
	componentDidMount() {
		if (this.props.auth.isAuthenticated) this.props.history.push('/')
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
				<Button
					round
					onClick={() => this.handleClickOpen('loginModal')}
					style={{
						marginLeft: 20,
						width: 120,
						backgroundColor: '#337467',
						padding: 0,
						paddingBottom: 0,
						margin: 0,
						marginTop: 20
					}}
				>
					<Assignment /> <b>Se connecter</b>
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
									<MuiThemeProvider theme={theme}>
										<TextField
											style={{ width: 250 }}
											placeholder="Email..."
											className={classes.margin}
											id="mui-theme-provider-input"
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
											style={{ width: 250 }}
											placeholder="Votre mot de passe ..."
											className={classes.margin}
											id="mui-theme-provider-input"
											name="password"
											value={this.state.password}
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
										{errors.password && (
											<div className="invalid-feedback" style={{ color: 'red' }}>
												{errors.password}{' '}
											</div>
										)}
									</MuiThemeProvider>
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
						<DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`}>
							<p>Mot de passe oublié ?</p>
						</DialogActions>
						<DialogActions
							className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
							style={{ paddingBottom: 10 }}
						>
							<p>Devenir membre</p>
						</DialogActions>
					</Card>
				</Dialog>
			</div>
		)
	}
}

SeConnecter.PropTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(connect(mapStateToProps, { loginUser })(withRouter(SeConnecter)))
