/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Media from 'react-media'
import Tables from './data/tables'
import TablesHead from './data/tablehead'
import SectionFooter from 'views/Footer/SectionFooter'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import Grid from '@material-ui/core/Grid'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import L from 'leaflet'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructureAssos, deleteStructure_id } from 'actions/ESSONNEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class ESSONNEASSOS extends React.Component {
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

		this.props.getCurrentStructureAssos()

		var mymap = L.map('mapid').setView([ 48.702442, 2.130318 ], 10)
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution:
				'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1Ijoic291aGFpbHMiLCJhIjoiY2pwNW53NWt1MTIxdzNrcGhyN2g3aDZlYSJ9.RhGI7ibxm_dMpFycmibT0g'
		}).addTo(mymap)

		var marker = L.marker([ 48.702442, 2.130318 ]).addTo(mymap)

		marker.bindPopup('ASP 91').openPopup()
	}

	render() {
		const { classes } = this.props
		const { association } = this.props.association
		const DataElements = association.map((association) => <Tables association={association} />)

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
											Les Association et bénévoles en Essonne
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
													</Grid>
												</GridContainer>
											) : (
												<GridContainer justify="center">
													<Grid
														xs={12}
														sm={12}
														md={10}
														style={{
															textAlign: 'right',
															justifyContent: 'right',
															height: '800px',

															position: 'relative',
															marginTop: 40
														}}
													>
														<div
															id="mapid"
															style={{
																textAlign: 'right',
																justifyContent: 'right',
																height: '70%',

																position: 'relative',
																marginTop: 40
															}}
														/>
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

ESSONNEASSOS.propTypes = {
	getCurrentStructureAssos: PropTypes.func.isRequired,
	association: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	association: state.association
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureAssos, deleteStructure_id })(withRouter(ESSONNEASSOS))
)
