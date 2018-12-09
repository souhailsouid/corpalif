import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

import office2 from 'assets/img/examples/office2.jpg'

// core components
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import AdhererParticulier from './Components/ModalAdhererParticulier'
import AdhererPro from './Components/ModalAdhererPro'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import projectsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx'

class SectionAdherer extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div>
				<h2
					className={classes.title}
					style={{
						textAlign: 'center',
						marginTop: 60,
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
				>
					Adherer
				</h2>

				<GridContainer>
					<GridItem xs={12} sm={12} md={6}>
						<Card raised background style={{ backgroundImage: `url(${office2})` }}>
							<CardBody background>
								<h6 className={classes.cardCategory}>ADHESION À TITRE</h6>
								<a href="#pablito" onClick={(e) => e.preventDefault()}>
									<h3 className={classes.cardTitleWhite}>Collectif</h3>
								</a>
								<p className={classes.cardDescription}>
									Don't be scared of the truth because we need to restart the human foundation in
									truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is...
								</p>
								<AdhererPro />
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={6}>
						<Card raised background style={{ backgroundImage: `url(${office2})` }}>
							<CardBody background>
								<h6 className={classes.cardCategory}>ADHESION À TITRE</h6>
								<a href="#pablito" onClick={(e) => e.preventDefault()}>
									<h3 className={classes.cardTitleWhite}>Individuel</h3>
								</a>
								<p className={classes.cardDescription}>
									Don't be scared of the truth because we need to restart the human foundation in
									truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is...
								</p>
								<AdhererParticulier />
							</CardBody>
						</Card>
					</GridItem>
				</GridContainer>

				<GridContainer justify="center" style={{ marginTop: 40, textAlign: 'center' }}>
					<GridItem xs={12} sm={12} md={12}>
						<h3
							className={classes.description}
							style={{ justifyContent: 'center', textAlign: 'center' }}
							justify="left"
						>
							<b style={{ color: '#000000', textAlign: 'center' }}>
								<i class="material-icons">link</i>

								<b style={{ marginLeft: 10, textAlign: 'center' }}> Pour adherer par cheque</b>
								<br />
								<br />
							</b>
							Adresser le formulaire ci-joint à : <br />
							<a
								href="http://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/parcours-des-patients-et-des-usagers/article/parcours-de-sante-de-soins-et-de-vie"
								target="_blank"
								style={{ color: '#cc4949' }}
							>
								<h5 className="link">
									{' '}
									Formulaire d’adhésion
									<i style={{ marginLeft: 5 }} class="material-icons">
										file_copy
									</i>
								</h5>
							</a>
							<br />
							<div style={{ textAlign: 'center' }}>
								Corpalif <br /> Trésorier de la CORPALIF <br />Hôpital Jeanne Garnier, 75 016 PARIS
							</div>
						</h3>
						<br />
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(projectsStyle)(SectionAdherer)
