import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

const FileUpload = ({ file, classes }) => (
	<div>
		<ListItem className={classes.listItem}>
			<a href={"/formulaired'admission"} target="_blank" rel="noopener noreferrer">
				<Tooltip
					id="tooltip-bottom"
					title="Formulaire d'admission en USP"
					placement="bottom"
					classes={{ tooltip: classes.tooltip }}
				>
					<i
						class="material-icons"
						style={{ color: '#cc4949', fontSize: '48px', marginLeft: 'auto', marginRight: 'auto' }}
					>
						description
					</i>
				</Tooltip>
			</a>
		</ListItem>
	</div>
)

export default withStyles(headerLinksStyle)(FileUpload)
