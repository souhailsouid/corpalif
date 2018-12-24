import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import HeaderComponent from 'views/Header/AppBar'
import SectionFooter from 'views/Footer/SectionFooter'
import landingPageStyle from 'assets/jss/material-kit-pro-react/views/landingPageStyle.jsx'
// Sections for this page
import Section from './Sections/section.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentAccompagnement } from 'actions/soinspalliatifs/AccompagnementActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class AccompagnementRecommandation extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentAccompagnement()
	}
	render() {
		const { classes } = this.props
		const { accompagnement } = this.props.accompagnement
		const DataElements = accompagnement.map((accompagnement) => <Section accompagnement={accompagnement} />)
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
AccompagnementRecommandation.propTypes = {
	getCurrentAccompagnement: PropTypes.func.isRequired,
	accompagnement: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	accompagnement: state.accompagnement
})

export default compose(withStyles(landingPageStyle))(
	connect(mapStateToProps, { getCurrentAccompagnement })(withRouter(AccompagnementRecommandation))
)
