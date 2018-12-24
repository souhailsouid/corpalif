import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// sections for this page
import SectionContacts from 'views/PresentationPage/Sections/SectionContacts.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import SectionInfo from 'views/PresentationPage/Sections/SectionInfo.jsx'
import SectionMissions from 'views/PresentationPage/Sections/SectionMissions'
// sections CSS
import '../../style.css'
import SectionCarroussel from 'views/PresentationPage/Sections/SectionCarroussel'
import SectionAdherent from 'views/PresentationPage/Sections/SectionAdherent'
import HeaderSearchBarConnection from 'views/Header/HeaderSearchBarConnection'

function PaymentLoginPage({ ...props }) {
	const { classes } = props

	return (
		<div>
			<HeaderSearchBarConnection />

			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionCarroussel />
				<SectionMissions />
				<SectionAdherent />
				<SectionInfo />

				<div className={classes.profile} id="contact">
					<SectionContacts id="contact" />
				</div>
				<SectionFooter />
			</div>
		</div>
	)
}

export default withStyles(presentationStyle)(PaymentLoginPage)
