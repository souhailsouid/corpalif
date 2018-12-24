import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'
import ListItem from '@material-ui/core/ListItem'
const FileUpload = ({ file, classes }) => (
	<div>
		<ListItem className={classes.listItem}>
			<Button
				href={`http://localhost:5000/api/${file.file}`}
				style={{ backgroundColor: '#cc4949', padding: 12 }}
				target="_blank"
				className={classes.navButton}
				round
			>
				Formulaire <br />d'admission
			</Button>
		</ListItem>
	</div>
)

export default withStyles(headerLinksStyle)(FileUpload)
