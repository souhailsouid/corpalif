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
import Section from './Sections/Sections.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentAdherer } from 'actions/coordinationregionale/adhererActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
class AdhererAdminPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentAdherer()
	}
	render() {
		const { classes } = this.props
		const { adherentPage } = this.props.adherentPage
		const DataElements = adherentPage.map((adherentPage) => <Section adherentPage={adherentPage} />)

		return (
			<div>
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: 100 }}>
					<div className={classes.container}>
						{DataElements} <br />
					</div>

					<SectionFooter />
				</div>
			</div>
		)
	}
}
AdhererAdminPage.propTypes = {
	getCurrentAdherer: PropTypes.func.isRequired,
	adherentPage: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	adherentPage: state.adherentPage
})

export default compose(withStyles(landingPageStyle))(
	connect(mapStateToProps, { getCurrentAdherer })(withRouter(AdhererAdminPage))
)
