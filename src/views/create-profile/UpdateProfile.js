// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import classNames from 'classnames'
// // common
// import TextFieldGroup from 'views/common/TextFieldGroup'

// // @material-ui/icons
// import Face from '@material-ui/icons/Face'
// import Icon from '@material-ui/core/Icon'
// import Mail from '@material-ui/icons/Mail'
// // @material-ui/core components
// import Grid from '@material-ui/core/Grid'
// import withStyles from '@material-ui/core/styles/withStyles'
// import FormHelperText from '@material-ui/core/FormHelperText'
// import InputAdornment from '@material-ui/core/InputAdornment'
// // core components
// import Button from 'components/CustomButtons/Button.jsx'
// import SectionFooter from 'views/Footer/SectionFooter.jsx'
// import HeaderComponent from 'views/Header/AppBar.jsx'
// import GridItem from 'components/Grid/GridItem.jsx'
// import GridContainer from 'components/Grid/GridContainer.jsx'
// import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
// // Redux
// import { withRouter } from 'react-router-dom'
// import { createProfile, getCurrentProfile } from '../../actions/profileActions'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import isEmpty from '../../validation/is-empty'

// class EditProfile extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			displaySocialInputs: false,
// 			displayPassword: false,
// 			company: '',
// 			location: '',
// 			fonction: '',
// 			structure: '',
// 			errors: {}
// 		}
// 		this.onChange = this.onChange.bind(this)
// 		this.onSubmit = this.onSubmit.bind(this)
// 	}
// 	componentDidMount() {
// 		this.props.getCurrentProfile()
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		if (nextProps.errors) {
// 			this.setState({ errors: nextProps.errors })
// 		}

// 		if (nextProps.profile.profile) {
// 			const profile = nextProps.profile.profile

// 			// If profile field doesnt exist, make empty string
// 			profile.company = !isEmpty(profile.company) ? profile.company : ''
// 			profile.structure = !isEmpty(profile.structure) ? profile.structure : ''
// 			profile.location = !isEmpty(profile.location) ? profile.location : ''
// 			profile.fonction = !isEmpty(profile.fonction) ? profile.fonction : ''

// 			// Set component fields state
// 			this.setState({
// 				structure: profile.structure,
// 				company: profile.company,
// 				fonction: profile.fonction,
// 				location: profile.location
// 			})
// 		}
// 		if (nextProps.auth.user) {
// 			const user = nextProps.auth.user
// 			this.setState({
// 				name: user.name,
// 				last_name: user.last_name,
// 				email: user.email
// 			})
// 		}
// 	}

// 	onSubmit(e) {
// 		e.preventDefault()

// 		const profileData = {
// 			company: this.state.company,
// 			location: this.state.location,
// 			fonction: this.state.fonction,
// 			structure: this.state.structure
// 		}
// 		this.props.createProfile(profileData, this.props.history)
// 	}

// 	onChange(e) {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}

// 	render() {
// 		const { errors, displayPassword } = this.state
// 		const { classes } = this.props

// 		let passwordInputs
// 		if (displayPassword) {
// 			passwordInputs = (
// 				<div>
// 					<TextFieldGroup
// 						type="password"
// 						placeholder="Votre mot de passe actuel"
// 						name="password"
// 						InputProps={{
// 							startAdornment: (
// 								<InputAdornment position="start">
// 									<div>
// 										<Icon className={classes.icon}>lock_outline</Icon>
// 									</div>
// 								</InputAdornment>
// 							)
// 						}}
// 						value={this.state.linkedin}
// 						onChange={this.onChange}
// 						error={errors.linkedin}
// 					/>

// 					<TextFieldGroup
// 						type="password"
// 						placeholder="Votre nouveau mot de passe "
// 						name="resetpassword"
// 						InputProps={{
// 							startAdornment: (
// 								<InputAdornment position="start">
// 									<div>
// 										<Icon className={classes.icon}>lock_outline</Icon>
// 									</div>
// 								</InputAdornment>
// 							)
// 						}}
// 						value={this.state.linkedin}
// 						onChange={this.onChange}
// 						error={errors.linkedin}
// 					/>
// 					<TextFieldGroup
// 						type="password"
// 						placeholder="Confirmer"
// 						name="resetpassword2"
// 						InputProps={{
// 							startAdornment: (
// 								<InputAdornment position="start">
// 									<div>
// 										<Icon className={classes.icon}>lock_outline</Icon>
// 									</div>
// 								</InputAdornment>
// 							)
// 						}}
// 						value={this.state.linkedin}
// 						onChange={this.onChange}
// 						error={errors.linkedin}
// 					/>
// 				</div>
// 			)
// 		}

// 		return (
// 			<div>
// 				<div>
// 					<div>
// 						<HeaderComponent />
// 						<div className={classNames(classes.main, classes.mainRaised)}>
// 							<GridContainer style={{ justifyContent: 'center' }}>
// 								<GridItem xs={12} sm={12} md={5}>
// 									<div style={{ textAlign: 'center', marginTop: 200, marginBottom: 50 }}>
// 										<h1>Modifier votre profile</h1>
// 									</div>
// 									<form onSubmit={this.onSubmit}>
// 										<TextFieldGroup
// 											disabled
// 											placeholder="Votre nom ..."
// 											name="name"
// 											value={this.state.name}
// 											onChange={this.onChange}
// 											error={errors.profileName}
// 											InputProps={{
// 												startAdornment: (
// 													<InputAdornment position="start">
// 														<div>
// 															{' '}
// 															<Face />
// 														</div>
// 													</InputAdornment>
// 												)
// 											}}
// 										/>
// 										<br /> <br />
// 										<TextFieldGroup
// 											disabled
// 											placeholder="Votre prénom ..."
// 											className={classes.margin}
// 											name="last_name"
// 											value={this.state.last_name}
// 											onChange={this.onChange}
// 											error={errors.profileLast_name}
// 											InputProps={{
// 												startAdornment: (
// 													<InputAdornment position="start">
// 														<div>
// 															{' '}
// 															<Face />
// 														</div>
// 													</InputAdornment>
// 												)
// 											}}
// 										/>
// 										<br /> <br />
// 										<TextFieldGroup
// 											disabled
// 											type="email"
// 											placeholder="Votre adresse email"
// 											className={classes.margin}
// 											name="email"
// 											value={this.state.email}
// 											onChange={this.onChange}
// 											InputProps={{
// 												startAdornment: (
// 													<InputAdornment position="start">
// 														<div>
// 															{' '}
// 															<Mail />
// 														</div>
// 													</InputAdornment>
// 												)
// 											}}
// 										/>
// 										<br /> <br />
// 										<TextFieldGroup
// 											placeholder="Votre lieu de travail"
// 											className={classes.margin}
// 											name="location"
// 											value={this.state.location}
// 											onChange={this.onChange}
// 											error={errors.location}
// 											InputProps={{
// 												startAdornment: (
// 													<InputAdornment position="start">
// 														<div>
// 															<i class="material-icons">location_on</i>
// 														</div>
// 													</InputAdornment>
// 												)
// 											}}
// 										/>
// 										<br /> <br />
// 										<TextFieldGroup
// 											placeholder="Votre poste"
// 											className={classes.margin}
// 											name="fonction"
// 											value={this.state.fonction}
// 											onChange={this.onChange}
// 											error={errors.fonction}
// 											InputProps={{
// 												startAdornment: (
// 													<InputAdornment position="start">
// 														<div>
// 															{' '}
// 															<i class="material-icons">work</i>
// 														</div>
// 													</InputAdornment>
// 												)
// 											}}
// 										/>
// 										<br />
// 										<TextFieldGroup
// 											placeholder="Votre structure"
// 											name="structure"
// 											value={this.state.structure}
// 											onChange={this.onChange}
// 											error={errors.structure}
// 										/>
// 										<FormHelperText>Votre structure de travail</FormHelperText>
// 										<br />
// 										<TextFieldGroup
// 											placeholder="Company"
// 											name="company"
// 											value={this.state.company}
// 											onChange={this.onChange}
// 											error={errors.company}
// 											info="A unique handle for your profile URL. Your full name, company name, nickname"
// 										/>
// 										<br /> <br />
// 										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
// 											<GridItem xs={12} sm={5} md={12} className={classes.mrAuto}>
// 												<Button
// 													color="github"
// 													onClick={() => {
// 														this.setState((prevState) => ({
// 															displayPassword: !prevState.displayPassword
// 														}))
// 													}}
// 												>
// 													<Icon className={classes.icon}>lock_outline</Icon> Modifier votre
// 													mot de passe
// 												</Button>
// 												<span />
// 												{passwordInputs}
// 											</GridItem>
// 										</div>
// 										<Grid container direction="row" justify="center" style={{ marginTop: 40 }}>
// 											<Button type="submit" value="Submit" color="green">
// 												Modifier
// 											</Button>
// 										</Grid>
// 									</form>
// 								</GridItem>
// 							</GridContainer>
// 						</div>
// 					</div>
// 				</div>
// 				<SectionFooter />
// 			</div>
// 		)
// 	}
// }

// EditProfile.propTypes = {
// 	createProfile: PropTypes.func.isRequired,
// 	getCurrentProfile: PropTypes.func.isRequired,
// 	profile: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired,
// 	auth: PropTypes.object.isRequired,
// 	classes: PropTypes.object.isRequired
// }
// const mapStateToProps = (state) => ({
// 	profile: state.profile,
// 	errors: state.errors,
// 	auth: state.auth
// })
// export default compose(withStyles(presentationStyle))(
// 	connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile))
// )
