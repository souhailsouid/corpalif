import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import SectionFooter from 'views/Footer/SectionFooter'
import Header from 'components/Header/Header.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import Modal from './update'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class UpdateYVELINESLITS extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<Header
					brand={
						<img
							src="http://image.noelshack.com/fichiers/2018/40/1/1538391836-corpalif-logo.png"
							alt="logo"
							style={{
								width: 80,
								maxWidth: '100%',
								height: 'auto'
							}}
						/>
					}
					links={<HeaderLinks dropdownHoverColor="dark" />}
					fixed
					changeColorOnScroll={{
						height: 400
					}}
				/>
				<div>
					<Parallax
						image={require('assets/img/examples/city.jpg')}
						className={classes.parallax}
						small
						style={{ height: 400 }}
					/>
				</div>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<GridItem xs={12} sm={10} md={12}>
							<Modal />
							<div />
						</GridItem>
						<Clearfix />
					</div>
				</div>
				<SectionFooter />
			</div>
		)
	}
}

UpdateYVELINESLITS.propTypes = {
	classes: PropTypes.object.isRequired
}

export default compose(withStyles(profilePageStyle))(withRouter(UpdateYVELINESLITS))
