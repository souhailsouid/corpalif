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
							<h2 className={classes.title}>Les soins palliatifs </h2>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={GroupWork}
								title="Des soins actifs et continus"
								description={
									<span>
										<p>Pour prise en charge la souffrance et les symptômes liés à la maladie</p>
									</span>
								}
								iconColor="info"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={Airplay}
								title="Objectif de la qualité de vie"
								description={
									<span>
										<p>Répondre aux besoins et attentes des patients et de leurs proches</p>
									</span>
								}
								iconColor="danger"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								icon={LocationOn}
								title="Un droit d'accès pour tous"
								description={
									<span>
										<p>Quel que soit le lieu de prise en charge, en établissement ou à domicile</p>
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
