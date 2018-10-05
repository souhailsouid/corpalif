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
import LocationCity from '@material-ui/icons/LocationCity'
import Home from '@material-ui/icons/Home'
import Code from '@material-ui/icons/Code'
import Hotel from '@material-ui/icons/Hotel'
import Share from '@material-ui/icons/Share'
import Group from '@material-ui/icons/Group'
import ThumbUp from '@material-ui/icons/ThumbUp'
import Mood from '@material-ui/icons/Mood'
import Email from '@material-ui/icons/Email'
import Check from '@material-ui/icons/Check'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'

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

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: false
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
					onClick={() => this.handleClickOpen('searchModal')}
					style={{ height: 47, marginTop: 10, marginLeft: 10, backgroundColor: '#fff' }}
					aria-label="Edit"
					className={classes.selectFormControl}
				>
					<Icon style={{ color: '#000000' }}>near_me</Icon>
				</Button>

				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalSignup
					}}
					open={this.state.searchModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('searchModal')}
					aria-labelledby="search-modal-slide-title"
					aria-describedby="search-modal-slide-description"
				>
					<Card plain className={classes.modalSearchCard}>
						<DialogTitle id="search-modal-slide-title" disableTypography className={classes.modalHeader}>
							<Button
								simple
								className={classes.modalCloseButton}
								key="close"
								aria-label="Close"
								onClick={() => this.handleClose('searchModal')}
							>
								{' '}
								<Close className={classes.modalClose} />
							</Button>
								<h3 className={`${classes.cardTitle} ${classes.modalTitle}`} style={{color: '#237467'}} justify="center">
								Seine et Marne 
							</h3>
							{/* <h3 className={`${classes.cardTitle} ${classes.modalTitle}`} style={{color: '#cc4949'}}>
								Les structures de prise en charge et associations 
							</h3> */}
						</DialogTitle>
						<DialogContent id="search-modal-slide-description" className={classes.modalBody}>
							<GridContainer >
								<GridItem xs={12} sm={5} md={5} className={classes.mlAuto} >
								
									<InfoArea
										className={classes.infoArea}
										
										title="Unités de Soins Palliatifs"
										description={
											<div style={{ display: 'flex' }}>
												<span>
													{' '}
													<b>	<h3 style={{ color: '#77be77' }}>2</h3></b>
												</span>

												<Button
															round
													style={{
														backgroundColor: '#237467',
														color: '#fff',
														fontWeight: 'bold',
														margin: 'auto',
														paddingTop: 5,
														paddingBottom: 5,
														paddingLeft: 10,
														paddingRight: 10,
													
														marginLeft:30
														
														
														

													}}
												>
													<Icon style={{ color: '#fff' }}>touch_app</Icon>Consulter
												</Button>
											</div>
										}
										icon={LocationCity}
										iconColor="dark"
									/>
									<InfoArea
										className={classes.infoArea}
										title="Réseaux"
										description={
											<div style={{ display: 'flex' }}>
												<span>
													{' '}
															<b>	<h3 style={{ color: '#77be77' }}>2</h3></b>
												</span>

												<Button
															round
													style={{
														backgroundColor: '#237467',
														color: '#fff',
														fontWeight: 'bold',
														margin: 'auto',
														paddingTop: 5,
														paddingBottom: 5,
														paddingLeft: 10,
														paddingRight: 10,
													
														marginLeft:30
														
														
														

													}}
												>
													<Icon style={{ color: '#fff' }}>touch_app</Icon>Consulter
												</Button>
											</div>
										}
										icon={Share}
										iconColor="dark"
									/>
									<InfoArea
										className={classes.infoArea}
										title="Equipes Mobiles de Soins Palliatifs"
										description={
											<div style={{ display: 'flex' }}>
												<span>
													{' '}
														<b>	<h3 style={{ color: '#77be77' }}>2</h3></b>
												</span>

												<Button
															round
													style={{
														backgroundColor: '#237467',
														color: '#fff',
														fontWeight: 'bold',
														margin: 'auto',
														paddingTop: 5,
														paddingBottom: 5,
														paddingLeft: 10,
														paddingRight: 10,
													
														marginLeft:30
														
														
														

													}}
												>
													<Icon style={{ color: '#fff' }}>touch_app</Icon>Consulter
												</Button>
											</div>
										}
										icon={Group}
										iconColor="dark"
									/>
								
								</GridItem>
								<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
									<InfoArea
										className={classes.infoArea}
										title="Hospitalisation À Domicile"
										description={
											<div style={{ display: 'flex' }}>
												<span>
													{' '}
												<b>	<h3 style={{ color: '#77be77' }}>2</h3></b>
												</span>

												<Button
															round
													style={{
														backgroundColor: '#237467',
														color: '#fff',
														fontWeight: 'bold',
														margin: 'auto',
														paddingTop: 5,
														paddingBottom: 5,
														paddingLeft: 10,
														paddingRight: 10,
													
														marginLeft:30
														
														
														

													}}
												>
													<Icon style={{ color: '#fff' }}>touch_app</Icon>Consulter
												</Button>
											</div>
										}
										icon={Home}
										iconColor="dark"
									/>
									<InfoArea
										className={classes.infoArea}
										title="Associations"
										description={
											<div style={{ display: 'flex' }}>
												<span>
													{' '}
															<b>	<h3 style={{ color: '#77be77' }}>2</h3></b>
												</span>

												<Button
															round
													style={{
														backgroundColor: '#237467',
														color: '#fff',
														fontWeight: 'bold',
														margin: 'auto',
														paddingTop: 5,
														paddingBottom: 5,
														paddingLeft: 10,
														paddingRight: 10,
													
														marginLeft:30
														
														
														

													}}
												>
													<Icon style={{ color: '#fff' }}>touch_app</Icon>Consulter
												</Button>
											</div>
										}
										icon={SupervisedUserCircle}
										iconColor="dark"
									/>
									<InfoArea
										className={classes.infoArea}
										title="Lits Identifiés Soins Palliatifs"
										description={
											<div style={{ display: 'flex' }}>
												<span>
													{' '}
														<b>	<h3 style={{ color: '#77be77' }}>2</h3></b>
												</span>

												<Button
															round
													style={{
														backgroundColor: '#237467',
														color: '#fff',
														fontWeight: 'bold',
														margin: 'auto',
														paddingTop: 5,
														paddingBottom: 5,
														paddingLeft: 10,
														paddingRight: 10,
													
														marginLeft:30
														
														
														

													}}
												>
													<Icon style={{ color: '#fff' }}>touch_app</Icon>Consulter
												</Button>
											</div>
										}
										icon={Hotel}
										iconColor="dark"
									/>
								</GridItem>

								{/* <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
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
								</GridItem> */}
							</GridContainer>
						</DialogContent>
					</Card>
				</Dialog>
			</div>
		)
	}
}

export default withStyles(javascriptStyles)(Search)
