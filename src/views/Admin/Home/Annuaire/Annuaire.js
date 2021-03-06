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

import clemOnojeghuo from 'assets/img/examples/clem-onojeghuo.jpg'

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux

import { Link } from 'react-router-dom'

class AnnuaireAdminHome extends React.Component {
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
										<h3 className={classes.title}>Annuaire</h3>
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
										tabButton: 'Paris',
										tabIcon: Palette,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/usp">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>USP</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/reseaux">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Réseaux de soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/equipesmobiles">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Equipes mobiles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/lits">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Lits identifiés
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h3 className={classes.cardTitleWhite}>
																				LES STRUCTURES <br />D' HOSPITALISATION{' '}
																				<br />À DOMICILE
																			</h3>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/association">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Association <br /> -<br /> Benevoles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/autres_structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres <br /> -<br /> Structures
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/paris/autres">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres
																			</h2>
																		</a>
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
										tabButton: 'Essonne',
										tabIcon: Camera,
										tabContent: (
											<div>
												<GridContainer>
													<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
														<GridContainer className={classes.collections}>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/ESSONNE/usp">
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
																				USP
																			</h2>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/ESSONNE/reseaux">
																	<Card
																		background
																		style={{
																			backgroundImage:
																				'url(' + clemOnojeghuo + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<a href="#pablo">
																				<h2 className={classes.cardTitleWhite}>
																					Réseaux de soins palliatifs
																				</h2>
																			</a>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/ESSONNE/equipesmobiles">
																	<Card
																		background
																		style={{
																			backgroundImage:
																				'url(' + clemOnojeghuo + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<a href="#pablo">
																				<h2 className={classes.cardTitleWhite}>
																					Equipes mobiles
																				</h2>
																			</a>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/ESSONNE/lits">
																	<Card
																		background
																		style={{
																			backgroundImage:
																				'url(' + clemOnojeghuo + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<a href="#pablo">
																				<h2 className={classes.cardTitleWhite}>
																					Lits identifiés
																				</h2>
																			</a>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/ESSONNE/structures">
																	<Card
																		background
																		style={{
																			backgroundImage:
																				'url(' + clemOnojeghuo + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<a href="#pablo">
																				<h3 className={classes.cardTitleWhite}>
																					LES STRUCTURES <br />D'
																					HOSPITALISATION <br />À DOMICILE
																				</h3>
																			</a>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/ESSONNE/association">
																	<Card
																		background
																		style={{
																			backgroundImage:
																				'url(' + clemOnojeghuo + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<a href="#pablo">
																				<h2 className={classes.cardTitleWhite}>
																					Association <br /> -<br /> Benevoles
																				</h2>
																			</a>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/essonne/autres_structures">
																	<Card
																		background
																		style={{
																			backgroundImage:
																				'url(' + clemOnojeghuo + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<a href="#pablo">
																				<h2 className={classes.cardTitleWhite}>
																					Autres <br /> -<br /> Structures
																				</h2>
																			</a>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Link to="/admin/essonne/autres">
																	<Card
																		background
																		style={{
																			backgroundImage:
																				'url(' + clemOnojeghuo + ')'
																		}}
																	>
																		<CardBody
																			background
																			className={classes.cardBody}
																		>
																			<a href="#pablo">
																				<h2 className={classes.cardTitleWhite}>
																					Autres
																				</h2>
																			</a>
																		</CardBody>
																	</Card>
																</Link>
															</GridItem>
														</GridContainer>
													</GridItem>
												</GridContainer>
											</div>
										)
									},
									{
										tabButton: 'Seine-et-Marne',
										tabIcon: Camera,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINEETMARNE/USP">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>USP</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINEETMARNE/reseaux">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Réseaux de soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINEETMARNE/equipesmobiles">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Equipes mobiles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINEETMARNE/lits">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Lits identifiés
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINEETMARNE/structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h3 className={classes.cardTitleWhite}>
																				LES STRUCTURES <br />D' HOSPITALISATION{' '}
																				<br />À DOMICILE
																			</h3>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINEETMARNE/association">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Association <br /> -<br /> Benevoles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/seineetmarne/autres_structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres <br /> -<br /> Structures
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/seineetmarne/autres">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres
																			</h2>
																		</a>
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
										tabButton: 'Hauts-de-Seine',
										tabIcon: Camera,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/usp">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>USP</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/reseaux">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Réseaux de soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/equipesmobiles">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Equipes mobiles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/lits">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Lits identifiés
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h3 className={classes.cardTitleWhite}>
																				LES STRUCTURES <br />D' HOSPITALISATION{' '}
																				<br />À DOMICILE
																			</h3>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/association">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Association <br /> -<br /> Benevoles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/autres_structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres <br /> -<br /> Structures
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/hautdeseine/autres">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres
																			</h2>
																		</a>
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
										tabButton: 'Seine-Saint-Denis',
										tabIcon: Camera,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINESAINTDENIS/usp">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>USP</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINESAINTDENIS/reseaux">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Réseaux de soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINESAINTDENIS/equipesmobiles">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Equipes mobiles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINESAINTDENIS/lits">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Lits identifiés
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINESAINTDENIS/structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h3 className={classes.cardTitleWhite}>
																				LES STRUCTURES <br />D' HOSPITALISATION{' '}
																				<br />À DOMICILE
																			</h3>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/SEINESAINTDENIS/association">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Association <br /> -<br /> Benevoles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/seinesaintdenis/autres_structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres <br /> -<br /> Structures
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/seinesaintdenis/autres">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres
																			</h2>
																		</a>
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
										tabButton: 'Val-de-Marne',
										tabIcon: Camera,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDEMARNE/usp">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>USP</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDEMARNE/reseaux">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Réseaux de soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDEMARNE/equipesmobiles">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Equipes mobiles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDEMARNE/lits">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Lits identifiés
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDEMARNE/structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h3 className={classes.cardTitleWhite}>
																				LES STRUCTURES <br />D' HOSPITALISATION{' '}
																				<br />À DOMICILE
																			</h3>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDEMARNE/association">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Association <br /> -<br /> Benevoles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/valdemarne/autres_structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres <br /> -<br /> Structures
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/valdemarne/autres">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres
																			</h2>
																		</a>
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
										tabButton: `Val d '\' Oise`,
										tabIcon: Camera,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDOISE/usp">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>USP</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDOISE/reseaux">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Réseaux de soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDOISE/equipesmobiles">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Equipes mobiles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDOISE/lits">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Lits identifiés
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDOISE/structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h3 className={classes.cardTitleWhite}>
																				LES STRUCTURES <br />D' HOSPITALISATION{' '}
																				<br />À DOMICILE
																			</h3>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/VALDOISE/association">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Association <br /> -<br /> Benevoles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/valdoise/autres_structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres <br /> -<br /> Structures
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/valdoise/autres">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres
																			</h2>
																		</a>
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
										tabButton: 'Yvelines',
										tabIcon: Camera,
										tabContent: (
											<GridContainer>
												<GridItem xs={12} sm={12} md={7} className={classes.gridItem}>
													<GridContainer className={classes.collections}>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/YVELINES/usp">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + paris + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<h2 className={classes.cardTitleWhite}>USP</h2>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/YVELINES/reseaux">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Réseaux de soins palliatifs
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/YVELINES/equipesmobiles">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Equipes mobiles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/YVELINES/lits">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Lits identifiés
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/YVELINES/structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h3 className={classes.cardTitleWhite}>
																				LES STRUCTURES <br />D' HOSPITALISATION{' '}
																				<br />À DOMICILE
																			</h3>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/YVELINES/association">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Association <br /> -<br /> Benevoles
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/yvelines/autres_structures">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres <br /> -<br /> Structures
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
														</GridItem>
														<GridItem xs={12} sm={12} md={6}>
															<Link to="/admin/yvelines/autres">
																<Card
																	background
																	style={{
																		backgroundImage: 'url(' + clemOnojeghuo + ')'
																	}}
																>
																	<CardBody background className={classes.cardBody}>
																		<a href="#pablo">
																			<h2 className={classes.cardTitleWhite}>
																				Autres
																			</h2>
																		</a>
																	</CardBody>
																</Card>
															</Link>
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

export default withStyles(profilePageStyle)(AnnuaireAdminHome)
