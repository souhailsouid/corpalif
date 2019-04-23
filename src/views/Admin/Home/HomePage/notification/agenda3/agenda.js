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
import { getCurrentAgenda3 } from 'actions/HomePage/notificationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Agenda from './table'
import HeaderComponent from 'views/Header/AppBar.jsx'
class SectionAgenda3Admin extends React.Component {
	componentDidMount() {
		this.props.getCurrentAgenda3()
	}

	render() {
		const { classes, ...rest } = this.props
		const { agenda3 } = this.props.agenda3
		const DataElements = agenda3.map((agenda3) => <Agenda agenda3={agenda3} />)

		return (
			<div className="cd-section" {...rest}>
				<HeaderComponent />
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={4} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Agenda3
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

SectionAgenda3Admin.propTypes = {
	getCurrentAgenda3: PropTypes.func.isRequired,
	agenda3: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	agenda3: state.agenda3
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentAgenda3 })(withRouter(SectionAgenda3Admin))
)
