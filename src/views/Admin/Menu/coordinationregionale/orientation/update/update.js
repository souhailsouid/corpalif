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
import Card from 'components/Card/Card.jsx'
// common
import TextFieldGroup from 'views/common/TextFieldGroup'
// Redux
import isEmpty from 'validation/is-empty'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentOrientation_id, updateOrientation } from 'actions/coordinationregionale/OrientationActions'
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
			orientation: null,
			title: '',
			theme: '',
			subtitle: '',
			subtitle2: '',
			subtitleDescription: '',
			subtitleDescription2: '',
			subtitleDescription3: '',
			description: '',
			liensTitle: '',
			liensTitle2: '',
			liensUrl: '',
			liensUrl2: ''
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

		this.props.getCurrentOrientation_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.orientation.orientation) {
			const orientation = nextProps.orientation.orientation

			orientation.theme = !isEmpty(orientation.theme) ? orientation.theme : ''
			orientation.subtitle = !isEmpty(orientation.subtitle) ? orientation.subtitle : ''
			orientation.subtitle2 = !isEmpty(orientation.subtitle2) ? orientation.subtitle2 : ''
			orientation.subtitleDescription = !isEmpty(orientation.subtitleDescription)
				? orientation.subtitleDescription
				: ''
			orientation.subtitleDescription2 = !isEmpty(orientation.subtitleDescription2)
				? orientation.subtitleDescription2
				: ''
			orientation.subtitleDescription3 = !isEmpty(orientation.subtitleDescription3)
				? orientation.subtitleDescription3
				: ''
			orientation.description = !isEmpty(orientation.description) ? orientation.description : ''
			orientation.liensTitle = !isEmpty(orientation.liensTitle) ? orientation.liensTitle : ''
			orientation.liensTitle2 = !isEmpty(orientation.liensTitle2) ? orientation.liensTitle2 : ''
			orientation.liensUrl = !isEmpty(orientation.liensUrl) ? orientation.liensUrl : ''
			orientation.liensUrl2 = !isEmpty(orientation.liensUrl2) ? orientation.liensUrl2 : ''
			// Set component fields state
			this.setState({
				title: orientation.title,
				theme: orientation.theme,
				subtitle: orientation.subtitle,
				subtitle2: orientation.subtitle2,
				subtitleDescription: orientation.subtitleDescription,
				subtitleDescription2: orientation.subtitleDescription2,
				subtitleDescription3: orientation.subtitleDescription3,
				description: orientation.description,
				liensTitle: orientation.liensTitle,
				liensTitle2: orientation.liensTitle2,
				liensUrl: orientation.liensUrl,
				liensUrl2: orientation.liensUrl2
			})
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	onSubmit(e) {
		e.preventDefault()

		const Data = {
			title: this.state.title,
			theme: this.state.theme,
			subtitle: this.state.subtitle,
			subtitle2: this.state.subtitle2,
			subtitleDescription: this.state.subtitleDescription,
			subtitleDescription2: this.state.subtitleDescription2,
			subtitleDescription3: this.state.subtitleDescription3,
			description: this.state.description,
			liensTitle: this.state.liensTitle,
			liensTitle2: this.state.liensTitle2,
			liensUrl: this.state.liensUrl,
			liensUrl2: this.state.liensUrl2
		}

		this.props.updateOrientation(this.props.match.params.id, Data)
		window.location.assign('/')
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
										1er sections
									</h3>
									<TextFieldGroup
										label="Title"
										name="title"
										value={this.state.title}
										onChange={this.onChange}
									/>
									<TextFieldGroup
										label="Theme"
										name="theme"
										value={this.state.theme}
										onChange={this.onChange}
									/>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="description"
											className={classes.margin}
											name="description"
											inputProps={{
												rows: 5
											}}
											fullWidth
											multiline
											value={this.state.description}
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
											label="subtitleDescription"
											className={classes.margin}
											name="subtitleDescription"
											inputProps={{
												rows: 5
											}}
											fullWidth
											multiline
											value={this.state.subtitleDescription}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
									<br /> <br />
									<MuiThemeProvider theme={theme}>
										<TextField
											label="subtitleDescription2"
											className={classes.margin}
											name="subtitleDescription2"
											inputProps={{
												rows: 4
											}}
											fullWidth
											multiline
											value={this.state.subtitleDescription2}
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
											label="subtitleDescription3"
											className={classes.margin}
											name="subtitleDescription3"
											inputProps={{
												rows: 4
											}}
											fullWidth
											multiline
											value={this.state.subtitleDescription3}
											onChange={this.onChange}
										/>
									</MuiThemeProvider>
								</Card>
								<br />
								<br />
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
										4th sections
									</h3>
									<TextFieldGroup
										type="liensTitle"
										className={classes.margin}
										name="liensTitle"
										value={this.state.liensTitle}
										onChange={this.onChange}
									/>
									<TextFieldGroup
										type="liensUrl"
										className={classes.margin}
										name="liensUrl"
										value={this.state.liensUrl}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="liensTitle2"
										className={classes.margin}
										name="liensTitle2"
										value={this.state.liensTitle2}
										onChange={this.onChange}
									/>
									<br /> <br />
									<TextFieldGroup
										type="liensUrl2"
										className={classes.margin}
										name="liensUrl2"
										value={this.state.liensUrl2}
										onChange={this.onChange}
									/>
								</Card>
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
		)
	}
}

Modal.propTypes = {
	orientation: PropTypes.object.isRequired,
	getCurrentOrientation_id: PropTypes.func.isRequired,
	updateOrientation: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	orientation: state.orientation,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentOrientation_id, updateOrientation })(withRouter(Modal))
)
