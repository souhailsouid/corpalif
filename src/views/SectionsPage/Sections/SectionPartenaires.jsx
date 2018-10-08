import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx'

function SectionPartenaires({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.container}>
				{/* Feature 1 START */}
				<div className={classes.features1}>
					<GridContainer>
						<GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							<h2 className={classes.title}>Nos partenaires</h2>
						</GridItem>
					</GridContainer>
					<GridContainer
						justify="center"
						style={{ justifyContent: 'space-evenly', marginTop: 20, marginBottom: 20, display: 'flex' }}
					>
						<GridItem xs={12} sm={4} md={4}>
							<div>
								<img src="http://image.noelshack.com/fichiers/2018/40/7/1538911318-webp-net-resizeimage-4.jpg" />
							</div>{' '}
							<h4 style={{ fontWeight: 700 }}>Agence Régionale de Soins Palliatifs</h4>
							<p
								style={{
									color: '#999999',
									overflow: 'hidden',
									marginTop: 34,
									fontSize: 17
								}}
							>
								Agence régionale de santé a pour mission de mettre en place la politique de santé dans
								la région. Elle est compétente sur le champ de la santé dans sa globalité, de la
								prévention aux soins, à l’accompagnement médico-social.
							</p>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<div>
								<img src="http://image.noelshack.com/fichiers/2018/40/7/1538910983-webp-net-resizeimage-10.png" />
							</div>{' '}
							<h4 style={{ fontWeight: 700 }}>
								Société Française d'Accompagnement et de Soins Palliatifs
							</h4>
							<p
								style={{
									color: '#999999',
									overflow: 'hidden',
									marginTop: 0,
									fontSize: 17
								}}
							>
								Sa mission est de représenter, de stimuler et de faciliter l'action des personnes
								morales ou physiques impliquées dans le mouvement des soins palliatifs et de
								l'accompagnement des personnes en fin de vie.
							</p>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	)
}

export default withStyles(featuresStyle)(SectionPartenaires)
