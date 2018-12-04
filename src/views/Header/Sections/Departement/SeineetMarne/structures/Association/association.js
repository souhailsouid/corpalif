import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoStructureArea.jsx'
import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import contactsStructureSection from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactstructureStyle.jsx'

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
						<GridItem xs={12} sm={10} md={4}>
							<img
								src="	http://image.noelshack.com/fichiers/2018/44/6/1541208299-carte771.gif"
								alt="carte seine et marne"
							/>
						</GridItem>
						<GridItem xs={12} sm={10} md={8}>
							<div>
								<h3
									className={classes.title}
									style={{
										color: 'rgb(51, 116, 103)',
										textAlign: 'center',
										justifyContent: 'space-between'
									}}
								>
									Corpalif
								</h3>
								<br />
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap'
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

									<InfoArea
										className={classes.infoArea}
										title="Responsable"
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

							<div>
								<h3
									className={classes.title}
									style={{ color: 'rgb(51, 116, 103)', textAlign: 'center' }}
								>
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
							<div>
								<h3
									className={classes.title}
									style={{ color: 'rgb(51, 116, 103)', textAlign: 'center' }}
								>
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
			</div>
		</div>
	)
}

export default withStyles(contactsStructureSection)(SectionStructure)
