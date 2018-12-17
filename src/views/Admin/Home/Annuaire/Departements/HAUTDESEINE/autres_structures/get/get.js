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
import {
	getCurrentStructure_id_autres_structures,
	deleteStructure_id_autres_structures
} from 'actions/HAUTDESEINEActions'
import { connect } from 'react-redux'

class GetHAUTDESEINEautres_structures extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_id_autres_structures(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_id_autres_structures(this.props.match.params.id)
	}

	render() {
		const { autres_structures } = this.props.autres_structures
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
							{autres_structures.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{autres_structures.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{autres_structures.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{autres_structures.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/HAUTDESEINE/autres_structures/${autres_structures._id}`}>
								{deleteButton}
							</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetHAUTDESEINEautres_structures.propTypes = {
	getCurrentStructure_id_autres_structures: PropTypes.func.isRequired,
	autres_structures: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_id_autres_structures: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	autres_structures: state.autres_structures
})

export default connect(mapStateToProps, {
	getCurrentStructure_id_autres_structures,
	deleteStructure_id_autres_structures
})(withRouter(GetHAUTDESEINEautres_structures))
