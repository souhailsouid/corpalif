import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentRecommandation_id } from 'actions/menu/veillemedicale/recommandationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentRecommandation_id(this.props.match.params.id)
	}

	render() {
		const { recommandation } = this.props.recommandation

		return (
			<div>
				<embed
					src={`/api/${recommandation.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentRecommandation_id: PropTypes.func.isRequired,
	evenement: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	recommandation: state.recommandation
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRecommandation_id })(withRouter(Sectionfile))
)
