import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentEvenement_id } from 'actions/menu/veillemedicale/evenementActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentEvenement_id(this.props.match.params.id)
	}

	render() {
		const { evenement } = this.props.evenement

		return (
			<div>
				<embed
					src={`/api/${evenement.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentEvenement_id: PropTypes.func.isRequired,
	evenement: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	evenement: state.evenement
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentEvenement_id })(withRouter(Sectionfile))
)
