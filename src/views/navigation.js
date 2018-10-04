import React from 'react'

// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import styles from 'assets/jss/material-kit-pro-react/customSelectStyle.jsx'

class Navigation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			simpleSelect: ''
		}
	}
	handleSimple = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}
	handleMultiple = (event) => {
		this.setState({ multipleSelect: event.target.value })
	}
	render() {
		const { classes } = this.props
		return (
			<GridContainer>
				<GridItem xs={10} sm={5} md={4} lg={4}>
					<FormControl fullWidth className={classes.selectFormControl} style={{ backgroundColor: '#fff' }}>
						<InputLabel htmlFor="simple-select" style={{ marginLeft: 120 }}>
							<b>Categories</b>
						</InputLabel>
						<Select
							MenuProps={{
								className: classes.selectMenu
							}}
							classes={{
								select: classes.select
							}}
							value={this.state.simpleSelect}
							onChange={this.handleSimple}
							inputProps={{
								name: 'simpleSelect',
								id: 'simple-select'
							}}
						>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="2"
							>
								Unités de soins palliatifs
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="3"
							>
								Lits identifiés soins palliatifs
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="4"
							>
								Réseaux de soins palliatifs
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="5"
							>
								Équipes mobiles de soins palliatifs
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="6"
							>
								Hospitalisation à domicile
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="7"
							>
								Associations de bénévoles
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="8"
							>
								Autres structures
							</MenuItem>
						</Select>
					</FormControl>
				</GridItem>
			</GridContainer>
		)
	}
}

export default withStyles(styles)(Navigation)
