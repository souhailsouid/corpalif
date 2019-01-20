import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Subject from '@material-ui/icons/Subject'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import projectsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx'

const Adherent = ({ adherent, classes }) => (
	<div className={classes.section} id="carousel">
		<div className={classes.container}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
					<GridItem xs={12} sm={12} md={12}>
						<Card
							raised
							background
							style={{
								backgroundImage: `url(/api/${adherent.picture})`
							}}
						>
							<CardBody background>
								<br />
								<br />
								<h6 className={classes.cardCategory}>ADHESION</h6>
								<a href="#pablito" onClick={(e) => e.preventDefault()}>
									<h3 className={classes.cardTitleWhite}>{adherent.title}</h3>
								</a>

								<Button round color="green">
									<Subject /> Adherer
								</Button>
							</CardBody>
							<div className="slick-caption" style={{ marginBottom: 50 }} />
						</Card>
					</GridItem>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(projectsStyle)(Adherent)
