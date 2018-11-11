import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import TextField from '@material-ui/core/TextField'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})
const InputGroup = ({ name, placeholder, value, error, onChange, InputProps, type, icon }) => {
	return (
		<div classnames="input-group mb-3">
			<div className="input-group-prepend">
				<span className="input-group-text">
					<i className={icon} />
				</span>
			</div>
			<MuiThemeProvider theme={theme}>
				<input
					type={type}
					className={classnames('form-control form-control-lg', {
						'is-invalid': error
					})}
					fullWidth
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					InputProps={InputProps}
				/>
				{error && (
					<div className="invalid-feedback" style={{ color: 'red' }}>
						{error}
					</div>
				)}
			</MuiThemeProvider>
		</div>
	)
}
InputGroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	icon: PropTypes.string,
	typeerror: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	InputProp: PropTypes.any
}
InputGroup.defaultProps = {
	type: 'text'
}
export default InputGroup
