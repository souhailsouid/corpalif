import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import PaymentParticulier from './Paymentmodal'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionAdherent from 'views/PresentationPage/Sections/SectionAdherent'
class PaymentPage extends Component {
	render() {
		const { classes } = this.props

		return (
			<div>
				<HeaderSearchBar />

				<div className={classNames(classes.main, classes.mainRaised)} style={{ height: 'auto' }}>
					<PaymentParticulier />
					<SectionAdherent />
				</div>
			</div>
		)
	}
}

PaymentPage.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(presentationStyle)(PaymentPage)
