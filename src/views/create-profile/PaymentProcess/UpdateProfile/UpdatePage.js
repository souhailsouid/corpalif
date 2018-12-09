import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import EditProfile from './update'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'

class UpdateProfilePage extends Component {
	render() {
		const { classes } = this.props

		return (
			<div>
				<HeaderSearchBar />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ height: 'auto' }}>
					<EditProfile />
				</div>
			</div>
		)
	}
}

UpdateProfilePage.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(presentationStyle)(UpdateProfilePage)
