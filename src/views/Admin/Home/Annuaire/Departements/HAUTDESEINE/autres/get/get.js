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
import { getCurrentStructure_id_autres, deleteStructure_id_autres } from 'actions/HAUTDESEINEActions'
import { connect } from 'react-redux'

class GetHAUTDESEINEautres extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_id_autres(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_id_autres(this.props.match.params.id)
	}

	render() {
		const { autres } = this.props.autres
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
							{autres.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{autres.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{autres.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{autres.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/HAUTDESEINE/autres/${autres._id}`}>{deleteButton}</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetHAUTDESEINEautres.propTypes = {
	getCurrentStructure_id_autres: PropTypes.func.isRequired,
	autres: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_id_autres: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	autres: state.autres
})

export default connect(mapStateToProps, {
	getCurrentStructure_id_autres,
	deleteStructure_id_autres
})(withRouter(GetHAUTDESEINEautres))
