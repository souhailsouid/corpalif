import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import GroupWork from '@material-ui/icons/GroupWork'
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver'
import Healing from '@material-ui/icons/Healing'
import PeopleOutline from '@material-ui/icons/PeopleOutline'
import Dehaze from '@material-ui/icons/Dehaze'
import Room from '@material-ui/icons/Room'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoAreaBis.jsx'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

class Section extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={8} md={8}>
						<h1 className={classes.title}>LES SOINS PALLIATIFS</h1>
						<h4 className={classes.description}>
							"Les soins palliatifs sont des soins actifs et continues pratiqués par une équipe
							interdisciplinaire en institution ou à domicile. Ils visent à soulager la douleur, à apaiser
							la souffrance psychique, à sauvegarder la dignité de la personne malade et à soutenir son
							entourage" <br /> <i>Art L1110-10 - Code de la Santé Publique</i>
						</h4>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Pour qui ?"
								description="Pour toute personne atteine d'une maladie grave, évolutive et incurable, quel que soit l'âge"
								icon={PeopleOutline}
								iconColor="green"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Quand ?"
								description="Des le diagnostic de la maladie grave, en complément des soins curatifs"
								icon={Dehaze}
								iconColor="green"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Où ?"
								description="Tout personne doit avoir accès à des soins palliatifs, quel que soit le lieu de prise en charge (établissement sanitaire, médico-sociale ou au domicile)"
								icon={Room}
								iconColor="green"
								vertical
							/>
						</GridItem>
					</GridContainer>
					<h3 className={classes.title} style={{ textAlign: 'center' }}>
						LA QUALITE DE VIE COMME OBJECTIF
					</h3>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Soins actifs et continus "
								description="Traitement et prise en charge des symptômes et de la souffrance engendrés par la maladie"
								icon={Healing}
								iconColor="green"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Prise en charge globale"
								description="Pour le patient, ses proches et les soignants"
								icon={GroupWork}
								iconColor="green"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Soutien et accompagnement"
								description="Les professionnels et les bénévoles d'accompagnement assurent un soutien auprès des patients et de leurs proches"
								icon={RecordVoiceOver}
								iconColor="green"
								vertical
							/>
						</GridItem>
					</GridContainer>
					{/* <h3 className={classes.title} style={{ textAlign: 'center' }}>
						La démarche palliative
					</h3>
					<div>
						<h5 className={classes.description} style={{ marginBottom: 0 }}>
							La démarche palliative vise à la prise en charge globale du patient et petmet d'aborder les
							questions de fin de vie de manière anticipée, dès le diagnostic d'une maladie grave et
							incurable. Elle s'inscrit dans l'intérêt porté au patient et à ses proches par l'évaluation
							de leurs besoins et de leurs attentes.
						</h5>
					</div> */}
					<br />
					<br />
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
							Le site de la Société Française d'Accompagnement et de Soins Palliatifs
						</b>
						<br />
						<a href="http://www.sfap.org" target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b> http://www.sfap.org</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}>
							Le site du Centre National des Soins Palliatifs et de la Fin de vie
						</b>
						<a href="https://parlons-fin-de-vie.fr" target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								{' '}
								<b> https://parlons-fin-de-vie.fr </b>
							</h5>
						</a>
					</h5>
				</div>
			</div>
		)
	}
}

export default withStyles(productStyle)(Section)
