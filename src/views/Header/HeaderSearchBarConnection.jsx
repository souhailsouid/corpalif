import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
// import Example from 'components/Header/sub'
import Parallax from 'components/Parallax/Parallax.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// sections for this page
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SearchBar from 'views/Header/Sections/SearchBar'
// sections CSS
import '../style.css'
import HeaderLinksConnection from 'components/Header/HeaderLinksConnection'

class HeaderSearchBarConnection extends React.Component {
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
								alt="logo"
								style={{
									width: 80,

									maxWidth: 'auto',
									height: 'auto'
								}}
							/>
						}
						links={<HeaderLinksConnection dropdownHoverColor="dark" />}
						fixed
						color="#cc4949"
						changeColorOnScroll={{
							height: 400
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
									<h1 style={{ marginTop: 100 }}>Annuaire régional</h1>
									<h5>Recherchez une structure de soins spalliatifs </h5>
									<div>
										<SearchBar />
									</div>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
			</div>
		)
	}
}

export default withStyles(presentationStyle)(HeaderSearchBarConnection)