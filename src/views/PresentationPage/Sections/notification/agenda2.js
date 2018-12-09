import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'

import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'

const Agenda2 = ({ agenda2 }) => (
	<SnackbarContent
		message={
			<span>
				<b>{agenda2.when}</b>
				<br />
				<b style={{ textAlign: 'left' }}>{agenda2.theme}</b> <br />
				{agenda2.lieu} <br />
				{agenda2.rue}
				<br />
				{agenda2.city}
			</span>
		}
		color="green"
	/>
)

export default withStyles(notificationsStyles)(Agenda2)
