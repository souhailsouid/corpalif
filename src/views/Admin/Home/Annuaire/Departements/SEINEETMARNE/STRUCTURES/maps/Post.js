import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// @material-ui/core components
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

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
import { postHAD } from 'actions/maps/mapsSeineetMarneActions'

class PostSEINEETMARNESTRUCTURESMaps extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displaySocialInputs: false,
			name: '',
			long: '',
			lat: ''
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.mapsoin) {
			const mapsoin = nextProps.auth.mapsoin

			this.setState({
				name: mapsoin.name,
				long: mapsoin.long,
				lat: mapsoin.lat
			})
		}
	}

	onSubmit(e) {
		e.preventDefault()

		const Data = {
			name: this.state.name,
			long: this.state.long,
			lat: this.state.lat
		}

		this.props.postHAD(Data, this.props.history)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
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
										<h1>Ajouter une structure</h1>
									</div>
									<form onSubmit={this.onSubmit}>
										<TextFieldGroup
											label="Nom de la structure"
											placeholder="Nom de la structure"
											name="name"
											value={this.state.name}
											onChange={this.onChange}
										/>
										<br /> <br />
										<TextFieldGroup
											label="Long"
											placeholder="long"
											className={classes.margin}
											name="long"
											value={this.state.long}
											onChange={this.onChange}
										/>
										<br /> <br />
										<br /> <br />
										<TextFieldGroup
											label="lat"
											placeholder="lat"
											className={classes.margin}
											name="lat"
											value={this.state.lat}
											onChange={this.onChange}
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

PostSEINEETMARNESTRUCTURESMaps.propTypes = {
	mapsoin: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	mapsoin: state.mapsoin,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { postHAD })(withRouter(PostSEINEETMARNESTRUCTURESMaps))
)
