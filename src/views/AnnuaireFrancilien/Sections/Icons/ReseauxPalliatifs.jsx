import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Share from '@material-ui/icons/Share'
// core components
import InfoArea from 'components/InfoArea/InfoStructureArea.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'
// section CSS

function Reseaux({ ...props }) {
	const { classes } = props

	return (
		<div style={{ color: '#fff', backgroundColor: '#337467' }}>
			<InfoArea vertical className={classes.infoArea5} icon={Share} iconColor="dark" />
		</div>
	)
}

export default withStyles(featuresStyle)(Reseaux)
