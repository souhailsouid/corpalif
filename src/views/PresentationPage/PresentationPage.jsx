import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// sections for this page
import SectionContacts from 'views/PresentationPage/Sections/SectionContacts.jsx'
import SectionTeams from 'views/PresentationPage/Sections/SectionTeams.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderComponent from '../Header/Header'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import SectionInfo from 'views/PresentationPage/Sections/SectionInfo.js'
// sections CSS
import '../style.css'

class PresentationPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<HeaderComponent />

				<div className={classNames(classes.main, classes.mainRaised)}>
					<SectionInfo />
					<SectionTeams />
					<SectionContacts />
					<SectionFooter />
				</div>
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationPage)
