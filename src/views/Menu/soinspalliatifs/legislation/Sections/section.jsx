import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

const Section = ({ legislation, classes }) => (
	<div className={classes.section}>
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={12}>
				<h2 className={classes.title}>{legislation.title}</h2>
				<h4 className={classes.description}>{legislation.description}</h4>
			</GridItem>
		</GridContainer>
		<br /> <br />
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={4} md={8}>
					<i class="material-icons" style={{ fontSize: '80px', color: '#337467' }}>
						local_library
					</i>
				</GridItem>
				<br /> <br />
				<GridItem xs={12} sm={12} md={12}>
					<a href="{legislation.links} 
" target="_blank" rel="noopener noreferrer" style={{ color: '#999' }}>
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
						rel="noopener noreferrer"
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
						rel="noopener noreferrer"
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
						<a
							href={legislation.linksURL}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#999' }}
						>
							<h5 className="link">
								<b> {legislation.linksURL}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}> {legislation.linksTitle2}</b>
						<br />
						<a
							href={legislation.linksURL2}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#999' }}
						>
							<h5 className="link">
								<b> {legislation.linksURL2}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}> {legislation.linksTitle3}</b>
						<br />
						<a
							href={legislation.linksURL3}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#999' }}
						>
							<h5 className="link">
								<b> ({legislation.linksURL3}</b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}>{legislation.linksTitle4}</b>
						<a
							href={legislation.linksURL4}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#999' }}
						>
							<h5 className="link">
								<b> {legislation.linksURL4} </b>
							</h5>
						</a>
						<b style={{ color: '#337467' }}>{legislation.linksTitle5}</b>
						<br />
						<a
							href={legislation.linksURL5}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#999' }}
						>
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
