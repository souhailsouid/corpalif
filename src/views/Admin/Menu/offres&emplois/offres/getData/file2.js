import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentOffredemploi_id } from 'actions/menu/offresdemploi/offreActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentOffredemploi_id(this.props.match.params.id)
	}

	render() {
		const { offreemploi } = this.props.offreemploi

		return (
			<div>
				<embed
					src={`/api/${offreemploi.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentOffredemploi_id: PropTypes.func.isRequired,
	offreemploi: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	offreemploi: state.offreemploi
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentOffredemploi_id })(withRouter(Sectionfile))
)
