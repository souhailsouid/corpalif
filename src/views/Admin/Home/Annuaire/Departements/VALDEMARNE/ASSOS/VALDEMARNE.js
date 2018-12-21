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
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { getCurrentStructureAssos, deleteStructure_id } from 'actions/VALDEMARNEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCurrentStructureAssociationMaps } from 'actions/maps/mapsValdeMarneActions'
import TablesMaps from './maps/data/tables'
const Map = ({ mapassociation }) => (
	<div>
		<Marker position={[ mapassociation.long, mapassociation.lat ]}>
			<Popup>{mapassociation.name}</Popup>
		</Marker>
	</div>
)
class VALDEMARNEASSOS extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
this.props.getCurrentStructureAssociationMaps()
		this.props.getCurrentStructureAssos()
	}

	render() {
		const { mapassociation } = this.props.mapassociation
const Data = mapassociation.map((mapassociation) => <Map mapassociation={mapassociation} />)
		const ButtonMaps = mapassociation.map((mapassociation) => <TablesMaps mapassociation={mapassociation} />)
		const { classes } = this.props
		const { association } = this.props.association
		const DataElements = association.map((association) => <Tables association={association} />)

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
											Les Association en VAL DE MARNE{' '}
										</h3>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<GridItem xs={12} sm={10} md={12}>
							<Grid
								xs={12}
								sm={10}
								md={12}
								style={{ textAlign: 'right', justifyContent: 'right', marginBottom: 30 }}
							>
								<b>Ajouter une structure </b>
								<Link to="/admin/post/VALDEMARNE/association">
									<Button round variant="fab" color="green" aria-label="Add">
										<AddIcon />
									</Button>
								</Link>
							</Grid>
<Grid xs={12} sm={10} md={12} style={{ textAlign: 'right', justifyContent: 'right' }}>
								<b>Ajouter une structure sur la carte </b>
								<Link to="/admin/post/VALDEMARNE/maps/association">
									<Button round variant="fab" color="green" aria-label="Add">
										<AddIcon />
									</Button>
								</Link>
							</Grid>
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
							<h4>Pour la maps</h4>
							{ButtonMaps}
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

VALDEMARNEASSOS.propTypes = {
	getCurrentStructureAssos: PropTypes.func.isRequired,
	association: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	deleteStructure_id: PropTypes.func.isRequired,
	mapassociation: PropTypes.object.isRequired,
	getCurrentStructureAssociationMaps: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	association: state.association,
	mapassociation: state.mapassociation
})

export default compose(withStyles(profilePageStyle))(
	connect(mapStateToProps, { getCurrentStructureAssos, deleteStructure_id , getCurrentStructureAssociationMaps})(withRouter(VALDEMARNEASSOS))
)
