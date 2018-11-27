import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentRencontre } from 'actions/menu/veillemedicale/rencontreActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Rencontre from './rencontre'
class SectionRencontre extends React.Component {
	componentDidMount() {
		this.props.getCurrentRencontre()
	}

	render() {
		const { classes, ...rest } = this.props
		const { rencontre } = this.props.rencontre
		const DataElements = rencontre.map((rencontre) => <Rencontre rencontre={rencontre} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Nos rencontres
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
	getCurrentRencontre: PropTypes.func.isRequired,
	rencontre: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	rencontre: state.rencontre
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRencontre })(withRouter(SectionRencontre))
)