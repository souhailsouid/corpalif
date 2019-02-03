import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Info from 'components/Typography/Info.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

const Recommandation = ({ recommandation, classes }) => (
	<div>
		<Card plain blog className={classes.card}>
			<GridContainer style={{ margin: 'auto' }}>
				<GridItem xs={12} sm={4} md={4}>
					<CardHeader image plain>
						<a href="#pablito" onClick={(e) => e.preventDefault()}>
							<img src={`/api/${recommandation.picture}`} alt="" />
						</a>
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${`/api/${recommandation.picture}`})`,
								opacity: '1'
							}}
						/>
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${`/api/${recommandation.picture}`})`,
								opacity: '1'
							}}
						/>
					</CardHeader>
				</GridItem>
				<GridItem xs={12} sm={8} md={8}>
					<Info>
						<h6 className={classes.cardCategory} style={{ color: 'rgb(16, 73, 73)' }}>
							{recommandation.theme}
						</h6>
					</Info>
					<h3 className={classes.cardTitle}>{recommandation.title}</h3>
					<p className={classes.description}>
						{recommandation.message}
						<br />
						<a
							href={`/#/menu/veillemedicale/recommandation&outils/${recommandation._id}`}
							style={{ color: 'rgb(51, 116, 103)' }}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="material-icons">library_books</i> <b> {recommandation.fileName} </b>
						</a>
					</p>
					<p className={classes.author}>
						par <b>Sarah LACROIX</b>
					</p>
				</GridItem>
			</GridContainer>
		</Card>
	</div>
)

export default withStyles(blogsStyle)(Recommandation)
