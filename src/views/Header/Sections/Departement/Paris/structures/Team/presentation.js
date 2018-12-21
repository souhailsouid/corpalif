import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { render } from 'react-dom'
// core components
import Media from 'react-media'
import { InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import Tables from './data/tables'
import TablesHead from './data/tablehead'
import SectionFooter from 'views/Footer/SectionFooter'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import Grid from '@material-ui/core/Grid'
import Spinner from 'views/common/Spinner'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructureTEAM, deleteStructure_idTEAM } from 'actions/annuaireActions'
import { getCurrentStructureMaps, getCurrentMaps_id } from 'actions/maps/mapsParisActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Maps from './map'

//maps
import Leaflet from 'leaflet'
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import { markers, mapConfig } from './utils'
import L from 'leaflet'
// ;(mapteam) => JSON.stringify(mapteam.name)
// ;(mapteam) => JSON.stringify(mapteam.long)
// ;(mapteam) => JSON.stringify(mapteam.latL)
class PresentationHadParis extends React.Component {
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
		this.props.getCurrentStructureMaps()
		this.props.getCurrentStructureTEAM()

		var info = { el }
		const { mapteam } = this.props.mapteam
		const el = mapteam.map((mapteam) => <Maps mapteam={mapteam} />)
		var mymap = L.map('mapid').setView([ 48.8519, 2.291172 ], 14)
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution:
				'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1Ijoic291aGFpbHMiLCJhIjoiY2pwNW53NWt1MTIxdzNrcGhyN2g3aDZlYSJ9.RhGI7ibxm_dMpFycmibT0g'
		}).addTo(mymap)
		var marker = L.marker([ 48.8519, 2.291172 ]).addTo(mymap)

		marker.bindPopup('info').openPopup()
	}

	render() {
		const { classes } = this.props
		const { had } = this.props.had
		const { mapteam, loading } = this.props.mapteam
		const DataElements = had.map((had) => <Tables had={had} />)
		const el = mapteam.map((mapteam) => <Maps mapteam={mapteam} />)
		const eln = mapteam.name
		// let dashboardContent

		// if (mapteam === null || loading) {
		// 	dashboardContent = <Spinner />
		// } else {
		// 	// Check if logged in user has mapteam data
		// 	if (Object.keys(mapteam).length > 0) {
		// 		dashboardContent = (
		// 			<div>
		// 				{Object.keys(mapteam).length - 3}
		// 				<h5>Vos informations</h5>

		// 				{/* <ProfileActions /> */}
		// 				<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
		// 					<div
		// 						style={{ marginTop: 20, paddingLeft: 10, border: '2px solid  #000000', width: 'auto' }}
		// 					>
		// 						<ul style={{ paddingLeft: 0 }}>
		// 							<b style={{ color: '#337467' }}>Nom:</b> {el}
		// 						</ul>
		// 					</div>
		// 				</GridItem>
		// 			</div>
		// 		)
		// 	}
		// }

		return (
			<div>
				<HeaderSearchBar />
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
						<GridItem xs={12} sm={12} md={12}>
							<br />
							<br />
							<GridContainer>
								<br />
								<GridItem xs={12} sm={12} md={12}>
									<TablesHead />
									{DataElements}

									<Media query="(max-width: 1000px)">
										{(matches) =>
											matches ? (
												<GridContainer>
													<Grid
														xs={12}
														sm={12}
														md={12}
														style={{
															textAlign: 'right',
															justifyContent: 'right',
															height: '500px',
															position: 'relative',

															marginTop: 40
														}}
													/>
												</GridContainer>
											) : (
												<GridContainer>
													<Grid
														xs={12}
														sm={12}
														md={12}
														style={{
															textAlign: 'right',
															justifyContent: 'right',
															height: '800px',
															width: '700px',
															position: 'relative',
															marginTop: 40
														}}
													>
														<div
															id="mapid"
															style={{
																textAlign: 'right',
																justifyContent: 'right',
																height: '80%',

																position: 'relative',
																marginTop: 40
															}}
														/>
														{/* {mapteam.message} */}
														{/* {el}
														{eln} */}
													</Grid>
												</GridContainer>
											)}
									</Media>
								</GridItem>
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

PresentationHadParis.propTypes = {
	getCurrentMaps_id: PropTypes.func.isRequired,
	getCurrentStructureMaps: PropTypes.func.isRequired,
	getCurrentStructureTEAM: PropTypes.func.isRequired,
	had: PropTypes.object.isRequired,
	mapteam: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_idTEAM: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	had: state.had,
	mapteam: state.mapteam
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, {
		getCurrentStructureTEAM,
		deleteStructure_idTEAM,
		getCurrentStructureMaps,
		getCurrentMaps_id
	})(withRouter(PresentationHadParis))
)
