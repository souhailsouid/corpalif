import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentRencontre_id } from 'actions/menu/veillemedicale/rencontreActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentRencontre_id(this.props.match.params.id)
	}

	render() {
		const { rencontre } = this.props.rencontre

		return (
			<div>
				<embed
					src={`/api/${rencontre.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentRencontre_id: PropTypes.func.isRequired,
	rencontre: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	rencontre: state.rencontre
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRencontre_id })(withRouter(Sectionfile))
)
