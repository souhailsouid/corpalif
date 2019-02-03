import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn'
import Edit from '@material-ui/icons/Edit'

// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'

const settings = {
	dots: false,
	infinite: false,
	autoplay: false
}

const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})

const Adherent = ({ adherent, classes }) => (
	<div className={classes.section} id="carousel">
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
					<Card>
						<Carousel {...settings}>
							<div>
								<div className={classes.coloredShadow} />
								<img
									src={`/api/${adherent.picture}`}
									alt="First slide"
									className="slick-image"
									style={{
										width: '100%'
									}}
								/>
								<div className="slick-caption">
									<h4>
										<LocationOn className="slick-icons" />
										{adherent.title}
									</h4>
								</div>
							</div>
						</Carousel>
					</Card>
					<Grid item xs={4} style={{ textAlign: 'right' }}>
						<Link to={`/admin/menu/adherent/update/${adherent._id}`}>{update}</Link>
					</Grid>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(carouselStyle)(Adherent)
