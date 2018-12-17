import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline'
import Face from '@material-ui/icons/Face'
import Mail from '@material-ui/icons/Mail'
import FormHelperText from '@material-ui/core/FormHelperText'
import Close from '@material-ui/icons/Close'
// core components
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import ComponentLogin from './loginInput'
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx'
import { Link } from 'react-router-dom'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

// Redux
import isEmpty from 'validation/is-empty'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerUser } from 'actions/authActions'
import { withRouter } from 'react-router-dom'
import { completeProfile, getCurrentProfile } from 'actions/profileActions'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class AdhererParticulierButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: false,
			simpleSelect: '',
			displaySocialInputs: false,
			structure: '',
			company: '',
			location: '',
			fonction: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentDidMount() {
		this.props.getCurrentProfile()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}

		if (nextProps.profile.profile) {
			const profile = nextProps.profile.profile

			// If profile field doesnt exist, make empty string
			profile.company = !isEmpty(profile.company) ? profile.company : ''
			profile.structure = !isEmpty(profile.structure) ? profile.structure : ''
			profile.location = !isEmpty(profile.location) ? profile.location : ''
			profile.fonction = !isEmpty(profile.fonction) ? profile.fonction : ''

			// Set component fields state
			this.setState({
				structure: profile.structure,
				company: profile.company,
				fonction: profile.fonction,
				location: profile.location
			})
		}
		if (nextProps.auth.user) {
			const user = nextProps.auth.user
			this.setState({
				name: user.name,
				last_name: user.last_name,
				email: user.email
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const profileData = {
			company: this.state.company,
			location: this.state.location,
			fonction: this.state.fonction,
			structure: this.state.structure
		}
		this.props.completeProfile(profileData, this.props.history)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
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

		const { classes } = this.props
		const { isAuthenticated, user } = this.props.auth

		const authLinks = (
			<div>
				<Button round color="green" onClick={() => this.handleClickOpen('signupModal')}>
					{' '}
					<Icon>content_copy</Icon> Payer votre adhésion
				</Button>
			</div>
		)
		const guestLinks = (
			<div>
				<Button disabled round color="green" onClick={() => this.handleClickOpen('signupModal')}>
					{' '}
					<Icon>content_copy</Icon> Payer votre adhésion
				</Button>
			</div>
		)
		return <div> {isAuthenticated || user.status === 'collectif' ? authLinks : guestLinks}</div>
	}
}

AdhererParticulier.propTypes = {
	completeProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
	profile: state.profile
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { registerUser, completeProfile, getCurrentProfile })(withRouter(AdhererParticulierButton))
)
