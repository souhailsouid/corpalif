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
import { getCurrentCaroussel } from 'actions/HomePage/carousselActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Caroussel from './table'
class SectioncarousselsAdmin extends React.Component {
	componentDidMount() {
		this.props.getCurrentCaroussel()
	}

	render() {
		const { classes, ...rest } = this.props
		const { caroussel } = this.props.caroussel
		const DataElements = caroussel.map((caroussel) => <Caroussel caroussel={caroussel} />)

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

SectioncarousselsAdmin.propTypes = {
	getCurrentCaroussel: PropTypes.func.isRequired,
	caroussel: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	caroussel: state.caroussel
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentCaroussel })(withRouter(SectioncarousselsAdmin))
)
