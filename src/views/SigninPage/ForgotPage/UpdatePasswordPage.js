import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// sections for this page
import SectionMissions from 'views/PresentationPage/Sections/SectionMissions'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionCarroussel from 'views/PresentationPage/Sections/SectionCarroussel'
import SeConnecter from './UpdatePassword'
// sections CSS
import '../../style.css'

import HeaderSearchBar from 'views/Header/HeaderSearchBar'

function UpdatePasswordPage({ ...props }) {
	const { classes } = props
	return (
		<div>
			<HeaderSearchBar />

			<div className={classNames(classes.main, classes.mainRaised)}>
				<SeConnecter />
				<SectionCarroussel />
				<SectionMissions />
			</div>
		</div>
	)
}

export default withStyles(presentationStyle)(UpdatePasswordPage)
