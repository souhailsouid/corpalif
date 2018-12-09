import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Build from '@material-ui/icons/Build'
import AccountBalance from '@material-ui/icons/AccountBalance'
import CardTravel from '@material-ui/icons/CardTravel'
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent'

// core components

import SectionAdherer from './SectionsAdherer'
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
						<h1 className={classes.title}>ADHERER A LA CORPALIF</h1>
						<h4 className={classes.description}>
							Toute structure, association et professionnel de santé investi dans la prise en charge et
							l’accompagnement en soins palliatifs peut adhérer à l’association et participer aux
							réflexions et groupes de travail.
							<br />
							<br />
							L’adhésion est ouverte aux personnes physiques pour un montant annuel de 15 euros et aux
							personnes morales pour un montant annuel de 50 euros.
						</h4>
					</GridItem>
				</GridContainer>
				<GridContainer justify="center">
					<GridItem xs={12} sm={4} md={4}>
						<InfoArea title="" description="" icon={Build} iconColor="green" vertical />
					</GridItem>
				</GridContainer>
				<div>
					<h2 className={classes.title} style={{ textAlign: 'center' }}>
						POURQUOI ADHERER
					</h2>
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
					<SectionAdherer />
				</div>
			</div>
		)
	}
}

export default withStyles(productStyle)(Section)
