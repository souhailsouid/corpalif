import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import InfoSubscribers from './subscriberInfo.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import office2 from 'assets/img/examples/office2.jpg'
const Rencontre = ({ classes }) => (
	<div>
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={10}>
				<Card raised background style={{ backgroundImage: `url(${office2})` }}>
					<CardBody background>
						<h6 className={classes.cardCategory}>RESERVÉ INSCRITS</h6>
						<a href="#pablito" onClick={(e) => e.preventDefault()}>
							<h3 className={classes.cardTitleWhite}>Contenu des rencontres</h3>
						</a>
						<p className={classes.cardDescription}>Retrouvez les présentations des interventions</p>
						<InfoSubscribers />
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	</div>
)

export default withStyles(blogsStyle)(Rencontre)
