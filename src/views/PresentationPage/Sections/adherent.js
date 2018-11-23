import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'

import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'

const settings = {
	dots: false,
	infinite: false,
	autoplay: false
}
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
									src={`http://localhost:5000/api/${adherent.picture}`}
									className="slick-image"
									style={{
										width: '100%',
										height: '500px'
									}}
								/>
								<div className="slick-caption" style={{ marginBottom: 50 }}>
									<h2>{adherent.title}</h2>
								</div>
							</div>
						</Carousel>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(carouselStyle)(Adherent)
