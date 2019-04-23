import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Article1 from './articles1'

import GridItem from 'components/Grid/GridItem.jsx'
// Redux"
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getCurrentActualite } from 'actions/menu/veillemedicale/actualiteActions'

class SectionArticles extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: '',
			theme: '',
			lieu: '',
			rue: '',
			city: ''
		}
	}

	componentDidMount() {
		this.props.getCurrentActualite()
	}
	render() {
		const { actualite } = this.props.actualite

		const ActualiteElements = actualite.map((actualite) => <Article1 actualite={actualite} />)

		var my_array = ActualiteElements
		var last_element = my_array.slice(-2).reverse()

		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<div className="article">{last_element}</div>
				</GridItem>
			</GridContainer>
		)
	}
}

SectionArticles.propTypes = {
	getCurrentActualite: PropTypes.func.isRequired,
	actualite: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	actualite: state.actualite
})

export default compose(withStyles(notificationsStyles))(
	connect(mapStateToProps, { getCurrentActualite })(withRouter(SectionArticles))
)
