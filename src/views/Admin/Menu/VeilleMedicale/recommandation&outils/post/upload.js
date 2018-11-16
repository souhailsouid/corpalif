import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import axios, { post } from 'axios'

// @material-ui/core components
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import ImageUpload from 'components/CustomUpload/ImageUpload.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import SectionFooter from 'views/Footer/SectionFooter.jsx'
import HeaderComponent from 'views/Header/AppBar.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
// common
import TextFieldGroup from 'views/common/TextFieldGroup'
// Redux
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { post_Recommandation } from 'actions/menu/veillemedicale/recommandationActions'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#337467'
		}
	}
})
class Upload extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displaySocialInputs: false,
			theme: '',
			title: '',
			message: '',
			fileName: '',
			picture: null,
			file: null
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onChangePicture = this.onChangePicture.bind(this)
		this.onChangeField = this.onChangeField.bind(this)
		this.fileUpload = this.fileUpload.bind(this)
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
		const url = 'http://localhost:5000/api/recommandation/'
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

		return post(url, formData, config)
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<div>
					<div>
						<HeaderComponent />
						<div className={classNames(classes.main, classes.mainRaised)}>
							<GridContainer style={{ justifyContent: 'center' }}>
								<GridItem xs={12} sm={12} md={5}>
									<div style={{ textAlign: 'center', marginTop: 200, marginBottom: 50 }}>
										<h1>Ajouter un post</h1>
									</div>
									<form onSubmit={this.onFormSubmit}>
										<h1>File Upload</h1>
										<TextFieldGroup
											placeholder="Theme"
											name="theme"
											value={this.state.theme}
											onChange={this.onChange}
										/>
										<br /> <br />
										<TextFieldGroup
											placeholder="titre"
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
											placeholder="Nom du fichier"
											className={classes.margin}
											name="fileName"
											value={this.state.FileName}
											onChange={this.onChange}
										/>
										<h4>Choisir une photo</h4>
										<input type="file" onChange={this.onChangePicture} />
										<br /> <br />
										<h4>Choisir un fichier</h4>
										<input type="file" onChange={this.onChangeField} />
										<Grid container direction="row" justify="center" style={{ marginTop: 40 }}>
											<Button type="submit" value="Submit" color="green">
												Ajouter
											</Button>
										</Grid>
									</form>
								</GridItem>
							</GridContainer>
						</div>
					</div>
				</div>
				<SectionFooter />
			</div>
		)
	}
}

Upload.propTypes = {
	recommandation: PropTypes.object.isRequired,

	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	recommandation: state.recommandation,

	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { post_Recommandation })(withRouter(Upload))
)
