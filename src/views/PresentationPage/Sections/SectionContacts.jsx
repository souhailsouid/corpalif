import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import Snackbar from '@material-ui/core/Snackbar'
// core components
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx'
import maps from 'assets/img/maps.png'
import { TextField } from '@material-ui/core'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { receivemail } from '../../../actions/authActions'
import { withRouter } from 'react-router-dom'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})

class SectionContacts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			message: '',
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleCloseAlert = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()

		const send = {
			first_name: this.state.first_name,
			email: this.state.email,
			last_name: this.state.last_name,
			message: this.state.message
		}

		const snack = {
			variant: 'success',
			message:
				'Bonjour et merci pour votre message. Celui-ci sera pris en compte et une réponse vous sera apportée dans les meilleurs délais. A très bientôt.'
		}
		this.setState({ snack, displaySnack: true })
		setTimeout(
			function() {
				this.setState({ displaySnack: false })
			}.bind(this),
			10000
		)
		this.props.receivemail(send)
		this.setState({
			first_name: '',
			last_name: '',
			email: '',
			message: ''
		})
	}

	render() {
		const { classes, ...rest } = this.props

		const { first_name, last_name, message, email } = this.state
		const isEnabled = email.length > 0 && last_name.length > 0 && first_name.length > 0 && message.length > 0

		return (
			<div>
				{' '}
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={this.state.displaySnack}
				>
					<MySnackbarContentWrapper {...this.state.snack} onClose={this.handleCloseAlert} />
				</Snackbar>
				<div className="cd-section" {...rest}>
					{/* Contact us START */}

					<div
						className={`${classes.contacts} ${classes.section}`}
						style={{ backgroundImage: `url(${maps})` }}
					>
						<div className={classes.container}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5}>
									<h2 className={classes.title}>Contact</h2>

									<InfoArea
										className={classes.infoArea}
										title="Notre bureau"
										description={
											<span>
												<b>
													108 avenue Emile Zola,
													<br /> 75015 Paris,
													<br /> France
												</b>
											</span>
										}
										icon={PinDrop}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Téléphone"
										description={
											<span>
												<b>
													Sarah LACROIX
													<br /> 06 74 23 10 64
												</b>
											</span>
										}
										icon={Phone}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Email"
										description={
											<span>
												<b>
													Sarah LACROIX
													<br /> corpalif@gmail.com
												</b>
											</span>
										}
										icon={Email}
									/>
								</GridItem>
								<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
									<Card className={classes.card1}>
										<CardHeader
											contact
											style={{ backgroundColor: '#337467' }}
											className={classes.textCenter}
										>
											<h4 className={classes.cardTitle}>Nous contacter</h4>
										</CardHeader>
										<ValidatorForm
											id="myForm"
											name="contact-form"
											ref="form"
											onSubmit={this.handleSubmit}
											onError={(errors) => console.log(errors)}
										>
											{/* <form onSubmit={this.handleSubmit} className={classes.container}> */}
											<CardBody>
												<GridContainer>
													<GridItem xs={12} sm={6} md={6}>
														<MuiThemeProvider theme={theme}>
															<TextField
																placeholder="Prénom"
																className={classes.textField}
																margin="normal"
																name="first_name"
																value={first_name}
																onChange={this.handleChange}
															/>
														</MuiThemeProvider>
													</GridItem>

													<GridItem xs={12} sm={6} md={6}>
														<MuiThemeProvider theme={theme}>
															<TextField
																placeholder="Nom"
																className={classes.textField}
																margin="normal"
																name="last_name"
																value={last_name}
																onChange={this.handleChange}
															/>
														</MuiThemeProvider>
													</GridItem>
												</GridContainer>

												<MuiThemeProvider theme={theme}>
													<TextValidator
														id="multiline-static"
														placeholder="Votre adresse email"
														name="email"
														fullWidth
														className={classes.textField}
														value={email}
														onChange={this.handleChange}
														data-value-missing="Please enter your email(‘Required’)"
														margin="normal"
														validators={[ 'required', 'isEmail' ]}
														errorMessages={[ 'Please enter a valid email' ]}
													/>
												</MuiThemeProvider>

												<GridContainer>
													<GridItem xs={12} sm={12} md={12}>
														<MuiThemeProvider theme={theme}>
															<TextField
																placeholder="Votre message"
																inputProps={{
																	rows: 8
																}}
																multiline
																fullWidth
																className={classes.textField}
																margin="normal"
																name="message"
																value={message}
																onChange={this.handleChange}
															/>
														</MuiThemeProvider>
													</GridItem>
												</GridContainer>
											</CardBody>
											<CardFooter className={classes.justifyContentBetween}>
												<Grid
													container
													direction="row"
													justify="right"
													alignItems="right"
													style={{ justifyContent: 'flex-end' }}
												>
													<Button
														style={{ backgroundColor: '#337467' }}
														className={classes.pullRight}
														onClick={this.handleSubmit}
														disabled={!isEnabled}
													>
														Envoyer Message
													</Button>
												</Grid>
											</CardFooter>
										</ValidatorForm>
									</Card>
								</GridItem>
							</GridContainer>
						</div>
					</div>
					{/* Contact us END */}
				</div>
			</div>
		)
	}
}
SectionContacts.propTypes = {
	receivemail: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth
})
export default compose(withStyles(contactsStyle))(
	connect(mapStateToProps, { receivemail })(withRouter(SectionContacts))
)
