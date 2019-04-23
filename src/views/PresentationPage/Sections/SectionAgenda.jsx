import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Agenda1 from './notification/agenda1'
import Agenda2 from './notification/agenda2'
import Agenda3 from './notification/agenda3'
import GridItem from 'components/Grid/GridItem.jsx'
// Redux"

import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentAgenda1, getCurrentAgenda2, getCurrentAgenda3 } from 'actions/HomePage/notificationActions'
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
		this.props.getCurrentAgenda3()
	}
	render() {
		const { agenda1 } = this.props.agenda1
		const { agenda2 } = this.props.agenda2
		const { agenda3 } = this.props.agenda3
		const { classes } = this.props
		const Agenda1Elements = agenda1.map((agenda1) => <Agenda1 agenda1={agenda1} />)
		const Agenda2Elements = agenda2.map((agenda2) => <Agenda2 agenda2={agenda2} />)
		const Agenda3Elements = agenda3.map((agenda3) => <Agenda3 agenda3={agenda3} />)
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<div className={classes.container}>
						<div className={classes.title}>
							<div>
								<img
									alt=""
									aria-hidden="true"
									src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png"
									srcset="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/calendar_48dp.png 2x "
									style={{ width: '40px', height: '40px', lineHeight: '74px' }}
								/>

								<span
									style={{
										textDecoration: 'none',
										fontFamily: 'Product Sans,Arial,sans-serif',
										fontSize: '22px',
										// lineHeight: '14px',
										top: '-1.5px',
										verticalAlign: 'middle'
									}}
								>
									Agenda
								</span>
							</div>
						</div>
						{Agenda1Elements}
						{Agenda2Elements}
						{Agenda3Elements}
					</div>
				</GridItem>
			</GridContainer>
		)
	}
}

SectionNotifications.propTypes = {
	getCurrentAgenda1: PropTypes.func.isRequired,
	getCurrentAgenda2: PropTypes.func.isRequired,
	getCurrentAgenda3: PropTypes.func.isRequired,
	agenda1: PropTypes.object.isRequired,
	agenda2: PropTypes.object.isRequired,
	agenda3: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	agenda1: state.agenda1,
	agenda2: state.agenda2,
	agenda3: state.agenda3
})

export default compose(withStyles(notificationsStyles))(
	connect(mapStateToProps, { getCurrentAgenda1, getCurrentAgenda2, getCurrentAgenda3 })(
		withRouter(SectionNotifications)
	)
)
