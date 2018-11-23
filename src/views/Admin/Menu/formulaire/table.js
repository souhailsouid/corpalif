import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

import Edit from '@material-ui/icons/Edit'

// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import Icon from '@material-ui/core/Icon'

const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})

const FileUpload = ({ file, classes }) => (
	<div className={classes.section} id="carousel">
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
					<Card plain blog className={classes.card}>
						<GridContainer>
							<GridItem xs={12} sm={8} md={12}>
								<Button
									href={`http://localhost:5000/api/${file.file}`}
									style={{ backgroundColor: '#cc4949', padding: 12 }}
									target="_blank"
									className={classes.navButton}
									round
								>
									<Icon className={classes.dropdownIcons}>content_paste</Icon> Formulaire <br />d'admission
								</Button>

								<Grid item xs={4} style={{ textAlign: 'right' }}>
									<Link to={`/admin/menu/formulaire/update/${file._id}`}>{update}</Link>
								</Grid>
							</GridItem>
						</GridContainer>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(carouselStyle)(FileUpload)
