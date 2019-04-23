import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// sections for this page
import SectionContacts from 'views/PresentationPage/Sections/SectionContacts.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import SectionMissions from 'views/PresentationPage/Sections/SectionMissions'
import SectionActualite from 'views/PresentationPage/Sections/SectionActualite'
// sections CSS
import '../style.css'
import SectionCarroussel from 'views/PresentationPage/Sections/SectionCarroussel'
import SectionAdherent from 'views/PresentationPage/Sections/SectionAdherent'

function PresentationPage({ ...props }) {
	const { classes } = props

	return (
		<div>
			<HeaderSearchBar />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionCarroussel />

				<SectionActualite />
				<br />

				<SectionMissions />
				<SectionAdherent />

				<div className={classes.profile} style={{ marginTop: 140 }}>
					<SectionContacts id="contact" />
				</div>
				<SectionFooter />
			</div>
		</div>
	)
}

export default withStyles(presentationStyle)(PresentationPage)
