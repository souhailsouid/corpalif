import React from 'react'
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from 'components/Grid/GridContainer.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar'
import SectionFooter from 'views/Footer/SectionFooter'
import SectionRencontre from './get.jsx'
import Spinner from 'views/common/Spinner'
// Redux
import SectionAdherent from 'views/Dashboard/blockAdherent'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getCurrentProfile } from 'actions/profileActions'
class PresentationInfoAdherents extends React.Component {
	componentDidMount() {
		this.props.getCurrentProfile()
	}

	render() {
		const { classes } = this.props
		const { profile, loading } = this.props.profile

		let dashboardContent
		let end = new Date().getFullYear()

		if (profile === null || loading) {
			dashboardContent = <Spinner />
		} else {
			if (profile.member === undefined) {
				dashboardContent = (
					<div>
						<p>
							<b>404 ERROR</b>
						</p>
					</div>
				)
			} else {
				console.log(profile.adherent[0])
				if (Object.values(profile.adherent[0].date).slice(0, 4).join('') == end) {
					dashboardContent = (
						<div>
							<SectionRencontre />
						</div>
					)
				} else {
					// console.log(Object.values(profile.adherent[0].date).slice(0, 4).join('') != end)
					if (Object.values(profile.adherent[0].date).slice(0, 4).join('') != end) {
						dashboardContent = (
							<div>
								<h2 style={{ textAlign: 'center' }}>
									Oups, l'année de votre adhésion à expirée, merci de votre fidelité ! <br />
									<h3>
										<b>L'équipe Corpalif</b>
									</h3>
								</h2>
								<br />
								<br />
								<br />
								<div>
									<SectionAdherent />
								</div>
							</div>
						)
					}
				}
			}
		}

		return (
			<div>
				<HeaderSearchBar />

				<div className={classNames(classes.main, classes.mainRaised)}>
					<GridContainer justify="center">{dashboardContent}</GridContainer>
					<SectionFooter />
				</div>

				<div />
			</div>
		)
	}
}
PresentationInfoAdherents.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	profile: state.profile,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentProfile })(withRouter(PresentationInfoAdherents))
)
