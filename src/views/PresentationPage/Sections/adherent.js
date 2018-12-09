import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Subject from '@material-ui/icons/Subject'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import projectsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx'
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
					{/* <Card>
						<Carousel {...settings}>
							<div>
								<div className={classes.coloredShadow} /> */}
					{/* <img
									src={`http://localhost:5000/api/${adherent.picture}`}
									className="slick-image"
									style={{
										width: '100%',
										height: '500px'
									}}
									alt=""
								/> */}
					<GridItem xs={12} sm={12} md={12}>
						<Card
							raised
							background
							style={{
								backgroundImage: `url(http://localhost:5000/api/${adherent.picture})`
							}}
						>
							<CardBody background>
								<h6 className={classes.cardCategory}>ADHESION</h6>
								<a href="#pablito" onClick={(e) => e.preventDefault()}>
									<h3 className={classes.cardTitleWhite}>{adherent.title}</h3>
								</a>
								<p className={classes.cardDescription}>
									Don't be scared of the truth because we need to restart the human foundation in
									{/* truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is... */}
								</p>

								<Button round color="green">
									<Subject /> Adherer
								</Button>
							</CardBody>
							<div className="slick-caption" style={{ marginBottom: 50 }}>
								{/* <h2>{adherent.title}</h2> */}
							</div>
						</Card>
					</GridItem>
					{/* </div>
						</Carousel> */}
					{/* </Card> */}
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(projectsStyle)(Adherent)
