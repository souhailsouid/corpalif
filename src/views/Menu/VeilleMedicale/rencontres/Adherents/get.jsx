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
import { getCurrentRencontre_inscrit } from 'actions/menu/veillemedicale/rencontre_adherentActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Rencontre from './rencontre'
class SectionRencontre extends React.Component {
	componentDidMount() {
		this.props.getCurrentRencontre_inscrit()
	}

	render() {
		const { classes, ...rest } = this.props
		const { privateInfoAdherent } = this.props.privateInfoAdherent
		const DataElements = privateInfoAdherent.map((privateInfoAdherent) => (
			<Rencontre privateInfoAdherent={privateInfoAdherent} />
		))

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Special Adherents(contenus privées)
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
	privateInfoAdherent: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	privateInfoAdherent: state.privateInfoAdherent
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRencontre_inscrit })(withRouter(SectionRencontre))
)
