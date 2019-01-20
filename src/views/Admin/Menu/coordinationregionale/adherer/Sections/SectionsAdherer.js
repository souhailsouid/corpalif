import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import AdhererParticulier from '/Components/ModalAdhererParticulier'
import AdhererPro from './Components/ModalAdhererPro'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import projectsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx'
import { Link } from 'react-router-dom'
const SectionAdherer = ({ adherentPage, classes }) => (
	<div>
		<h2
			className={classes.title}
			style={{
				textAlign: 'center',
				marginTop: 60,
				marginLeft: 'auto',
				marginRight: 'auto'
			}}
		>
			{adherentPage.subtitle3}
		</h2>

		<GridContainer>
			<GridItem xs={12} sm={12} md={6}>
				<Card raised background style={{ backgroundImage: `url(${adherentPage.imgCardCollectif})` }}>
					<CardBody background>
						<h6 className={classes.cardCategory}>{adherentPage.cardCategoryCollectifTitle}</h6>
						<a href="#pablito" onClick={(e) => e.preventDefault()}>
							<h3 className={classes.cardTitleWhite}>{adherentPage.cardCategoryCollectifSubTitle}</h3>
						</a>
						<p className={classes.cardDescription}>
							{adherentPage.cardCategoryCollectifDescription}
							<br />
							<br />
						</p>
						<AdhererPro />
					</CardBody>
				</Card>
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<Card raised background style={{ backgroundImage: `url(${adherentPage.imgCardIndividuel})` }}>
					<CardBody background>
						<h6 className={classes.cardCategory}> {adherentPage.cardCategoryIndividuelTitle}</h6>
						<a href="#pablito" onClick={(e) => e.preventDefault()}>
							<h3 className={classes.cardTitleWhite}> {adherentPage.cardCategoryIndividuelSubTitle}</h3>
						</a>
						<p className={classes.cardDescription}>{adherentPage.cardCategoryIndividuelDescription}</p>
						<AdhererParticulier />
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>

		<GridContainer justify="center" style={{ marginTop: 40, textAlign: 'center' }}>
			<GridItem xs={12} sm={12} md={12}>
				<h3
					className={classes.description}
					style={{ justifyContent: 'center', textAlign: 'center' }}
					justify="left"
				>
					<b style={{ color: '#000000', textAlign: 'center' }}>
						<i class="material-icons">link</i>

						<b style={{ marginLeft: 10, textAlign: 'center' }}> Pour adherer par cheque</b>
						<br />
						<br />
					</b>
					Adresser le formulaire ci-joint à : <br />
					<Link
						to={`/menu/coordinationregionale/adherer/formulaire/${adherentPage._id}`}
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: '#cc4949' }}
					>
						<h5 className="link">
							{' '}
							Formulaire d’adhésion
							<i style={{ marginLeft: 5 }} class="material-icons">
								file_copy
							</i>
						</h5>
					</Link>
					<br />
					<div style={{ textAlign: 'center' }}>
						{adherentPage.adresseName} <br /> {adherentPage.adresseName2} <br /> {adherentPage.lieu}
					</div>
				</h3>
				<br />
			</GridItem>
		</GridContainer>
	</div>
)

export default withStyles(projectsStyle)(SectionAdherer)
