import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'
import GroupWork from '@material-ui/icons/GroupWork'
import Group from '@material-ui/icons/Group'
import Airplay from '@material-ui/icons/Airplay'
import LocationOn from '@material-ui/icons/LocationOn'
import Extension from '@material-ui/icons/Extension'
import Help from '@material-ui/icons/Help'
import WatchLater from '@material-ui/icons/WatchLater'
import Code from '@material-ui/icons/Code'
import FormatPaint from '@material-ui/icons/FormatPaint'
import Dashboard from '@material-ui/icons/Dashboard'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
import AccessTime from '@material-ui/icons/AccessTime'
import AttachMoney from '@material-ui/icons/AttachMoney'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoStructureArea.jsx'
import maps from 'assets/img/maps.png'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'
import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import contactsStructureSection from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactstructureStyle.jsx'
import iphone from 'assets/img/sections/iphone.png'
import iphone2 from 'assets/img/sections/iphone2.png'
import bg9 from 'assets/img/bg9.jpg'
import CardEvent from './cardEvent'
import Notifications from './snackBars'
import SectionNotifications from './ComponentsPage/Sections/SectionNotifications'
function SectionStructure({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			<div className={`${classes.contacts} ${classes.section}`}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={12} justify="center">
							<h2 className={classes.title} style={{ textAlign: 'center', color: '#cc4949' }}>
								Structure d'accompagnement en Seine et Marne
							</h2>
						</GridItem>
						<GridItem xs={12} sm={10} md={12}>
							<div>
								<h3 className={classes.title} style={{ color: 'rgb(51, 116, 103)', marginLeft: 100 }}>
									Corpalif
								</h3>
								<br />
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										justifyContent: 'center'
									}}
								>
									<InfoArea
										className={classes.infoArea}
										title="Adresse"
										description={
											<span>
												<b>
													{' '}
													108 avenue Emile Zola,
													<br /> 75015 Paris,
													<br /> France
												</b>
											</span>
										}
										icon={PinDrop}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Téléphone"
										description={
											<span>
												<b>
													Sarah LACROIX
													<br /> +40 762 321 762
												</b>
											</span>
										}
										icon={Phone}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Email"
										description={
											<span>
												<b>
													{' '}
													Sarah LACROIX
													<br /> corpalif@gmail.com
												</b>
											</span>
										}
										icon={Email}
									/>
								</div>
							</div>
						</GridItem>
						<GridItem xs={12} sm={10} md={12}>
							<div>
								<h3 className={classes.title} style={{ color: 'rgb(51, 116, 103)', marginLeft: 100 }}>
									SFAP
								</h3>
								<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
									<br />
									<InfoArea
										className={classes.infoArea}
										title="Adresse"
										description={
											<span>
												<b>
													{' '}
													108 avenue Emile Zola,
													<br /> 75015 Paris,
													<br /> France
												</b>
											</span>
										}
										icon={PinDrop}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Téléphone"
										description={
											<span>
												<b>
													Sarah LACROIX
													<br /> +40 762 321 762
												</b>
											</span>
										}
										icon={Phone}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Email"
										description={
											<span>
												<b>
													{' '}
													Sarah LACROIX
													<br /> corpalif@gmail.com
												</b>
											</span>
										}
										icon={Email}
									/>
								</div>
							</div>
						</GridItem>
						<GridItem xs={12} sm={10} md={12}>
							<div>
								<h3 className={classes.title} style={{ color: 'rgb(51, 116, 103)', marginLeft: 100 }}>
									ARS
								</h3>
								<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
									<br />
									<InfoArea
										className={classes.infoArea}
										title="Adresse"
										description={
											<span>
												<b>
													{' '}
													108 avenue Emile Zola,
													<br /> 75015 Paris,
													<br /> France
												</b>
											</span>
										}
										icon={PinDrop}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Téléphone"
										description={
											<span>
												<b>
													Sarah LACROIX
													<br /> +40 762 321 762
												</b>
											</span>
										}
										icon={Phone}
									/>
									<InfoArea
										className={classes.infoArea}
										title="Email"
										description={
											<span>
												<b>
													{' '}
													Sarah LACROIX
													<br /> corpalif@gmail.com
												</b>
											</span>
										}
										icon={Email}
									/>
								</div>
							</div>
						</GridItem>
					</GridContainer>
				</div>
				{/* Feature 2 END */}
			</div>
		</div>
	)
}

export default withStyles(contactsStructureSection)(SectionStructure)
