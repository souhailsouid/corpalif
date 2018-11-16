import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import axios, { post } from 'axios'

// @material-ui/core components
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

// core components
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

class PostRecommandation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displaySocialInputs: false,
			theme: '',
			message: '',

			title: '',
			// picture: null,

			file: null
		}

		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.fileUpload = this.fileUpload.bind(this)
		this.onChangePicture = this.onChangePicture.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.recommandation) {
			const recommandation = nextProps.auth.recommandation

			this.setState({
				theme: recommandation.theme,
				message: recommandation.message,
				title: recommandation.title
				// picture: recommandation.picture,
				// file: recommandation.file
			})
		}
	}

	onSubmit(e, file) {
		e.preventDefault()

		const Data = {
			theme: this.state.theme,
			message: this.state.message,
			title: this.state.title
			// picture: this.state.picture,
			// file: this.state.file
		}

		this.props.post_Recommandation(Data, this.props.history)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onFormSubmit(e) {
		e.preventDefault() // Stop form submit
		this.fileUpload(this.state.file).then((response) => {
			console.log(response.data)
		})
	}

	onChangePicture(e) {
		this.setState({ file: e.target.files[0] })
	}
	fileUpload(file) {
		const url = 'http://localhost:5000/api/recommandation/'
		const formData = new FormData()
		formData.append('file', file)
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
		return post(url, formData, config)
	}
	render() {
		const { classes } = this.props
		const picture = this.state.picture
		console.log(picture)
		return (
			<div>
				<div>
					<div>
						<HeaderComponent />
						<div className={classNames(classes.main, classes.mainRaised)}>
							<GridContainer style={{ justifyContent: 'center' }}>
								<GridItem xs={12} sm={12} md={5}>
									<div style={{ textAlign: 'center', marginTop: 200, marginBottom: 50 }}>
										<h1>Ajouter une structure</h1>
									</div>
									<form onSubmit={this.onSubmit}>
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
										<TextFieldGroup
											placeholder="message"
											className={classes.margin}
											name="message"
											value={this.state.message}
											onChange={this.onChange}
										/>
										<form onSubmit={this.onFormSubmit}>
											<h1>File Upload</h1>
											<input type="file" onChange={this.onChangePicture} />

											<Grid container direction="row" justify="center" style={{ marginTop: 40 }}>
												{/* <Button type="submit" value="Submit" color="green">
												Ajouter
											</Button> */}
											</Grid>
										</form>
										<br /> <br />
										<br /> <br />
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

PostRecommandation.propTypes = {
	recommandation: PropTypes.object.isRequired,

	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	recommandation: state.recommandation,

	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { post_Recommandation })(withRouter(PostRecommandation))
)
