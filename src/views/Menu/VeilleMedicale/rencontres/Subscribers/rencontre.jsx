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

const Rencontre = ({ privateInfo, classes }) => (
	<div>
		<Card plain blog className={classes.card}>
			<GridContainer>
				<GridItem xs={12} sm={4} md={4}>
					<CardHeader image plain>
						<a href="#pablito" onClick={(e) => e.preventDefault()}>
							<img src={`/api/${privateInfo.picture}`} alt="" />
						</a>
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${`/api/${privateInfo.picture}`})`,
								opacity: '1'
							}}
						/>
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${`/api/${privateInfo.picture}`})`,
								opacity: '1'
							}}
						/>
					</CardHeader>
				</GridItem>
				<GridItem xs={12} sm={8} md={8}>
					<Info>
						<h6 className={classes.cardCategory} style={{ color: 'rgb(16, 73, 73)' }}>
							{privateInfo.theme}
						</h6>
					</Info>
					<h3 className={classes.cardTitle}>{privateInfo.title}</h3>
					<p className={classes.description}>
						{privateInfo.message}
						<br />
						<a
							href={`/#/menu/veillemedicale/nosrencontres/contenusprives/${privateInfo._id}`}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: 'rgb(51, 116, 103)' }}
						>
							<i class="material-icons">library_books</i> <b> {privateInfo.fileName} </b>
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

export default withStyles(blogsStyle)(Rencontre)
