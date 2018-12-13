import React from 'react'

// @material-ui/core components

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'

import { cardTitle, cardLink, cardSubtitle } from 'assets/jss/material-kit-pro-react.jsx'
// Redux

import PropTypes from 'prop-types'
import isEmpty from 'validation/is-empty'
const style = {
	cardTitle,
	cardLink,
	cardSubtitle
}
class ProfilesItem extends React.Component {
	render() {
		const { profile } = this.props

		return (
			<div>
				<GridContainer>
					<GridItem xs={12} sm={10} md={12}>
						<div>
							<b />{' '}
							{profile.newsletter === 'non' ? (
								<div> {profile.newsletter === null}</div>
							) : (
								<div>{profile.user.email}</div>
							)}
						</div>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

ProfilesItem.propTypes = {
	profile: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(ProfilesItem)
