/* eslint-disable */
import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructure } from 'actions/ESSONNEActions'
import { getCurrentStructureMaps } from 'actions/maps/paris/mapsParisActions'

import { connect } from 'react-redux'
import { compose } from 'redux'
// const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import DeviceMap from './leaflet'

class PresentationMapEssonne extends React.Component {
	state = {
		index: 0
	}

	handleTabChange = (index) => {
		this.setState({ index })
	}

	render() {
		return (
			<Tabs index={this.state.index} onChange={this.handleTabChange}>
				<Tab label="Values">
					<DeviceTable {...this.props} />
				</Tab>
				<Tab label="Map">
					<div style={{ height: '800px', width: '100%' }}>
						<DeviceMap />
					</div>
				</Tab>
			</Tabs>
		)
	}
}
export default PresentationMapEssonne
