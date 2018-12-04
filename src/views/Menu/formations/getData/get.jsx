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
import { getCurrentFormation } from 'actions/menu/formations/formationsActions.jsx'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Formation from './Formation'
class SectionFormations extends React.Component {
	componentDidMount() {
		this.props.getCurrentFormation()
	}

	render() {
		const { classes, ...rest } = this.props
		const { formation } = this.props.formation
		const DataElements = formation.map((formation) => <Formation formation={formation} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={12} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Formations en Île-de-France
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

SectionFormations.propTypes = {
	getCurrentFormation: PropTypes.func.isRequired,
	formation: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	formation: state.formation
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentFormation })(withRouter(SectionFormations))
)
