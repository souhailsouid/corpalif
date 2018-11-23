import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Offre from './notification/offre'
// Redux
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentOffre } from 'actions/HomePage/notificationActions'
class SectionsOffres extends React.Component {
	componentDidMount() {
		this.props.getCurrentOffre()
	}
	render() {
		const { classes } = this.props
		const { offre } = this.props.offre

		const OffreElements = offre.map((offre) => <Offre offre={offre} />)
		return (
			<GridContainer>
				<div className={`${classes.section} cd-section`} id="notifications">
					<div className={classes.container}>
						<div />
						<div className={classes.title}>
							<h3 style={{ color: 'rgb(51, 116, 103)' }}>
								<i class="material-icons" style={{ color: 'rgb(51, 116, 103)' }}>
									work
								</i>{' '}
								OFFRES D'EMPLOIS
							</h3>
						</div>
					</div>
					{OffreElements}

					<Clearfix />
				</div>
			</GridContainer>
		)
	}
}
SectionsOffres.propTypes = {
	getCurrentOffre: PropTypes.func.isRequired,
	offre: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	offre: state.offre
})

export default compose(withStyles(notificationsStyles))(
	connect(mapStateToProps, { getCurrentOffre })(withRouter(SectionsOffres))
)
