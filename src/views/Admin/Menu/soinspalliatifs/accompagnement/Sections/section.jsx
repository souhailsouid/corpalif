import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Build from '@material-ui/icons/Build'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoAreaBis.jsx'
import 'views/Header/Sections/style.css'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Button from 'components/CustomButtons/Button.jsx'
import Edit from '@material-ui/icons/Edit'
const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const Section = ({ accompagnement, classes }) => (
	<div className={classes.section}>
		<Grid item xs={4} style={{ textAlign: 'right' }}>
			<Link to={`/admin/menu/soinspalliatifs/accompagnement/update/${accompagnement._id}`}>{update}</Link>
		</Grid>
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={12}>
				<h2 className={classes.title}>{accompagnement.title}</h2>
				<h3 className={classes.title}>{accompagnement.title2}</h3>
				<h5 className={classes.description}>
					{accompagnement.description} <br /> {accompagnement.description2}
					<br />
					<br />
					<GridContainer justify="center">
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea title="" description="" icon={Build} iconColor="green" vertical />
						</GridItem>
					</GridContainer>
					<h3 className={classes.title} style={{ textAlign: 'center' }}>
						{accompagnement.subtitle}
					</h3>
					{accompagnement.subtitledescription}
				</h5>
			</GridItem>
		</GridContainer>
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={12}>
					<h3 className={classes.title} style={{ textAlign: 'center' }}>
						{accompagnement.subtitle2}
					</h3>
					<h5 className={classes.description}>{accompagnement.subtitledescription2}</h5>
				</GridItem>
				<GridContainer />
			</GridContainer>
			<GridContainer justify="center" style={{ marginTop: 40 }}>
				<GridItem xs={12} sm={8} md={8}>
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
						<br /> <b style={{ color: '#337467' }}> {accompagnement.linksTitle}</b>
						<br />
						<a href="{accompagnement.linksURL}" target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b> {accompagnement.linksURL}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}>{accompagnement.linksTitle2}</b>
						<a href={accompagnement.linksURL2} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								{' '}
								<b> {accompagnement.linksURL2} </b>
							</h5>
						</a>
					</h5>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(productStyle)(Section)
