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
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructure_autres } from 'actions/SEINESAINTDENISActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCurrentStructureAutresMAPS } from 'actions/maps/mapsSeineSaintDenisActions'

const Map = ({ mapautre }) => (
	<div>
		<Marker position={[ mapautre.long, mapautre.lat ]}>
			<Popup>{mapautre.name}</Popup>
		</Marker>
	</div>
)
class Presentation_SEINESAINTDENIS_Autres extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentStructureAutresMAPS()
		this.props.getCurrentStructure_autres()
	}

	render() {
		const { classes } = this.props
		const { autres } = this.props.autres
		const DataElements = autres.map((autres) => <Tables autres={autres} />)
		const { mapautre } = this.props.mapautre
		const Data = mapautre.map((mapautre) => <Map mapautre={mapautre} />)
		return (
			<div>
				<HeaderSearchBar />

				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={8} style={{ marginTop: 100 }}>
								<div className={classes.profile}>
									<div className={classes.name}>
										<h3 className={classes.title} style={{ color: '#cc4949' }}>
											{' '}
											Autres associations en Seine-Saint-Denis
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>

						<GridItem xs={12} sm={10} md={12}>
							<TablesHead />
							{DataElements}
						</GridItem>

						<div>
							<br />
							<br />

							{
								<LeafletMap
									style={{
										marginLeft: 'auto',
										marginRight: 'auto',

										height: '500px',
										width: '80%'
									}}
									center={[ 48.876407, 2.369558 ]}
									zoom={9}
									attributionControl={true}
									zoomControl={true}
									doubleClickZoom={true}
									scrollWheelZoom={true}
									dragging={true}
									animate={true}
									easeLinearity={0.35}
								>
									}
									<TileLayer
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
									/>
									{Data}
								</LeafletMap>
							}

							<br />

							<br />
						</div>
					</div>
				</div>

				<SectionFooter />
			</div>
		)
	}
}

Presentation_SEINESAINTDENIS_Autres.propTypes = {
	getCurrentStructure_autres: PropTypes.func.isRequired,
	autres: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,

	mapautre: PropTypes.object.isRequired,
	getCurrentStructureAutresMAPS: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	autres: state.autres,
	mapautre: state.mapautre
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructure_autres, getCurrentStructureAutresMAPS })(
		withRouter(Presentation_SEINESAINTDENIS_Autres)
	)
)
