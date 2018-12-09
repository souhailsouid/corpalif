import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// @material-ui/icons
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
// core components
import styles from 'assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx'

class RadioExample extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedEnabled: 'b'
		}
		this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
	}
	handleChangeEnabled(event) {
		this.setState({ selectedEnabled: event.target.value })
	}
	render() {
		const { classes } = this.props
		return (
			<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
				<div className={classes.checkboxAndRadio + ' ' + classes.checkboxAndRadioHorizontal}>
					<FormControlLabel
						control={
							<Radio
								checked={this.state.selectedEnabled === 'a'}
								onChange={this.handleChangeEnabled}
								value={this.state.status}
								name="radio button enabled"
								aria-label="A"
								icon={<FiberManualRecord className={classes.radioUnchecked} />}
								checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
								classes={{
									checked: classes.radio,
									root: classes.radioRoot
								}}
							/>
						}
						classes={{
							label: classes.label
						}}
						label="Individuel"
					/>

					<FormControlLabel
						control={
							<Radio
								checked={this.state.selectedEnabled === 'b'}
								onChange={this.handleChangeEnabled}
								value="b"
								name="radio button enabled"
								aria-label="B"
								icon={<FiberManualRecord className={classes.radioUnchecked} />}
								checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
								classes={{
									checked: classes.radio,
									root: classes.radioRoot
								}}
							/>
						}
						classes={{
							label: classes.label
						}}
						label="collectif"
					/>
				</div>
			</div>
		)
	}
}
export default withStyles(styles)(RadioExample)
