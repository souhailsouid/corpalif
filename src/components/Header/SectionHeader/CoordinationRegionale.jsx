import React from 'react'
import { Link } from 'react-router-dom'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Apps from '@material-ui/icons/Apps'
import ArtTrack from '@material-ui/icons/ArtTrack'
import PersonAdd from '@material-ui/icons/PersonAdd'
// core components
import headerStyle from 'assets/jss/material-kit-pro-react/components/headerStyle.jsx'
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
class LesSoinsPalliatifs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			mobileOpen: false
		}
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
		this.headerColorChange = this.headerColorChange.bind(this)
	}
	handleDrawerToggle() {
		this.setState({ mobileOpen: !this.state.mobileOpen })
	}
	componentDidMount() {
		if (this.props.changeColorOnScroll) {
			window.addEventListener('scroll', this.headerColorChange)
		}
	}
	headerColorChange() {
		const { classes, color, changeColorOnScroll } = this.props
		const windowsScrollTop = window.pageYOffset
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body.getElementsByTagName('header')[0].classList.remove(classes[color])
			document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color])
		} else {
			document.body.getElementsByTagName('header')[0].classList.add(classes[color])
			document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color])
		}
	}
	componentWillUnmount() {
		if (this.props.changeColorOnScroll) {
			window.removeEventListener('scroll', this.headerColorChange)
		}
	}
	render() {
		const { classes, color, links, brand, fixed, absolute } = this.props
		const appBarClasses = classNames({
			[classes.appBar]: true,
			[classes[color]]: color,
			[classes.absolute]: absolute,
			[classes.fixed]: fixed
		})
		return (
			<div style={{ display: 'flex' }}>
				<div>
					{' '}
					<CustomDropdown
						buttonText="COORDINATION RÉGIONALE"
						buttonProps={{
							round: true,
							block: true,
							color: 'transparent'
						}}
						buttonIcon={Apps}
						hoverColor="transparent"
						dropPlacement="bottom-start"
						dropdownList={[
							<CustomDropdown
								ref="multi"
								innerDropDown
								buttonText={
									<div style={{ margin: 2 }}>
										{<Apps className={classes.dropdownIcons} />}La corpalif
									</div>
								}
								buttonProps={{
									simple: true,
									block: true
								}}
								hoverColor="transparent"
								dropPlacement="right-start"
								dropdownList={[ 'Présentation asso', 'Objectifs et missions', 'Partenaires' ]}
							/>,
							<CustomDropdown
								ref="multi"
								innerDropDown
								buttonText={
									<div style={{ margin: 2 }}>
										{<ArtTrack className={classes.dropdownIcons} />}Orientation régionales
									</div>
								}
								buttonProps={{
									simple: true,
									block: true
								}}
								hoverColor="transparent"
								dropPlacement="left-start"
								dropdownList={[ 'Le parcours patient' ]}
							/>,

							<CustomDropdown
								ref="multi"
								innerDropDown
								buttonText={
									<div style={{ margin: 2 }}>
										{<PersonAdd className={classes.dropdownIcons} />}Adhérer
									</div>
								}
								buttonProps={{
									simple: true,
									block: true
								}}
								hoverColor="transparent"
								dropPlacement="left-start"
								dropdownList={[ 'Pourquoi adhérer' ]}
							/>,
							<Link to="/about-us" style={{ backgroundColor: '#104949' }}>
								<div style={{ display: 'flex', color: '#cc4949' }}>
									{<Icon className={classes.dropdownIcons}>content_paste</Icon>}{' '}
									<div style={{ display: 'flex', color: '#333', marginLeft: 5 }}>Contact</div>
								</div>
							</Link>
						]}
					/>
				</div>
			</div>
		)
	}
}

LesSoinsPalliatifs.defaultProp = {
	color: 'white'
}

LesSoinsPalliatifs.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf([
		'primary',
		'info',
		'success',
		'warning',
		'danger',
		'transparent',
		'white',
		'rose',
		'dark'
	]),
	links: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	// this will cause the sidebar to change the color from
	// this.props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is heigher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// this.props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			'primary',
			'info',
			'success',
			'warning',
			'danger',
			'transparent',
			'white',
			'rose',
			'dark'
		]).isRequired
	})
}

export default withStyles(headerStyle)(LesSoinsPalliatifs)
