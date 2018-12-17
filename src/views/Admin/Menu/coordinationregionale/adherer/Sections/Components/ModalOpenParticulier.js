import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Icon from '@material-ui/core/Icon'

// @material-ui/icons

import Timeline from '@material-ui/icons/Timeline'
import Snackbar from '@material-ui/core/Snackbar'
import Close from '@material-ui/icons/Close'

// core components
import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx'
import { Link } from 'react-router-dom'
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import ComponentLogin from './loginInput'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerUser } from 'actions/authActions'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class AdhererParticulier extends React.Component {
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
			structure: this.state.structure,
			fonction: this.state.fonction,
			location: this.state.location,
			last_name: this.state.last_name,
			company: this.state.company
		}

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
									<GridItem
										xs={12}
										sm={7}
										md={7}
										className={classes.mlAuto}
										style={{
											marginRight: 'auto',
											marginLeft: 'auto',
											marginTop: 20
										}}
									>
										<CustomLinearProgress variant="determinate" color="green" value={15} />
									</GridItem>
									<h2
										className={`${classes.cardTitle} ${classes.modalTitle}`}
										style={{ justifyContent: 'center' }}
									>
										Particulier
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
										<InfoArea
											className={classes.infoArea}
											title="Vous avez déja un compte ?"
											description={<div style={{ paddingTop: 20 }} />}
											icon={Timeline}
											iconColor="green"
										/>
										<ComponentLogin />
									</GridItem>

									<GridItem
										xs={12}
										sm={5}
										md={5}
										className={classes.mrAuto}
										style={{ paddingTop: 40 }}
									>
										<InfoArea
											className={classes.infoArea}
											title="Creer un compte en 2 minutes!"
											description={<div style={{ paddingTop: 20 }} />}
											icon={Timeline}
											iconColor="green"
										/>

										<div
											className={classes.textCenter}
											style={{ marginTop: 40, justifyContent: 'center' }}
										>
											<Link to="/register">
												<Button type="submit" round style={{ backgroundColor: '#cc4949' }}>
													Poursuivre
												</Button>
											</Link>
										</div>
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

AdhererParticulier.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { registerUser })(withRouter(AdhererParticulier))
)
