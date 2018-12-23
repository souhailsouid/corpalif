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
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructureHAD } from 'actions/HAUTDESEINEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCurrentStructureHADMAPS } from 'actions/maps/mapsHautsdeSeineActions'
const Map = ({ mapsoin }) => (
	<div>
		<Marker position={[ mapsoin.long, mapsoin.lat ]}>
			<Popup>{mapsoin.name}</Popup>
		</Marker>
	</div>
)
class PresentationStructureHautsdeSeine extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructureHAD()
		this.props.getCurrentStructureHADMAPS()
	}

	render() {
		const { mapsoin } = this.props.mapsoin
		const Data = mapsoin.map((mapsoin) => <Map mapsoin={mapsoin} />)
		const { classes } = this.props
		const { soin } = this.props.soin
		const DataElements = soin.map((soin) => <Tables soin={soin} />)

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
											Les structures d'hospitalisations aux domiciles en hauts de Seine {' '}
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
						<Clearfix />
					</div>
				</div>
				<SectionFooter />
			</div>
		)
	}
}

PresentationStructureHautsdeSeine.propTypes = {
	getCurrentStructureHAD: PropTypes.func.isRequired,
	soin: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,

	mapsoin: PropTypes.object.isRequired,
	getCurrentStructureHADMAPS: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	soin: state.soin,
	mapsoin: state.mapsoin
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureHAD, getCurrentStructureHADMAPS })(
		withRouter(PresentationStructureHautsdeSeine)
	)
)
