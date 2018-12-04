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

import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

class Section extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={8} md={8}>
						<h1 className={classes.title}>CORPALIF</h1>
						<h4 className={classes.description}>
							La coordination régionale des soins palliatifs en Ile-de-France, association de loi 1901.
							<br />
							Grâce à ses acteurs et avec ses adhérents, la CORPALIF contribue à la visibilité des équipes
							et au lien entre les acteurs de soins palliatifs, au développement du maillage territorial
							ainsi qu’à l’organisation et à la diffusion d’une réflexion régionale concertée sur les
							pratiques.
						</h4>
					</GridItem>
				</GridContainer>
				<div>
					<h3 className={classes.title} style={{ textAlign: 'center' }}>
						Notre organisation
					</h3>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Conseil d'administration"
								description="Composé de 31 membres représentants les structures et les départements"
								icon={AccountBalance}
								iconColor="green"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Bureau"
								description="Composé de 5 membres et assurant la direction de l'association"
								icon={CardTravel}
								iconColor="green"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								title="Chargée de mission"
								description="Assure le fonctionnement de l'association et pilote les projets "
								icon={SettingsInputComponent}
								iconColor="green"
								vertical
							/>
						</GridItem>
					</GridContainer>
					<h3 className={classes.title} style={{ textAlign: 'center' }}>
						Nos missions
					</h3>
					<div>
						<h5 className={classes.description} style={{ marginBottom: 0 }}>
							Notre association a pour objectif de représenter et de fédérer l’ensemble des acteurs des
							soins palliatifs en Ile-de-France : <br />unités de soins palliatifs, équipes mobiles de
							soins palliatifs, lits identifiés de soins palliatifs, hospitalisation à domicile, réseaux,
							bénévoles d’accompagnement.
						</h5>
						<h5 className={classes.description}>
							La CORPALIF se donne pour mission d'assurer le lien entre les structures de soins palliatifs
							et celles partenaires dans le médico-social et le social.
							<br />
							Nous proposons de dynamiser les initiatives régionales d’organisation et de diffusion de la
							démarche palliative auprès des professionnels de santé, institutionnels et libéraux et
							auprès du grand public
						</h5>
					</div>

					{/* <h3 className={classes.title} style={{ textAlign: 'center', marginTop: 50 }}>
						Nos rencontres
					</h3> */}
					<h3
						className={classes.title}
						style={{
							textAlign: 'center',
							marginTop: 60,
							marginLeft: 'auto',
							marginRight: 'auto'
						}}
					>
						Nos rencontres
					</h3>
					<GridContainer>
						<div
							style={{
								display: 'flex',
								marginTop: 'auto',
								padding: 0,
								marginLeft: 'auto',
								marginRight: 'auto'
							}}
						>
							<GridItem xs={12} sm={6} md={12}>
								<InfoArea
									title="Aprés-midi thématiques"
									description="Permettre aux acteurs franciliens d’échanger et de se former sur des problématiques de soins palliatifs."
									icon={MicNone}
									iconColor="red"
									vertical
								/>
							</GridItem>
							<GridItem xs={12} sm={6} md={12}>
								<InfoArea
									title="Journée régionale"
									description="Rassembler les acteurs de soins palliatifs autour d’une thématique et échanger sur les pratiques professionnelles."
									icon={Airplay}
									iconColor="red"
									vertical
								/>
							</GridItem>
						</div>
					</GridContainer>
				</div>
			</div>
		)
	}
}

export default withStyles(productStyle)(Section)
