import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InputAdornment from '@material-ui/core/InputAdornment'
// core components
import TextFieldGroup from 'views/common/TextFieldGroup.js'
import Button from 'components/CustomButtons/Button.jsx'
import { Link } from 'react-router-dom'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

// Redux
import isEmpty from 'validation/is-empty'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createAdherent } from 'actions/profileActions'
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
					type="submit"
					open={this.state.largeModal}
					TransitionComponent={Transition}
					keepMounted
					aria-labelledby="large-modal-slide-title"
					aria-describedby="large-modal-slide-description"
				>
					<DialogTitle id="large-modal-slide-title" disableTypography className={classes.modalHeader}>
						<h3 className={classes.modalTitle} style={{ textAlign: 'center' }}>
							Confirmation de Paiement
						</h3>
						<br />
						<h4 className={classes.modalTitle} style={{ textAlign: 'center' }}>
							Merci pour votre adhésion annuelle à la corpalif pour l'année <b>2018 </b>
						</h4>
						<h5 className={classes.modalTitle} style={{ textAlign: 'center' }}>
							<b>Un email vous a été adressé ! </b>
						</h5>
						<br />
					</DialogTitle>
					<DialogContent id="large-modal-slide-description" className={classes.modalBody}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={4}>
								<form
									noValidate
									onSubmit={this.onSubmit}
									className={classes.form}
									style={{ marginTop: 40 }}
								>
									<Button
										type="submit"
										round
										color="red"
										onClick={() => this.handleClose('largeModal')}
									>
										Finaliser votre adhésion
									</Button>
								</form>
								{/* </Link> */}
							</GridItem>
						</GridContainer>
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}

ConfirmationPaiement.propTypes = {
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,

	profile: state.profile,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, { createAdherent })(withRouter(ConfirmationPaiement))
)
