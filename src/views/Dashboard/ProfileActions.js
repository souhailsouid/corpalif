import React from 'react'

import { Link } from 'react-router-dom'
// @material-ui/core components
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

import GridItem from 'components/Grid/GridItem.jsx'

const ProfileActions = () => {
	return (
		<div className="btn-group mb-4" role="group">
			<Link to="/edit-profile" className="btn btn-light" style={{ color: '#cc4949' }}>
				<b>
					{' '}
					<i className="fas fa-user-circle text-info mr-1" /> Editer mon Profil
				</b>
			</Link>
			<div style={{ display: 'block' }} />
		</div>
	)
}

export default withStyles(javascriptStyles)(ProfileActions)
