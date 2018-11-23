import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'
import ListItem from '@material-ui/core/ListItem'
import Icon from '@material-ui/core/Icon'
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
				<Icon className={classes.dropdownIcons}>content_paste</Icon> Formulaire <br />d'admission
			</Button>
		</ListItem>
	</div>
)

export default withStyles(headerLinksStyle)(FileUpload)
