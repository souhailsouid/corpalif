import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import HeaderComponent from 'views/Header/AppBar'
import SectionFooter from 'views/Footer/SectionFooter'
import Parallax from 'components/Parallax/Parallax.jsx'

import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.jsx'

// Sections for this page
import Section from './Sections/section.jsx'

class AccompagnementRecommandation extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: 100 }}>
					<div className={classes.container}>
						<Section />
					</div>
					<SectionFooter />
				</div>
			</div>
		)
	}
}

export default withStyles(landingPageStyle)(AccompagnementRecommandation)
