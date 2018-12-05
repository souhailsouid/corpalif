import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'

import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'

const settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true
}
const Recommandation = ({ caroussel, classes }) => (
	<div className={classes.section} id="carousel">
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
					<Card>
						<Carousel {...settings}>
							<div>
								<a href="/menu/veillemedicale/actualites/">
									<div className={classes.coloredShadow} />

									<img
										src={`http://localhost:5000/api/${caroussel.picture}`}
										alt="First slide"
										className="slick-image"
										style={{
											width: '100%',
											height: '400px'
										}}
									/>

									<div className="slick-caption">
										<h2>{caroussel.title}</h2>
									</div>
								</a>
							</div>

							<div>
								<a href="/menu/veillemedicale/nosrencontres">
									<img
										src={`http://localhost:5000/api/${caroussel.picture2}`}
										alt="Second slide"
										className="slick-image"
										style={{
											width: '100%',
											height: '400px'
										}}
									/>

									<div className="slick-caption">
										<h2>{caroussel.title2}</h2>
									</div>
								</a>
							</div>
							<div>
								<a href="/offres-d'emplois/">
									<img
										src={`http://localhost:5000/api/${caroussel.picture3}`}
										alt="Third slide"
										className="slick-image"
										style={{
											width: '100%',
											height: '400px'
										}}
									/>

									<div className="slick-caption">
										<h2>{caroussel.title3}</h2>
									</div>
								</a>
							</div>
						</Carousel>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(carouselStyle)(Recommandation)
