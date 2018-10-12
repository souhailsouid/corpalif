import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
import Face from '@material-ui/icons/Face'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Email from '@material-ui/icons/Email'
// core components
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Tooltip from '@material-ui/core/Tooltip'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import MenuItem from '@material-ui/core/MenuItem'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class SignUp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			signupModal: false,
			simpleSelect: '',
			value: 'female'
		}
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
		const { classes } = this.props
		return (
			<div>
				<Button
					round
					onClick={() => this.handleClickOpen('signupModal')}
					style={{
						marginLeft: 20,
						width: 120,
						backgroundColor: '#fff',
						color: '#000000',
						paddingBottom: 0,
						padding: 0,
						margin: 0,
						marginTop: 20,
						height: 20
					}}
				>
					<b>Devenir membre</b>
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

							<h5 className={`${classes.cardTitle} ${classes.modalTitle}`} style={{ marginLeft: 30 }}>
								Devenir membre
							</h5>
							<div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
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
						</DialogTitle>
						<DialogContent id="signup-modal-slide-description" className={classes.modalBody}>
							<GridContainer>
								<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										<RadioGroup
											aria-label="gender"
											name="gender2"
											style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}
											className={classes.group}
											value={this.state.value}
											onChange={this.handleChange}
										>
											<FormControlLabel
												style={{ display: 'flex' }}
												value="female"
												control={<Radio color="green" />}
												label="particulier"
												labelPlacement="start"
											/>
											<FormControlLabel
												style={{ display: 'flex' }}
												value="male"
												control={<Radio color="green" />}
												label="professionnel"
												labelPlacement="start"
											/>
										</RadioGroup>
									</div>
									<form className={classes.form} style={{ marginTop: 0 }}>
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
														<Face className={classes.inputAdornmentIcon} />
													</InputAdornment>
												),
												placeholder: 'Votre prenom...'
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
									</form>
								</GridItem>
								<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
									<form className={classes.form} style={{ marginTop: 48 }}>
										<FormControl fullWidth className={classes.selectFormControlBis}>
											<InputLabel htmlFor="simple-select" className={classes.selectLabelBis}>
												Votre structure
											</InputLabel>
											<Select
												MenuProps={{
													className: classes.selectMenu
												}}
												classes={{
													select: classes.select
												}}
												value={this.state.simpleSelect}
												onChange={this.handleSimple}
												inputProps={{
													name: 'simpleSelect',
													id: 'simple-select'
												}}
											>
												<MenuItem
													disabled
													classes={{
														root: classes.selectMenuItem
													}}
												>
													Selectionner votre structure
												</MenuItem>
												<MenuItem
													classes={{
														root: classes.selectMenuItem,
														selected: classes.selectMenuItemSelected
													}}
													value="2"
												>
													Paris
												</MenuItem>
												<MenuItem
													classes={{
														root: classes.selectMenuItem,
														selected: classes.selectMenuItemSelected
													}}
													value="3"
												>
													Bucharest
												</MenuItem>
												<MenuItem
													classes={{
														root: classes.selectMenuItem,
														selected: classes.selectMenuItemSelected
													}}
													value="4"
												>
													Rome
												</MenuItem>
											</Select>
										</FormControl>

										<CustomInput
											formControlProps={{
												fullWidth: true,
												className: classes.customFormControlClasses
											}}
											inputProps={{
												startAdornment: (
													<InputAdornment position="start" className={classes.inputAdornment}>
														<i class="material-icons">work</i>
													</InputAdornment>
												),
												placeholder: 'Fonction...'
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
