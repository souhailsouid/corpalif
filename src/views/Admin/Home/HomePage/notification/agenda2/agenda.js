import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentAgenda2 } from 'actions/HomePage/notificationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Agenda from './table'
import HeaderComponent from 'views/Header/AppBar.jsx'
class SectionAgenda2Admin extends React.Component {
	componentDidMount() {
		this.props.getCurrentAgenda2()
	}

	render() {
		const { classes, ...rest } = this.props
		const { agenda2 } = this.props.agenda2
		const DataElements = agenda2.map((agenda2) => <Agenda agenda2={agenda2} />)

		return (
			<div className="cd-section" {...rest}>
				<HeaderComponent />
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={4} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Agenda2
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

SectionAgenda2Admin.propTypes = {
	getCurrentAgenda2: PropTypes.func.isRequired,
	agenda2: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	agenda2: state.agenda2
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentAgenda2 })(withRouter(SectionAgenda2Admin))
)
