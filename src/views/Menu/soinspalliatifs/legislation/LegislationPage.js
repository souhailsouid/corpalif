import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components

import HeaderComponent from 'views/Header/AppBar'
import SectionFooter from 'views/Footer/SectionFooter'

import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.jsx'

// Sections for this page
import Section from './Sections/section.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentLegislation } from 'actions/soinspalliatifs/LegislationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
class LegislationPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentLegislation()
	}
	render() {
		const { classes } = this.props
		const { legislation } = this.props.legislation
		const DataElements = legislation.map((legislation) => <Section legislation={legislation} />)
		return (
			<div>
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: 100 }}>
					<div className={classes.container}>{DataElements}</div>
					<SectionFooter />
				</div>
			</div>
		)
	}
}
LegislationPage.propTypes = {
	getCurrentLegislation: PropTypes.func.isRequired,
	legislation: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	legislation: state.legislation
})

export default compose(withStyles(landingPageStyle))(
	connect(mapStateToProps, { getCurrentLegislation })(withRouter(LegislationPage))
)
