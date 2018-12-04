import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentOffredemploi } from 'actions/menu/offresdemploi/offreActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Offre from './offre'
class SectionOffres extends React.Component {
	componentDidMount() {
		this.props.getCurrentOffredemploi()
	}

	render() {
		const { classes, ...rest } = this.props
		const { offreemploi } = this.props.offreemploi
		const DataElements = offreemploi.map((offreemploi) => <Offre offreemploi={offreemploi} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={12} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Offres d'emplois en Île-de-France
								</h2>
								<br />

								{DataElements}
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

SectionOffres.propTypes = {
	getCurrentOffredemploi: PropTypes.func.isRequired,
	offreemploi: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	offreemploi: state.offreemploi
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentOffredemploi })(withRouter(SectionOffres))
)
