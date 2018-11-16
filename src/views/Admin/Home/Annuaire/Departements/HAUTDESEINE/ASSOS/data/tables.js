import React from 'react'

// material-ui icons
import Person from '@material-ui/icons/Person'
import Edit from '@material-ui/icons/Edit'
import Close from '@material-ui/icons/Close'
// core components
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const get = [ { color: 'info', icon: Person } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const deleteButton = [ { color: 'danger', icon: Close } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const Tables = ({ association }) => (
	<div>
		<GridContainer>
			<GridItem
				xs={12}
				sm={10}
				md={12}
				style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30, flewWrap: 'wrap' }}
			>
				<Grid item xs={4}>
					{association.name}
				</Grid>
				<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
					{association.adresse}
				</Grid>
				<Grid item xs={4} style={{ textAlign: 'right' }}>
					{association.phone}
				</Grid>
				<Grid item xs={4} style={{ textAlign: 'right' }}>
					{association.email}
				</Grid>
				<Grid item xs={4} style={{ textAlign: 'right' }}>
					<Link to={`/admin/HAUTDESEINE/association/${association._id}`}>{get}</Link>
					<Link to={`/admin/update/HAUTDESEINE/association/${association._id}`}>{update}</Link>
					<Link to={`/admin/delete/HAUTDESEINE/association/${association._id}`}>{deleteButton}</Link>
				</Grid>
			</GridItem>
		</GridContainer>
	</div>
)
export default withStyles(style)(Tables)