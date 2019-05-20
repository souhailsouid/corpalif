import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

// Redux
import isEmpty from 'validation/is-empty'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { registerUser } from 'actions/authActions'
import { withRouter } from 'react-router-dom'
import { completeProfile, getCurrentProfile } from 'actions/profileActions'

class DetectStatus extends React.Component {
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
			newsletter: '',
			checked: [ 24, 3 ],
			selectedEnabled: '',
			status: ''
		}
		this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	handleChangeEnabled(event) {
		this.setState({ [event.target.selectedEnabled]: event.target.value })
	}
	handleToggle(value) {
		const { checked } = this.state
		const currentIndex = checked.indexOf(value)
		const newChecked = [ ...checked ]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			checked: newChecked
		})
	}
	componentDidMount() {
		this.props.getCurrentProfile()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.profile.profile) {
			const profile = nextProps.profile.profile

			// If profile field doesnt exist, make empty string
			profile.company = !isEmpty(profile.company) ? profile.company : ''
			profile.structure = !isEmpty(profile.structure) ? profile.structure : ''
			profile.location = !isEmpty(profile.location) ? profile.location : ''
			profile.fonction = !isEmpty(profile.fonction) ? profile.fonction : ''
			profile.newsletter = !isEmpty(profile.newsletter) ? profile.newsletter : ''
			profile.selectedEnabled = !isEmpty(profile.selectedEnabled) ? profile.selectedEnabled : ''
			// Set component fields state
			this.setState({
				structure: profile.structure,
				company: profile.company,
				fonction: profile.fonction,
				location: profile.location,
				newsletter: profile.newsletter,
				selectedEnabled: profile.selectedEnabled
			})
		}
		if (nextProps.auth.user) {
			const user = nextProps.auth.user
			this.setState({
				name: user.name,
				last_name: user.last_name,
				email: user.email,
				status: user.status
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const profileData = {
			company: this.state.company,
			location: this.state.location,
			fonction: this.state.fonction,
			structure: this.state.structure,
			newsletter: this.state.newsletter,

			selectedEnabled: this.state.selectedEnabled
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
		const { profile, loading } = this.props.profile

		const { isAuthenticated, user } = this.props.auth

		let dashboardContent

		if (profile === null || loading) {
			dashboardContent = ''
		} else {
			// Check if logged in user has profile data
			if (user.status === 'individuel') {
				dashboardContent = window.location.assign('/adherents/adherer/individuel')
			} else {
				// User is logged in but has no profile
				dashboardContent = window.location.assign('/adherents/adherer/collectif')
			}
		}
		const ButtonGuest = window.location.assign('/adherent')

		return <div>{isAuthenticated ? dashboardContent : ButtonGuest}</div>
	}
}

DetectStatus.propTypes = {
	completeProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { registerUser, completeProfile, getCurrentProfile })(withRouter(DetectStatus))
)
