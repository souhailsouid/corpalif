import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Edit from '@material-ui/icons/Edit'
import 'views/Header/Sections/style.css'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Button from 'components/CustomButtons/Button.jsx'
const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})

const Section = ({ orientation, classes }) => (
	<div className={classes.section}>
		<Grid item xs={4} style={{ textAlign: 'right' }}>
			<Link to={`/admin/menu/coordinationregionale/orientation/update/${orientation._id}`}>{update}</Link>
		</Grid>
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={8}>
				<h2 className={classes.title}>{orientation.title}</h2>
				<h3 className={classes.title}>{orientation.theme}</h3>
				<h5 className={classes.description}>{orientation.theme}</h5>
			</GridItem>
		</GridContainer>
		<br />
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={12}>
				<h3 className={classes.title} style={{ textAlign: 'center' }}>
					{orientation.subtitle}
				</h3>
				<h5 className={classes.description}>{orientation.subtitleDescription}</h5>
			</GridItem>
		</GridContainer>

		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={12}>
					<h3 className={classes.title} style={{ textAlign: 'center' }}>
						{orientation.subtitle2}
					</h3>
					<h5 className={classes.description}>{orientation.subtitleDescription}</h5>
				</GridItem>
				<GridContainer />
			</GridContainer>
			<GridContainer justify="center" style={{ marginTop: 40 }}>
				<GridItem xs={12} sm={12} md={12}>
					<h5
						className={classes.description}
						style={{ justifyContent: 'left', textAlign: 'left' }}
						justify="left"
					>
						<b style={{ color: '#000000', textAlign: 'left', display: 'flex' }}>
							<i class="material-icons">link</i>

							<b style={{ marginLeft: 10 }}> Liens utiles</b>
						</b>
						<br />
						<br /> <b style={{ color: '#337467' }}> {orientation.liensTitle}</b>
						<br />
						<a href={orientation.liensUrl} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b> {orientation.liensUrl}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}>{orientation.liensTitle}</b>
						<a href={orientation.liensUrl2} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								{' '}
								<b> {orientation.liensUrl2} </b>
							</h5>
						</a>
					</h5>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(productStyle)(Section)
