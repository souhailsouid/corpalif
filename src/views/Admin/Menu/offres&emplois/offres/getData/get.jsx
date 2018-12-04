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
import { getCurrentOffredemploi } from 'actions/menu/offresdemploi/offreActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Offreemploi from './offre'
class Offresdemploi extends React.Component {
	componentDidMount() {
		this.props.getCurrentOffredemploi()
	}

	render() {
		const { classes, ...rest } = this.props
		const { offreemploi } = this.props.offreemploi
		const DataElements = offreemploi.map((offreemploi) => <Offreemploi offreemploi={offreemploi} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<Link to="/admin/menu/offres-emplois/post">
									<Button justIcon round color="green">
										{' '}
										Post
									</Button>
								</Link>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Offres d'emplois
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

Offresdemploi.propTypes = {
	getCurrentOffredemploi: PropTypes.func.isRequired,
	offreemploi: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	offreemploi: state.offreemploi
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentOffredemploi })(withRouter(Offresdemploi))
)
