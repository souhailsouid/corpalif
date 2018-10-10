import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'
import GroupWork from '@material-ui/icons/GroupWork'
import Airplay from '@material-ui/icons/Airplay'
import LocationOn from '@material-ui/icons/LocationOn'
import Extension from '@material-ui/icons/Extension'
import ChildFriendly from '@material-ui/icons/ChildFriendly'
import WatchLater from '@material-ui/icons/WatchLater'
import LocationCity from '@material-ui/icons/LocationCity'
import Share from '@material-ui/icons/Share'
import Home from '@material-ui/icons/Home'
import Hotel from '@material-ui/icons/Hotel'
import Group from '@material-ui/icons/Group'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'
import Example from '../../suggest'
import iphone from 'assets/img/sections/iphone.png'
import iphone2 from 'assets/img/sections/iphone2.png'
import bg9 from 'assets/img/bg9.jpg'
import '../../style.css'
// cubic-bezier(0.23, 1, 0.32, 1)

function SectionFeatures({ ...props }) {
	const { classes, ...rest } = props

	return (
		<div>
			<div className="cd-section" {...rest}>
				<div className={classes.features5} style={{ border: '4px solid', color: '#cc4949' }}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={8}
							md={8}
							className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
						>
							<h2 className={classes.title}>L' offre de soins francilienne</h2>
						</GridItem>
						<div className={classes.container}>
							<GridContainer className={classes.gridContainer}>
								<GridItem xs={12} sm={4} className={classes.gridItem}>
									<InfoArea
										vertical
										className={classes.infoArea5}
										icon={LocationCity}
										title={
											<div>
												<h3 style={{ color: '#77be77' }}>25</h3> Unités de soins palliatifs
												(USP)
											</div>
										}
										iconColor="red"
									/>
								</GridItem>
								<GridItem xs={12} sm={4} className={classes.gridItem}>
									<InfoArea
										vertical
										className={classes.infoArea5}
										icon={Share}
										title={
											<div>
												<h3 style={{ color: '#77be77' }}>23</h3> Réseaux de soins palliatifs
											</div>
										}
										iconColor="red"
									/>
								</GridItem>

								<GridItem xs={12} sm={4} className={classes.gridItem}>
									<InfoArea
										vertical
										className={classes.infoArea5}
										icon={Home}
										title={
											<div>
												<h3 style={{ color: '#77be77' }}>15</h3> Structures d'hospitalisation à
												domicile
											</div>
										}
										iconColor="red"
									/>
								</GridItem>
							</GridContainer>

							<GridContainer className={classes.gridContainer}>
								<GridItem xs={12} sm={4} className={classes.gridItem} style={{ paddingLeft: 20 }}>
									<InfoArea
										vertical
										className={classes.infoArea5}
										icon={Hotel}
										title={
											<div>
												<h3
													style={{
														color: '#77be77'
													}}
												>
													747
												</h3>{' '}
												Lits identifiés soins palliatifs <br /> (USP)
											</div>
										}
										iconColor="red"
									/>
								</GridItem>
								<GridItem xs={12} sm={4} className={classes.gridItem}>
									<InfoArea
										vertical
										className={classes.infoArea5}
										icon={Group}
										title={
											<div>
												<h3 style={{ color: '#77be77' }}>72</h3> Équipes mobiles de soins
												palliatifs (HAD)
											</div>
										}
										iconColor="red"
									/>
								</GridItem>
								<GridItem xs={12} sm={4} className={classes.gridItem}>
									<InfoArea
										vertical
										className={classes.infoArea5}
										icon={SupervisedUserCircle}
										title={
											<div>
												<h3 style={{ color: '#77be77' }}>51</h3> Association de bénévoles <br />d'accompagnement
											</div>
										}
										iconColor="red"
									/>
								</GridItem>
							</GridContainer>

							<GridContainer className={classes.gridContainer} justify="center">
								<GridItem
									xs={12}
									sm={4}
									className={classes.gridItem}
									style={{
										borderStyle: 'solid',
										borderWidth: 1,
										borderTop: 'none',
										borderBottom: 'none'
									}}
								>
									<InfoArea
										vertical
										className={classes.infoArea5}
										icon={LocationCity}
										title={
											<div>
												<h3 style={{ color: '#77be77' }}>32</h3>
												Autres structures
											</div>
										}
										iconColor="red"
									/>
								</GridItem>
							</GridContainer>
						</div>
					</GridContainer>
				</div>
			</div>
			{/* Feature 5 END */}
		</div>
	)
}

export default withStyles(featuresStyle)(SectionFeatures)
