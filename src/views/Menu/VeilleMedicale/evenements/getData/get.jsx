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
import { getCurrentEvenement } from 'actions/menu/veillemedicale/evenementActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Evenement from './evenement'
class SectionEvenement extends React.Component {
	componentDidMount() {
		this.props.getCurrentEvenement()
	}

	render() {
		const { classes, ...rest } = this.props
		const { evenement } = this.props.evenement
		const DataElements = evenement.map((evenement) => <Evenement evenement={evenement} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Evenements
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

SectionEvenement.propTypes = {
	getCurrentEvenement: PropTypes.func.isRequired,
	evenement: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	evenement: state.evenement
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentEvenement })(withRouter(SectionEvenement))
)
