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
import { getCurrentStructureReseaux } from 'actions/VALDEMARNEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCurrentStructureReseauxMAPS } from 'actions/maps/mapsValdeMarneActions'

const Map = ({ mapreseaux }) => (
	<div>
		<Marker position={[ mapreseaux.long, mapreseaux.lat ]}>
			<Popup>{mapreseaux.name}</Popup>
		</Marker>
	</div>
)
class PresentationReseauxValdeMarneX extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructureReseaux()
		this.props.getCurrentStructureReseauxMAPS()
	}

	render() {
		const { mapreseaux } = this.props.mapreseaux
		const Data = mapreseaux.map((mapreseaux) => <Map mapreseaux={mapreseaux} />)
		const { classes } = this.props
		const { reseaux } = this.props.reseaux
		const DataElements = reseaux.map((reseaux) => <Tables reseaux={reseaux} />)

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
											Les Reseaux en Val de Marne{' '}
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

PresentationReseauxValdeMarneX.propTypes = {
	getCurrentStructureReseaux: PropTypes.func.isRequired,
	reseaux: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	mapreseaux: PropTypes.object.isRequired,
	getCurrentStructureReseauxMAPS: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	reseaux: state.reseaux,
	mapreseaux: state.mapreseaux
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureReseaux, getCurrentStructureReseauxMAPS })(
		withRouter(PresentationReseauxValdeMarneX)
	)
)
