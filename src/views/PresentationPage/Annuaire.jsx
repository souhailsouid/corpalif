import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// core components
import FormControl from '@material-ui/core/FormControl'
import Header from 'components/Header/Header.jsx'
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import HeaderConnexion from 'components/Header/HeaderConnexion.jsx'
import SectionNavbars from 'components/Header/HeaderLinksConnexion.jsx'
// import Example from 'components/Header/sub'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'

// sections for this page
import SectionDescription from 'views/PresentationPage/Sections/SectionDescription.jsx'
import SectionContacts from 'views/SectionsPage/Sections/SectionContacts.jsx'
import SectionComponents from 'views/PresentationPage/Sections/SectionComponents.jsx'
// import SectionCards from 'views/PresentationPage/Sections/SectionCards.jsx'
import SectionContent from 'views/PresentationPage/Sections/SectionContent.jsx'
import SectionSections from 'views/PresentationPage/Sections/SectionSections.jsx'
import SectionExamples from 'views/PresentationPage/Sections/SectionExamples.jsx'
import SectionFreeDemo from 'views/PresentationPage/Sections/SectionFreeDemo.jsx'
import SectionOverview from 'views/PresentationPage/Sections/SectionOverview.jsx'
import SectionPricing from 'views/PresentationPage/Sections/SectionPricing.jsx'
import IntegrationReactSelect from '../auto'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import Example from '../suggest'
import IntegrationAutosuggest from '../autosuggest'
import IntegrationLocation from '../Location'
import AnnuaireSuggestion from '../AnnuaireSuggestion'
import SectionCards from 'views/PresentationPage/card.js'
import '../style.css'
class PresentationPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<div>
					<Header
						brand={
							<img
								src="http://image.noelshack.com/fichiers/2018/40/1/1538391836-corpalif-logo.png"
								style={{
									width: 80,
									marginRight: 200,
									maxWidth: '100%',
									height: 'auto'
								}}
							/>
						}
						links={<HeaderLinks dropdownHoverColor="dark" />}
						fixed
						color="white"
						changeColorOnScroll={{
							height: 400,
							color: 'white'
						}}
					/>
				</div>
				<Parallax image={require('assets/img/paris.jpg')} className={classes.parallax} small>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem
								md={8}
								sm={8}
								className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
							>
								<div className={classes.brand}>
									<h1 style={{ marginTop: 100 }}>Annuaire régionale</h1>
									<b>
										<h3 /> Recherchez une structure de soins spalliatif <h3 />
									</b>
									<div>
										<div className={classes.brand} style={{ display: 'flex' }}>
											{/* <IntegrationReactSelect />
											<IntegrationAutosuggest />
											<IntegrationLocation /> */}
										</div>

										<Example />
									</div>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>

				{/* <Parallax */}
				{/* image={require('assets/img/paris.jpg')}
					className={classes.parallax}
					small
					style={{ height: 100 , }}
				>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem
								md={8}
								sm={8}
								className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}
							>
								<div className={classes.brand} >
									<h1 style={{color: '#336774'}}>
										Les structures<br/> en Île-de-France
									</h1>
									<b>
										
										<h3 style={{ marginTop: 0 }} /> Recherchez une structure de soins spalliatif{' '}
										<h3 />
									</b>
									<div>
									
										<AnnuaireSuggestion />
									</div>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax> */}

				<div className={classNames(classes.main, classes.mainRaised)}>
					<GridContainer justify="center">
						<SectionCards />
					</GridContainer>
				</div>

				<div />
				<Footer
					theme="white"
					content={
						<div>
							<div className={classes.left} style={{ justifyContent: 'stretch' }}>
								<img
									src="http://image.noelshack.com/fichiers/2018/40/1/1538391836-corpalif-logo.png"
									style={{
										width: 60,
										marginRight: 20,
										maxWidth: '100%',
										height: 'auto'
									}}
								/>
								<a
									href="https://www.creative-tim.com/product/material-kit-pro-react"
									className={classes.footerBrand}
								>
									Coordination Régionale de Soins Palliatifs d'Ile de France
								</a>
							</div>
							<div className={classes.pullCenter}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/presentation" className={classes.block}>
											À propos
										</a>
									</ListItem>

									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/license" className={classes.block}>
											mentions légales
										</a>
									</ListItem>
								</List>
							</div>
							<div className={classes.rightLinks}>
								<ul>
									<li>
										<Button href="https://twitter.com/CreativeTim" color="facebook" justIcon simple>
											<i className="fab fa-facebook" />
										</Button>
									</li>
									<li>
										<Button
											href="https://dribbble.com/creativetim"
											color="linkedin"
											justIcon
											simple
										>
											<i className="fab fa-linkedin" />
										</Button>
									</li>
								</ul>
							</div>
						</div>
					}
				/>
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationPage)