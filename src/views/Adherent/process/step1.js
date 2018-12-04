import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'

// @material-ui/icons

import Timeline from '@material-ui/icons/Timeline'
import Face from '@material-ui/icons/Face'
import Mail from '@material-ui/icons/Mail'
// core components
import SectionFooter from 'views/Footer/SectionFooter'
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import HeaderComponent from 'views/Header/AppBar.jsx'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerPayment } from 'actions/authActions'
import { withRouter } from 'react-router-dom'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Step1 extends React.Component {
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
		const { isAuthenticated, user } = this.props.auth
		const { classes } = this.props
		const authLinks = <p>Vous pouvez aller à l'étape 2</p>
		const guestLinks = (
			<div>
				<Card plain className={classes.modalSignupCard}>
					<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
						<GridContainer>
							<GridItem xs={12} sm={5} md={5} className={classes.mlAuto} style={{ paddingTop: 40 }}>
								<InfoArea
									className={classes.infoArea}
									title="Pourquoi s'inscrire ?"
									description={
										<div style={{ paddingTop: 20 }}>
											<p>
												<b>
													Pouvoir payer en ligne <br />
												</b>
												<br />
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
									<div
										className={classes.textCenter}
										style={{ marginTop: 40, justifyContent: 'center' }}
									>
										<Button type="submit" round style={{ backgroundColor: '#337467' }}>
											<b> Etape 2</b>
											<i class="material-icons" style={{ fontSize: 30 }}>
												navigate_next
											</i>
										</Button>
									</div>
								</form>
							</GridItem>
						</GridContainer>
					</DialogContent>
				</Card>
			</div>
		)
		return (
			<div>
				<div>
					<HeaderComponent />
					<Card onClick={() => this.handleClickOpen('signupModal')} className={classes.modalSignupCard}>
						{isAuthenticated ? authLinks : guestLinks}
					</Card>
					<SectionFooter />
				</div>
			</div>
		)
	}
}

Step1.propTypes = {
	registerPayment: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(connect(mapStateToProps, { registerPayment })(withRouter(Step1)))
