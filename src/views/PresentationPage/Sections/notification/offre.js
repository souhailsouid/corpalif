import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'

import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'

const Offre = ({ notificationoffre }) => (
	<SnackbarContent
		message={
			<span>
				<b>{notificationoffre.when}</b>
				<br />
				<b style={{ textAlign: 'left' }}>{notificationoffre.titre}</b> <br />
				{notificationoffre.lieu} <br />
				{notificationoffre.company}
				<br />
				{notificationoffre.poste}
			</span>
		}
		color="green"
	/>
)

export default withStyles(notificationsStyles)(Offre)
