import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentActualite_id } from 'actions/menu/veillemedicale/actualiteActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentActualite_id(this.props.match.params.id)
	}

	render() {
		const { actualite } = this.props.actualite

		return (
			<div>
				<embed
					src={`/api/${actualite.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentActualite_id: PropTypes.func.isRequired,
	actualite: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	actualite: state.actualite
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentActualite_id })(withRouter(Sectionfile))
)
