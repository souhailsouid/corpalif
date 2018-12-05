import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import EditProfile from 'views/create-profile/update'
import HeaderComponent from 'views/Header/AppBar.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'

class UpdatePage extends Component {
	render() {
		const { classes } = this.props

		return (
			<div>
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ height: 'auto' }}>
					<EditProfile />
				</div>
			</div>
		)
	}
}

UpdatePage.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(presentationStyle)(UpdatePage)
