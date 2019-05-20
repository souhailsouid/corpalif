import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Grid from '@material-ui/core/Grid'

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
import isEmpty from 'validation/is-empty'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentAdherer_id } from 'actions/coordinationregionale/adhererActions'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			adherentPage: null,
			title: '',
			theme: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			InfoAreaTitle: '',
			InfoAreaTitle2: '',
			InfoAreaTitle3: '',
			InfoAreaTitle4: '',
			InfoAreaDescription: '',
			InfoAreaDescription2: '',
			InfoAreaDescription3: '',
			InfoAreaDescription4: '',
			imgCardCollectif: '',
			cardCategoryCollectifTitle: '',
			cardCategoryCollectifSubTitle: '',
			cardCategoryCollectifDescription: '',
			imgCardIndividuel: '',
			cardCategoryIndividuelTitle: '',
			cardCategoryIndividuelSubTitle: '',
			cardCategoryIndividuelDescription: '',
			file: '',
			adresseName: '',
			adresseName2: '',
			lieu: ''
		}

		this.onChange = this.onChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChangeField = this.onChangeField.bind(this)
		this.onChangePicture = this.onChangePicture.bind(this)
		this.onChangePicture2 = this.onChangePicture2.bind(this)
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

		this.props.getCurrentAdherer_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.adherentPage.adherentPage) {
			const adherentPage = nextProps.adherentPage.adherentPage
			adherentPage.title = !isEmpty(adherentPage.title) ? adherentPage.title : ''
			adherentPage.theme = !isEmpty(adherentPage.theme) ? adherentPage.theme : ''
			adherentPage.subtitle = !isEmpty(adherentPage.subtitle) ? adherentPage.subtitle : ''
			adherentPage.subtitle2 = !isEmpty(adherentPage.subtitle2) ? adherentPage.subtitle2 : ''
			adherentPage.subtitle3 = !isEmpty(adherentPage.subtitle3) ? adherentPage.subtitle3 : ''
			adherentPage.InfoAreaTitle = !isEmpty(adherentPage.InfoAreaTitle) ? adherentPage.InfoAreaTitle : ''
			adherentPage.InfoAreaTitle2 = !isEmpty(adherentPage.InfoAreaTitle2) ? adherentPage.InfoAreaTitle2 : ''
			adherentPage.InfoAreaTitle3 = !isEmpty(adherentPage.InfoAreaTitle3) ? adherentPage.InfoAreaTitle3 : ''
			adherentPage.InfoAreaTitle4 = !isEmpty(adherentPage.InfoAreaTitle4) ? adherentPage.InfoAreaTitle4 : ''
			adherentPage.InfoAreaDescription = !isEmpty(adherentPage.InfoAreaDescription)
				? adherentPage.InfoAreaDescription
				: ''
			adherentPage.InfoAreaDescription2 = !isEmpty(adherentPage.InfoAreaDescription2)
				? adherentPage.InfoAreaDescription2
				: ''
			adherentPage.InfoAreaDescription3 = !isEmpty(adherentPage.InfoAreaDescription3)
				? adherentPage.InfoAreaDescription3
				: ''
			adherentPage.InfoAreaDescription4 = !isEmpty(adherentPage.InfoAreaDescription4)
				? adherentPage.InfoAreaDescription4
				: ''
			adherentPage.imgCardCollectif = !isEmpty(adherentPage.imgCardCollectif) ? adherentPage.imgCardCollectif : ''
			adherentPage.cardCategoryCollectifTitle = !isEmpty(adherentPage.cardCategoryCollectifTitle)
				? adherentPage.cardCategoryCollectifTitle
				: ''
			adherentPage.cardCategoryCollectifSubTitle = !isEmpty(adherentPage.cardCategoryCollectifSubTitle)
				? adherentPage.cardCategoryCollectifSubTitle
				: ''
			adherentPage.cardCategoryCollectifDescription = !isEmpty(adherentPage.cardCategoryCollectifDescription)
				? adherentPage.cardCategoryCollectifDescription
				: ''
			adherentPage.imgCardIndividuel = !isEmpty(adherentPage.imgCardIndividuel)
				? adherentPage.imgCardIndividuel
				: ''
			adherentPage.cardCategoryIndividuelTitle = !isEmpty(adherentPage.cardCategoryIndividuelTitle)
				? adherentPage.cardCategoryIndividuelTitle
				: ''
			adherentPage.cardCategoryIndividuelSubTitle = !isEmpty(adherentPage.cardCategoryIndividuelSubTitle)
				? adherentPage.cardCategoryIndividuelSubTitle
				: ''
			adherentPage.cardCategoryIndividuelDescription = !isEmpty(adherentPage.cardCategoryIndividuelDescription)
				? adherentPage.cardCategoryIndividuelDescription
				: ''
			adherentPage.adresseName = !isEmpty(adherentPage.adresseName) ? adherentPage.adresseName : ''
			adherentPage.adresseName2 = !isEmpty(adherentPage.adresseName2) ? adherentPage.adresseName2 : ''
			adherentPage.lieu = !isEmpty(adherentPage.lieu) ? adherentPage.lieu : ''

			// Set component fields state
			this.setState({
				title: adherentPage.title,
				theme: adherentPage.theme,
				subtitle: adherentPage.subtitle,
				subtitle2: adherentPage.subtitle2,
				subtitle3: adherentPage.subtitle3,
				InfoAreaTitle: adherentPage.InfoAreaTitle,
				InfoAreaTitle2: adherentPage.InfoAreaTitle2,
				InfoAreaTitle3: adherentPage.InfoAreaTitle3,
				InfoAreaTitle4: adherentPage.InfoAreaTitle4,
				InfoAreaDescription: adherentPage.InfoAreaDescription,
				InfoAreaDescription2: adherentPage.InfoAreaDescription2,
				InfoAreaDescription3: adherentPage.InfoAreaDescription3,
				InfoAreaDescription4: adherentPage.InfoAreaDescription4,
				imgCardCollectif: adherentPage.imgCardCollectif,
				cardCategoryCollectifTitle: adherentPage.cardCategoryCollectifTitle,
				cardCategoryCollectifSubTitle: adherentPage.cardCategoryCollectifSubTitle,
				cardCategoryCollectifDescription: adherentPage.cardCategoryCollectifDescription,
				imgCardIndividuel: adherentPage.imgCardIndividuel,
				cardCategoryIndividuelTitle: adherentPage.cardCategoryIndividuelTitle,
				cardCategoryIndividuelSubTitle: adherentPage.cardCategoryIndividuelSubTitle,
				cardCategoryIndividuelDescription: adherentPage.cardCategoryIndividuelDescription,
				file: adherentPage.file,
				adresseName: adherentPage.adresseName,
				adresseName2: adherentPage.adresseName2,
				lieu: adherentPage.lieu
			})
		}
	}

	onFormSubmit(e) {
		e.preventDefault() // Stop form submit
		this.fileUpload(
			this.state.title,
			this.state.theme,
			this.state.subtitle,
			this.state.subtitle2,
			this.state.subtitle3,
			this.state.InfoAreaTitle,
			this.state.InfoAreaTitle2,
			this.state.InfoAreaTitle3,
			this.state.InfoAreaTitle4,
			this.state.InfoAreaDescription,
			this.state.InfoAreaDescription2,
			this.state.InfoAreaDescription3,
			this.state.InfoAreaDescription4,
			this.state.imgCardCollectif,
			this.state.cardCategoryCollectifTitle,
			this.state.cardCategoryCollectifSubTitle,
			this.state.cardCategoryCollectifDescription,
			this.state.imgCardIndividuel,
			this.state.cardCategoryIndividuelTitle,
			this.state.cardCategoryIndividuelSubTitle,
			this.state.cardCategoryIndividuelDescription,
			this.state.file,
			this.state.adresseName,
			this.state.adresseName2,
			this.state.lieu
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
		this.setState({ imgCardCollectif: e.target.files[0] })
	}
	onChangePicture2(e) {
		this.setState({ imgCardIndividuel: e.target.files[0] })
	}
	fileUpload(
		title,
		theme,
		subtitle,
		subtitle2,
		subtitle3,
		InfoAreaTitle,
		InfoAreaTitle2,
		InfoAreaTitle3,
		InfoAreaTitle4,
		InfoAreaDescription,
		InfoAreaDescription2,
		InfoAreaDescription3,
		InfoAreaDescription4,
		imgCardCollectif,
		cardCategoryCollectifTitle,
		cardCategoryCollectifSubTitle,
		cardCategoryCollectifDescription,
		imgCardIndividuel,
		cardCategoryIndividuelTitle,
		cardCategoryIndividuelSubTitle,
		cardCategoryIndividuelDescription,
		file,
		adresseName,
		adresseName2,
		lieu
	) {
		const id = this.props.match.params.id
		const url = `/api/adherers/${id}`
		const formData = new FormData()
		formData.append('title', title)
		formData.append('theme', theme)
		formData.append('subtitle', subtitle)
		formData.append('subtitle2', subtitle2)
		formData.append('subtitle3', subtitle3)
		formData.append('InfoAreaTitle', InfoAreaTitle)
		formData.append('InfoAreaTitle2', InfoAreaTitle2)
		formData.append('InfoAreaTitle3', InfoAreaTitle3)
		formData.append('InfoAreaTitle4', InfoAreaTitle4)
		formData.append('InfoAreaDescription', InfoAreaDescription)
		formData.append('InfoAreaDescription2', InfoAreaDescription2)
		formData.append('InfoAreaDescription3', InfoAreaDescription3)
		formData.append('InfoAreaDescription4', InfoAreaDescription4)
		formData.append('imgCardCollectif', imgCardCollectif)
		formData.append('cardCategoryCollectifTitle', cardCategoryCollectifTitle)
		formData.append('cardCategoryCollectifSubTitle', cardCategoryCollectifSubTitle)
		formData.append('cardCategoryCollectifDescription', cardCategoryCollectifDescription)
		formData.append('imgCardIndividuel', imgCardIndividuel)
		formData.append('cardCategoryIndividuelTitle', cardCategoryIndividuelTitle)
		formData.append('cardCategoryIndividuelSubTitle', cardCategoryIndividuelSubTitle)
		formData.append('cardCategoryIndividuelDescription', cardCategoryIndividuelDescription)
		formData.append('lieu', lieu)
		formData.append('adresseName', adresseName)
		formData.append('adresseName2', adresseName2)
		formData.append('file', file)

		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
		window.location.assign('/admin/menu/coordinationregionale/adherer/adherer/')
		return axios.patch(url, formData, config)
	}

	render() {
		const { classes } = this.props

		return (
			<GridContainer>
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
							<form onSubmit={this.onFormSubmit} encType="multipart/form-data" id="my-form">
								<Card
									plain
									className={classes.modalSearchCard}
									style={{ border: '1px solid gray', padding: 20 }}
								>
									<h3
										style={{
											textAlign: 'center',
											textDecoration: 'underline'
										}}
									>
										1st sections
									</h3>
									<TextFieldGroup
										label="title"
										name="title"
										value={this.state.title}
										onChange={this.onChange}
									/>
									<MuiThemeProvider theme={theme}>
										<TextField
											label="Theme"
											name="theme"
											fullWidth
											multiline
											inputProps={{
												rows: 3
											}}
											value={this.state.theme}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
								</Card>
								<br /> <br />
								<Card
									plain
									className={classes.modalSearchCard}
									style={{ border: '1px solid gray', padding: 20 }}
								>
									<h3
										style={{
											textAlign: 'center',
											textDecoration: 'underline'
										}}
									>
										2nd sections
									</h3>
									<h2 style={{ color: '#cc4949', textAlign: 'center' }}>titre</h2>
									<TextFieldGroup
										type="subtitle"
										className={classes.margin}
										name="subtitle"
										multiline
										value={this.state.subtitle}
										onChange={this.onChange}
									/>
									<br /> <br />
									<h2 style={{ color: '#cc4949', textAlign: 'center' }}>Place icon</h2>
									<TextFieldGroup
										type="InfoAreaTitle"
										className={classes.margin}
										name="InfoAreaTitle"
										value={this.state.InfoAreaTitle}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="InfoAreaDescription"
										className={classes.margin}
										name="InfoAreaDescription"
										value={this.state.InfoAreaDescription}
										onChange={this.onChange}
									/>
									<br />
									<br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaTitle2"
											className={classes.margin}
											name="InfoAreaTitle2"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaTitle2}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaDescription2"
											className={classes.margin}
											name="InfoAreaDescription2"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaDescription2}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
								</Card>
								<br /> <br />
								<Card
									plain
									className={classes.modalSearchCard}
									style={{ border: '1px solid gray', padding: 20 }}
								>
									<h3
										style={{
											textAlign: 'center',
											textDecoration: 'underline'
										}}
									>
										3rd sections
									</h3>
									<h2 style={{ color: '#cc4949', textAlign: 'center' }}>TITRE</h2>
									<TextFieldGroup
										type="subtitle2"
										className={classes.margin}
										name="subtitle2"
										value={this.state.subtitle2}
										onChange={this.onChange}
									/>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaTitle3"
											className={classes.margin}
											name="InfoAreaTitle3"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaTitle3}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaDescription3"
											className={classes.margin}
											name="InfoAreaDescription3"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaDescription3}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaTitle4"
											className={classes.margin}
											name="InfoAreaTitle4"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaTitle4}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaDescription4"
											className={classes.margin}
											name="InfoAreaDescription4"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaDescription4}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="subtitle3"
											className={classes.margin}
											name="subtitle3"
											fullWidth
											multiline
											value={this.state.subtitle3}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<h1>Sections suivantes</h1>
									<h4>Choisir une photo à titre collectif</h4>
									<input type="file" name="imgCardCollectif" onChange={this.onChangePicture} />
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="cardCategoryCollectifTitle"
											className={classes.margin}
											name="cardCategoryCollectifTitle"
											fullWidth
											multiline
											value={this.state.cardCategoryCollectifTitle}
											onChange={this.onChange}
										/>

										<TextField
											label="cardCategoryCollectifSubTitle"
											className={classes.margin}
											name="cardCategoryCollectifSubTitle"
											fullWidth
											multiline
											value={this.state.cardCategoryCollectifSubTitle}
											onChange={this.onChange}
										/>
										<TextField
											label="cardCategoryCollectifDescription"
											className={classes.margin}
											name="cardCategoryCollectifDescription"
											fullWidth
											multiline
											value={this.state.cardCategoryCollectifDescription}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<h4>Choisir une photo à titre individuel</h4>
									<input type="file" name="imgCardIndividuel" onChange={this.onChangePicture2} />
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="cardCategoryIndividuelTitle"
											className={classes.margin}
											name="cardCategoryIndividuelTitle"
											fullWidth
											multiline
											value={this.state.cardCategoryIndividuelTitle}
											onChange={this.onChange}
										/>
										<TextField
											label="cardCategoryIndividuelSubTitle"
											className={classes.margin}
											name="cardCategoryIndividuelSubTitle"
											fullWidth
											multiline
											value={this.state.cardCategoryIndividuelSubTitle}
											onChange={this.onChange}
										/>
										<TextField
											label="cardCategoryIndividuelDescription"
											className={classes.margin}
											name="cardCategoryIndividuelDescription"
											fullWidth
											multiline
											value={this.state.cardCategoryIndividuelDescription}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<h4> fichier d'adhesion</h4>
									<input type="file" name="file" onChange={this.onChangeField} />
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="file"
											className={classes.margin}
											name="file"
											fullWidth
											multiline
											value={this.state.file}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
								</Card>
								<Card
									plain
									className={classes.modalSearchCard}
									style={{ border: '1px solid gray', padding: 20 }}
								>
									<h3
										style={{
											textAlign: 'center',
											textDecoration: 'underline'
										}}
									>
										Derniere sections, Adherer par chèques
									</h3>
									<TextFieldGroup
										type="adresseName"
										className={classes.margin}
										name="adresseName"
										value={this.state.adresseName}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="adresseName2"
										className={classes.margin}
										name="adresseName2"
										value={this.state.adresseName2}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="lieu"
										className={classes.margin}
										name="lieu"
										value={this.state.lieu}
										onChange={this.onChange}
									/>
									<br /> <br />
								</Card>
								<MuiThemeProvider>
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
								</MuiThemeProvider>
							</form>
						</GridItem>
					</GridContainer>
				</div>
			</GridContainer>
		)
	}
}

Modal.propTypes = {
	adherentPage: PropTypes.object.isRequired,
	getCurrentAdherer_id: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	adherentPage: state.adherentPage,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentAdherer_id })(withRouter(Modal))
)
