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

import PropTypes from 'prop-types'
import isEmpty from 'validation/is-empty'

class ProfilesItem extends React.Component {
	render() {
		const { classes } = this.props

		const { profile } = this.props

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
								<div>
									<b>
										<h7 style={{ color: '#0077B5' }}>Nom:</h7>
									</b>{' '}
									{/* {profile.user.name} <br />
									<b>
										<h7 style={{ color: '#0077B5' }}>Prenom:</h7>
									</b>{' '}
									{profile.user.last_name}
									<br />
									<b>
										<h7 style={{ color: '#0077B5' }}> Email:</h7>
									</b>{' '}
									{profile.user.email} <br />
									<b>
										<h7 style={{ color: '#0077B5' }}>Status</h7>
									</b>{' '}
									{profile.user.status}
									<br /> */}
								</div>
								{/* <div>
									<b>
										<h7 style={{ color: '#cc4949' }}>structure:</h7>
									</b>{' '}
									{/* {profile.structure} */}
								<br />
								<b>
									<h7 style={{ color: '#cc4949' }}> Company:</h7>
								</b>{' '}
								{/* {profile.company} */}
								<br />
								<b>
									<h7 style={{ color: '#cc4949' }}> Fonction:</h7>
								</b>{' '}
								{/* {profile.fonction} */}
								<br />
								<b>
									<h7 style={{ color: '#cc4949' }}> Location:</h7>
								</b>{' '}
								{isEmpty(profile.location) ? null : <span>{profile.location}</span>}
								<br />
								<b>
									<h7 style={{ color: '#cc4949' }}> Newsletter:</h7>
								</b>{' '}
								{/* {profile.newsletter} */}
								<br />
								<b>
									<h7 style={{ color: '#cc4949' }}> Adherent:</h7>
								</b>{' '}
								{/* {profile.member} */}
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

ProfilesItem.propTypes = {
	profile: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

export default withStyles(profilePageStyle)(ProfilesItem)
