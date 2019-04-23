import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Article2 from './article2'
import GridItem from 'components/Grid/GridItem.jsx'
// Redux"
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentRecommandation } from 'actions/menu/veillemedicale/recommandationActions'

class SectionArticle2 extends React.Component {
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
		this.props.getCurrentRecommandation()
	}
	render() {
		const { recommandation } = this.props.recommandation

		const RecommandationElements = recommandation.map((recommandation) => (
			<Article2 recommandation={recommandation} />
		))
		var my_array = RecommandationElements
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

SectionArticle2.propTypes = {
	getCurrentRecommandation: PropTypes.func.isRequired,
	recommandation: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	actualite: state.actualite,
	recommandation: state.recommandation
})

export default compose(withStyles(notificationsStyles))(
	connect(mapStateToProps, { getCurrentRecommandation })(withRouter(SectionArticle2))
)
