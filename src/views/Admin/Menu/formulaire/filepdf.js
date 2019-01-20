import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'

const FileUpload = ({ file, classes }) => (
	<div>
		<embed
			src={`/api/${file.file}`}
			type="application/pdf"
			position="fixed"
			style={{ minWidth: '100%', height: '1000px' }}
		/>
	</div>
)

export default withStyles(carouselStyle)(FileUpload)
