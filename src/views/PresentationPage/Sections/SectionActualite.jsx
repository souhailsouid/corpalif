import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// import Card from '@material-ui/core/Card'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import SectionArticles from './Articles/SectionArticle'
import SectionArticle2 from './Articles/SectionArticle2'
import SectionOffres from './offres/SectionOffres'
import PropTypes from 'prop-types'

// import './css/style.css'
class SectionActualite extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.section} id="carousel">
				<div className={classes.container}>
					<div className={classes.title}>
						<div>
							<hr />
							<span
								style={{
									textDecoration: 'none',
									fontFamily: 'Product Sans,Arial,sans-serif',
									fontSize: '22px',

									top: '-1.5px',
									verticalAlign: 'middle',
									marginLeft: '20px'
								}}
							>
								Derniers articles
							</span>
						</div>
					</div>
					<br />

					<GridContainer>
						<GridItem
							xs={12}
							sm={8}
							md={4}
							className={classes.marginAuto}
							style={{
								display: 'flex',
								flexWrap: 'wrap'
							}}
						>
							<SectionArticles />
						</GridItem>
						<GridItem
							xs={12}
							sm={8}
							md={4}
							className={classes.marginAuto}
							style={{
								display: 'flex',
								flexWrap: 'wrap'
							}}
						>
							<SectionArticle2 />
						</GridItem>

						<div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
							<GridContainer>
								<GridItem xs={12} sm={12} md={12}>
									<SectionOffres />
								</GridItem>
							</GridContainer>
						</div>
					</GridContainer>
					<hr />
				</div>
			</div>
		)
	}
}

SectionActualite.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(carouselStyle)(SectionActualite)
