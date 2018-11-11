import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
class SectionsOffres extends React.Component {
	render() {
		const { classes } = this.props

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

					<Clearfix />
				</div>
			</GridContainer>
		)
	}
}

export default withStyles(notificationsStyles)(SectionsOffres)
