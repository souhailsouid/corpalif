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
import { getCurrentStructure_id, deleteStructure_id } from 'actions/ESSONNEActions'
import { connect } from 'react-redux'

class GetUSPESSONNE extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_id(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_id(this.props.match.params.id)
	}

	render() {
		const { usp } = this.props.usp
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
							{usp.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{usp.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{usp.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{usp.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/ESSONNE/usp/${usp._id}`}>{deleteButton}</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetUSPESSONNE.propTypes = {
	getCurrentStructure_id: PropTypes.func.isRequired,
	usp: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_id: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	usp: state.usp,
	usps: state.usps
})

export default connect(mapStateToProps, { getCurrentStructure_id, deleteStructure_id })(withRouter(GetUSPESSONNE))
