import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { prism } from 'react-syntax-highlighter/styles/prism'
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import LocationOn from '@material-ui/icons/LocationOn'
import MenuItem from '@material-ui/core/MenuItem'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// import IntegrationAutosuggest from './autosuggest'
import styles from 'assets/jss/material-kit-pro-react/customSelectStyle.jsx'
import IntegrationLocation from './Location'
import IntegrationAutosuggest from './text'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import Search from '../components/search'

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
			<GridContainer justify="center">
				<GridItem xs={10} sm={10} md={8} lg={5} style={{ justifyContent: 'space-around', flexWrap: 'wrap' }}>
					{/* <GridItem xs={12} sm={7} md={7} lg={10}> */}
					{/* <FormControl
						fullWidth
						className={classes.selectFormControl}
						style={{
							backgroundColor: '#fff',
							borderRadius: 50,
							color: 'rgba(95,95,95,0.5)',
							border: '1px solid'
						}}
					> */}
					{/* <InputLabel htmlFor="multiple-select" className={classes.selectLabelBis}>
							Les structures de prise en charge et associations
						</InputLabel>
						<Select
							multiple
							value={this.state.multipleSelect}
							onChange={this.handleMultiple}
							MenuProps={{ className: classes.selectMenu }}
							classes={{ select: classes.select }}
							inputProps={{
								name: 'multipleSelect',
								id: 'multiple-select'
							}}
						>
							<MenuItem
								disabled
								classes={{
									root: classes.selectMenuItem
								}}
							>
								Selectionner une ou plusieurs structures
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="1"
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
					</FormControl> */}
					{/* </GridItem>  */}
					{/* <GridItem xs={12} sm={6} md={5} lg={6} style={{ paddingLeft: 0, paddingRight: 0 }}> */}
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
						<InputLabel round htmlFor="multiple-select" className={classes.selectLabelBis}>
							Votre département
						</InputLabel>
						<Select
							round
							variant="fab"
							multiple
							value={this.state.multipleSelect}
							onChange={this.handleMultiple}
							MenuProps={{ className: classes.selectMenu }}
							classes={{ select: classes.select }}
							inputProps={{
								name: 'multipleSelect',
								id: 'multiple-select'
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
					<Search />
					{/* </GridItem> */}
					{/* <GridItem xs={2} sm={2} md={2} lg={2}> */}
					{/* <Button
							style={{ backgroundColor: '#fff', height: 47 }}
							aria-label="Edit"
							className={classes.selectFormControl}
						>
							<Icon>near_me</Icon>
						</Button> */}
				</GridItem>
				{/* </GridItem> */}
			</GridContainer>
		)
	}
}

export default withStyles(styles)(Example)
