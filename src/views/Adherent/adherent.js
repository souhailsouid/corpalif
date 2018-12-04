// import React from 'react'
// // nodejs library that concatenates classes
// import classNames from 'classnames'
// // @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'
// // core components
// import TextFieldGroup from 'views/common/TextFieldGroup.js'
// import SectionFooter from 'views/Footer/SectionFooter'
// import GridContainer from 'components/Grid/GridContainer.jsx'
// import GridItem from 'components/Grid/GridItem.jsx'
// import Clearfix from 'components/Clearfix/Clearfix.jsx'
// import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
// import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// import ReactDOM from 'react-dom'
// import scriptLoader from 'react-async-script-loader'
// import CardBody from 'components/Card/CardBody.jsx'
// import DialogActions from '@material-ui/core/DialogActions'
// import Button from 'components/CustomButtons/Button.jsx'
// // Redux
// import { adherer } from '../../actions/authActions'
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { compose } from 'redux'

// class PresentationAdherent extends React.Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			showButton: false,
// 			adherer: ''
// 		}
// 		window.React = React
// 		window.ReactDOM = ReactDOM
// 	}

// 	onSubmit(e) {
// 		e.preventDefault()

// 		const userData = {
// 			adherer: this.state.adherer
// 		}

// 		this.props.adherer(userData)
// 	}
// 	onChange(e) {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}
// 	render() {
// 		const { classes } = this.props

// 		return (
// 			<div>
// 				<HeaderSearchBar />
// 				<div className={classNames(classes.main, classes.mainRaised)}>
// 					<div className={classes.container}>
// 						<GridContainer justify="center">
// 							<GridItem xs={12} sm={12} md={6} style={{ marginTop: 100 }}>
// 								<div className={classes.profile}>
// 									<div className={classes.name}>
// 										<h3 className={classes.title} style={{ color: '#cc4949' }}>
// 											{' '}
// 											Mes chère ADHERENTS, PAYEZ !
// 										</h3>
// 									</div>
// 								</div>
// 							</GridItem>
// 						</GridContainer>

// 						<GridItem xs={12} sm={10} md={12}>
// 							<br />
// 							<br />
// 							<GridContainer>
// 								<br />
// 								<GridItem xs={12} sm={10} md={12}>
// 									<h2>Adherez pour 15 euros</h2>
// 									<form onSubmit={this.onSubmit}>
// 										<DialogActions
// 											className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
// 											style={{ paddingBottom: 30 }}
// 										>
// 											<input type="submit" value="adherer" />
// 											<Button
// 												value={this.state.adherer}
// 												round
// 												type="submit"
// 												style={{
// 													backgroundColor: '#0070ba'
// 												}}
// 												size="lg"
// 											>
// 												<b> Adherer</b>
// 											</Button>
// 										</DialogActions>
// 									</form>
// 								</GridItem>
// 							</GridContainer>

// 							<div />
// 						</GridItem>
// 						<Clearfix />
// 					</div>
// 				</div>

// 				<SectionFooter />
// 			</div>
// 		)
// 	}
// }

// PresentationAdherent.propTypes = {
// 	adherer: PropTypes.func.isRequired,
// 	classes: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({})

// export default compose(scriptLoader('https://www.paypalobjects.com/api/checkout.js'), withStyles(profilePageStyle))(
// 	connect(mapStateToProps, { adherer })(withRouter(PresentationAdherent))
// )
// import React from 'react'
// // nodejs library that concatenates classes
// import classNames from 'classnames'
// // @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'
// // core components
// import TextFieldGroup from 'views/common/TextFieldGroup.js'
// import SectionFooter from 'views/Footer/SectionFooter'
// import GridContainer from 'components/Grid/GridContainer.jsx'
// import GridItem from 'components/Grid/GridItem.jsx'
// import Clearfix from 'components/Clearfix/Clearfix.jsx'
// import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
// import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// import ReactDOM from 'react-dom'
// import scriptLoader from 'react-async-script-loader'
// import CardBody from 'components/Card/CardBody.jsx'
// import DialogActions from '@material-ui/core/DialogActions'
// import Button from 'components/CustomButtons/Button.jsx'
// // Redux
// import { adherer } from '../../actions/authActions'
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import PaypalButton from './get'

// const CLIENT = {
// 	sandbox: 'AS0sA4cFUPz6LLyuobu7_mu3DIEhxfqrhckbfCmz0tK3NlgHStufwkhRFi0zGNhZbgLged0THpdgP276',
// 	production: 'EO8sf9w95OkW_dr65BTWaI9_8iXrEL1229QpeaMkP6KeF6EBhs_DIR6M_KH1CzK-_4yGV5ZkM_lnPJSl'
// }
// // const CLIENT = {
// //   sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
// //   production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
// // };
// const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox'

// class PresentationAdherent extends React.Component {
// 	render() {
// 		const { classes } = this.props

// 		const onSuccess = (payment) => console.log('Successful payment!', payment)

// 		const onError = (error) => console.log('Erroneous payment OR failed to load script!', error)

// 		const onCancel = (data) => console.log('Cancelled payment!', data)

// 		return (
// 			<div>
// 				<HeaderSearchBar />
// 				<div className={classNames(classes.main, classes.mainRaised)}>
// 					<div className={classes.container}>
// 						<GridContainer justify="center">
// 							<GridItem xs={12} sm={12} md={6} style={{ marginTop: 100 }}>
// 								<div className={classes.profile}>
// 									<div className={classes.name}>
// 										<h3 className={classes.title} style={{ color: '#cc4949' }}>
// 											{' '}
// 											Mes chère ADHERENTS, PAYEZ !
// 										</h3>
// 									</div>
// 								</div>
// 							</GridItem>
// 						</GridContainer>

// 						<GridItem xs={12} sm={10} md={12}>
// 							<br />
// 							<br />
// 							<GridContainer>
// 								<br />
// 								<GridItem xs={12} sm={10} md={12}>
// 									<PaypalButton
// 										client={CLIENT}
// 										env={ENV}
// 										commit={true}
// 										currency={'EUR'}
// 										total={100}
// 										onSuccess={onSuccess}
// 										onError={onError}
// 										onCancel={onCancel}
// 									/>
// 									<h2>Adherez pour 15 euros</h2>
// 									<form onSubmit={this.onSubmit}>
// 										<DialogActions
// 											className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
// 											style={{ paddingBottom: 30 }}
// 										>
// 											{/* <Button
// 												value={this.state.adherer}
// 												round
// 												type="submit"
// 												style={{
// 													backgroundColor: '#0070ba'
// 												}}
// 												size="lg"
// 											>
// 												<b> Adherer</b>
// 											</Button> */}
// 										</DialogActions>
// 									</form>
// 								</GridItem>
// 							</GridContainer>

// 							<div />
// 						</GridItem>
// 						<Clearfix />
// 					</div>
// 				</div>

// 				<SectionFooter />
// 			</div>
// 		)
// 	}
// }

// PresentationAdherent.propTypes = {
// 	adherer: PropTypes.func.isRequired,
// 	classes: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({})

// export default compose(scriptLoader('https://www.paypalobjects.com/api/checkout.js'), withStyles(profilePageStyle))(
// 	connect(mapStateToProps, { adherer })(withRouter(PresentationAdherent))
// )
import React, { Component } from 'react'

// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Media from 'react-media'

import SectionFooter from 'views/Footer/SectionFooter'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import Grid from '@material-ui/core/Grid'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class PresentationAdherent extends Component {
	render() {
		const { classes } = this.props
		return (
			<StripeProvider apiKey="pk_test_eD4nXDlwmoAtBnXfYBo1taDi">
				<div className="example">
					return (
					<div>
						<HeaderSearchBar />

						<div className={classNames(classes.main, classes.mainRaised)}>
							<div className={classes.container}>
								<GridContainer justify="center">
									<GridItem xs={12} sm={12} md={6} style={{ marginTop: 100 }}>
										<div className={classes.profile}>
											<div className={classes.name}>
												<h3 className={classes.title} style={{ color: '#cc4949' }}>
													{' '}
													Adhérer
												</h3>
											</div>
										</div>
									</GridItem>
								</GridContainer>
								<GridItem xs={12} sm={12} md={12}>
									<br />
									<br />
									<GridContainer>
										<br />
										<GridItem xs={12} sm={12} md={12}>
											<Elements>
												<CheckoutForm />
											</Elements>
										</GridItem>
									</GridContainer>

									<div />
								</GridItem>
								<Clearfix />
							</div>
						</div>
						<SectionFooter />
					</div>
				</div>
			</StripeProvider>
		)
	}
}

export default withStyles(profilePageStyle)(PresentationAdherent)
