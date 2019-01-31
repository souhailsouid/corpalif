import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'

const settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true
}
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

const Caroussel = ({ caroussel, classes }) => (
	<div className={classes.section} id="carousel">
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
					<Card>
						<Carousel {...settings}>
							<div>
								<div className={classes.coloredShadow} />
								<img
									src={`/api/${caroussel.picture}`}
									alt="First slide"
									className="slick-image"
									style={{
										width: '100%',
										height: '400px'
									}}
								/>
								<div className="slick-caption">
									<h4>
										<LocationOn className="slick-icons" />
										{caroussel.title}
									</h4>
								</div>
							</div>
							<div>
								<img
									src={`/api/${caroussel.picture2}`}
									alt="Second slide"
									className="slick-image"
									style={{
										width: '100%',
										height: '400px'
									}}
								/>
								<div className="slick-caption">
									<h4>
										<LocationOn className="slick-icons" />
										{caroussel.title2}
									</h4>
								</div>
							</div>
							<div>
								<img
									src={`/api/${caroussel.picture3}`}
									alt="Third slide"
									className="slick-image"
									style={{
										width: '100%',
										height: '400px'
									}}
								/>

								<div className="slick-caption">
									<h4>
										<LocationOn className="slick-icons" />
										{caroussel.title3}
									</h4>
								</div>
							</div>
						</Carousel>
					</Card>
					<Grid item xs={4} style={{ textAlign: 'right' }}>
						<Link to={`/admin/menu/caroussel/get/${caroussel._id}`}>{get}</Link>
						<Link to={`/admin/menu/caroussel/update/${caroussel._id}`}>{update}</Link>
					</Grid>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(carouselStyle)(Caroussel)
