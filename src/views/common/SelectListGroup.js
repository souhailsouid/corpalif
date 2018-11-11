import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import NativeSelect from '@material-ui/core/NativeSelect'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})
const styles = (theme) => ({
	formControl: {
		margin: 'auto',
		width: '100%'
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	}
})
const SelectListGroup = ({ name, value, error, onChange, options, classes }) => {
	const selectOptions = options.map((option) => (
		<option key={option.label} value={option.value}>
			{option.label}
		</option>
	))

	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<FormControl className={classes.formControl}>
					<NativeSelect name={name} value={value} onChange={onChange} className={classes.selectEmpty}>
						<option value="Select Professional Status" disabled>
							Select Professional Status
						</option>

						{selectOptions}
					</NativeSelect>
					{error && (
						<div className="invalid-feedback" style={{ color: 'red' }}>
							{error}
						</div>
					)}
				</FormControl>
			</MuiThemeProvider>
		</div>
	)
}
SelectListGroup.propTypes = {
	name: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	InputProp: PropTypes.any,
	options: PropTypes.array.isRequired
}

export default withStyles(styles)(SelectListGroup)
