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
import { getCurrentFormation } from 'actions/menu/formations/formationsActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Formation from './formation'
class SectionFormation extends React.Component {
	componentDidMount() {
		this.props.getCurrentFormation()
	}

	render() {
		const { classes, ...rest } = this.props
		const { formation } = this.props.formation
		const DataElements = formation.map((formation) => <Formation formation={formation} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<Link to="/admin/menu/formations/post">
									<Button justIcon round color="green">
										{' '}
										Post
									</Button>
								</Link>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Formations
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

SectionFormation.propTypes = {
	getCurrentFormation: PropTypes.func.isRequired,
	formation: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	formation: state.formation
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentFormation })(withRouter(SectionFormation))
)
