import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import Example from 'components/Header/sub'
import GridContainer from 'components/Grid/GridContainer.jsx'
// import SectionCards from 'views/PresentationPage/Sections/SectionCards.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderComponent from 'views/Header/AppBar'
import SectionFooter from 'views/Footer/SectionFooter'

// Section CSS
import '../style.css'
import SectionBlogs from './Sections/SectionBlogs'
class PresentationBlog extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<HeaderComponent />
				<div className={classNames(classes.main, classes.mainRaised)}>
					<GridContainer justify="center">
						<SectionBlogs />
					</GridContainer>
					<SectionFooter />
				</div>
				<div />
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationBlog)
