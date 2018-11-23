/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import People from '@material-ui/icons/People'

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

import oluEletu from 'assets/img/examples/olu-eletu.jpg'

import darrenColeshill from 'assets/img/examples/darren-coleshill.jpg'

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'

import { Link } from 'react-router-dom'

class VeillemedicalePage extends React.Component {
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
										<h3 className={classes.title}>Admin</h3>
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
										tabButton: 'Veille medicale',
										tabIcon: Palette,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<h4 className={classes.title}>Manage the website</h4>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/menu/veillemedicale/recommandation&outils/">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>
																			Recommandation & outils
																		</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/menu/veillemedicale/rencontre/">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>
																			Rencontres
																		</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/menu/veillemedicale/actualite/">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>
																			Actualite
																		</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/menu/veillemedicale/evenement/">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>
																			Evenement
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
										tabButton: 'Menu',
										tabIcon: People,
										tabContent: (
											<div>
												<GridContainer>
													<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
														<GridContainer className={classes.collections}>
															<GridItem xs={12} sm={12} md={6}>
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + oluEletu + ')'
																	}}
																>
																	<a href="#pablo" />
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Coordination régionale
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + darrenColeshill + ')'
																	}}
																>
																	<a href="#pablo" />
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Les soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + oluEletu + ')'
																	}}
																>
																	<Link to="admin/menu/veillemedicale/recommandation&outils/">
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<h2 className={classes.cardTitleWhite}>
																				Veille médicale
																			</h2>
																		</CardBody>
																	</Link>
																</Card>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + oluEletu + ')'
																	}}
																>
																	<a href="#pablo" />
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Emploi-Formation
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</GridItem>
														</GridContainer>
													</GridItem>
												</GridContainer>
											</div>
										)
									},
									{
										tabButton: 'Formulaire',
										tabIcon: Camera,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer justify="center">
														<GridItem xs={12} sm={12} md={6}>
															<Card
																background
																style={{
																	backgroundImage: 'url(' + oluEletu + ')'
																}}
															>
																<Link to="/admin/formulaire">
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>
																			Formulaires
																		</h2>
																	</CardBody>
																</Link>
															</Card>
														</GridItem>
													</GridContainer>
												</GridItem>
											</GridContainer>
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

export default withStyles(profilePageStyle)(VeillemedicalePage)
