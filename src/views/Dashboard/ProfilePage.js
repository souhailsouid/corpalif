import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import ProfileData from './profileData'
import HeaderComponent from 'views/Header/AppBar.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'

class ProfilePagePresentation extends Component {
	render() {
		const { classes } = this.props

		return (
			<div>
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ height: 'auto', marginTop: 80 }}>
					<ProfileData />
				</div>
			</div>
		)
	}
}

ProfilePagePresentation.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(presentationStyle)(ProfilePagePresentation)
