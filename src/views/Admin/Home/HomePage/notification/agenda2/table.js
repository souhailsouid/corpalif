import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

import Edit from '@material-ui/icons/Edit'

// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'

import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})

const Agenda = ({ agenda2, classes }) => (
	<div className={classes.section} id="carousel">
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
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
						close
						color="green"
					/>
					<Grid item xs={4} style={{ textAlign: 'right' }}>
						<Link to={`/admin/menu/agenda2/update/${agenda2._id}`}>{update}</Link>
					</Grid>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(notificationsStyles)(Agenda)