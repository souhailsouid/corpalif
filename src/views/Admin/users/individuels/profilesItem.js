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
					<GridItem xs={12} sm={12} md={12}>
						<div>
							<b />
							{profile.user.status === 'collectif' ? (
								<div> {profile.user.status === null}</div>
							) : (
								<Card style={{ width: '20rem', marginLeft: 'auto', marginRight: 'auto' }}>
									<CardBody>
										<b>
											<h7 style={{ color: '#0077B5' }}>Nom:</h7>
										</b>{' '}
										{profile.user.name} <br />
										<b>
											<h7 style={{ color: '#0077B5' }}>Prenom:</h7>
										</b>{' '}
										{profile.user.last_name}
										<br />
										<b>
											<h7 style={{ color: '#0077B5' }}> Email:</h7>
										</b>
										{profile.user.email} <br />
										<b>
											<h7 style={{ color: '#0077B5' }}>Status</h7>
										</b>
										{profile.user.status}
										<br />
										<b>
											<h7 style={{ color: '#cc4949' }}> Adherent:</h7>
											{isEmpty(profile.member) ? (
												<span> NON</span>
											) : (
												<span>{profile.member}</span>
											)}
										</b>
										<br />
										<b>
											<h7 style={{ color: '#cc4949' }}>structure:</h7>
										</b>{' '}
										{profile.structure}
										<br />
										<b>
											<h7 style={{ color: '#cc4949' }}> Company:</h7>
										</b>{' '}
										{profile.company}
										<br />
										<b>
											<h7 style={{ color: '#cc4949' }}> Fonction:</h7>
										</b>{' '}
										{profile.fonction}
										<br />
										<b>
											<h7 style={{ color: '#cc4949' }}> Location:</h7>
										</b>{' '}
										{isEmpty(profile.location) ? null : <span>{profile.location}</span>}
										<br />
										<b>
											<h7 style={{ color: '#cc4949' }}> Newsletter:</h7>
										</b>{' '}
										{profile.newsletter}
										<br />
										<br />
										<br />
										<br />
									</CardBody>
								</Card>
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
