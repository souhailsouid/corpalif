import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import stripe from 'assets/img/stripe.png'
import sll from 'assets/img/sll.png'
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
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="/mentionlegale" className={classes.block}>
											Mentions légales
										</a>
									</ListItem>
								</List>
							</div>
							<div>
								{' '}
								<img src={stripe} alt="..." />
								<img src={sll} alt="..." />
							</div>

							<div className={classes.right}> {1900 + new Date().getYear()} Tous droits réservés</div>
						</div>
					}
				>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<h5>À propos</h5>
							<p>La CORPALIF est une association de loi 1901.</p>
							<p>
								Elle a pour but de fédérer et représenter les acteurs de soins palliatifs franciliens.{' '}
							</p>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<h5> Réseaux sociaux</h5>

							<div className={classes.socialFeed}>
								<a
									href="https://www.linkedin.com/in/corpalif-coordination-régionale-1a4468167"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div>
										<i className="fab fa-linkedin" />
										<p>https://www.linkedin.com/in/corpalif-coordination-régionale-1a4468167</p>
									</div>
								</a>

								<div>
									<a
										href="https://fr-fr.facebook.com/Corpalif/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-facebook-square" />
										<p>https://fr-fr.facebook.com/Corpalif/</p>
									</a>
								</div>
								<h5> Développeur web</h5>
								<div>
									<a
										href="https://www.linkedin.com/in/souhail-souid-81181915b/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-linkedin" />
										<p> Souhail SOUID</p>
									</a>
								</div>
							</div>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<h5>Nos partenaires</h5>
							<div className={classes.galleryFeed}>
								<a
									href="https://www.iledefrance.ars.sante.fr/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={ars}
										className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
										alt="..."
									/>
									<br />
									<div className={classes.socialFeed}>
										<div>
											<p>Agence Régionale de Santé Île-de-France</p>
										</div>
									</div>
								</a>
								<br />

								<br />
								<a href="http://www.sfap.org/" target="_blank" rel="noopener noreferrer">
									<img
										src={sfap}
										className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
										alt="..."
									/>
									<div className={classes.socialFeed}>
										<div>
											<p style={{ paddingTop: 10 }}>
												Société Française d'Accompagnement et de soins Palliatifs
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
