import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import Example from 'components/Header/sub'
import GridContainer from 'components/Grid/GridContainer.jsx'
// import SectionCards from 'views/PresentationPage/Sections/SectionCards.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import Header from '../Header/Header'
import SectionFooter from '../Footer/SectionFooter'
import SectionStructure from 'views/StructuresPage/Sections/Lists.jsx'
// Section CSS
import '../style.css'
class PresentationStructures extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<Header />
				<div className={classNames(classes.main, classes.mainRaised)}>
					<GridContainer justify="center">
						<SectionStructure />
					</GridContainer>
					<SectionFooter />
				</div>
				<div />
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationStructures)
