import React from 'react'
import { render } from 'react-dom'
import Tables from './data/tables'
import Map from './maps'
import withStyles from '@material-ui/core/styles/withStyles'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructure } from 'actions/ESSONNEActions'
import { getCurrentStructureMaps } from 'actions/maps/paris/mapsParisActions'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import { connect } from 'react-redux'
import { compose } from 'redux'
import MapsTeam from './mapfile'
import MapsLat from './maplat'
class PresentationMapEssonne extends React.Component {
	state = {
		markersData: [ { latLng: { lat: 48.693836, lng: 2.376868 }, title: 1 } ]
	}
	addMarker = () => {
		const { markersData } = this.state
		const lastMarker = markersData[markersData.length - 1]
		const MapsElements = mapteam.map((mapteam) => <MapsTeam mapteam={mapteam} />)
		const MapsLats = mapteam.map((mapteam) => <MapsLat mapteam={mapteam} />)
		const { mapteam } = this.props
		this.setState({
			markersData: [
				...markersData,
				{
					title: +lastMarker.title + 1,
					latLng: {
						lat: lastMarker.latLng.lat + { MapsLats } - lastMarker.latLng.lat,
						lng: lastMarker.latLng.lng + { MapsElements } - lastMarker.latLng.lng
					}
				}
			]
		})
	}

	componentDidMount() {
		// const { mapteam } = this.props.mapteam
		this.props.getCurrentStructure()
		this.props.getCurrentStructureMaps()
	}
	render() {
		const { usp } = this.props.usp
		const { mapteam } = this.props.mapteam
		const DataElements = usp.map((usp) => <Tables usp={usp} />)
		const MapsElements = mapteam.map((mapteam) => <MapsTeam mapteam={mapteam} />)
		const MapsLats = mapteam.map((mapteam) => <MapsLat mapteam={mapteam} />)
		const { markersData } = this.state
		// const data = map
		return (
			<div>
				<Map markersData={markersData} />
				<button onClick={this.addMarker}>Add marker</button>
				{/* <ul>
					Markers data:
					{markersData.map((marker) => (
						<li key={marker.title}>
							{marker.title}, lat: {marker.latLng.lat}, lng: {marker.latLng.lng},
						</li>
					))}
				</ul> */}
				<p>{MapsLats}</p>
				<p>{MapsElements}</p>
			</div>
		)
	}
}
PresentationMapEssonne.propTypes = {
	getCurrentStructureMaps: PropTypes.func.isRequired,
	getCurrentStructure: PropTypes.func.isRequired,
	usp: PropTypes.object.isRequired,
	mapteam: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	usp: state.usp,
	mapteam: state.mapteam
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructure, getCurrentStructureMaps })(withRouter(PresentationMapEssonne))
)
