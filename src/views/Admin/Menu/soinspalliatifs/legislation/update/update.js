import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Grid from '@material-ui/core/Grid'

// core components
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

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
import { getCurrentLegislation_id, updateLegislation } from 'actions/soinspalliatifs/LegislationActions'
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
			legislation: null,

			title: '',
			description: '',
			subtitle: '',
			subtitlebis: '',
			subtitledescription: '',
			subtitledescriptionbis: '',
			subtitle2: '',
			subtitle2bis: '',
			subtitledescription2: '',
			subtitle3: '',
			subtitle3bis: '',
			subtitledescription3: '',
			subtitle3descriptionbis: '',
			linksTitle: '',
			linksTitle2: '',
			linksTitle3: '',
			linksTitle4: '',
			linksTitle5: '',
			linksURL: '',
			linksURL2: '',
			linksURL3: '',
			linksURL4: '',
			linksURL5: ''
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

		this.props.getCurrentLegislation_id(this.props.match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.legislation.legislation) {
			const legislation = nextProps.legislation.legislation
			legislation.title = !isEmpty(legislation.title) ? legislation.title : ''
			legislation.description = !isEmpty(legislation.description) ? legislation.description : ''
			legislation.subtitle = !isEmpty(legislation.subtitle) ? legislation.subtitle : ''
			legislation.subtitlebis = !isEmpty(legislation.subtitlebis) ? legislation.subtitlebis : ''
			legislation.subtitledescription = !isEmpty(legislation.subtitledescription)
				? legislation.subtitledescription
				: ''
			legislation.subtitledescriptionbis = !isEmpty(legislation.subtitledescriptionbis)
				? legislation.subtitledescriptionbis
				: ''
			legislation.subtitle2 = !isEmpty(legislation.subtitle2) ? legislation.subtitle2 : ''
			legislation.subtitle2bis = !isEmpty(legislation.subtitle2bis) ? legislation.subtitle2bis : ''
			legislation.subtitledescription2 = !isEmpty(legislation.subtitledescription2)
				? legislation.subtitledescription2
				: ''
			legislation.subtitle3 = !isEmpty(legislation.subtitle3) ? legislation.subtitle3 : ''
			legislation.subtitle3bis = !isEmpty(legislation.subtitle3bis) ? legislation.subtitle3bis : ''
			legislation.subtitledescription3 = !isEmpty(legislation.subtitledescription3)
				? legislation.subtitledescription3
				: ''
			legislation.subtitle3descriptionbis = !isEmpty(legislation.subtitle3descriptionbis)
				? legislation.subtitle3descriptionbis
				: ''
			legislation.linksTitle = !isEmpty(legislation.linksTitle) ? legislation.linksTitle : ''
			legislation.linksTitle2 = !isEmpty(legislation.linksTitle2) ? legislation.linksTitle2 : ''
			legislation.linksTitle3 = !isEmpty(legislation.linksTitle3) ? legislation.linksTitle3 : ''
			legislation.linksTitle4 = !isEmpty(legislation.linksTitle4) ? legislation.linksTitle4 : ''
			legislation.linksTitle5 = !isEmpty(legislation.linksTitle5) ? legislation.linksTitle5 : ''
			legislation.linksURL = !isEmpty(legislation.linksURL) ? legislation.linksURL : ''
			legislation.linksURL2 = !isEmpty(legislation.linksURL2) ? legislation.linksURL2 : ''
			legislation.linksURL3 = !isEmpty(legislation.linksURL3) ? legislation.linksURL3 : ''
			legislation.linksURL4 = !isEmpty(legislation.linksURL4) ? legislation.linksURL4 : ''
			legislation.linksURL5 = !isEmpty(legislation.linksURL5) ? legislation.linksURL5 : ''

			// Set component fields state
			this.setState({
				title: legislation.title,
				description: legislation.description,
				subtitle: legislation.subtitle,
				subtitlebis: legislation.subtitlebis,
				subtitledescription: legislation.subtitledescription,
				subtitledescriptionbis: legislation.subtitledescriptionbis,
				subtitle2: legislation.subtitle2,
				subtitle2bis: legislation.subtitle2bis,
				subtitledescription2: legislation.subtitledescription2,
				subtitle3: legislation.subtitle3,
				subtitle3bis: legislation.subtitle3bis,
				subtitledescription3: legislation.subtitledescription3,
				subtitle3descriptionbis: legislation.subtitle3descriptionbis,
				linksTitle: legislation.linksTitle,
				linksTitle2: legislation.linksTitle2,
				linksTitle3: legislation.linksTitle3,
				linksTitle4: legislation.linksTitle4,
				linksTitle5: legislation.linksTitle5,
				linksURL: legislation.linksURL,
				linksURL2: legislation.linksURL2,
				linksURL3: legislation.linksURL3,
				linksURL4: legislation.linksURL4,
				linksURL5: legislation.linksURL5
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			title: this.state.title,
			description: this.state.description,
			subtitle: this.state.subtitle,
			subtitlebis: this.state.subtitlebis,
			subtitledescription: this.state.subtitledescription,
			subtitledescriptionbis: this.state.subtitledescriptionbis,
			subtitle2: this.state.subtitle2,
			subtitle2bis: this.state.subtitle2bis,
			subtitledescription2: this.state.subtitledescription2,
			subtitle3: this.state.subtitle3,
			subtitle3bis: this.state.subtitle3bis,
			subtitledescription3: this.state.subtitledescription3,
			subtitle3descriptionbis: this.state.subtitle3descriptionbis,
			linksTitle: this.state.linksTitle,
			linksTitle2: this.state.linksTitle2,
			linksTitle3: this.state.linksTitle3,
			linksTitle4: this.state.linksTitle4,
			linksTitle5: this.state.linksTitle5,
			linksURL: this.state.linksURL,
			linksURL2: this.state.linksURL2,
			linksURL3: this.state.linksURL3,
			linksURL4: this.state.linksURL4,
			linksURL5: this.state.linksURL5
		}

		this.props.updateLegislation(this.props.match.params.id, Data)
		window.location.assign('/admin/menu/soinspalliatifs/legislation/')
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
									label="subtitlebis"
									name="subtitlebis"
									fullWidth
									multiline
									value={this.state.subtitlebis}
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
									label="subtitledescriptionbis"
									name="subtitledescriptionbis"
									fullWidth
									multiline
									value={this.state.subtitledescriptionbis}
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
									label="subtitle2bis"
									name="subtitle2bis"
									fullWidth
									multiline
									value={this.state.subtitle2bis}
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
									label="subtitle3"
									name="subtitle3"
									fullWidth
									multiline
									value={this.state.subtitle3}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="subtitle3bis"
									name="subtitle3bis"
									fullWidth
									multiline
									value={this.state.subtitle3bis}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="subtitledescription3"
									name="subtitledescription3"
									fullWidth
									multiline
									value={this.state.subtitledescription3}
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
								<TextFieldGroup
									label="linksTitle3"
									name="linksTitle3"
									fullWidth
									multiline
									value={this.state.linksTitle3}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksURL3"
									name="linksURL3"
									fullWidth
									multiline
									value={this.state.linksURL3}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksTitle4"
									name="linksTitle4"
									fullWidth
									multiline
									value={this.state.linksTitle4}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksURL4"
									name="linksURL4"
									fullWidth
									multiline
									value={this.state.linksURL4}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksTitle5"
									name="linksTitle5"
									fullWidth
									multiline
									value={this.state.linksTitle5}
									onChange={this.onChange}
								/>
								<br /> <br />
								<TextFieldGroup
									label="linksURL5"
									name="linksURL5"
									fullWidth
									multiline
									value={this.state.linksURL5}
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
	legislation: PropTypes.object.isRequired,
	getCurrentLegislation_id: PropTypes.func.isRequired,
	updateLegislation: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	legislation: state.legislation,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { getCurrentLegislation_id, updateLegislation })(withRouter(Modal))
)
