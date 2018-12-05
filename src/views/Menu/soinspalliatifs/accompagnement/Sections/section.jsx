import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Build from '@material-ui/icons/Build'
import MicNone from '@material-ui/icons/MicNone'
import AccountBalance from '@material-ui/icons/AccountBalance'
import CardTravel from '@material-ui/icons/CardTravel'
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoAreaBis.jsx'
import 'views/Header/Sections/style.css'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

class Section extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={12}>
						<h2 className={classes.title}>ACCOMPAGNER SON PROCHE</h2>
						<h3 className={classes.title}>Etre aidant</h3>
						<h5 className={classes.description}>
							"Personne non professionnelle qui vient en aide à titre principal, pour partie ou
							totalement, à une personne dépendante de son entourage, pour les activitées de la vie
							quotidienne. Cette aide régulière peut être prodiguée de façon permanente ou non et peut
							prendre plusieurs formes, notamment : nursing, soins, accompagnement à l'éducation et à la
							vie sociale, démarches administratives, coordination, vigilence permanente, soutien
							psychologique, communication, activités domestiques, etc" <br /> Charte européenne de
							l'aidant familial, 2007
							<br />
							<br />
							<GridContainer justify="center">
								<GridItem xs={12} sm={4} md={4}>
									<InfoArea title="" description="" icon={Build} iconColor="green" vertical />
								</GridItem>
							</GridContainer>
							<h3 className={classes.title} style={{ textAlign: 'center' }}>
								Les ressources à votre disposition
							</h3>
							Vous accompagnez un proche en soins palliatifs ? Il existe un ensemble de ressources
							permettant de vous informer sur la prise en charge de votre proche, les structures qui
							peuvent vous accompagner et vos droits. Tous les documents sont consultables sur le internet
							de l'association française des aidants.
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={12}>
							<h3 className={classes.title} style={{ textAlign: 'center' }}>
								Axes de travail
							</h3>
							<h5 className={classes.description}>
								Dans le cadre de ce partenariat et avec le soutien et la participation de ses acteurs,
								la CORPALIF vise à impulser sur tous les départements une dynamique de travail
								favorisant les échanges entre les professionnels. Avec ces antennes départementales,
								elle propose un espace de dialogue et de réflexion sur les dispositifs, les difficultés
								rencontrées et les initiatives. Ces espaces invitent les professionnels confrontés à une
								prise en charge palliative à partager leurs difficultés pour proposer de nouvelles
								organisations.
							</h5>
						</GridItem>
						<GridContainer />
					</GridContainer>
					<GridContainer justify="center" style={{ marginTop: 40 }}>
						<GridItem xs={12} sm={8} md={8}>
							<h5
								className={classes.description}
								style={{ justifyContent: 'left', textAlign: 'left' }}
								justify="left"
							>
								<b style={{ color: '#000000', textAlign: 'left', display: 'flex' }}>
									<i class="material-icons">link</i>

									<b style={{ marginLeft: 10 }}> Liens utiles</b>
								</b>
								<br />
								<br />{' '}
								<b style={{ color: '#337467' }}>
									{' '}
									Parcours de santé, de soins, de vie, Ministère des solidarités et de la santé
								</b>
								<br />
								<a
									href="http://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/parcours-des-patients-et-des-usagers/article/parcours-de-sante-de-soins-et-de-vie"
									target="_blank"
									style={{ color: '#999' }}
								>
									<h5 className="link">
										<b>
											{' '}
											http://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/parcours-des-patients-et-des-usagers/article/parcours-de-sante-de-soins-et-de-vie
										</b>
									</h5>
								</a>
								<b style={{ color: '#337467' }}>
									Haute autorité de Santé, Fin de vie et soins palliatifs
								</b>
								<a
									href="https://www.has-sante.fr/portail/jcms/c_2731882/fr/soins-palliatifs"
									target="_blank"
									style={{ color: '#999' }}
								>
									<h5 className="link">
										{' '}
										<b> https://www.has-sante.fr/portail/jcms/c_2731882/fr/soins-palliatifs </b>
									</h5>
								</a>
							</h5>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		)
	}
}

export default withStyles(productStyle)(Section)
