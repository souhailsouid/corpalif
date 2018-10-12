import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Home from '@material-ui/icons/Home'
// core components
import InfoArea from 'components/InfoArea/InfoStructureArea.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'
// section CSS

function Structures({ ...props }) {
	const { classes } = props

	return (
		<div style={{ color: '#fff', backgroundColor: '#337467' }}>
			<InfoArea vertical className={classes.infoArea5} icon={Home} iconColor="red" />
		</div>
	)
}

export default withStyles(featuresStyle)(Structures)
