import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
// @material-ui/icons
import Person from '@material-ui/icons/Person'
import Edit from '@material-ui/icons/Edit'
import Close from '@material-ui/icons/Close'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Info from 'components/Typography/Info.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'
import Button from 'components/CustomButtons/Button.jsx'

import { Link } from 'react-router-dom'
const get = [ { color: 'info', icon: Person } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const deleteButton = [ { color: 'danger', icon: Close } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const Formation = ({ formation, classes }) => (
	<div>
		<Card plain blog className={classes.card}>
			<GridContainer>
				<GridItem xs={12} sm={4} md={4}>
					<CardHeader image plain>
						<a href="#pablito" onClick={(e) => e.preventDefault()}>
							<img src={`/api/${formation.picture}`} alt="" />
						</a>
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${`/api/${formation.picture}`})`,
								opacity: '1'
							}}
						/>
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${`/api/${formation.picture}`})`,
								opacity: '1'
							}}
						/>
					</CardHeader>
				</GridItem>
				<GridItem xs={12} sm={8} md={8}>
					<Info>
						<h6 className={classes.cardCategory} style={{ color: 'rgb(16, 73, 73)' }}>
							{formation.theme}
						</h6>
					</Info>
					<h3 className={classes.cardTitle}>{formation.title}</h3>
					<p className={classes.description}>
						{formation.message}
						<br />
						<a
							href={`/formation/${formation._id}`}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: 'rgb(51, 116, 103)' }}
						>
							<i class="material-icons">library_books</i> <b> {formation.fileName} </b>
						</a>
					</p>
					<p className={classes.author}>
						par <b>Sarah LACROIX</b>
					</p>
					<Grid item xs={4} style={{ textAlign: 'right' }}>
						<Link to={`/admin/menu/formations/get/${formation._id}`}>{get}</Link>
						<Link to={`/admin/menu/formations/update/${formation._id}`}>{update}</Link>
						<Link to={`/admin/menu/formations/delete/${formation._id}`}>{deleteButton}</Link>
					</Grid>
				</GridItem>
			</GridContainer>
		</Card>
	</div>
)

export default withStyles(blogsStyle)(Formation)
