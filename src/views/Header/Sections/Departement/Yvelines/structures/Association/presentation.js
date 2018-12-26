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
import HeaderSearchBar from 'views/Header/HeaderSearchBar.jsx'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructureAssos } from 'actions/YVELINESActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCurrentStructureAssociationMaps } from 'actions/maps/mapsYvelinesActions'
const Map = ({ mapassociation }) => (
	<div>
		<Marker position={[ mapassociation.long, mapassociation.lat ]}>
			<Popup>{mapassociation.name}</Popup>
		</Marker>
	</div>
)
class PresentationAssociationYvelines extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructureAssociationMaps()
		this.props.getCurrentStructureAssos()
	}

	render() {
		const { mapassociation } = this.props.mapassociation
		const Data = mapassociation.map((mapassociation) => <Map mapassociation={mapassociation} />)
		const { classes } = this.props
		const { association } = this.props.association
		const DataElements = association.map((association) => <Tables association={association} />)

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
											Les associations de bénévoles d'accompagnement en Yvelines{' '}
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<GridItem xs={12} sm={10} md={12}>
							<TablesHead />
							{DataElements}

							<div />
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

PresentationAssociationYvelines.propTypes = {
	getCurrentStructureAssos: PropTypes.func.isRequired,
	association: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	mapassociation: PropTypes.object.isRequired,
	getCurrentStructureAssociationMaps: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	association: state.association,
	mapassociation: state.mapassociation
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureAssos, getCurrentStructureAssociationMaps })(
		withRouter(PresentationAssociationYvelines)
	)
)
