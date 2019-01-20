import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentAdherer_id } from 'actions/coordinationregionale/adhererActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentAdherer_id(this.props.match.params.id)
	}

	render() {
		const { adherentPage } = this.props.adherentPage

		return (
			<div>
				<embed
					src={`/api/${adherentPage.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentAdherer_id: PropTypes.func.isRequired,
	adherentPage: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	adherentPage: state.adherentPage
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentAdherer_id })(withRouter(Sectionfile))
)
