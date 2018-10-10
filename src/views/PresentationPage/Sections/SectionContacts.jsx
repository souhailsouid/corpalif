import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx'
import maps from 'assets/img/maps.png'

class SectionContacts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { classes, ...rest } = this.props
		return (
			<div className="cd-section" {...rest}>
				{/* Contact us START */}

				<div className={`${classes.contacts} ${classes.section}`} style={{ backgroundImage: `url(${maps})` }}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={5} md={5}>
								<h2 className={classes.title}>Contact</h2>
								<h5 className={classes.description}>Besoin d'informations?</h5>
								<InfoArea
									className={classes.infoArea}
									title="Notre bureau"
									description={
										<span>
											<b>
												108 avenue Emile Zola,
												<br /> 75015 Paris,
												<br /> France
											</b>
										</span>
									}
									icon={PinDrop}
								/>
								<InfoArea
									className={classes.infoArea}
									title="Téléphone"
									description={
										<span>
											<b>
												Sarah LACROIX
												<br /> +40 762 321 762
											</b>
										</span>
									}
									icon={Phone}
								/>
								<InfoArea
									className={classes.infoArea}
									title="Email"
									description={
										<span>
											<b>
												Sarah LACROIX
												<br /> corpalif@gmail.com
											</b>
										</span>
									}
									icon={Email}
								/>
							</GridItem>
							<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
								<Card className={classes.card1}>
									<form>
										<CardHeader
											contact
											style={{ backgroundColor: '#337467' }}
											className={classes.textCenter}
										>
											<h4 className={classes.cardTitle}>Nous contacter</h4>
										</CardHeader>
										<CardBody>
											<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
													<CustomInput
														labelText="Prénom"
														id="first"
														formControlProps={{
															fullWidth: true
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={6} md={6}>
													<CustomInput
														labelText="Nom"
														id="last"
														formControlProps={{
															fullWidth: true
														}}
													/>
												</GridItem>
											</GridContainer>

											<CustomInput
												labelText="Email"
												id="email-address"
												formControlProps={{
													fullWidth: true
												}}
											/>
											<CustomInput
												labelText="Votre message"
												id="message"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													multiline: true,
													rows: 5
												}}
											/>
										</CardBody>
										<CardFooter className={classes.justifyContentBetween}>
											<Grid
												container
												direction="row"
												justify="right"
												alignItems="right"
												style={{ justifyContent: 'flex-end' }}
											>
												<Button
													style={{ backgroundColor: '#337467' }}
													className={classes.pullRight}
												>
													Envoyer Message
												</Button>
											</Grid>
										</CardFooter>
									</form>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
				{/* Contact us END */}
			</div>
		)
	}
}

export default withStyles(contactsStyle)(SectionContacts)
