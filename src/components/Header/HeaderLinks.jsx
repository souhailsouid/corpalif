/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Icon from '@material-ui/core/Icon'
import Snackbar from '@material-ui/core/Snackbar'
// @material-ui/icons
import CoordinationRegionale from 'components/Header/SectionHeader/CoordinationRegionale.jsx'
import LesSoinsPalliatifs from 'components/Header/SectionHeader/LesSoinsPalliatifs.jsx'
import AccountBalance from '@material-ui/icons/AccountBalance'
import Book from '@material-ui/icons/Book'
import ArtTrack from '@material-ui/icons/ArtTrack'
import ViewQuilt from '@material-ui/icons/ViewQuilt'
import LocationOn from '@material-ui/icons/LocationOn'
import Layers from '@material-ui/icons/Layers'
import Work from '@material-ui/icons/Work'
// core components
import { MySnackbarContentWrapper } from 'views/materialAlert/alert.js'
import SignUp from 'views/SignupPage/SignUpPage'
import SeConnecter from 'views/SigninPage/SigninPage'
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'

// Redux
import { compose } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
class HeaderLinks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: true,
			email: '',
			password: '',
			errors: {},
			displaySnack: false,
			snack: { variant: 'error', message: 'Connexion refusée !' }
		}
	}
	onLogoutClick(e) {
		e.preventDefault()
		this.props.logoutUser()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			const snack = {
				variant: 'success',
				message: 'Connecté avec succés!'
			}
			this.setState({ loginModal: false })

			this.setState({ snack, displaySnack: true })
			setTimeout(
				function() {
					this.setState({ displaySnack: false })
				}.bind(this),
				1500
			)
		}

		if (!nextProps.auth.isAuthenticated) {
			const snack = {
				variant: 'warning',
				message: 'Deconnecté avec succés!'
			}
			this.setState({ loginModal: false })

			this.setState({ snack, displaySnack: true })
			setTimeout(
				function() {
					this.setState({ displaySnack: false })
				}.bind(this),
				1500
			)
		}
	}

	handleCloseAlert = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}
	render() {
		const easeInOutQuad = (t, b, c, d) => {
			t /= d / 2
			if (t < 1) return c / 2 * t * t + b
			t--
			return -c / 2 * (t * (t - 2) - 1) + b
		}

		const smoothScroll = (e, target) => {
			if (window.location.pathname === '/sections') {
				var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
				if (isMobile) {
					// if we are on mobile device the scroll into view will be managed by the browser
				} else {
					e.preventDefault()
					var targetScroll = document.getElementById(target)
					scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
				}
			}
		}
		const scrollGo = (element, to, duration) => {
			var start = element.scrollTop,
				change = to - start,
				currentTime = 0,
				increment = 20

			var animateScroll = function() {
				currentTime += increment
				var val = easeInOutQuad(currentTime, start, change, duration)
				element.scrollTop = val
				if (currentTime < duration) {
					setTimeout(animateScroll, increment)
				}
			}
			animateScroll()
		}
		var onClickSections = {}

		const { classes, dropdownHoverColor } = this.props
		const { isAuthenticated } = this.props.auth
		const authLinks = (
			<Button
				round
				onClick={this.onLogoutClick.bind(this)}
				style={{
					backgroundColor: '#337467',
					marginLeft: '20px',
					padding: '10px'
				}}
			>
				Deconnexion
			</Button>
		)

		const guestLinks = (
			<ListItem className={classes.listItem} style={{ marginLeft: 20, marginBottom: 25 }}>
				<SeConnecter />
				<SignUp />
			</ListItem>
		)
		return (
			<List className={classes.list + ' ' + classes.mlAuto}>
				<CoordinationRegionale />
				<LesSoinsPalliatifs />
				<ListItem className={classes.listItem}>
					<CustomDropdown
						noLiPadding
						navDropdown
						hoverColor={dropdownHoverColor}
						buttonText="Veille médicale"
						buttonProps={{
							className: classes.navLink,
							color: 'transparent'
						}}
						buttonIcon={Book}
						dropdownList={[
							<Link to="/about-us" className={classes.dropdownLink}>
								<AccountBalance className={classes.dropdownIcons} /> Recommandations et outils
							</Link>,
							<Link to="/blog-post" className={classes.dropdownLink}>
								<ArtTrack className={classes.dropdownIcons} /> Actualités nationales et régionales
							</Link>,
							<Link to="/blog-posts" className={classes.dropdownLink}>
								<ViewQuilt className={classes.dropdownIcons} /> Evènements
							</Link>,
							<Link to="/contact-us" className={classes.dropdownLink}>
								<LocationOn className={classes.dropdownIcons} /> Nos rencontres
							</Link>
						]}
					/>
				</ListItem>

				<ListItem className={classes.listItem}>
					<CustomDropdown
						noLiPadding
						navDropdown
						hoverColor={dropdownHoverColor}
						buttonText="Emploi - Formation"
						buttonProps={{
							className: classes.navLink,
							color: 'transparent'
						}}
						buttonIcon={Work}
						dropdownList={[
							<Link to="/about-us" className={classes.dropdownLink}>
								<Work className={classes.dropdownIcons} /> Offres d'emploi
							</Link>,
							<Link to="/blog-post" className={classes.dropdownLink}>
								<Layers className={classes.dropdownIcons} /> Formations
							</Link>
						]}
					/>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href="https://www.creative-tim.com/product/material-kit-pro-react"
						style={{ backgroundColor: '#cc4949', padding: 12 }}
						target="_blank"
						className={classes.navButton}
						round
					>
						<Icon className={classes.dropdownIcons}>content_paste</Icon> Formulaire <br />d'admission
					</Button>
				</ListItem>
				{isAuthenticated ? authLinks : guestLinks}
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right'
					}}
					open={this.state.displaySnack}
					autoHideDuration={1}
				>
					<MySnackbarContentWrapper {...this.state.snack} onClose={this.handleCloseAlert} />
				</Snackbar>
			</List>
		)
	}
}
HeaderLinks.defaultProps = {
	hoverColor: 'primary'
}

HeaderLinks.propTypes = {
	dropdownHoverColor: PropTypes.oneOf([ 'dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose' ]),
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth
})
export default compose(withStyles(headerLinksStyle))(connect(mapStateToProps, { logoutUser })(HeaderLinks))
