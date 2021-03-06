import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
import LocationCity from '@material-ui/icons/LocationCity'
import Home from '@material-ui/icons/Home'
import Share from '@material-ui/icons/Share'
import Group from '@material-ui/icons/Group'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import javascriptStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import {
	getCurrentStructure,
	getCurrentStructureLITS,
	getCurrentStructureHAD,
	getCurrentStructureAssos,
	getCurrentStructureReseaux,
	getCurrentStructureTEAM,
	getCurrentStructure_autres,
	getCurrentStructure_autres_structures
} from 'actions/VALDOISEActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class ModalSearchValdOise extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true
		}
	}
	componentDidMount() {
		this.props.getCurrentStructure()
		this.props.getCurrentStructureLITS()
		this.props.getCurrentStructureHAD()
		this.props.getCurrentStructureAssos()
		this.props.getCurrentStructureReseaux()
		this.props.getCurrentStructureTEAM()
		this.props.getCurrentStructure_autres()
		this.props.getCurrentStructure_autres_structures()
	}
	handleClickOpen(modal) {
		var x = []
		x[modal] = true
		this.setState(x)
	}
	handleClose(modal) {
		var x = []
		x[modal] = false
		this.setState(x)
	}
	render() {
		const { association, soin, reseaux, lit, usp, had, autres, autres_structures } = this.props.association
		const { classes, ...rest } = this.props
		return (
			<div>
				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalSearch
					}}
					open={this.state.searchModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('searchModal', window.location.replace('/'))}
					aria-labelledby="search-modal-slide-title"
					aria-describedby="search-modal-slide-description"
				>
					<Card plain className={classes.modalSearchCard}>
						<DialogTitle id="search-modal-slide-title" disableTypography className={classes.modalHeader}>
							<Button
								simple
								className={classes.modalCloseButton}
								key="close"
								aria-label="Close"
								onClick={() => this.handleClose('searchModal', window.location.replace('/'))}
							>
								{' '}
								<Close className={classes.modalClose} />
							</Button>
						</DialogTitle>
						<DialogContent id="search-modal-slide-description" className={classes.modalBody}>
							<div className="cd-section" {...rest}>
								<div className={classes.features5}>
									<GridContainer>
										<GridContainer>
											<GridItem
												xs={12}
												sm={8}
												md={8}
												className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
											>
												<h3 className={classes.title} style={{ marginTop: 0 }}>
													L' offre de soins en Val-d'Oise
												</h3>
											</GridItem>
											<div className={classes.container}>
												<GridContainer className={classes.gridContainer}>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<Link to="/annuaire/valdoise/usp">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={LocationCity}
																title={
																	<div>
																		<b>
																			<h3>{Object.keys(usp).length} </h3>
																		</b>Unités de soins palliatifs
																	</div>
																}
															/>
														</Link>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<Link to="/annuaire/valdoise/reseaux">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={Share}
																title={
																	<div>
																		<h3>{Object.keys(reseaux).length}</h3> Réseaux
																		de soins palliatifs
																	</div>
																}
															/>
														</Link>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<Link to="/annuaire/valdoise/structure">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={Home}
																title={
																	<div>
																		<h3>{Object.keys(soin).length}</h3>{' '}
																		Hospitalisation à domicile
																	</div>
																}
															/>
														</Link>
													</GridItem>
												</GridContainer>
												<GridContainer className={classes.gridContainer}>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<Link to="/annuaire/valdoise/lits">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={Home}
																title={
																	<div>
																		<h3>{Object.keys(lit).length}</h3> Lits
																		identifiés soins palliatifs
																	</div>
																}
															/>
														</Link>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<Link to="/annuaire/valdoise/equipesmobiles">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={Group}
																title={
																	<div>
																		<h3>{Object.keys(had).length}</h3> Équipes
																		mobiles de soins palliatifs
																	</div>
																}
															/>
														</Link>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<Link to="/annuaire/valdoise/association">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={SupervisedUserCircle}
																title={
																	<div>
																		<h3>{Object.keys(association).length}</h3>
																		Association de bénévoles d'accompagnement
																	</div>
																}
															/>
														</Link>
													</GridItem>
												</GridContainer>
												<GridContainer className={classes.gridContainer} justify="center">
													<GridItem
														xs={12}
														sm={4}
														className={classes.gridItem}
														style={{
															borderLeft: '1px solid #D3D3D3',
															borderBottom: '1px solid #D3D3D3'
														}}
													>
														<Link to="/annuaire/valdoise/autres_structures">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={SupervisedUserCircle}
																title={
																	<div>
																		<h3>{Object.keys(autres_structures).length}</h3>
																		Autres structures de prise en charge
																	</div>
																}
															/>
														</Link>
													</GridItem>
													<GridItem
														xs={12}
														sm={4}
														className={classes.gridItem}
														style={{
															borderRight: '1px solid #D3D3D3',
															borderBottom: '1px solid #D3D3D3'
														}}
													>
														<Link to="/annuaire/valdoise/autres">
															<InfoArea
																vertical
																className={classes.infoArea5}
																icon={SupervisedUserCircle}
																title={
																	<div>
																		<h3>{Object.keys(autres).length}</h3>
																		Autres associations
																	</div>
																}
															/>
														</Link>
													</GridItem>
												</GridContainer>
											</div>
										</GridContainer>
									</GridContainer>
								</div>
							</div>
						</DialogContent>
					</Card>
				</Dialog>
			</div>
		)
	}
}

ModalSearchValdOise.propTypes = {
	getCurrentStructure: PropTypes.func.isRequired,
	getCurrentStructureLITS: PropTypes.func.isRequired,
	getCurrentStructureHAD: PropTypes.func.isRequired,
	getCurrentStructureAssos: PropTypes.func.isRequired,
	getCurrentStructureReseaux: PropTypes.func.isRequired,
	getCurrentStructureTEAM: PropTypes.func.isRequired,
	getCurrentStructure_autres: PropTypes.func.isRequired,
	getCurrentStructure_autres_structures: PropTypes.func.isRequired,
	association: PropTypes.object.isRequired,
	lit: PropTypes.object.isRequired,
	soin: PropTypes.object.isRequired,
	reseaux: PropTypes.object.isRequired,
	team: PropTypes.object.isRequired,
	usp: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	autres: PropTypes.object.isRequired,
	autres_structures: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	autres: state.autres,
	autres_structures: state.autres_structures,
	association: state.association,
	soin: state.soin,
	team: state.team,
	usp: state.usp,
	reseaux: state.reseaux,
	lit: state.lit
})

export default compose(withStyles(javascriptStyles))(
	connect(mapStateToProps, {
		getCurrentStructure,
		getCurrentStructureLITS,
		getCurrentStructureHAD,
		getCurrentStructureAssos,
		getCurrentStructureReseaux,
		getCurrentStructureTEAM,
		getCurrentStructure_autres,
		getCurrentStructure_autres_structures
	})(withRouter(ModalSearchValdOise))
)
