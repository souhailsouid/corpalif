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
import projectsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx'
// import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import Button from 'components/CustomButtons/Button.jsx'
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
								{/* <a href="/#/menu/veillemedicale/actualites/"> */}
								<a href={`/#/${caroussel.url1}`}>
									<div className={classes.coloredShadow} />

									<img
										src={`api/${caroussel.picture}`}
										alt="First slide"
										className="slick-image"
										style={{
											width: '100%',
											height: '400px'
										}}
									/>

									<div className="slick-caption">
										<GridItem
											xs={12}
											sm={12}
											md={12}
											className={classes.marginAuto}
											style={{ marginLeft: 'auto', marginRight: 'auto' }}
										>
											<Button
												round
												color="red"
												style={{
													paddingLeft: '12px',
													paddingRight: '12px',
													paddingTop: '0px',
													paddingBottom: '0px'
												}}
											>
												<h4 className={classes.cardTitleWhite}> {caroussel.title} </h4>
											</Button>
											{/* <h2>{caroussel.title}</h2> */}
										</GridItem>
									</div>
								</a>
							</div>

							<div>
								<a href={`/#/${caroussel.url2}`}>
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
										<Button
											round
											color="red"
											style={{
												paddingLeft: '12px',
												paddingRight: '12px',
												paddingTop: '0px',
												paddingBottom: '0px'
											}}
										>
											<h4 className={classes.cardTitleWhite}> {caroussel.title2} </h4>
										</Button>

										{/* <h2>{caroussel.title2}</h2> */}
									</div>
								</a>
							</div>
							<div>
								<a href={`/#/${caroussel.url3}`}>
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
										<Button
											round
											color="red"
											style={{
												paddingLeft: '12px',
												paddingRight: '12px',
												paddingTop: '0px',
												paddingBottom: '0px'
											}}
										>
											<h4 className={classes.cardTitleWhite}> {caroussel.title3} </h4>
										</Button>
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

export default withStyles(projectsStyle)(Recommandation)
