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
import { getCurrentStructure_idTEAM, deleteStructure_idTEAM } from 'actions/SEINEETMARNEActions'
import { connect } from 'react-redux'

class GetSEINEETMARNEHAD extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_idTEAM(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_idTEAM(this.props.match.params.id)
	}

	render() {
		const { had } = this.props.had
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
							{had.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{had.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{had.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{had.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/SEINEETMARNE/had/${had._id}`}>{deleteButton}</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetSEINEETMARNEHAD.propTypes = {
	getCurrentStructure_idTEAM: PropTypes.func.isRequired,
	had: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idTEAM: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	had: state.had,
	hads: state.hads
})

export default connect(mapStateToProps, { getCurrentStructure_idTEAM, deleteStructure_idTEAM })(
	withRouter(GetSEINEETMARNEHAD)
)
