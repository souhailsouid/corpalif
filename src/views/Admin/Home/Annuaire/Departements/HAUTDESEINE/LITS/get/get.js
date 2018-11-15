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
import { getCurrentStructure_idLITS, deleteStructure_idLITS } from 'actions/HAUTDESEINEActions'
import { connect } from 'react-redux'

class GetHAUTDESEINELITS extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_idLITS(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_idLITS(this.props.match.params.id)
	}

	render() {
		const { lit } = this.props.lit
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
							{lit.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{lit.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{lit.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{lit.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/HAUTDESEINE/lits/${lit._id}`}>{deleteButton}</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetHAUTDESEINELITS.propTypes = {
	getCurrentStructure_idLITS: PropTypes.func.isRequired,
	lit: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idLITS: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	lit: state.lit,
	lits: state.lits
})

export default connect(mapStateToProps, { getCurrentStructure_idLITS, deleteStructure_idLITS })(
	withRouter(GetHAUTDESEINELITS)
)
