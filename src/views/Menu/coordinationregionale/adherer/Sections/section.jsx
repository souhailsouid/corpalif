import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import LeakAdd from '@material-ui/icons/LeakAdd'
import AccountCircle from '@material-ui/icons/AccountCircle'
import GroupWork from '@material-ui/icons/GroupWork'
import TrendingUp from '@material-ui/icons/TrendingUp'
// core components
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import AdhererParticulier from './Components/ModalAdhererParticulier'
import AdhererPro from './Components/ModalAdhererPro'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoAreaBis.jsx'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

const Section = ({ adherentPage, classes }) => (
	<div className={classes.section}>
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={12}>
				<h1 className={classes.title}>{adherentPage.title}</h1>
				<h4 className={classes.description}>{adherentPage.theme}</h4>
			</GridItem>
		</GridContainer>

		<div>
			<h2 className={classes.title} style={{ textAlign: 'center' }}>
				{adherentPage.subtitle}
			</h2>
			<GridContainer justify="center" justifyContent="stretch">
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle}
						description={adherentPage.InfoAreaDescription}
						icon={AccountCircle}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle2}
						description={adherentPage.InfoAreaDescription2}
						icon={GroupWork}
						iconColor="green"
						vertical
					/>
				</GridItem>
			</GridContainer>
		</div>

		<div>
			<h2 className={classes.title} style={{ textAlign: 'center' }}>
				{adherentPage.subtitle2}
			</h2>
			<GridContainer>
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle3}
						description={adherentPage.InfoAreaDescription3}
						icon={TrendingUp}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle4}
						description={adherentPage.InfoAreaDescription4}
						icon={LeakAdd}
						iconColor="green"
						vertical
					/>
				</GridItem>
			</GridContainer>

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
						<Card
							raised
							background
							style={{
								backgroundImage: `url(/api/${adherentPage.imgCardCollectif})`
							}}
						>
							<CardBody background>
								<h6 className={classes.cardCategory}>{adherentPage.cardCategoryCollectifTitle}</h6>
								<a href="#pablito" onClick={(e) => e.preventDefault()}>
									<h3 className={classes.cardTitleWhite}>
										{adherentPage.cardCategoryCollectifSubTitle}
									</h3>
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
						<Card
							raised
							background
							style={{
								backgroundImage: `url(/api/${adherentPage.imgCardIndividuel})`
							}}
						>
							<CardBody background>
								<h6 className={classes.cardCategory}> {adherentPage.cardCategoryIndividuelTitle}</h6>
								<a href="#pablito" onClick={(e) => e.preventDefault()}>
									<h3 className={classes.cardTitleWhite}>
										{' '}
										{adherentPage.cardCategoryIndividuelSubTitle}
									</h3>
								</a>
								<p className={classes.cardDescription}>
									{adherentPage.cardCategoryIndividuelDescription}
								</p>
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
							<a
								href={`/#/menu/coordinationregionale/adherer/formulaire/${adherentPage._id}`}
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
							</a>
							<br />
							<div style={{ textAlign: 'center' }}>
								{adherentPage.adresseName} <br /> {adherentPage.adresseName2} <br /> {adherentPage.lieu}
							</div>
						</h3>
						<br />
					</GridItem>
				</GridContainer>
			</div>
		</div>
	</div>
)

export default withStyles(productStyle)(Section)
