import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import Example from 'components/Header/sub'
import GridContainer from 'components/Grid/GridContainer.jsx'
// import SectionCards from 'views/PresentationPage/Sections/SectionCards.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar'
import SectionFooter from 'views/Footer/SectionFooter'
import SectionBlogs from 'views/AnnuaireFrancilien/Sections/blog.jsx'
// section CSS

class PresentationPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<HeaderSearchBar />

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

export default withStyles(presentationStyle)(PresentationPage)
