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
import { getCurrentActualite } from 'actions/menu/veillemedicale/actualiteActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Actualite from './actualite'
class SectionActualite extends React.Component {
	componentDidMount() {
		this.props.getCurrentActualite()
	}

	render() {
		const { classes, ...rest } = this.props
		const { actualite } = this.props.actualite
		const DataElements = actualite.map((actualite) => <Actualite actualite={actualite} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<Link to="/admin/menu/veillemedicale/actualite/post">
									<Button justIcon round color="green">
										{' '}
										Post
									</Button>
								</Link>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Actualites
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

SectionActualite.propTypes = {
	getCurrentActualite: PropTypes.func.isRequired,
	actualite: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	actualite: state.actualite
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentActualite })(withRouter(SectionActualite))
)