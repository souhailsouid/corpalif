import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Agenda1 from './notification/agenda1'
import Agenda2 from './notification/agenda2'
import GridItem from 'components/Grid/GridItem.jsx'
// Redux"
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentAgenda1, getCurrentAgenda2 } from 'actions/HomePage/notificationActions'
class SectionNotifications extends React.Component {
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
		this.props.getCurrentAgenda1()
		this.props.getCurrentAgenda2()
	}
	render() {
		const { agenda1 } = this.props.agenda1
		const { agenda2 } = this.props.agenda2

		const { classes } = this.props

		const Agenda1Elements = agenda1.map((agenda1) => <Agenda1 agenda1={agenda1} />)
		const Agenda2Elements = agenda2.map((agenda2) => <Agenda2 agenda2={agenda2} />)
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<a href="/#/menu/veillemedicale/evenements/">
						<div className={classes.container}>
							<div className={classes.title}>
								<h3 style={{ color: '#cc4949' }}>
									<i class="material-icons" style={{ color: '#cc4949' }}>
										date_range
									</i>{' '}
									AGENDA
								</h3>
							</div>
						</div>
						{Agenda1Elements}

						{Agenda2Elements}
					</a>
					<Clearfix />
				</GridItem>
			</GridContainer>
		)
	}
}

SectionNotifications.propTypes = {
	getCurrentAgenda1: PropTypes.func.isRequired,
	getCurrentAgenda2: PropTypes.func.isRequired,
	agenda1: PropTypes.object.isRequired,
	agenda2: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	agenda1: state.agenda1,
	agenda2: state.agenda2
})

export default compose(withStyles(notificationsStyles))(
	connect(mapStateToProps, { getCurrentAgenda1, getCurrentAgenda2 })(withRouter(SectionNotifications))
)
