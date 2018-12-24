import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Airplay from '@material-ui/icons/Airplay'
import MicNone from '@material-ui/icons/MicNone'
import AccountBalance from '@material-ui/icons/AccountBalance'
import CardTravel from '@material-ui/icons/CardTravel'
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoAreaBis.jsx'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

const Section = ({ corpalif, classes }) => (
	<div className={classes.section}>
		<GridContainer justify="center">
			<GridItem xs={12} sm={8} md={8}>
				<h1 className={classes.title}>{corpalif.title} </h1>
				<h4 className={classes.description}>
					{corpalif.theme}

					<br />
					{corpalif.text}
				</h4>
			</GridItem>
		</GridContainer>
		<div>
			<h3 className={classes.title} style={{ textAlign: 'center' }}>
				{corpalif.subtitle}
			</h3>
			<GridContainer>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={corpalif.InfoAreaTitle}
						description={corpalif.InfoAreaDescription}
						icon={AccountBalance}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={corpalif.InfoAreaTitle2}
						description={corpalif.InfoAreaDescription2}
						icon={CardTravel}
						iconColor="green"
						vertical
					/>
				</GridItem>
				<GridItem xs={12} sm={4} md={4}>
					<InfoArea
						title={corpalif.InfoAreaTitle3}
						description={corpalif.InfoAreaDescription3}
						icon={SettingsInputComponent}
						iconColor="green"
						vertical
					/>
				</GridItem>
			</GridContainer>
			<h3 className={classes.title} style={{ textAlign: 'center' }}>
				{corpalif.subtitle2}
			</h3>
			<div>
				<h5 className={classes.description} style={{ marginBottom: 0 }}>
					{corpalif.description}
					<br />
					{corpalif.paragraphe1}
				</h5>
				<h5 className={classes.description}>
					{corpalif.paragraphe2}
					<br />
					{corpalif.paragraphe3}
				</h5>
			</div>

			<h3
				className={classes.title}
				style={{
					textAlign: 'center',
					marginTop: 60,
					marginLeft: 'auto',
					marginRight: 'auto'
				}}
			>
				{corpalif.subtitle3}
			</h3>
			<GridContainer>
				<div
					style={{
						display: 'flex',
						marginTop: 'auto',
						padding: 0,
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
				>
					<GridItem xs={12} sm={6} md={12}>
						<InfoArea
							title={corpalif.InfoAreaTitle4}
							description={corpalif.InfoAreaDescription4}
							icon={MicNone}
							iconColor="red"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={6} md={12}>
						<InfoArea
							title={corpalif.InfoAreaTitle5}
							description={corpalif.InfoAreaDescription5}
							icon={Airplay}
							iconColor="red"
							vertical
						/>
					</GridItem>
				</div>
			</GridContainer>
		</div>
	</div>
)

export default withStyles(productStyle)(Section)
