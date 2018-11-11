import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})
const TextAreaFieldGroup = ({ name, placeholder, value, error, onChange, InputProps, classes, info }) => {
	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<TextField
					InputProps={InputProps}
					multiline
					fullWidth
					placeholder={placeholder}
					name={name}
					className={classes.textField}
					value={value}
					onChange={onChange}
					InputProps={InputProps}
				/>
				{info && <small className="form-text text-muted">{info}</small>}
				{error && (
					<div className="invalid-feedback" style={{ color: 'red' }}>
						{error}
					</div>
				)}
			</MuiThemeProvider>
		</div>
	)
}
TextAreaFieldGroup.propTypes = {
	name: PropTypes.string.isRequired,
	classes: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	InputProps: PropTypes.any,
	info: PropTypes.string
}

export default withStyles(contactsStyle)(TextAreaFieldGroup)
