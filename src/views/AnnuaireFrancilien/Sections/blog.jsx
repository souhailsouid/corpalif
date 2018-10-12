import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Info from 'components/Typography/Info.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'
// ICONS SECTIONS
import United from 'views/AnnuaireFrancilien/Sections/Icons/UniteSoinsPalliatifs.jsx'
import Associations from 'views/AnnuaireFrancilien/Sections/Icons/Association.jsx'
import Autres from 'views/AnnuaireFrancilien/Sections/Icons/Autres.jsx'
import Lits from 'views/AnnuaireFrancilien/Sections/Icons/Lits.jsx'
import Reseaux from 'views/AnnuaireFrancilien/Sections/Icons/ReseauxPalliatifs.jsx'
import Structures from 'views/AnnuaireFrancilien/Sections/Icons/StructuresDomicile.jsx'
import Teams from 'views/AnnuaireFrancilien/Sections/Icons/EquipesMobiles.jsx'

function SectionBlogs({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			{/* Blogs 3 START */}
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							<h2 className={classes.title} style={{ color: '#cc4949' }}>
								L' offre de soins francilienne
							</h2>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={3}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<United />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												Unités de soins palliatifs (USP)
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												25
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a company in transition.
											It was until recently a traditional boxed software company selling licenses.
											Today, it’s moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Mike Butcher</b>
											</a>{' '}
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={3}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<Reseaux />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												Reseaux de soins palliatifs
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												23
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a company in transition.
											It was until recently a traditional boxed software company selling licenses.
											Today, it’s moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Mike Butcher</b>
											</a>{' '}
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={3}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<Structures />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												Structures d'hospitalisation à domicile
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												15
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a company in transition.
											It was until recently a traditional boxed software company selling licenses.
											Today, it’s moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Mike Butcher</b>
											</a>{' '}
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={3}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<Lits />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												Lits identifiés soins palliatifs (USP)
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												747
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a company in transition.
											It was until recently a traditional boxed software company selling licenses.
											Today, it’s moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Mike Butcher</b>
											</a>{' '}
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={3}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<Teams />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												Équipes mobiles de soins palliatifs (HAD)
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												72
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a company in transition.
											It was until recently a traditional boxed software company selling licenses.
											Today, it’s moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Mike Butcher</b>
											</a>{' '}
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={3}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<Associations />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												Association de bénévoles d'accompagnement
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												51
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a company in transition.
											It was until recently a traditional boxed software company selling licenses.
											Today, it’s moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Mike Butcher</b>
											</a>{' '}
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={3}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<Autres />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={8} md={8}>
										<Info>
											<h6 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												Autres structures
											</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												32
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a company in transition.
											It was until recently a traditional boxed software company selling licenses.
											Today, it’s moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												{' '}
												Read More{' '}
											</a>
										</p>
										<p className={classes.author}>
											by{' '}
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<b>Mike Butcher</b>
											</a>{' '}
											, 2 days ago
										</p>
									</GridItem>
								</GridContainer>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Blogs 3 END */}
		</div>
	)
}

export default withStyles(blogsStyle)(SectionBlogs)
