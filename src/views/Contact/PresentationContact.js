import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import SectionFooter from 'views/Footer/SectionFooter'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
import HeaderComponent from 'views/Header/AppBar.jsx'

import SectionContacts from 'views/PresentationPage/Sections/SectionContacts.jsx'

class PresentationContact extends React.Component {
	render() {
		return (
			<div>
				<div>
					<HeaderComponent />
					<div style={{ marginTop: 30 }}>
						<SectionContacts />
					</div>
					<SectionFooter />
				</div>
			</div>
		)
	}
}

export default withStyles(javascriptStyles)(PresentationContact)
