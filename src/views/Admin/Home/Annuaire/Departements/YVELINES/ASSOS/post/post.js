import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// @material-ui/icons
import Mail from '@material-ui/icons/Mail'
// @material-ui/core components
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'
// core components
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
import { postAssos } from 'actions/YVELINESActions'

class PostYVELINESASSOS extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displaySocialInputs: false,
			name: '',
			rue: '',
			compl: '',
			postcode: '',
			phone: '',
			email: '',
			web: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
		if (nextProps.auth.association) {
			const association = nextProps.auth.association

			this.setState({
				name: association.name,
				rue: association.rue,
				email: association.email,
				phone: association.phone,
				compl: association.compl,
				postcode: association.postcode,
				web: association.web
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			name: this.state.name,
			rue: this.state.rue,
			email: this.state.email,
			phone: this.state.phone,
			compl: this.state.compl,
			postcode: this.state.postcode,
			web: this.state.web
		}

		this.props.postAssos(Data, this.props.history)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		const { errors } = this.state
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
										<h1>Ajouter une structure</h1>
									</div>
									<form onSubmit={this.onSubmit}>
										<TextFieldGroup
											label="Nom de la structure"
											placeholder="Nom de la structure"
											name="name"
											value={this.state.name}
											onChange={this.onChange}
											error={errors.AnnuaireName}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<i class="material-icons">location_city</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br /> <br />
										<TextFieldGroup
											label="rue"
											placeholder="rue"
											className={classes.margin}
											name="rue"
											value={this.state.rue}
											onChange={this.onChange}
											error={errors.AnnuaireAdresse}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<i class="material-icons">location_on</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br /> <br />
										<br /> <br />
										<TextFieldGroup
											label="complementaire"
											placeholder="compl"
											className={classes.margin}
											name="compl"
											value={this.state.compl}
											onChange={this.onChange}
											error={errors.AnnuaireAdresse}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<i class="material-icons">location_on</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br /> <br />
										<br /> <br />
										<TextFieldGroup
											label="code postal et ville"
											placeholder="postcode "
											className={classes.margin}
											name="postcode"
											value={this.state.postcode}
											onChange={this.onChange}
											error={errors.AnnuaireAdresse}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<i class="material-icons">location_on</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br /> <br />
										<br /> <br />
										<TextFieldGroup
											label="web"
											placeholder="web"
											className={classes.margin}
											name="web"
											value={this.state.web}
											onChange={this.onChange}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<i class="material-icons">location_on</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br /> <br />
										<TextFieldGroup
											label="email"
											placeholder="email"
											type="email"
											className={classes.margin}
											name="email"
											value={this.state.email}
											onChange={this.onChange}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															{' '}
															<Mail />
														</div>
													</InputAdornment>
												)
											}}
										/>
										<br /> <br />
										<TextFieldGroup
											label="Telephone de service"
											placeholder="phone"
											className={classes.margin}
											name="phone"
											value={this.state.phone}
											onChange={this.onChange}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<div>
															<i class="material-icons">settings_phone</i>
														</div>
													</InputAdornment>
												)
											}}
										/>
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

PostYVELINESASSOS.propTypes = {
	association: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	association: state.association,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { postAssos })(withRouter(PostYVELINESASSOS))
)
