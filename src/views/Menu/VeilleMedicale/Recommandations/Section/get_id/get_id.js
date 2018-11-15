import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer.jsx'

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar'
import SectionFooter from 'views/Footer/SectionFooter'
import SectionBlogs from 'views/Menu/VeilleMedicale/Recommandations/Section/get_id/blog.jsx'
// section CSS

class Recommandation_id extends React.Component {
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

export default withStyles(presentationStyle)(Recommandation_id)
