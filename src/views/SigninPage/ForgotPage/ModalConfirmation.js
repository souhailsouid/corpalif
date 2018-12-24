import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import { Link } from 'react-router-dom'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createAdherent, updateProfileMember } from 'actions/profileActions'
import { withRouter } from 'react-router-dom'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class ConfirmationResetPassword extends React.Component {
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
					open={this.state.largeModal}
					TransitionComponent={Transition}
					keepMounted
					aria-labelledby="large-modal-slide-title"
					aria-describedby="large-modal-slide-description"
				>
					<DialogTitle id="large-modal-slide-title" disableTypography className={classes.modalHeader}>
						<h3 className={classes.modalTitle} style={{ textAlign: 'center' }}>
							Votre mot de passe a été modifié avec succés
						</h3>
						<br />
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={4}>
								<Link to="/">
									<Button type="submit" round color="green">
										Revenir à la page d'accueil
									</Button>
								</Link>
							</GridItem>
						</GridContainer>

						<br />
					</DialogTitle>
				</Dialog>
			</div>
		)
	}
}

ConfirmationResetPassword.propTypes = {
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
	connect(mapStateToProps, { createAdherent, updateProfileMember })(withRouter(ConfirmationResetPassword))
)
