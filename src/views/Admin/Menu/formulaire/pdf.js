import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionfileAdmin from './file2'
// section CSS

class FilePDF extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		return (
			<div>
				<SectionfileAdmin />
			</div>
		)
	}
}

export default withStyles(presentationStyle)(FilePDF)
