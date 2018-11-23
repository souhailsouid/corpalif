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

const Offre = ({ offre, classes }) => (
	<div className={classes.section} id="carousel">
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
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
					<Grid item xs={4} style={{ textAlign: 'right' }}>
						<Link to={`/admin/menu/offre/update/${offre._id}`}>{update}</Link>
					</Grid>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(notificationsStyles)(Offre)
