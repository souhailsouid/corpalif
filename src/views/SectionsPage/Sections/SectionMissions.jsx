import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Group from '@material-ui/icons/Group'
import Extension from '@material-ui/icons/Extension'
import Help from '@material-ui/icons/Help'
import WatchLater from '@material-ui/icons/WatchLater'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'

function SectionMissions({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.container}>
				<div className={classes.features3}>
					<GridContainer>
						<GridItem xs={12} sm={6} md={11}>
							<h2 className={classes.title}>4 missions au service des Franciliens</h2>
							<InfoArea
								className={classes.infoArea}
								icon={Extension}
								title="Assurer le lien entre les structures de prise en charge"
								description=""
								iconColor="success"
							/>
							<InfoArea
								className={classes.infoArea}
								icon={WatchLater}
								title="Coordonner et participer au développement des soins palliatifs en Île-de-France"
								description=""
								iconColor="success"
							/>
							<InfoArea
								className={classes.infoArea}
								icon={Group}
								title="Susciter des échanges et des rencontres avec et entre ces professionnels"
								description=""
								iconColor="success"
							/>
							<InfoArea
								className={classes.infoArea}
								icon={Help}
								title="Promouvoir des actions d'information en soins palliatifs"
								description=""
								iconColor="success"
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	)
}

export default withStyles(featuresStyle)(SectionMissions)
