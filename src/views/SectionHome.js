import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'
import GroupWork from '@material-ui/icons/GroupWork'
import Group from '@material-ui/icons/Group'
import Airplay from '@material-ui/icons/Airplay'
import LocationOn from '@material-ui/icons/LocationOn'
import Extension from '@material-ui/icons/Extension'
import Help from '@material-ui/icons/Help'
import WatchLater from '@material-ui/icons/WatchLater'
import Code from '@material-ui/icons/Code'
import FormatPaint from '@material-ui/icons/FormatPaint'
import Dashboard from '@material-ui/icons/Dashboard'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
import AccessTime from '@material-ui/icons/AccessTime'
import AttachMoney from '@material-ui/icons/AttachMoney'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'

import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'

import iphone from 'assets/img/sections/iphone.png'
import iphone2 from 'assets/img/sections/iphone2.png'
import bg9 from 'assets/img/bg9.jpg'
import CardEvent from './cardEvent'
import Notifications from './snackBars'
import SectionNotifications from './ComponentsPage/Sections/SectionNotifications'
function SectionHome({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.container}>
				{/* Feature 2 START */}

				{/* Feature 3 START */}
				<div className={classes.features3}>
					<GridContainer
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							flexWrap: 'wrap'
						}}
					>
						<GridItem xs={12} sm={6} md={6}>
							<h2 className={classes.title} style={{ textAlign: 'center' }}>
								Notre mission
							</h2>
							<InfoArea
								className={classes.infoArea}
								icon={Extension}
								title="Assurer le lien entre les structures de prise en charge"
								description=""
								iconColor="green"
							/>
							<InfoArea
								className={classes.infoArea}
								icon={WatchLater}
								title="Coordonner et participer au développement des soins palliatifs en Île-de-France"
								description=""
								iconColor="green"
							/>
							<InfoArea
								className={classes.infoArea}
								icon={Group}
								title="Susciter des échanges et des rencontres avec et entre ces professionnels"
								description=""
								iconColor="green"
							/>
							<InfoArea
								className={classes.infoArea}
								icon={Help}
								title="Promouvoir des actions d'information en soins palliatifs"
								description=""
								iconColor="green"
							/>
						</GridItem>

						<GridItem xs={12} sm={6} md={3}>
							<div className={classes.phoneContainer}>
								<SectionNotifications />
								{/* <CardEvent />
								<img src={iphone} alt="..." /> */}
							</div>
						</GridItem>
					</GridContainer>
				</div>
				{/* Feature 3 END */}
				<div className={classes.features2}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={8}
							md={8}
							className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
						>
							<h2 className={classes.title}>Les soins palliatifs en 6 points</h2>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={GroupWork}
								title="Une approche globale (douleurs,symptômes,confort...)"
								description={
									<span>
										<p>
											The moment you use Material Kit, you know you’ve never felt anything like
											it. With a single use, this powerfull UI Kit lets you do more than ever
											before.
										</p>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											En savoir plus...
										</a>
									</span>
								}
								iconColor="info"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={Airplay}
								title="Une prise en charge pour les maladies incurables"
								description={
									<span>
										<p>
											Divide details about your product or agency work into parts. Write a few
											lines about each one. A paragraph describing a feature will be enough.
										</p>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											En savoir plus...
										</a>
									</span>
								}
								iconColor="danger"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={LocationOn}
								title="Un accompagnement pour le patient et ses proches"
								description={
									<span>
										<p>
											Divide details about your product or agency work into parts. Write a few
											lines about each one. A paragraph describing a feature will be enough.
										</p>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											En savoir plus...
										</a>
									</span>
								}
								iconColor="success"
							/>
						</GridItem>
					</GridContainer>

					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={GroupWork}
								title="Des prestations à l'hopital ou à domicile"
								description={
									<span>
										<p>
											The moment you use Material Kit, you know you’ve never felt anything like
											it. With a single use, this powerfull UI Kit lets you do more than ever
											before.
										</p>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											En savoir plus...
										</a>
									</span>
								}
								iconColor="info"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={Airplay}
								title="Des décisions à prendre"
								description={
									<span>
										<p>
											Divide details about your product or agency work into parts. Write a few
											lines about each one. A paragraph describing a feature will be enough.
										</p>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											En savoir plus...
										</a>
									</span>
								}
								iconColor="danger"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={LocationOn}
								title="Des interlocuteurs pluridisciplinaires"
								description={
									<span>
										<p>
											Divide details about your product or agency work into parts. Write a few
											lines about each one. A paragraph describing a feature will be enough.
										</p>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											En savoir plus...
										</a>
									</span>
								}
								iconColor="success"
							/>
						</GridItem>
					</GridContainer>
				</div>
				{/* Feature 2 END */}
			</div>
		</div>
	)
}

export default withStyles(featuresStyle)(SectionHome)
