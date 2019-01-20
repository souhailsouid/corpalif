import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentFormation_id } from 'actions/menu/formations/formationsActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentFormation_id(this.props.match.params.id)
	}

	render() {
		const { formation } = this.props.formation

		return (
			<div>
				<embed
					src={`/api/${formation.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentFormation_id: PropTypes.func.isRequired,
	formation: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	formation: state.formation
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentFormation_id })(withRouter(Sectionfile))
)
