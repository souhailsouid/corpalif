import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Edit from '@material-ui/icons/Edit'
// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Grid from '@material-ui/core/Grid'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'
import { Link } from 'react-router-dom'
import Button from 'components/CustomButtons/Button.jsx'

const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const Section = ({ legislation, classes }) => (
	<div className={classes.section}>
		<Grid item xs={4} style={{ textAlign: 'right' }}>
			<Link to={`/admin/menu/soinspalliatifs/legislation/update/${legislation._id}`}>{update}</Link>
		</Grid>
		<GridContainer justify="center">
			<GridItem xs={12} sm={8} md={8}>
				<h2 className={classes.title}>{legislation.title}</h2>
				<h4 className={classes.description}>{legislation.description}</h4>
			</GridItem>
		</GridContainer>
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={12}>
					<a href="{legislation.links} 
" target="_blank" style={{ color: '#999' }}>
						<h3 className={classes.title} style={{ textAlign: 'center' }}>
							<div className="linkGreen"> {legislation.subtitle}</div>

							<h5 className={classes.title} style={{ textAlign: 'center', marginTop: 0 }}>
								{legislation.subtitlebis}
							</h5>
						</h3>
					</a>
					<h4 className={classes.description}>{legislation.subtitledescription}</h4>
					<h4 className={classes.description}>{legislation.subtitledescriptionbis}</h4>
				</GridItem>
			</GridContainer>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={12}>
					<a
						href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000446240&categorieLien=id 
"
						target="_blank"
						style={{ color: '#999' }}
					>
						<h3 className={classes.title} style={{ textAlign: 'center' }}>
							<div className="linkGreen"> {legislation.subtitle2}</div>
							<h5 className={classes.title} style={{ textAlign: 'center', marginTop: 0 }}>
								{legislation.subtitle2bis}
							</h5>
						</h3>
					</a>

					<h4 className={classes.description}>{legislation.subtitledescription2}</h4>
				</GridItem>
			</GridContainer>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={12}>
					<a
						href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000446240&categorieLien=id 
"
						target="_blank"
						style={{ color: '#999' }}
					>
						<h3 className={classes.title} style={{ textAlign: 'center' }}>
							<div className="linkGreen"> {legislation.subtitle3}</div>
							<h5 className={classes.title} style={{ textAlign: 'center', marginTop: 0 }}>
								{legislation.subtitle3bis}
							</h5>
						</h3>
					</a>

					<h4 className={classes.description}>{legislation.subtitledescription3}</h4>
				</GridItem>
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
						<br />
						<b style={{ color: '#337467' }}> {legislation.linksTitle}</b>
						<br />
						<a href={legislation.linksURL} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b> {legislation.linksURL}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}> {legislation.linksTitle2}</b>
						<br />
						<a href={legislation.linksURL2} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b> {legislation.linksURL2}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}> {legislation.linksTitle3}</b>
						<br />
						<a href={legislation.linksURL3} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b> ({legislation.linksURL3}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}>{legislation.linksTitle4}</b>
						<a href={legislation.linksURL4} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b> {legislation.linksURL4} </b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}>{legislation.linksTitle5}</b>
						<br />
						<a href={legislation.linksURL5} target="_blank" style={{ color: '#999' }}>
							<h5 className="link">
								<b>{legislation.linksURL5} </b>
							</h5>
						</a>
					</h5>
				</GridItem>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(productStyle)(Section)
