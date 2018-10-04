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
			<GridContainer style={{ backgroundColor: '		#337467' }}>
				<GridItem
					xs={12}
					sm={12}
					md={12}
					lg={12}
					style={{ display: 'flex', paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 }}
				>
					<GridItem xs={12} sm={7} md={7} lg={10}>
						<FormControl
							fullWidth
							className={classes.selectFormControl}
							style={{ backgroundColor: '#fff', height: 47 }}
						>
							<InputLabel htmlFor="multiple-select" className={classes.selectLabel}>
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
						</FormControl>
					</GridItem>
					<GridItem xs={12} sm={6} md={5} lg={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
						<FormControl
							fullWidth
							className={classes.selectFormControl}
							style={{ backgroundColor: '#fff', height: 47 }}
						>
							<InputLabel htmlFor="multiple-select" className={classes.selectLabel}>
								Localisation:
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
									Selectionner un ou plusieurs départements
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
						</FormControl>
					</GridItem>
					<GridItem xs={2} sm={2} md={2} lg={2} style={{ paddingRight: 5 }}>
						<Button
							style={{ backgroundColor: '#fff', height: 47 }}
							aria-label="Edit"
							className={classes.selectFormControl}
						>
							<Icon>near_me</Icon>
						</Button>
					</GridItem>
				</GridItem>
			</GridContainer>
		)
	}
}

export default withStyles(styles)(Example)
