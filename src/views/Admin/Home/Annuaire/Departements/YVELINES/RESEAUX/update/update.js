import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputAdornment from '@material-ui/core/InputAdornment'
import DialogContent from '@material-ui/core/DialogContent'
// @material-ui/icons
import Grid from '@material-ui/core/Grid'
import Face from '@material-ui/icons/Face'
import Mail from '@material-ui/icons/Mail'
import Close from '@material-ui/icons/Close'
// core components
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
// common
import TextFieldGroup from 'views/common/TextFieldGroup'
// Redux
import isEmpty from 'validation/is-empty'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateStructureReseaux, getCurrentStructure_idReseaux } from 'actions/YVELINESActions'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			name: '',
			adresse: '',
			phone: '',
			email: '',
			errors: {}
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
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

	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0

		this.props.getCurrentStructure_idReseaux(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
		if (nextProps.reseaux.reseaux) {
			const reseaux = nextProps.reseaux.reseaux

			// If reseaux field doesnt exist, make empty string
			reseaux.name = !isEmpty(reseaux.name) ? reseaux.name : ''
			reseaux.email = !isEmpty(reseaux.email) ? reseaux.email : ''
			reseaux.phone = !isEmpty(reseaux.phone) ? reseaux.phone : ''
			reseaux.adresse = !isEmpty(reseaux.adresse) ? reseaux.adresse : ''

			// Set component fields state
			this.setState({
				name: reseaux.name,
				email: reseaux.email,
				adresse: reseaux.adresse,
				phone: reseaux.phone
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			name: this.state.name,
			adresse: this.state.adresse,
			email: this.state.email,
			phone: this.state.phone
		}

		this.props.updateStructureReseaux(this.props.match.params.id, Data)
		window.location.replace('/admin/YVELINES/reseaux')
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		const { errors } = this.state

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
					onClose={() => this.handleClose('searchModal', window.location.replace('/admin/YVELINES/reseaux'))}
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
										<GridContainer style={{ minWidth: 'auto', margin: 'auto', flexWrap: 'wrap' }}>
											<GridItem
												xs={12}
												sm={12}
												md={12}
												className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
											>
												<h1 style={{ textAlign: 'center' }}>Editer </h1>
											</GridItem>
											<div className={classes.container}>
												<GridContainer className={classes.gridContainer}>
													<GridItem xs={12} sm={12} md={12} className={classes.gridItem}>
														<form onSubmit={this.onSubmit}>
															<TextFieldGroup
																label="Nom"
																name="name"
																value={this.state.name}
																onChange={this.onChange}
																error={errors.AnnuaireName}
																InputProps={{
																	startAdornment: (
																		<InputAdornment position="start">
																			<div>
																				{' '}
																				<Face />
																			</div>
																		</InputAdornment>
																	)
																}}
															/>
															<br /> <br />
															<TextFieldGroup
																label="adresse"
																className={classes.margin}
																name="adresse"
																multiline
																row={3}
																value={this.state.adresse}
																onChange={this.onChange}
																error={errors.AnnuaireAdresse}
																InputProps={{
																	startAdornment: (
																		<InputAdornment position="start">
																			<div>
																				{' '}
																				<Face />
																			</div>
																		</InputAdornment>
																	)
																}}
															/>
															<br /> <br />
															<TextFieldGroup
																type="email"
																className={classes.margin}
																name="email"
																value={this.state.email}
																onChange={this.onChange}
																InputProps={{
																	startAdornment: (
																		<InputAdornment position="start">
																			<div>
																				{' '}
																				<Mail />
																			</div>
																		</InputAdornment>
																	)
																}}
															/>
															<br /> <br />
															<TextFieldGroup
																placeholder="phone"
																className={classes.margin}
																name="phone"
																value={this.state.phone}
																onChange={this.onChange}
																InputProps={{
																	startAdornment: (
																		<InputAdornment position="start">
																			<div>
																				<i class="material-icons">
																					location_on
																				</i>
																			</div>
																		</InputAdornment>
																	)
																}}
															/>
															<br /> <br />
															<Grid
																container
																direction="row"
																justify="center"
																style={{
																	marginTop: 40,
																	justifyContent: 'space-around'
																}}
															>
																<Button type="submit" value="Submit" color="green">
																	Ajouter
																</Button>
															</Grid>
														</form>
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

Modal.propTypes = {
	reseaux: PropTypes.object.isRequired,
	getCurrentStructure_idReseaux: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	reseaux: state.reseaux,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { updateStructureReseaux, getCurrentStructure_idReseaux })(withRouter(Modal))
)
