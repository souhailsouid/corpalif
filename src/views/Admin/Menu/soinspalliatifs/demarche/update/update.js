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
import { getCurrentDemarche_id, updateDemarche } from 'actions/soinspalliatifs/DemarcheActions'
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
			demarche: null,
			title: '',
			description: '',
			description2: '',
			subtitle: '',
			linksTitle: '',
			linksTitle2: '',
			linksURL: '',
			linksURL2: '',
			InfoAreaTitle: '',
			InfoAreaTitle2: '',
			InfoAreaTitle3: '',
			InfoAreaTitle4: '',
			InfoAreaTitle5: '',
			InfoAreaTitle6: '',
			InfoAreaDescription: '',
			InfoAreaDescription2: '',
			InfoAreaDescription3: '',
			InfoAreaDescription4: '',
			InfoAreaDescription5: '',
			InfoAreaDescription6: ''
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

		this.props.getCurrentDemarche_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.demarche.demarche) {
			const demarche = nextProps.demarche.demarche

			demarche.title = !isEmpty(demarche.title) ? demarche.title : ''

			demarche.description = !isEmpty(demarche.description) ? demarche.description : ''

			demarche.description2 = !isEmpty(demarche.description2) ? demarche.description2 : ''

			demarche.subtitle = !isEmpty(demarche.subtitle) ? demarche.subtitle : ''

			demarche.linksTitle = !isEmpty(demarche.linksTitle) ? demarche.linksTitle : ''

			demarche.linksTitle2 = !isEmpty(demarche.linksTitle2) ? demarche.linksTitle2 : ''

			demarche.linksURL = !isEmpty(demarche.linksURL) ? demarche.linksURL : ''

			demarche.linksURL2 = !isEmpty(demarche.linksURL2) ? demarche.linksURL2 : ''

			demarche.InfoAreaTitle = !isEmpty(demarche.InfoAreaTitle) ? demarche.InfoAreaTitle : ''

			demarche.InfoAreaTitle2 = !isEmpty(demarche.InfoAreaTitle2) ? demarche.InfoAreaTitle2 : ''

			demarche.InfoAreaTitle3 = !isEmpty(demarche.InfoAreaTitle3) ? demarche.InfoAreaTitle3 : ''

			demarche.InfoAreaTitle4 = !isEmpty(demarche.InfoAreaTitle4) ? demarche.InfoAreaTitle4 : ''

			demarche.InfoAreaTitle5 = !isEmpty(demarche.InfoAreaTitle5) ? demarche.InfoAreaTitle5 : ''

			demarche.InfoAreaTitle6 = !isEmpty(demarche.InfoAreaTitle6) ? demarche.InfoAreaTitle6 : ''

			demarche.InfoAreaDescription = !isEmpty(demarche.InfoAreaDescription) ? demarche.InfoAreaDescription : ''

			demarche.InfoAreaDescription2 = !isEmpty(demarche.InfoAreaDescription2) ? demarche.InfoAreaDescription2 : ''

			demarche.InfoAreaDescription3 = !isEmpty(demarche.InfoAreaDescription3) ? demarche.InfoAreaDescription3 : ''

			demarche.InfoAreaDescription4 = !isEmpty(demarche.InfoAreaDescription4) ? demarche.InfoAreaDescription4 : ''

			demarche.InfoAreaDescription5 = !isEmpty(demarche.InfoAreaDescription5) ? demarche.InfoAreaDescription5 : ''

			demarche.InfoAreaDescription6 = !isEmpty(demarche.InfoAreaDescription6) ? demarche.InfoAreaDescription6 : ''

			// Set component fields state
			this.setState({
				title: demarche.title,

				description: demarche.description,
				description2: demarche.description2,
				subtitle: demarche.subtitle,
				linksTitle: demarche.linksTitle,
				linksTitle2: demarche.linksTitle2,
				linksURL: demarche.linksURL,
				linksURL2: demarche.linksURL2,
				InfoAreaTitle: demarche.InfoAreaTitle,
				InfoAreaTitle2: demarche.InfoAreaTitle2,
				InfoAreaTitle3: demarche.InfoAreaTitle3,
				InfoAreaTitle4: demarche.InfoAreaTitle4,
				InfoAreaTitle5: demarche.InfoAreaTitle5,
				InfoAreaTitle6: demarche.InfoAreaTitle6,
				InfoAreaDescription: demarche.InfoAreaDescription,
				InfoAreaDescription2: demarche.InfoAreaDescription2,
				InfoAreaDescription3: demarche.InfoAreaDescription3,
				InfoAreaDescription4: demarche.InfoAreaDescription4,
				InfoAreaDescription5: demarche.InfoAreaDescription5,
				InfoAreaDescription6: demarche.InfoAreaDescription6
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			title: this.state.title,

			description: this.state.description,
			description2: this.state.description2,
			subtitle: this.state.subtitle,
			linksTitle: this.state.linksTitle,
			linksTitle2: this.state.linksTitle2,
			linksURL: this.state.linksURL,
			linksURL2: this.state.linksURL2,
			InfoAreaTitle: this.state.InfoAreaTitle,
			InfoAreaTitle2: this.state.InfoAreaTitle2,
			InfoAreaTitle3: this.state.InfoAreaTitle3,
			InfoAreaTitle4: this.state.InfoAreaTitle4,
			InfoAreaTitle5: this.state.InfoAreaTitle5,
			InfoAreaTitle6: this.state.InfoAreaTitle6,
			InfoAreaDescription: this.state.InfoAreaDescription,
			InfoAreaDescription2: this.state.InfoAreaDescription2,
			InfoAreaDescription3: this.state.InfoAreaDescription3,
			InfoAreaDescription4: this.state.InfoAreaDescription4,
			InfoAreaDescription5: this.state.InfoAreaDescription5,
			InfoAreaDescription6: this.state.InfoAreaDescription6
		}

		this.props.updateDemarche(this.props.match.params.id, Data)
		window.location.assign('/admin/menu/soinspalliatifs/demarche/')
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
									label="description"
									name="description"
									fullWidth
									multiline
									value={this.state.description}
									onChange={this.onChange}
								/>
								<TextFieldGroup
									label="description2"
									name="description2"
									fullWidth
									multiline
									value={this.state.description2}
									onChange={this.onChange}
								/>
								<br /> <br />
								<h1>2nd section</h1>
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
										type="subtitle"
										className={classes.margin}
										name="subtitle"
										value={this.state.subtitle}
										onChange={this.onChange}
									/>
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
									<br /> <br />
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
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaTitle6"
											className={classes.margin}
											name="InfoAreaTitle6"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaTitle6}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="InfoAreaDescription6"
											className={classes.margin}
											name="InfoAreaDescription6"
											inputProps={{
												rows: 2
											}}
											fullWidth
											multiline
											value={this.state.InfoAreaDescription6}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<h1>Sections suivantes</h1>
									<TextFieldGroup
										type="linksTitle"
										className={classes.margin}
										name="linksTitle"
										value={this.state.linksTitle}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="linksURL"
										className={classes.margin}
										name="linksURL"
										value={this.state.linksURL}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="linksTitle2"
										className={classes.margin}
										name="linksTitle2"
										value={this.state.linksTitle2}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="linksURL2"
										className={classes.margin}
										name="linksURL2"
										value={this.state.linksURL2}
										onChange={this.onChange}
									/>
									<br /> <br />
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
							</form>
						</GridItem>
					</GridContainer>
				</div>
			</GridContainer>
		)
	}
}

Modal.propTypes = {
	demarche: PropTypes.object.isRequired,
	getCurrentDemarche_id: PropTypes.func.isRequired,
	updateDemarche: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	demarche: state.demarche,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentDemarche_id, updateDemarche })(withRouter(Modal))
)
