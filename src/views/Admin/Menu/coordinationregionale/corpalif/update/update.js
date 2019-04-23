import React from 'react'
import PropTypes from 'prop-types'
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

// common
import TextFieldGroup from 'views/common/TextFieldGroup'
// Redux
import isEmpty from 'validation/is-empty'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentCorpalif_id, updateCorpalif } from 'actions/coordinationregionale/CorpalifActions'
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
			corpalif: null,
			title: '',
			text: '',
			theme: '',
			subtitle: '',
			subtitle2: '',
			subtitle3: '',
			description: '',
			InfoAreaTitle: '',
			InfoAreaTitle2: '',
			InfoAreaTitle3: '',
			InfoAreaTitle4: '',
			InfoAreaTitle5: '',
			InfoAreaDescription: '',
			InfoAreaDescription2: '',
			InfoAreaDescription3: '',
			InfoAreaDescription4: '',
			InfoAreaDescription5: '',
			paragraphe1: '',
			paragraphe2: '',
			paragraphe3: ''
		}
		this.onSubmit = this.onSubmit.bind(this)

		this.onChange = this.onChange.bind(this)
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

		this.props.getCurrentCorpalif_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.corpalif.corpalif) {
			const corpalif = nextProps.corpalif.corpalif
			corpalif.title = !isEmpty(corpalif.title) ? corpalif.title : ''
			corpalif.text = !isEmpty(corpalif.text) ? corpalif.text : ''
			corpalif.theme = !isEmpty(corpalif.theme) ? corpalif.theme : ''
			corpalif.subtitle = !isEmpty(corpalif.subtitle) ? corpalif.subtitle : ''
			corpalif.subtitle2 = !isEmpty(corpalif.subtitle2) ? corpalif.subtitle2 : ''
			corpalif.subtitle3 = !isEmpty(corpalif.subtitle3) ? corpalif.subtitle3 : ''
			corpalif.description = !isEmpty(corpalif.description) ? corpalif.description : ''
			corpalif.InfoAreaTitle = !isEmpty(corpalif.InfoAreaTitle) ? corpalif.InfoAreaTitle : ''
			corpalif.InfoAreaTitle2 = !isEmpty(corpalif.InfoAreaTitle2) ? corpalif.InfoAreaTitle2 : ''
			corpalif.InfoAreaTitle3 = !isEmpty(corpalif.InfoAreaTitle3) ? corpalif.InfoAreaTitle3 : ''
			corpalif.InfoAreaTitle4 = !isEmpty(corpalif.InfoAreaTitle4) ? corpalif.InfoAreaTitle4 : ''
			corpalif.InfoAreaTitle5 = !isEmpty(corpalif.InfoAreaTitle5) ? corpalif.InfoAreaTitle5 : ''
			corpalif.InfoAreaDescription = !isEmpty(corpalif.InfoAreaDescription) ? corpalif.InfoAreaDescription : ''
			corpalif.InfoAreaDescription2 = !isEmpty(corpalif.InfoAreaDescription2) ? corpalif.InfoAreaDescription2 : ''
			corpalif.InfoAreaDescription3 = !isEmpty(corpalif.InfoAreaDescription3) ? corpalif.InfoAreaDescription3 : ''
			corpalif.InfoAreaDescription4 = !isEmpty(corpalif.InfoAreaDescription4) ? corpalif.InfoAreaDescription4 : ''
			corpalif.InfoAreaDescription5 = !isEmpty(corpalif.InfoAreaDescription5) ? corpalif.InfoAreaDescription5 : ''
			corpalif.paragraphe1 = !isEmpty(corpalif.paragraphe1) ? corpalif.paragraphe1 : ''
			corpalif.paragraphe2 = !isEmpty(corpalif.paragraphe2) ? corpalif.paragraphe2 : ''
			corpalif.paragraphe3 = !isEmpty(corpalif.paragraphe3) ? corpalif.paragraphe3 : ''

			// Set component fields state
			this.setState({
				text: corpalif.text,
				title: corpalif.title,
				theme: corpalif.theme,
				subtitle: corpalif.subtitle,
				subtitle2: corpalif.subtitle2,
				subtitle3: corpalif.subtitle3,
				description: corpalif.description,
				InfoAreaTitle: corpalif.InfoAreaTitle,
				InfoAreaTitle2: corpalif.InfoAreaTitle2,
				InfoAreaTitle3: corpalif.InfoAreaTitle3,
				InfoAreaTitle4: corpalif.InfoAreaTitle4,
				InfoAreaTitle5: corpalif.InfoAreaTitle5,
				InfoAreaDescription: corpalif.InfoAreaDescription,
				InfoAreaDescription2: corpalif.InfoAreaDescription2,
				InfoAreaDescription3: corpalif.InfoAreaDescription3,
				InfoAreaDescription4: corpalif.InfoAreaDescription4,
				InfoAreaDescription5: corpalif.InfoAreaDescription5,
				paragraphe1: corpalif.paragraphe1,
				paragraphe2: corpalif.paragraphe2,
				paragraphe3: corpalif.paragraphe3
			})
		}
	}
	onSubmit(e) {
		e.preventDefault()

		const Data = {
			title: this.state.title,
			text: this.state.text,
			theme: this.state.theme,
			subtitle: this.state.subtitle,
			subtitle2: this.state.subtitle2,
			subtitle3: this.state.subtitle3,
			description: this.state.description,
			InfoAreaTitle: this.state.InfoAreaTitle,
			InfoAreaTitle2: this.state.InfoAreaTitle2,
			InfoAreaTitle3: this.state.InfoAreaTitle3,
			InfoAreaTitle4: this.state.InfoAreaTitle4,
			InfoAreaTitle5: this.state.InfoAreaTitle5,
			InfoAreaDescription: this.state.InfoAreaDescription,
			InfoAreaDescription2: this.state.InfoAreaDescription2,
			InfoAreaDescription3: this.state.InfoAreaDescription3,
			InfoAreaDescription4: this.state.InfoAreaDescription4,
			InfoAreaDescription5: this.state.InfoAreaDescription5,
			paragraphe1: this.state.paragraphe1,
			paragraphe2: this.state.paragraphe2,
			paragraphe3: this.state.paragraphe3
		}

		this.props.updateCorpalif(this.props.match.params.id, Data)
		window.location.assign('/admin/menu/coordinationregionale/corpalif/corpalif')
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
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
							<form onSubmit={this.onSubmit}>
								<h1>1er section</h1>
								<TextFieldGroup
									label="title"
									name="title"
									value={this.state.title}
									onChange={this.onChange}
								/>
								<TextFieldGroup
									label="Theme"
									name="theme"
									fullWidth
									multiline
									value={this.state.theme}
									onChange={this.onChange}
								/>
								<br /> <br />
								<MuiThemeProvider theme={theme}>
									<TextField
										label="text"
										className={classes.margin}
										name="text"
										inputProps={{
											rows: 5
										}}
										fullWidth
										multiline
										value={this.state.text}
										onChange={this.onChange}
									/>
								</MuiThemeProvider>
								<br />
								<h1>2nd section</h1>
								<h2 style={{ color: '#cc4949', textAlign: 'center' }}>titre</h2>
								<TextFieldGroup
									type="subtitle"
									className={classes.margin}
									name="subtitle"
									fullWidth
									multiline
									value={this.state.subtitle}
									onChange={this.onChange}
								/>
								<br /> <br />
								<h2 style={{ color: '#cc4949', textAlign: 'center' }}>Place icon</h2>
								<MuiThemeProvider theme={theme}>
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
									<h1>3nd sections</h1>
									<h2 style={{ color: '#cc4949', textAlign: 'center' }}>TITRE</h2>
									<TextFieldGroup
										type="subtitle2"
										className={classes.margin}
										name="subtitle2"
										value={this.state.subtitle2}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextField
										label="Description"
										className={classes.margin}
										name="description"
										fullWidth
										multiline
										value={this.state.description}
										onChange={this.onChange}
									/>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="paragraphe1"
											className={classes.margin}
											name="paragraphe1"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.paragraphe1}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="paragraphe2"
											className={classes.margin}
											name="paragraphe2"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.paragraphe2}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br />
									<br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="paragraphe3"
											className={classes.margin}
											name="paragraphe3"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.paragraphe3}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<h1>4nd sections</h1>
									<h2 style={{ color: '#cc4949', textAlign: 'center' }}>titre</h2>
									<TextFieldGroup
										type="subtitle3"
										className={classes.margin}
										name="subtitle3"
										value={this.state.subtitle3}
										onChange={this.onChange}
									/>
									<br /> <br />
									<h2 style={{ color: '#cc4949', textAlign: 'center' }}>Place icon</h2>
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
											label="InfoAreaTitle5"
											className={classes.margin}
											name="InfoAreaTitle5"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaTitle5}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br />
									<br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaDescription5"
											className={classes.margin}
											name="InfoAreaDescription5"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaDescription5}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
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
	corpalif: PropTypes.object.isRequired,
	getCurrentCorpalif_id: PropTypes.func.isRequired,
	updateCorpalif: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	corpalif: state.corpalif,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentCorpalif_id, updateCorpalif })(withRouter(Modal))
)
