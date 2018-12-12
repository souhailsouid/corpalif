import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'

// @material-ui/icons
import Grid from '@material-ui/core/Grid'
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
import { withRouter, Link } from 'react-router-dom'
import { getCurrentAgenda1_id, updateAgenda1 } from 'actions/HomePage/notificationActions'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			theme: '',
			lieu: '',
			rue: '',
			city: '',
			when: ''
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

		this.props.getCurrentAgenda1_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.agenda1.agenda1) {
			const agenda1 = nextProps.agenda1.agenda1

			// If agenda1 field doesnt exist, make empty string
			agenda1.when = !isEmpty(agenda1.when) ? agenda1.when : ''
			agenda1.theme = !isEmpty(agenda1.theme) ? agenda1.theme : ''
			agenda1.lieu = !isEmpty(agenda1.lieu) ? agenda1.lieu : ''
			agenda1.rue = !isEmpty(agenda1.rue) ? agenda1.rue : ''
			agenda1.city = !isEmpty(agenda1.city) ? agenda1.city : ''

			// Set component fields state
			this.setState({
				theme: agenda1.theme,
				lieu: agenda1.lieu,
				when: agenda1.when,
				rue: agenda1.rue,
				city: agenda1.city
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			theme: this.state.theme,
			when: this.state.when,
			rue: this.state.rue,
			lieu: this.state.lieu,
			city: this.state.city
		}

		this.props.updateAgenda1(this.props.match.params.id, Data)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
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
					onClose={() => this.handleClose('searchModal', window.location.replace('/admin/agenda1/'))}
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
																label="date"
																className={classes.margin}
																name="when"
																value={this.state.when}
																onChange={this.onChange}
															/>
															<TextFieldGroup
																label="theme"
																className={classes.margin}
																name="theme"
																value={this.state.theme}
																onChange={this.onChange}
															/>
															<br /> <br />
															<TextFieldGroup
																label="Nom du lieu"
																className={classes.margin}
																name="lieu"
																value={this.state.lieu}
																onChange={this.onChange}
															/>
															<br /> <br />
															<TextFieldGroup
																label="Nom de la rue"
																className={classes.margin}
																name="rue"
																value={this.state.rue}
																onChange={this.onChange}
															/>
															<TextFieldGroup
																label="Code postal et Ville"
																className={classes.margin}
																name="city"
																value={this.state.city}
																onChange={this.onChange}
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
																<Link to="/admin/agenda1">
																	<Button type="submit" value="Submit" color="green">
																		Modifier
																	</Button>
																</Link>
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
	agenda1: PropTypes.object.isRequired,
	getCurrentAgenda1_id: PropTypes.func.isRequired,
	updateAgenda1: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	agenda1: state.agenda1,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentAgenda1_id, updateAgenda1 })(withRouter(Modal))
)
