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
							<h1 className={classes.title} style={{ color: '#cc4949', textAlign: 'center' }}>
								Offre de soins palliatifs en Ile-de-France
							</h1>
							<h4 className={classes.description}>
								Les structures de soins palliatifs sont régies par la circulaire DHOS du 25 mars 2008
								relative à l'organisation des soins palliatifs.
							</h4>
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
											<h5 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												<b style={{ color: '#cc4949' }}> Unités de soins palliatifs (USP)</b>
											</h5>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												25
											</a>
										</h3>
										<p className={classes.description}>
											Les unités de soins palliatifs ont une activité spécifique de soins
											palliatifs et des professionnels formés et spécialisés. Dotées d’une triple
											mission de soins, de formation et de recherche, les USP accueillent les
											situations de fin de vie les plus complexes.
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
											<h5 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												<b style={{ color: '#cc4949' }}> Réseaux de soins palliatifs</b>
											</h5>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												23
											</a>
										</h3>
										<p className={classes.description}>
											Les réseaux de soins palliatifs assurent la continuité des soins et la
											coordination des acteurs intervenant au domicile. Ils visent au
											développement et à la promotion de la démarche palliative par le
											décloisonnement des structures et des acteurs.
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
											<h5 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												<b style={{ color: '#cc4949' }}> Hospitalisation à domicile (HAD)</b>
											</h5>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												15
											</a>
										</h3>
										<p className={classes.description}>
											Les services d'hospitalisation à domicile ont pour mission de délivrer des
											soins médicaux médicaux et paramédicaux continus au domicile des patient.
											L'HAD assure la prise en charge des situations complexes.
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
											<h5 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												<b style={{ color: '#cc4949' }}>
													{' '}
													Lits identifiés de soins palliatifs (LISP)
												</b>
											</h5>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												747
											</a>
										</h3>
										<p className={classes.description}>
											Les lits identifiés de soins palliatifs (LISP) assurent, au sein des
											services de soins non dédiés spécifiquement, la mise en place d’une démarche
											palliative. Ils contribuent, avec les équipes mobiles, au développement des
											soins palliatifs dans les établissements de santé.
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
											<h5 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												<b style={{ color: '#cc4949' }}>
													{' '}
													Équipes mobiles de soins palliatifs (EMSP)
												</b>
											</h5>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												72
											</a>
										</h3>
										<p className={classes.description}>
											Les équipes mobiles de soins palliatifs interviennent dans les services de
											soins non dédiés spécifiquement, en apportant un appui aux professionnels
											confrontés à des situations palliatives.
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
											<h5 className={classes.cardCategory} style={{ color: '#cc4949' }}>
												<b style={{ color: '#cc4949' }}>
													{' '}
													Associations de bénévoles d'accompagnement
												</b>
											</h5>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												51
											</a>
										</h3>
										<p className={classes.description}>
											Les bénévoles d'accompagnement proposent aux patients et à leurs proches
											écoute et présence. <br />Ils interviennent dans les structures de soins
											ainsi qu'au domicile. Le bénévolat d'accompagnement s'effectue dans le cadre
											d'une association.
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<GridContainer justify="center" style={{ marginTop: 40 }}>
								<GridItem xs={12} sm={12} md={12}>
									<h5
										className={classes.description}
										style={{ justifyContent: 'left', textAlign: 'left' }}
										justify="left"
									>
										<b style={{ color: '#000000', textAlign: 'left', display: 'flex' }}>
											<i class="material-icons">link</i>

											<b style={{ marginLeft: 10 }}> Liens utiles</b>
										</b>
										<br />
										<br />{' '}
										<b style={{ color: '#337467' }}>
											{' '}
											Organisation des soins palliatifs - Société Française d'Accompagnement et de
											soins Palliatifs
										</b>
										<br />
										<a
											href="http://www.sfap.org/rubrique/definition-et-organisation-des-soins-palliatifs-en-france 
"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: '#999' }}
										>
											<h5 className="link">
												<b>
													{' '}
													http://www.sfap.org/rubrique/definition-et-organisation-des-soins-palliatifs-en-france
												</b>
											</h5>
										</a>
										<b style={{ color: '#337467' }}>
											La fin de vie en pratique - Structures et aides existantes - Centre national
											de la fin de vie et soins palliatifs
										</b>
										<a
											href="http://www.spfv.fr/actualites/lorganisation-soins-et-soins 
"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: '#999' }}
										>
											<h5 className="link">
												<b> http://www.spfv.fr/actualites/lorganisation-soins-et-soins </b>
											</h5>
										</a>
									</h5>
									<h5 className="link">
										<b style={{ color: '#337467' }}>
											Circulaire du 25 mars 2008 relative à l’organisation des soins palliatifs -
											Ministère des Solidarités et de la Santé
										</b>
										<br />
										<a
											href="http://solidarites-sante.gouv.fr/fichiers/bo/2008/08-04/ste_20080004_0100_0113.pdf 
"
											target="_blank"
											rel="noopener noreferrer"
											style={{ color: '#999' }}
										>
											<h5 className="link">
												<b>
													http://solidarites-sante.gouv.fr/fichiers/bo/2008/08-04/ste_20080004_0100_0113.pdf
												</b>
											</h5>
										</a>
									</h5>
								</GridItem>
							</GridContainer>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Annuaire francilien END */}
		</div>
	)
}

export default withStyles(blogsStyle)(SectionBlogs)
