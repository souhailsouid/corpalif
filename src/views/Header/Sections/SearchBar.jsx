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
// import IntegrationAutosuggest from './autosuggest'
import styles from 'assets/jss/material-kit-pro-react/customSelectStyle.jsx'
import ModalSearch from 'views/Header/Sections/ModalSearch'

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			simpleSelect: ''
		}
	}
	handleSimple = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const { classes } = this.props

		return (
			<GridContainer justify="center">
				<GridItem xs={10} sm={10} md={8} lg={5} style={{ justifyContent: 'space-around', flexWrap: 'wrap' }}>
					<FormControl
						fullWidth
						className={classes.selectFormControlBis}
						style={{
							backgroundColor: '#fff',
							borderRadius: 50,
							color: 'rgba(95,95,95,0.5)',

							border: '1px solid'
						}}
					>
						<InputLabel htmlFor="simple-select" className={classes.selectLabelBis}>
							Votre département
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
								disabled
								classes={{
									root: classes.selectMenuItem
								}}
							>
								Selectionner un département
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="1"
							>
								75 - Paris
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="2"
							>
								77 - Seine-et-Marne
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="3"
							>
								78 - Yvelines
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="4"
							>
								91 - Essonne
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="5"
							>
								92 - Hauts-De-Seine
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="6"
							>
								93 - Seine-Saint-Denis
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="7"
							>
								94 - Val-de-Marne
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="7"
							>
								95 - Val-d'Oise
							</MenuItem>
						</Select>
					</FormControl>
					{/* Add Button Search */}
					<ModalSearch />
				</GridItem>
			</GridContainer>
		)
	}
}

export default withStyles(styles)(SearchBar)
