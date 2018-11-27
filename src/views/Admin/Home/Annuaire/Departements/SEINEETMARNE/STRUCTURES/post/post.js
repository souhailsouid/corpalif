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
import { postHAD } from 'actions/HAUTDESEINEActions'

class PostSEINEETMARNESTRUCTURES extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displaySocialInputs: false,
			name: '',
			adresse: '',
			phone: '',
			email: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
		if (nextProps.auth.soin) {
			const soin = nextProps.auth.soin

			this.setState({
				name: soin.name,
				adresse: soin.adresse,
				email: soin.email,
				phone: soin.phone
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			name: this.state.name,
			adresse: this.state.adresse,
			email: this.state.email,
			phone: this.state.phone
		}

		this.props.postHAD(Data, this.props.history)
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
											placeholder="adresse"
											className={classes.margin}
											name="adresse"
											value={this.state.adresse}
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
										<TextFieldGroup
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

PostSEINEETMARNESTRUCTURES.propTypes = {
	soin: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	soin: state.soin,
	errors: state.errors,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { postHAD })(withRouter(PostSEINEETMARNESTRUCTURES))
)
