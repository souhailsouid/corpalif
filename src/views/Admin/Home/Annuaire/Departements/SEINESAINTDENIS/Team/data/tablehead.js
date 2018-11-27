import React from 'react'

// core components
import Grid from '@material-ui/core/Grid'
import GridContainer from 'components/Grid/GridContainer.jsx'
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

const TablesHead = ({}) => (
	<div>
		<GridContainer>
			<GridItem xs={12} sm={10} md={12} style={{ display: 'flex', justifyContent: 'flex-end', flewWrap: 'wrap' }}>
				<Grid item xs={3}>
					<b>Name</b>
				</Grid>
				<Grid item xs={3} style={{ textAlign: 'center' }}>
					<b> Adresse</b>
				</Grid>
				<Grid item xs={3} style={{ textAlign: 'right' }}>
					<b> Phone</b>
				</Grid>
				<Grid item xs={3} style={{ textAlign: 'right' }}>
					<b> Email</b>
				</Grid>
				<Grid item xs={3} style={{ textAlign: 'right' }}>
					<b> Actions</b>
				</Grid>
			</GridItem>
		</GridContainer>
	</div>
)
export default withStyles(style)(TablesHead)
