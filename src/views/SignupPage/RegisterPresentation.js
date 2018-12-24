import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// sections for this page
import SectionContacts from 'views/PresentationPage/Sections/SectionContacts.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import SectionInfo from 'views/PresentationPage/Sections/SectionInfo.jsx'
import SectionMissions from 'views/PresentationPage/Sections/SectionMissions'
// sections CSS
import '../style.css'
import SectionCarroussel from 'views/PresentationPage/Sections/SectionCarroussel'
import SectionAdherent from 'views/PresentationPage/Sections/SectionAdherent'
import HeaderSearchBarRegister from 'views/Header/HeaderSearchBarRegister'

function RegisterPage({ ...props }) {
	// const easeInOutQuad = (t, b, c, d) => {
	// 	t /= d / 2
	// 	if (t < 1) return c / 2 * t * t + b
	// 	t--
	// 	return -c / 2 * (t * (t - 2) - 1) + b
	// }

	// const smoothScroll = (e, target) => {
	// 	if (window.location.pathname === '/home') {
	// 		var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
	// 		if (isMobile) {
	// 			// if we are on mobile device the scroll into view will be managed by the browser
	// 		} else {
	// 			e.preventDefault()
	// 			var targetScroll = document.getElementById(target)
	// 			scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
	// 		}
	// 	}
	// }
	// const scrollGo = (element, to, duration) => {
	// 	var start = element.scrollTop,
	// 		change = to - start,
	// 		currentTime = 0,
	// 		increment = 20

	// 	var animateScroll = function() {
	// 		currentTime += increment
	// 		var val = easeInOutQuad(currentTime, start, change, duration)
	// 		element.scrollTop = val
	// 		if (currentTime < duration) {
	// 			setTimeout(animateScroll, increment)
	// 		}
	// 	}
	// 	animateScroll()
	// }

	const { classes } = props

	return (
		<div>
			<HeaderSearchBarRegister />

			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionCarroussel />
				<SectionMissions />
				<SectionAdherent />
				<SectionInfo />
				<SectionContacts />
				<SectionFooter />
			</div>
		</div>
	)
}

export default withStyles(presentationStyle)(RegisterPage)
