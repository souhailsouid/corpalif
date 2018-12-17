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
import { getCurrentOrientation } from 'actions/menu/coordinationregionale/OrientationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class OrientationAdminPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentOrientation()
	}
	render() {
		const { classes } = this.props
		const { orientation } = this.props.orientation
		const DataElements = orientation.map((orientation) => <Section orientation={orientation} />)
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
OrientationAdminPage.propTypes = {
	getCurrentOrientation: PropTypes.func.isRequired,
	orientation: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	orientation: state.orientation
})

export default compose(withStyles(landingPageStyle))(
	connect(mapStateToProps, { getCurrentOrientation })(withRouter(OrientationAdminPage))
)
