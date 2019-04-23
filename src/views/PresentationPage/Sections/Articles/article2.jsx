import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
// import Agenda2 from'./agenda2'
import { Link } from 'react-router-dom'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'

import './style.css'

const Article2 = ({ recommandation, classes }) => (
	<Link to={`/#/menu/veillemedicale/recommandation&outils/`}>
		<Card className="card">
			<div style={{ display: 'flex' }}>
				<img
					style={{ height: '110px', width: '35%', display: 'flex', margin: 'auto', marginLeft: '10px' }}
					className={classes.imgCardTop}
					src={`/api/${recommandation.picture}`}
					alt="Card-img-cap"
				/>
				<CardBody>
					<b>
						<p style={{ color: 'rgb(51, 116, 103' }}>{recommandation.theme}</p>
					</b>
					<p>{recommandation.title.substr(0, 13)}...</p>

					<p>
						<i class="material-icons" style={{ fontSize: '18px' }}>
							book
						</i>{' '}
						Veille medicale
					</p>
				</CardBody>
			</div>
		</Card>
	</Link>
)

export default withStyles(notificationsStyles)(Article2)
