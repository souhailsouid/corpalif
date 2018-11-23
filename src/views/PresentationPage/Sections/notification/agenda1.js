import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'

import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'

const Agenda1 = ({ agenda1 }) => (
	<SnackbarContent
		message={
			<span>
				<b>{agenda1.when}</b>
				<br />
				<b style={{ textAlign: 'left' }}>{agenda1.theme}</b> <br />
				{agenda1.lieu} <br />
				{agenda1.rue}
				<br />
				{agenda1.city}
			</span>
		}
		close
		color="green"
	/>
)

export default withStyles(notificationsStyles)(Agenda1)
