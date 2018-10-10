import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
import Assignment from '@material-ui/icons/Assignment'
import Mail from '@material-ui/icons/Mail'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class SeConnecter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: false
		}
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
				<Button
					round
					onClick={() => this.handleClickOpen('loginModal')}
					style={{
						marginLeft: 20,
						width: 120,
						backgroundColor: '#337467',
						padding: 0,
						paddingBottom: 0,
						margin: 0,
						marginTop: 20
					}}
				>
					<Assignment /> <b>Se connecter</b>
				</Button>
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalLogin
					}}
					open={this.state.loginModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('loginModal')}
					aria-labelledby="login-modal-slide-title"
					aria-describedby="login-modal-slide-description"
				>
					<Card plain className={classes.modalLoginCard}>
						<DialogTitle id="login-modal-slide-title" disableTypography className={classes.modalHeader}>
							<CardHeader
								plain
								style={{ backgroundColor: '#337467', height: 90 }}
								className={`${classes.textCenter} ${classes.cardLoginHeader}`}
							>
								<h4 className={classes.cardTitle} style={{ color: '#eee' }}>
									Connectez-vous
								</h4>
								<Button
									simple
									className={classes.modalCloseButton}
									key="close"
									aria-label="Close"
									onClick={() => this.handleClose('loginModal')}
								>
									{' '}
									<Close className={classes.modalClose} />
								</Button>

								<div className={classes.socialLine} />
							</CardHeader>
						</DialogTitle>
						<DialogContent id="login-modal-slide-description" className={classes.modalBody}>
							<form>
								<CardBody className={classes.cardLoginBody} style={{ height: 150, marginTop: 30 }}>
									<CustomInput
										id="login-modal-email"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<Mail className={classes.icon} />
												</InputAdornment>
											),
											placeholder: 'Email...'
										}}
									/>
									<CustomInput
										id="login-modal-pass"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<Icon className={classes.icon}>lock_outline</Icon>
												</InputAdornment>
											),
											placeholder: 'Mot de passe...'
										}}
									/>
								</CardBody>
							</form>
						</DialogContent>
						<DialogActions
							className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
							style={{ paddingBottom: 30 }}
						>
							<Button style={{ backgroundColor: '#337467', height: 20, width: 10 }} simple size="lg">
								<i class="material-icons">power_settings_new</i>
							</Button>
						</DialogActions>
						<DialogActions className={`${classes.modalFooter} ${classes.justifyContentCenter}`}>
							<p>Mot de passe oublié ?</p>
						</DialogActions>
						<DialogActions
							className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
							style={{ paddingBottom: 10 }}
						>
							<p>Devenir membre</p>
						</DialogActions>
					</Card>
				</Dialog>
			</div>
		)
	}
}

export default withStyles(javascriptStyles)(SeConnecter)
