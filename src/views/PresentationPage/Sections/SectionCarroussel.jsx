import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'

import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import SectionAgenda from './SectionAgenda'
import SectionOffres from './SectionOffres'
import image1 from 'assets/img/bg.jpg'
import image2 from 'assets/img/bg2.jpg'
import image3 from 'assets/img/bg3.jpg'

const settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true
}
class SectionCarousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section} id="carousel">
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={8} className={classes.marginAuto} style={{ marginTop: 40 }}>
							<h3 className={classes.title} style={{ paddingBottom: 10, color: '#cc4949' }}>
								<i class="material-icons" style={{ color: '#cc4949' }}>
									description
								</i>{' '}
								ACTUALITÉS
							</h3>
							<Card>
								<Carousel {...settings}>
									<div>
										<img src={image1} alt="First slide" className="slick-image" />
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />Yellowstone National Park, United
												States
											</h4>
										</div>
									</div>
									<div>
										<img src={image2} alt="Second slide" className="slick-image" />
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />Somewhere Beyond, United States
											</h4>
										</div>
									</div>
									<div>
										<img src={image3} alt="Third slide" className="slick-image" />
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />Yellowstone National Park, United
												States
											</h4>
										</div>
									</div>
								</Carousel>
							</Card>
						</GridItem>
						<div style={{ margin: 'auto' }}>
							<SectionAgenda />
							<SectionOffres />
						</div>
					</GridContainer>
				</div>
			</div>
		)
	}
}

export default withStyles(carouselStyle)(SectionCarousel)
