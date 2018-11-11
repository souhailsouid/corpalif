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
import { getCurrentStructureReseaux, deleteStructure_idReseaux } from 'actions/annuaireActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class ParisRESEAUX extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructureReseaux()
	}

	render() {
		const { classes } = this.props
		const { reseaux } = this.props.reseaux
		const DataElements = reseaux.map((reseaux) => <Tables reseaux={reseaux} />)

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
											Les Reseaux à Paris{' '}
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
								<Link to="/admin/post/paris/reseaux">
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

ParisRESEAUX.propTypes = {
	getCurrentStructureReseaux: PropTypes.func.isRequired,
	reseaux: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idReseaux: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	reseaux: state.reseaux
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureReseaux, deleteStructure_idReseaux })(withRouter(ParisRESEAUX))
)
