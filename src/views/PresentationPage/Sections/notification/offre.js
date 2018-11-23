import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'

import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'

const Offre = ({ offre }) => (
	<SnackbarContent
		message={
			<span>
				<b>{offre.when}</b>
				<br />
				<b style={{ textAlign: 'left' }}>{offre.titre}</b> <br />
				{offre.lieu} <br />
				{offre.company}
				<br />
				{offre.poste}
			</span>
		}
		close
		color="green"
	/>
)

export default withStyles(notificationsStyles)(Offre)
