import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
import Assignment from '@material-ui/icons/Assignment'
import Face from '@material-ui/icons/Face'
import Timeline from '@material-ui/icons/Timeline'
import Code from '@material-ui/icons/Code'
import Group from '@material-ui/icons/Group'
import Email from '@material-ui/icons/Email'
import Check from '@material-ui/icons/Check'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import Tooltip from '@material-ui/core/Tooltip'
import tooltipsStyle from 'assets/jss/material-kit-pro-react/tooltipsStyle.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class SignUp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: false
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
					onClick={() => this.handleClickOpen('signupModal')}
					style={{
						marginLeft: 20,
						width: 120,
						backgroundColor: '#212121',
						paddingBottom: 0,
						padding: 0,
						margin: 0,
						marginTop: 20,
						height: 20
					}}
				>
					Devenir membre
				</Button>
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalSignup
					}}
					open={this.state.signupModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('signupModal')}
					aria-labelledby="signup-modal-slide-title"
					aria-describedby="signup-modal-slide-description"
				>
					<Card plain className={classes.modalSignupCard}>
						<DialogTitle id="signup-modal-slide-title" disableTypography className={classes.modalHeader}>
							<Button
								simple
								className={classes.modalCloseButton}
								key="close"
								aria-label="Close"
								onClick={() => this.handleClose('signupModal')}
							>
								{' '}
								<Close className={classes.modalClose} />
							</Button>
							<h5 className={`${classes.cardTitle} ${classes.modalTitle}`}>Devenir membre</h5>
						</DialogTitle>
						<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
									<InfoArea
										className={classes.infoArea}
										title="Être informer"
										description={
											<p>
												We've created the marketing campaign of the website. It was a very
												interesting collaboration.
											</p>
										}
										icon={Timeline}
										iconColor="rose"
									/>
									<InfoArea
										className={classes.infoArea}
										title="Fully Coded in HTML5"
										description={
											<p>
												We've developed the website with HTML5 and CSS3. The client has access
												to the code using GitHub.
											</p>
										}
										icon={Code}
										iconColor="primary"
									/>
									<InfoArea
										className={classes.infoArea}
										title="Être accompagner"
										description={
											<p>
												There is also a Fully Customizable CMS Admin Dashboard for this product.
											</p>
										}
										icon={Group}
										iconColor="dark"
									/>
								</GridItem>
								<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
									<div className={classes.textCenter} style={{ marginTop: 20 }}>
										<Tooltip
											id="tooltip-top"
											title="Consulter notre page Linkedin !"
											placement="top"
											classes={{ tooltip: classes.tooltip }}
										>
											<Button justIcon round color="linkedin">
												<i className="fab fa-linkedin" />
											</Button>
										</Tooltip>
										{` `}
										<Tooltip
											id="tooltip-right"
											title="Consulter notre page Facebook !"
											placement="right"
											classes={{ tooltip: classes.tooltip }}
										>
											<Button justIcon round color="facebook">
												<i className="fab fa-facebook-f" />
											</Button>
										</Tooltip>
										{` `}
									</div>

									<form className={classes.form} style={{ marginTop: 30 }}>
										<CustomInput
											formControlProps={{
												fullWidth: true,
												className: classes.customFormControlClasses
											}}
											inputProps={{
												startAdornment: (
													<InputAdornment position="start" className={classes.inputAdornment}>
														<Face className={classes.inputAdornmentIcon} />
													</InputAdornment>
												),
												placeholder: 'Votre nom...'
											}}
										/>
										<CustomInput
											formControlProps={{
												fullWidth: true,
												className: classes.customFormControlClasses
											}}
											inputProps={{
												startAdornment: (
													<InputAdornment position="start" className={classes.inputAdornment}>
														<Email className={classes.inputAdornmentIcon} />
													</InputAdornment>
												),
												placeholder: 'Email...'
											}}
										/>

										<span style={{ color: 'rgba(0, 0, 0, 0.26)' }}>
											<b>En cliquant sur enregistrer, vous recevez un</b>
											<br />
											<a href="#pablo" style={{ color: '#cc4949' }}>
												mot de passe provisoire
											</a>{' '}
											<b>à l'adresse inscrite ci-dessus.</b>
										</span>

										<div className={classes.textCenter} style={{ marginTop: 40 }}>
											<Button round style={{ backgroundColor: '#337467' }}>
												S'enregistrer
											</Button>
										</div>
									</form>
								</GridItem>
							</GridContainer>
						</DialogContent>
					</Card>
				</Dialog>
			</div>
		)
	}
}

export default withStyles(javascriptStyles)(SignUp)
