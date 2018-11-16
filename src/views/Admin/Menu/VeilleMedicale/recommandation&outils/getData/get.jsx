import React from 'react'
import { Link } from 'react-router-dom'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentRecommandation } from 'actions/menu/veillemedicale/recommandationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Recommandation from './recommandation'
class SectionRecommandations extends React.Component {
	componentDidMount() {
		this.props.getCurrentRecommandation()
	}

	render() {
		const { classes, ...rest } = this.props
		const { recommandation } = this.props.recommandation
		const DataElements = recommandation.map((recommandation) => <Recommandation recommandation={recommandation} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<Link to="/admin/menu/veillemedicale/recommandation&outils/post">
									<Button justIcon round color="green">
										{' '}
										Post
									</Button>
								</Link>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Recommandations et outils
								</h2>
								<br />

								{DataElements}
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

SectionRecommandations.propTypes = {
	getCurrentRecommandation: PropTypes.func.isRequired,
	recommandation: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	recommandation: state.recommandation
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRecommandation })(withRouter(SectionRecommandations))
)
