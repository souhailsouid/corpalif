import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'

import { cardTitle, cardLink, cardSubtitle } from 'assets/jss/material-kit-pro-react.jsx'

const style = {
	cardTitle,
	cardLink,
	cardSubtitle
}

function CardExampleTitleTextLinks(props) {
	const { classes } = props
	return (
		<Card style={{ width: 'auto' }}>
			<CardBody>
				<h4 className={classes.cardTitle}>Card Title</h4>
				<h6 className={classes.cardSubtitle}>Card Subtitle</h6>
				<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#pablo" className={classes.cardLink} onClick={(e) => e.preventDefault()}>
					Card link
				</a>
				<a href="#pablo" className={classes.cardLink} onClick={(e) => e.preventDefault()}>
					Another link
				</a>
			</CardBody>
		</Card>
	)
}

export default withStyles(style)(CardExampleTitleTextLinks)
