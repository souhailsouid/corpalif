import React from 'react'

// @material-ui/core components
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import HeaderComponent from 'views/Header/AppBar'
// Redux
import Spinner from 'views/common/Spinner'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getProfiles } from 'actions/profileActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ProfilesItem from './profilesItem'

class SectionProfilesNewsletter extends React.Component {
	componentDidMount() {
		this.props.getProfiles()
	}

	render() {
		const { classes } = this.props
		const { user } = this.props.auth
		const { profiles, loading, profile } = this.props.profile

		let dashboardProfiles
		if (profiles === null || loading) {
			dashboardProfiles = <Spinner />
		} else {
			if (profiles.length > 0) {
				dashboardProfiles = profiles.map((profile) => <ProfilesItem key={profile._id} profile={profile} />)
			} else {
				dashboardProfiles = <div>sdodok</div>
			}
		}

		return (
			<div>
				<HeaderComponent />
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={12} style={{ marginTop: 200 }}>
								<div className={classes.profile}>
									<div className={classes.name}>
										<h2 className={classes.title} style={{ textAlign: 'center' }}>
											{' '}
											Utilisateurs : Newsletter
										</h2>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<GridContainer>
							<GridItem xs={12} sm={12} md={12}>
								<br />

								{dashboardProfiles}
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

SectionProfilesNewsletter.propTypes = {
	getProfiles: PropTypes.func.isRequired,

	profile: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,

	auth: state.auth
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getProfiles })(withRouter(SectionProfilesNewsletter))
)
