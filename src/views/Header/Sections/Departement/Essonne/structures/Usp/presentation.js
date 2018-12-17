// /* eslint-disable */
// import React from 'react'
// // nodejs library that concatenates classes
// import classNames from 'classnames'
// // @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'
// import MapsTeam from './maps'
// // core components
// import Tables from './data/tables'
// import TablesHead from './data/tablehead'
// import SectionFooter from 'views/Footer/SectionFooter'
// import Media from 'react-media'
// import GridContainer from 'components/Grid/GridContainer.jsx'
// import GridItem from 'components/Grid/GridItem.jsx'
// import Clearfix from 'components/Clearfix/Clearfix.jsx'
// import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
// import Grid from '@material-ui/core/Grid'

// import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// // Redux
// import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'
// import { getCurrentStructure } from 'actions/ESSONNEActions'
// import { getCurrentStructureMaps } from 'actions/maps/paris/mapsParisActions'

// import { connect } from 'react-redux'
// import { compose } from 'redux'

// class PresentationUspEssonne extends React.Component {
// 	state = {}

// 	componentDidMount() {
// 		window.scrollTo(0, 0)
// 		document.body.scrollTop = 0
// 		// const { mapteam } = this.props.mapteam
// 		this.props.getCurrentStructure()
// 		this.props.getCurrentStructureMaps()
// 		var mymap = L.map('mapid').setView([ 48.676046, 2.412892 ], 10)
// 		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// 			attribution:
// 				'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 			maxZoom: 18,
// 			id: 'mapbox.streets',
// 			accessToken: 'pk.eyJ1Ijoic291aGFpbHMiLCJhIjoiY2pwNW53NWt1MTIxdzNrcGhyN2g3aDZlYSJ9.RhGI7ibxm_dMpFycmibT0g'
// 		}).addTo(mymap)
// 		// const long = ({ mapteam }) =>
// 		// 	L.marker([ mapteam.map((mapteam) => <MapsTeam mapteam={mapteam} />) ]).addTo(mymap)

// 		var marker = ({ mapteam }) => L.marker(mapteam.map((mapteam) => <MapsTeam mapteam={mapteam} />)).addTo(mymap)
// 		// var marker2 = L.marker([ 48.521486, 2.431695 ]).addTo(mymap)
// 		// var marker3 = L.marker([ 48.584102, 2.242065 ]).addTo(mymap)
// 		// var marker4 = L.marker([ 48.676046, 2.412892 ]).addTo(mymap)
// 		// var marker5 = L.marker([ 48.693836, 2.376868 ]).addTo(mymap)
// 		// var marker6 = L.marker([ {48.693836}, 2.376868 ]).addTo(mymap)

// 		// marker.bindPopup = 'CENTRE MÉDICAL BLIGNY - USP'.openPopup()
// 		// marker2.bindPopup('AP-HP GEORGES CLÉMENCEAU - USP').openPopup()
// 		// marker3.bindPopup("CH D'ARPAJON - USP").openPopup()
// 		// marker4.bindPopup('HÔPITAL JOFFRE-DUPUYTREN - USP').openPopup()
// 		// marker5.bindPopup('CH DES DEUX VALLÉES, SITE DE JUVISY SUR ORGE - USP').openPopup()
// 	}
// 	render() {
// 		const { classes } = this.props
// 		const { usp } = this.props.usp
// 		const { mapteam } = this.props.mapteam
// 		const DataElements = usp.map((usp) => <Tables usp={usp} />)
// 		// const MapsElements = mapteam.map((mapteam) => <MapsTeam mapteam={mapteam} />)

// 		// {mapteam.lat}
// 		return (
// 			<div>
// 				<HeaderSearchBar />

// 				<div className={classNames(classes.main, classes.mainRaised)}>
// 					<div className={classes.container}>
// 						<GridContainer justify="center">
// 							<GridItem xs={12} sm={12} md={6} style={{ marginTop: 100 }}>
// 								<div className={classes.profile}>
// 									<div className={classes.name}>
// 										<h3 className={classes.title} style={{ color: '#cc4949' }}>
// 											{' '}
// 											Les USP en Essonne
// 											<div>
// 												{/* {MapsElements} */}
// 												{/* {data} */}
// 											</div>
// 										</h3>
// 									</div>
// 								</div>
// 							</GridItem>
// 						</GridContainer>
// 						<GridItem xs={12} sm={12} md={12}>
// 							<br />
// 							<br />
// 							<GridContainer>
// 								<br />

// 								<GridItem xs={12} sm={12} md={12} justify="center">
// 									<TablesHead />
// 									{DataElements}
// 									<Media query="(max-width: 1000px)">
// 										{(matches) =>
// 											matches ? (
// 												<GridContainer>
// 													<Grid
// 														xs={12}
// 														sm={12}
// 														md={12}
// 														style={{
// 															textAlign: 'right',
// 															justifyContent: 'right',
// 															height: '800px',
// 															width: '700px',
// 															position: 'relative',
// 															marginTop: 40
// 														}}
// 													>
// 														<div
// 															id="mapid"
// 															style={{
// 																textAlign: 'right',
// 																justifyContent: 'right',
// 																height: '80%',

// 																position: 'relative',
// 																marginTop: 40
// 															}}
// 														/>
// 													</Grid>
// 												</GridContainer>
// 											) : (
// 												<GridContainer justify="center">
// 													<Grid
// 														xs={12}
// 														sm={12}
// 														md={10}
// 														style={{
// 															textAlign: 'center',
// 															justifyContent: 'center',
// 															height: '800px',
// 															// width: '700px',
// 															position: 'relative',
// 															marginTop: 40
// 														}}
// 													>
// 														{/* <div
// 															id="mapid"
// 															style={{
// 																textAlign: 'right',
// 																justifyContent: 'right',
// 																height: '70%',

// 																position: 'relative',
// 																marginTop: 40
// 															}}
// 														/> */}
// 													</Grid>
// 												</GridContainer>
// 											)}
// 									</Media>
// 								</GridItem>
// 							</GridContainer>

// 							<div />
// 						</GridItem>
// 						<Clearfix />
// 					</div>
// 				</div>
// 				<SectionFooter />
// 			</div>
// 		)
// 	}
// }

// PresentationUspEssonne.propTypes = {
// 	getCurrentStructureMaps: PropTypes.func.isRequired,
// 	getCurrentStructure: PropTypes.func.isRequired,
// 	usp: PropTypes.object.isRequired,
// 	mapteam: PropTypes.object.isRequired,
// 	classes: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
// 	usp: state.usp,
// 	mapteam: state.mapteam
// })

// export default compose(withStyles(profilePageStyle))(
// 	connect(mapStateToProps, { getCurrentStructure, getCurrentStructureMaps })(withRouter(PresentationUspEssonne))
// )
