import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

import TrendingUp from '@material-ui/icons/TrendingUp'
import Timeline from '@material-ui/icons/Timeline'
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import Forum from '@material-ui/icons/Forum'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoMissionsArea.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'

function SectionMissions({ ...props }) {
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
							<h2 className={classes.title} style={{ marginTop: 0 }}>
								RASSEMBLER ET REPRESENTER{' '}
							</h2>
							<h2 className={classes.title} style={{ color: '#337467' }}>
								Nos missions
							</h2>
						</GridItem>
					</GridContainer>
					<GridContainer
						style={{ paddingTop: 0, paddingBottom: 50, borderBottom: '3px solid', color: '#337467' }}
					>
						<GridItem xs={12} sm={4} md={6} style={{ padding: 0 }}>
							<InfoArea
								icon={Timeline}
								style={{ padding: 0, marginRight: 0 }}
								title={<div>Assurer le lien entre les {<br />}structures de prise en charge</div>}
								iconColor="green"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={6}>
							<InfoArea
								style={{ paddingTop: 0 }}
								icon={TrendingUp}
								title={
									<div>
										Coordonner et participer au développement des soins palliatifs <br /> en
										Île-de-France
									</div>
								}
								iconColor="green"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={6}>
							<InfoArea
								icon={Forum}
								title={
									<div>
										Susciter des échanges et des rencontres avec et entre ces <br />professionnels
									</div>
								}
								iconColor="green"
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={6}>
							<InfoArea
								icon={AlternateEmail}
								title="Promouvoir des actions d'information en soins palliatifs"
								iconColor="green"
							/>
						</GridItem>
					</GridContainer>
				</div>
				{/* Feature 2 END */}
			</div>
		</div>
	)
}

export default withStyles(featuresStyle)(SectionMissions)
