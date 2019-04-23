import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
import Tooltip from '@material-ui/core/Tooltip'
// core components
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import PropTypes from 'prop-types'
import notificationsStyles from 'assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.jsx'
// import Agenda2 from'./agenda2'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import Book from '@material-ui/icons/Book'
import imagesStyles from 'assets/jss/material-kit-pro-react/imagesStyles.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import { Link } from 'react-router-dom'
import './style.css'
const style = {
	...imagesStyles
}
const Article1 = ({ actualite, classes }) => (
	<Link to={`/#/menu/veillemedicale/actualites`}>
		<Card className="card">
			<div style={{ display: 'flex' }}>
				<img
					style={{ height: '110px', width: '35%', display: 'flex', margin: 'auto', marginLeft: '10px' }}
					className={classes.imgCardTop}
					src={`/api/${actualite.picture}`}
					alt="Card-img-cap"
				/>
				<CardBody>
					<b>
						<p style={{ color: 'rgb(51, 116, 103' }}>{actualite.theme}</p>
					</b>
					<p>{actualite.title.substr(0, 13)}...</p>
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

export default withStyles(notificationsStyles)(Article1)
