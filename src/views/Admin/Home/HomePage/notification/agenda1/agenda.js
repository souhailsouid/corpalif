import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'
import HeaderComponent from 'views/Header/AppBar.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentAgenda1 } from 'actions/HomePage/notificationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Agenda from './table'
class SectionAgenda1Admin extends React.Component {
	componentDidMount() {
		this.props.getCurrentAgenda1()
	}

	render() {
		const { classes, ...rest } = this.props
		const { agenda1 } = this.props.agenda1
		const DataElements = agenda1.map((agenda1) => <Agenda agenda1={agenda1} />)

		return (
			<div className="cd-section" {...rest}>
				<HeaderComponent />
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={4} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Agenda1
								</h2>
								<br />

								{DataElements}
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

SectionAgenda1Admin.propTypes = {
	getCurrentAgenda1: PropTypes.func.isRequired,
	agenda1: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	agenda1: state.agenda1
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentAgenda1 })(withRouter(SectionAgenda1Admin))
)
