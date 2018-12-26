/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import TablesHead from './data/tablehead'
// core components
import Tables from './data/tables'
import SectionFooter from 'views/Footer/SectionFooter'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructureLITS } from 'actions/ESSONNEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCurrentStructureLITSMAPS } from 'actions/maps/mapsEssonneActions'

const Map = ({ maplit }) => (
	<div>
		<Marker position={[ maplit.long, maplit.lat ]}>
			<Popup>{maplit.name}</Popup>
		</Marker>
	</div>
)
class ESSONNELITS extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentStructureLITSMAPS()
		this.props.getCurrentStructureLITS()
	}

	render() {
		const { maplit } = this.props.maplit
		const Data = maplit.map((maplit) => <Map maplit={maplit} />)

		const { classes } = this.props
		const { lit } = this.props.lit

		const DataElements = lit.map((lit) => <Tables lit={lit} />)

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
											Les lits identifiés de soins palliatifs en Essonne
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

ESSONNELITS.propTypes = {
	getCurrentStructureLITS: PropTypes.func.isRequired,
	lit: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	getCurrentStructureLITSMAPS: PropTypes.func.isRequired,
	maplit: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	lit: state.lit,
	maplit: state.maplit
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureLITS, getCurrentStructureLITSMAPS })(withRouter(ESSONNELITS))
)
