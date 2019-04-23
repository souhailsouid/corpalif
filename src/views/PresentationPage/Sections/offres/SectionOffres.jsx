import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import Offres from 'views/PresentationPage/Sections/offres/offres'
// Redux
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentAdherent } from 'actions/HomePage/carousselActions'

class SectionOffres extends React.Component {
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
		const DataElements = adherent.map((adherent) => <Offres adherent={adherent} />)
		return (
			<GridContainer>
				<a href="/#/offres-d'emplois">{DataElements}</a>
			</GridContainer>
		)
	}
}

SectionOffres.propTypes = {
	getCurrentAdherent: PropTypes.func.isRequired,
	adherent: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	adherent: state.adherent
})

export default compose(withStyles(carouselStyle))(
	connect(mapStateToProps, { getCurrentAdherent })(withRouter(SectionOffres))
)
