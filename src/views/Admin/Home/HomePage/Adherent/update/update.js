import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
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
import { getCurrentAdherent_id } from 'actions/HomePage/carousselActions'

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			title: '',
			picture: null
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onChangePicture = this.onChangePicture.bind(this)
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

		this.props.getCurrentAdherent_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.adherent.adherent) {
			const adherent = nextProps.adherent.adherent

			// If adherent field doesnt exist, make empty string

			adherent.title = !isEmpty(adherent.title) ? adherent.title : ''

			// Set component fields state
			this.setState({
				title: adherent.title
			})
		}
	}

	onFormSubmit(e) {
		e.preventDefault() // Stop form submit
		this.fileUpload(this.state.picture, this.state.title).then((response) => {
			console.log(response.data)
		})
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onChangePicture(e) {
		this.setState({ picture: e.target.files[0] })
	}

	fileUpload(picture, title) {
		const id = this.props.match.params.id
		const url = `/api/adherent/${id}`
		const formData = new FormData()
		formData.append('picture', picture)

		formData.append('title', title)

		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}

		return axios.patch(url, formData, config)
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
					onClose={() => this.handleClose('searchModal', window.location.replace('/admin/HomePage/'))}
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
														<form
															onSubmit={this.onFormSubmit}
															encType="multipart/form-data"
															id="my-form"
														>
															<TextFieldGroup
																type="title"
																className={classes.margin}
																name="title"
																value={this.state.title}
																onChange={this.onChange}
															/>
															<br /> <br />
															<h4>Choisir une photo</h4>
															<input
																type="file"
																name="picture"
																onChange={this.onChangePicture}
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
	adherent: PropTypes.object.isRequired,
	getCurrentAdherent_id: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	adherent: state.adherent,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentAdherent_id })(withRouter(Modal))
)
