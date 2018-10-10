import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Icon from '@material-ui/core/Icon'

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

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class ModalSearch extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: false
		}
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
		const { classes, ...rest } = this.props
		return (
			<div>
				<Button
					round
					variant="fab"
					onClick={() => this.handleClickOpen('searchModal')}
					style={{
						backgroundColor: '#fff',
						color: 'rgba(95,95,95,0.5)'
					}}
					aria-label="Edit"
				>
					<Icon style={{ color: '#000000' }}>near_me</Icon>
				</Button>

				<Dialog
					classes={{
						root: classes.modalRoot,
						paper: classes.modal + ' ' + classes.modalSearch
					}}
					open={this.state.searchModal}
					TransitionComponent={Transition}
					keepMounted
					onClose={() => this.handleClose('searchModal')}
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
								onClick={() => this.handleClose('searchModal')}
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
													L' offre de soins en Seine et Marne
												</h3>
											</GridItem>

											<div className={classes.container}>
												<GridContainer className={classes.gridContainer}>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<InfoArea
															vertical
															className={classes.infoArea5}
															icon={LocationCity}
															title={
																<div>
																	<b>
																		<h3>25 </h3>
																	</b>Unités de soins palliatifs (USP)
																</div>
															}
														/>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<InfoArea
															vertical
															className={classes.infoArea5}
															icon={Share}
															title={
																<div>
																	<h3>23</h3> Réseaux de soins palliatifs
																</div>
															}
														/>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<InfoArea
															vertical
															className={classes.infoArea5}
															icon={Home}
															title={
																<div>
																	<h3>15</h3> Structures d'hospitalisation à domicile
																</div>
															}
														/>
													</GridItem>
												</GridContainer>
												<GridContainer className={classes.gridContainer}>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<InfoArea
															vertical
															className={classes.infoArea5}
															icon={Home}
															title={
																<div>
																	<h3>15</h3> Structures d'hospitalisation à domicile
																</div>
															}
														/>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<InfoArea
															vertical
															className={classes.infoArea5}
															icon={Group}
															title={
																<div>
																	<h3>72</h3> Équipes mobiles de soins palliatifs
																	(HAD)
																</div>
															}
														/>
													</GridItem>
													<GridItem xs={12} sm={4} className={classes.gridItem}>
														<InfoArea
															vertical
															className={classes.infoArea5}
															icon={SupervisedUserCircle}
															title={
																<div>
																	<h3>51</h3> Association de bénévoles
																	d'accompagnement
																</div>
															}
														/>
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

export default withStyles(javascriptStyles)(ModalSearch)
