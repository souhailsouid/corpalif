import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
class SectionNotifications extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<GridContainer>
				<div className={`${classes.section} cd-section`} id="notifications">
					<div className={classes.container} style={{ paddingTop: 0 }}>
						<div />
						<div className={classes.title}>
							<h3 style={{ color: '#cc4949' }}>
								{' '}
								<i class="material-icons" style={{ color: '#cc4949' }}>
									date_range
								</i>{' '}
								EVÈNEMENTS
							</h3>
						</div>
					</div>

					<SnackbarContent
						message={
							<span>
								<b>18 juin 2018</b>
								<br />
								<b style={{ textAlign: 'left' }}>Assemblée au congrés nationale</b> <br />
								Maison medicale Corpalif <br />11 rue canard<br />78000 Paris
							</span>
						}
						close
						color="green"
					/>
					<SnackbarContent
						message={
							<span>
								<b>18 mars 2018</b>
								<br />
								<b style={{ textAlign: 'left' }}>Assemblée au congrés nationale</b>
								<br /> Maison medicale Corpalif <br />11 rue canard<br />78000 Paris
							</span>
						}
						close
						color="green"
					/>
					<SnackbarContent
						message={
							<span>
								<b>18 novembre 2018</b>
								<br />
								<b style={{ textAlign: 'left' }}>Assemblée au congrés nationale</b>
								<br /> Maison medicale Corpalif <br />11 rue canard<br />78000 Paris
							</span>
						}
						close
						color="green"
					/>
					<Clearfix />
				</div>
			</GridContainer>
		)
	}
}

export default withStyles(notificationsStyles)(SectionNotifications)
