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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
// common
import TextFieldGroup from 'views/common/TextFieldGroup'
// Redux

import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})

function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			privateInfo: null,
			theme: '',
			message: '',
			picture: null,
			file: null,
			title: '',
			fileName: ''
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChangeField = this.onChangeField.bind(this)
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
	}

	onFormSubmit(e) {
		e.preventDefault() // Stop form submit
		this.fileUpload(
			this.state.file,
			this.state.picture,
			this.state.theme,
			this.state.title,
			this.state.message,
			this.state.fileName
		).then((response) => {
			console.log(response.data)
		})
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onChangeField(e) {
		this.setState({ file: e.target.files[0] })
	}
	onChangePicture(e) {
		this.setState({ picture: e.target.files[0] })
	}
	fileUpload(file, picture, theme, title, message, fileName) {
		const url = `/api/rencontre_inscrit`
		const formData = new FormData()
		formData.append('picture', picture)
		formData.append('file', file)
		formData.append('theme', theme)
		formData.append('title', title)
		formData.append('message', message)
		formData.append('fileName', fileName)
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}

		return axios.post(url, formData, config)
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
					onClose={() =>
						this.handleClose(
							'searchModal',
							window.location.replace('/#/admin/menu/veillemedicale/privateinfo/')
						)}
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
																label="Theme"
																name="theme"
																value={this.state.theme}
																onChange={this.onChange}
															/>
															<br /> <br />
															<TextFieldGroup
																type="title"
																className={classes.margin}
																name="title"
																value={this.state.title}
																onChange={this.onChange}
															/>
															<br /> <br />
															<MuiThemeProvider theme={theme}>
																<TextField
																	label="message"
																	className={classes.margin}
																	name="message"
																	inputProps={{
																		rows: 8
																	}}
																	fullWidth
																	multiline
																	value={this.state.message}
																	onChange={this.onChange}
																/>
															</MuiThemeProvider>
															<br /> <br />
															<TextFieldGroup
																type="fileName"
																className={classes.margin}
																name="fileName"
																value={this.state.fileName}
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
															<h4>Choisir un fichier</h4>
															<input
																type="file"
																name="file"
																onChange={this.onChangeField}
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
	privateInfo: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	privateInfo: state.privateInfo,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(connect(mapStateTopProps)(withRouter(Modal)))
