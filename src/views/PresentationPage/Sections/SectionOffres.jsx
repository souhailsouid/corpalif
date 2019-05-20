import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Offre from './notification/offre'
import GridItem from 'components/Grid/GridItem.jsx'
// Redux
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentnotificationOffre } from 'actions/HomePage/notificationActions'
class SectionsOffres extends React.Component {
	componentDidMount() {
		this.props.getCurrentnotificationOffre()
	}
	render() {
		const { classes } = this.props
		const { notificationoffre } = this.props.notificationoffre

		const OffreElements = notificationoffre.map((notificationoffre) => (
			<Offre notificationoffre={notificationoffre} />
		))
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<a href="/offres-d'emplois/">
						<div className={classes.container}>
							<div className={classes.title}>
								<h3 style={{ color: 'rgb(51, 116, 103)' }}>
									<i class="material-icons" style={{ color: 'rgb(51, 116, 103)' }}>
										work
									</i>{' '}
									OFFRES D'EMPLOI
								</h3>
							</div>
						</div>
						{OffreElements}
					</a>
					<Clearfix />
				</GridItem>
			</GridContainer>
		)
	}
}
SectionsOffres.propTypes = {
	getCurrentnotificationOffre: PropTypes.func.isRequired,
	notificationoffre: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	notificationoffre: state.notificationoffre
})

export default compose(withStyles(notificationsStyles))(
	connect(mapStateToProps, { getCurrentnotificationOffre })(withRouter(SectionsOffres))
)
