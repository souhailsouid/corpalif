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
import { getCurrentStructure_idHAD, deleteStructure_idHAD } from 'actions/SEINEETMARNEActions'
import { connect } from 'react-redux'

class GetSEINEETMARNESTRUCTURES extends Component {
	componentDidMount() {
		this.props.getCurrentStructure_idHAD(this.props.match.params.id)
	}
	onDeleteClick() {
		this.props.deleteStructure_idHAD(this.props.match.params.id)
	}

	render() {
		const { soin } = this.props.soin
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
							{soin.name}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', justifyContent: 'space-between' }}>
							{soin.adresse}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{soin.phone}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							{soin.email}
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'right' }}>
							<Link to={`/admin/delete/HAUTDESEINE/usp/${soin._id}`}>{deleteButton}</Link>
						</Grid>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}
GetSEINEETMARNESTRUCTURES.propTypes = {
	getCurrentStructure_idHAD: PropTypes.func.isRequired,
	soin: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idHAD: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	soin: state.soin,
	soins: state.soins
})

export default connect(mapStateToProps, { getCurrentStructure_idHAD, deleteStructure_idHAD })(
	withRouter(GetSEINEETMARNESTRUCTURES)
)
