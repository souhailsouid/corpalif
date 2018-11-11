import React from 'react'
// material-ui components
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// import IntegrationAutosuggest from './autosuggest'
import styles from 'assets/jss/material-kit-pro-react/customSelectStyle.jsx'
import ModalSearch from 'views/Header/Sections/ModalSearch'
// import SelectListGroup from 'views/common/SelectListGroup'
import './style.css'
import { Redirect } from 'react-router'
import Menu from '@material-ui/core/Menu'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			simpleSelect: '',
			notFound: false,
			value: false,
			anchorEl: null
		}
	}
	handleAnnuaireOpen = (event) => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleAnnuaireClose = () => {
		this.setState({ anchorEl: null })
	}

	handleSimple = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const { location: { pathname } } = this.props
		const { anchorEl } = this.state

		const { classes } = this.props
		// Select options for status

		return (
			<GridContainer justify="center">
				<GridItem xs={10} sm={10} md={8} lg={5} style={{ justifyContent: 'space-around', flexWrap: 'wrap' }}>
					<div>
						<Button
							fullWidth
							aria-owns={anchorEl ? 'annuaire-menu' : null}
							aria-haspopup="true"
							onClick={this.handleAnnuaireOpen}
							style={{
								backgroundColor: '#ffffff',
								borderRadius: 50,
								color: 'rgba(95,95,95,0.5)',

								border: '1px solid'
							}}
						>
							Votre département
						</Button>

						<Menu
							id="annuaire-menu"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={this.handleAnnuaireClose}
							MenuListProps={{
								name: 'annuaire'
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
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/Paris'}
								onClick={this.handleAnnuaireOpen}
								component={Link}
								to="/annuaire/Paris"
							>
								75 - Paris
							</MenuItem>
							<MenuItem
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/seineetmarne'}
								onClick={this.handleAnnuaireClose}
								component={Link}
								to="/annuaire/seineetmarne"
							>
								77 - Seine-et-Marne
							</MenuItem>

							<MenuItem
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/yvelines'}
								onClick={this.handleAnnuaireClose}
								component={Link}
								to="/annuaire/yvelines"
							>
								78 - Yvelines
							</MenuItem>
							<MenuItem
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/essonne'}
								onClick={this.handleAnnuaireClose}
								component={Link}
								to="/annuaire/essonne"
							>
								91 - Essonne
							</MenuItem>
							<MenuItem
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/hautsdeseine'}
								onClick={this.handleAnnuaireClose}
								component={Link}
								to="/annuaire/hautsdeseine"
							>
								92 - Hauts-De-Seine
							</MenuItem>
							<MenuItem
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/seinesaintdenis'}
								onClick={this.handleAnnuaireClose}
								component={Link}
								to="/annuaire/seinesaintdenis"
							>
								93 - Seine-Saint-Denis
							</MenuItem>

							<MenuItem
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/valdemarne'}
								onClick={this.handleAnnuaireClose}
								component={Link}
								to="/annuaire/valdemarne"
							>
								94 - Val-de-Marne
							</MenuItem>
							<MenuItem
								MenuProps={{
									className: classes.selectMenu
								}}
								classes={{
									select: classes.select
								}}
								style={{ color: 'rgba(0, 0, 0, 0.87)' }}
								selected={pathname === '/annuaire/valdoise'}
								onClick={this.handleAnnuaireClose}
								component={Link}
								to="/annuaire/valdoise"
							>
								95 - Val-d'Oise
							</MenuItem>
						</Menu>
					</div>
				</GridItem>
			</GridContainer>
		)
	}
}

export default withStyles(styles)(withRouter(SearchBar))
