import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'

import Adherent from './adherent'
// Redux
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentAdherent } from 'actions/HomePage/carousselActions'

class SectionAdherent extends React.Component {
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
		this.props.getCurrentAdherent()
	}
	render() {
		const { adherent } = this.props.adherent

		const { classes } = this.props

		const DataElements = adherent.map((adherent) => <Adherent adherent={adherent} />)
		return (
			<div className={classes.section} id="carousel">
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={11} className={classes.marginAuto} style={{ marginTop: 40 }}>
							{/* <h3 className={classes.title} style={{ paddingBottom: 10, color: '#cc4949' }}>
								<i class="material-icons" style={{ color: '#cc4949' }}>
									description
								</i>{' '}
								ACTUALITÉS
							</h3> */}
							<a href="/adherents/">{DataElements}</a>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		)
	}
}

SectionAdherent.propTypes = {
	getCurrentAdherent: PropTypes.func.isRequired,
	adherent: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	adherent: state.adherent
})

export default compose(withStyles(carouselStyle))(
	connect(mapStateToProps, { getCurrentAdherent })(withRouter(SectionAdherent))
)
