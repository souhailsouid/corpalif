import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Footer from 'components/Footer/Footer.jsx'
import ars from 'assets/img/ars.jpg'
import sfap from 'assets/img/sfap.png'
import styles from 'assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx'

const SectionFooter = (props) => {
	const { classes } = props
	return (
		<div
			className={classes.section}
			style={{ paddingTop: 60, paddingBottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.14)' }}
		>
			<div>
				<Footer
					theme="dark"
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="#pablo" className={classes.block} onClick={(e) => e.preventDefault()}>
											Accueil
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="#pablo" className={classes.block} onClick={(e) => e.preventDefault()}>
											Annuaire
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="#pablo" className={classes.block} onClick={(e) => e.preventDefault()}>
											Mentions légales
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="#pablo" className={classes.block} onClick={(e) => e.preventDefault()}>
											Contact Us
										</a>
									</ListItem>
								</List>
							</div>
							<div className={classes.right}>
								&copy; {1900 + new Date().getYear()} Tous droits réservés.
							</div>
						</div>
					}
				>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<h5>À propos</h5>
							<p>La CORPALIF est une association de loi 1901.</p>
							<p>
								Elle a pour but de fédérer et représentater les acteurs de soins palliatifs franciliens.{' '}
							</p>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<h5> Réseaux sociaux</h5>
							<div className={classes.socialFeed}>
								<a
									href="https://www.linkedin.com/in/corpalif-coordination-régionale-1a4468167"
									target="_blank"
								>
									<div>
										<i className="fab fa-linkedin" />
										<p>https://www.linkedin.com/in/corpalif-coordination-régionale-1a4468167</p>
									</div>
								</a>
								<div>
									<i className="fab fa-facebook-square" />
									<p>A collection of 25 stunning sites that you can use for inspiration.</p>
								</div>
							</div>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<h5>Nos partenaires</h5>
							<div className={classes.galleryFeed}>
								<a href="https://www.iledefrance.ars.sante.fr/" target="_blank">
									<img
										src={ars}
										className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
										alt="..."
									/>
									<div className={classes.socialFeed}>
										<div>
											<p style={{ paddingTop: 20 }}>Agence Régionale de Soins Palliatifs.</p>
										</div>
									</div>
								</a>
								<br />
								<br />
								<br />
								<a href="http://www.sfap.org/" target="_blank">
									<img
										src={sfap}
										className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
										alt="..."
									/>
									<div className={classes.socialFeed}>
										<div>
											<p style={{ paddingTop: 10 }}>
												Société Française d'Accompagnement et de Soins Palliatifs.
											</p>
										</div>
									</div>
								</a>
							</div>
						</GridItem>
					</GridContainer>
				</Footer>
			</div>
		</div>
	)
}

export default withStyles(styles)(SectionFooter)
