import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
// import Example from 'components/Header/sub'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// import SectionCards from 'views/PresentationPage/Sections/SectionCards.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SearchBar from '../SearchBarDepartment'
import SectionFooter from '../ComponentsPage/Sections/SectionFooter'
import AnnuaireIledeFrance from 'views/SectionsPage/Sections/AnnuaireIledeFrance.jsx'

// section CSS
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
										<SearchBar />
									</div>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<GridContainer justify="center">
						<AnnuaireIledeFrance />
					</GridContainer>
					<SectionFooter />
				</div>

				<div />
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationPage)
