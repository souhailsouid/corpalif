import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { prism } from 'react-syntax-highlighter/styles/prism'
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import IntegrationAutosuggest from './autosuggest'
import styles from 'assets/jss/material-kit-pro-react/customSelectStyle.jsx'
import IntegrationLocation from './Location'
class Example extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			simpleSelect: '',
			multipleSelect: []
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
				<GridItem xs={12} sm={6} md={5} lg={5}>
					<FormControl fullWidth className={classes.selectFormControl} style={{ backgroundColor: '#fff' }}>
						<InputLabel className={classes.selectLabel}>Categories</InputLabel>
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
								value="2"
							>
								Lits identifiés soins palliatifs
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="3"
							>
								Réseaux de soins palliatifs
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="4"
							>
								Équipes mobiles de soins palliatifs
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="5"
							>
								Hospitalisation à domicile
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="6"
							>
								Associations de bénévoles'
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="7"
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

export default withStyles(styles)(Example)
