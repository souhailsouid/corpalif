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
import AllProfile from './table'
import TablesHead from './tablesHead'
class SectionProfilesAll extends React.Component {
	componentDidMount() {
		this.props.getProfiles()
	}

	render() {
		const { classes } = this.props
		const { user } = this.props.auth
		const { profiles, loading, profile } = this.props.profile
		// let users
		// if (profile === null || loading) {
		// 	users = <Spinner />
		// } else {
		// 	if (Object.keys(profile).length > 0) {
		// 		users = (
		// 			<div>
		// 				<b>
		// 					<h7 style={{ color: '#0077B5' }}>Nom:</h7>
		// 				</b>{' '}
		// 				{profile.user.name} <br />
		// 				<b>
		// 					<h7 style={{ color: '#0077B5' }}>Prenom:</h7>
		// 				</b>{' '}
		// 				{profile.user.last_name}
		// 				<br />
		// 				<b>
		// 					<h7 style={{ color: '#0077B5' }}> Email:</h7>
		// 				</b>{' '}
		// 				{profile.user.email} <br />
		// 				<b>
		// 					<h7 style={{ color: '#0077B5' }}>Status</h7>
		// 				</b>{' '}
		// 				{profile.user.status}
		// 				<br />
		// 				{profile.location}
		// 			</div>
		// 		)
		// 	} else {
		// 		users = <div>no profiles here</div>
		// 	}
		// }
		let dashboardProfiles
		if (profiles === null || loading) {
			dashboardProfiles = <Spinner />
		} else {
			if (profiles.length > 0) {
				dashboardProfiles = <h1>{profile.user.name}</h1>
				// dashboardProfiles = profiles.map((profile) => <ProfilesItem key={profile._id} profile={profile} />)
			} else {
				dashboardProfiles = <div> No profiles found ...</div>
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
											Utilisateurs : ALL
										</h2>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<GridContainer>
							<GridItem xs={12} sm={10} md={12}>
								<br />
								{/* {users} */}
								{/* {dashboardContent} */}
								{dashboardProfiles}
								{/* {DataElements} */}
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

SectionProfilesAll.propTypes = {
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
	connect(mapStateToProps, { getProfiles })(withRouter(SectionProfilesAll))
)
