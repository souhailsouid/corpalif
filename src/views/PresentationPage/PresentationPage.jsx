import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// sections for this page
import SectionContacts from 'views/PresentationPage/Sections/SectionContacts.jsx'
// import SectionTeams from 'views/PresentationPage/Sections/SectionTeams.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import SectionInfo from 'views/PresentationPage/Sections/SectionInfo.jsx'
import SectionMissions from 'views/PresentationPage/Sections/SectionMissions'
// sections CSS
import '../style.css'
import SectionCarroussel from './Sections/SectionCarroussel'

class PresentationPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<HeaderSearchBar />

				<div className={classNames(classes.main, classes.mainRaised)}>
					<SectionCarroussel />
					<SectionMissions />
					<SectionInfo />

					<SectionContacts />
					<SectionFooter />
				</div>
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationPage)
