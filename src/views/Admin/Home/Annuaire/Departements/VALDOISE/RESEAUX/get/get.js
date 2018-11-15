import React, { Component } from 'react'
// @material-ui/core components
// material-ui icons

import Edit from '@material-ui/icons/Edit'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'

// Redux
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { getCurrentStructure_idReseaux, deleteStructure_idReseaux } from 'actions/VALDOISEActions'
import { connect } from 'react-redux'

class GetVALDOISERESEAUX extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_idReseaux(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_idReseaux(this.props.match.params.id)
	}

	render() {
		const { reseaux } = this.props.reseaux
		const deleteButton = [ { color: 'success', icon: Edit } ].map((prop, key) => {
			return (
				<Button onClick={this.onDeleteClick.bind(this)} round justIcon size="sm" color={prop.color} key={key}>
					<prop.icon />
				</Button>
			)
		})
		return (
			<div>
				<GridContainer>
					<GridItem
						xs={12}
						sm={10}
						md={12}
						style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30, flewWrap: 'wrap' }}
					>
						<Grid item xs={4}>
							{reseaux.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{reseaux.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{reseaux.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{reseaux.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/VALDOISE/usp/${reseaux._id}`}>{deleteButton}</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetVALDOISERESEAUX.propTypes = {
	getCurrentStructure_idReseaux: PropTypes.func.isRequired,
	reseaux: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idReseaux: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	reseaux: state.reseaux,
	reseauxs: state.reseauxs
})

export default connect(mapStateToProps, { getCurrentStructure_idReseaux, deleteStructure_idReseaux })(
	withRouter(GetVALDOISERESEAUX)
)
