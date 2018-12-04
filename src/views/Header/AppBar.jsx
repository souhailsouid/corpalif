import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
// import Example from 'components/Header/sub'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
// sections for this page
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'

// sections CSS
import '../style.css'

class HeaderComponent extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}
	render() {
		return (
			<div>
				<div>
					<Header
						brand={
							<img
								src="http://image.noelshack.com/fichiers/2018/40/1/1538391836-corpalif-logo.png"
								alt="logo"
								style={{
									width: 80,

									maxWidth: 'auto',
									height: 'auto'
								}}
							/>
						}
						links={<HeaderLinks dropdownHoverColor="dark" />}
						fixed
						color="#cc4949"
						changeColorOnScroll={{
							height: 400
						}}
					/>
				</div>
			</div>
		)
	}
}

export default withStyles(presentationStyle)(HeaderComponent)
