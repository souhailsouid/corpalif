import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

import Edit from '@material-ui/icons/Edit'

// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'

const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})

const FileUpload = ({ file, classes }) => (
	<GridContainer>
		<GridItem xs={12} sm={8} md={12}>
			<embed
				src={`/api/${file.file}`}
				download
				type="application/pdf"
				style={{ width: '100%', height: '1000px' }}
			/>
			<Grid item xs={4} style={{ textAlign: 'right' }}>
				<Link to={`/admin/menu/formulaire/update/${file._id}`}>{update}</Link>
			</Grid>
		</GridItem>
	</GridContainer>
)

export default withStyles(carouselStyle)(FileUpload)
