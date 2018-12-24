import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import Close from '@material-ui/icons/Close'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createAdherent, updateProfileMember } from 'actions/profileActions'
import { withRouter } from 'react-router-dom'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class ConfirmationPaiement extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			largeModal: true,
			member: 'OUI'
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(e) {
		e.preventDefault()

		const profileData = {
			member: this.state.member
		}
		this.props.createAdherent(profileData, this.props.history)
		this.props.updateProfileMember(profileData)
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
	render() {
		const { classes } = this.props
		return (
			<div>
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalLarge
					}}
					onClose={() => this.handleClose('largeModal')}
					open={this.state.largeModal}
					TransitionComponent={Transition}
					keepMounted
					aria-labelledby="large-modal-slide-title"
					aria-describedby="large-modal-slide-description"
				>
					<DialogTitle id="large-modal-slide-title" disableTypography className={classes.modalHeader}>
						<h3 className={classes.modalTitle} style={{ textAlign: 'center' }}>
							Réinitialisation de votre mot de passe
						</h3>
						<br />
						<Button
							simple
							className={classes.modalCloseButton}
							key="close"
							aria-label="Close"
							onClick={() => this.handleClose('largeModal')}
						>
							{' '}
							<Close className={classes.modalClose} />
						</Button>
						<h5 className={classes.modalTitle} style={{ textAlign: 'center' }}>
							<b>Un email vous est adressé avec les instructions! </b>
						</h5>
						<br />
					</DialogTitle>
				</Dialog>
			</div>
		)
	}
}

ConfirmationPaiement.propTypes = {
	createAdherent: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { createAdherent, updateProfileMember })(withRouter(ConfirmationPaiement))
)
