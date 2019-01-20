import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentRencontre_id_inscrit } from 'actions/menu/veillemedicale/rencontre_adherentActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Sectionfile extends React.Component {
	componentDidMount() {
		this.props.getCurrentRencontre_id_inscrit(this.props.match.params.id)
	}

	render() {
		const { privateInfoAdherent } = this.props.privateInfoAdherent

		return (
			<div>
				<embed
					src={`/api/${privateInfoAdherent.file}`}
					type="application/pdf"
					style={{ minWidth: '100%', height: '1000px' }}
				/>
			</div>
		)
	}
}

Sectionfile.propTypes = {
	getCurrentRencontre_id_inscrit: PropTypes.func.isRequired,
	privateInfoAdherent: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	privateInfoAdherent: state.privateInfoAdherent
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRencontre_id_inscrit })(withRouter(Sectionfile))
)
