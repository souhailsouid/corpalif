import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Airplay from '@material-ui/icons/Airplay'
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
					<GridItem xs={12} sm={8} md={8}>
						<h2 className={classes.title}>ORGANISER LES PARCOURS</h2>
						<h3 className={classes.title}>
							AMELIORER LA PRISE EN CHARGE DES PATIENTS RELEVANT DE SOINS PALLIATIFS
						</h3>
						<h5 className={classes.description}>
							Dans le cadre du Projet Régional de Santé 2018-2022 qui fixe les orientations régionales en
							matière de santé, la CORPALIF s’associe à l’Agence Régionale de Santé Ile-de-France pour
							promouvoir une logique de parcours pour le patient pris en charge en soins palliatifs.
							<br />
							<br />
							<h3 className={classes.title} style={{ textAlign: 'center' }}>
								Interroger et améliorer les parcours
							</h3>
							Face à des situations complexes qui demandent l’intervention d’un certain nombre d’acteurs
							des champs sanitaire et médico-social, le parcours patient vise aujourd’hui à une adaptation
							du système de santé aux besoins du patient Ce décloisonnement des secteurs au service de la
							prise en charge globale du patient est possible par la coordination efficiente des acteurs
							du système de santé. <br /> <br />
							S’interroger sur le parcours patient pris en charge en soins palliatifs permet de
							questionner les prises en charge existantes et proposer des actions d’amélioration. La mise
							en place opérationnelle du parcours patient en soins palliatifs vise à l’amélioration de la
							qualité de la prise en charge du patient et de ses proches.
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={8} md={8}>
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
