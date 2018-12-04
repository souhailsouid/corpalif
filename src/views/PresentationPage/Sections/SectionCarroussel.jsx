import React from 'react'
// react component for creating beautiful carousel

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import SectionAgenda from './SectionAgenda'
import SectionOffres from './SectionOffres'

import Caroussel from './Caroussel'
// Redux
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentCaroussel } from 'actions/HomePage/carousselActions'

class SectionCarousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			caroussel: null,
			theme: '',
			message: '',
			picture: null,
			file: null,
			title: '',
			fileName: ''
		}
	}

	componentDidMount() {
		this.props.getCurrentCaroussel()
	}
	render() {
		const { caroussel } = this.props.caroussel

		const { classes } = this.props

		const DataElements = caroussel.map((caroussel) => <Caroussel caroussel={caroussel} />)
		return (
			<div className={classes.section} id="carousel">
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={8} className={classes.marginAuto} style={{ marginTop: 40 }}>
							<h3 className={classes.title} style={{ paddingBottom: 10, color: '#cc4949' }}>
								<i class="material-icons" style={{ color: '#cc4949' }}>
									description
								</i>{' '}
								ACTUALITÉS
							</h3>
							{DataElements}
						</GridItem>
						<div style={{ margin: 'auto' }}>
							<SectionAgenda />
							<SectionOffres />
						</div>
					</GridContainer>
				</div>
			</div>
		)
	}
}

SectionCarousel.propTypes = {
	getCurrentCaroussel: PropTypes.func.isRequired,
	caroussel: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	caroussel: state.caroussel
})

export default compose(withStyles(carouselStyle))(
	connect(mapStateToProps, { getCurrentCaroussel })(withRouter(SectionCarousel))
)
