import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import DialogActions from '@material-ui/core/DialogActions'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Mail from '@material-ui/icons/Mail'
import Icon from '@material-ui/core/Icon'
// core components
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import ForgotPassword from './forgotPassword'
import Button from 'components/CustomButtons/Button.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
// Redux
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { processLogin } from 'actions/authActions'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

class ComponentLogin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: false,
			email: '',
			password: '',
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
				errors: nextProps.errors
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()
		const userData = {
			email: this.state.email,
			password: this.state.password
		}

		this.props.processLogin(userData, this.props.history)
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
				<form onSubmit={this.onSubmit}>
					<CardBody className={classes.cardLoginBody} style={{ height: 150, paddingLeft: 0 }}>
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
						<br /> <br />
						<TextFieldGroup
							type="password"
							placeholder="Votre mot de passe ..."
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
					</CardBody>
					<br />
					<DialogActions
						className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
						style={{ paddingBottom: 30 }}
					>
						<Button
							type="submit"
							round
							style={{ backgroundColor: '#337467', padding: '12px 30px' }}
							simple
							size="lg"
						>
							Se connecter
						</Button>
					</DialogActions>
					<DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`}>
						<ForgotPassword style={{ marginTop: 0 }} />
					</DialogActions>
				</form>
			</div>
		)
	}
}

ComponentLogin.propTypes = {
	processLogin: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { processLogin })(withRouter(ComponentLogin))
)
