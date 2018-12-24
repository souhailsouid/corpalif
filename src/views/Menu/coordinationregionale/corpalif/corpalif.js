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
import { getCurrentCorpalif } from 'actions/coordinationregionale/CorpalifActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
class CorpalifPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentCorpalif()
	}
	render() {
		const { classes } = this.props
		const { corpalif } = this.props.corpalif
		const DataElements = corpalif.map((corpalif) => <Section corpalif={corpalif} />)

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
CorpalifPage.propTypes = {
	getCurrentCorpalif: PropTypes.func.isRequired,
	corpalif: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	corpalif: state.corpalif
})

export default compose(withStyles(landingPageStyle))(
	connect(mapStateToProps, { getCurrentCorpalif })(withRouter(CorpalifPage))
)
