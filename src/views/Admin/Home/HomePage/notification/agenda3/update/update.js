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
import { withRouter } from 'react-router-dom'
import { getCurrentAgenda3_id, updateAgenda3 } from 'actions/HomePage/notificationActions'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			theme: '',
			lieu: ''
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

		this.props.getCurrentAgenda3_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.agenda3.agenda3) {
			const agenda3 = nextProps.agenda3.agenda3

			// If agenda3 field doesnt exist, make empty string

			agenda3.theme = !isEmpty(agenda3.theme) ? agenda3.theme : ''
			agenda3.lieu = !isEmpty(agenda3.lieu) ? agenda3.lieu : ''

			// Set component fields state
			this.setState({
				theme: agenda3.theme,
				lieu: agenda3.lieu
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			theme: this.state.theme,
			lieu: this.state.lieu
		}

		this.props.updateAgenda3(this.props.match.params.id, Data, window.location.replace('/admin/agenda3/'))
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
					onClose={() => this.handleClose('searchModal', window.location.replace('/admin/agenda3/'))}
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
																className={classes.margin}
																label="Nom du lieu ET DATE"
																name="theme"
																value={this.state.theme}
																onChange={this.onChange}
															/>
															<br /> <br />
															<TextFieldGroup
																className={classes.margin}
																name="lieu"
																value={this.state.lieu}
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
																<Button type="submit" value="Submit" color="green">
																	Modifier
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
	agenda3: PropTypes.object.isRequired,
	getCurrentAgenda3_id: PropTypes.func.isRequired,
	updateAgenda3: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	agenda3: state.agenda3,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentAgenda3_id, updateAgenda3 })(withRouter(Modal))
)
