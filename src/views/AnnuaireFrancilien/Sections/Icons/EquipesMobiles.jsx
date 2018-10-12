import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Group from '@material-ui/icons/Group'
// core components
import InfoArea from 'components/InfoArea/InfoStructureArea.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'
// section CSS

function Teams({ ...props }) {
	const { classes } = props

	return (
		<div style={{ color: '#fff', backgroundColor: '#337467' }}>
			<InfoArea vertical className={classes.infoArea5} icon={Group} iconColor="red" />
		</div>
	)
}

export default withStyles(featuresStyle)(Teams)
