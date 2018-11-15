/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import AddIcon from '@material-ui/icons/Add'

// core components
import Tables from './data/tables'
import TablesHead from './data/tablehead'
import SectionFooter from 'views/Footer/SectionFooter'
import Header from 'components/Header/Header.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { getCurrentStructureHAD, deleteStructure_idHAD } from 'actions/annuaireActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class ParisHAD extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructureHAD()
	}

	render() {
		const { classes } = this.props
		const { had } = this.props.had
		const DataElements = had.map((had) => <Tables had={had} />)

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
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6} style={{ marginTop: 100 }}>
								<div className={classes.profile}>
									<div className={classes.name}>
										<h3 className={classes.title} style={{ color: '#cc4949' }}>
											{' '}
											Les équipes mobiles à Paris{' '}
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<GridItem xs={12} sm={10} md={12}>
							<Grid
								xs={12}
								sm={10}
								md={12}
								style={{ textAlign: 'right', justifyContent: 'right', marginBottom: 30 }}
							>
								<b>Ajouter une structure </b>
								<Link to="/admin/post/paris/usp">
									<Button round variant="fab" color="green" aria-label="Add">
										<AddIcon />
									</Button>
								</Link>
							</Grid>

							<TablesHead />
							{DataElements}

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

ParisHAD.propTypes = {
	getCurrentStructureHAD: PropTypes.func.isRequired,
	had: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idHAD: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	had: state.had
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureHAD, deleteStructure_idHAD })(withRouter(ParisHAD))
)
