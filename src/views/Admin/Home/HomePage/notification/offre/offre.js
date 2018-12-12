import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderComponent from 'views/Header/AppBar.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentnotificationOffre } from 'actions/HomePage/notificationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Offre from './table'
class SectionOffreAdmin extends React.Component {
	componentDidMount() {
		this.props.getCurrentnotificationOffre()
	}

	render() {
		const { classes, ...rest } = this.props
		const { notificationoffre } = this.props.notificationoffre
		const DataElements = notificationoffre.map((notificationoffre) => (
			<Offre notificationoffre={notificationoffre} />
		))

		return (
			<div className="cd-section" {...rest}>
				<HeaderComponent />
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
	getCurrentnotificationOffre: PropTypes.func.isRequired,
	notificationoffre: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	notificationoffre: state.notificationoffre
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentnotificationOffre })(withRouter(SectionOffreAdmin))
)
