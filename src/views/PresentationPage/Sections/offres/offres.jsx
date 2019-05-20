import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import { Link } from 'react-router-dom'
import projectsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx'
import '.././Articles/style.css'
const Offres = ({ adherent, classes }) => (
	<Link to={`/offres-d'emplois`}>
		<GridItem xs={6} sm={8} md={12}>
			<Card
				className={classes.cardTitleFull}
				style={{
					backgroundImage: `url(/api/${adherent.picture})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					height: '270px',
					width: '280px'
				}}
			>
				<CardBody background style={{ marginTop: '40px' }}>
					<br />

					<a href="#pablito" onClick={(e) => e.preventDefault()} className={classes.cardTitleWhite}>
						<h3 className={classes.cardTitleWhite}>Offres d'emplois</h3>
					</a>
				</CardBody>
			</Card>
		</GridItem>
	</Link>
)

export default withStyles(projectsStyle)(Offres)
