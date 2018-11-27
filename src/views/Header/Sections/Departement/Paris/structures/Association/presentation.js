/* eslint-disable */
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import AddIcon from '@material-ui/icons/Add'

// core components
import Tables from './data/tables'
import TablesHead from './data/tablehead'
import SectionFooter from 'views/Footer/SectionFooter'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { getCurrentStructureAssos, deleteStructure_id } from 'actions/annuaireActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class PresentationAssociationParis extends React.Component {
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
											Les Association à Paris{' '}
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<GridItem xs={12} sm={10} md={12}>
							<br />
							<br />
							<GridContainer>
								<br />
								<GridItem xs={12} sm={10} md={12}>
									<TablesHead />
									{DataElements}
								</GridItem>
							</GridContainer>
							<GridContainer>
								<Grid
									xs={12}
									sm={10}
									md={12}
									style={{
										textAlign: 'right',
										justifyContent: 'right',
										height: 600,
										marginTop: 40
									}}
								>
									<Map
										google={this.props.google}
										initialCenter={{
											lat: 48.8519,
											lng: 2.291172
										}}
										onClick={this.onMapClicked}
										zoom={14}
										style={{ height: '60%' }}
									>
										<Marker
											onClick={this.onMarkerClick}
											position={{ lat: 48.8519, lng: 2.291172 }}
											name={'Jeanne Garnier'}
										/>

										<Marker
											title={'The marker`s title will appear as a tooltip.'}
											onClick={this.onMarkerClick}
											position={{ lat: 48.846737, lng: 2.289693 }}
											name={'Current location'}
										/>
										<InfoWindow
											marker={this.state.activeMarker}
											visible={this.state.showingInfoWindow}
										>
											<div>
												<h4 style={{ textAlign: 'center' }}>{this.state.selectedPlace.name}</h4>
											</div>
										</InfoWindow>
									</Map>
								</Grid>
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

PresentationAssociationParis.propTypes = {
	getCurrentStructureAssos: PropTypes.func.isRequired,
	association: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_id: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	association: state.association
})

export default compose(
	GoogleApiWrapper({
		apiKey: 'AIzaSyDeNfzPwX0--lYUtdesYTIp80KKu9CoybA'
	}),
	withStyles(profilePageStyle)
)(connect(mapStateToProps, { getCurrentStructureAssos, deleteStructure_id })(withRouter(PresentationAssociationParis)))
