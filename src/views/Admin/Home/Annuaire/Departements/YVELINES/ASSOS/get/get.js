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
import { getCurrentStructure_idAssos, deleteStructure_idAssos } from 'actions/YVELINESActions'
import { connect } from 'react-redux'

class GetYVELINESASSOS extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_idAssos(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_idAssos(this.props.match.params.id)
	}

	render() {
		const { association } = this.props.association
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
							{association.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{association.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{association.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{association.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/YVELINES/association/${association._id}`}>{deleteButton}</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetYVELINESASSOS.propTypes = {
	getCurrentStructure_idAssos: PropTypes.func.isRequired,
	association: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idAssos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	association: state.association,
	associations: state.associations
})

export default connect(mapStateToProps, { getCurrentStructure_idAssos, deleteStructure_idAssos })(
	withRouter(GetYVELINESASSOS)
)
