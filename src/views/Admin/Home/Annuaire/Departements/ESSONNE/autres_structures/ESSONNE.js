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
import Header from 'components/Header/Header.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { getCurrentStructure_autres_structures, deleteStructure_id_autres_structures } from 'actions/ESSONNEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCurrentStructureAutresstructuresMAPS } from 'actions/maps/mapsEssonneActions'
import TablesMaps from './maps/data/tables'
const Map = ({ mapautresstructure }) => (
	<div>
		<Marker position={[ mapautresstructure.long, mapautresstructure.lat ]}>
			<Popup>{mapautresstructure.name}</Popup>
		</Marker>
	</div>
)
class ESSONNEautres_structures extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentStructureAutresstructuresMAPS()
		this.props.getCurrentStructure_autres_structures()
	}

	render() {
		const { autres_structures } = this.props.autres_structures
			const Data = mapautresstructure.map((mapautresstructure) => <Map mapautresstructure={mapautresstructure} />)
		const ButtonMaps = mapautresstructure.map((mapautresstructure) => (
			<TablesMaps mapautresstructure={mapautresstructure} />
		))
		const { classes } = this.props
		const { mapautresstructure } = this.props.mapautresstructure
		
		const DataElements = autres_structures.map((autres_structures) => (
			<Tables autres_structures={autres_structures} />
		))
	
		return (
			<div>
				<Header
					brand={
						<img
							src="http://image.noelshack.com/fichiers/2018/40/1/1538391836-corpalif-logo.png"
							alt="logo"
							style={{
								width: 80,
								maxWidth: '100%',
								height: 'auto'
							}}
						/>
					}
					links={<HeaderLinks dropdownHoverColor="dark" />}
					fixed
					changeColorOnScroll={{
						height: 400
					}}
				/>
				<div>
					<Parallax
						image={require('assets/img/examples/city.jpg')}
						className={classes.parallax}
						small
						style={{ height: 400 }}
					/>
				</div>

				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6} style={{ marginTop: 100 }}>
								<div className={classes.profile}>
									<div className={classes.name}>
										<h3 className={classes.title} style={{ color: '#cc4949' }}>
											{' '}
											Les autres_structures EN ESSONNE
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>

						<GridItem xs={12} sm={10} md={12}>
							<Grid xs={12} sm={10} md={12} style={{ textAlign: 'right', justifyContent: 'right' }}>
								<b>Ajouter une structure </b>
								<Link to="/admin/post/ESSONNE/autres_structures">
									<Button round variant="fab" color="green" aria-label="Add">
										<AddIcon />
									</Button>
								</Link>
							</Grid>
							<Grid xs={12} sm={10} md={12} style={{ textAlign: 'right', justifyContent: 'right' }}>
								<b>Ajouter une structure sur la carte </b>
								<Link to="/admin/post/ESSONNE/maps/autres_structures">
									<Button round variant="fab" color="green" aria-label="Add">
										<AddIcon />
									</Button>
								</Link>
							</Grid>
							<GridItem xs={12} sm={10} md={12}>
								<TablesHead />
								{DataElements}
							</GridItem>
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
							<h4>Pour la maps</h4>
							{ButtonMaps}
							<br />
						</div>
					</div>
				</div>

				<SectionFooter />
			</div>
		)
	}
}

ESSONNEautres_structures.propTypes = {
	getCurrentStructure_autres_structures: PropTypes.func.isRequired,
	getCurrentStructureAutresstructuresMAPS: PropTypes.func.isRequired,
	autres_structures: PropTypes.object.isRequired,
	
	classes: PropTypes.object.isRequired,
	deleteStructure_id_autres_structures: PropTypes.func.isRequired,
	mapautresstructure: PropTypes.object.isRequired,
	getCurrentStructureAutresstructuresMAPS: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	autres_structures: state.autres_structures,
	mapautresstructure: state.mapautresstructure
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, {
		getCurrentStructure_autres_structures,
		deleteStructure_id_autres_structures,
		getCurrentStructureAutresstructuresMAPS
	})(withRouter(ESSONNEautres_structures))
)
