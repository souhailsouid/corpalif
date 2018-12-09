// import React from 'react'
// import PropTypes from 'prop-types'
// // @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'
// import Slide from '@material-ui/core/Slide'

// // core components
// import SectionFooter from 'views/Footer/SectionFooter'

// import AdhererParticulier from 'views/Menu/coordinationregionale/adherer/Sections/Components/ModalAdhererParticulier'
// import Card from 'components/Card/Card.jsx'
// import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
// import UpdateProfilePage from 'views/create-profile/PaymentProcess/UpdateProfile/UpdateModal.js'
// import HeaderComponent from 'views/Header/AppBar.jsx'
// // Redux
// import { connect } from 'react-redux'
// import { compose } from 'redux'
// import { registerPayment } from 'actions/authActions'
// import { withRouter } from 'react-router-dom'

// function Transition(props) {
// 	return <Slide direction="down" {...props} />
// }

// class Step1 extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			signupModal: true,
// 			simpleSelect: ''
// 		}
// 	}

// 	handleSimple = (event) => {
// 		this.setState({ [event.target.name]: event.target.value })
// 	}
// 	handleClickOpen(modal) {
// 		var x = []
// 		x[modal] = true
// 		this.setState(x)
// 	}
// 	handleClose(modal) {
// 		var x = []
// 		x[modal] = false
// 		this.setState(x)
// 	}

// 	handleChange = (event) => {
// 		this.setState({ value: event.target.value })
// 	}
// 	render() {
// 		const { isAuthenticated } = this.props.auth
// 		const { classes } = this.props
// 		const authLinks = (
// 			<div>
// 				<UpdateProfilePage />
// 			</div>
// 		)
// 		const guestLinks = (
// 			<div>
// 				<AdhererParticulier />
// 			</div>
// 		)
// 		return (
// 			<div>
// 				<div>
// 					<HeaderComponent />
// 					<Card onClick={() => this.handleClickOpen('signupModal')} className={classes.modalSignupCard}>
// 						{isAuthenticated ? authLinks : guestLinks}
// 					</Card>
// 					<SectionFooter />
// 				</div>
// 			</div>
// 		)
// 	}
// }

// Step1.propTypes = {
// 	registerPayment: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
// 	auth: state.auth,
// 	errors: state.errors
// })
// export default compose(withStyles(javascriptStyles))(connect(mapStateToProps, { registerPayment })(withRouter(Step1)))
