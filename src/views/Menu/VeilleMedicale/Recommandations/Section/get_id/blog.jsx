import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Info from 'components/Typography/Info.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentRecommandation_id } from 'actions/menu/veillemedicale/recommandationActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
class SectionBlogs extends React.Component {
	componentDidMount() {
		this.props.getCurrentRecommandation_id(this.props.match.params.id)
	}

	render() {
		const { classes } = this.props
		const { ...rest } = this.props
		const { recommandation } = this.props.recommandation
		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Recommandations et outils
								</h2>
								<br />
								<Card plain blog className={classes.card}>
									<GridContainer>
										<GridItem xs={12} sm={4} md={4}>
											<CardHeader image plain>
												<a href="#pablito" onClick={(e) => e.preventDefault()}>
													<img
														src={`http://localhost:5000/api/${recommandation.picture}`}
														alt="..."
													/>
												</a>
												<div
													className={classes.coloredShadow}
													style={{
														backgroundImage: `url(${`http://localhost:5000/api/${recommandation.picture}`})`,
														opacity: '1'
													}}
												/>
												<div
													className={classes.coloredShadow}
													style={{
														backgroundImage: `url(${`http://localhost:5000/api/${recommandation.picture}`})`,
														opacity: '1'
													}}
												/>
											</CardHeader>
										</GridItem>
										<GridItem xs={12} sm={8} md={8}>
											<Info>
												<h6
													className={classes.cardCategory}
													style={{ color: 'rgb(16, 73, 73)' }}
												>
													{recommandation.theme}
												</h6>
											</Info>
											<h3 className={classes.cardTitle}>{recommandation.title}</h3>
											<p className={classes.description}>
												{recommandation.message}
												<br />
												<a
													href={`http://localhost:5000/api/${recommandation.file}`}
													style={{ color: 'rgb(51, 116, 103)' }}
												>
													<i class="material-icons">library_books</i>

													<b> {recommandation.fileName} </b>
												</a>
											</p>
											<p className={classes.author}>
												par <b>Sarah LACROIX</b>
											</p>
										</GridItem>
									</GridContainer>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

SectionBlogs.propTypes = {
	getCurrentRecommandation_id: PropTypes.func.isRequired,
	recommandation: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	recommandation: state.recommandation
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentRecommandation_id })(withRouter(SectionBlogs))
)
