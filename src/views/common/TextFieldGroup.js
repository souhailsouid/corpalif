import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})
const TextFieldGroup = ({
	label,
	name,
	placeholder,
	value,
	error,
	type,
	onChange,
	disabled,
	InputProps,
	info,
	helperText
}) => {
	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<TextField
					fullWidth
					helperText={helperText}
					label={label}
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					disabled={disabled}
					InputProps={InputProps}
				/>
				{info && <small className="form-text text-muted">{info}</small>}
				{error && (
					<div className="invalid-feedback" style={{ color: 'red' }}>
						{error}{' '}
					</div>
				)}
				{helperText && (
					<div className="invalid-feedback" style={{ color: 'green' }}>
						{helperText}{' '}
					</div>
				)}
			</MuiThemeProvider>
		</div>
	)
}
TextFieldGroup.propTypes = {
	helperText: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.string,
	info: PropTypes.string,
	InputProps: PropTypes.any
}

TextFieldGroup.defaultProps = {
	type: 'text'
}
export default TextFieldGroup
