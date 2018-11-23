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
import { getCurrentAdherent } from 'actions/HomePage/carousselActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Adherent from './table'
class SectionadherentAdmin extends React.Component {
	componentDidMount() {
		this.props.getCurrentAdherent()
	}

	render() {
		const { classes, ...rest } = this.props
		const { adherent } = this.props.adherent
		const DataElements = adherent.map((adherent) => <Adherent adherent={adherent} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									caroussels
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

SectionadherentAdmin.propTypes = {
	getCurrentAdherent: PropTypes.func.isRequired,
	adherent: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	adherent: state.adherent
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentAdherent })(withRouter(SectionadherentAdmin))
)
