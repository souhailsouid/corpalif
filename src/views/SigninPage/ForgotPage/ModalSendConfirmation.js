import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// sections for this page
import SectionMissions from 'views/PresentationPage/Sections/SectionMissions'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionCarroussel from 'views/PresentationPage/Sections/SectionCarroussel'
import ConfirmationResetPassword from './ModalConfirmation'
// sections CSS
import '../../style.css'

import HeaderSearchBar from 'views/Header/HeaderSearchBar'

// class PresentationPage extends React.Component {
// 	componentDidMount() {
// 		window.scrollTo(0, 0)
// 		document.body.scrollTop = 0
// 	}
function PasswordChanged({ ...props }) {
	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2
		if (t < 1) return c / 2 * t * t + b
		t--
		return -c / 2 * (t * (t - 2) - 1) + b
	}

	const smoothScroll = (e, target) => {
		if (window.location.pathname === '/home') {
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

	const { classes } = props
	// render() {
	// 	const { classes } = this.props
	return (
		<div>
			<HeaderSearchBar />

			<div className={classNames(classes.main, classes.mainRaised)}>
				<ConfirmationResetPassword />
				<SectionCarroussel />
				<SectionMissions />
			</div>
		</div>
	)
}

export default withStyles(presentationStyle)(PasswordChanged)
