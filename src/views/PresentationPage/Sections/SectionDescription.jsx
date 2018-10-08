import React from 'react'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'

// @material-ui icons
import Apps from '@material-ui/icons/Apps'
import ViewDay from '@material-ui/icons/ViewDay'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import ARS from '../../../assets/img/ARS.jpg'
import descriptionStyle from 'assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.jsx'
import Grid from '@material-ui/core/Grid'
import CardEvent from '../../cardEvent'
import SectionHome from '../../SectionHome'
class SectionDescription extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<div className={classes.container}>
					{/* <GridContainer>
						<GridContainer>
							<GridItem
								md={12}
								sm={12}
								style={{
									display: 'inline-flex',
									justifyContent: 'space-evenly',
									flexWrap: 'wrap'
								}}
							>
								<GridItem md={8} sm={8}> */}
					{/* <h1 style={{ textAlign: 'center ', color: '#337467' }} className={classes.title}>
										La Corpalif
									</h1> */}
					{/* <h4 className={classes.description} style={{ textAlign: 'left ' }}>
										<h4
											style={{ textAlign: 'center ', marginTop: 50 }}
											className={classes.description}
										>
											Coordination Régionale des Soins Palliatifs <br />en Île-de-France
										</h4>
										<ul>
											<b>
												{' '}
												<ul
													style={{ textAlign: 'left ', color: '#000000', marginTop: 50 }}
													className={classes.description}
												>
													4 missions au service des Franciliens
													<br />
												</ul>
											</b>
											<li>Assurer le lien entre les structures de prise en charge</li>
											<li>
												Coordonner et participer au développement des soins palliatifs en
												Île-de-France
											</li>
											<li>
												Susciter des échanges et des rencontres avec et entre ces professionnels
											</li>
											<li>Promouvoir des actions d'information en soins palliatifs</li>
										</ul>
									</h4>
								</GridItem>
								<CardEvent />
							</GridItem>
						</GridContainer>
					</GridContainer> */}
					<SectionHome />
					{/* <h3 style={{ textAlign: 'center' }}>
						<b>Nos partenaires </b>
					</h3>
					<Grid
						container
						direction="row"
						justify="center"
						style={{ justifyContent: 'space-around', marginTop: 40, marginBottom: 50 }}
					>
						<GridItem lg={5} md={5} sm={5}>
							<Grid container direction="row" justify="center" alignItems="center">
								<img src="http://image.noelshack.com/fichiers/2018/40/2/1538482746-webp-net-resizeimage.jpg" />
							</Grid>
							<h4 className={classes.description} style={{ color: '#212121' }}>
								<b>Agence Régionale de Soins Palliatifs</b>
							</h4>
							<p className={classes.description} style={{ marginTop: 45 }}>
								L’Agence régionale de santé a pour mission de mettre en place la politique de santé dans
								la région. Elle est compétente sur le champ de la santé dans sa globalité, de la
								prévention aux soins, à l’accompagnement médico-social.
							</p>
						</GridItem>

						<GridItem lg={5} md={5} sm={5}>
							<Grid container direction="row" justify="center" alignItems="center">
								<img src="http://image.noelshack.com/fichiers/2018/40/2/1538484230-webp-net-resizeimage-3.png" />
							</Grid>
							<h4 className={classes.description} style={{ color: '#212121' }}>
								<b>Société Française d'Accompagnement et de Soins Palliatifs</b>
							</h4>
							<p className={classes.description}>
								Sa mission est de représenter, de stimuler et de faciliter l'action des personnes
								morales ou physiques impliquées dans le mouvement des soins palliatifs et de
								l'accompagnement des personnes en fin de vie.
							</p>
						</GridItem>
					</Grid> */}
				</div>
			</div>
		)
	}
}

export default withStyles(descriptionStyle)(SectionDescription)
