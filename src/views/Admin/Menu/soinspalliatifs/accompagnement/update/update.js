import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Grid from '@material-ui/core/Grid'

// core components
import { MuiThemeProvider } from '@material-ui/core/styles'

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
import { getCurrentAccompagnement_id, updateAccompagnement } from 'actions/soinspalliatifs/AccompagnementActions'

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchModal: true,
			accompagnement: null,
			title: '',
			title2: '',
			description: '',
			description2: '',
			subtitle: '',
			subtitle2: '',
			subtitledescription: '',
			subtitledescription2: '',
			linksTitle: '',
			linksTitle2: '',
			linksURL: '',
			linksURL2: ''
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

		this.props.getCurrentAccompagnement_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.accompagnement.accompagnement) {
			const accompagnement = nextProps.accompagnement.accompagnement
			accompagnement.title = !isEmpty(accompagnement.title) ? accompagnement.title : ''
			accompagnement.title2 = !isEmpty(accompagnement.title2) ? accompagnement.title2 : ''
			accompagnement.description = !isEmpty(accompagnement.description) ? accompagnement.description : ''
			accompagnement.description2 = !isEmpty(accompagnement.description2) ? accompagnement.description2 : ''
			accompagnement.subtitle = !isEmpty(accompagnement.subtitle) ? accompagnement.subtitle : ''
			accompagnement.subtitle2 = !isEmpty(accompagnement.subtitle2) ? accompagnement.subtitle2 : ''
			accompagnement.subtitledescription = !isEmpty(accompagnement.subtitledescription)
				? accompagnement.subtitledescription
				: ''
			accompagnement.subtitledescription2 = !isEmpty(accompagnement.subtitledescription2)
				? accompagnement.subtitledescription2
				: ''
			accompagnement.linksTitle = !isEmpty(accompagnement.linksTitle) ? accompagnement.linksTitle : ''
			accompagnement.linksTitle2 = !isEmpty(accompagnement.linksTitle2) ? accompagnement.linksTitle2 : ''
			accompagnement.linksURL = !isEmpty(accompagnement.linksURL) ? accompagnement.linksURL : ''
			accompagnement.linksURL2 = !isEmpty(accompagnement.linksURL2) ? accompagnement.linksURL2 : ''

			// Set component fields state
			this.setState({
				title: accompagnement.title,
				title2: accompagnement.title2,
				description: accompagnement.description,
				description2: accompagnement.description2,
				subtitle: accompagnement.subtitle,
				subtitle2: accompagnement.subtitle2,
				subtitledescription: accompagnement.subtitledescription,
				subtitledescription2: accompagnement.subtitledescription2,
				linksTitle: accompagnement.linksTitle,
				linksTitle2: accompagnement.linksTitle2,
				linksURL: accompagnement.linksURL,
				linksURL2: accompagnement.linksURL2
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			title: this.state.title,
			title2: this.state.title2,
			description: this.state.description,
			description2: this.state.description2,
			subtitle: this.state.subtitle,
			subtitle2: this.state.subtitle2,
			subtitledescription: this.state.subtitledescription,
			subtitledescription2: this.state.subtitledescription2,
			linksTitle: this.state.linksTitle,
			linksTitle2: this.state.linksTitle2,
			linksURL: this.state.linksURL,
			linksURL2: this.state.linksURL2
		}

		this.props.updateAccompagnement(this.props.match.params.id, Data)
		window.location.assign('/admin/menu/soinspalliatifs/accompagnement/')
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
									label="title2"
									name="title2"
									value={this.state.title2}
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
								<br /> <br />
								<TextFieldGroup
									label="description2"
									name="description2"
									fullWidth
									multiline
									value={this.state.description2}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="subtitle"
									name="subtitle"
									fullWidth
									multiline
									value={this.state.subtitle}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="subtitledescription"
									name="subtitledescription"
									fullWidth
									multiline
									value={this.state.subtitledescription}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="subtitle2"
									name="subtitle2"
									fullWidth
									multiline
									value={this.state.subtitle2}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="subtitledescription2"
									name="subtitledescription2"
									fullWidth
									multiline
									value={this.state.subtitledescription2}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksTitle"
									name="linksTitle"
									fullWidth
									multiline
									value={this.state.linksTitle}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksURL"
									name="linksURL"
									fullWidth
									multiline
									value={this.state.linksURL}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksTitle2"
									name="linksTitle2"
									fullWidth
									multiline
									value={this.state.linksTitle2}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksURL2"
									name="linksURL2"
									fullWidth
									multiline
									value={this.state.linksURL2}
									onChange={this.onChange}
								/>
								<br /> <br />
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
	accompagnement: PropTypes.object.isRequired,
	getCurrentAccompagnement_id: PropTypes.func.isRequired,
	updateAccompagnement: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	accompagnement: state.accompagnement,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentAccompagnement_id, updateAccompagnement })(withRouter(Modal))
)
