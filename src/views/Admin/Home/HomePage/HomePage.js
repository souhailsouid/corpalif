/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
// core components
import SectionFooter from 'views/Footer/SectionFooter'
import Header from 'components/Header/Header.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import paris from 'assets/img/paris.jpg'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux

import { Link } from 'react-router-dom'

class HomePageAdminHome extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props

		return (
			<div>
				<Header
					brand={
						<img
							src="http://image.noelshack.com/fichiers/2018/40/1/1538391836-corpalif-logo.png"
							alt="logo"
							style={{
								width: 80,
								maxWidth: '100%',
								height: 'auto'
							}}
						/>
					}
					links={<HeaderLinks dropdownHoverColor="dark" />}
					fixed
					changeColorOnScroll={{
						height: 400
					}}
				/>
				<div>
					<Parallax
						image={require('assets/img/examples/city.jpg')}
						className={classes.parallax}
						small
						style={{ height: 400 }}
					/>
				</div>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6} style={{ marginTop: 100 }}>
								<div className={classes.profile}>
									<div className={classes.name}>
										<h3 className={classes.title}>HomePage</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>

						<div className={classes.profileTabs}>
							<NavPills
								alignCenter
								color="green"
								tabs={[
									{
										tabButton: 'Carousel1',
										tabIcon: Palette,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/carousel">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>
																			Caroussel 1
																		</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
													</GridContainer>
												</GridItem>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/adherent">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>
																			Caroussel 2 <br />
																			Adherent
																		</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
													</GridContainer>
												</GridItem>
											</GridContainer>
										)
									},
									{
										tabButton: 'Notifications',
										tabIcon: Camera,
										tabContent: (
											<div>
												<GridContainer>
													<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
														<GridContainer className={classes.collections}>
															<GridItem xs={12} sm={12} md={8}>
																<Link to="/admin/agenda1">
																	<Card
																		background
																		style={{
																			backgroundImage: 'url(' + paris + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<h2 className={classes.cardTitleWhite}>
																				Agenda 1
																			</h2>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
														</GridContainer>
													</GridItem>
													<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
														<GridContainer className={classes.collections}>
															<GridItem xs={12} sm={12} md={8}>
																<Link to="/admin/agenda2">
																	<Card
																		background
																		style={{
																			backgroundImage: 'url(' + paris + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<h2 className={classes.cardTitleWhite}>
																				Agenda 2 <br />
																			</h2>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={8}>
																<Link to="/admin/offre">
																	<Card
																		background
																		style={{
																			backgroundImage: 'url(' + paris + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<h2 className={classes.cardTitleWhite}>
																				Offre d'emploi
																			</h2>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
														</GridContainer>
													</GridItem>
												</GridContainer>
											</div>
										)
									}
								]}
							/>
						</div>
						<Clearfix />
					</div>
				</div>
				<SectionFooter />
			</div>
		)
	}
}

export default withStyles(profilePageStyle)(HomePageAdminHome)
