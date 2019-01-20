import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import Sectionfile from './file2'
// section CSS

class EvenementFile extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		return (
			<div>
				<Sectionfile />
			</div>
		)
	}
}

export default withStyles(presentationStyle)(EvenementFile)
