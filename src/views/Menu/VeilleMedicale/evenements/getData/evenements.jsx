import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer.jsx'

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderComponent from 'views/Header/AppBar'
import SectionFooter from 'views/Footer/SectionFooter'
import SectionEvenement from './get.jsx'
// section CSS

class PresentationEvenement extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<HeaderComponent />
				<br />
				<br />
				<br />
				<div className={classNames(classes.main, classes.mainRaised)} style={{ margin: 'auto' }}>
					<GridContainer justify="center">
						<SectionEvenement />
					</GridContainer>
					<SectionFooter />
				</div>

				<div />
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationEvenement)
