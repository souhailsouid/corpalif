import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

import AccountBalance from '@material-ui/icons/AccountBalance'
import CardTravel from '@material-ui/icons/CardTravel'

// core components
import Edit from '@material-ui/icons/Edit'
import SectionAdherer from './SectionsAdherer'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoAreaBis.jsx'
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
const Section = ({ adherentPage, classes }) => (
	<div className={classes.section}>
		<Grid item xs={4} style={{ textAlign: 'right' }}>
			<Link to={`/admin/menu/coordinationregionale/adherer/update/${adherer._id}`}>{update}</Link>
		</Grid>
		<GridContainer justify="center">
			<GridItem xs={12} sm={8} md={8}>
				<h1 className={classes.title}>{adherentPage.title}</h1>
				<h4 className={classes.description}>{adherentPage.theme}</h4>
			</GridItem>
		</GridContainer>

		<div>
			<h2 className={classes.title} style={{ textAlign: 'center' }}>
				{adherentPage.subtitle}
			</h2>
			<GridContainer justify="center" justifyContent="stretch">
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle}
						description={adherentPage.InfoAreaDescription}
						icon={AccountBalance}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle2}
						description={adherentPage.InfoAreaDescription2}
						icon={CardTravel}
						iconColor="green"
						vertical
					/>
				</GridItem>
			</GridContainer>
		</div>

		<div>
			<h2 className={classes.title} style={{ textAlign: 'center' }}>
				{adherentPage.subtitle2}
			</h2>
			<GridContainer>
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle3}
						description={adherentPage.InfoAreaDescription3}
						icon={AccountBalance}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={6}>
					<InfoArea
						title={adherentPage.InfoAreaTitle4}
						description={adherentPage.InfoAreaDescription4}
						icon={CardTravel}
						iconColor="green"
						vertical
					/>
				</GridItem>
			</GridContainer>
			<SectionAdherer />
		</div>
	</div>
)

export default withStyles(productStyle)(Section)
