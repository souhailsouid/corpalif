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
import Media from 'react-media'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import Grid from '@material-ui/core/Grid'

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructure } from 'actions/ESSONNEActions'
import { getCurrentStructureMaps } from 'actions/maps/mapsParisActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = ({ mapteam }) => (
	<div>
		<Marker position={[ mapteam.long, mapteam.lat ]}>
			<Popup>{mapteam.name}</Popup>
		</Marker>
	</div>
)
class PresentationUspEssonne extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructure()
		this.props.getCurrentStructureMaps()
	}
	render() {
		const { classes } = this.props
		const { usp } = this.props.usp
		const { mapteam } = this.props.mapteam
		const DataElements = usp.map((usp) => <Tables usp={usp} />)
		const Data = mapteam.map((mapteam) => <Map mapteam={mapteam} />)

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
											Les USP en Essonne
											<div />
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

								<GridItem xs={12} sm={12} md={12} justify="center">
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
															position: 'relative'
														}}
													>
														<div>
															<br />
															<br />
															<LeafletMap
																style={{
																	height: '500px',
																	width: '100%'
																}}
																center={[ 48.693836, 2.7 ]}
																zoom={12}
																attributionControl={true}
																zoomControl={true}
																doubleClickZoom={true}
																scrollWheelZoom={true}
																dragging={true}
																animate={true}
																easeLinearity={0.35}
															>
																<TileLayer
																	url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
																	attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
																/>
																{Data}
															</LeafletMap>
														</div>
													</Grid>
												</GridContainer>
											) : (
												<div>
													<br />
													<br />
													<LeafletMap
														style={{
															marginLeft: 'auto',
															marginRight: 'auto',

															height: '500px',
															width: '80%'
														}}
														center={[ 48.693836, 2.7 ]}
														zoom={12}
														attributionControl={true}
														zoomControl={true}
														doubleClickZoom={true}
														scrollWheelZoom={true}
														dragging={true}
														animate={true}
														easeLinearity={0.35}
													>
														<TileLayer
															url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
															attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
														/>
														{Data}
													</LeafletMap>
													<br />
													<br />
												</div>
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

PresentationUspEssonne.propTypes = {
	getCurrentStructure: PropTypes.func.isRequired,
	getCurrentStructureMaps: PropTypes.func.isRequired,
	usp: PropTypes.object.isRequired,
	mapteam: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	usp: state.usp,
	mapteam: state.mapteam
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructure, getCurrentStructureMaps })(withRouter(PresentationUspEssonne))
)
