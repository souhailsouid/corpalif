/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

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
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import Grid from '@material-ui/core/Grid'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructureLITS, deleteStructure_idLITS } from 'actions/HAUTDESEINEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class PresentationLitsHautsdeSeine extends React.Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	}

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructureLITS()
	}

	render() {
		const { classes } = this.props
		const { lit } = this.props.lit
		const DataElements = lit.map((lit) => <Tables lit={lit} />)

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
											Les Lits identifiés en HAUTS DE SEINE{' '}
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<GridItem xs={12} sm={10} md={12}>
							<br />
							<br />
							<GridContainer>
								<br />
								<GridItem xs={12} sm={10} md={12}>
									<TablesHead />
									{DataElements}
								</GridItem>
							</GridContainer>
							<GridContainer>
								<Grid
									xs={12}
									sm={10}
									md={12}
									style={{
										textAlign: 'right',
										justifyContent: 'right',
										height: 600,
										marginTop: 40
									}}
								>
									<Map
										google={this.props.google}
										initialCenter={{
											lat: 48.8519,
											lng: 2.291172
										}}
										onClick={this.onMapClicked}
										zoom={14}
										style={{ height: '60%' }}
									>
										<Marker
											onClick={this.onMarkerClick}
											position={{ lat: 48.8519, lng: 2.291172 }}
											name={'Jeanne Garnier'}
										/>

										<Marker
											title={'The marker`s title will appear as a tooltip.'}
											onClick={this.onMarkerClick}
											position={{ lat: 48.846737, lng: 2.289693 }}
											name={'Current location'}
										/>
										<InfoWindow
											marker={this.state.activeMarker}
											visible={this.state.showingInfoWindow}
										>
											<div>
												<h4 style={{ textAlign: 'center' }}>{this.state.selectedPlace.name}</h4>
											</div>
										</InfoWindow>
									</Map>
								</Grid>
							</GridContainer>
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

PresentationLitsHautsdeSeine.propTypes = {
	getCurrentStructureLITS: PropTypes.func.isRequired,
	lit: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idLITS: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	lit: state.lit
})

export default compose(
	GoogleApiWrapper({
		apiKey: 'AIzaSyDeNfzPwX0--lYUtdesYTIp80KKu9CoybA'
	}),
	withStyles(profilePageStyle)
)(
	connect(mapStateToProps, { getCurrentStructureLITS, deleteStructure_idLITS })(
		withRouter(PresentationLitsHautsdeSeine)
	)
)
