import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/icons
import Search from '@material-ui/icons/Search'
import Email from '@material-ui/icons/Email'
import Face from '@material-ui/icons/Face'
import Settings from '@material-ui/icons/Settings'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Explore from '@material-ui/icons/Explore'
// core components
import GridContainer from '../Grid/GridContainer.jsx'
import GridItem from '../Grid/GridItem.jsx'
import Header from '../Header/Header.jsx'
import CustomInput from '../CustomInput/CustomInput.jsx'

import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '.././CustomButtons/Button.jsx'

import navbarsStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx'
import ExampleLogin from '../login'
import image from 'assets/img/bg.jpg'
import profileImage from 'assets/img/faces/avatar.jpg'
import HeaderConnexion from './HeaderConnexion'
import SeConnecter from '../login.js'
import SignUp from '../SignUp'
function SectionNavbars(props) {
	const { classes } = props
	return (
		<div className={`${classes.section} cd-section`} id="navigation">
			<div id="navbar" className={classes.navbar} style={{ height: 80, padding: 0, display: 'flex' }}>
				<HeaderConnexion
					brand={<SeConnecter />}
					color="dark"
					links={
						<List className={classes.list + classes.mlAuto}>
							<ListItem className={classes.listItem}>
								<Button
									href="#pablo"
									className={classes.navLink}
									onClick={(e) => e.preventDefault()}
									color="transparent"
								>
									<div>
										{' '}
										<SignUp />
									</div>
								</Button>
							</ListItem>

							<ListItem className={classes.listItem}>
								<CustomDropdown
									left
									caret={false}
									hoverColor="black"
									dropdownHeader="Dropdown Header"
									buttonProps={{
										className: classes.navLink + ' ' + classes.imageDropdownButton,
										color: 'transparent'
									}}
									dropdownList={[ 'Me', 'Settings and other stuff', 'Sign out' ]}
								/>
							</ListItem>
						</List>
					}
				/>
			</div>
		</div>
	)
}

export default withStyles(navbarsStyle)(SectionNavbars)