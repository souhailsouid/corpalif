import React from 'react'
import { Link } from 'react-router-dom'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentOffre } from 'actions/HomePage/notificationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Offre from './table'
class SectionOffreAdmin extends React.Component {
	componentDidMount() {
		this.props.getCurrentOffre()
	}

	render() {
		const { classes, ...rest } = this.props
		const { offre } = this.props.offre
		const DataElements = offre.map((offre) => <Offre offre={offre} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={4} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									offre
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

SectionOffreAdmin.propTypes = {
	getCurrentOffre: PropTypes.func.isRequired,
	offre: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	offre: state.offre
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentOffre })(withRouter(SectionOffreAdmin))
)
