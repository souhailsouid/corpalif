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
import { getCurrentRencontre_inscrit } from 'actions/menu/veillemedicale/rencontre_inscritActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Rencontre from './rencontre'
class SectionRencontre extends React.Component {
	componentDidMount() {
		this.props.getCurrentRencontre_inscrit()
	}

	render() {
		const { classes, ...rest } = this.props
		const { privateInfo } = this.props.privateInfo
		const DataElements = privateInfo.map((privateInfo) => <Rencontre privateInfo={privateInfo} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<Link to="/admin/menu/veillemedicale/privateinfo/post">
									<Button justIcon round color="green">
										{' '}
										Post
									</Button>
								</Link>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Nos Rencontres (contenus privées)
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

SectionRencontre.propTypes = {
	getCurrentRencontre_inscrit: PropTypes.func.isRequired,
	privateInfo: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	privateInfo: state.privateInfo
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRencontre_inscrit })(withRouter(SectionRencontre))
)
