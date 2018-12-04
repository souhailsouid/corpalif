// import React from 'react'
// // nodejs library that concatenates classes
// import classNames from 'classnames'
// // @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'
// // core components

// import SectionFooter from 'views/Footer/SectionFooter'
// import GridContainer from 'components/Grid/GridContainer.jsx'
// import GridItem from 'components/Grid/GridItem.jsx'
// import Clearfix from 'components/Clearfix/Clearfix.jsx'

// import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// import ReactDOM from 'react-dom'
// import scriptLoader from 'react-async-script-loader'

// import DialogActions from '@material-ui/core/DialogActions'

// // Redux
// import { adherer } from '../../actions/authActions'
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { compose } from 'redux'

// class PaypalButton extends React.Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			showButton: false
// 		}
// 		window.React = React
// 		window.ReactDOM = ReactDOM
// 	}
// 	componentDidMount() {
// 		const { isScriptLoaded, isScriptLoadSucceed } = this.props

// 		if (isScriptLoaded && isScriptLoadSucceed) {
// 			this.setState({ showButton: true })
// 		}
// 	}
// 	componentWillReceiveProps(nextProps) {
// 		const { isScriptLoaded, isScriptLoadSucceed } = nextProps

// 		const isLoadedButWasntLoadedBefore = !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded

// 		if (isLoadedButWasntLoadedBefore) {
// 			if (isScriptLoadSucceed) {
// 				this.setState({ showButton: true })
// 			}
// 		}
// 	}
// 	render() {
// 		const { classes } = this.props

// 		const { showButton } = this.state

// 		return (
// 			<div>
// 				<div className={classNames(classes.main, classes.mainRaised)}>
// 					<div className={classes.container}>
// 						<GridContainer justify="center">
// 							<GridItem xs={12} sm={10} md={12}>
// 								<br />
// 								<br />
// 								<GridContainer>
// 									<br />
// 									<GridItem xs={12} sm={10} md={12}>
// 										<DialogActions
// 											className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
// 											style={{ paddingBottom: 30 }}
// 										>
// 											{showButton && (
// 												<paypal.Button.react
// 													env={env}
// 													client={client}
// 													commit={commit}
// 													payment={payment}
// 													onAuthorize={onAuthorize}
// 													onCancel={onCancel}
// 													onError={onError}
// 												/>
// 											)}
// 										</DialogActions>
// 									</GridItem>
// 								</GridContainer>

// 								<div />
// 							</GridItem>
// 							<Clearfix />

// 							<SectionFooter />
// 						</GridContainer>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// PaypalButton.propTypes = {
// 	adherer: PropTypes.func.isRequired,
// 	classes: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({})

// export default compose(scriptLoader('https://www.paypalobjects.com/api/checkout.js'), withStyles(profilePageStyle))(
// 	connect(mapStateToProps, { adherer })(withRouter(PaypalButton))
// )
