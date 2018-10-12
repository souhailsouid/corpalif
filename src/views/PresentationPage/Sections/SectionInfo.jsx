import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import GroupWork from '@material-ui/icons/GroupWork'
import Airplay from '@material-ui/icons/Airplay'
import LocationOn from '@material-ui/icons/LocationOn'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'

function SectionInfo({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.container}>
				{/* Feature 2 START */}
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

export default withStyles(featuresStyle)(SectionInfo)
