import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import GroupWork from '@material-ui/icons/GroupWork'
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver'
import Healing from '@material-ui/icons/Healing'
import PeopleOutline from '@material-ui/icons/PeopleOutline'
import Dehaze from '@material-ui/icons/Dehaze'
import Room from '@material-ui/icons/Room'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoAreaBis.jsx'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from 'components/CustomButtons/Button.jsx'
import Edit from '@material-ui/icons/Edit'
const update = [ { color: 'success', icon: Edit } ].map((prop, key) => {
	return (
		<Button round justIcon size="sm" color={prop.color} key={key}>
			<prop.icon />
		</Button>
	)
})
const Section = ({ demarche, classes }) => (
	<div className={classes.section}>
		<Grid item xs={4} style={{ textAlign: 'right' }}>
			<Link to={`/admin/menu/soinspalliatifs/demarche/update/${demarche._id}`}>{update}</Link>
		</Grid>
		<GridContainer justify="center">
			<GridItem xs={12} sm={8} md={8}>
				<h1 className={classes.title}>{demarche.title}</h1>
				<h4 className={classes.description}>
					{demarche.description}
					<br /> <i>{demarche.description2}</i>
				</h4>
			</GridItem>
		</GridContainer>
		<div>
			<GridContainer>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={demarche.InfoAreaTitle}
						description={demarche.InfoAreaDescription}
						icon={PeopleOutline}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={demarche.InfoAreaTitle2}
						description={demarche.InfoAreaDescription2}
						icon={Dehaze}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={demarche.InfoAreaTitle3}
						description={demarche.InfoAreaDescription3}
						icon={Room}
						iconColor="green"
						vertical
					/>
				</GridItem>
			</GridContainer>
			<h3 className={classes.title} style={{ textAlign: 'center' }}>
				{demarche.subtitle}
			</h3>
			<GridContainer>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={demarche.InfoAreaTitle4}
						description={demarche.InfoAreaDescription4}
						icon={Healing}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={demarche.InfoAreaTitle5}
						description={demarche.InfoAreaDescription5}
						icon={GroupWork}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={demarche.InfoAreaTitle6}
						description={demarche.InfoAreaDescription6}
						icon={RecordVoiceOver}
						iconColor="green"
						vertical
					/>
				</GridItem>
			</GridContainer>

			<br />
			<br />
			<h5 className={classes.description} style={{ justifyContent: 'left', textAlign: 'left' }} justify="left">
				<b style={{ color: '#000000', textAlign: 'left', display: 'flex' }}>
					<i class="material-icons">link</i>

					<b style={{ marginLeft: 10 }}> Liens utiles</b>
				</b>
				<br />
				<br /> <b style={{ color: '#337467' }}> {demarche.linksTitle}</b>
				<br />
				<a href={demarche.linksURL} target="_blank" style={{ color: '#999' }}>
					<h5 className="link">
						<b> {demarche.linksURL}</b>
					</h5>
				</a>
				<b style={{ color: '#337467' }}>{demarche.linksTitle2}</b>
				<a href={demarche.linksURL2} target="_blank" style={{ color: '#999' }}>
					<h5 className="link">
						{' '}
						<b> {demarche.linksURL2} </b>
					</h5>
				</a>
			</h5>
		</div>
	</div>
)

export default withStyles(productStyle)(Section)
